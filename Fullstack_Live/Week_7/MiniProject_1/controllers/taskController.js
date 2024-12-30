const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require("../models/taskModels");

const getTasks = (req,res) =>{
    res.json(getAllTasks());
}

const getTasksId = (req, res) =>{
    const id = parseInt(req.params.id,10)
    const task = getTaskById(id)

    if(!task){
        res.status(404).json({message: "Task not found!"});
    }

    res.json(task);
}

const createNewTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const tasks = getAllTasks();

    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    const newTask = {
        id: newId,
        title,
        description,
    };

    createTask(newTask);
    res.status(201).json(newTask);
};


const updateExistingTask = (req,res) =>{
    const id = parseInt(req.params.id,10);
    const updatedData = req.body;

    const updatedTask = updateTask(id, updatedData);

    if(!updatedTask){
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
};

const deleteExistingTask = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedTask = deleteTask(id);

    if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(deletedTask);
};

module.exports = {
    getTasks,
    getTasksId,
    createNewTask,
    updateExistingTask,
    deleteExistingTask,
};