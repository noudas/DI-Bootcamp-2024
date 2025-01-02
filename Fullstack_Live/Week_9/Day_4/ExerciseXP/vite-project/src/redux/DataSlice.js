import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: '',
    error:null
}

const DataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{},
    extraReducers(builder){}
});

export const {} = DataSlice.actions;

export default DataSlice.reducer;