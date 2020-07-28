import React from 'react';
import { connect } from 'react-redux';
import { equivalent } from '../../misc/svgImages';

const ShowFindMatchAnswersSimple = ({ question, type, userLang }) => {
  const question_langs = Object.keys(question.answers[0].text);
  const curr_lang = question_langs.includes(userLang)
    ? userLang
    : question_langs.includes('en')
      ? 'en'
      : question_langs[0];

  return (
  <div className="testWindow__answers testWindow__answers--single">
    {question.answers.map(answer => (
      <div 
        key={answer.id} 
        className="testWindow__answer testWindow__answer--findmatch"
        style={(type === 'user' && answer.id !== answer.user_answer) ? {backgroundColor: 'red'} : {}}
      >
        <div 
          className="testWindow__answerText glass glass--dark withStyles"
          dangerouslySetInnerHTML={{ __html: answer.text[curr_lang] }}
        />

        <svg
          x="0px" y="0px" viewBox="0 0 1000 1000" fill="#b3f334"
        >
          {equivalent}
        </svg>
        <div 
          className="testWindow__answerText glass glass--dark withStyles"
          dangerouslySetInnerHTML={{ 
            __html: `${type === 'etalon'
            ? answer.equivalent[curr_lang]
            : answer.id === answer.user_answer
              ? answer.equivalent[curr_lang]
              : question.answers.filter(ans => ans.id === answer.user_answer)[0]
                ? question.answers.filter(ans => ans.id === answer.user_answer)[0].equivalent[curr_lang]
                : ''}`}}
        />
      </div>
    ))}
  </div>
)}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(ShowFindMatchAnswersSimple);