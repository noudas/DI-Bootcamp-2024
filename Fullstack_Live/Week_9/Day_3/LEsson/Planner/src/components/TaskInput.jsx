import { useDispatch } from "react-redux";
import { useRef } from "react";
import { add_task } from "../redux/taskSlice";

const TaskInput = () => {
    const nameRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();

    const addNewTask = () => {
        const name = nameRef.current.value;
        const date = dateRef.current.value;
        if (!name || !date) {
            return;
        }

        // Dispatch with the correct payload structure
        dispatch(add_task({ name, date }));
    };

    return (
        <>
            <input placeholder="Task name..." ref={nameRef} />
            <input type="date" ref={dateRef} />
            <button onClick={addNewTask}>Add Task</button>
        </>
    );
};

export default TaskInput;
