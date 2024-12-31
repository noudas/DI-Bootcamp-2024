import {useSelector, useDispatch} from 'react-redux';
import { useRef } from 'react';
import { increment, decrement, reset, incrementByNum, decrementByNum } from './ConterSlice';

const Counter = (props) =>{
    const count = useSelector(state => state.counterReducer.count);
    const dispatch = useDispatch();
    const incremetNumRef = useRef();
    const decremetNumRef = useRef();



    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <h3>Increment by number</h3>
                <input ref={incremetNumRef}/>
                <button onClick={() => dispatch(incrementByNum(incremetNumRef.current.value))}></button>
            </div>
            <div>
                <h3>Decrement by number</h3>
                <input ref={decremetNumRef}/>
                <button onClick={() => dispatch(decrementByNum(decremetNumRef.current.value))}></button>
            </div>
        </>
    )
}

export default Counter;