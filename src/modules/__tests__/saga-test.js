import { put, select } from 'redux-saga/effects';

import { getField } from '../../selectors/selectors';
import { simpleAction } from '../../store/actions';
import sagaExample from '../saga';

describe('sagaExample', () => {
  it('should get field from store', () => {
    const generator = sagaExample();
    const next = generator.next(); // get field from store

    expect(next.value).toEqual(select(getField, 'param'));
    expect(next.done).toBe(false);
  });

  it('should put simpleAction(field) if field is not empty', () => {
    const field = 'some value';
    const generator = sagaExample();
    generator.next(); // get field from store

    const next = generator.next(field); // put action depends on field value

    expect(next.value).toEqual(put(simpleAction(field)));
    expect(next.done).toBe(false);

    expect(generator.next().done).toBe(true);
  });

  it('should put simpleAction(defaultValue) if field is empty', () => {
    const field = null;
    const generator = sagaExample();
    generator.next(); // get field from store

    const next = generator.next(field); // put action depends on field value

    expect(next.value).toEqual(put(simpleAction('defaultValue')));
    expect(next.done).toBe(false);

    expect(generator.next().done).toBe(true);
  });
});
