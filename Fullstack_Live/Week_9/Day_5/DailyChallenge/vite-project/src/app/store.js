import {configureStore, combineReducers} from '@reduxjs/toolkit';


const appReducer = combineReducers({
    
});

const store = configureStore({
    reducer: appReducer
});

export default store;