import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { myResultsLang } from '../../langs/userPagesLang';
import postFormToServer from '../../data/postFormToServer';
import Loading from '../helpers/Loading';
import Wave from '../helpers/Wave';
import Footer from '../footer/Footer';
import '../../styles/css/UserPages.css';

const MyResults = ({user, userLang}) => {
  const [results, setResults] = useState();
  const [error, setError] = useState();
  const [sortedResults, setSortedResults] = useState();
  const [prevSortField, setPrevSortField] = useState();

  useEffect(() => {
    const form = new FormData();
    form.append('token', user.token);

    postFormToServer('test/myresults', form)
    .then(reply => {
      if (reply.message === 'OK') {
        setResults(reply.results);
        setSortedResults(reply.results);
        setError('');
      } else {
        setError(reply.message);
      }
    })
    .catch(error => alert(error));
  }, [user]);

  const handleSort = (field) => {
    if (field === prevSortField) {
      setSortedResults([...sortedResults.reverse()]);
    } else {
      const newSort = [...results];
      switch (field) {
        case 'id' :
          newSort.sort((t1, t2) => t1.id.localeCompare(t2.id));
          break;
        case 'name' :
          newSort.sort((t1, t2) => t1.test_name[t1.test_name.hasOwnProperty(userLang) 
            ? userLang 
            : t1.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t1.test_name)[0]]
          .localeCompare(t2.test_name[t2.test_name.hasOwnProperty(userLang)
            ? userLang
            : t2.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t2.test_name)[0]])
          );
          break;
        case 'type' :
          newSort.sort((t1, t2) => myResultsLang[t1.type][userLang].localeCompare(myResultsLang[t2.type][userLang]));
          break;
        case 'date' :
          newSort.sort((t1, t2) => new Date(t1.pass_date) - new Date(t2.pass_date));
          break;
        case 'result' :
          newSort.sort((t1, t2) => t1.result - t2.result);
          break;
        default :
          newSort.sort((t1, t2) => t1[field].localeCompare(t2[field]));
      }

      setSortedResults(newSort);
      setPrevSortField(field);
    }
  }

  if (!sortedResults && !error) {
    return <Loading />
  }

  return (
    <div className="myPage">
      <header className="myPage__header">
        <Wave rotate="180deg"/>
      </header>

      <main className="myPage__main myPageMain glass glass--light">
        <div className="myPageMain__title">
          <h2 className="windowTitle">{myResultsLang.title[userLang]}</h2>
        </div>

        {error 
        && <div className="myPageMain__error">
          {myResultsLang[error][userLang]}  
        </div>}

        {sortedResults 
        && <div className="myPageMain__results myTable">
          <div className="myTable__thead myTable__thead--results">
            <p className="lr_inv mr_small" onClick={() => handleSort('id')}>{myResultsLang.result_id[userLang]}</p>
            <p className="" onClick={() => handleSort('date')}>{myResultsLang.date[userLang]}</p>
            <p className="" onClick={() => handleSort('name')}>{myResultsLang.test_name[userLang]}</p>
            <p className="lr_inv mr_inv" onClick={() => handleSort('type')}>{myResultsLang.test_type[userLang]}</p>
            <p className="lr_small mr_small" onClick={() => handleSort('result')}>{myResultsLang.user_result[userLang]}</p>
          </div>
          {sortedResults.map(result => (
            <Link
              key={result.id}
              className="myTable__trow myTable__trow--results" 
              to={`/result${result.id}`}
            >
              <p className="myTable__trow--id lr_inv mr_xsmall">{result.id}</p>
              <p className="myTable__trow--date">{new Date(result.pass_date).toLocaleDateString(userLang === 'ua' || userLang === 'be' ? 'ru' : userLang)}</p>
              <p className="myTable__trow--name">{result.test_name[result.test_name.hasOwnProperty(userLang) ? userLang : result.test_name.hasOwnProperty('en') ? 'en' : Object.keys(result.test_name)[0]]}</p>
              <p className="myTable__trow--type lr_inv mr_inv">{myResultsLang[result.type][userLang]}</p>
              <p className="myTable__trow--result">{result.result / 100}%</p>
            </Link>
          ))}
        </div>}
      </main>

      <footer className="myPage__footer">
        <Footer />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user : state.user,
  userLang : state.userLang,
});

export default connect(mapStateToProps)(MyResults);