import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from '../helpers/Loading';
import postFormToServer from '../../data/postFormToServer';
import { myUsersLang } from '../../langs/userPagesLang';
import Wave from '../helpers/Wave';
import Footer from '../footer/Footer';

const MyUsers = ({ user, userLang }) => {
  const [results, setResults] = useState();
  const [error, setError] = useState();
  const [sortedResults, setSortedResults] = useState();
  const [prevSortField, setPrevSortField] = useState();

  useEffect(() => {
    if (user.token) {
      const form = new FormData();
      form.append('token', user.token);
      postFormToServer('test/usersresults', form)
      .then(reply => {
        if (reply.message === 'OK') {
          setResults(reply.results);
          setSortedResults(reply.results);
        } else {
          setError(reply.message);
        }
      })
      .catch(error => alert(error));
    }
  }, [user.token]);

  const handleSort = (field) => {
    if (field === prevSortField) {
      setSortedResults([...sortedResults.reverse()]);
    } else {
      const newSort = [...results];
      switch (field) {
        case 'id' :
          newSort.sort((r1, r2) => r1.id.localeCompare(r2.id));
          break;
        case 'test_name' :
          newSort.sort((r1, r2) => r1.test_name[r1.test_name.hasOwnProperty(userLang) 
            ? userLang 
            : r1.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(r1.test_name)[0]]
          .localeCompare(r2.test_name[r2.test_name.hasOwnProperty(userLang)
            ? userLang
            : r2.test_name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(r2.test_name)[0]])
          );
          break;
        case 'user_name' : 
          newSort.sort((r1, r2) => r1.user_name.localeCompare(r2.user_name));
          break;
        case 'type' :
          newSort.sort((r1, r2) => myUsersLang[r1.type][userLang].localeCompare(myUsersLang[r2.type][userLang]));
          break;
        case 'date' :
          newSort.sort((r1, r2) => new Date(r1.pass_date) - new Date(r2.pass_date));
          break;
        case 'result' :
          newSort.sort((r1, r2) => r1.result - r2.result);
          break;
        default :
          newSort.sort((r1, r2) => r1[field].localeCompare(r2[field]));
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
          <h2 className="windowTitle">{myUsersLang.title[userLang]}</h2>
        </div>

        {error 
        && <div className="myPageMain__error">
          {myUsersLang[error][userLang]}  
        </div>}

        {sortedResults 
        && <div className="myPageMain__users myTable">
          <div className="myTable__thead myTable__thead--users">
            <p className="lr_small mr_small" onClick={() => handleSort('user_name')}>{myUsersLang.user_name[userLang]}</p>
            <p className="" onClick={() => handleSort('test_name')}>{myUsersLang.test_name[userLang]}</p>
            <p className="lr_inv mr_inv" onClick={() => handleSort('type')}>{myUsersLang.test_type[userLang]}</p>
            <p className="lr_small mr_small" onClick={() => handleSort('result')}>{myUsersLang.user_result[userLang]}</p>
            <p className="" onClick={() => handleSort('date')}>{myUsersLang.date[userLang]}</p>
          </div>
          {sortedResults.map(result => (
            <Link
              key={result.id}
              className="myTable__trow myTable__trow--users" 
              to={`/result${result.id}`}
            >
              <p className="myTable__trow--name">{result.type === 'social' ? `${myUsersLang.passed[userLang]} ${result.user_name}`: result.user_name}</p>
              <p className="myTable__trow--name">{result.test_name[result.test_name.hasOwnProperty(userLang) ? userLang : result.test_name.hasOwnProperty('en') ? 'en' : Object.keys(result.test_name)[0]]}</p>
              <p className="myTable__trow--type lr_inv mr_inv">{myUsersLang[result.type][userLang]}</p>
              <p className="myTable__trow--result">{result.result / 100}%</p>
              <p className="myTable__trow--date">{new Date(result.pass_date).toLocaleDateString(userLang === 'ua' || userLang === 'be' ? 'ru' : userLang)}</p>
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
})

export default connect(mapStateToProps)(MyUsers);