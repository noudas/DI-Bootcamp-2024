import { createSelector } from "@reduxjs/toolkit";

// Select the tasks state
export const selectTasksState = (state) => state.taskReducer.tasks;
// Select the categories state
export const selectCategoriesState = (state) => state.categoryReducer.categories;

// 1. Select tasks by category
export const selectTasksByCategory = (categoryId) =>
  createSelector([selectTasksState], (tasks) =>
    tasks.filter((task) => task.categoryId === categoryId)
  );

// 2. Select completed tasks (tasks with stage "done")
export const selectCompletedTasks = createSelector([selectTasksState], (tasks) =>
  tasks.filter((task) => task.stage === "done")
);

// 3. Select category by ID
export const selectCategoryById = (categoryId) =>
  createSelector([selectCategoriesState], (categories) =>
    categories.find((category) => category.id === categoryId)
  );
