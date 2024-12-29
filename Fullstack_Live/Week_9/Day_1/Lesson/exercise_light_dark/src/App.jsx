/**
 * Create a ne App - AppThemeMode.jsx - Context - State
 * 
 *  <Header/> -> button - toggle between dark mode / light mode
 *  <Main /> change between css class - light / dark
 *  use createContext, useContext, useState - mode
 * 
 .light {
  background-color: #fff;
  color: #000;
}

.dark {
  background-color: #000;
  color: #fff;
}
 */

import './App.css';
import { createContext, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export const LightDarkContext = createContext();

function App() {
  const [mode, setMode] = useState(false); // false = light mode, true = dark mode

  return (
    <div className={mode ? 'dark' : 'light'}>
      <LightDarkContext.Provider value={{ mode, setMode }}>
        <Header />
        <Main />
      </LightDarkContext.Provider>
    </div>
  );
}

export default App;
