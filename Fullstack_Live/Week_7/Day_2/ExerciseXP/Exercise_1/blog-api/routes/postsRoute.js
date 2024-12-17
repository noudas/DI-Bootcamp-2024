const express = require("express");
const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require("../controllers/postsController");

const router = express.Router();

// GET all posts
router.get("/", getPosts);

// GET a specific post by ID
router.get("/:id", getPostById);

// POST a new post
router.post("/", createPost);

// PUT update a post
router.put("/:id", updatePost);

// DELETE a post
router.delete("/:id", deletePost);

module.exports = router;
