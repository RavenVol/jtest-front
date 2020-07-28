import React from 'react';
import { connect } from 'react-redux';
import { selection } from '../../misc/svgImages';

const ShowOfManyAnswers = ({question, type, userLang}) => (
  <div className={`testWindow__answers testWindow__answers--single`}>
    {question.answers.map(answer => (
      <div 
        key={answer.id} 
        className="testWindow__answer testWindow__answer--ofmany"
        style={type==='user' && answer.correct !== answer.user_answer ? {backgroundColor: 'red'} : {}}
      >
        <div className="checkBox">
          {type === 'etalon' 
          ? (answer.correct && answer.correct !== "false")
            && <svg x="0px" y="0px" viewBox="0 0 1000 1000">
              {selection}
            </svg>
          : (answer.user_answer && answer.user_answer !== "false")
            && <svg x="0px" y="0px" viewBox="0 0 1000 1000">
              {selection}
            </svg>}
        </div>
        <div
          className="testWindow__answerText glass glass--dark withStyles"
          dangerouslySetInnerHTML={{ __html: answer.text[userLang] || answer.text['en'] || answer.text[Object.keys(answer.text)[0]] }}
        />
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  userLang : state.userLang
})

export default connect(mapStateToProps)(ShowOfManyAnswers);