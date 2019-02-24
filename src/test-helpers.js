import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { createStoreForTests } from './store/create';

export const renderShallow = (Component, props = {}, initialState = undefined) => {
  const store = createStoreForTests(initialState);
  const context = { store };
  const childContextTypes = { store: PropTypes.shape({}) };
  const shallowWrapper = shallow(<Component {...props} />, { context, childContextTypes });

  // it's connected component
  if (Component.WrappedComponent) {
    // any side effects?
    // if yes then just export mapStateToProps, mapDispatchToProps and mergeProps separately
    // one more option is to create fakeConnect by using jest.mock(...)
    shallowWrapper.connectedProps = shallowWrapper.instance()
      .selectDerivedProps(store.getState(), {}, store);
  }

  return shallowWrapper;
};

export const callRenderProp = (shallowWrapper, childSelector = null, name = 'children') => {
  return (...args) => {
    const innerWrapper = childSelector
      ? shallowWrapper.find(childSelector)
      : shallowWrapper;

    return innerWrapper.renderProp(name)(...args);
  };
};
