import React from 'react';
import { render } from '@testing-library/react';
import Search from './search.jsx';

test('renders learn react link', () => {
  const { getByTestId } = render(<Search></Search>);
  const linkElement = getByTestId("inputs");
  expect(linkElement).toBeInTheDocument();
});
