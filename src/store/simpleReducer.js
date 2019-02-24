import { SIMPLE_ACTION } from '../consts';

export const initialState = {
  field: 'value',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...state,
        field: action.payload,
      };
    default:
      return state;
  }
}
