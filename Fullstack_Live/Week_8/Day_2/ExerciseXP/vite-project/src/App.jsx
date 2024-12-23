import './App.css'
import CarModel from './components/Car';
import ClickMe from './components/Events';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <CarModel name={carinfo.name} model={carinfo.model} />
      <ClickMe />
    </>
  )
}

export default App
