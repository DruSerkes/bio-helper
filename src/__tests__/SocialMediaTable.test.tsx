import * as React from 'react';
import { render } from '@testing-library/react';
import { SocialMediaTable } from '../components/SocialMediaTable';

describe('SocialMediaTable tests', () => {
  const bio = 'this is my bio and it is beyond the minimum length';
  const minLength = 25;
  // const shortBio = 'bio is too short';

  it('should render without breaking', () => {
    render(<SocialMediaTable bio={bio} minLength={minLength} />);
  });

  it('should display the social media reminders', () => {
    const { getByText } = render(<SocialMediaTable bio={bio} minLength={minLength} />);
    const socialMediaHandle = getByText('Social media handle:');
    const website = getByText('Website:');
    const minLengthText = getByText('Meets minimum length');
    expect(socialMediaHandle).toBeInTheDocument();
    expect(website).toBeInTheDocument();
    expect(minLengthText).toBeInTheDocument();
  });
});