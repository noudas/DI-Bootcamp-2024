import React from 'react';
import { useTasks } from '../context/TaskProvider';

const TaskItem = ({ task }) => {
  const { dispatch } = useTasks();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={handleToggle}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
