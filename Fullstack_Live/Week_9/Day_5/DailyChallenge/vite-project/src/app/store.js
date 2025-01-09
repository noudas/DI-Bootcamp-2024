import {configureStore, combineReducers} from '@reduxjs/toolkit';
import taskReducer from "../Task/state/TaskSlice"
import categoryReducer from "../Task/state/CategorySlice"

const appReducer = combineReducers({
    taskReducer,
    categoryReducer,
});

const store = configureStore({
    reducer: appReducer
});

export default store;