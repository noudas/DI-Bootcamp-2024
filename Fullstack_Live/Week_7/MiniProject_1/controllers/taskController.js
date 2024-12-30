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

const createTask = (req,res) =>{
    const {title, description} = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description
    }

    createTask(newTask)
    res.json(201).json(newTask);

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