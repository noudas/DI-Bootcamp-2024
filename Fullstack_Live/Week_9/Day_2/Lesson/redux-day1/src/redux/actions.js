import { INCREMENT, DECREMENT } from "./actiontypes";

export const add = () => {
  return {
    type: INCREMENT,
    payload: 1,
  };
};

export const minus = () => {
  return {
    type: DECREMENT,
  };
};
