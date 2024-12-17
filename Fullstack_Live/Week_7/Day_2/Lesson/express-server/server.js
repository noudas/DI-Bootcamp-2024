const express = require("express");
const cors = require("cors");
const { productsRouter } = require("./routes/productsRouter.js");
const { usersRouter } = require("./routes/usersRouter.js");

const app = express();

app.use(cors());
app.use("/", express.static(__dirname + "/public"));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// form data
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(productsRouter);
app.use("/api/users", usersRouter);

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */
