import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../../actions/actionCreators';
import { questionConfLang, q_types } from '../../langs/createTestLang';

const questionTypes = ['oneofmany', 'manyofmany', 'setorder', 'findmatch', 'freeanswer'];

const QuestionConf = ({currentTest, currentQuestion, setTest, setCurrentQuestion, setHelp, userLang}) => {
  const [numberValues, setNumberValues] = useState({
    price: +currentTest.questions[currentQuestion].price,
    timeout: +currentTest.questions[currentQuestion].timeout,
    position: +currentTest.questions[currentQuestion].position + 1,
  });

  useEffect(() => {
    setNumberValues({
      price: +currentTest.questions[currentQuestion].price,
      timeout: +currentTest.questions[currentQuestion].timeout,
      position: +currentTest.questions[currentQuestion].position + 1,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);
  
  const addDataToCurrentTest = (field, data) => {
    let newData = data;
    switch (field) {
      case 'name' :
        if (typeof(data) !== 'string') return;
        break;
      case 'price' : 
        newData = +data;
        if (+data < 0) return;
        if (+data < 1) newData = 1;
        break;
      case 'timeout' :
        newData = +data;
        if (+data < 0) return;
        if (+data < 1) newData = 1;
        break;
      case 'type' :
        if (!questionTypes.includes(data)) return;
        break;
      case 'position' :
        newData = +data - 1;
        if (newData < 0) newData = 0;
        if (newData > currentTest.questions.length - 1) newData = currentTest.questions.length - 1;

        const questions = currentTest.questions;
        questions.splice(newData, 0, questions.splice(currentQuestion, 1)[0]);
        questions.forEach((question, index) => question.position = index);
        setTest({
          ...currentTest,
          questions
        });
        setCurrentQuestion(newData);
        setNumberValues({...numberValues, [field]: +data < 0 ? 0 : +data > currentTest.questions.length ? currentTest.questions.length : data})
        return;
      default: return;
    }
    const questions = currentTest.questions.map((question, index) => index === currentQuestion 
      ? {...question,
          [field]: newData
        }
      : question
    );

    setTest({
      ...currentTest,
      questions
    });
    setNumberValues({...numberValues, [field]: data});
  }
  
  return (
    <section className="questionConf">
      <h3 className="questionConf__preambula preambula">
        {questionConfLang.title[userLang]}
      </h3>
      <section className="questionConf__main questionConfMain">
        <div className="questionConfMain__questionName">
          <label 
            className="defaultLabel defaultLabel--withHelp" 
            htmlFor="questionName"
            onMouseOver={() => setHelp(questionConfLang.q_name_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {questionConfLang.q_name[userLang]}
          </label>
          <input 
            id="questionName"
            className="defaultInput"
            type="text"
            value={currentTest.questions[currentQuestion].name}
            onChange={(event) => addDataToCurrentTest('name', event.target.value)}
          />
        </div>

        <div className="questionConfMain__questionPosition">
          <label 
            className="defaultLabel defaultLabel--withHelp" 
            htmlFor="questionPosition"
            onMouseOver={() => setHelp(questionConfLang.q_position_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {questionConfLang.q_position[userLang]}
          </label>
          <input 
            id="questionPosition"
            className="defaultInput"
            type="number"
            value={numberValues.position}
            onChange={(event) => addDataToCurrentTest('position', event.target.value)}
          />
        </div>

        <div className="questionConfMain__questionPrice">
          <label 
            className="defaultLabel defaultLabel--withHelp" 
            htmlFor="questionPrice"
            onMouseOver={() => setHelp(questionConfLang.q_price_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {questionConfLang.q_price[userLang]}
          </label>
          <input 
            id="questionPrice"
            className="defaultInput"
            type="number"
            value={numberValues.price}
            onChange={(event) => addDataToCurrentTest('price', event.target.value)}
          />
        </div>

        <div className="questionConfMain__questionTimeOut">
          <label 
            className="defaultLabel defaultLabel--withHelp" 
            htmlFor="questionTimeout"
            onMouseOver={() => setHelp(questionConfLang.q_timeout_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {questionConfLang.q_timeout[userLang]}
          </label>
          <input 
            id="questionTimeout"
            className="defaultInput"
            type="number"
            value={numberValues.timeout}
            onChange={(event) => addDataToCurrentTest('timeout', event.target.value)}
          />
          <p className="testSettings__measure">{questionConfLang.seconds[userLang]}</p>
        </div>

        <div className="questionConfMain__questionType">
          <label 
            className="defaultLabel defaultLabel--withHelp" 
            htmlFor="questionType"
            onMouseOver={() => setHelp(questionConfLang.q_type_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {questionConfLang.q_type[userLang]}
          </label>

          <div>
            {questionTypes
            .filter(qtype => currentTest.type === 'social' ? qtype !== 'findmatch' : true)
            .map(qtype => (
              <div key={qtype}>
                <input
                  id={`questionType_${qtype}`}
                  type="radio"
                  name="questionType"
                  checked={currentTest.questions[currentQuestion].type === qtype}
                  onChange={() => addDataToCurrentTest('type', qtype)}
                />
                <label 
                  className="defaultLabel defaultLabel--withHelp" 
                  htmlFor={`questionType_${qtype}`}
                  onMouseOver={() => setHelp(questionConfLang[`${qtype}_hover`][userLang])}
                  onMouseLeave={() => setHelp('')}
                >
                  &nbsp;-&nbsp;{q_types[qtype][userLang]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest: state.currentTest,
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionConf);