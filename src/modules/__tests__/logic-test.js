import { globalFlag, timers, externalDependency, asyncLogic } from '../logic';

import * as selectors from '../../selectors/selectors';

let mockReducerResult;
jest.mock('../../store/simpleReducer', () => {
  return () => {
    return mockReducerResult;
  };
});

/* eslint-disable no-undef, no-underscore-dangle */
describe('globalFlag', () => {
  const initialSNFValue = __SNF__;

  const runTests = (flagValue) => {
    describe(`(${flagValue})`, () => {
      beforeAll(() => {
        global.__SNF__ = flagValue;
      });

      afterAll(() => {
        global.__SNF__ = initialSNFValue;
      });

      it('should return correct value', () => {
        const result = globalFlag();
        const expectedResult = __SNF__
          ? 'It\'s snfiller!'
          : 'Just jsfiller.';

        expect(result).toEqual(expectedResult);
      });
    });
  };

  runTests(true);
  runTests(false);
});
/* eslint-enable no-undef, no-underscore-dangle */

describe('timers', () => {
  const callback = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();

    callback.mockClear();
  });

  it('should not fail if cb is undefined', () => {
    expect(timers).not.toThrow();
    // or .toThrow(<message or error class>) if function should throw an exception
  });

  it('should setup timers', () => {
    timers(callback);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 100);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it('should call cb with start message', () => {
    timers(callback);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('Start working');
  });

  it('should call cb with tick after each 100ms before 1000ms', () => {
    timers(callback);

    expect(callback).toHaveBeenCalledTimes(1); // start message

    for (let i = 1; i < 10; i++) {
      jest.advanceTimersByTime(100);

      expect(callback).toHaveBeenCalledTimes(i + 1);
      expect(callback).toHaveBeenNthCalledWith(i + 1, 'Tick'); // or toHaveBeenLastCalledWith
    }
  });

  it('should call cb with finish message and clearInterval after 1000ms', () => {
    timers(callback);

    jest.runOnlyPendingTimers(); // or jest.runAllTimers() for finite timers

    expect(callback).toHaveBeenCalledWith('Finish');
    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
  });
});

// external = external relatively to testing unit
describe('externalDependency', () => {
  let isFalsyField;

  beforeAll(() => {
    isFalsyField = jest.spyOn(selectors, 'isFalsyField');
  });

  afterEach(() => {
    selectors.isFalsyField.mockReset();
  });

  afterAll(() => {
    selectors.isFalsyField.mockRestore();
  });

  it('should return false if field is 1', () => {
    mockReducerResult = { field: 1 };
    isFalsyField.mockImplementation((store) => {
      return !store.field;
    });

    const result = externalDependency();

    expect(result).toEqual(false);
  });

  it('should return true if field is not 1', () => {
    mockReducerResult = { field: 'abc' };
    isFalsyField.mockImplementation((store) => {
      return !store.field;
    });

    const result = externalDependency();

    expect(result).toEqual(true);
  });
});

describe('asyncLogic', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should return Promise', () => {
    const promise = asyncLogic();

    expect(promise).toBeInstanceOf(Promise);
  });

  it('should resolved with "result" string', () => {
    const promise = asyncLogic();

    jest.runAllTimers();

    return promise.then((result) => {
      expect(result).toBe('result');
    });
  });
});
