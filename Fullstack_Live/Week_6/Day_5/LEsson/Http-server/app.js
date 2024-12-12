const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);    
    console.log(req.headers);
    
    res.end("Hello from the other side")
})

server.listen(5000, () =>{
    console.log("Server is starting on Port 5000");
    
});