import * as React from 'react';
import { CounterTable } from './CounterTable';
import { LetterDensityTable } from './LetterDensityTable';
import { SocialMediaTable } from './SocialMediaTable';

interface InsightsProps {
  bio: string
}

export const Insights: React.FC<InsightsProps> = ({ bio }) => {

  return (
    <div className="Insights">
      <h3>Insights</h3>
      <article>
        <h4>Essential Counts</h4>
        <CounterTable bio={bio} />

        <hr />

        <h4>Social Insights</h4>
        <SocialMediaTable bio={bio} minLength={40} />

        <hr />

        <h4>Letter Density</h4>
        <LetterDensityTable bio={bio} />
      </article>
    </div>
  )
};