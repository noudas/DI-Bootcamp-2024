const express = require('express');
const {
    getTasks,
    getTasksId,
    createNewTask,
    updateExistingTask,
    deleteExistingTask,
} = require('../controllers/taskController');

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTasksId);
router.post('/tasks', createNewTask);
router.put('/tasks/:id', updateExistingTask);
router.delete('/tasks/:id', deleteExistingTask);

module.exports = router;