import React from 'react';
import PropTypes from 'prop-types';

const SimpleWithConditionComponent = ({ isLoading }) => {
  if (isLoading) {
    return null;
  }

  return (
    <div>Loaded</div>
  );
};

SimpleWithConditionComponent.propTypes = {
  isLoading: PropTypes.bool,
};

SimpleWithConditionComponent.defaultProps = {
  isLoading: false,
};

export default SimpleWithConditionComponent;
