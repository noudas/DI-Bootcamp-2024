import { useContext } from "react";
import { CounterContext } from "../App";
import SubTest from "./SubTest";

const TestContext = (props) => {
  const val = useContext(CounterContext);
  console.log('TestContext=>',val);
  return (
    <>
      Test Context  <SubTest />
    </>
  );
};
export default TestContext;
