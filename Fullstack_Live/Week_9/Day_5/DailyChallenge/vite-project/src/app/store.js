import {configureStore, combineReducers} from '@reduxjs/toolkit';
import taskReducer from "../Task/state/slice"

const appReducer = combineReducers({
    taskReducer,
});

const store = configureStore({
    reducer: appReducer
});

export default store;