import { CHANGE_TITLE } from "./titleActions";

const initilState = {
  title: "My Amazing Tittle",
};

export const titleReducer = (state = initilState, action) => {
  if (action.type === CHANGE_TITLE) {
    return { ...state, title: action.payload };
  }
  return state;
};
