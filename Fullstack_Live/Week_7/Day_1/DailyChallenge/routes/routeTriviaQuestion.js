const express = require("express");
const { Router } = require("express");
const {getTriviaQuestions} = require("../controllers/triviaController")

const router = Router();

router.get("/", getTriviaQuestions);

module.exports = router;