import "./App.css";
import FunctionComponent from './FunctionComponent'
import ClassComponent from "./ClassComponent";

function App(props) {

  return (
    <>
      <h2>Class vs. Function</h2>
      <FunctionComponent/>
      <ClassComponent/>
    </>
  );
}

export default App;
