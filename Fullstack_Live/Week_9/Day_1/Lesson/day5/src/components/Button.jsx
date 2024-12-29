import { useContext } from "react";
import { CounterContext } from "../App";
const Button = (props) => {
  const { setCount } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </>
  );
};
export default Button;
