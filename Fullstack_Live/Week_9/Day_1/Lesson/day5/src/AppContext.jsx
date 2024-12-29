import "./App.css";
import Display from "./components/Display";
import Action from "./components/Action";
import { useState, createContext } from "react";

import TestContext from "./components/TestContext";

export const CounterContext = createContext();
/**
 * 1. createContext
 * 2. share -> createContext Provider
 * 3. useContext
 */

function App() {
  const [count, setCount] = useState(5);
  return (
    <>
      <h2>
        createContext & useContext, useRef, useReducer, useCallback, use Memo,
        memo
      </h2>
      <div>
        <CounterContext.Provider value={{ count, setCount, name:'john' }}>
          <Display />
          <Action />
        </CounterContext.Provider>

        <div>
          {/* <CounterContext.Provider
            value={{ name: "John", email: "jjj@gmail.com" }}
          >
            <TestContext />
          </CounterContext.Provider> */}
        </div>
      </div>
    </>
  );
}

export default App;

/**
 Instructions:

1. App Component:
Create the App component with a count state starting at 0.
Add a setCount function to update the count.
Pass count and setCount as props to child components.

2. Display Component:
Create Display to show the current count.
Inside it, add ShowCounter, which receives count as a prop and displays it.

3. Action Component:
Create Action to hold a Button component.
The Button will have an onClick handler that calls setCount 
to increase the count.

App - setState - count, setCount
 |_ Display
         |_ ShowCouter - count
 |_ Action
        |_Button - => add
 
 */


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

 