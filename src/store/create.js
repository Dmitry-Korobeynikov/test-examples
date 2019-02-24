import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import simpleReducer from './simpleReducer';

const create = (initialState) => {
  const middlewares = [thunk];
  const finalCreateStore = applyMiddleware(...middlewares)(_createStore);

  return finalCreateStore(simpleReducer, initialState);
};

export const createStoreForTests = create;
export default create;
