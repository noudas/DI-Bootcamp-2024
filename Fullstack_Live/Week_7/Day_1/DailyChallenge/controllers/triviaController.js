const triviaQuestions = require("../data/triviaQuestions")

const getTriviaQuestions = (req,res) =>{
    res.json(triviaQuestions)
};

const postTriviaQuestion = (req,res) =>{
    const {question, answer, options} = req.body;

    if (!question || !answer || !options) {
        return res.status(400).json({ error: "Question, Answer and Options are required" });
    }

    const newTrivia = {
        question,
        answer,
        options
    }

    triviaQuestions.push(newTrivia);
    res.status(201).json(newTrivia);
};

const postTriviaAnswer = (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: "Question and Answer are required" });
    }

    const trivia = triviaQuestions.find((t) => t.question === question);

    if (!trivia) {
        return res.status(404).json({ error: "Question not found" });
    }

    const isCorrect = trivia.answer.toLowerCase() === answer.toLowerCase();

    res.json({ correct: isCorrect });
};

module.exports = {
    getTriviaQuestions,
    postTriviaQuestion,
    postTriviaAnswer
}