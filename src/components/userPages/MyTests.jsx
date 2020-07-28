import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import postFormToServer from '../../data/postFormToServer';
import Loading from '../helpers/Loading';
import Wave from '../helpers/Wave';
import Footer from '../footer/Footer';

import { myTestsLang } from '../../langs/userPagesLang';

import '../../styles/css/UserPages.css';

const MyTestts = ({user, userLang, history}) => {
  const [tests, setTests] = useState();
  const [sortedTests, setSortedTests] = useState();
  const [error, setError] = useState();
  const [prevSortField, setPrevSortField] = useState();

  useEffect(() => {
    const form = new FormData();
    form.append('token', user.token);

    postFormToServer('test/mytests', form)
    .then(reply => {
      if (reply.message === 'OK') {
        setTests(reply.testsSummary);
        setSortedTests(reply.testsSummary);
        setError('');
      } else {
        setError(reply.message);
      }
    })
    .catch(error => alert(error));
  }, [user]);

  const handleSort = (field) => {
    if (field === prevSortField) {
      setSortedTests([...sortedTests.reverse()]);
    } else {
      const newSort = [...tests];
      switch (field) {
        case 'id' :
          newSort.sort((t1, t2) => t1.id.localeCompare(t2.id));
          break;
        case 'name' :
          newSort.sort((t1, t2) => t1.name[t1.name.hasOwnProperty(userLang) 
            ? userLang 
            : t1.name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t1.name)[0]]
          .localeCompare(t2.name[t2.name.hasOwnProperty(userLang)
            ? userLang
            : t2.name.hasOwnProperty('en')
              ? 'en'
              : Object.keys(t2.name)[0]])
          );
          break;
        case 'type' :
          newSort.sort((t1, t2) => myTestsLang[t1.type][userLang].localeCompare(myTestsLang[t2.type][userLang]));
          break;
        case 'status' :
          newSort.sort((t1, t2) => myTestsLang[t1.status][userLang].localeCompare(myTestsLang[t2.status][userLang]));
          break;
        default :
          newSort.sort((t1, t2) => t1[field].localeCompare(t2[field]));
      }

      setSortedTests(newSort);
      setPrevSortField(field);
    }
  }

  const gotoTestEdit = (id) => {
    const form = new FormData();
    form.append('token', user.token);
    form.append('test_id', id);
    postFormToServer('test/getTest', form)
    .then(reply => {
      if (reply.message === 'OK') {
        const test = reply.test;
        test.questions.sort((a, b) => a.position - b.position);
        test.questions.forEach(question => {
          question.answers.sort((a, b) => a.order - b.order);
        })
        localStorage.setItem('currentTest', JSON.stringify(test));
        history.push('/createtest');
      }
    });
  }

  if (!sortedTests && !error) {
    return <Loading />
  }

  return (
    <div className="myPage">
      <header className="myPage__header">
        <Wave rotate="180deg"/>
      </header>

      <main className="myPage__main myPageMain glass glass--light">
        <div className="myPageMain__title">
          <h2 className="windowTitle">{myTestsLang.title[userLang]}</h2>
        </div>
        
        {error 
        && <div className="myPageMain__error">
          {myTestsLang[error][userLang]}  
        </div>}

        {sortedTests 
        && <div className="myPageMain__tests myTable">
          <div className="myTable__thead myTable__thead--tests">
            <p className="lr_inv mr_small" onClick={() => handleSort('id')}>{myTestsLang.test_id[userLang]}</p>
            <p className="" onClick={() => handleSort('name')}>{myTestsLang.test_name[userLang]}</p>
            <p className="" onClick={() => handleSort('type')}>{myTestsLang.test_type[userLang]}</p>
            <p className="" onClick={() => handleSort('status')}>{myTestsLang.test_status[userLang]}</p>
          </div>
          {sortedTests.map(test => (
            <div 
              key={test.id}
              className="myTable__trow myTable__trow--tests" 
              onClick={() => gotoTestEdit(test.id)}
            >
              <p className="myTable__trow--id lr_inv mr_xsmall">{test.id}</p>
              <p className="myTable__trow--name">{test.name[test.name.hasOwnProperty(userLang) ? userLang : test.name.hasOwnProperty('en') ? 'en' : Object.keys(test.name)[0]]}</p>
              <p className="myTable__trow--type">{myTestsLang[test.type][userLang]}</p>
              <p className="myTable__trow--status mr_xsmall">{myTestsLang[test.status][userLang]}</p>
            </div>
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

export default connect(mapStateToProps)(MyTestts);