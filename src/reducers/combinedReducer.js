import { combineReducers } from 'redux';
import loadUserReducer from './loadUserReducer';
import createTestReducer from './createTestReducer';
import setLogoPositionReducer from './setLogoPositionReducer';
import setUserLangReducer from './setUserLangReducer';

const combinedReducer = combineReducers({
  user: loadUserReducer,
  currentTest: createTestReducer,
  logoPosition: setLogoPositionReducer,
  userLang: setUserLangReducer,
})

export default combinedReducer;