import { useRef } from "react";
import { useTasks } from "./state/hooks";
import { useDispatch } from "react-redux";
import { addTask } from "./state/TaskSlice";


const TaskPosts = (props) =>{
    const dispatch = useDispatch();
    const titleRef = useRef();
    const descriptionRef = useRef();

    const tasks = useTasks();
    
    const handleAddTask = (e) =>{
        e.preventDefault();

        const taskTitle = titleRef.current.value.trim();
        const taskDesc = descriptionRef.current.value;

        if(taskTitle){
            dispatch(addTask({title: taskTitle, description: taskDesc, stage: 'doing'}));
            titleRef.current.value = '';
            taskDesc.current.value = '';
        }
    }


    return (
        <>
            <h3>Add a Task</h3>
            <form onSubmit={handleAddTask}>
                <input 
                type="text" 
                placeholder="Add a title"
                ref={titleRef}
                />
                <input 
                type="text" 
                placeholder="Add a description"
                ref={descriptionRef}
                />
            </form>
        </>
    )
}

export default TaskPosts