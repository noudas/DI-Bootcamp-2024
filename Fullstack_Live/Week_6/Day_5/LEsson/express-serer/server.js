const express = require("express")
const cors = require("cors")

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