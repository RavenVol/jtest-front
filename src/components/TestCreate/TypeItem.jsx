import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../../actions/actionCreators';
import { typeItemLang } from '../../langs/createTestLang';

import { selection, cross } from '../../misc/svgImages';

const TypeItem = ({type, params, currentTest, setTest, setHelp, userLang}) => {
  const setType = (type) => {
    if (type === 'social') {
      setTest({
        ...currentTest,
        type,
        question_qtty : 0,
        retry : -1,
        questions_order: 'order',
      });
    } else {
      setTest({
        ...currentTest,
        type,
        question_qtty : +currentTest.question_qtty === 0 ? 10 : currentTest.question_qtty,
        retry : +currentTest.retry === -1 ? 0 : currentTest.retry,
        questions_order: 'random',
      });
    }
  }

  return (
    <li 
      className="typeItem glass glass--middle glass--mate"
      onClick={() => setType(type)}
      onMouseOver={() => setHelp(typeItemLang[`${type}_hover`][userLang])}
      onMouseLeave={() => setHelp('')}
    >
      <div className="checkBox">
        {currentTest.type === type
        && <svg
          x="0px" y="0px" viewBox="0 0 1000 1000"
        >
          {selection}
        </svg>}
      </div>
      <h4 className="typeItem__title">
        {typeItemLang[type][userLang]}
      </h4>

      <div className="typeItem__params">
        {params.map(param => (
          <Fragment key={param.name}>
            <p>{param.name}</p>
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000" fill={param.active ? "#b3f334" : "red"}
            >
              {param.active ? selection : cross}
            </svg>
          </Fragment>
        ))}
      </div>
    </li>
  )
}

const mapStateTpProps = (state) => ({
  currentTest : state.currentTest,
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest
  }, dispatch)
}

export default connect(mapStateTpProps, matchDispatchToProps)(TypeItem);