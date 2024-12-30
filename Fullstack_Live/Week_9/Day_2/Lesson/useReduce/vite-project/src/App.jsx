import { useReducer, useRef, useState } from 'react';
import './App.css';

// Initial State
const InitialState = {
  count: 5,
  title: "User Reducer Hook",
};

// Reducer Function
const countReducer = (state, action) => {
  console.log('Action:', action);

  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };

    case "MINUS":
      return { ...state, count: state.count - 1 };

    case "MINUS_BY_VALUE": {
      const value = parseInt(action.payload, 10);
      return !isNaN(value) ? { ...state, count: state.count - value } : state;
    }

    case "CHANGE_TITLE":
      return { ...state, title: action.payload };

    default:
      return state;
  }
};

// Main App Component
function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, InitialState);

  // Refs for inputs
  const inputRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <div className="App">
      {/* Use State Section */}
      <div className="card">
        <h2>Use State</h2>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Count is {count}
        </button>
      </div>

      {/* Use Reducer Section */}
      <div className="card">
        <h2>{state.title}</h2>
        
        <p>count is {state.count}</p>
        {/* Count Controls */}
        <div className="controls">
          <button onClick={() => dispatch({ type: "ADD" })}>
            Increment Count
          </button>
          <button onClick={() => dispatch({ type: "MINUS" })}>
            Decrement Count
          </button>
        </div>

        {/* Subtract by Input Value */}
        <div className="input-group">
          <input type="text" ref={inputRef} placeholder="Enter a number" />
          <button
            onClick={() =>
              dispatch({ type: "MINUS_BY_VALUE", payload: inputRef.current?.value })
            }
          >
            Subtract Count
          </button>
        </div>

        {/* Change Title */}
        <div className="input-group">
          <input type="text" ref={titleRef} placeholder="Enter a new title" />
          <button
            onClick={() =>
              dispatch({ type: "CHANGE_TITLE", payload: titleRef.current?.value })
            }
          >
            Change Title
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
