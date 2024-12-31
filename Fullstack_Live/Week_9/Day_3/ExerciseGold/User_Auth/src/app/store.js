import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loginReducer from "../redux/loginSlice";

const appReducer = combineReducers({
    login: loginReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store;
