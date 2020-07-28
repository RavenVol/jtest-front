import React from 'react';
import { selection } from '../../misc/svgImages';

const ShowOfManyAnswers = ({question, setQuestion}) => {
  const handleSetCorrect = (a_id) => {
    if (!setQuestion) return;
    
    const answers = [...question.answers];
    const index = answers.findIndex(answer => answer.id === a_id);

    if (question.type === 'oneofmany') {
      answers.forEach(answer => answer.correct = false);
    }
    answers[index].correct = !answers[index].correct;
    
    setQuestion({ ...question, answers })
  }

  return (
    <div 
      className={`testWindow__answers testWindow__answers--${question.answers.every(answer => answer.text.length <= 80) 
        ? 'double' 
        : 'single'}
      `}
    >
      {question.answers.map(answer => (
        <div
          key={answer.id}
          className="testWindow__answer testWindow__answer--ofmany"
          onClick={() => handleSetCorrect(answer.id)}
        >
          <div className="checkBox">
            {(answer.correct && answer.correct !== "false")
            && <svg
              x="0px" y="0px" viewBox="0 0 1000 1000"
            >
              {selection}
            </svg>}
          </div>
          <div
            className="testWindow__answerText glass glass--dark withStyles"
            dangerouslySetInnerHTML={{ __html: answer.text }}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowOfManyAnswers;