/**
 * reducer
 */
import mainPageReducer from '../pages/Login/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mainPageReducer,
});

export default rootReducer;