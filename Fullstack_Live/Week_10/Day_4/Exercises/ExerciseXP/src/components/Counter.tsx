// 🌟 Exercise 3: Using useState Hook with TypeScript in React
// What You Will Learn:

// How to use the useState hook to manage state in a functional React component
// How to type the useState hook using TypeScript
// How to create and manage a state-changing function with TypeScript
// Time Needed: 20 minutes

// Instructions
// Create a new Counter.tsx component
// Implement state management for counter value
// Add increment and decrement functionality
// Track last action performed
// Add proper TypeScript types for all state variables
// Success Criteria:

// Counter increments and decrements correctly
// Last action updates appropriately
// All state updates are properly typed
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>{
        setCounter((prev) => prev + 1)
    }

    const handleDecrement = () =>{
        setCounter((prev) => prev - 1)
    }

    const handleReset = () => {
        setCounter(0);
    };


    return(
        <>
        <h1>Counter: {counter}</h1>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter