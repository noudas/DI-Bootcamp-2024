import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks:[]
};

