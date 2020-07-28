import * as actionTypes from './actionTypes';

export function loadUser(user) {
  return {
    type: actionTypes.LOAD_USER,
    payload: user
  }
}

export function logoutUser() {
  return {
    type: actionTypes.LOGOUT_USER,
  }
}

export function setTest(currentTest) {
  return {
    type: actionTypes.SET_TEST,
    payload: currentTest
  }
}

export function loadTestFromLS() {
  const currentTest = JSON.parse(localStorage.getItem('currentTest'));
  
  if (currentTest) {
    return {
      type: actionTypes.TEST_FROM_LS,
      payload: currentTest
    }
  }

  return {type: 'SKIP'};
}

export function setLogoPosition(logoPosition) {
  return {
    type: actionTypes.SET_LOGO_POS,
    payload: logoPosition,
  }
}

export function setUserLang(userLang) {
  return {
    type: actionTypes.SET_USERLANG,
    payload: userLang,
  }
}