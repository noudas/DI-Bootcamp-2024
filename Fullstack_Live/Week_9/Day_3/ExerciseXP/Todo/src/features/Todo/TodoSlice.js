import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add_todo: (action, state ) => {
            const newTodo = {
                id: state.todos.length + 1,
                text: '',
                active: true,
            }

            state.todos = [...state.todos, newTodo].sort((a, b) => new Date(a.date) - new Date(b.date))

        },
        toggle_todo: ( action ,state ) =>{
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)
        },
        remove_todo: (action,state) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
})

export const { add_todo, remove_todo, toggle_todo } = TodoSlice.actions;

export default TodoSlice.reducer;