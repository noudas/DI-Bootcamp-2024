import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    stage:"", // ToDo, doing, done
    status: "",
}

const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{},
    extraReducers(builder){},
})

export const stateReducer = (state) => state.taskReducer;
export const {} = taskSlice.actions;
export default taskSlice.reducer;