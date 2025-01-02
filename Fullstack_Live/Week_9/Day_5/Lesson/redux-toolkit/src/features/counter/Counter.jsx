import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  increment2nums,
} from "./counterSlice";
import { useRef } from "react";

const Counter = (props) => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  const numRef = useRef();
  const num1Ref = useRef();
  const num2Ref = useRef();
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
      </div>
    </>
  );
};
export default Counter;
