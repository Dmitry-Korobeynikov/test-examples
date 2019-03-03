import { createStoreForTests } from '../create';
import { SIMPLE_ACTION, SAGA_TRIGGER_ACTION } from '../../consts';
import * as logic from '../../modules/logic';

import * as actions from '../actions';

describe('Actions', () => {
  describe('simpleAction', () => {
    it('should create correct action if no payload', () => {
      const action = actions.simpleAction();

      expect(action).toEqual({ type: SIMPLE_ACTION, payload: undefined });
    });

    it('should create correct action with payload', () => {
      const payload = 123;
      const action = actions.simpleAction(payload);

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
      actions.thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledWith(actions.simpleAction(`not ${field}`));
    });

    it('should dispatch correct simpleAction if store.field is bool', () => {
      const field = true;
      actions.thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledWith(actions.simpleAction(!field));
    });

    it('should not dispatch if store.field is something else', () => {
      const field = 42;
      actions.thunkAction()(dispatch, getStateFactory({ field }));

      expect(dispatch).toHaveBeenCalledTimes(0);
      // or
      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe('thunkAsyncAction', () => {
    let dispatch;
    const asyncLogicResult = { asyncLogicResult: true };
    const thunkActionResult = { thunkActionResult: true };
    const simpleActionResult = { simpleActionResult: true };

    beforeAll(() => {
      dispatch = jest.fn();

      jest.spyOn(logic, 'asyncLogic').mockImplementation(() => {
        return Promise.resolve(asyncLogicResult);
      });

      jest.spyOn(actions, 'thunkAction').mockReturnValue(thunkActionResult);
      jest.spyOn(actions, 'simpleAction').mockReturnValue(simpleActionResult);
    });

    beforeEach(() => {
      return actions.thunkAsyncAction()(dispatch);
    });

    afterEach(() => {
      dispatch.mockClear();

      logic.asyncLogic.mockClear();
      actions.thunkAction.mockClear();
      actions.simpleAction.mockClear();
    });

    afterAll(() => {
      logic.asyncLogic.mockRestore();
      actions.thunkAction.mockRestore();
      actions.simpleAction.mockRestore();
    });

    it('should call thunkAction', () => {
      expect(actions.thunkAction).toHaveBeenCalledWith();
      expect(dispatch).toHaveBeenCalledWith(thunkActionResult);
    });

    it('should call asyncLogic', () => {
      expect(logic.asyncLogic).toHaveBeenCalledWith();
    });

    it('should call simpleAction with asyncLogic result', () => {
      expect(actions.simpleAction).toHaveBeenCalledWith(asyncLogicResult);
      expect(dispatch).toHaveBeenCalledWith(simpleActionResult);
    });
  });

  describe('sagaTriggerAction', () => {
    it('should create correct action', () => {
      const action = actions.sagaTriggerAction();

      expect(action).toEqual({ type: SAGA_TRIGGER_ACTION });
    });
  });
});
