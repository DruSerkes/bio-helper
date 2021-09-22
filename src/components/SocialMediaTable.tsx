import * as React from 'react';

interface SocialMediaTableProps {
  bio: string,
  minLength: number
}

export const SocialMediaTable: React.FC<SocialMediaTableProps> = ({ bio, minLength }) => {
  const isMinimumLength = bio.length > minLength;
  const socialMediaHandleRegex = new RegExp(/@\w+/i);
  const websiteRegex = new RegExp(/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i);
  const containsHandle = socialMediaHandleRegex.test(bio);
  const containsWebsite = websiteRegex.test(bio);
  return (
    <table className="SocialMediaTable">
      <tbody>
        <tr>
          <td>
            Website:
          </td>
          <td>
            {containsWebsite ? '✅' : '❌'}
          </td>
        </tr>
        <tr>
          <td>
            Social media handle:
          </td>
          <td>
            {containsHandle ? '✅' : '❌'}
          </td>
        </tr>
        <tr>
          <td>
            Meets minimum length
          </td>
          <td>
            {isMinimumLength ? '✅' : '❌'}
          </td>
        </tr>
      </tbody>
      {/* } */}
    </table>
  )
};