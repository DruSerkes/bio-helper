import * as React from 'react';
import { CounterTable } from './CounterTable';
import { LetterDensityTable } from './LetterDensityTable';

interface InsightsProps {
  bio: string
}

export const Insights: React.FC<InsightsProps> = ({ bio }) => {

  return (
    <div className="Insights">
      <h3>Insights</h3>
      <article>
        <h4>Character Count</h4>
        <CounterTable bio={bio} />

        <hr />

        <h4>Letter Density</h4>
        <LetterDensityTable bio={bio} />

        <hr />
      </article>
    </div>
  )
};