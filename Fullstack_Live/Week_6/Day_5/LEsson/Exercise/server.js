/*
 * create a module userInfo.js that get users from this api - https://jsonplaceholder.typicode.com/users
 * create a server.js
 * GET - get al users
 * GET to search users with id in params
 * GET - to search a user with name case insensetive in query
 */

const express = require("express")
const cors = require("cors")
const {fetchUserInfo} = require("./usersInfo")

const app = express();

app.use(cors())

app.listen(3000, () =>{
    console.log("listening to port 3000");
});

// GET all Users
app.get("/api/users", async (req,res) => {
    const users = await fetchUserInfo()
    res.json(users)
});

// GET User by ID
app.get("/api/users/:id", async (req,res) => {
    const users = await fetchUserInfo()
    const {id} = req.params
    const myUser = users.find(user => user.id == id);
    if(!myUser) return res.status(404).send("not found")
    res.json(myUser)
});

// GET by Name
app.get("/api/search", async (req,res) =>{
    const users = await fetchUserInfo()
    console.log(req.query);
    const {name} = res.query;
    const filtered = users.filtered(user =>{
        return user.name.toLowerCase().includes(name.toLowerCase())
    });
    if(filtered.length === 0){
        return res.status(404).json({message: "No product match your search"})
    }
    res.json(filtered);  
});
