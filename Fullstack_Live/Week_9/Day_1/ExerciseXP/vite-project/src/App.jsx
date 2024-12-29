import { createContext, useState } from 'react'
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

export const LightmodeDarkmode = createContext();

function App() {
  const [mode, setMode] = useState(false)

  return (
    <>
      <div className={mode ? 'dark' : 'light'}>
        <LightmodeDarkmode.Provider value={{mode,setMode}}>
          <Button/>
          <Display/>
          </LightmodeDarkmode.Provider> 
      </div>
    </>
  )
}

export default App
