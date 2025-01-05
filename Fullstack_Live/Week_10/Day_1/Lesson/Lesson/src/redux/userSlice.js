import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUser: "", // Default: show all posts
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSelectedUser(state, action) {
            state.selectedUser = action.payload; // Update selected user
        },
    },
});

export const { setSelectedUser } = userSlice.actions;
export const selectSelectedUser = (state) => state.user.selectedUser; // Selector for selected user
export default userSlice.reducer;
