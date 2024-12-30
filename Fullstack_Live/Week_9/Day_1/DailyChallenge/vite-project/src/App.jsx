import React from 'react';
import './App.css';
import { TaskProvider } from './context/TaskProvider';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Management</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
