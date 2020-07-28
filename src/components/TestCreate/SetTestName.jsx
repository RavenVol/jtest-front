import React, { useEffect } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../../actions/actionCreators';
import { cross } from '../../misc/svgImages';

import { setTestNameLang, languagesLang } from '../../langs/createTestLang';

const SetTestName = ({currentTest, setTest, setHelp, userLang}) => {
  useEffect(() => {
    setHelp(setTestNameLang.test_name[userLang]);
    return () => {setHelp('')};
  }, [userLang, setHelp]);

  const deleteLangFromTest = (lang) => {
    const testName = {...currentTest.testName};

    if (!testName[lang]) {
      delete testName[lang];
    }
    setTest({
      ...currentTest,
      langs : currentTest.langs.filter(testLang => testLang !== lang),
      testName
    });
  }
  
  return (
    <section className="defaultModule">
      <h3 className="defaultModule__preambula preambula">
        {setTestNameLang.title[userLang]}
      </h3>
      <div className="defaultModule__testName">
        {currentTest.langs.map(lang => (
          <div 
            key={lang}
            className="testName"
          >
            <label className='defaultLabel' htmlFor={`leng_${lang}`}>
              {languagesLang[lang][userLang]}
            </label>
            
            <textarea 
              className="testName__nameInput defaultInput"
              id={`lang_${lang}`}
              rows='2'
              value={currentTest.testName[lang]}
              onChange={(event) => setTest({
                ...currentTest,
                testName : {
                  ...currentTest.testName,
                  [lang] : event.target.value
                }
              })}
            />

            {currentTest.langs.length > 1 
            && <button
              className="testName__delLangBtn glass glass--greenBottle glass--mate"
              onClick={() => deleteLangFromTest(lang)}
            >
              <svg
                x="0px" y="0px" viewBox="0 0 1000 1000" fill="red"
              >
                {cross}
              </svg>
            </button>}
          </div>
        ))}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest : state.currentTest,
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SetTestName);