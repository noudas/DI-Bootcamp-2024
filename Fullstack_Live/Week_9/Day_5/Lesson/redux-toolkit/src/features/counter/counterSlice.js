import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 5,
  msg:''
};

export const delayIncrementThunk = createAsyncThunk("counter/delay5sec", () =>{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(6);
    }, 5000);
  })
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNum: (state, action) => {
      console.log("action=>", action);
      state.count += Number(action.payload.num);
    },
    //prepare
    increment2nums: {
      reducer(state, action) {
        state.count += action.payload;
      },
      prepare(num1, num2) {
        //....
        return { payload: Number(num1) + Number(num2) };
      },
    },
//    delayIncrement5Sec: (state) => {
//      setTimeout(() => {
//        state.count += 5
//      }, 5000);
//    },
  },
  extraReducers(builder){
    builder.addCase(delayIncrementThunk.fulfilled, (state,action) => {
      state.count += action.payload
    })
  },
});

export const { increment, decrement, reset, incrementByNum,increment2nums, delayIncrement5Sec } =
  counterSlice.actions;

export default counterSlice.reducer;
