/**
 * 异步数据
 */
import { fork , all } from 'redux-saga/effects';
import helloSaga from '../pages/Login/saga';

export default function* rootSaga() {
  yield all([
    helloSaga(),
  ])
}