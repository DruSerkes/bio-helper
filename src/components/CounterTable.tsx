import * as React from 'react';

interface CounterTableProps {
  bio: string
};

export const CounterTable: React.FC<CounterTableProps> = ({ bio }) => {
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
      </tbody>
    </table>
  )
};