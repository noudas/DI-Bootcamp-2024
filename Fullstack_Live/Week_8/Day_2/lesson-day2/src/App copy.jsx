import "./App.css";
import { useState, useEffect } from "react";
import ExapleUnmount from "./ExampleUnmout";

function App(props) {
  // state = {}

  // let users = [{name:'Jonn', id:1}]
  /**
   * state - users
   * setState - setUsers
   */
  const [users, setUsers] = useState([]);
  const [textInput, setTextInput] = useState("abc");
  const [unmount, setUnmount] = useState(false);

  /** component  mount */
  /** component  update */
  useEffect(() => {
    console.log("useEffect=>", users);
    if (textInput !== "abc") {
      handleClick();
    }
  }, [textInput, props.id]);

  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // console.log(data);
      setUsers(data);
      // console.log(users);
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

  const handleInput = (e) => {
    console.log("hello from input", e.target.value);
    setTextInput(e.target.value);
  };

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
      <h3>{textInput}</h3>
      {unmount ? null : <ExapleUnmount />}
      <div>
        <button onClick={() => setUnmount(!unmount)}>
          
          {unmount ? 'mount me' : 'unmount me'}
          
        </button>
      </div>
    </>
  );
}

export default App;
