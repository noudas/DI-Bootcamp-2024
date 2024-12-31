import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);

    return (
        <>
            <h3>Todo List</h3>
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                todos.map((item) => (
                    <TodoItem key={item.id} todo={item} />
                ))
            )}
        </>
    );
};

export default TodoList;
