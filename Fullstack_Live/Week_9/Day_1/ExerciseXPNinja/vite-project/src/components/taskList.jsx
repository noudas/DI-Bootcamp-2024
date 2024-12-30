import React from 'react';
import { useTasks } from '../context/TaskProvider';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useTasks();

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {state.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
