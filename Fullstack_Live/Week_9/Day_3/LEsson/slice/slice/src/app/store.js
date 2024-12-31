import {configureStore, combineReducers} from "@reduxjs/toolkit";

import counterReducer from "../features/counter/ConterSlice"

const appReducer = combineReducers({
    counterReducer
});

const store = configureStore({
    reducer: appReducer,
})

export default store