// import {createStore} from "redux"
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./reducers"

const appReducer = combineReducers({
    counterReducer,
})


const store = configureStore({
    reducer:{
        appReducer
    }
})

export default store;