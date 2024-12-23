import User from "./components/User";
import "./App.css";
import users from "./users.json";

function App() {
  return (
    <>
      {users.map((item, indx) => {
        return <User key={indx} info={item} />;
      })}
    </>
  );
}

export default App;
