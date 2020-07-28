import React from 'react';

const ShowFreeAnswer = ({ question, setQuestion }) => {
  const handleFreeAnswer = (value) => {
    setQuestion({
      ...question,
      answers: [value],
    });
  }

  return (
    <div className="testWindow__answer testWindow__answer--single">
      <input
        className="testWindow__answer testWindow__answer--freeanswer defaultInput"
        type={question.answer_type}
        maxLength="255"
        autoFocus
        value={question.answers[0]}
        onChange={(event) => handleFreeAnswer(event.target.value)}
      />
    </div>
  );
}

export default ShowFreeAnswer;