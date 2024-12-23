import { useEffect } from "react";
const ExapleUnmount = (props) => {


  useEffect(() => {
    return () => {
      alert("I will be gone soon :( ");
    };
  }, []);


  return (
    <>
      <h1>This is me!</h1>
    </>
  );
};
export default ExapleUnmount;
