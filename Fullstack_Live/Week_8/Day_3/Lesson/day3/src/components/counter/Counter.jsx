import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("Opppps.... !!!!!!");
  }
  return (
    <>
      <CounterButton setCount={setCount} num={1} />
      <CounterButton setCount={setCount} num={-5} />
      <CounterDisplay count={count} />
    </>
  );
};
export default Counter;
