import React from 'react';
import './App.css';
import { TaskProvider } from './context/TaskProvider';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTasks from './components/FilterTasks';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <FilterTasks />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
