import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    count: 0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state, action) => {
          // return{...state, count:state.count + 1}  
          state.count += 1
        },
        decrement: (state, action) => {
            // return{ ...state, count:state.count - 1}  
            state.count -= 1
        },
        reset: (state, action) =>{
            state.count = 0
        },
        incrementByNum: (state,action) =>{
            state.count += Number(action.payload.num)
        },
        decrementByNum: (state,action) =>{
            state.count -= Number(action.payload.num)
        },
        // Prepare
        increment2nums: {
            reducer (state,action){
                state.count += action.payload;
            },
            prepare(num1,num2){
                return {payload: Number(num1) + Number(num2)}
            }
        }
    },
});

export const { increment, decrement, reset, incrementByNum, decrementByNum, increment2nums } = counterSlice.actions

export default counterSlice.reducer;