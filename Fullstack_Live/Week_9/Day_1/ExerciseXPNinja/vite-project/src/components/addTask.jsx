import React, { useState } from 'react';
import { useTasks } from '../context/TaskProvider';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTasks();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
