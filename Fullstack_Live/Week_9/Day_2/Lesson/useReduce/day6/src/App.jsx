import { useState, useReducer, useRef } from "react";
import "./App.css";

/**
 * useReducer -> (state, action) => {}
 *
 * initialState = {}
 * action = {type:'ADD_TASK'}
 *
 *
 *
 */
const initialState = {
  count: 5,
  title: "The useReducer Hook",
};

const ADD = 'INCREMENT'
const MINUS = 'decret'

const countReducer = (state, action) => {
  console.log("action=>", action);
  if (action.type === ADD) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === MINUS) {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "MINUS_BY_VALUE") {
    return { ...state, count: state.count - Number(action.payload) };
  } else if (action.type === "CHANGE_TITLE") {
    return { ...state, title: action.payload };
  }
  return state;
};

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initialState);
  const inputRef = useRef();
  const titleRef = useRef();

  return (
    <>
      <div className='card'>
        <h2>useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='card'>
        <input
          placeholder='Change the title...'
          onChange={(e) =>
            dispatch({ type: "CHANGE_TITLE", payload: e.target.value })
          }
        />
        <h2>{state.title}</h2>
        <button onClick={() => dispatch({ type: ADD })}>+</button>
        <h2>count is {state.count}</h2>
        <button onClick={() => dispatch({ type: MINUS })}> - </button>
        <div>
          <input ref={inputRef} />
          <button
            onClick={() =>
              dispatch({
                type: "MINUS_BY_VALUE",
                payload: inputRef.current.value,
              })
            }
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
