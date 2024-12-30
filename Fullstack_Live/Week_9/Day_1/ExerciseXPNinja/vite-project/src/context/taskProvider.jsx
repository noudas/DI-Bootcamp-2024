import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks:[]
};

const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          )
        };
    default:
        return state;
}
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer,initialState);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => useContext(TaskContext);