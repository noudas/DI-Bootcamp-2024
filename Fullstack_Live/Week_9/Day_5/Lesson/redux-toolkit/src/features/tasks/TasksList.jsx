import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);

  return (
    <>
      {tasks.map((item) => {
        return <TaskItem key={item.id} task={item} />;
      })}
    </>
  );
};
export default TasksList;
