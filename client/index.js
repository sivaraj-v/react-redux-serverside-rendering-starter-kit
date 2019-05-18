import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';
import 'babel-polyfill';
import './style/common.css';
import { Provider } from 'react-redux';
import store from '../store';

ReactDOM.hydrate(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('app')
);
