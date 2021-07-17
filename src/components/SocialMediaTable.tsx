import * as React from 'react';

interface SocialMediaTableProps {
  bio: string,
  minLength: number
}

export const SocialMediaTable: React.FC<SocialMediaTableProps> = ({ bio, minLength }) => {
  const isMinimumLength = bio.length > minLength;
  const socialMediaHandleRegex = new RegExp(/@\w+/i);
  const containsHandle = socialMediaHandleRegex.test(bio);
  return (
    <table className="SocialMediaTable">
      {isMinimumLength && <tbody>
        {!containsHandle && (
          <tr>
            <td>
              <small>
                Include your social media handle so fans can follow you!
              </small>
            </td>
          </tr>
        )}
      </tbody>}
    </table>
  )
};