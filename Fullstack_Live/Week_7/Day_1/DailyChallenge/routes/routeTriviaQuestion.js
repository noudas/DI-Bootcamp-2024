const express = require("express");
const { Router } = require("express");
const {
    getTriviaQuestions,
    postTriviaQuestion,
    postTriviaAnswer
} = require("../controllers/triviaController");

const router = Router();

// Get all trivia questions
router.get("/", getTriviaQuestions);

// Post a new trivia question
router.post("/", postTriviaQuestion);

// Post an answer to a trivia question
router.post("/answer", postTriviaAnswer);

module.exports = router;