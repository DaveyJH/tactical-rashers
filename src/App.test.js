import { render, screen } from '@testing-library/react';
import App from './App';

// replace with tests that work!
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
