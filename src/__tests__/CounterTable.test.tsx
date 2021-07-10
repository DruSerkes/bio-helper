import * as React from 'react';
import { render } from '@testing-library/react';
import { CounterTable } from '../components/CounterTable';

describe('CounterTable tests', () => {
  const value = 'so very valueable';

  it('should render without breaking', () => {
    render(<CounterTable value={value} />);
  });

  it('should display character & word count', () => {
    const { getByText } = render(<CounterTable value={value} />);

    const characterCount = getByText(String(value.length));
    expect(characterCount).toBeInTheDocument();

    const wordCount = getByText('3');
    expect(wordCount).toBeInTheDocument();
  });
});