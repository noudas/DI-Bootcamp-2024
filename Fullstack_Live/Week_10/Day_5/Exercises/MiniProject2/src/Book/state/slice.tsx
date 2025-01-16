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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    status: "",
}

const booksSlice = createSlice({
    name:`books`,
    initialState,
    reducers:{},
    extraReducers(builder){},
})

export const stateReducer = (state) => state.bookReducer;
export const {} = booksSlice.actions;
export default booksSlice.reducer;