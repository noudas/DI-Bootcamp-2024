import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
      <div className='container'>
        <h1>Daily Planner</h1>
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <TaskList selectedDate={selectedDate} />
        <AddTask selectedDate={selectedDate} />
      </div>
  );
};

export default App;
