const TaskCard = ({ task, onToggleComplete, onDelete }) => {
    const { id, title, stage } = task;
  
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={stage === "done"}
          onChange={() => onToggleComplete(id)}
        />
        <p>{title}</p>
        <button onClick={() => onDelete(id)}>X</button>
      </div>
    );
  };
  
  export default TaskCard;