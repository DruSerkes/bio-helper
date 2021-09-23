import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App smoke test', () => {
  it('should render without breaking', () => {
    render(<App />);
  });
});