import React from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Insights } from './components/Insights';
/*
TODO 
1. Add copy / clear buttons 
2. Test them 
3. Decide what other features to add 
  a. further insights (social media based)?
  b. dark mode 
  c. set min/max length - view alert when you are under / over  
  d. toggle certain insights off / on
*/

export const App: React.FC = () => {
  const [bio, setBio] = useLocalStorage('user-bio', '');
  return (
    <div className="App">
      <h1>Bio Helper</h1>
      <main>
        <UserInput input={bio} setInput={setBio} />
        <Insights bio={bio} />
      </main>

    </div>
  );
};
