import {configureStore, combineReducers} from "@reduxjs/toolkit"

import postReducer from "../redux/slice"

const appReducer = combineReducers({
    postReducer,
});

const store = configureStore({
    reducer: appReducer
})

export default store