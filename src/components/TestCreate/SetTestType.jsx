import React from 'react';
import { connect } from 'react-redux';

import TypeItem from './TypeItem';
import { setTestTypeLang } from '../../langs/createTestLang';

const SetTestType = ({setHelp, userLang}) => {
  return (
    <section className="defaultModule">
      <h3 className="defaultModule__preambula preambula">
        {setTestTypeLang.title[userLang]}
      </h3>
      <ul className="defaultModule__typeList">
        <TypeItem 
          type='examination'
          params={[
            {name: setTestTypeLang.time_limits[userLang], active: true},
            {name: setTestTypeLang.statistics_visible[userLang], active: false},
            {name: setTestTypeLang.user_see_answers[userLang], active: false},
            {name: setTestTypeLang.author_see_answers[userLang], active: true},
          ]}
          setHelp={setHelp}
        />
        <TypeItem 
          type='education'
          params={[
            {name: setTestTypeLang.time_limits[userLang], active: true},
            {name: setTestTypeLang.statistics_visible[userLang], active: false},
            {name: setTestTypeLang.user_see_answers[userLang], active: true},
            {name: setTestTypeLang.author_see_answers[userLang], active: true},
          ]}
          setHelp={setHelp}
        />
        <TypeItem 
          type='social'
          params={[
            {name: setTestTypeLang.time_limits[userLang], active: false},
            {name: setTestTypeLang.statistics_visible[userLang], active: true},
            {name: setTestTypeLang.user_see_answers[userLang], active: false},
            {name: setTestTypeLang.author_see_answers[userLang], active: false},
          ]}
          setHelp={setHelp}
        />
      </ul>
    </section>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
})

export default connect(mapStateToProps)(SetTestType);