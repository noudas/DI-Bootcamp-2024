import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasksSlice';

const EditTask = ({ selectedDate, task }) => {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (!newText.trim()) return;

    dispatch(editTask({
      date: selectedDate,
      taskId: task.id,
      updatedTask: { text: newText },
    }));
  };

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleEditTask}>Save</button>
    </div>
  );
};

export default EditTask;
