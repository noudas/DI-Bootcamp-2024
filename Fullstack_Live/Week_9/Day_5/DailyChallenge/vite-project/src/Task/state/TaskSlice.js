import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const id = state.tasks.length + 1;
            const {title, description, stage, categoryId } = action.payload;
            state.tasks.push({id, title, description, stage, categoryId});
        },
        editTask: (state, action) => {
            const {id, changes} = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if(task){
                Object.assign(task,changes);
            }
        },
        deleteTask: (state, action) => {
            const id = action.payload;
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        updateTaskStage: (state, action) => {
            const { id, stage } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.stage = stage;
            }
        },
    },
    extraReducers: (builder) => {},
});

export const { addTask, editTask, deleteTask, updateTaskStage  } = tasksSlice.actions;
export const selectTasksState = (state) => state.taskReducer;
export default tasksSlice.reducer;
