const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const db = require("./config/db");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials:true,
        // origin:['http://localhost:5742']
    })
);

const {PORT} = process.env;

app.listen(PORT || 5000, () =>{
    console.log(`run on ${PORT || 5000}`);
    
})


// async function testConnection() {
//     try {
//       const response = await db.raw("select version()");
//       console.log(response.rows);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// testConnection()
