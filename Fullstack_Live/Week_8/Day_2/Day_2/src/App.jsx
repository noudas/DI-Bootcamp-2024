import "./App.css";
import { useState } from "react";

function App() {
  // state = {}

  // let users = [{name:'Jonn', id:1}]
  /**
   * state - users
   * setState - setUsers
   */
  const [users, setUsers] = useState([{id:1, name:'aaa'}]);

  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      setUsers(data)
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     console.log(users);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const [inputValue, setInputValue] = useState("Type Something...");
  const handleInput = (e) => {
    setInputValue(e.target.value || "Type Something...");
  };


  console.log(users);
  return (
    <>
      <h2>Events,State,Class vs. Function</h2>
      <button onClick={() => handleClick()}>Click!</button>
      <input onChange={(e) => handleInput(e)} placeholder='Search...' />
      <h2>Users</h2>
      {users.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <h2>Display here the input value</h2>
      <h3>{inputValue}</h3>
    </>
  );
}

export default App;