const db = require("../config/connection");

// Get all posts
const getAllPosts = async () => {
    return await db("posts").select("*");
};

// Get a specific post by ID
const getPostById = async (id) => {
    return await db("posts").where({ id }).first();
};

// Create a new post
const createPost = async (post) => {
    return await db("posts").insert(post).returning("*");
};

// Update an existing post
const updatePost = async (id, updatedPost) => {
    return await db("posts").where({ id }).update(updatedPost).returning("*");
};

// Delete a post
const deletePost = async (id) => {
    return await db("posts").where({ id }).del();
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
