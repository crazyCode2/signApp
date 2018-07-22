/**
 * 入口文件
 */
import React, { Component } from 'react';
// 导航
import Navigator from './src/common/AppNavigation';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// 同步redux
import rootReducer from './src/store/rootReducer';
import { Provider } from "react-redux";
// 异步redux
import rootSaga from './src/store/rootSaga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(
  	logger,
  	sagaMiddleware
  )
);
sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}