import { useSelector } from "react-redux";
import TaskRemove from "./TaskRemove";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <>
            <h1>Tasks</h1>
            {tasks.map((item) => (
                <div key={item.id}>
                    {item.name} - {item.date}
                    <TaskRemove id={item.id}/>
                </div>
            ))}
        </>
    );
};

export default TaskList;
