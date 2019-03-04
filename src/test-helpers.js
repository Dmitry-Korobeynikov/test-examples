import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { createStoreForTests, createStoreForSagaTests } from './store/create';

export const renderShallow = (Component, props = {}, initialState = undefined) => {
  const store = createStoreForTests(initialState);
  const context = { store }; // TODO: add localization context
  const childContextTypes = { store: PropTypes.shape({}) };

  return shallow(<Component {...props} />, { context, childContextTypes });
};

/*
 * shallowWrapper: it should be an object returned from enzyme.shallow(...)
 * childSelector: could be a component display name, component constructor, an object with props...
 *   (https://airbnb.io/enzyme/docs/api/selector.html)
 * propName: it's property name which used as a render prop
 */
export const callRenderProp = (shallowWrapper, childSelector, propName = 'children') => {
  return (...args) => {
    return shallowWrapper.find(childSelector).renderProp(propName)(...args);
  };
};

export {
  createStoreForSagaTests,
};
