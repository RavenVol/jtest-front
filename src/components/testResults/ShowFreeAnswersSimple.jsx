import React from 'react';
import '../../styles/css/ShowTest.css';

const ShowFreeAnswersSimple = ({question, type}) => {
  const answers_texts = question.answers.map(answer => Object.keys(answer.text).map(lang => answer.text[lang])).flat();
  const isCorrect = answers_texts.includes(question.answers[0].user_answer);
  return (
    <div className="testWindow__answers testWindow__answers--single">
      {type === 'etalon' && answers_texts.map(text => (
        <div key={text} className="testWindow__answer">
          <div className="testWindow__answerText glass glass--dark">
            {text}
          </div>
        </div>
      ))}
      {type === 'user'
      && <div 
        className="testWindow__answer"
        style={isCorrect ? {} : {backgroundColor: 'red'}}
      >
        <div className="testWindow__answerText glass glass--dark">
          {question.answers[0].user_answer}
        </div>
      </div>}
    </div>
  )
}

export default ShowFreeAnswersSimple;