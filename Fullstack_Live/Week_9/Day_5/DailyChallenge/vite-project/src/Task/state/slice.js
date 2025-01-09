import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    stage:"", // ToDo, doing, done
    status: "",
}