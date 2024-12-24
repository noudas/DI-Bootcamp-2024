import './App.css'
import BuggyCounter from './components/BuggyCounter.JSX'
import Colour from './components/Colour'
import ErrorBoundary from './components/ErrorBoundary'

function App() {


  return (
    <>
    <div>
      <h1>Simulation 1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </div>

    <div>
      <h1>Simulation 2</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
    <h1>Simulation 3</h1>
        <BuggyCounter />

      <Colour/>
    </>
  )
}

export default App
