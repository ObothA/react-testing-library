import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Button has correct initial color.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Button turns blue when clicked.', () => {});
