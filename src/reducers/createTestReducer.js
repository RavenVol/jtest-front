import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: '',
  testName: {},
  type: 'education',
  questions_order: 'random',
  langs: [],
  question_qtty: 10,
  retry: 0,
  edit_rights : 'author',
  testEditUsers: [],
  category: 0,
  status: 'edit',
  questions: [],
  color: 0,
}

export default function createTestReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEST_FROM_LS :
      return action.payload;
    case actionTypes.SET_TEST :
      return action.payload;
    case actionTypes.LOGOUT_USER :
      return initialState;
    default:
      return state;
  }
}