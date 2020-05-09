import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dan's Delivery Countdown/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders Dan name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dan Pijittum/i);
  expect(linkElement).toBeInTheDocument();
});