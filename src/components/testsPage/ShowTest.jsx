import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import DataFromServerGET from '../../data/DataFromServerGET';
import postFormToServer from '../../data/postFormToServer';
import Loding from '../helpers/Loading';
import MessageBox from '../helpers/MessageBox';
import { langsCodes } from '../../langs/langs';
import { showTestLang } from '../../langs/showTestLang';
import { testTypesLang } from '../../langs/testTypesLang';
import { selection } from '../../misc/svgImages';

import '../../styles/css/ShowTest.css';

const ShowTest = ({ history, match, user, userLang }) => {
  const [test, setTest] = useState();
  const [testLang, setTestLang] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const start = async() => {
      const test = await DataFromServerGET(`test/get${match.params.t_id}`);
      setTest(test);
    }
    start(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (test && test.langs.includes(userLang)) {
      setTestLang(userLang);
    } else if (test && test.langs.includes('en')) {
      setTestLang('en');
    } else if (test) {
      setTestLang(test.langs[0]);
    }
  }, [test, userLang]);

  const startTest = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append('token', user.token);
    form.append('test_id', match.params.t_id);
    postFormToServer('test/start', form)
    .then(reply => {
      if (reply.message === 'OK') {
        history.push(`/test${reply.testing_id}/${testLang}/1`)
      } else if (reply.message === 'social') {
        setMessage(showTestLang[reply.message][userLang]);
        setTimeout(() => {
          setMessage('');
          history.push(`/result${reply.testing_id}`);
        }, 5000);
      } else {
        setMessage(showTestLang[reply.message][userLang]);
        setTimeout(() => {
          setMessage('');
          history.goBack();
        }, 5000);
      }
    })
    .catch(error => alert(error));
  } 

  if (!test) {
    return <Loding />
  }

  if (message) {
    return <MessageBox>{message}</MessageBox>
  }

  return (
    <div className="testWindow glass glass--middle glass--mate">
      <div className="testWindow__header">
        <p className="testWindow__message">
          {showTestLang.about_start[userLang]}
        </p>
        <h2 className="testWindow__name windowTitle">
          {test.name[test.langs.includes(userLang) 
            ? userLang 
            : test.langs.includes('en')
              ? 'en'
              : test.langs[0]]}
        </h2>
        <div className="testWindow__author">
          <p className="testWindow__authorBefore">
            {showTestLang.created_by[userLang]}
          </p>
          <p className="testWindow__authorName">
            {test.author}
          </p>
          <img 
            className="testWindow__authorImage"
            src={test.photo_url} 
            alt='author' 
          />
        </div>
      </div>

      <div className="testWindow__main">
        <hr />
        {test.langs.length === 1
          ? <>
            <p>{`${showTestLang.test_language[userLang]} : ${langsCodes[test.langs[0]][userLang]}`}</p>
          </>
          : <>
            <h3 className="testWindow__preambula preambula">{showTestLang.select_lenguage[userLang]}</h3>
            <div className={`testWindow__langSelection testWindow__langSelection--${test.langs.length < 4 ? test.langs.length : 4}`}>
              {test.langs.map(lang => (
                <div 
                  key={lang}
                  className="testWindow__lang"
                >
                  <div 
                    id={lang}
                    className="testWindow__checkBox checkBox"
                    onClick={() => setTestLang(lang)}
                  >
                    {testLang === lang
                    && <svg
                      x="0px" y="0px" viewBox="0 0 1000 1000"
                    >
                      {selection}
                    </svg>}
                  </div>
                  <label 
                    className="testWindow__langLabel defaultLabel"
                    htmlFor={lang}
                    onClick={() => setTestLang(lang)}
                  >
                    {langsCodes[lang][userLang]}
                  </label>
                </div>
              ))}
            </div>
          </>
        }
        <hr />

        <h3 className="testWindow__preambula preambula">
          {showTestLang.test_summary[userLang]}
        </h3>
        <div className="testWindow__summary">
          <label className="testWindow__label defaultLabel">
            {showTestLang.test_type[userLang]}
          </label>
          <p className="testWindow__label defaultLabel">
            {testTypesLang[test.type][userLang]}
          </p>

          <label className="testWindow__label defaultLabel">
            {showTestLang.questions[userLang]}
          </label>
          <p className="testWindow__label defaultLabel">
            {test.question_qtty}
          </p>

          <label className="testWindow__label defaultLabel">
            {showTestLang.estimated_time[userLang]}
          </label>
          <p className="testWindow__label defaultLabel">
            {`${test.time} ${showTestLang.min[userLang]}`}
          </p>

          <label className="testWindow__label defaultLabel">
            {showTestLang.retry[userLang]}
          </label>
          <p className="testWindow__label defaultLabel">
            {test.retry === 0 
              ? `${showTestLang.anytime[userLang]}`
              : test.retry === -1
                ? `${showTestLang.not_available[userLang]}`
                : `${showTestLang.after[userLang]} ${test.retry} ${showTestLang.days[userLang]}`
            }
          </p>
        </div>
        <hr />

        <h3 className="testWindow__preambula preambula">
          {showTestLang.essential_information[userLang]}
        </h3>
        <p className="testWindow__info">
          {showTestLang[`information_${test.type}`][userLang]}
        </p>

      </div>

      <div className="testWindow__footer">
        {user.token
        && <button
          className='testWindow__controlBtn BtnColors--blue'
          onClick={(event) => startTest(event)}
        >
          {showTestLang.start_test[userLang]}
        </button>}
        {!user.token
        && <p className="testWindow__warn">
          {showTestLang.unauthorized_warn[userLang]}
        </p>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  userLang: state.userLang,
})

export default connect(mapStateToProps)(ShowTest);