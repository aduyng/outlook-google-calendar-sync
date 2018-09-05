import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import Root from './containers/Root';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  const createStore = require('./store/configureStore');

  const history = createHashHistory();

  const store = createStore({ initialState, history });
  ReactDOM.render(
    <Root store={store} history={history} />,
    document.querySelector('#root')
  );
});
