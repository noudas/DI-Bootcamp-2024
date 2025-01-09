import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "./state/TaskSlice";
import { useTasks } from "./state/hooks";

const TaskList = () => {
    const tasks = useTasks();
    const dispatch = useDispatch();
    const [editIdTask, setEditIdTask] = useState(null);

    // Delete a task
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    // Start editing a task
    const handleEdit = (id, title, description) => {
        setEditIdTask(id);
    };

    // Submit the edited task
    const handleSaveEdit = (id, title, description) => {
        if (title && description) {
            dispatch(editTask({ id, changes: { title, description } }));
            setEditIdTask(null);
        }
    };

    return (
        <div className="task-list">
            <h4>Task List</h4>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {editIdTask === task.id ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={task.title}
                                    onChange={(e) => (task.title = e.target.value)}
                                />
                                <textarea
                                    defaultValue={task.description}
                                    onChange={(e) => (task.description = e.target.value)}
                                />
                                <button onClick={() => handleSaveEdit(task.id, task.title, task.description)}>Save</button>
                            </>
                        ) : (
                            <>
                                <h5>{task.title}</h5>
                                <p>{task.description}</p>
                                <button onClick={() => handleEdit(task.id, task.title, task.description)}>Edit</button>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
