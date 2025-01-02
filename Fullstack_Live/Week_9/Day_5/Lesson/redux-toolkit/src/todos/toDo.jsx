import { useSelector, useDispatch } from "react-redux";
import { completed, doing, failed, fetchData, addNewTodo } from "./todoSlice";
import { useRef } from "react";
import { useEffect } from "react";

const Todos = (props) =>{
    const titleRef = useRef()
    const todos = useSelector(state => state.todosReducer.todos);
    const status = useSelector(state => state.todosReducer.status);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchData());
    },[])

    const handleAddTodo = () => {
        const title = titleRef.current.value.trim();
        if (title) {
            dispatch(addNewTodo({ title }));
            titleRef.current.value = "";
        } else {
            alert("Please enter a todo title!");
        }
    };


    if(status === "loading") return <h2>Loading Todos.... </h2>
    if(status === "failed") return <h2>Something went Wrong! </h2>
    return (
        <>
        <h1>ToDo's List</h1>
        <div>
            <input type="text" placeholder="Todo's title" ref={titleRef}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {todos
                .slice() // Create a shallow copy of the todos array
                .reverse() // Reverse the order
                .map((item) => (
                    <div key={item.id} className={item.completed ? "completed" : ""}>
                        {item.id} - '{item.title}'
                    </div>
                ))}
        </>
    )
}

export default Todos;