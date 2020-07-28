import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../../actions/actionCreators';

import QuestionConf from './QuestionConf';
import QuestionLang from './QuestionLang';
import Loading from '../helpers/Loading';
import { createQuestionLang } from '../../langs/createTestLang';

import '../../styles/css/createQuestion.css';

const CreateQuestion = ({currentTest, setTest, currentQuestion, setCurrentQuestion, setHelp, userLang}) => {
  const [activeBtn, setActiveBtn] = useState('conf');

  useEffect(() => {
    setActiveBtn('conf');
  },[currentQuestion])
  
  if (!currentTest.questions[currentQuestion]) {
    const text = {};
    currentTest.langs.forEach(lang => text[lang] = '');
    
    const questions = currentTest.questions.concat({
      name: '',
      position: currentTest.questions.length,
      type: 'oneofmany',
      timeout: 60,
      text,
      answers: [],
      answersType: 'text',
      price: 1,
    });

    setTest({
      ...currentTest,
      questions
    });

    return (<Loading />);
  }

  return (
    <section className="createQuestion">
      <nav className="createQuestion__langMenu">
        <button
          className={activeBtn === 'conf'
            ? "menuBtn glass glass--greenBottle glass--mate"
            : "menuBtn glass glass--middle glass--mate"}
          style={{animation: "langMenuButtonAppear 1000ms linear forwards"}}
          onClick={(event) => {
            event.preventDefault();
            setActiveBtn('conf');
          }}
        >
          {createQuestionLang.config[userLang]}
        </button>
        {currentTest.langs.map((testLang, index) => (
          <button
            key={testLang}
            className={testLang === activeBtn
              ? "menuBtn glass glass--greenBottle glass--mate"
              : "menuBtn glass glass--middle glass--mate"}
            style={{animation: `langMenuButtonAppear 1000ms linear ${(index + 1)*100}ms forwards`}}
            onClick={(event) => {
              event.preventDefault();
              setActiveBtn(testLang);
            }}
          >
            {testLang.toUpperCase()}
          </button>
        ))}
      </nav>
      
      <div className="createQuestion__main">
        {activeBtn === 'conf' 
          ? <QuestionConf setHelp={setHelp} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
          : <QuestionLang questionLang={activeBtn} setHelp={setHelp} currentQuestion={currentQuestion}/>
        }
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest: state.currentTest,
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateQuestion);