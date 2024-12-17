const postsModel = require("../models/postsModel");

// GET /posts: Return all posts
const getPosts = async (req, res) => {
    try {
        const posts = await postsModel.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving posts" });
    }
};

// GET /posts/:id: Return a single post by ID
const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postsModel.getPostById(id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving the post" });
    }
};

// POST /posts: Create a new post
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required" });
        }

        const [newPost] = await postsModel.createPost({ title, content });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: "Error creating the post" });
    }
};

// PUT /posts/:id: Update an existing post
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedPost = await postsModel.updatePost(id, { title, content });

        if (!updatedPost.length) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(updatedPost[0]);
    } catch (error) {
        res.status(500).json({ error: "Error updating the post" });
    }
};

// DELETE /posts/:id: Delete a post
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCount = await postsModel.deletePost(id);

        if (deletedCount === 0) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting the post" });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
