// import Counter from "./components/counter/Counter";
// import Parent from "./components/wrap/Parent";
// import Child from "./components/wrap/Child";
// import Voiting from "./Voiting";
// import ErrorBoundary from "./ErrorBoundary";
import ReactForm from "./components/forms/ReactForm";
import "./App.css";

function App() {
  return (
    <>
      <h2>Props, Wrap, Errors, Forms</h2>
      <ReactForm/>
    </>
  );
}

export default App;

/**
 <ErrorBoundary fallback={"counter 1"}>
    <Counter />
 </ErrorBoundary>
      
 <ErrorBoundary fallback={"counter 2"}>
    <Counter />
  </ErrorBoundary>
 */
