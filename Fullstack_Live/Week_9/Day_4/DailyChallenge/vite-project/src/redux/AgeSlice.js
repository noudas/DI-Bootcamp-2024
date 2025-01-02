import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    age: 0,
    status: "idle",
    error: null,
};


export const ageUpAsync = createAsyncThunk("age/ageUpAsync", async (_, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
});

export const ageDownAsync = createAsyncThunk("age/ageDownAsync", async (_, thunkAPI) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(-1);
        }, 1000); 
    });
});


const AgeSlice = createSlice({
    name: "age",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle ageUpAsync
            .addCase(ageUpAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age += action.payload; // Increment age
                state.status = "succeeded";
            })
            .addCase(ageUpAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })


            // Handle ageDownAsync
            .addCase(ageDownAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.age += action.payload; // Decrement age
                state.status = "succeeded";
            })
            .addCase(ageDownAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// Export reducer
export default AgeSlice.reducer;