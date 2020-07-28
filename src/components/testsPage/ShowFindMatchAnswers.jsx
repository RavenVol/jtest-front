import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { equivalent } from '../../misc/svgImages';
import { showTestLang } from '../../langs/showTestLang';

const ShowFindMatchAnswer = ({ question, setQuestion, userLang }) => {
  const handleDragEnd = (moveInfo) => {
    const {destination, source} = moveInfo;

    if (!destination || destination.droppableId === source.droppableId) return;
    
    const sourceId = source.droppableId === 'unused'
      ? source.droppableId
      : source.droppableId.split('_drop')[0];

    const destinationId = destination.droppableId === 'unused'
      ? destination.droppableId
      : destination.droppableId.split('_drop')[0];

    if (sourceId === 'unused') {
      const replacedEquivalent = question.answers.filter(answer => answer.id === destinationId)[0].equivalent;
      const newAnswers = question.answers.map(answer => {
        if (answer.id === destinationId) {
          return ({
            ...answer,
            equivalent: question.unusedEquivalents[source.index],
          })
        }
        return ({...answer});
      });

      const newUnusedEquivalents = question.unusedEquivalents.filter((eauivalent, index) => index !== source.index);
      if (replacedEquivalent.id) {
        newUnusedEquivalents.push(replacedEquivalent);
      }

      setQuestion({
        ...question,
        answers: newAnswers,
        unusedEquivalents: newUnusedEquivalents,
      });
    } else if (destinationId === 'unused') {
      const newUnusedEquivalents = [...question.unusedEquivalents];
      newUnusedEquivalents.splice(destination.index, 0, question.answers.filter(answer => answer.id === sourceId)[0].equivalent);

      const newAnswers = question.answers.map(answer => {
        if (answer.id === sourceId) {
          return ({
            ...answer,
            equivalent: {id: '', text: ''},
          })
        }

        return ({...answer});
      });

      setQuestion({
        ...question,
        answers: newAnswers,
        unusedEquivalents: newUnusedEquivalents,
      });
    } else {
      const newUnusedEquivalents = [...question.unusedEquivalents];
      const moveEquivalent = question.answers.filter(answer => answer.id === sourceId)[0].equivalent;
      const replacedEquivalent = question.answers.filter(answer => answer.id === destinationId)[0].equivalent;
      
      const newAnswers = question.answers.map(answer => {
        if (answer.id === sourceId) {
          return ({
            ...answer,
            equivalent: {id: '', text: ''},
          });
        }

        if (answer.id === destinationId) {
          return ({
            ...answer,
            equivalent: moveEquivalent,
          });
        }

        return ({...answer});
      });

      if (replacedEquivalent.id) {
        newUnusedEquivalents.push(replacedEquivalent);
      }

      setQuestion({
        ...question,
        answers: newAnswers,
        unusedEquivalents: newUnusedEquivalents,
      });
    }
  }

  const getDraggableStyle = (isDragging, draggableStyle) => {
    if(isDragging) {
      const newStyle = {...draggableStyle};
      newStyle.top = draggableStyle.top - 70 + window.scrollY; // -68
      newStyle.left = draggableStyle.left - 10; // -28
      return newStyle;
    };

    return draggableStyle;
  }

  return (
    <DragDropContext onDragEnd={(moveInfo) => handleDragEnd(moveInfo)}>
      <div className="testWindow__answers testWindow__answers--single">
        {question.answers.map(answer => (
          <div 
            key={answer.id}
            className="testWindow__answer testWindow__answer--findmatch"
          >
            <div 
              className="testWindow__answerText glass glass--dark withStyles"
              dangerouslySetInnerHTML={{ __html: answer.text }}
            />
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000" fill="#b3f334"
            >
              {equivalent}
            </svg>
            <Droppable droppableId={`${answer.id}_drop`}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {answer.equivalent.id
                    ? <Draggable draggableId={`${answer.id}_drag`} index={1}>
                      {(provided, snapshot) => (
                        <div 
                          className="testWindow__answerText glass glass--dark withStyles"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps} 
                          dangerouslySetInnerHTML={{ __html: answer.equivalent.text }}
                          style={getDraggableStyle(snapshot.isDragging, provided.draggableProps.style)}
                        />
                      )}
                    </Draggable>
                    : <div className="testWindow__answerText glass glass--dark"/>
                  }
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>

      <div className="testWindow__unusedAnswers glass glass--middle">
        <p className="testWindow__unusedAnswers--title glass glass--dark">{showTestLang.answers_list[userLang]}</p>
        <Droppable droppableId="unused">
          {(provided) => (
            <div 
              className="testWindow__answers testWindow__answers--single"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {question.unusedEquivalents.map((equivalent, index) => (
                <Draggable key={equivalent.id} draggableId={`equiv_${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div 
                      className="testWindow__answer testWindow__answerText glass glass--dark withStyles"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      dangerouslySetInnerHTML={{ __html: equivalent.text }}
                      style={getDraggableStyle(snapshot.isDragging, provided.draggableProps.style)}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default ShowFindMatchAnswer;