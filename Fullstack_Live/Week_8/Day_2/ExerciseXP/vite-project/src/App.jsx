import './App.css'
import CarModel from './components/Car';
import ClickMe from './components/Events';
import Phone from './components/Phone';
import Colour from './components/Colour';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <CarModel name={carinfo.name} model={carinfo.model} />
      <ClickMe />
      <Phone/>
      <Colour />
    </>
  )
}

export default App
