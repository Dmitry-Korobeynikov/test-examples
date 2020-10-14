import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getField } from '../selectors/selectors';
import { simpleAction } from '../store/actions';

const FunctionalComponentWithHooks = () => {
  const field = useSelector(getField);
  const dispatch = useDispatch();
  const click = useCallback(() => {
    dispatch(simpleAction);
  });

  return (
    <div onClick={click}>
      {field}
    </div>
  );
};

export default FunctionalComponentWithHooks;
