import * as React from 'react';

interface UserInputProps {
  input?: string,
  setInput: React.Dispatch<React.SetStateAction<string>>,
  darkMode: boolean
};

const { useState } = React;

export const UserInput: React.FC<UserInputProps> = ({ input, setInput, darkMode }) => {
  const [copied, setCopied] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value);
  const clearBio = () => setInput('');
  const copyBio = () => {
    navigator.clipboard.writeText(input ?? '');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };


  return (
    <div className="UserInput">

      <label htmlFor="bio">My Bio</label>
      <textarea
        id="bio"
        name="bio"
        placeholder="Start typing your bio here..."
        value={input}
        onChange={handleChange}
        className={darkMode ? 'dark' : ''} />

      <div className="UserInput-Buttons">
        <button className={darkMode ? 'button-dark' : ''} onClick={copyBio}>{copied ? 'Bio Copied!' : 'Copy Bio'}</button>
        <button className={darkMode ? 'button-dark' : ''} onClick={clearBio}>Start Over</button>
      </div>

    </div>
  )
};