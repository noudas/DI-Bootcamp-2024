import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  author: -1,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USER_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectedAuthor: (state, action) => {
      state.author = action.payload;
      console.log(state.author);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const stateReducer = (state) => state.usersReducer;

export const { selectedAuthor } = usersSlice.actions;
export default usersSlice.reducer;
