import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, minus } from "./redux/actions";
import TitleText from "./components/TitleText";
import InputText from "./components/InputText";

function App() {
  const count = useSelector((state) => state.counter.count);
  const title = useSelector((state) => state.counter.title);

  const dispatch = useDispatch();
  return (
    <>
      <h2>{title}</h2>
      <h2>{count}</h2>
      <button onClick={() => dispatch(add())}> + </button>
      <button onClick={() => dispatch(minus())}> - </button>
      <div>
        <input placeholder='Add value' />
        <button>Add Value</button>
      </div>
      <div>
        <InputText />
        <TitleText />
      </div>
    </>
  );
}

export default App;
