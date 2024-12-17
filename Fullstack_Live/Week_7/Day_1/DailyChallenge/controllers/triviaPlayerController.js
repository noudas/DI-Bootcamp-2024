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

