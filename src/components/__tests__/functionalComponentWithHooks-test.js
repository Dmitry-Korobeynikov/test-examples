import { renderShallow } from '../../test-helpers';
import { getField } from '../../selectors/selectors';
import { simpleAction } from '../../store/actions';
import FunctionalComponentWithHooks from '../functionalComponentWithHooks';

jest.mock('react-redux', () => {
  return {
    // save other "react-redux" functions, for example it may be usefull
    // for components with "connect" to prevent tests from falling 
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn((mockSelector) => {
      return mockSelector();
    }),
    useDispatch: jest.fn(() => {
      return (mockAction) => {
        return mockAction();
      };
    }),
  };
});

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useCallback: jest.fn((callback) => {
      return callback;
    }),
  };
});

jest.mock('../../selectors/selectors');
jest.mock('../../store/actions', () => {
  return {
    simpleAction: jest.fn(),
  };
});

describe('FunctionalComponentWithHooks', () => {
  const mockClickAction = jest.fn();
  simpleAction.mockImplementation(mockClickAction);

  beforeEach(() => {
    getField.mockReturnValue('test');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render default content', () => {
    const wrapper = renderShallow(FunctionalComponentWithHooks);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render new content', () => {
    getField.mockReturnValue('second');
    const wrapper = renderShallow(FunctionalComponentWithHooks);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call click callback', () => {
    const wrapper = renderShallow(FunctionalComponentWithHooks);

    wrapper.simulate('click');
    expect(mockClickAction).toBeCalled();
  });
});
