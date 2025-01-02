import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AgeReducer from "../redux/AgeSlice"

const appReducer = combineReducers({
    age: AgeReducer
});
  
const store = configureStore({
    reducer: appReducer,
});
  
export default store;