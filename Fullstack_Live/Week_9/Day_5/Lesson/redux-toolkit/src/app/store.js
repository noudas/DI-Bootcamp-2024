import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import tasksReducer from "../features/tasks/tasksSlice";
import todosReducer from "../todos/todoSlice"

const appReducer = combineReducers({
  counterReducer,
  tasksReducer,
  todosReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
