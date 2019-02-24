import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
const SimpleComponent = ({ children }) => {
  return (
    <div>{children}</div>
  );
};

SimpleComponent.propTypes = {
  children: PropTypes.node,
};

SimpleComponent.defaultProps = {
  children: 'default',
};

export default SimpleComponent;
*/

export default class SimpleComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'default',
  };

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
