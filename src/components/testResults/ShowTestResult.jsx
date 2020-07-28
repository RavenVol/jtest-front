import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import AnimatedResult from '../helpers/AnimatedResult';
import postFormToServer from '../../data/postFormToServer';
import Loading from '../helpers/Loading';
import MessageBox from '../helpers/MessageBox';
import EtalonVsUser from './EtalonVsUser';
import ShowSocialResult from './ShowSocialResult';
import { showTestResultLang } from '../../langs/testResultLang';

import '../../styles/css/ShowTest.css';

const ShowTestResult = ({ history, match, user, userLang }) => {
  const [testing, setTesting] = useState();
  const [message, setMessage] = useState();

  const getTestingFromServer = () => {
    const form = new FormData();
      form.append('token', user.token);
      form.append('testing_id', match.params.testing_id);
      
    postFormToServer('test/resultget', form)
    .then(reply => {
      if (reply.message === 'OK') {
        if (reply.testing.test_type !== 'social') {
          const rq = reply.questions;
          const questions = rq.sort((a, b) => a.position - b.position).map(question => {
            question.answers.sort((a, b) => a.a_order - b.a_order);
            if (question.type !== 'freenswer') question.answers = question.answers.filter(answer => answer.hasOwnProperty('user_answer'));
            let score = 0;
            if (question.type === 'oneofmany') {
              score = question.answers.every(answer => answer.correct === answer.user_answer)
                ? question.price
                : 0;
            }

            if (question.type === 'manyofmany') {
              score = Math.round((question.answers.map(answer => answer.correct === answer.user_answer
                ? question.price / question.answers.length
                : 0)
              .reduce((acc, ans_score) => acc + ans_score) - question.price / 2) * 2 * 100) / 100;
            }

            if (question.type === 'setorder') {
              score = Math.round((question.answers.map(answer => answer.a_order === +answer.user_answer
                ? question.price / question.answers.length
                : 0).reduce((acc, ans_score) => acc + ans_score) - question.price / 2) * 2 * 100) / 100;
            }

            if (question.type === 'findmatch') {
              score = Math.round(question.answers.map(answer => answer.id === answer.user_answer
                ? question.price / question.answers.length
                : 0).reduce((acc, ans_score) => acc + ans_score) * 100) / 100;
            }

            if (question.type === 'freeanswer') {
              if (!question.answers[0]) {
                score = 0;
              } else {
                const fa_texts = question.answers.map(answer => Object.values(answer.text)).flat();
                const fa_texts_low_trim = fa_texts.map(text => text.toLowerCase().trim());
                score = (fa_texts.some(text => text === question.answers[0].user_answer) || fa_texts_low_trim.some(text => text === question.answers[0].user_answer.toLowerCase().trim()))
                  ? question.price
                  : 0;
              }
            }

            score = score < 0 ? 0 : score;
            score = score > question.price ? question.price : score;
            return ({...question, score})
          });

          setTesting({
            summary: reply.testing,
            questions,
          });
        } else {
          setTesting({
            summary: reply.testing,
            questions: [...reply.questions].sort((a, b) => a.position - b.position),
            users_answers: reply.users_answers,
          });
        }
      } else {
        setMessage(reply.message);
        setTimeout(() => {
          setMessage('');
          history.goBack();
        }, 5000);
      }
    })
    .catch(error => alert(error));
  }

  useEffect(() => {
    if (user.token) {
      getTestingFromServer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  const addFreeAnswer = (question_id, question_type, question_langs, answer) => {
    const form = new FormData();
    form.append('token', user.token);
    form.append('question_id', question_id);
    form.append('question_type', question_type);
    form.append('langs', JSON.stringify(question_langs));
    form.append('answer', JSON.stringify(answer));

    postFormToServer('test/addfreeanswer', form)
    .then(reply => {
      if (reply.message === 'OK') {
        const form = new FormData();
        form.append('token', user.token);
        form.append('testing_id', match.params.testing_id);
        postFormToServer('test/resultsave', form)
        .then(reply => {
          if (reply.message === 'OK') {
            getTestingFromServer();
          } else {
            alert(reply.message);
          }
        })
        .catch(error => alert(error));
      } else {
        alert(reply.message);
      }
    })
    .catch(error => alert(error));
  }

  if (message) return <MessageBox>{showTestResultLang[message][userLang]}</MessageBox>;
  if (!testing) return <Loading />;

  const {summary, questions, users_answers} = testing;

  return (
    <div className="testWindow testWindow--nofooter glass glass--middle glass--mate">
      <div className="testWindow__header">
        <p className="testWindow__message">
          {`${showTestResultLang.date[userLang]} ${new Date(summary.pass_date).toLocaleDateString(userLang === 'ua' || userLang === 'be' ? 'ru' : userLang)}`}
        </p>

        <h2 className="testWindow__name windowTitle">
          {summary.test_name[userLang] || summary.test_name.en || summary.test_name[Object.keys(summary.test_name)[0]]}
        </h2>

        <div className="testWindow__author">
          <p className="testWindow__authorBefore">
          {summary.test_type === 'social' ? showTestResultLang.test_pass[userLang] : showTestResultLang.user[userLang]}
          </p>
          <p className="testWindow__authorName">
            {summary.test_type === 'social' ? summary.unique_users : summary.user.name}
          </p>
          {summary.test_type !== 'social' 
          ? <img 
            className="testWindow__authorImage"
            src={summary.user.photo_url} 
            alt='author' 
          />
          : <p className="testWindow__authorBefore">&nbsp;{showTestResultLang.times[userLang]}</p>}
        </div>
      </div>

      {summary.test_type !== 'social' 
      && <div className="testWindow__main">
        <div 
          className={`testWindow__result ${summary.test_type === 'education' || (summary.test_type !== 'social' && summary.allowed === 'author') ? 'testWindow__result--animated' : ''}`}
          style={summary.test_type === 'education' || (summary.test_type !== 'social' && summary.allowed === 'author') 
            ? {animation: `resultMove 500ms linear forwards ${summary.result / 100 * 25}ms`}
            : {}}
        >
          <p className="testWindow__preambula preambula">{showTestResultLang.test_result[userLang]}</p>
          <AnimatedResult result={summary.result}/>
          <p className="testWindow__percent preambula">%</p>
        </div>

        {( summary.test_type === 'education' 
        || summary.allowed === 'author')
        && <div className="testWindow__questions">
          {questions.map((question, index) => (
            <EtalonVsUser 
              key={question.id} 
              question={question} 
              number={index+1}
              allowed={summary.allowed} 
              addFreeAnswer={addFreeAnswer}
            />
          ))}
        </div>}
      </div>}

      {summary.test_type === 'social'
      && <div className="testWindow__main">
        {questions.map((question, index) => (
          <ShowSocialResult 
            key={question.id}
            question={question} 
            users_answers={users_answers.filter(answer => answer.question_id === question.id)} 
            number={index+1}
          />
        ))}
      </div>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  userLang: state.userLang,
})

export default connect(mapStateToProps)(ShowTestResult);