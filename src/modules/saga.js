import { put, select, takeEvery } from 'redux-saga/effects';

import { SAGA_TRIGGER_ACTION } from '../consts';
import { getField } from '../selectors/selectors';
import { simpleAction } from '../store/actions';

export function* sagaExample() {
  const field = yield select(getField, 'param');

  if (field) {
    yield put(simpleAction(field));
  } else {
    yield put(simpleAction('defaultValue'));
  }
}

export function* watchSagaExample() {
  yield takeEvery(SAGA_TRIGGER_ACTION, exports.sagaExample);
}
