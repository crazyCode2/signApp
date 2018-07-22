/**
 * 异步数据
 */
import { fork , all } from 'redux-saga/effects';
import loginSaga from '../pages/Login/saga';
import homeSaga from '../pages/Home/saga';
import messageSaga from '../pages/Message/saga';
import mineSaga from '../pages/Mine/saga';
import myElectricitySaga from '../pages/Home/MyElectricity/saga';
import realtimeMonitorSaga from '../pages/RealtimeMonitor/saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    homeSaga(),
    messageSaga(),
    mineSaga(),
    myElectricitySaga(),
    realtimeMonitorSaga(),
  ])
}