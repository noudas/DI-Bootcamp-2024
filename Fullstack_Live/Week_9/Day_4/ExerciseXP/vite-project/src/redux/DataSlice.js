import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: '',
    error:null
}

export const fetchData = createAsyncThunk('data/fetchData', async (state, action) =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok){
            throw new Error("failed to Fecth data")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const DataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchData.pending, (state) =>{
            state.status = 'pending';
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) =>{
            state.status = "success";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.payload;
        })
    }
});

export const {} = DataSlice.actions;

export default DataSlice.reducer;