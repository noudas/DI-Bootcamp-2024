import { useDispatch } from 'react-redux';
import { deleteTask, editTask, updateTaskStage } from './state/TaskSlice';
import { useCategories, useTasks } from './state/hooks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useTasks();
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleEdit = (id, title, description) =>
    dispatch(editTask({ id, changes: { title, description } }));
  const handleCheckboxChange = (id, stage) =>
    dispatch(updateTaskStage({ id, stage: stage === 'done' ? 'doing' : 'done' }));

  return (
    <div className="task-list">
      <h4>Task List</h4>
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
