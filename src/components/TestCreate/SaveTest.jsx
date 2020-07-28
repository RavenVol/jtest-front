import React, {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';

import QuestionCheck from './QuestionCheck';

import { langsCodes } from '../../langs/langs';
import { saveTestLang, questionLangLang } from '../../langs/createTestLang';

import '../../styles/css/saveTest.css';

const SaveTest = ({currentTest, user, setHelp, userLang}) => {
  const [status, setStatus] = useState({
    user: 'OK',
    langs: 'OK',
    type: 'OK',
    allQuestions: 'OK',
    question_qtty: 'OK',
    retry: 'OK',
    edit_rights: 'OK',
    questions_order: 'OK',
  });

  useEffect(() => {
    const newStatus = {...status};
    // chacking if user was loged in
    newStatus.user = user.token ? 'OK' : 'Error';

    // cheking if languages was picked for test
    newStatus.langs = currentTest.langs.length > 0 ? 'OK' : 'Error';

    // cheking if testName was entered in all selected languages
    currentTest.langs.forEach(lang => newStatus[`testName_${lang}`] = currentTest.testName[lang].length >= 3 ? 'OK' : 'Error');

    // checking if correct test Type was picked
    newStatus.type = currentTest.type === 'education' || currentTest.type === 'examination' || currentTest.type === 'social' ? "OK" : "Error";

    // checking if there are questions in the test and if number of created questions equal or more then number of question for one test
    newStatus.allQuestions = currentTest.questions.length <= 0 
      ? "Error"
      : currentTest.questions.length >= +currentTest.question_qtty 
        ? "OK"
        : "Warn";

    // checking if number of question for testing has appropreate value
    newStatus.question_qtty = +currentTest.question_qtty >= 0 ? "OK" : "Error";

    // checking if retry period has appropreate value
    newStatus.retry = +currentTest.retry >= -1 ? "OK" : "Error";
    
    // checking if test edit rights has appropreate value
    newStatus.edit_rights = currentTest.edit_rights === 'author' || currentTest.edit_rights === 'anybody' || currentTest.edit_rights === 'selected' ? "OK" : "Error";

    // checking if questions_order has appropreate value
    newStatus.questions_order = currentTest.questions_order === 'order' || currentTest.questions_order === 'random' ? "OK" : "Error";

    // prepearing overall check statuses for questions
    currentTest.questions.forEach((question, index) => {
      newStatus[`question${index}`] = 'OK'
    });

    setStatus({...newStatus}); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, currentTest]);

  return (
    <div className="defaultModule">
      <h3 className="defaultModule__preambula preambula">
        {saveTestLang.title[userLang]}
      </h3>

      <div className="defaultModule__check">
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.test_owner[userLang]}
          </label>
          <div className="testCheck__message">
            {status.user === 'OK' 
              ? `${user.first_name} ${user.family_name}`
              : saveTestLang.anonymous[userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.user}`}>
            {status.user}
          </div>
        </section>

        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.supported_languages[userLang]}
          </label>
          <div className="testCheck__message">
            {status.langs === 'OK'
              ? currentTest.langs.map(lang =>(
                  <div key={`lang_${lang}`}>
                    {langsCodes[lang][userLang]}
                  </div>
                ))
              : saveTestLang.no_langs[userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.langs}`}>
            {status.langs}
          </div>
        </section>

        <hr />
        {currentTest.langs.map(lang => (
          <section className="testCheck" key={`testName_${lang}`}>
            <label className="testCheck__label defaultLabel">
              {`${saveTestLang.test_name[userLang]} ${questionLangLang[lang][userLang]}:`}
            </label>
            <div className="testCheck__message">
              {currentTest.testName[lang]}
            </div>
            <div className={`testCheck__status testCheck__status--${status[`testName_${lang}`]}`}>
              {status[`testName_${lang}`]}
            </div>
          </section>
        ))}

        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.test_type[userLang]}
          </label>
          <div className="testCheck__message">
            {saveTestLang[currentTest.type][userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.type}`}>
            {status.type}
          </div>
        </section>
        
        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.number_all_questions[userLang]}
          </label>
          <div className="testCheck__message">
            {currentTest.questions.length}
          </div>
          <div className={`testCheck__status testCheck__status--${status.allQuestions}`}>
            {status.allQuestions}
          </div>
        </section>
        
        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.number_questions_testing[userLang]}
          </label>
          <div className="testCheck__message">
            {currentTest.type === 'social' && saveTestLang.all_assigned_questions[userLang]}
            {(currentTest.type === 'education' || currentTest.type === 'examination') 
            && (+currentTest.question_qtty > 0) 
            ? currentTest.question_qtty
            : saveTestLang.all_assigned_questions[userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.question_qtty}`}>
            {status.question_qtty}
          </div>
        </section>

        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.questions_order[userLang]}
          </label>
          <div className="testCheck__message">
            {saveTestLang[currentTest.questions_order][userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.questions_order}`}>
            {status.questions_order}
          </div>
        </section>

        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.retry_after[userLang]}
          </label>
          <div className="testCheck__message">
            {+currentTest.retry === -1 && saveTestLang.no_retries[userLang]}
            {+currentTest.retry === 0 && saveTestLang.anytime[userLang]}
            {+currentTest.retry > 0 && `${saveTestLang.after[userLang]} ${currentTest.retry} ${saveTestLang.days[userLang]}`}
          </div>
          <div className={`testCheck__status testCheck__status--${status.retry}`}>
            {status.retry}
          </div>
        </section>

        <hr />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {saveTestLang.allowed_users[userLang]}
          </label>
          <div className="testCheck__message">
            {currentTest.edit_rights === 'anybody' && saveTestLang.anybody[userLang]}
            {currentTest.edit_rights === 'author' && saveTestLang.author[userLang]}
            {currentTest.edit_rights === 'selected' && `${saveTestLang.author[userLang]},${currentTest.testEditUsers.map(email => ` ${email}`) }`}
          </div>
          <div className={`testCheck__status testCheck__status--${status.edit_rights}`}>
            {status.edit_rights}
          </div>
        </section>
      
        {currentTest.questions.map((question, index) => (
          <Fragment key={`${index}${question.name}`}>
            <QuestionCheck question={question} index={index} langs={currentTest.langs}/>
          </Fragment>
        ))}

        <hr />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentTest: state.currentTest,
  user: state.user,
  userLang: state.userLang,
})

export default connect(mapStateToProps)(SaveTest);