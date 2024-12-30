import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, remove } from '../redux/action';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todo_list);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => dispatch(toggle(todo.id))}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(remove(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
