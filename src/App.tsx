import * as React from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Insights } from './components/Insights';
/*
TODO 
2. Decide what other features to add 
  a. further insights (social media based)?
  b. dark mode 
  c. set min/max length - view alert when you are under / over  
  d. toggle certain insights off / on
*/

export const App: React.FC = () => {
  const [bio, setBio] = useLocalStorage('user-bio', '');
  return (
    <div className="App">
      <header>
        <h1>Bio Helper</h1>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </header>
      <main>
        <div className="Left">
          <UserInput input={bio} setInput={setBio} />
        </div>
        <div className="Right">
          <Insights bio={bio} />
        </div>
      </main>

    </div>
  );
};
