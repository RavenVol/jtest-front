import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import postFormToServer from '../../data/postFormToServer';
import Loding from '../helpers/Loading';
import MessageBox from '../helpers/MessageBox';
import Timer from '../helpers/Timer';
import { showTestLang } from '../../langs/showTestLang';
import ShowFreeAnswer from './ShowFreeAnswer';
import ShowOfManyAnswers from './ShowOfManyAnswers';
import ShowSetOrderAnswers from './ShowSetOrderAnswers';
import ShowFindMatchAnswers from './ShowFindMatchAnswers';
 
const ShowQuestion = ({ user, userLang, match, history }) => {
  const {testing_id, q_number, testLang} = match.params;
  const [question, setQuestion] = useState();
  const [testType, setTestType] = useState();
  const [noTime, setNoTime] = useState(false);

  // Getting question on start
  useEffect(() => {
    const getQuestion = async() => {
      const form = new FormData();
      form.append('token', user.token);
      form.append('testing_id', testing_id);
      form.append('lang', testLang);
      form.append('q_number', +q_number-1);
      postFormToServer('test/question', form)
      .then(reply => {
        if (reply.message === 'OK') {
          setTestType(reply.test_type);
          setQuestion(reply.question);
          setNoTime(false);
        } else {
          alert(reply.message);
        }
      });
    }
    getQuestion();
  }, [testing_id, q_number, testLang, user]);

  // When time is up
  useEffect(() => {
    if (noTime) {
      sendAnswer();

      const wait20 = setInterval(() => {
        nextQuestion();
        clearInterval(wait20);
      }, 20000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noTime, q_number]);

  function sendAnswer() {
    const userAnswer = {...question};
      delete userAnswer.author;
      delete userAnswer.photo_url;
      delete userAnswer.text;
      delete userAnswer.timeout;
      delete userAnswer.completed;
    
    if (question.type === 'findmatch') {
      userAnswer.answers.forEach((answer, index) => userAnswer.answers[index].equivalent = userAnswer.answers[index].equivalent.id);
    }

    const form = new FormData();
      form.append('token', user.token);
      form.append('testing_id', testing_id);
      form.append(`question`, JSON.stringify(userAnswer));

    postFormToServer('test/answer', form).then(reply => {});
  }

  function nextQuestion() {
    if (+q_number < question.completed.length) {
      history.push(`/test${testing_id}/${testLang}/${+q_number + 1}`);
    } else {
      const form = new FormData();
        form.append('token', user.token);
        form.append('testing_id', testing_id);
      postFormToServer('test/resultsave', form).then(reply => {
        if (reply.message === 'OK') {
          history.push(`/result${testing_id}`);
        }
      });
    }
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (!noTime) sendAnswer();
    nextQuestion();
  }

  if (!question || !testType) return (<Loding />);

  return (
    <div className="testWindow glass glass--middle glass--mate">
      <div className="testWindow__header">
        <h2 className="testWindow__name windowTitle">
          {`${showTestLang.question_N[userLang]}${q_number}`}
        </h2>
        <ul className="testWindow__questionMenu">
          {question.completed.map((item, index) => (
            <li 
              key={index}
              className={`glass ${item ? 'glass--greenBottle' : index+1 === +q_number ? 'glass--yellow' : 'glass--dark'}`}
            >
              {`${showTestLang.questio[userLang]}${index+1}`}
            </li>
          ))}
        </ul>
        <div className="testWindow__author">
          <p className="testWindow__authorBefore">
            {showTestLang.created_by[userLang]}
          </p>
          <p className="testWindow__authorName">
            {question.author}
          </p>
          <img 
            className="testWindow__authorImage"
            src={question.photo_url} 
            alt='author' 
          />
        </div>
      </div>

      {noTime 
      ? <div className="testWindow__main">
          <MessageBox>
            <p>{showTestLang.we_are_sorry_answer_timed_out[userLang]}</p>
            <p>{showTestLang.answer_was_saved[userLang]}</p>
          </MessageBox>
        </div>
      : <div className="testWindow__main">
        <div 
          className="testWindow__questionText withStyles"
          dangerouslySetInnerHTML={{ __html: question.text }}
        />
        <hr />

        {question.type === 'freeanswer' 
        && <ShowFreeAnswer 
          question={question}
          setQuestion={setQuestion}
        />}

        {(question.answers && (question.type === 'oneofmany' || question.type === 'manyofmany'))
        && <ShowOfManyAnswers 
          question={question}
          setQuestion={setQuestion}
        />}

        {(question.answers && question.type === 'setorder')
        && <ShowSetOrderAnswers
          question={question}
          setQuestion={setQuestion}
        />}

        {(question.answers && question.type === 'findmatch')
        && <ShowFindMatchAnswers
          question={question}
          setQuestion={setQuestion}
          userLang={userLang}
        />}
      </div>}

      <div className="testWindow__footer">
        {testType !== 'social'
        && <div className="testWindow__timer">
          <Timer startTime={question.timeout} zeroCB={() => setNoTime(true)} timerID={question.id}/>
        </div>}

        <button 
          className='testWindow__controlBtn BtnColors--blue'
          onClick={(event) => handleButtonClick(event)}
        >
          {+q_number < question.completed.length 
            ? `${showTestLang.next_question[userLang]}`
            : `${showTestLang.final[userLang]}`
          }
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  userLang: state.userLang,
})

export default connect(mapStateToProps)(ShowQuestion);