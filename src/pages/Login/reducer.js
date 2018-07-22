/**
 * login reducer
 */
import  { loginAction } from '../../store/rootAction';

let stateData = {
  loginState:false,
};

function loginReducer(state = stateData, action) {
  if (action.type === loginAction.updateLoginState) {
    /**
     * Object.assign({},obj,obj1);
     * 花括号叫目标对象，后面的obj、obj1是源对象。
     * 对象合并是指：将源对象里面的属性添加到目标对象中去，若两者的属性名有冲突，后面的将会覆盖前面的
     */
    return Object.assign({}, state, {
      loginState:action.payload.loginState
    });
  } else {
    return state;
  }
}

export default loginReducer;