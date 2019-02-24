import { renderShallow } from '../../test-helpers';

import SimpleComponent from '../simple';

describe('SimpleComponent', () => {
  it('should render default content', () => {
    const wrapper = renderShallow(SimpleComponent);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render not default content', () => {
    const children = 'not default content';
    const wrapper = renderShallow(SimpleComponent, { children });

    expect(wrapper).toMatchSnapshot();
  });
});
