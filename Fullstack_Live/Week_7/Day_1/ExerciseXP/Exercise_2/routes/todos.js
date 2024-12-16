const express = require("express");
const router = express.Router();

// // Sample in-memory database for storing to-do items
// const todos = [];




let todos = [];
let idCounter = 1;

// // Get all to-do items
router.get("/", (req, res) => {
    res.json(todos);
});

// POST: Add a new to-do item
// // Add a new to-do item
router.post("/", (req, res) => {
    const { title, description } = req.body;
    
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    
    const newTodo = { id: idCounter++, title, description: description || "" };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT: Update a to-do item by ID
// // Update a to-do item by ID
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    
    const todo = todos.find((t) => t.id === parseInt(id));
    
    if (!todo) {
        return res.status(404).json({ error: "To-Do item not found" });
    }
    
    // Update fields
    if (title) todo.title = title;
    if (description) todo.description = description;
    
    res.json(todo);
});

// DELETE: Delete a to-do item by ID
// // Delete a to-do item by ID
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const initialLength = todos.length;

    todos = todos.filter((t) => t.id !== parseInt(id));

    if (todos.length === initialLength) {
        return res.status(404).json({ error: "To-Do item not found" });
    }

    res.json({ message: "To-Do item deleted successfully" });
});

module.exports = router;
