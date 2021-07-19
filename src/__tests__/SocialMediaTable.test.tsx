import * as React from 'react';
import { render } from '@testing-library/react';
import { SocialMediaTable } from '../components/SocialMediaTable';

describe('SocialMediaTable tests', () => {
  const bio = 'this is my bio and it is beyond the minimum length';
  const minLength = 25;
  const shortBio = 'bio is too short';

  it('should render without breaking', () => {
    render(<SocialMediaTable bio={bio} minLength={minLength} />);
  });

  it('should display the social media reminder', () => {
    const { getByText } = render(<SocialMediaTable bio={bio} minLength={minLength} />);
    const reminder = getByText(`Don't forget your social media handle!`);
    expect(reminder).toBeInTheDocument();
  });

  it('should not display the social media reminder', () => {
    const { queryByText } = render(<SocialMediaTable bio={shortBio} minLength={minLength} />);
    const reminder = queryByText(`Don't forget your social media handle!`);
    expect(reminder).not.toBeInTheDocument();
  });
});