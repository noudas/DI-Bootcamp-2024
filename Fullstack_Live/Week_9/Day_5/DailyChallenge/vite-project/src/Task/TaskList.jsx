import TaskCard from "./TaskCard";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;