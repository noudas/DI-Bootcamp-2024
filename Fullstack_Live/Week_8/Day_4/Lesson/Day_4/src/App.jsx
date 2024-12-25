import "./App.css";
import Home from "./components/home";
import About from "./components/about";

import { Routes, Route, Link, NavLink } from "react-router";
import Shop from "./components/shop";
function App() {
  return(<>
        <header>
            <nav>
              <Link to="/"> HOME </Link>
              <Link to="/about"> ABOUT </Link>
              <Link to="/shop"> SHOP </Link>
            </nav>
        </header>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/multiple" element={
          <>
            <Home/>
            <About/>
          </>
        }/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="*" element={<h1>404 Page not found</h1>}/>
    </Routes>
  </>
  )
}

export default App;