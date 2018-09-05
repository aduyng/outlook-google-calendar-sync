import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import storage from '../utils/storage';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
  }) :
  compose;
/* eslint-enable no-underscore-dangle */

export default function ({ initialState, history }) {
  const rootReducerWithRouter = connectRouter(history)(rootReducer);

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    ),
    applyMiddleware(thunk),
    storage(),
  );

  const store = createStore(rootReducerWithRouter, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
