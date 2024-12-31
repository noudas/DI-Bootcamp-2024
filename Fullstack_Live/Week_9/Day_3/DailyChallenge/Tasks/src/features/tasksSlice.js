import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {},
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date];
      const taskIndex = tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const tasks = state.tasksByDate[date];
      state.tasksByDate[date] = tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
