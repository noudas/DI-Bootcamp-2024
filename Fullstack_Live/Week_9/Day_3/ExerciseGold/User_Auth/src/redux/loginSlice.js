import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // false logged out, true logged in
  user: null, // { id, name, email, etc. }
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.status = true;
      state.user = action.payload; // Assuming you set the user data when logging in
    },
    logoutUser: (state) => {
      state.status = false;
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload; // Just to set a user (if necessary)
    },
  },
});

export const { loginUser, logoutUser, setUser } = loginSlice.actions;
export default loginSlice.reducer;
