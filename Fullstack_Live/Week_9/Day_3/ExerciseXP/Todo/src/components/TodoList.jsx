import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);

    return (
        <>
            <h3>Todo List</h3>
            {todos.length === 0 ? (
                <p>No todos available</p>
            ) : (
                todos.map((item) => (
                    <div key={item.id}>
                        <p>{item.text || "No todo description"}</p>
                    </div>
                ))
            )}
        </>
    );
};

export default TodoList;
