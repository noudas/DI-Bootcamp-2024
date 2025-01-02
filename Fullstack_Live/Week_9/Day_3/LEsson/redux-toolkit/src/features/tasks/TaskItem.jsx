import TaskRemove from "./TaskRemove";
import { useDispatch } from "react-redux";
import { active } from "./tasksSlice";
import "./tasks.css";


const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const changeActiveTask = () => {
    dispatch(active(task.id));
  };
  return (
    <>
      <div>
        <span
          className={task.active ? "" : "active"}
          onClick={() => changeActiveTask()}
        >
          {task.task} {task.duedate}
        </span>

        <TaskRemove id={task.id} />
      </div>
    </>
  );
};
export default TaskItem;
