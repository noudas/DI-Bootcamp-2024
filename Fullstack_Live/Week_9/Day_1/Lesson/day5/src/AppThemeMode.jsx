import "./App.css";
import Main from "./screens/Main";
import Header from "./screens/Header";
import "./AppThemeMode.css";
import { createContext, useState } from "react";
/**
 * 1. Create the context
 * 2. Share the context value
 * 3. Use the context
 */

export const ThemeModeContext = createContext();

function AppThemeMode() {
  const [mode, setMode] = useState("light");
  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <Header />
      <Main />
    </ThemeModeContext.Provider>
  );
}

export default AppThemeMode;

/**
 * Create a new App - AppThemeMode.jsx - Context - State
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
