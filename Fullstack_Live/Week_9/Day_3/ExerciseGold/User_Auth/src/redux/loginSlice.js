import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.user = {
                id: action.payload.id || uuidv4(),
                name: action.payload.name,
                email: action.payload.email,
            };
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        setUser: (state, action) => {
            state.user = {
                ...state.user, // Spread the current user data to retain existing fields
                id: action.payload.id || uuidv4(), // Assign a new ID if not provided
                name: action.payload.name || state.user?.name, // Update name if provided, otherwise keep the existing one
                email: action.payload.email || state.user?.email, // Update email if provided, otherwise keep the existing one
            };
        },        
    },
});

export const { loginUser, logoutUser, setUser } = loginSlice.actions;

export default loginSlice.reducer;