import { useContext } from "react";
import { CounterContext } from "../App";

const Action = () => {
  const { setCount } = useContext(CounterContext); // Proper destructuring

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Action</h2>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Action;
