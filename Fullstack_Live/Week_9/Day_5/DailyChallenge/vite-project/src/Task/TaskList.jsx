// TaskList.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "./state/TaskSlice";
import { useTasks } from "./state/hooks";

const TaskList = () => {
    const tasks = useTasks();
    const dispatch = useDispatch();
    const [editIdTask, setEditIdTask] = useState(null);
    const [editTitleRef, setEditTitleRef] = useState(null);
    const [editDescriptionRef, setEditDescriptionRef] = useState(null);

    // Delete a task
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    // Start editing a task
    const handleEdit = (id, title, description) => {
        setEditIdTask(id);
        setEditTitleRef((prevRef) => {
            if (prevRef) prevRef.value = '';
            return { value: title };
        });
        setEditDescriptionRef((prevRef) => {
            if (prevRef) prevRef.value = '';
            return { value: description };
        });
    };

    // Submit the edited task
    const handleSaveEdit = () => {
        if (editIdTask && editTitleRef?.value && editDescriptionRef?.value) {
            dispatch(editTask({ id: editIdTask, changes: { 
                title: editTitleRef.value, 
                description: editDescriptionRef.value 
            } }));
            setEditIdTask(null);
            setEditTitleRef(null);
            setEditDescriptionRef(null);
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
                                    ref={(node) => setEditTitleRef(node)}
                                    type="text"
                                    defaultValue={task.title}
                                />
                                <textarea
                                    ref={(node) => setEditDescriptionRef(node)}
                                    defaultValue={task.description}
                                ></textarea>
                                <button onClick={handleSaveEdit}>Save</button>
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
