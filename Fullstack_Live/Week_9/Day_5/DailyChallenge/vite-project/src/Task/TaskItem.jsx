import { useState } from 'react';
import './TaskItem.css'

const TaskItem = ({ task, onEdit, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onSave(task.id, editedTitle, editedDescription);
    toggleEdit();
  };

  return (
    <li style={{ textDecoration: task.stage === "done" ? "line-through" : "" }}>
      <input
        type="checkbox"
        checked={task.stage === "done"}
        onChange={() => onEdit(task.id, task.stage)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h5>{task.title} | {task.description}</h5>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
