import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button from '../button';

it('renders correctly', () => {
  const component = renderer.create(<Button>Facebook</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

afterEach(cleanup);
it('CheckboxWithLabel changes the text after click', () => {
  const { queryByText } = render(<Button>testMyButton</Button>);

  expect(queryByText(/testMyButton/i)).toBeTruthy();
});
