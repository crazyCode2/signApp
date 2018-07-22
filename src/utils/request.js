/**
 * 请求方法封装
 */
import axios from 'axios';
import {baseUrl,loginUrl} from './config';

// 封装超时 CONFIG.REQUEST_TIMEOUT
function timeoutCheck(promise, timeout = 10000) {
  let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("请求超时，请检查你的网络！");
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

// 状态检测
export function checkStatus(response) {
  if (response && response.code === 1002) {
    const error = new Error(response.message);
    error.name = response.code;
    error.response = response;
    throw error;
  } else {
    return response;
  }
}

// 拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    alert('登陆失效')
    // window.location.href = LOG_BASE_URL + '/login?redirect_url=' + window.location.pathname;
  }
  return Promise.reject(error);
});

export default function request(url, options) {
  const login = options && options.login;
  const defaultOptions = {
    withCredentials: true,
    url: url,
    baseURL: login ? loginUrl : baseUrl,
  };
  const newOptions = { ...options, ...defaultOptions };
  axios.request(newOptions)
  .then(checkStatus)
  .then((response) => {
    return response.data;
  })
  .catch(function (error) {//加上catch
    console.log(error);
  })
}
