import './App.css'
import GenericInput from './components/GenericInput'
import GenericButton from './components/GenericButton'
import OutputInput from './components/OutputInput'
import MathHelper from './utils/mathHelper'
import { useState, useEffect } from 'react'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    setSymbol(operation);
  }

  useEffect(() => {
    if (num1 && num2 && symbol) {
      const calculateResult = MathHelper(num1, num2, symbol);
      setResult(calculateResult);
    } else {
      setResult("Please enter valid numbers and an operation.");
    }
  }, [num1, num2, symbol]);

  return (
    <div className='calculator'>
      <h1>ULTIMATE CALCULATOR</h1>

      <GenericInput 
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"  
      />

      <GenericInput 
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"  
      />
      <br></br><br></br>

      <div className="buttons">
        {['+', '-', '*', '/'].map((op) => (
          <GenericButton 
            key={op} 
            symbol={op} 
            onClick={() => handleOperation(op)}
          />
        ))}
      </div>

        <h3>The result will automatically update</h3>
      <OutputInput result={result} />
    </div>
  );
}

export default App;
