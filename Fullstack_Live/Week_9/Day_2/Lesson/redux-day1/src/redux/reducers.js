import { INCREMENT,DECREMENT } from "./actiontypes";

const initialState = {
  count: 5,
  title: 'The Redux Counter'
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + action.payload };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  return state;

  //   switch (action.type) {
  //     case INCREMENT:
  //       return { ...state, count: state.count + 1 };
  //     case DECREMENT:
  //       return { ...state, count: state.count - 1 };
  //     default:
  //       return state;
  //   }
};
