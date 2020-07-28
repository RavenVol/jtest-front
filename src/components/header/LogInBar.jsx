import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadUser } from '../../actions/actionCreators';
import FormRegister from '../Forms/FormRegister';
import FormLogin from '../Forms/FormLogin';
import SignInProvidersList from './SignInProvidersList';

import { loginSigninLang } from '../../langs/loginSigninLang';

const LoginBar = ({userLang, loadUser}) => {
  const [reg, setReg] = useState(false);
  const [regMessage, setRegMessage] = useState('');

  useEffect(() => {
    if (regMessage) {
      setTimeout(() => {
        setRegMessage('');
        setReg(false);
      }, 10000);
    }
  }, [regMessage]);

  if (regMessage) {
    return (
      <>
        <div className="signBar">
          <p className="signBar__message">{loginSigninLang[regMessage][userLang]}</p>
        </div>
        <hr />
        <div className="register">
          <div>{loginSigninLang.have_account[userLang]}</div>
          <button
            className="form__button form__button--center BtnColors--green"
            onClick={() => setReg(false)}
          >
            {loginSigninLang.login[userLang]}
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      {reg
        ? <div className="signBar">
            <div className="">
              <FormRegister userLang={userLang} setRegMessage={setRegMessage}/>
            </div>
            <hr />
            <div className="register">
              <div>{loginSigninLang.have_account[userLang]}</div>
              <button
                className="form__button form__button--center BtnColors--green"
                onClick={() => setReg(false)}
              >
                {loginSigninLang.login[userLang]}
              </button>
            </div>
          </div>
        : <div className="signBar">
            <div className="">
              <FormLogin loadUser={loadUser} userLang={userLang}/>
            </div>

            <hr />

            <div className="signInBtns">
              <SignInProvidersList loadUser={loadUser} userLang={userLang}/>
            </div>

            <hr />

            <div className="register">
              <div>{loginSigninLang.no_account[userLang]}</div>
              <button
                className="form__button form__button--center BtnColors--green"
                onClick={() => setReg(true)}
              >
                {loginSigninLang.register[userLang]}
              </button>
            </div>
          </div>
      }
    </>
  )
};

const mapStateToProps = (state) => ({
  userLang: state.userLang,
});

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadUser,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginBar);