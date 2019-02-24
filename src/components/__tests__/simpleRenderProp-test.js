import { renderShallow } from '../../test-helpers';

import SimpleRenderPropComponent from '../simpleRenderProp';

describe('SimpleRenderPropComponent', () => {
  it('should call children prop', () => {
    const children = jest.fn();
    renderShallow(SimpleRenderPropComponent, { children });

    expect(children).toHaveBeenCalledWith({
      configValue: 123,
    });
  });

  it('should render proper content', () => {
    const children = jest.fn(() => {
      return 'some children content';
    });
    const wrapper = renderShallow(SimpleRenderPropComponent, { children });

    expect(wrapper).toMatchSnapshot();
  });
});
