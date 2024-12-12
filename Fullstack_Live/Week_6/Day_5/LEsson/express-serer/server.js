const express = require("express")
const cors = require("cors")
const products = require("./config/data")

const app = express();

app.use(cors())

app.use('/',express.static(__dirname = './public'))


app.listen(3000, () =>{
    console.log("listening to port 3000");
});

const users = [{
    name:"Joasias",
    email:"Mail@mail.mail"
},
{
    name:"Socrates",
    email:"ser@mais.feliz"
},
{
    name:"Gretchen",
    email:"gre@tchen.sugoi"
}];

// Healthcheck endpoint
app.get('/healthcheck', (req,res) =>{
    res.send("Hello from the other side")
});

// About endpoint
app.get('/about', (req,res) =>{
    res.send("<h1>This is a header!</h1>")
});

// Users Endpoint
app.get('/users', (req,res) =>{
    res.json(users)
});




/*Creating a Products API*/

// API GET Endpoint
app.get("/api/products",(req,res) => {
    res.json(products)
});

app.get("/api/products/:id",(req,res) => {
    const {id} = req.params;
    const myProduct = products.find(item => item.id ==id);
    if(!myProduct) return res.status(404).send("not found")
    console.log(req.params);
    res.json(myProduct)
});

app.get("/api/search",(req,res) =>{
    console.log(req.query);
    const {name} = res.query;
    const filtered = products.filtered(item =>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    });
    if(filtered.length === 0){
        return res.status(404).json({message: "No product match your search"})
    }

    res.json(filtered);  
});

/*Exercise*/

/*
 * create a module userInfo.js that get users from this api - https://jsonplaceholder.typicode.com/users
 * create a server.js
 * GET - get al users
 * GET to search users with id in params
 * GET - to search a user with name case insensetive in query
 */