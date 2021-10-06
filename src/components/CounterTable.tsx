import * as React from 'react';

interface CounterTableProps {
  bio: string,
  maxLength: number
};

export const CounterTable: React.FC<CounterTableProps> = ({ bio, maxLength }) => {
  const characterCount = bio.length;
  const wordCount = bio.replace('\n', ' ').split(' ').filter(word => word.trim() !== '').length;
  return (
    <table className="CounterTable">
      <tbody>
        <tr>
          <td className="CounterTable-Left">Character Count:</td>
          <td className="CounterTable-Right">{characterCount}</td>
        </tr>
        <tr>
          <td className="CounterTable-Left">Word Count:</td>
          <td className="CounterTable-Right">{wordCount}</td>
        </tr>
        {wordCount > maxLength && <td colSpan={2}>Max length exceeded!</td>}
      </tbody>
    </table>
  )
};