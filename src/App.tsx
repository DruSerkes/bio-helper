import * as React from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Insights } from './components/Insights';
/*
TODO 
2. Decide what other features to add 
  a. further insights (social media based)?
  c. set min/max length - view alert when you are under / over  
  d. toggle certain insights off / on
*/
const { useState } = React;

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [bio, setBio] = useLocalStorage('user-bio', '');
  const toggleDarkMode = () => setDarkMode(previousMode => !previousMode);
  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header>
        <h1>Bio Helper</h1>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className={`slider round ${darkMode ? 'sun' : 'moon'}`}></span>
        </label>


      </header>
      <main>
        <div className="Left">
          <UserInput input={bio} setInput={setBio} darkMode={darkMode} />
        </div>
        <div className="Right">
          <Insights bio={bio} />
        </div>
      </main>

    </div>
  );
};
