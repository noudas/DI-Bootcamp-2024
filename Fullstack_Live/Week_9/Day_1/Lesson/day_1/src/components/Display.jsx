import { useContext } from "react";
import { CounterContext } from "../App";

const Display = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Display</h2>
      <ShowCounter />
    </div>
  );
};

const ShowCounter = () => {
  const { count } = useContext(CounterContext); // Directly consuming context
  return <p>Current Count: {count}</p>;
};

export default Display;
