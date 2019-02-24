import { createSelector } from 'reselect';

// simple selector
export const getField = (state) => {
  return state.field;
};

// composite selector
export const isFalsyField = createSelector(
  [getField],
  (field) => {
    return !field;
  });
