import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../features/tasksSlice';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []);
  const dispatch = useDispatch();

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEditTask = (taskId, newText) => {
    dispatch(editTask({
      date: selectedDate,
      taskId,
      updatedTask: { text: newText },
    }));
    setEditingTaskId(null); // Exit edit mode
    setEditedText(''); // Clear input
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ date: selectedDate, taskId }));
  };

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: '10px' }}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  placeholder="Edit task"
                />
                <button onClick={() => handleEditTask(task.id, editedText)}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{task.text}</p>
                <button onClick={() => {
                  setEditingTaskId(task.id);
                  setEditedText(task.text);
                }}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
