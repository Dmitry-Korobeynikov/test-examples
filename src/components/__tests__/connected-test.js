import { renderShallow } from '../../test-helpers';

import ConnectedComponent from '../connected';

describe('Connect(ConnectedComponent)', () => {
  it('should pass all needed props into wrapped component', () => {
    const wrapper = renderShallow(ConnectedComponent);

    expect(wrapper.connectedProps).toEqual({
      isEnabled: expect.any(Boolean),
      thunkAction: expect.any(Function),
    });
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
