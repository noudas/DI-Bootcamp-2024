import { INCREMENT, DECREMENT } from "./actions";

const initializeState = {
    count:0,
}

export const counterReducer = (state = initializeState, action) =>{
    if (action.type === INCREMENT) {
        return {...state, count: state.count + 1}
    }
    if (action.type === DECREMENT) {
        return {...state, count: state.count - 1}
    }
    return state;
}