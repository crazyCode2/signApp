/**
 * login saga
 */
import { fork ,put, call, take, takeEvery,select } from 'redux-saga/effects';
import  {loginAction} from '../../store/rootAction';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function * login(){
  while (true) {
    let request = yield take(loginAction.loginRequest);
    const data = yield call(delay,500);
    yield put({
      type: loginAction.updateLoginState,
      payload: {
        loginState:true,
      }
    });
  }
}

function * signOut(){
  while (true) {
    let request = yield take(loginAction.signOut);
    const data = yield call(delay,500);
    yield put({
      type: loginAction.updateLoginState,
      payload: {
        loginState:false,
      }
    });
  }
}

export default function * helloSaga(){
  yield fork(signOut);
  yield fork(login);
}