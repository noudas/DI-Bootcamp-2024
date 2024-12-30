import { useReducer, useState } from 'react'
import './App.css'

const InitialState = {
  count: 5,
  title:"User Reducer Hook"
}

const countReducer = (state, action) =>{
  console.log('action =>', action);
  if(action.type === "ADD"){
    return {...state, count: state.count++}
  }
  
  return state
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(countReducer, InitialState)

  return (
    <>
      <div className="card">
        <h2>Use State</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </div>
      <div className="card">
        <h2>{state.title}</h2>
          <button onClick={() => dispatch({type:"ADD"})}>
            count is {state.count}
          </button>
      </div>
    </>
  )
}

export default App
