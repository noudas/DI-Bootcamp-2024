import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actiontypes";

const initialState ={
    todo_list:[],
    filter: "all",
};

export const todoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo_list: [
                    ...state.todo_list,
                    {
                        id: state.todo_list.length + 1,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            };
    
        case TOGGLE_TODO:
            return{
                ...state,
                todo_list: state.todo_list.map((todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
            }
            break;

        case REMOVE_TODO:
            return {
                ...state,
                todo_list: state.todo_list.filter((todo) => todo.id !== action.payload.id),
              };
            break;

        default:
            return state;
    }
};