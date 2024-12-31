import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        add_task: (state, action)  => {
            const newTask = {
                id: uuidv4(),
                name: action.payload.name,
                date: action.payload.date,
                active: true,
            };

            state.tasks = [...state.tasks, newTask].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );
        },
        remove_task: (state, action) =>{
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        }
    }
});

export const { add_task, remove_task } = taskSlice.actions;

export default taskSlice.reducer;