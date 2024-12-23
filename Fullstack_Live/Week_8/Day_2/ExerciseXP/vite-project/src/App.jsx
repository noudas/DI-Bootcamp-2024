import './App.css'
import CarModel from './components/Car';
import ClickMe from './components/Events';
import Phone from './components/Phone';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <CarModel name={carinfo.name} model={carinfo.model} />
      <ClickMe />
      <Phone/>
    </>
  )
}

export default App
