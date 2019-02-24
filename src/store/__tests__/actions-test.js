import { createStoreForTests } from '../create';
import { SIMPLE_ACTION } from '../../consts';
import { simpleAction, thunkAction } from '../actions';

describe('Actions', () => {
  describe('simpleAction', () => {
    it('should create correct action if no payload', () => {
      const action = simpleAction();

      expect(action).toEqual({ type: SIMPLE_ACTION, payload: undefined });
    });

    it('should create correct action with payload', () => {
      const payload = 123;
      const action = simpleAction(payload);

      expect(action).toEqual({ type: SIMPLE_ACTION, payload });
    });
  });

  describe('thunkAction', () => {
    let dispatch;
    const initialState = createStoreForTests().getState();
    const getStateFactory = (state = {}) => {
      return () => {
        return {
          ...initialState,
          ...state,
        };
      };
    };

    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('should dispatch correct simpleAction if store.field is string', () => {
      const field = 'some filed value';
      thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledWith(simpleAction(`not ${field}`));
    });

    it('should dispatch correct simpleAction if store.field is bool', () => {
      const field = true;
      thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledWith(simpleAction(!field));
    });

    it('should not dispatch if store.field is something else', () => {
      const field = 42;
      thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledTimes(0);
      // or
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
