import { INCREMENT, DECREMENT, TITLECHANGE } from './actions';

const initialState = {
  count: 0,
  title: '',
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case TITLECHANGE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
