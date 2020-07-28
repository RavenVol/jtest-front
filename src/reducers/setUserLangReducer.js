import * as actionTypes from '../actions/actionTypes';

const initialState = 'en';

export default function setUserLangReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USERLANG :
      return action.payload;
    case actionTypes.LOGOUT_USER :
      return initialState;
    default:
      return state;
  }
}