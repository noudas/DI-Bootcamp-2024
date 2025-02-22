import { useDispatch } from "react-redux"
import { useRef } from "react"
import { addTask } from "../redux/action"

const TaskInput = (props) => {
    const nameRef = useRef();
    const dateRef = useRef();
    const dispatch = useDispatch();


    const addNewTask = () =>{
        const name = nameRef.current.value;
        const date = dateRef.current.value;
        if(!name || !date){
            return;
        }
        dispatch(addTask(name,date))
    }

    return (
        <>
            <input placeholder="Task name..." ref={nameRef}/>
            <input type="date" ref={dateRef}/>
            <button onClick={() => addNewTask()}>Add Task</button>
        </>
    )
}

export default TaskInput