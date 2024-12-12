const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// POST route to handle the guess submission
app.post("/submit-guess", (req, res) => {
    const { guess, correctAnswer } = req.body;

    if (!guess || !correctAnswer) {
        return res.status(400).json({ error: "USE YOU GUESSING POWER! YOU CAN DO IT" });
    }

    const isCorrect = guess === correctAnswer;
    res.status(200).json({ correct: isCorrect });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});