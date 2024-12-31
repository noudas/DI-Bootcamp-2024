import { ADD_TASK, REMOVE_TASK } from "./action";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTask = {
                id: uuidv4(),
                name: action.payload.name,
                date: action.payload.date,
                active: true,
            };

            const sortedTasks = [...state.tasks, newTask].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );

            return { ...state, tasks: sortedTasks };
        }

        case REMOVE_TASK: {
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            return { ...state, tasks: filteredTasks };
        }

        default:
            return state;
    }
};
