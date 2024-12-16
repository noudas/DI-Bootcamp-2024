const { Router } = require("express");
const { users } = require("../config/data.js");
const {getAllUsers} = require("../controllers/usersController.js")

const router = Router();

router.get("/all", getAllUsers);

module.exports = {
  usersRouter: router,
};
