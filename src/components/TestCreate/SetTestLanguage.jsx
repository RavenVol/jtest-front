import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setTest } from '../../actions/actionCreators';
import { setTestLanguageLang, languagesLang } from '../../langs/createTestLang'

const langsAvailableForTest = ['be', 'de', 'en', 'es', 'fr', 'it', 'pl', 'ru', 'ua'];

const SetTestLanguage = ({currentTest, setTest, setHelp, userLang}) => {
  const handleLang = (lang) => {
    if (currentTest.langs.includes(lang)) {
      const testName = {...currentTest.testName};
      if (testName.hasOwnProperty(lang) && !testName[lang]) delete testName[lang];
      setTest({
        ...currentTest, 
        langs: currentTest.langs.filter(item => item !== lang),
        testName
      });
    } else {
      const testName = currentTest.testName.hasOwnProperty(lang)
        ? {...currentTest.testName}
        : {...currentTest.testName, [lang]: ""};

      let questions = [...currentTest.questions];
      if (questions.length > 0) {
        questions = currentTest.questions.map(question => {
          const text = {...question.text};
          if (!text.hasOwnProperty(lang)) {
            text[lang] = '';
          }

          let answers = [];
          if (question.answers.length > 0) {
            answers = question.answers.map(answer => {
              const text = {...answer.text};
              if (!text.hasOwnProperty(lang)) text[lang] = '';
              
              const equivalent = {...answer.equivalent};
              if (!equivalent.hasOwnProperty(lang)) equivalent[lang] = '';

              return ({
                ...answer,
                text,
                equivalent
              });
            })
          }

          return ({
            ...question,
            text,
            answers
          })
        })
      }

      setTest({
        ...currentTest,
        langs: currentTest.langs.concat(lang),
        testName,
        questions
      });
    }
  }

  useEffect(() => {
    setHelp(setTestLanguageLang.testLangSelection[userLang]);
    return () => { setHelp('') }
  },[userLang, setHelp]);

  return (
    <section className="defaultModule">
      <h3 className="defaultModule__preambula preambula">
        {setTestLanguageLang.title[userLang]}
      </h3>
      <ul className="defaultModule__langList">
        {[...langsAvailableForTest]
        .sort((a,b) => languagesLang[a][userLang].localeCompare(languagesLang[b][userLang]))
        .map(lang => (
          <li key={lang}>
            <input 
              id={`lang_${lang}`}
              type="checkbox"
              checked={currentTest.langs.includes(lang)} 
              onChange={() => handleLang(lang)}
            />
            <label className="defaultLabel" htmlFor={`lang_${lang}`} >
              &nbsp;{languagesLang[lang][userLang]}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest : state.currentTest,
  userLang: state.userLang
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SetTestLanguage);