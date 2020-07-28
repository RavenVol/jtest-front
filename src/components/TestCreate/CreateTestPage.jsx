import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadTestFromLS, setLogoPosition, setTest } from '../../actions/actionCreators';
import SetTestLanguage from './SetTestLanguage';
import SetTestName from './SetTestName';
import SetTestType from './SetTestType';
import SetTestConfig from './SetTestConfig';
import CreateQuestion from './CreateQuestion';
import SaveTest from './SaveTest';
import CongratPage from './CongratPage';
import postFormToServer from '../../data/postFormToServer';

import RotatingGears from '../backgrounds/RotatingGears';
import Globe from '../backgrounds/Globe';

import { createTestPageLang, createTestErrors } from '../../langs/createTestLang';

import '../../styles/css/CreateTestPage.css';

const menuBtns = [
  {name: 'langs', link: 1}, 
  {name: 'name', link: 2}, 
  {name: 'type', link: 3}, 
  {name: 'settings', link: 4}, 
  {name: 'quetions', link: 5}
];

const CreateTestPage = ({currentTest, setTest, loadTestFromLS, setLogoPosition, user, userLang}) => {
  const [readLS, setReadLS] = useState(true);
  const [stage, setStage] = useState(1);
  const [error, setError] = useState('');
  const [help, setHelp] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // AutoSave edited test to Local Storage
  useEffect(() => {
    const currentTestToLS = JSON.stringify(currentTest);
    localStorage.setItem('currentTest', currentTestToLS);
  }, [currentTest]);

  // Returns site Logo to normal position when module umnounts
  useEffect(() => {
    return () => {setLogoPosition('center')}
  }, [setLogoPosition]);

  // Clear error if user exist
  useEffect(() => {
    user.token && setError('');
  }, [user.token])

  // Checking errors when moving to the next stage
  const handleStage = (stage) => {
    if (stage === 1) {
      setStage(stage);
      setError('');
    }

    if (stage === 2) {
      if (currentTest.langs.length === 0) {
        setError('no_languages');
      } else {
        setStage(stage);
        setError('');
      }
    }

    if (stage === 3) {
      if (currentTest.langs.length === 0) {
        setError('no_languages');
      } else if (currentTest.langs.filter(lang => currentTest.testName[lang].length < 3).length !== 0) {
        setError('no_testname');
      } else {
        setStage(stage);
        setError('');
      }
    }

    if (stage >= 4) {
      if (currentTest.langs.length === 0) {
        setError('no_languages');
      } else if (currentTest.langs.filter(lang => currentTest.testName[lang].length < 3).length !== 0) {
        setError('no_testname');
      } else if (currentTest.type !== 'examination' && currentTest.type !== 'education' && currentTest.type !== 'social') {
        setError('no_testtype');
      } else if (!user.email && stage === 6) {
        setStage(stage);
        setError('saved_localy');
      } else {
        setStage(stage);
        setError('');
      }
    }
  }

  // Save test on server
  const handleSave = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append('token', user.token);
    form.append('test', JSON.stringify(currentTest));
    postFormToServer('test/save', form)
    .then(reply => {
      if (reply.message === 'OK') {
        setStage(7);
        localStorage.removeItem('currentTest');
        setTest({
          id: '',
          testName: {},
          type: 'education',
          langs: [],
          question_qtty: 10,
          retry: 0,
          edit_rights: 'author',
          testEditUsers: [],
          category: 0,
          status: 'edit',
          questions: [],
          color: 0,
          questions_order: 'random',
        });
      } else {
        setError(reply.message)
      }
    })
    .catch(error => alert(error));
  }

  // On first enter to "create test page" loads test from LocalSorage and moving site Logo
  if (readLS) {
    loadTestFromLS();
    setLogoPosition('left');
    setReadLS(false);
  }

  return (
    <>
    {/* backgrount animations */}
    {stage === 1 && <Globe/>}
    {stage === 2 && <RotatingGears/>}
    {stage === 3 && <RotatingGears/>}
    {stage === 4 && <RotatingGears/>}
    {stage === 5 && <RotatingGears/>}
    {stage === 6 && <RotatingGears/>}
    {stage === 7 && <RotatingGears/>}
    
    <div className="createTestPage">
      <div className="createTestPage__menu createTestPageMenu glass glass--greenBottle glass--mate">
        <div className="createTestPageMenu__title windowTitle windowTitle--left">
          {createTestPageLang.create_test_menu[userLang]}
        </div>
        <ul className="createTestPageMenu__Btns">
          {menuBtns.map(btn => (
            <li key={btn.name}>
              <button 
                className={`menuBtn menuBtn--left glass glass--mate glass--${btn.link === stage ? "yellow" : "greenBottle"}`}
                style={btn.link === stage ? {color: 'white'} : {}}
                onClick={(event) => {
                  event.preventDefault();
                  handleStage(btn.link);
                }}
              >
                {createTestPageLang[btn.name][userLang]}
              </button>
            </li>
          ))}
        </ul>
        <ul className="createTestPageMenu__questionsList">
          {currentTest.questions.filter(question => question.status !== 'deleted').map((question, index) => (
            <li 
              key={`${question.name}${index}`}
              className={index === currentQuestion ? "questionItem questionItem--active" : "questionItem"}
              onClick={() => {
                setCurrentQuestion(index);
                stage !== 5 && setStage(5);
              }}
            >
              <p className="questionItem__number">{index + 1}</p>
              <p className="questionItem__name">{question.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="createTestPage__main createTestPageMain">
        <div className="createTestPageMain__mainModule">
          {stage === 1 && <SetTestLanguage setHelp={setHelp}/>}
          {stage === 2 && <SetTestName setHelp={setHelp}/>}
          {stage === 3 && <SetTestType setHelp={setHelp}/>}
          {stage === 4 && <SetTestConfig setHelp={setHelp}/>}
          {stage === 5 && <CreateQuestion setHelp={setHelp} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>}
          {stage === 6 && <SaveTest setHelp={setHelp}/>}
          {stage === 7 && <CongratPage setStage={setStage} />}
        </div>

        {stage !==7 
        && <div className="createTestPageMain__error">
          &nbsp;{error && createTestErrors[error][userLang]}&nbsp;
        </div>}

        <div className="createTestPageMain__controls">
          {stage > 1 && stage !==7
          && <button 
            className="controlBtn createTestPageMain__controls--prev glass glass--greenBottle glass--mate"
            onClick={() => handleStage(stage - 1)}
          >
            {`<< ${createTestPageLang.back[userLang]}`}
          </button>}

          {stage < 6 
          && <button 
            className="controlBtn createTestPageMain__controls--next glass glass--greenBottle glass--mate"
            onClick={() => handleStage(stage + 1)}
          >
            {`${createTestPageLang.next[userLang]} >>`}
          </button>}
          
          {stage === 5 && <div className="createTestPageMain__controls--centerBlock">
            <button 
              className="controlBtn glass glass--yellow glass--mate"
              onClick={() => setCurrentQuestion(currentTest.questions.length)}
            >
              {createTestPageLang.add_question[userLang]}
            </button>
            <button 
              className="controlBtn glass glass--red glass--mate"
              onClick={() => {
                const questions = currentTest.questions.filter((question, index) => index !== currentQuestion );
                setTest({
                  ...currentTest,
                  questions
                });
                setCurrentQuestion(currentQuestion - 1 > 0 ? currentQuestion - 1 : 0);
              }}
            >
              {createTestPageLang.delete_question[userLang]}
            </button>
          </div>}

          {stage === 6 && user.token
          ? <button 
            className="controlBtn createTestPageMain__controls--next glass glass--blue glass--mate"
            onClick={event => handleSave(event)}
          >
            {createTestPageLang.save[userLang]}
          </button>
          : null}
        </div>

        {stage !==7 
        && <div className="createTestPageMain__help glass glass--middle glass--mate">
          {help}
        </div>}
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentTest : state.currentTest,
  user : state.user,
  userLang : state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest,
    loadTestFromLS,
    setLogoPosition,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateTestPage);