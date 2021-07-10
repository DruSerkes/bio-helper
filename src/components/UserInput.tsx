import * as React from 'react';

interface UserInputProps {
  input?: string,
  setInput: React.Dispatch<React.SetStateAction<string>>
};

export const UserInput: React.FC<UserInputProps> = ({ input, setInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value);
  return (
    <div className="UserInput">
      <label htmlFor="bio">My Bio</label>
      <textarea id="bio" name="bio" placeholder="Start typing your bio here..." value={input} onChange={handleChange} />
    </div>
  )
};