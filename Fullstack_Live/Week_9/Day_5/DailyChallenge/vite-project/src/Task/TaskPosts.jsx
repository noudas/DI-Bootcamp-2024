import { useRef } from "react";
import { useCategories, useTasks } from "./state/hooks";
import { useDispatch } from "react-redux";
import { addTask } from "./state/TaskSlice";


const TaskPosts = (props) =>{
    const dispatch = useDispatch();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const categoryIdRef = useRef();

    const tasks = useTasks();
    const categories = useCategories()
    
    const handleAddTask = (e) =>{
        e.preventDefault();

        const taskTitle = titleRef.current.value.trim();
        const taskDesc = descriptionRef.current.value;
        const taskCategoryId = categoryIdRef.current.value

        if(taskTitle){
            dispatch(addTask({title: taskTitle, description: taskDesc, stage: 'doing', categoryId: taskCategoryId}));
            titleRef.current.value = '';
            descriptionRef.current.value = '';
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
                <select ref={categoryIdRef} defaultValue="">
                    <option value="" disabled>
                        Select a category
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}

export default TaskPosts