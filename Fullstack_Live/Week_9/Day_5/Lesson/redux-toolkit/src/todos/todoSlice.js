import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    todos: [],
    status:"", // Loading, success, failed
    error: null, // For error handling
}

export const fetchData = createAsyncThunk('todos/fetchData', async (state, action) =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok){
            throw new Error("failed to Fecth data")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

})

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        completed: (state, action) =>{
            state.status = "success"
        },
        doing: (state, action) =>{
            state.status = "doing"
        },
        failed: (state, action) =>{
            state.status = "failed"
        },
        addNewTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length + 1,
                title: action.payload.title,
                completed: false,
            };
            state.todos.push(newTodo);
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchData.pending, (state) =>{
            state.status = "loading";
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) =>{
            state.status = "success";
            state.todos = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.payload;
        })
    },
});


export const { completed, doing, failed, addNewTodo } = todoSlice.actions;

export default todoSlice.reducer;