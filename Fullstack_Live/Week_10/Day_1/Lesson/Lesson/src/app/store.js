import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "../redux/slice";
import userReducer from "../redux/userSlice";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
});
