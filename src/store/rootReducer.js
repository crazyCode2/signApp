/**
 * reducer
 */
import { combineReducers } from 'redux';
import homeReducer from '../pages/Home/reducer';
import loginReducer from '../pages/Login/reducer';
import messageReducer from '../pages/Message/reducer';
import mineReducer from '../pages/Mine/reducer';
import myElectricityReducer from '../pages/Home/MyElectricity/reducer';
import realtimeMonitorReducer from '../pages/RealtimeMonitor/reducer';

const rootReducer = combineReducers({
  loginReducer,
  messageReducer,
  homeReducer,
  mineReducer,
  myElectricityReducer,
  realtimeMonitorReducer,
});

export default rootReducer;