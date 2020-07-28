import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Loading from '../helpers/Loading';
import MessageBox from '../helpers/MessageBox';
import Wave from '../helpers/Wave';
import SearchBar from '../helpers/SearchBar';
import TestTypeSection from './TestTypeSection';
import Footer from '../footer/Footer';
import DataFromServerGET from '../../data/DataFromServerGET';
import { testsPageLang } from '../../langs/testsPageLang';

import '../../styles/css/testPage.css';
import 'aos/dist/aos.css';

const TestsPage = ({ history, userLang }) => {
  const [examTests, setExamTests] = useState();
  const [educatTests, setEducatTests] = useState();
  const [socTests, setSocTests] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    DataFromServerGET('test/allsum')
    .then(reply => {
      if (reply.message === 'OK') {
        setExamTests(reply.testsSummary.filter(test => test.type === 'examination'));
        setEducatTests(reply.testsSummary.filter(test => test.type === 'education'));
        setSocTests(reply.testsSummary.filter(test => test.type === 'social'));
        setError('');
      } else {
        setError(reply.message);
      }
    })
    .catch(error => alert(error));
  }, []);

  if (!examTests && !educatTests && !socTests && !error) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <MessageBox>
        <p>{testsPageLang[error][userLang]}</p>
      </MessageBox>
    )
  }

  return (
    <div className="testsPage">
      <header className="testsPage__header">
        <Wave rotate="180deg" />
      </header>

      <main className="testsPage__main testsPageMain">
        <div className="testsPageMain__search">
          <SearchBar size="big" color="light"/>
        </div>

        {(examTests && examTests[0]) && <TestTypeSection
          type='examination'
          position={1}
          tests={examTests}
          history={history}
        />}
        
        {(educatTests && educatTests[0]) && <TestTypeSection
          type='education'
          position={2}
          tests={educatTests}
          history={history}
        />}

        {(socTests && socTests[0]) && <TestTypeSection
          type='social'
          position={3}
          tests={socTests}
          history={history}
        />}
      </main>

      <footer className="testsPage__footer">
        <Footer />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
});

export default connect(mapStateToProps)(TestsPage);