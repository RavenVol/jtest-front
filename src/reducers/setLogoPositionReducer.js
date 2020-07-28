import * as actionTypes from '../actions/actionTypes';

const initialState = 'center';

export default function setLogoPositionReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LOGO_POS :
      return action.payload;
    default:
      return state;
  }
}