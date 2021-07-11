import * as React from 'react';
import { CounterTable } from './CounterTable';

interface InsightsProps {
  bio: string
}

export const Insights: React.FC<InsightsProps> = ({ bio }) => {

  return (
    <div className="Insights">
      <h3>Insights</h3>
      <CounterTable bio={bio} />
    </div>
  )
};