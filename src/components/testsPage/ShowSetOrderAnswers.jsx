import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import '../../styles/css/ShowTest.css';

const ShowSetOrderAnswers = ({question, setQuestion}) => {
  const handleSetOrder = (moveInfo) => {
    if (!moveInfo || !moveInfo.destination || moveInfo.destination.index === moveInfo.source.index) return;

    const answers = [...question.answers];
    answers.splice(moveInfo.destination.index, 0, answers.splice(moveInfo.source.index, 1)[0]);
    const newAnswers = answers.map((answer, index) => ({
      ...answer,
      order: index + 1,
    })).sort((a1, a2) => a1.order - a2.order);

    setQuestion({
      ...question,
      answers: newAnswers,
    });
  }

  const getDraggableStyle = (isDragging, draggableStyle) => {
    if(isDragging) {
      const newStyle = {...draggableStyle};
      newStyle.top = draggableStyle.top-70+window.scrollY;
      newStyle.left = draggableStyle.left-10;
      return newStyle;
    };

    return draggableStyle;
  }

  return (
    <DragDropContext onDragEnd={(moveInfo) => handleSetOrder(moveInfo)}>
      <Droppable droppableId='answes'>
        {(provided) => (
          <div
            className="testWindow__answers testWindow__answers--single"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {question.answers.map((answer, index) => (
              <Draggable key={answer.id} draggableId={answer.id} index={index}>
                {(provided, snapshot) => (
                  <div 
                    className="testWindow__answer"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getDraggableStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    <div></div>

                    <div
                      className="testWindow__answerText glass glass--dark withStyles"
                      dangerouslySetInnerHTML={{ __html: answer.text }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ShowSetOrderAnswers;