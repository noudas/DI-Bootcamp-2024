import { useContext } from "react";
import { CounterContext } from "../App";

const ShowCouter = (props) => {
  //   console.log(props);
  const { count } = useContext(CounterContext);
  //   console.log(value);
  return (
    <>
      <h2>Count: {count}</h2>
    </>
  );
};
export default ShowCouter;
