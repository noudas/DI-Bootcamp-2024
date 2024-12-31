import { useDispatch } from "react-redux";
import { useRef } from "react";
import { add_todo } from "../features/Todo/TodoSlice";

const AddTodo = (props) =>{
    const todoRef = useRef();
    const dispatch = useDispatch();

    const addNewTodo = () =>{
        const text = todoRef.current.value;
        if(!text){
            return
        }
        dispatch(add_todo({text}))
    }

    return(
        <>
            <input placeholder="What to do..." ref={todoRef} />
            <button onClick={addNewTodo}>Add Todo</button>
        </>
    )
}

export default AddTodo