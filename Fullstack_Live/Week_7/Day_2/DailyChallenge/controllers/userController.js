const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userModel.addUserTransaction({ email, username, first_name, last_name }, hashedPassword);

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await userModel.findUserByUsername(username);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password." });
        }

        res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        await userModel.updateUser(req.params.id, req.body);
        res.status(200).json({ message: "User updated successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser
};
