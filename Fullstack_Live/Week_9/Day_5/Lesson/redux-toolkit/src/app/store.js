import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import tasksReducer from "../features/tasks/tasksSlice";

const appReducer = combineReducers({
  counterReducer,
  tasksReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
