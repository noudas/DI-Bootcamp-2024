import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, minus, title } from './redux/actions'; // Ensure actions are imported
import InputText from './components/inputText';
import TitleText from './components/TitleText';
import { useRef } from 'react';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.appReducer.counterReducer.count);

  const titleRef = useRef('Title Placeholder');
  const titleText = useSelector((state) => state.appReducer.counterReducer.title); 

  const handleTitleChange = () =>{
    dispatch(title(titleRef.current.value));
  }

  return (
    <div className="App">
      <h2>Redux Counter</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(minus())}>Subtract</button>

      <div>
        <InputText ref={titleRef} />
        <button onClick={handleTitleChange}>Change Title</button>
        <TitleText title={titleText} />
      </div>
    </div>
  );
}

export default App;
