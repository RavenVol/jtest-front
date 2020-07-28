import React from 'react';
import { connect } from 'react-redux';
import '../../styles/css/ShowTest.css';

const ShowSetOrderAnswersSimple = ({question, type, userLang}) => {
  const q = {
    ...question,
    answers: question.answers.map(answer => ({
      ...answer,
      user_answer: +answer.user_answer,
    }))
  };

  if (type === 'etalon') {
    q.answers.sort((a, b) => a.a_order - b.a_order);
  } else if (type === 'user') {
    q.answers.sort((a, b) => a.user_answer - b.user_answer);
  }

  return (
    <div className="testWindow__answers testWindow__answers--single">
      {q.answers.map(answer => (
        <div 
          key={answer.id} 
          className="testWindow__answer"
          style={(type === 'user' && +answer.a_order !== +answer.user_answer) ? {backgroundColor: 'red'} : {}}
        >
          <div></div>
          <div
            className="testWindow__answerText glass glass--dark withStyles"
            dangerouslySetInnerHTML={{ __html: answer.text[userLang] || answer.text['en'] || answer.text[Object.keys(answer.text)[0]] }}
          />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(ShowSetOrderAnswersSimple);