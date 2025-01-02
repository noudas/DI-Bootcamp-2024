export const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

export const addTask = (name, date) => {
  return {
    type: ADD_TASK,
    payload: { name, date },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};
