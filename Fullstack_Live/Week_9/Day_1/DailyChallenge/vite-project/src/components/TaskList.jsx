import React, { useState, useRef } from 'react';
import { useTasks } from '../context/TaskProvider';

const TaskList = () => {
  const { state, dispatch } = useTasks();
  const { tasks, filter } = state;
  const [editingTaskId, setEditingTaskId] = useState(null);
  const editingTextRef = useRef('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;  // 'all'
  });

  const handleToggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleRemoveTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleEditTask = (id, text) => {
    setEditingTaskId(id);
    editingTextRef.current.value = text;
  };

  const handleSaveEdit = () => {
    const newText = editingTextRef.current.value;
    if (newText.trim()) {
      dispatch({ type: 'EDIT_TASK', payload: { id: editingTaskId, text: newText } });
      setEditingTaskId(null);
    }
  };

  return (
    <div>
      {filteredTasks.map(task => (
        <div key={task.id}>
          {editingTaskId === task.id ? (
            <div>
              <input
                ref={editingTextRef}
                type="text"
                defaultValue={task.text}
              />
              <button onClick={handleSaveEdit}>Save</button>
            </div>
          ) : (
            <div>
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTask(task.id)}
              >
                {task.text}
              </span>
              <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
              <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
