/**
 * 请求方法封装
 */
import axios from 'axios';
import {baseUrl,loginUrl} from './config';

export function checkStatus(response) {
  if (response && response.code === 1002) {
    throw error;
  } else {
    return response;
  }
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    alert('登陆超时')
    // window.location.href = LOG_BASE_URL + '/login?redirect_url=' + window.location.pathname;
  }
});

export default function request(url, options) {
  const login = options && options.login;
  const defaultOptions = {
    withCredentials: true,
    url: url,
    baseURL: login ? loginUrl : baseUrl,
  };
  const newOptions = { ...options, ...defaultOptions };
  return axios.request(newOptions)
    .then(checkStatus)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {//加上catch
      console.log(error);
    })
}
