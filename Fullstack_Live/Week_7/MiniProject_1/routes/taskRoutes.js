const express = require('express');
const {
    getTasks,
    getTasksId,
    createTask,
    updateExistingTask,
    deleteExistingTask,
} = require('../controllers/tasksController');

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTasksId);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateExistingTask);
router.delete('/tasks/:id', deleteExistingTask);

module.exports = router;