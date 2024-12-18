const express = require("express");
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);

module.exports = router;
