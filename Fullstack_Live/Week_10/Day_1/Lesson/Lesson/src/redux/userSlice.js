import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUser: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },
    },
});

export const { setSelectedUser: setUserSelected } = userSlice.actions;
export const selectSelectedUser = (state) => state.user.selectedUser;
export default userSlice.reducer;
