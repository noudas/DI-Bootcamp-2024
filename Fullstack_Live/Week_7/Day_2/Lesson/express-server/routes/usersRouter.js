const { Router } = require("express");
const { getAllUsers } = require("../controllers/usersController.js");

const router = Router();

router.get("/all", getAllUsers);

module.exports = {
  usersRouter: router,
};
