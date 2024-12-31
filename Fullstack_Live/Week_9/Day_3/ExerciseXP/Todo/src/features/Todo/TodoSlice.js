import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add_todo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1, // Generating a new ID based on the current length of the array
                text: action.payload.text,
                active: true,
            };

            state.todos = [...state.todos, newTodo].sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        toggle_todo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo);
        },
        remove_todo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { add_todo, remove_todo, toggle_todo } = TodoSlice.actions;

export default TodoSlice.reducer;