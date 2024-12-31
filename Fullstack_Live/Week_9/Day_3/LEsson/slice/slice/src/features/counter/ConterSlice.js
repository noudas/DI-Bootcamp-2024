import {createSlice} from "@reduxjs/toolkit"

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
            state.count += Number(action.payload)
        },
        decrementByNum: (state,action) =>{
            state.count -= Number(action.payload)
        },
    },
});

export const { increment, decrement, reset, incrementByNum, decrementByNum } = counterSlice.actions

export default counterSlice.reducer;