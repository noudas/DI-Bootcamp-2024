import './App.css'
import CarModel from './components/Car';

function App() {

  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
      <CarModel name={carinfo.name} model={carinfo.model} />
    </>
  )
}

export default App
