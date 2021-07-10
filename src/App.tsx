import React from 'react';
import './App.css';
import { UserInput } from './components/UserInput';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CounterTable } from './components/CounterTable';
/*
TODO 
5. Add a component providing letter density insights 
6. Test it 
7. Add copy / clear buttons 
8. Test them 
9. Add social media insights component 
10. Test them 
11. Decide what other features to add 
*/

export const App: React.FC = () => {
  const [bio, setBio] = useLocalStorage('user-bio', '');
  return (
    <div className="App">
      <h1>Bio Helper</h1>
      <main>
        <UserInput input={bio} setInput={setBio} />
        <div className="Insights">
          <h3>Insights</h3>
          <CounterTable bio={bio} />
        </div>

      </main>

    </div>
  );
};
