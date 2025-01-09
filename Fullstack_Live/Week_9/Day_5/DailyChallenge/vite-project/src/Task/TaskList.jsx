import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask, updateTaskStage } from './state/TaskSlice';
import { selectTasksByCategory, selectCompletedTasks, selectTasksState } from './state/selectors';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [categoryFilter, setCategoryFilter] = useState('all'); // Default to 'all' to show all tasks
  const [showCompleted, setShowCompleted] = useState(false); // Default to show all tasks (completed or not)

  const tasks = useSelector((state) => {
    const allTasks = selectTasksState(state);
    let filteredTasks = allTasks;

    // Filter by category
    if (categoryFilter !== 'all') {
      filteredTasks = selectTasksByCategory(categoryFilter)(state);
    }

    // Filter by completion status
    if (showCompleted) {
      filteredTasks = filteredTasks.filter((task) => task.stage === 'done');
    }

    return filteredTasks;
  });

  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  // Handlers
  const handleDelete = (id) => dispatch(deleteTask(id));

  const handleEdit = (id, title, description) => dispatch(editTask({ id, changes: { title, description } }));

  const handleCheckboxChange = (id, stage) => dispatch(updateTaskStage({ id, stage: stage === 'done' ? 'doing' : 'done' }));

  // Category filter change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };


  // Show completed tasks filter
  const handleShowCompletedChange = () => {
    setShowCompleted((prev) => !prev);
  };

  return (
    <div className="task-list">
      <h4>Task List</h4>
      
      {/* Category Filter Dropdown */}
      <div>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Completed Tasks Checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleShowCompletedChange}
          />
          Show Completed Tasks Only
        </label>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleCheckboxChange}
            onDelete={handleDelete}
            onSave={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
