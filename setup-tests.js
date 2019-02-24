// import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const throwError = (message) => {
  throw new Error(message);
};

/* eslint-disable no-console */
console.exception = throwError;
console.error = throwError;
console.warn = throwError;
/* eslint-enable no-console */
