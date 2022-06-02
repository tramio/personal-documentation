import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders hello from app', () => {
  render(<App />);
  const text = screen.getByText(/hello from app/i);
  expect(text).toBeInTheDocument();
});
