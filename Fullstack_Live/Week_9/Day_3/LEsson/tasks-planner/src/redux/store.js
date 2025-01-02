import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "./reducers";

const appReducer = combineReducers({
  tasksReducer,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
