import Counter from "./features/counter/Counter";
import Tasks from "./features/tasks/Tasks";
import "./App.css";
import Todos from "./todos/toDo";

function App() {
  return (
    <>
    <h2>Async with Redux, MiddleWare in Redux, Redux DevTools</h2>
      <Counter />
      <Todos/>
    </>
  );
}

export default App;
