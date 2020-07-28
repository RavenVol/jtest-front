import React from 'react';
import { connect } from 'react-redux';

import { graphLegendLang } from '../../langs/testResultLang';

import '../../styles/css/GraphLegend.css';

const GraphLegend = ({answers, lang, userLang}) => {
  return (
    <div className="graphLegend">
      <p className="graphLegend__title">{graphLegendLang.legend[userLang]}</p>
      <div className={`graphLegend__main graphLegend__main--${answers.every(answer => answer.text[lang].length < 80) ? 'double' : 'single'}`}>
        {answers.map((answer, index) => (
          <div key={answer.id} className={`graphLegend__row graphLegend__row--${answers.every(answer => answer.text[lang].length < 80) ? 'double' : 'single'}`}>
            <div className="graphLegend__itemName" style={{backgroundColor: answer.color}}>
              {`${graphLegendLang.answer[userLang]} ${index + 1}: `}
            </div>
            <div
              className="graphLegend__itemText glass glass--dark withStyles"
              dangerouslySetInnerHTML={{ __html: answer.text[lang] }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
})

export default connect(mapStateToProps)(GraphLegend);