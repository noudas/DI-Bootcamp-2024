import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/TodoSlice";

const appReducer = combineReducers({
    todos: todoReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;
