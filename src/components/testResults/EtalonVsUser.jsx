import React, {useState, useEffect, Fragment} from 'react';
import { connect } from 'react-redux';

import ShowOfManyAnswersSimple from './ShowOfManyAnswersSimple';
import ShowSetOrderAnswersSimple from './ShowSetOrderAnswersSimple';
import ShowFindMatchAnswersSimple from './ShowFindMatchAnswersSimple';
import ShowFreeAnswersSimple from './ShowFreeAnswersSimple';
import { etalonVsUserLang } from '../../langs/testResultLang';

import '../../styles/css/EtalonVsUser.css';

const EtalonVsUser = ({question, number, allowed, addFreeAnswer, userLang}) => {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setVisible(true);
    }, 2500 + number * 50);

    return (() => clearTimeout(delay));
  }, [number]);

  const handleAddFreeAnswer = (answer) => {
    const question_langs = Object.keys(question.text);
    const newAnswer = {
      id: '',
      a_order: question.answers.length + 1,
      correct: false,
      text: {},
    };
    question_langs.forEach(lang => {
      newAnswer.text[lang] = answer;
    })

    addFreeAnswer(question.id, question.type, question_langs, newAnswer);
  }

  return (
    <div className={`EVU ${visible ? 'EVU--visible': ''} glass glass--dark`}>
      <div 
        className='EVU__preview'
        onClick={() => setOpened(!opened)}
      >
        <p>{`${etalonVsUserLang.question[userLang]} ${number}`}</p>
        <p>{question.score}</p>
        <p>{etalonVsUserLang.of[userLang]}</p>
        <p>{question.price} </p>
        <p>{etalonVsUserLang.points[userLang]}</p>
      </div>
      {opened
      && <div className='EVU__compare'>
        <div 
          className="EVU__question glass glass--dark withStyles"
          dangerouslySetInnerHTML={{ __html: question.text[userLang] || question.text.en || question.text[Object.keys(question.text)[0]] }}
        />
        <div className="EVU__answers">
          <div className="EVU__answers--etalon glass glass--middle">
            <p>{etalonVsUserLang.etalon_answer[userLang]}</p>

            {(question.type === "oneofmany" || question.type === 'manyofmany')
            && <div className="EVU__minimize">
              <ShowOfManyAnswersSimple 
                question={question}
                type="etalon"
              />
            </div>}

            {question.type === 'setorder'
            && <div className="EVU__minimize">
              <ShowSetOrderAnswersSimple 
                question={question}
                type="etalon"
              />
            </div>}

            {question.type === 'findmatch'
            && <div className="EVU__minimize">
              <ShowFindMatchAnswersSimple 
                question={question}
                type="etalon"
              />
            </div>}

            {question.type === 'freeanswer'
            && <div className="EVU__minimize">
              <ShowFreeAnswersSimple 
                question={question}
                type="etalon"
              />
            </div>}
          </div>

          <div className="EVU__answers--user glass glass--middle">
            <p>{etalonVsUserLang.user_answer[userLang]}</p>

            {(question.type === "oneofmany" || question.type === 'manyofmany')
            && <div className="EVU__minimize">
              <ShowOfManyAnswersSimple 
                question={question}
                type="user"
              />
            </div>}

            {question.type === 'setorder'
            && <div className="EVU__minimize">
              <ShowSetOrderAnswersSimple 
                question={question}
                type="user"
              />
            </div>}

            {question.type === 'findmatch'
            && <div className="EVU__minimize">
              <ShowFindMatchAnswersSimple 
                question={question}
                type="user"
              />
            </div>}

            {question.type === 'freeanswer'
            && <Fragment>
              <div className="">
                <ShowFreeAnswersSimple 
                  question={question}
                  type="user"
                />
              </div>
              {(question.score === 0 && allowed === 'author')
              && <button 
                className="EVU__setCorrect controlBtn BtnColors--blue"
                onClick={() => handleAddFreeAnswer(question.answers[0].user_answer)}
              >
                {etalonVsUserLang.consider_correct[userLang]}
              </button>}
            </Fragment>}
          </div>
        </div>
      </div>}
    </div>
  )
}

const mapStateToProps= (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(EtalonVsUser);