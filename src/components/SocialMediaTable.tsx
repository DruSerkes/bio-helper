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
                Don't forget your social media handle!
              </small>
            </td>
          </tr>
        )}
      </tbody>}
    </table>
  )
};