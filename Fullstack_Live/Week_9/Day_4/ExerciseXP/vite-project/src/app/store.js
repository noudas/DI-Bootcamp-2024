import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DataReducer from "../redux/DataSlice"

const appReducer = combineReducers({
    DataReducer
});
  
const store = configureStore({
    reducer: appReducer,
});
  
export default store;