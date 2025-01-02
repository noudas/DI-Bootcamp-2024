import { useDispatch } from "react-redux";
import { removeTask } from "../redux/actions";

const TaskRemove = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(removeTask(id))}> X </button>
    </>
  );
};
export default TaskRemove;
