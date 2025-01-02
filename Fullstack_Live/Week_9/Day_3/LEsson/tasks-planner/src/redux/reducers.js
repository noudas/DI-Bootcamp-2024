import { ADD_TASK, REMOVE_TASK } from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({
      id: uuidv4(),
      name: action.payload.name,
      date: action.payload.date,
      active: true,
    });

    // const sortTasks = newTasks.sort(
    //   (a, b) => new Date(a.date) - new Date(b.date)
    // );

    return {
      ...state,
      tasks: newTasks.sort((a, b) => new Date(a.date) - new Date(b.date)),
    };
  }
  if (action.type === REMOVE_TASK) {
    return {
      ...state,
      tasks: state.tasks.filter((item) => item.id !== action.payload),
    };
  }
  return state;
};
