import { renderShallow, callRenderProp } from '../../test-helpers';

import ComplexRenderPropComponent from '../complexRenderProp';

describe('ComplexRenderPropComponent', () => {
  const configValue = 123;

  it('should render correct layout by default', () => {
    const wrapper = renderShallow(ComplexRenderPropComponent);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct layout with not default loadingValue', () => {
    const wrapper = renderShallow(ComplexRenderPropComponent, { loadingValue: 1 });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct layout inside SimpleRenderPropComponent by default', () => {
    const wrapper = renderShallow(ComplexRenderPropComponent);
    const innerWrapper = callRenderProp(wrapper, 'SimpleRenderPropComponent')({ configValue });

    expect(innerWrapper).toMatchSnapshot();
  });

  it('should render correct layout inside SimpleRenderPropComponent for loadingValue === configValue', () => {
    const wrapper = renderShallow(ComplexRenderPropComponent, { loadingValue: configValue });
    const innerWrapper = callRenderProp(wrapper, 'SimpleRenderPropComponent')({ configValue });

    expect(innerWrapper).toMatchSnapshot();
  });

  it('should render correct layout inside SimpleRenderPropComponent for loadingValue !== configValue', () => {
    const wrapper = renderShallow(ComplexRenderPropComponent, { loadingValue: 234 });
    const innerWrapper = callRenderProp(wrapper, 'SimpleRenderPropComponent')({ configValue });

    expect(innerWrapper).toMatchSnapshot();
  });
});
