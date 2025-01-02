import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  increment2nums,
  delayIncrementThunk,
} from "./counterSlice";
import { useRef } from "react";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const numRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();

  const delay5sec = () =>{
    setTimeout(() => {
      dispatch(incrementByNum({num : 5}))
    }, 5000);
  }
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
      <div>
        <h3>Increment by number</h3>
        <input ref={numRef} />
        <button
          onClick={() =>
            dispatch(incrementByNum({ num: numRef.current.value }))
          }
        >
          Add number
        </button>
      </div>
      <div>
        <h3>Increment by 2 numbers</h3>
        <input ref={num1Ref} />
        <input ref={num2Ref} />
        <button onClick={() => dispatch(increment2nums(4, 5))}>
          Add number
        </button>
        <div>
          <button onClick={() => delay5sec()}>
            Wrong way Increment by 5 Sec
          </button>
          <button onClick={() => dispatch(delayIncrementThunk())}>
            Right way Increment by 5 Sec
          </button>
        </div>
      </div>
    </>
  );
};
export default Counter;
