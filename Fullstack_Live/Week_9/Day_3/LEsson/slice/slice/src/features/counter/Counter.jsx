import {useSelector, useDispatch} from 'react-redux';
import { useRef } from 'react';
import { increment, decrement, reset, incrementByNum, decrementByNum, increment2nums } from './ConterSlice';

const Counter = (props) =>{
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    const incremetNumRef = useRef();
    const decremetNumRef = useRef();
    const num1 = useRef();
    const num2 = useRef();



    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <h3>Increment by number</h3>
                <input ref={incremetNumRef}/>
                <button onClick={() => dispatch(incrementByNum({num: incremetNumRef.current.value}))}> Increment </button>
            </div>
            <div>
                <h3>Increment by multiple numbers</h3>
                <input ref={num1}/>
                <input ref={num2}/>
                <button onClick={() => dispatch(increment2nums(num1.current.value, num2.current.value))}> Sum and Increment </button>
            </div>
            <div>
                <h3>Decrement by number</h3>
                <input ref={decremetNumRef}/>
                <button onClick={() => dispatch(decrementByNum({num: decremetNumRef.current.value}))}> Decrement </button>
            </div>
        </>
    )
}

export default Counter;