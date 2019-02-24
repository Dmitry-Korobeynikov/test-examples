import { put, select } from 'redux-saga/effects';

import { getField } from '../selectors/selectors';
import { simpleAction } from '../store/actions';

export default function* sagaExample() {
  const field = yield select(getField, 'param');

  if (field) {
    yield put(simpleAction(field));
  } else {
    yield put(simpleAction('defaultValue'));
  }
}
