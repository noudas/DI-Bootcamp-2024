import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, minus } from './redux/actions'; // Ensure actions are imported

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.appReducer.counterReducer.count);

  return (
    <div className="App">
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(minus())}>Subtract</button>
    </div>
  );
}

export default App;
