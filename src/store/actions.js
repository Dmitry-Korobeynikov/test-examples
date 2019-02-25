import { SIMPLE_ACTION } from '../consts';
import { asyncLogic } from '../modules/logic';

export const simpleAction = (payload) => {
  return {
    type: SIMPLE_ACTION,
    payload,
  };
};

export const thunkAction = () => {
  return (dispatch, getState) => {
    const { field } = getState();

    if (typeof field === 'string') {
      dispatch(simpleAction(`not ${field}`));
    } else if (typeof field === 'boolean') {
      dispatch(simpleAction(!field));
    }
  };
};

export const thunkAsyncAction = () => {
  return (dispatch) => {
    dispatch(exports.thunkAction());

    asyncLogic()
      .then((result) => {
        dispatch(exports.simpleAction(result));
      });
  };
};
