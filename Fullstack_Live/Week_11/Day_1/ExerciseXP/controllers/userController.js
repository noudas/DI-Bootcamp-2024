// Import required dependencies and configurations
const userModel = require('../models/userModel'); // Import the user model for database operations
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing and comparison
const jwt = require("jsonwebtoken"); // Import JSON Web Token for token generation and authentication
require("dotenv").config(); // Load environment variables from a .env file

module.exports = {
    // Register a new user
    registerUser: async (req, res) => {
        const { password, email } = req.body; // Extract email and password from the request body

        try {
            // Create a new user in the database
            const user = await userModel.createUser(password, email);

            // Respond with success message and user details
            res.status(201).json({
                message: "User registered successfully",
                user,
            });
        } catch (error) {
            console.log(error); // Log any errors to the console

            // Respond with an internal server error message
            res.status(500).json({
                message: "Internal Error"
            });
        }
    },

    // Login an existing user
    loginUser: async (req, res) => {
        const { password, email } = req.body; // Extract email and password from the request body

        try {
            // Retrieve the user by email
            const user = await userModel.getUserByEmail(email);
            if (!user) {
                // If the user is not found, return a 404 error
                return res.status(404).json({ message: "User not found" });
            }

            // Compare the provided password with the stored hashed password
            const matchinPassword = await bcrypt.compare(password + '', user.password);
            if (!matchinPassword) {
                // If the password does not match, return a 404 error
                return res.status(404).json({ message: "Wrong Password" });
            }

            // Generate an access token using the user's ID and email
            const { ACCESS_TOKEN_SECRET } = process.env;
            const acessToken = jwt.sign(
                { userid: user.id, email: user.email },
                ACCESS_TOKEN_SECRET,
                { expiresIn: "60s" } // Token expires in 60 seconds
            );

            // Set the access token in an HTTP-only cookie
            res.cookie("Token_Cookie", acessToken, {
                maxAge: 60 * 1000, // Cookie expires in 60 seconds
                httpOnly: true, // Cookie is not accessible via client-side scripts
            });

            // Respond with success message, user details, and the token
            res.status(200).json({
                message: "Login successfully",
                user: { userid: user.id, email: user.email },
                token: acessToken,
            });
        } catch (error) {
            console.log(error); // Log any errors to the console

            // Respond with an internal server error message
            res.status(500).json({
                message: "Internal Error"
            });
        }
    },

    // Get all registered users
    getUsers: async (req, res) => {
        try {
            // Retrieve all users from the database
            const users = await userModel.getUsers();

            // Respond with the list of users
            res.json(users);
        } catch (error) {
            console.log(error); // Log any errors to the console

            // Respond with an internal server error message
            res.status(500).json({
                message: "Internal Error"
            });
        }
    },

    // Logout the user
    logoutUser: async (req, res) => {
        req.clearCookie("Token_Cookie"); // Clear the authentication token cookie
        req.cookies.token = null; // Set the token value in cookies to null
        delete req.cookies.token; // Remove the token from the cookies object

        // Respond with a status of 200 to indicate successful logout
        res.sendStatus(200);
    },

    // Verify user authentication and generate a new token
    verifyAuth: async (req, res) => {
        const { userid, email } = req.user; // Extract user ID and email from the request's user object
        const { ACCESS_TOKEN_SECRET } = process.env;

        // Generate a new access token with the user's details
        const newAccessToken = jwt.sign(
            { userid, email },
            ACCESS_TOKEN_SECRET,
            { expiresIn: "60s" } // Token expires in 60 seconds
        );

        // Set the new access token in an HTTP-only cookie
        res.cookie("Token_Cookie", newAccessToken, {
            httpOnly: true, // Cookie is not accessible via client-side scripts
            maxAge: 60 * 1000, // Cookie expires in 60 seconds
        });

        // Respond with a success message, user details, and the new token
        res.json({
            message: "verified",
            user: { userid, email },
            token: newAccessToken,
        });
    }
};
