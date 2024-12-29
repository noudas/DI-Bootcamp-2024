import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("abc");

  let name = "John";
  const nameRef = useRef("Dan");

  console.log("name=>", name);
  console.log("nameRef=>", nameRef.current);

  const handleChange = () => {
    name = "Anne";
    nameRef.current = "Marry";
    console.log("name=>", name);
    console.log("nameRef=>", nameRef.current);
  };

  return (
    <>
      <h2>useRef</h2>
      <h3>{name}</h3>
      <h3>{nameRef.current}</h3>
      <button onClick={() => handleChange()}>Change names</button>
      <br></br>
      <button onClick={() => setTest("123")}>Change test to 123</button>
      <h2>{test}</h2>
    </>
  );
}

export default App;

/**
 * 
 */

/**
 * // const divRef = useRef();
  // const inputColorRef = useRef();

  // useEffect(() => {
    // console.log(divRef);
  // }, []);

  // const changeBG = () => {
  //   console.log(inputColorRef.current.value);
  //   divRef.current.style.backgroundColor = inputColorRef.current.value;
  // };
 * <div ref={divRef}>
      <h2>useRef</h2>
      <button onClick={() => changeBG()}>Chenge Color</button>
      <div>
        <input type="email" ref={inputColorRef}/>
      </div>
    </div>
 */
