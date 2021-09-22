import * as React from 'react';
import { countLetters, filterTopTen } from '../helpers';

interface LetterDensityTableProps {
  bio: string
}

export const LetterDensityTable: React.FC<LetterDensityTableProps> = ({ bio }) => {
  const letterCount = countLetters(bio);
  const topTenLettersWithCount = filterTopTen(letterCount);
  return (
    <table className="LetterDensityTable">
      <tbody>
        {topTenLettersWithCount.map((letterWithCount) => (
          <tr key={letterWithCount[0]}>
            <td className="LetterDensityTable-Left"><b>{letterWithCount[0]?.toUpperCase()}</b></td>
            <td className="LetterDensityTable-Right">{letterWithCount[1]}</td>
          </tr>
        )
        )}
      </tbody>
    </table>
  )
};