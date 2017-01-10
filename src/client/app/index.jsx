
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

global.__base = __dirname + '/';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);