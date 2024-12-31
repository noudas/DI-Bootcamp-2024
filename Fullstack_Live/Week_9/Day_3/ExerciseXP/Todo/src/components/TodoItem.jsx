import { useDispatch } from 'react-redux';
import { toggle_todo, remove_todo } from '../features/Todo/TodoSlice';

const TodoItem = (props) =>{
    const todo = props.todo
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggle_todo({ id: todo.id }));
    };

    const handleRemove = () => {
        dispatch(remove_todo(todo.id));
    };

    return(
        <div>
            <input
                type="checkbox"
                checked={false || todo.completed}
                onChange={handleToggle}
                style={{ marginRight: '10px' }}
            />
            
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>

            {/* Remove button */}
            <button onClick={handleRemove} style={{ marginLeft: '10px' }}>
                X
            </button>
        </div>
    )
}

export default TodoItem