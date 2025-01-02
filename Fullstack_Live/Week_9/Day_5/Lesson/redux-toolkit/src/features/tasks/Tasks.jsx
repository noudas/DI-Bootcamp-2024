import TasksList from "./TasksList";
import TaskInput from "./TaskInput";
const Tasks = (props) => {
  return (
    <>
      <h2>Tasks</h2>
      <TaskInput />
      <TasksList />
    </>
  );
};
export default Tasks;
