import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: '',
  email: '',
  first_name: '',
  family_name: '',
  gender: '',
  photo_url: '',
}

export default function loadUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER :
      return action.payload;
    case actionTypes.LOGOUT_USER :
      localStorage.removeItem('token');
      localStorage.removeItem('currentTest');
      localStorage.removeItem('userLang');
      return initialState;
    default:
      return state;
  }
}