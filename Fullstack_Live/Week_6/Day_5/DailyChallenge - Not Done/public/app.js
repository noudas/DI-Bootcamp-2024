// Instructions
// Create a fun emoji guessing game using an Express API.
// The game will present players with a random emoji and a set of options. 
// Players need to guess the correct name of the emoji from the given options.
// The game will keep track of the player’s score and provide feedback on their guesses.

// Requirements:

// Set up an Express server to handle the game.
                                                                          
// Create an array of emoji objects, each containing the emoji character and its corresponding name.
const emojis = [
    { character: "😀", name: "Grinning Face" },
    { character: "😂", name: "Face with Tears of Joy" },
    { character: "😍", name: "Smiling Face with Heart-Eyes" },
    { character: "😎", name: "Smiling Face with Sunglasses" },
    { character: "😭", name: "Loudly Crying Face" },
    { character: "😡", name: "Pouting Face" },
    { character: "👍", name: "Thumbs Up" },
    { character: "👏", name: "Clapping Hands" },
    { character: "💡", name: "Light Bulb" },
    { character: "❤️", name: "Red Heart" },
    { character: "🎉", name: "Party Popper" },
    { character: "🔥", name: "Fire" }
];

// Generate a random emoji from the array and select a few incorrect options as distractors.
function radomIndexGenerator() {
    return Math.floor(Math.random() * emojis.length)
}

const randomEmote = () =>{
    const correctIndex = radomIndexGenerator();
    const correctEmote = emojis[correctIndex];

    const distractors = new Set();
    while (distractors.size < 3){
        const randomIndex = radomIndexGenerator();
        if(randomIndex !== correctIndex){
            distractors.add(emojis[randomIndex].name);
        }
    }

    const options = Array.from(distractors);
    options.push(correctEmote.name)
    options.sort(() => Math.random - 0.5);

    return {
        emoji: correctEmote.character,
        correctAnswer: correctEmote.name,
        options: options
    };
}


// Using a form, present the player with the random emoji and multiple choice options (including the correct name).
function presentQuiz() {
    const quiz = randomEmote();

    // Create form dynamically
    const form = document.createElement("form");
    const question = document.createElement("h2");
    question.textContent = `What is the name of this emoji? ${quiz.emoji}`;
    form.appendChild(question);

    quiz.options.forEach((option) => {
        const label = document.createElement("label");
        label.style.display = "block";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "emoji";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        form.appendChild(label);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    form.appendChild(submit);

    form.addEventListener("submit", (event) => {
        const selected = new FormData(form).get("emoji");
        if (selected === quiz.correctAnswer) {
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${quiz.correctAnswer}`);
        }
    });

    document.body.innerHTML = "";
    document.body.appendChild(form);
};


// Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.
async function handleGuess(selected, correctAnswer) {
    try {
        const response = await fetch("/submit-guess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ guess: selected, correctAnswer })
        });
        
        const result = await response.json();
        
        // Check if the guess is correct and update the player’s score.
        if (result.correct) {
            // Keep track of the player’s total score.
            score++;
            alert("Correct! Your current score is: " + score);
        } else {
            // Provide feedback to the player, indicating whether their guess was correct or not.
            alert(`Wrong! The correct answer was: ${correctAnswer}. Your score is: ${score}`);
        }
        
        // Continue presenting new emojis and options for the player to guess.
        presentQuiz();
    } catch (error) {
        console.error("Error submitting guess:", error);
    }
}

async function showLeaderboard() {
    try {
        const response = await fetch("/leaderboard");
        const data = await response.json();

        const leaderboard = document.createElement("div");
        leaderboard.innerHTML = `<h2>Leaderboard</h2><ol>${data.leaderboard
            .map(([name, score]) => `<li>${name}: ${score}</li>`)
            .join("")}</ol>`;

        document.body.appendChild(leaderboard);
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
}

// Initialize the game
presentQuiz();
showLeaderboard();


// Implement a leaderboard to show the top scores.

// Advanced Features (Optional):

// Add a time limit for each guess.
// Implement user authentication to save and display personalized scores.
// Use emojis from a larger dataset or an external API.
// Implement difficulty levels that affect the number of options or time limit.
// Implement a “hint” feature that provides a clue about the emoji’s nam