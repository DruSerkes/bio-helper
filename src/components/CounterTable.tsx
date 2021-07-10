import * as React from 'react';

interface CounterTableProps {
  value: string
};

export const CounterTable: React.FC<CounterTableProps> = ({ value }) => {
  const characterCount = value.length;
  const wordCount = value.split(' ').length;
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