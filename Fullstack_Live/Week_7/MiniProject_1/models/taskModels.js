const tasks = require("../config/task.js")

const getAllTasks = () => tasks

const getTaskById = (id) => tasks.find((task) => task.id === id);

const createTask = (task) => {
    tasks.push(task);
    return task;
}

const updateTask = (id, updateData) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
        tasks[taskIndex] = {...tasks[taskIndex], ...updateData};
        return tasks[taskIndex];
    }
    return null;
}

const deleteTask = (id) =>{
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
        return tasks.splice(taskIndex, 1)[0];
    }
    return null;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};