import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [value] = useState(["+","-"])
  return (
    <>
      <CounterButton value={value[1]} onClick={() => setCount((prevCount) => prevCount - 1)} />
      <CounterButton value={value[0]} onClick={() => setCount((prevCount) => prevCount + 1)} />
      <CounterDisplay count={count} />
    </>
  );
};

export default Counter;
