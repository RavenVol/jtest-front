import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SwitchHor from '../helpers/SwitchHor';
import { setTest } from '../../actions/actionCreators';
import { setTestConfigLang } from '../../langs/createTestLang';

const SetTestConfig = ({currentTest, setTest, setHelp, userLang}) => {
  const [emailSelected, setEmailSelected] = useState('');
  const [numberValues, setNumberValues] = useState({
    question_qtty: currentTest.question_qtty,
    retry: currentTest.retry,
  });

  // Temporary autoselect color for test card. Should be deleted after user select will be implemented
  useEffect(() => {
    setTest({...currentTest, color: currentTest.color !== 0 ? currentTest.color : Math.round(Math.random() * 9)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setQuestionsOrder = (type) => {
    setTest({...currentTest, questions_order: type});
  }

  const setNumberField = (value, field) => {
    setNumberValues({...numberValues, [field] : value});
    setTest({...currentTest, [field] : +value});
  }

  return (
    <section className="defaultModule">
      <h3 className="defaultModule__preambula preambula">
        {setTestConfigLang.title[userLang]}
      </h3>
      
      <div className="defaultModule__settings testSettings"> 
        <section className="testSettings__questionQtty">
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--qtty" 
            htmlFor="questionsQtty"
            onMouseOver={() => setHelp(setTestConfigLang.questionQtty_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {setTestConfigLang.questionQtty[userLang]}
          </label>
          <input
            className="defaultInput testSettings__input--qtty"
            id="questionsQtty"
            type="number"
            value={numberValues.question_qtty}
            disabled={currentTest.type === 'social'}
            onChange={(event) => {+event.target.value >= 0 && setNumberField(event.target.value, 'question_qtty')}}
          />
          <p className="testSettings__measure testSettings__measure--qtty">{setTestConfigLang.quetions[userLang]}</p>
        </section>

        <section className="testSettings__questionOrder">
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--order" 
            htmlFor="questionOrder"
            onMouseOver={() => setHelp(setTestConfigLang.questionsOrder_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {setTestConfigLang.questionsOrder[userLang]}
          </label>
          <div className="testSettings__switchWrap">
            <SwitchHor
              left='random'
              right='order'
              defaultPosition={currentTest.questions_order}
              cb={setQuestionsOrder}
            />
          </div>
        </section>

        <section className="testSettings__retryPeriod">
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--retry" 
            htmlFor="retryPeriod"
            onMouseOver={() => setHelp(setTestConfigLang.retryPeriod_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {setTestConfigLang.retryPeriod[userLang]}
          </label>
          <input
            className="defaultInput testSettings__input--retry"
            id="questionsQtty"
            type="number"
            value={numberValues.retry}
            disabled={currentTest.type === 'social'}
            onChange={(event) => {+event.target.value >= -1 && setNumberField(event.target.value, 'retry')}}
          />
          <p className="testSettings__measure testSettings__measure--retry">{setTestConfigLang.days[userLang]}</p>
        </section>

        <section className="testSettings__questionRights">
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--rights"
            onMouseOver={() => setHelp(setTestConfigLang.testRights_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {setTestConfigLang.testRights[userLang]}
          </label>
          <input
            className="testSettings__input--rightsAuthor"
            id="editRights_author"
            type="radio"
            name="editRights"
            value='author'
            checked={currentTest.edit_rights === 'author'}
            onChange={() => setTest({...currentTest, edit_rights : 'author'})}
          />
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--rightsAuthor" 
            htmlFor="editRights_author"
            onMouseOver={() => setHelp(setTestConfigLang.authorRights_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            &nbsp;-&nbsp;{setTestConfigLang.authorRights[userLang]}
          </label>

          <input
            className="testSettings__input--rightsAnybody"
            id="editRights_anybody"
            type="radio"
            name="editRights"
            value='anybody'
            checked={currentTest.edit_rights === 'anybody'}
            onChange={() => setTest({...currentTest, edit_rights : 'anybody'})}
          />
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--rightsAnybody" 
            htmlFor="editRights_anybody"
            onMouseOver={() => setHelp(setTestConfigLang.anybodyRights_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            &nbsp;-&nbsp;{setTestConfigLang.anybodyRights[userLang]}
          </label>

          <input
            className="testSettings__input--rightsSelected"
            id="editRights_selected"
            type="radio"
            name="editRights"
            value='selected'
            checked={currentTest.edit_rights === 'selected'}
            onChange={() => setTest({...currentTest, edit_rights : 'selected'})}
          />
          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--rightsSelected" 
            htmlFor="editRights_selected"
            onMouseOver={() => setHelp(setTestConfigLang.selectedRights_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            &nbsp;-&nbsp;{setTestConfigLang.selectedRights[userLang]}&nbsp;
          </label>
          <input
            className="defaultInput testSettings__input--selectEmail"
            type="email"
            name="editUsers"
            placeholder={setTestConfigLang.allowed_email[userLang]}
            value={emailSelected}
            onChange={event => setEmailSelected(event.target.value)}
          />
          <button
            className={emailSelected.includes('@') && emailSelected.includes('.')
              ? "testSettings__Btn BtnColors--green"
              : "testSettings__Btn BtnColors--disabled"}
            disabled={!emailSelected.includes('@') && !emailSelected.includes('.')}
            onClick={(event) => {
              event.preventDefault();
              if (!currentTest.testEditUsers.includes(emailSelected)) {
                setTest({
                  ...currentTest,
                  testEditUsers: currentTest.testEditUsers.concat(emailSelected)
                })
              }
              setEmailSelected('');
            }}
          >+</button>

          <label 
            className="defaultLabel defaultLabel--withHelp testSettings__label--rightsAllowed"
            onMouseOver={() => setHelp(setTestConfigLang.allowedUsers_hover[userLang])}
            onMouseLeave={() => setHelp('')}
          >
            {setTestConfigLang.allowedUsers[userLang]}
          </label>
          <ul 
            className="testSettings__list testSettings__list--rightsAllowed"
            id="selectedUsers"
          >
            {currentTest.testEditUsers.map(user => (
              <li key={user}>
                <p>{user}</p>
                <button
                  className="testSettings__listBtn BtnColors--red"
                  onClick={(event) => {
                    event.preventDefault();
                    setTest({
                      ...currentTest, 
                      testEditUsers: currentTest.testEditUsers.filter(email => email !== user)
                    });
                  }}
                >X</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentTest: state.currentTest,
  userLang : state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTest
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SetTestConfig);