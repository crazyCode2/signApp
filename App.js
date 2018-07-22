/**
 * 入口文件
 */
import React, { Component } from 'react';
import Navigator from './src/utils/navigation';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// 同步redux
import rootReducer from './src/store/rootReducer';
import { Provider } from "react-redux";
// 异步redux
import rootSaga from './src/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
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