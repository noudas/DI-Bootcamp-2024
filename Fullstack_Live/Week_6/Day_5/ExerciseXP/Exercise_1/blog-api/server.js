// In server.js, require the express package and set up an Express app.
const express = require("express")

// Create a data array to simulate a database. 
// Each item in the array should represent a blog post with properties like id, title, and content.
const blogPosts = require("./simlation")

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log("listening to port 3000");
});

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
app.get("/api/posts",(req,res) =>{
    res.json(blogPosts)
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/api/posts/:id",(req,res) =>{
    const {id} = req.params;
    const findPosts = blogPosts.find(post => post.id == id);
    if(!findPosts) return res.status(404).send("not found")
    res.json(findPosts)
});

// POST /posts: Create a new blog post.
app.post("/api/posts/",(req,res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    };

    const newPost = {
        id: blogPosts.length + 1,
        title,
        content,
    };

    blogPosts.push(newPost);

    res.status(201).json({ message: "Post created successfully", post: newPost });
});

// PUT /posts/:id: Update an existing blog post.
app.put("/api/posts/:id",(req,res) =>{
    const {id} = req.params;
    
    const findPost = blogPosts.find(post => post.id === Number(id));
    if(!findPost) return res.status(404).send("not found")

    console.log(findPost);
    

    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    };

    findPost.title = title;
    findPost.content = content;

    res.status(200).json({ message: "Post updated successfully", post: findPost });
})

// DELETE /posts/:id: Delete a blog post.
app.delete("/api/posts/:id",(req,res) =>{
    const {id} = req.params;

    const findPostsIndex = blogPosts.findIndex(post => post.id == id);

    if(findPostsIndex === -1){
        return res.status(404).json({ error: "Post not found" });
    }

    const deletePost = blogPosts.splice(findPostsIndex, 1);

    res.status(200).json({ message: "Post deleted successfully", post: deletePost[0] });

});

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).