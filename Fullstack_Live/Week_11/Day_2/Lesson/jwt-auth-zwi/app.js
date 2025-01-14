const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter.js");

// const { db } = require("./config/db.js");

const app = express();
const { PORT } = process.env;
app.listen(PORT || 5001, () => {
  console.log(`run on ${PORT || 5001}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    // origin: ['http://localhost:5742']
  })
);

app.use("/api/user", userRouter);

// async function testConnection() {
//   try {
//     const response = await db.raw("select version()");
//     console.log(response.rows);
//   } catch (error) {
//     console.log(error);
//   }
// }
// testConnection()
