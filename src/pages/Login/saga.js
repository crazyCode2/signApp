/**
 * login saga
 */
import { fork ,put, call, take, takeEvery,select } from 'redux-saga/effects';
import  {loginAction} from '../../store/rootAction';
import request from '../../utils/request';
// 登录
function * login(){
  while (true) {
    let actionInfo = yield take(loginAction.loginRequest);
    const data = yield call(()=>{
      request('/project/list')
    });
    yield put({
      type: loginAction.updateLoginState,
      payload: {
        loginState:true,
      }
    });
  }
}
// 注销(退出)
function * signOut(){
  while (true) {
    let request = yield take(loginAction.signOut);
    // const data = yield call(delay,500);
    yield put({
      type: loginAction.updateLoginState,
      payload: {
        loginState:false,
      }
    });
  }
}

export default function * loginSaga(){
  yield fork(signOut);
  yield fork(login);
}