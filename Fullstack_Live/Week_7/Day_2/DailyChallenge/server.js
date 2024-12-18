// Instructions : Create a User Management API with Registration and Login using Express.js, Bcrypt, and Database
// Requirements:

// Set up a new Express.js application.

// Implement the following routes using express.Router:

// POST /register: Allow users to register by providing a username and password. 
// Hash the password using bcrypt before storing it in the the database

// POST /login: Allow users to login by providing their username and password. 
// Compare the hashed password from the JSON file with the provided password.

// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

// Create users table to store user data.


// Define a two data tables users and hashpwd to store user details:

// users table with properties like id, email, username, first_name, last_name.
// hashpwd table with properties like id, username, password.

// Use transaction to add a user


// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Use bcrypt to hash user passwords before storing them in the table and for verifying passwords during login.

const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// Test your API using tools like Postman or curl.