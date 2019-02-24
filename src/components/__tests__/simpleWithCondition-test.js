import { renderShallow } from '../../test-helpers';

import SimpleWithConditionComponent from '../simpleWithCondition';

describe('SimpleWithConditionComponent', () => {
  it('should render content by default', () => {
    const wrapper = renderShallow(SimpleWithConditionComponent);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render content if isLoading is false', () => {
    const wrapper = renderShallow(SimpleWithConditionComponent);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing if isLoading is true', () => {
    const isLoading = true;
    const wrapper = renderShallow(SimpleWithConditionComponent, { isLoading });

    expect(wrapper).toMatchSnapshot();
  });
});
