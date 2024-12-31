import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <>
            <h1>Tasks</h1>
            {tasks.map((item) => (
                <div key={item.id}>
                    {item.name} - {item.date}
                </div>
            ))}
        </>
    );
};

export default TaskList;
