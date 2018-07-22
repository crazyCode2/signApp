import axios from 'axios';
import { BASE_URL, LOG_BASE_URL } from './config';
import { notification } from 'antd';

axios.default.baseURL = BASE_URL;

export function checkStatus(response) {
  // console.log('response.code', response)
  if (response && response.code === 1002) {
    notification.error({
      message: `请求错误 ${response.code}`,
      description: `${response.message}`,
    });
    const error = new Error(response.message);
    error.name = response.code;
    error.response = response;
    throw error;
  } else {
    return response;
  }
}

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href = LOG_BASE_URL + '/login?redirect_url=' + window.location.pathname;
  }
  // Do something with response error
  return Promise.reject(error);
});

export default function request(url, options) {
  const common = options && options.common;
  const defaultOptions = {
    withCredentials: true,
    url: url,
    baseURL: common ? LOG_BASE_URL : BASE_URL,
  };
  const newOptions = { ...options, ...defaultOptions };
  return axios.request(newOptions)
    .then(checkStatus)
    .then((response) => {
      return response.data;
    })
    .catch(error => console.log(error));
}