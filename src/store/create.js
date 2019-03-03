import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import simpleReducer from './simpleReducer';

const create = (initialState, middlewares = [thunk]) => {
  const finalCreateStore = applyMiddleware(...middlewares)(_createStore);

  return finalCreateStore(simpleReducer, initialState);
};

export const createStoreForTests = create;

export const createStoreForSagaTests = (saga, initialState = undefined) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = create(initialState, [sagaMiddleware]);

  sagaMiddleware.run(saga);

  return store;
};

export default create;
