import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextEditorCK from '../helpers/TextEditorCK';
import SwitchHor from '../helpers/SwitchHor';

import { setTest } from '../../actions/actionCreators';
import { cross, selection, equivalent } from '../../misc/svgImages';
import { questionLangLang } from '../../langs/createTestLang';

const QuestionLang = ({currentTest, setTest, userLang, questionLang, setHelp, currentQuestion}) => {
  const setQuestionText = (content) => {
    const questions = [...currentTest.questions];
    questions[currentQuestion].text[questionLang] = content;
    setTest({
      ...currentTest,
      questions,
    })
  }

  const setAnswerText = (content, index) => {
    const answers = currentTest.questions[currentQuestion].answers;
    answers[index].text[questionLang] = content;
    const questions = currentTest.questions;
    questions[currentQuestion] = {
      ...currentTest.questions[currentQuestion],
      answers
    }
    setTest({
      ...currentTest,
      questions,
    })
  }

  const setAnswerEquivalent = (content, index) => {
    const answers = currentTest.questions[currentQuestion].answers;
    answers[index].equivalent[questionLang] = content;
    const questions = currentTest.questions;
    questions[currentQuestion] = {
      ...currentTest.questions[currentQuestion],
      answers
    }
    setTest({
      ...currentTest,
      questions,
    })
  }

  const addAnswer = () => {
    const questions = [...currentTest.questions];
    const text = {};
    const equivalent = {};
    
    currentTest.langs.forEach((lang) => {
      text[lang] = '';
      equivalent[lang] = '';
    });

    questions[currentQuestion].answers = currentTest.questions[currentQuestion].answers.concat({
      text,
      equivalent, 
      correct: false, 
      order: currentTest.questions[currentQuestion].answers.length + 1
    });

    setTest({
      ...currentTest,
      questions
    })
  }

  const deleteAnswer = (index) => {
    const test = {...currentTest};
    test.questions[currentQuestion].answers.splice(index, 1);
    setTest({ ...test });
  }

  const setAnswerCorrect = (index) => {
    const test = {...currentTest};
    switch (test.questions[currentQuestion].type) {
      case 'oneofmany' :
        test.questions[currentQuestion].answers = test.questions[currentQuestion].answers.map(answer => { return {...answer, correct: false} });
        test.questions[currentQuestion].answers[index].correct = true;
        break;
      case 'manyofmany' :
        test.questions[currentQuestion].answers[index].correct = !test.questions[currentQuestion].answers[index].correct;
        break;
      default : 
        test.questions[currentQuestion].answers[index].correct = !test.questions[currentQuestion].answers[index].correct;
        break;
    }
    setTest({ ...test });
  }

  const setAnswerOrder = (index, order) => {
    if (order > 0 && order <= currentTest.questions[currentQuestion].answers.length) {
      const test = {...currentTest};
      test.questions[currentQuestion].answers[index].order = order;
      setTest({ ...test });
    }
  }

  const checkOrder = (order) => {
    const double = currentTest.questions[currentQuestion].answers.filter(answer => answer.order === order).length > 1;
    return double;
  }

  const setAnswerType = (type) => {
    const test = {...currentTest};
    test.questions[currentQuestion].answersType = type;
    setTest({...test});
  }

  return (
    <section className="questionLang">
      <div className="questionLang__question">
        <h3 className="preambula">
          {`${questionLangLang.question_in[userLang]} ${questionLangLang[questionLang][userLang]} ${userLang === 'be' || userLang === 'ru' || userLang === 'ua' ? questionLangLang.language[userLang] : ''}`}
        </h3>
        <TextEditorCK
          userLang={userLang} 
          callback={setQuestionText} 
          startValue={currentTest.questions[currentQuestion].text[questionLang]}
        />
      </div>

      <div className="questionLang__answers">
        {currentTest.questions[currentQuestion].type === 'freeanswer'
        && <div>
          <SwitchHor 
            left='text' 
            right='number' 
            defaultPosition={currentTest.questions[currentQuestion].answersType}
            cb={setAnswerType}/>
        </div>}

        {currentTest.questions[currentQuestion].answers.filter(answer => answer.status !== 'deleted').map((answer, index) => (
          <div key={index} className={`answer answer--${currentTest.questions[currentQuestion].type}`}>
            <h3 className="answer__preambula preambula">
              {`${questionLangLang.answer[userLang]} ${index + 1}`}
            </h3>
            
            {(currentTest.questions[currentQuestion].type === 'oneofmany'
            || currentTest.questions[currentQuestion].type === 'manyofmany')
            && <div 
                className="answer__beforeEditor checkBox"
                onClick={() => setAnswerCorrect(index)}
              >
                {answer.correct === true
                && <svg
                  x="0px" y="0px" viewBox="0 0 1000 1000"
                >
                  {selection}
                </svg>}
              </div>
            }

            {currentTest.questions[currentQuestion].type === 'setorder'
              && <input 
                className={`answer__beforeEditor answer__order ${checkOrder(answer.order) ? "answer__order--dublicate" : null} defaultInput`}
                type="number"
                value={answer.order}
                onChange={(event) => setAnswerOrder(index, +event.target.value)}
              />
            }
            
            <div className="answer__answer">
              {currentTest.questions[currentQuestion].type === 'freeanswer'
              ?<input 
                className="defaultInput"
                type={currentTest.questions[currentQuestion].answersType}
                value={answer.text[questionLang]}
                onChange={(event) => setAnswerText(event.target.value, index)}
              />
              :<TextEditorCK
                userLang={userLang} 
                callback={setAnswerText} 
                startValue={answer.text[questionLang]}
                index={index}
              />}
            </div>

            {currentTest.questions[currentQuestion].type === 'findmatch'
            && <>
              <svg
                x="0px" y="0px" viewBox="0 0 1000 1000" fill="#b3f334"
              >
                {equivalent}
              </svg>
              <div className="answer__equivalent">
                <TextEditorCK
                  userLang={userLang} 
                  callback={setAnswerEquivalent} 
                  startValue={answer.equivalent[questionLang]}
                  index={index}
                />
              </div>
            </>}
           
            <button
              className="answer__delete answer__delAnswerBtn glass glass--greenBottle glass--mate"
              onClick={() => deleteAnswer(index)}
            >
              <svg
                x="0px" y="0px" viewBox="0 0 1000 1000" fill="red"
              >
                {cross}
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button
        className="questionLang__addBtn controlBtn glass glass--greenBottle glass--mate"
        onClick={() => addAnswer()}
      >
        {questionLangLang.add_answer[userLang]}
      </button>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest: state.currentTest,
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionLang);