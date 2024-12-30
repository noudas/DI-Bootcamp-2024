// import { createStore } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers";
import { titleReducer } from "./titleRedcuder";

const appReducer = combineReducers({
  counter:counterReducer,
  titleReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
