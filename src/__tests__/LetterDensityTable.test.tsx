import * as React from 'react';
import { render } from '@testing-library/react';
import { LetterDensityTable } from '../components/LetterDensityTable';
import { countLetters, filterTopTen } from '../helpers';

describe('LetterDensityTable tests', () => {
  const bio = 'here is my bio if you do so please';
  const letterCount = countLetters(bio);
  const topTenLettersWithCount = filterTopTen(letterCount);

  it('should render without breaking', () => {
    render(<LetterDensityTable bio={bio} />);
  });

  it('should show the letters', () => {
    const { getByText } = render(<LetterDensityTable bio={bio} />);
    topTenLettersWithCount.forEach(letterWithCount => {
      const letter = getByText(letterWithCount[0].toUpperCase());
      expect(letter).toBeInTheDocument();
    });
  });


});