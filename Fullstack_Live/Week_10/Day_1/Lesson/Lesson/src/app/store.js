import {configureStore, combineReducers} from "@reduxjs/toolkit"

import postReducer from "../redux/slice"
import userReducer from "../redux/userSlice"

const appReducer = combineReducers({
    userReducer,
    postReducer,
});

const store = configureStore({
    reducer: appReducer
})

export default store