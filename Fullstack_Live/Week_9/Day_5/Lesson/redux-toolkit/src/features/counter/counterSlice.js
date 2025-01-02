import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 5,
  msg:''
};

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
  },
});

export const { increment, decrement, reset, incrementByNum,increment2nums } =
  counterSlice.actions;

export default counterSlice.reducer;
