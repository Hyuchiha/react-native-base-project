import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------ Logger Middleware ------------- */
  if (__DEV__) {
    middleware.push(createLogger({ collapsed: true }));
  }

  /* ------------- Enable Devtools ------------ */
  let _compose = compose;

  if (__DEV__) {
    _compose = (window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware), _compose);

  /* ------------- AutoRehydrate Enhancer ------------- */

  // in dev mode, we'll create the store through Reactotron
  const store = createStore(rootReducer, compose(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
