import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const appReducer = combineReducers({
    tasks: taskReducer, // Use `tasks` for consistency
});

const store = configureStore({
    reducer: appReducer,
});

export default store;
