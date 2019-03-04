import { createStoreForSagaTests } from '../../test-helpers';
import * as selectors from '../../selectors/selectors';
import * as actions from '../../store/actions';
import * as sagas from '../saga';

describe('saga', () => {
  describe('sagaExample', () => {
    let getFieldResult;

    beforeAll(() => {
      jest.spyOn(selectors, 'getField').mockImplementation(() => {
        return getFieldResult;
      });
      jest.spyOn(actions, 'simpleAction').mockImplementation();
    });

    afterEach(() => {
      selectors.getField.mockClear();
      actions.simpleAction.mockClear();
    });

    afterAll(() => {
      selectors.getField.mockRestore();
      actions.simpleAction.mockRestore();
    });

    it('should call simpleAction(field) if field is not empty', () => {
      getFieldResult = 123;
      createStoreForSagaTests(sagas.sagaExample);

      expect(actions.simpleAction).toHaveBeenCalledWith(getFieldResult);
    });

    it('should call simpleAction(defaultValue) if field is empty', () => {
      getFieldResult = null;
      createStoreForSagaTests(sagas.sagaExample);

      expect(actions.simpleAction).toHaveBeenCalledWith('defaultValue');
    });
  });

  describe('watchSagaExample', () => {
    beforeAll(() => {
      jest.spyOn(sagas, 'sagaExample').mockImplementation();
    });

    afterEach(() => {
      sagas.sagaExample.mockClear();
    });

    afterAll(() => {
      sagas.sagaExample.mockRestore();
    });

    it('should call sagaExample if SAGA_TRIGGER_ACTION action is dispatched', () => {
      const store = createStoreForSagaTests(sagas.watchSagaExample);
      store.dispatch(actions.sagaTriggerAction());

      expect(sagas.sagaExample).toHaveBeenCalled();
    });
  });
});
