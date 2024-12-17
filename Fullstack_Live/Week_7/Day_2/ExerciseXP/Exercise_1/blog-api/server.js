// In server.js, require the express package and set up an Express app.
const express = require("express");
const postsRoute = require("./routes/postsRoute");

require("dotenv").config();
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/posts", postsRoute);

// Check DB Connection
db.raw("SELECT 1")
    .then(() => console.log("Database connected successfully"))
    .catch((err) => {
        console.error("Database connection failed:", err);
        process.exit(1);
    });

    
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Create a posts table in postgres database, with the properties like id, title, and content.

// Implement the following routes using Express:

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Implement error handling for invalid routes and server errors.


// Start the Express app and listen on a specified port (e.g., 3000).