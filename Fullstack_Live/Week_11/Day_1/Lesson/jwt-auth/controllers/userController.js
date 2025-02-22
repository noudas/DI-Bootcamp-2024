const userModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    registerUser:  async (req, res) =>{
        const {password, email} = req.body;
        
        try {
            const user = await userModel.createUser(password, email);
            
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
    },
    loginUser: async (req, res) => {
        const {password, email} = req.body;

        try {
            const user = await userModel.getUserByEmail(email);
            if(!user){
                res.status(404).json({message:"User not found"})
                return;
            }
            
            const matchinPassword = await bcrypt.compare(password + '', user.password);

            if(!matchinPassword){
                res.status(404).json({message:"Wrong Password"})
                return;
            }

            const {ACCESS_TOKEN_SECRET} = process.env;
            /* Generate a token */
            const acessToken = jwt.sign(
                {userid: user.id, email: user.email},
                ACCESS_TOKEN_SECRET,
                { expiresIn: "60s" }
            );

            /* set cookie to the token via http*/
            res.cookie("Token_Cookie", acessToken, {
                maxAge: 60 * 1000,
                httpOnly: true,
            });

            /* Response to client */
            res.status(200).json({ message: "Login successfully",
                user: {userid: user.id, email: user.email},
                token:acessToken,
             });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:"Internal Error"
            });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await userModel.getUsers();
            res.json(users)
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message:"Internal Error"
            });
        }

    },
    logoutUser:async (req, res) =>{
        req.clearCookie("Token_Cookie");
        req.cookies.token = null;
        delete req.cookies.token;
        /*Set null in db collumn*/
        res.sendStatus(200);
    },
    verifyAuth: async (req,res) =>{
        const { userid, email}  = req.user;
        const {ACCESS_TOKEN_SECRET} = process.env;
    
        const newAccessToken= jwt.sign(
            { userid, email},
            ACCESS_TOKEN_SECRET,
            {expiresIn: "60s"}
        );
        res.cookie("Token_Cookie", newAccessToken), {
            httpOnly: true,
            maxAge: 60 *1000,
        }
        res.json({
                message: "verified",
                user:{userid, email},
                token: newAccessToken,
            }
        )
    }
}