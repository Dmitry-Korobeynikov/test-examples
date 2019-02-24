import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { thunkAction } from '../store/actions';

@connect(
  (state) => {
    return {
      isEnabled: state.field === 'value',
    };
  },
  {
    thunkAction,
  },
)
export default class ConnectedComponent extends Component {
  static propTypes = {
    isEnabled: PropTypes.bool.isRequired,
    thunkAction: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  };

  render() {
    return this.props.isEnabled
      ? 'enabled'
      : 'disabled';
  }
}
