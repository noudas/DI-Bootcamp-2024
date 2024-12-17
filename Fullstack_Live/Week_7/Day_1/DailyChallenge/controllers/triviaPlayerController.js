const triviaPlayers = require("../data/triviaPlayer")

const getPlayer = (req,res) =>{
    res.json(triviaPlayer)
};

const postNewPlayer = (req,res) =>{
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name and Score are required" });
    }

    const newPlayer = {
        name,
        score: 0
    }

    triviaPlayers.push(newPlayer);
    res.status(201).json(newPlayer);
};

const addScore = (req, res) => {
    const { name } = req.params;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const player = players.find((p) => p.name.toLowerCase() === name.toLowerCase());

    if (!player) {
        return res.status(404).json({ error: "Player not found" });
    }

    if (typeof player.score !== "number") {
        player.score = 0;
    }

    player.score += 1;

    res.json(player);
};

const getPlayerScore = (req, res) => {
    const { name } = req.params;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const player = players.find((p) => p.name.toLowerCase() === name.toLowerCase());

    if (!player) {
        return res.status(404).json({ error: "Player not found" });
    }

    res.json(player.score);
}

module.exports = {
    getPlayer,
    postNewPlayer,
    addScore,
    getPlayerScore
}