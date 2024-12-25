import { Routes, Route } from "react-router";
import "./App.css";
import Products from "./features/Products";
import Product from "./features/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
