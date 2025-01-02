import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      /** add task */
      add: (state, action) => {
        state.tasks.push({
          id: nanoid(),
          task: action.payload.value,
          duedate: action.payload.date,
          active: true,
        });
        state.tasks = state.tasks.sort(
          (a, b) => new Date(a.duedate) - new Date(b.duedate)
        );
      },
      /** remove task */
      remove: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
      /** set active true or false */
      active: (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload);
        if (task) {
          task.active = !task.active;
        }
      },
      /** clear all */
  
      /** edit task */
    },
  });
  
  export const { add, remove, active } = tasksSlice.actions;
  export default tasksSlice.reducer;