import { renderShallow } from '../../test-helpers';

import ConnectedComponent from '../connected';

describe('Connect(ConnectedComponent)', () => {
  it.skip('should pass all needed props into wrapped component', () => {
    // we don't test mapStateToProps, mapDispatchToProps and mergeProps if they are trivial
    // otherwise export them separately and test it
  });

  describe('Wrapped ConnectedComponent', () => {
    const getWrappedShallow = (props) => {
      const allProps = {
        isEnabled: false,
        thunkAction: () => {},
        ...props,
      };

      return renderShallow(ConnectedComponent.WrappedComponent, allProps);
    };

    it('should render correct layout if isEnabled is false', () => {
      const wrapper = getWrappedShallow();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render correct layout if isEnabled is true', () => {
      const wrapper = getWrappedShallow({ isEnabled: true });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
