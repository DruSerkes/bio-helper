import * as React from 'react';
import { render } from '@testing-library/react';
import { CounterTable } from '../components/CounterTable';

describe('CounterTable tests', () => {
  const bio = 'so very valueable';

  it('should render without breaking', () => {
    render(<CounterTable bio={bio} />);
  });

  it('should display character & word count', () => {
    const { getByText } = render(<CounterTable bio={bio} />);

    const characterCount = getByText(String(bio.length));
    expect(characterCount).toBeInTheDocument();

    const wordCount = getByText('3');
    expect(wordCount).toBeInTheDocument();
  });
});