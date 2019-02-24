import { SIMPLE_ACTION } from '../../consts';
import simpleReducer, { initialState } from '../simpleReducer';

describe('simpleReducer', () => {
  it('should return initial state for the first call', () => {
    const newState = simpleReducer();

    expect(newState).toEqual(initialState);
  });

  describe('should correctly react on SIMPLE_ACTION', () => {
    const createAction = (payload) => {
      return { type: SIMPLE_ACTION, payload };
    };

    it('should set field property', () => {
      const newField = 'test';
      const newState = simpleReducer(initialState, createAction(newField));

      expect(newState).toEqual({
        ...initialState,
        field: newField,
      });
    });
  });

  it('should ignore unknown actions', () => {
    const newState = simpleReducer(initialState, { type: 'some action' });

    expect(newState).toEqual(initialState);
  });
});
