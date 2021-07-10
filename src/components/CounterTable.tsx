import * as React from 'react';

interface CounterTableProps {
  bio: string
};

export const CounterTable: React.FC<CounterTableProps> = ({ bio }) => {
  const characterCount = bio.length;
  const wordCount = bio.split(' ').length;
  return (
    <table className="CounterTable">
      <tbody>
        <tr>
          <td>Character Count:</td>
          <td>{characterCount}</td>
        </tr>
        <tr>
          <td>Word Count:</td>
          <td>{wordCount}</td>
        </tr>
      </tbody>
    </table>
  )
};