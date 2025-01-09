import { useSelector } from "react-redux";

import { selectTasksState,
    selectCategoriesState,
    selectTasksByCategory,
    selectCompletedTasks,
    selectCategoryById,
} from "./selectors";

export const useTasks = () => useSelector(selectTasksState)
export const useCategories = () => useSelector(selectCategoriesState)

export const useTasksByCategory = (categoryId) => useSelector(selectTasksByCategory(categoryId));

export const useCompletedTasks = () => useSelector(selectCompletedTasks);

export const useCategoryById = (categoryId) => useSelector(selectCategoryById(categoryId));