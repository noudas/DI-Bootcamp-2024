import { useSelector } from "react-redux";

const TaskList = (props) => {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    return (
        <>
            <h1>Tasks</h1>
            {tasks.map(item => {
                return(
                    <div key={item.id}>
                        {item.name} {item.date}
                    </div>
                )
            })}
        </>
    )
}

export default TaskList