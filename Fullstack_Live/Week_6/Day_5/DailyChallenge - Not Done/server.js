const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Store player scores
const leaderboard = {};

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// POST route to handle the guess submission
app.post("/submit-guess", (req, res) => {
    const { player, guess, correctAnswer } = req.body;

    if (!player || !guess || !correctAnswer) {
        return res.status(400).json({ error: "Missing player or guess data." });
    }

    const isCorrect = guess === correctAnswer;

    // Update player's score
    if (isCorrect) {
        leaderboard[player] = (leaderboard[player] || 0) + 1;
    }

    res.status(200).json({ correct: isCorrect, score: leaderboard[player] || 0 });
});

// GET route to retrieve leaderboard
app.get("/leaderboard", (req, res) => {
    const sortedLeaderboard = Object.entries(leaderboard)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10); // Top 10 players
    res.status(200).json({ leaderboard: sortedLeaderboard });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
