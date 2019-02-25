import { isFalsyField } from '../selectors/selectors';
import simpleReducer from '../store/simpleReducer'; // just an example

export const globalFlag = () => {
  return __SNF__ // eslint-disable-line no-undef
    ? 'It\'s snfiller!'
    : 'Just jsfiller.';
};

export const timers = (callback = () => {}) => {
  callback('Start working');

  const interval = setInterval(() => {
    callback('Tick');
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    callback('Finish');
  }, 1000);
};

// external = external relatively to this file
export const externalDependency = () => {
  const store = simpleReducer();

  return isFalsyField({
    ...store,
    field: store.field === 1,
  });
};

export const asyncLogic = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('result');
    }, 50);
  });
};
