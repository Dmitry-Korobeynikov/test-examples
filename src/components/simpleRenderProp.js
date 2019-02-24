import PropTypes from 'prop-types';

const SimpleRenderPropComponent = ({ children }) => {
  return children({
    configValue: 123,
  });
};

SimpleRenderPropComponent.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SimpleRenderPropComponent;
