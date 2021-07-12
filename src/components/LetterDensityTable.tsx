import * as React from 'react';
import { countLetters } from '../helpers';

interface LetterDensityTableProps {
  bio: string
}

export const LetterDensityTable: React.FC<LetterDensityTableProps> = ({ bio }) => {
  const letterCount = countLetters(bio);
  return (
    <table className="LetterDensityTable">
      <tbody>
        <tr>
          <td className="LetterDensityTable-Left"></td>
          <td className="LetterDensityTable-Right"></td>
        </tr>
      </tbody>
    </table>
  )
};