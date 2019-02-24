import React from 'react';
import PropTypes from 'prop-types';

import SimpleComponent from './simple';
import SimpleRenderPropComponent from './simpleRenderProp';
import SimpleWithConditionComponent from './simpleWithCondition';

const ComplexRenderPropComponent = ({ loadingValue }) => {
  return (
    <SimpleComponent>
      <SimpleRenderPropComponent>
        {({ configValue }) => {
          return (<SimpleWithConditionComponent isLoading={configValue === loadingValue} />);
        }}
      </SimpleRenderPropComponent>
    </SimpleComponent>
  );
};

ComplexRenderPropComponent.propTypes = {
  loadingValue: PropTypes.number,
};

ComplexRenderPropComponent.defaultProps = {
  loadingValue: 0,
};

export default ComplexRenderPropComponent;
