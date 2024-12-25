import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import { useState } from "react";
function App() {
  const [page, setPage] = useState('home');

  if(page === 'home') return <Home setPage={setPage}/>

  if(page === 'about') return <About setPage={setPage}/>
  
}

export default App;