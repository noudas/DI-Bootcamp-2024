const userModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    registerUser:  async (req, res) =>{
        const {password, email} = req.body;
        
        try {
            const user = userModel.createUser(password, email);
            res.status(201).json({
                message: "User registered successfully",
                user,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:"Internal Error"
            });
        }
    }
}