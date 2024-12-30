import React from 'react';
import { useTasks } from '../context/TaskProvider';

const FilterTasks = () => {
  const { dispatch } = useTasks();

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('active')}>Active</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
    </div>
  );
};

export default FilterTasks;
