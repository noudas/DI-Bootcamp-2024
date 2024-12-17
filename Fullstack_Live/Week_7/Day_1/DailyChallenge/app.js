// Create a Trivia Quiz Game with Express.js and express.Router
// Instructions
// 1. Set up a new Express.js application.
const express = require("express");


// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
const app = express();
const PORT = 3000;

// 3. Implement the following routes using express.Router:

// GET /quiz: Start the quiz and display the first question.
// POST /quiz: Submit an answer to the current question and move to the next question.
// GET /quiz/score: Display the user’s final score at the end of the quiz.
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

// Sample trivia quiz questions and answers (hard-coded for simplicity)

// const triviaQuestions = [
//   {
//     question: "What is the capital of France?",
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answer: "Mars",
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     answer: "Blue whale",
//   },
// ];