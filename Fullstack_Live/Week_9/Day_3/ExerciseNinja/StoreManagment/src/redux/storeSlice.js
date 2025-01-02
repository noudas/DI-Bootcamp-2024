import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
  };


const storeSlice = createSlice({
    name:"store",
    initialState,
    reducers:{
        addProducts: (state, action) => {

        },
        updateQuantity: (state, action) => {

        },
        removeProduct: (state, action) => {

        },
    }
})