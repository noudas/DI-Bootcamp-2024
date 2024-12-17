const express = require("express");
const { Router } = require("express");

const {
    getPlayer,
    postNewPlayer,
    addScore,
    getPlayerScore
} = require("../controllers/playerController");

const router = Router();

// Get all players
router.get("/", getPlayer);

// Post a new player
router.post("/", postNewPlayer);

// Add score to a player
router.post("/:name/score", addScore);

// Get the score of a specific player
router.get("/:name/score", getPlayerScore);

module.exports = router;
