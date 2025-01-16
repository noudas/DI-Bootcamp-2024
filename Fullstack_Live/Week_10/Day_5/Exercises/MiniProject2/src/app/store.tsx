// Part 3: Set Up Redux Store (30-40 minutes)
// Create the Redux store configuration
// Define the books slice
// Implement basic actions
// Set up TypeScript types for the store
// Tasks:

// Create src/app directory
// Set up store configuration
// Create books slice with initial state
// Implement core actions (add, remove, toggle read status)
// Define filter and category functionality


import {configureStore, combineReducers} from '@reduxjs/toolkit';
import bookReducer from '../Book/state/slice';

const appReducer = combineReducers({
    bookReducer
});

const store = configureStore({
    reducer: appReducer
});

export default store;