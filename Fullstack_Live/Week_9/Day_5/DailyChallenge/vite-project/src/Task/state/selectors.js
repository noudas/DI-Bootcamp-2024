import { createSelector } from "@reduxjs/toolkit";

export const selectTasksState = (state) => state.tasksReducer.tasks;
export const selectCategoriesState = (state) => state.categoriesReducer.categories;


// Select by category
export const selectTasksByCategory = (categoryId) =>{
    createSelector([selectTasksState], (tasks) => tasks.filter((task) => task.categoryId === categoryId));
};

// 2. Select completed tasks
export const selectCompletedTasks = createSelector([selectTasksState], (tasks) => tasks.filter((task) => task.stage === "done"))

// 3. Select category by ID
export const selectCategoryById = (categoryId) => createSelector([selectCategoriesState], (categories) => 
    categories.find((category) => category.id === categoryId)
);