import { useSelector } from "react-redux";
import TaskRemove from "./TaskRemove";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  return (
    <>
      <h2>Tasks List</h2>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            {item.name} {item.date}
            <TaskRemove id={item.id} />
          </div>
        );
      })}
    </>
  );
};
export default TasksList;
