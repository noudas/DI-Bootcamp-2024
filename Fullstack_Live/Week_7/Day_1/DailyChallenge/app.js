// Create a Trivia Quiz Game with Express.js and express.Router
// Instructions
// 1. Set up a new Express.js application.
const express = require("express");

// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
const routePlayer = require("./routes/routePlayer")
const routeTriviaQuestion = require("./routes/routeTriviaQuestion")
const triviaQuestions = require("./data/triviaQuestions");

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 3. Implement the following routes using express.Router:
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

let currentQuestionIndex = 0;
let playerScore = 0;

// Get the routes for the players and trivia
// I want to make sure that i can use all
app.use("/players", routePlayer);
app.use("/trivia", routeTriviaQuestion)

// GET /quiz: Start the quiz and display the first question.
app.get("/quiz", (req, res) => {
    if (currentQuestionIndex < triviaQuestions.length) {
        const question = triviaQuestions[currentQuestionIndex];
        res.json({
            question: question.question,
            options: question.options
        });
    } else {
        res.json({ message: "The quiz is over!" });
    }
});

// POST /quiz: Submit an answer to the current question and move to the next question.
app.post("/quiz", (req, res) => {
    const { answer } = req.body;
    
    if (!answer) {
        return res.status(400).json({ error: "Answer is required" });
    }
    
    const currentTrivia = triviaQuestions[currentQuestionIndex];
    if (currentTrivia.answer.toLowerCase() === answer.toLowerCase()) {
        playerScore++;
    }
    
    // Move to the next question
    currentQuestionIndex++;
    
    if (currentQuestionIndex < triviaQuestions.length) {
        const nextQuestion = triviaQuestions[currentQuestionIndex];
        res.json({
            message: `Correct answer! Your score is ${playerScore}`,
            nextQuestion: nextQuestion.question,
            options: nextQuestion.options
        });
    } else {
        res.json({ 
            message: `Quiz Over! Your final score is ${playerScore}`,
            score: playerScore
        });
    }
});


// GET /quiz/score: Display the user’s final score at the end of the quiz.
app.get("/quiz/score", (req, res) => {
    res.json({ finalScore: playerScore });
});

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