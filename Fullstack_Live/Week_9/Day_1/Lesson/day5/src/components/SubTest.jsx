import { useContext } from "react";
import { CounterContext } from "../App";
const SubTest = (props) => {
  const val = useContext(CounterContext);
  console.log("SubTest=>", val);
  return (
    <>
      <h2>SubTest</h2>
    </>
  );
};
export default SubTest;
