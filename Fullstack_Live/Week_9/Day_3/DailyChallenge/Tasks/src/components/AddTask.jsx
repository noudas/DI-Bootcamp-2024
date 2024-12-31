import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

const AddTask = ({ selectedDate }) => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!taskText.trim()) return;

    const newTask = {
      id: Date.now(), // Unique ID based on the current timestamp
      text: taskText,
      completed: false,
    };

    dispatch(addTask({ date: selectedDate, task: newTask }));
    setTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
