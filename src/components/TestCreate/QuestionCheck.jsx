import React, {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';

import { questionCheckLang, questionLangLang, q_types } from '../../langs/createTestLang';

const QuestionCheck = ({question, index, langs, userLang}) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({overall: 'OK'});

  useEffect(() => {
    const newStatus = {...status};

    // cheking if question type has appropriate value
    newStatus.type = (
         question.type === 'oneofmany' 
      || question.type === 'manyofmany' 
      || question.type === 'setorder' 
      || question.type === 'freeanswer' 
      || question.type === 'findmatch')
        ? "OK"
        : "Error";
    
    // cheking if question timeout is OK
    newStatus.timeout = +question.timeout >= 60 || +question.timeout === 0 ? "OK" : "Warn";

    // cheking if answers type has appropreate value
    if (question.type === 'freeanswer') {
      newStatus.answersType = question.answersType === 'text' || question.answersType === 'number' ? 'OK' : 'Error';
    }

    langs.forEach(lang => {
      // checking if question text exists in every language selected for test
      newStatus[`text_${lang}`] = question.text[lang].length > 0 ? "OK" : "Error";
    });

    // checking if position has appropreate value
    newStatus.position = question.position === index ? "OK" : "Warn";

    // checking if price set correctly
    newStatus.price = question.price > 0 ? "OK" : "Error";

    question.answers.forEach((answer, index) => {
      langs.forEach(lang => {
        // cheking if answer text exist in every language selected for test
        newStatus[`a${index}_text_${lang}`] = answer.text[lang].length > 0 ? "OK" : 'Error';

        // cheking if answer equivalent exist for find match questions in every language selected for test
        if (question.type === "findmatch") {
          newStatus[`a${index}_equivalent_${lang}`] = answer.equivalent[lang].length > 0 ? "OK" : "Error";
        }
      });

      // checking if order is correct for "set order" question type
      if (question.type === 'setorder') {
        newStatus[`a${index}_order`] = question.answers.filter(q_answer => q_answer.order === answer.order).length === 1 && answer.order > 0 && answer.order <= question.answers.length
        ? "OK" : "Error";
      };
    });

    // checking if only one answer selected as correct for "one of many" question type
    if (question.type === 'oneofmany') {
      newStatus[`answers_correct`] = question.answers.filter(answer => answer.correct === true).length === 1 && question.answers.filter(answer => answer.correct === false).length === question.answers.length - 1 ? "OK" : "Error";
    };

    // checking if answer selected as correct for "many of many" question type
    if (question.type === 'manyofmany') {
      newStatus[`answers_correct`] = question.answers.filter(answer => typeof(answer.correct) !== 'boolean').length > 0 
        ? "Error"
        : question.answers.every(answer => answer.correct === true) || question.answers.every(answer => answer.correct === false)
          ? "Warn"
          : "OK";
    };

    // cheking number of answers that are assigned to the test
    if (question.type === 'freeanswer') {
      newStatus.answersQtty = 'OK';
    } else {
      newStatus.answersQtty = question.answers.length >= 2
        ? "OK"
        : "Error";
    }

    // cheking overall status
    newStatus.overall = Object.values(newStatus).every(value => value === 'OK')
      ? "OK"
      : Object.values(newStatus).some(value => value === 'Error')
        ? "Error"
        : "Warn";

    setStatus(newStatus); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, langs]);

  return (
    <>
      <hr />
      <section 
        className="testCheck testCheck--clickable"
        onClick={() => setOpen(!open)}
      >
        <label className="testCheck__label defaultLabel">
          {`${questionCheckLang.question[userLang]} ${index+1}: ${question.name}`}
        </label>
        <div className="testCheck__message">
          {questionCheckLang.overall[userLang]}
        </div>
        <div className={`testCheck__status testCheck__status--${status.overall}`}>
          {status.overall}
        </div>
      </section>
      
      {open && <>
        <br />
        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.q_type[userLang]}
          </label>
          <div className="testCheck__message">
            {q_types[question.type][userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.type}`}>
            {status.type}
          </div>
        </section>

        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.q_position[userLang]}
          </label>
          <div className="testCheck__message">
            {question.position + 1}
          </div>
          <div className={`testCheck__status testCheck__status--${status.position}`}>
            {status.position}
          </div>
        </section>

        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.q_price[userLang]}
          </label>
          <div className="testCheck__message">
            {question.price}
          </div>
          <div className={`testCheck__status testCheck__status--${status.price}`}>
            {status.price}
          </div>
        </section>

        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.q_timeout[userLang]}
          </label>
          <div className="testCheck__message">
            {`${question.timeout} ${questionCheckLang.seconds[userLang]}`}
          </div>
          <div className={`testCheck__status testCheck__status--${status.timeout}`}>
            {status.timeout}
          </div>
        </section>

        <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.answers_added[userLang]}
          </label>
          <div className="testCheck__message">
            {question.answers.length}
            {status.answersQtty === 'Error' && questionCheckLang.two_answers_minimum[userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.answersQtty}`}>
            {status.answersQtty}
          </div>
        </section>

        {question.type === 'freeanswer' && <section className="testCheck">
          <label className="testCheck__label defaultLabel">
            {questionCheckLang.answer_type[userLang]}
          </label>
          <div className="testCheck__message">
            {questionCheckLang[question.answersType][userLang]}
            {status.answersType === 'Error' && questionCheckLang.incorrect_answer_type[userLang]}
          </div>
          <div className={`testCheck__status testCheck__status--${status.answersType}`}>
            {status.answersType}
          </div>
        </section>}

        {langs.map(lang => (<Fragment key={`q${index}${question.name}${lang}`}>
          <br />
          <section className="testCheck">
            <label className="testCheck__label defaultLabel">
              {`${questionCheckLang.q_text_in[userLang]} ${questionLangLang[lang][userLang]}:`}
            </label>
            <div className="testCheck__message">
              {status[`text_${lang}`] === "OK"
                ? questionCheckLang.looks_good[userLang]
                : questionCheckLang.no_text[userLang]
              }
            </div>
            <div className={`testCheck__status testCheck__status--${status[`text_${lang}`]}`}>
              {status[`text_${lang}`]}
            </div>
          </section>
          {question.answers.map((answer, ansIndex) => (<Fragment key={`q${index}a${ansIndex}${lang}`}>
            <section className="testCheck">
              <label className="testCheck__label defaultLabel">
                {questionCheckLang.answer_text_in(lang, ansIndex + 1, userLang)}
              </label>
              <div className="testCheck__message">
                {status[`a${ansIndex}_text_${lang}`] === "OK"
                  ? questionCheckLang.looks_good[userLang]
                  : questionCheckLang.no_text[userLang]
                }
              </div>
              <div className={`testCheck__status testCheck__status--${status[`a${ansIndex}_text_${lang}`]}`}>
                {status[`a${ansIndex}_text_${lang}`]}
              </div>
            </section>

            {question.type === 'findmatch' 
            && <section className="testCheck">
              <label className="testCheck__label defaultLabel">
                {questionCheckLang.equiv_text_in(lang, ansIndex + 1, userLang)}
              </label>
              <div className="testCheck__message">
                {status[`a${ansIndex}_equivalent_${lang}`] === "OK"
                  ? questionCheckLang.looks_good[userLang]
                  : questionCheckLang.no_text[userLang]
                }
              </div>
              <div className={`testCheck__status testCheck__status--${status[`a${ansIndex}_equivalent_${lang}`]}`}>
                {status[`a${ansIndex}_equivalent_${lang}`]}
              </div>
            </section>}
          </Fragment>))}
        </Fragment>))}
        
        {(question.type === "oneofmany" || question.type === "manyofmany") 
        && <>
          <br />
          <section className="testCheck">
            <label className="testCheck__label defaultLabel">
              {questionCheckLang.correct_answers_checked[userLang]}
            </label>
            <div className="testCheck__message">
              {status.answers_correct === "OK"
                ? questionCheckLang.looks_good[userLang]
                : question.type === "oneofmany"
                  ? questionCheckLang.only_one_check[userLang]
                  : status.answers_correct === "Warn"
                    ? questionCheckLang.all_check_warn[userLang]
                    : questionCheckLang.wrong_parametr_warn[userLang]
              }
            </div>
            <div className={`testCheck__status testCheck__status--${status.answers_correct}`}>
              {status.answers_correct}
            </div>
          </section>
        </>}

        {question.type === 'setorder'
        && <>
          <br />
          {question.answers.map((answer, ansIndex) => (
            <section key={`a${ansIndex}_order`} className="testCheck">
              <label className="testCheck__label defaultLabel">
                {questionCheckLang.answer_order(ansIndex+1, userLang)}
              </label>
              <div className="testCheck__message">
                {answer.order}
              </div>
              <div className={`testCheck__status testCheck__status--${status[`a${ansIndex}_order`]}`}>
                {status[`a${ansIndex}_order`]}
              </div>
            </section>
          ))}
        </>}
      </>}
    </>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
})

export default connect(mapStateToProps)(QuestionCheck);