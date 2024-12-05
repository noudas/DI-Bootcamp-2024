let X_Button = document.getElementById("X");
let O_Button = document.getElementById("O");
let easyLevelButton = document.getElementById("easyLevel");
let hardLevelButton = document.getElementById("hardLevel");
let selectedSymbol = null;
let oponentSymbol = null;
let difficulty = "easy"; // Default difficulty
let moveCounter = 0;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

X_Button.addEventListener("click", (event) => {
    event.preventDefault();
    selectedSymbol = "X";
    oponentSymbol = "O";
    alert("You chose X!");
    document.getElementById("chooseXO").style.display = "none";
});

O_Button.addEventListener("click", () => {
    selectedSymbol = "O";
    oponentSymbol = "X";
    alert("You chose O!");
    document.getElementById("chooseXO").style.display = "none";
});

// Handle difficulty selection
easyLevelButton.addEventListener("click", () => {
    difficulty = "easy";
    alert("You selected Easy mode!");
    document.getElementById("chooseLevel").style.display = "none";
});

hardLevelButton.addEventListener("click", () => {
    difficulty = "hard";
    alert("You selected Hard mode!");
    document.getElementById("chooseLevel").style.display = "none";
});

// Player moves
const cells = document.querySelectorAll("td");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (!cell.textContent && selectedSymbol) {
            cell.textContent = selectedSymbol;
            cell.style.textAlign = "center";
            cell.style.fontSize = "2em";
            moveCounter++;
            win_loose_drawCondition();
            if (moveCounter < 9) {
                setTimeout(() => {
                    if (difficulty === "easy") {
                        oponentPlaysEasy();
                    } else {
                        nivelDificil();
                    }
                }, 500);
            }
        }
    });
});

// Easy level logic
function oponentPlaysEasy() {
    const availableCells = Array.from(cells).filter(cell => !cell.textContent);
    if (availableCells.length === 0) {
        alert("It's a draw!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const chosenCell = availableCells[randomIndex];
    chosenCell.textContent = oponentSymbol;
    chosenCell.style.textAlign = "center";
    chosenCell.style.fontSize = "2em";
    moveCounter++;
}

// Hard level logic
function nivelDificil() {
    const cellArray = Array.from(cells);

    // Check for winning move
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (
            cellArray[a].textContent === oponentSymbol &&
            cellArray[b].textContent === oponentSymbol &&
            !cellArray[c].textContent
        ) {
            makeMove(cellArray[c]);
            return;
        }
        if (
            cellArray[a].textContent === oponentSymbol &&
            !cellArray[b].textContent &&
            cellArray[c].textContent === oponentSymbol
        ) {
            makeMove(cellArray[b]);
            return;
        }
        if (
            !cellArray[a].textContent &&
            cellArray[b].textContent === oponentSymbol &&
            cellArray[c].textContent === oponentSymbol
        ) {
            makeMove(cellArray[a]);
            return;
        }
    }

    // Block opponent's winning move
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (
            cellArray[a].textContent === selectedSymbol &&
            cellArray[b].textContent === selectedSymbol &&
            !cellArray[c].textContent
        ) {
            makeMove(cellArray[c]);
            return;
        }
        if (
            cellArray[a].textContent === selectedSymbol &&
            !cellArray[b].textContent &&
            cellArray[c].textContent === selectedSymbol
        ) {
            makeMove(cellArray[b]);
            return;
        }
        if (
            !cellArray[a].textContent &&
            cellArray[b].textContent === selectedSymbol &&
            cellArray[c].textContent === selectedSymbol
        ) {
            makeMove(cellArray[a]);
            return;
        }
    }

    // Fallback to random move
    oponentPlaysEasy();
}

function makeMove(cell) {
    cell.textContent = oponentSymbol;
    cell.style.textAlign = "center";
    cell.style.fontSize = "2em";
    moveCounter++;
}


function win_loose_drawCondition() {
    // Convert the table cells into an array of cell contents for easy comparison
    const cellArray = Array.from(cells).map(cell => cell.textContent);
    
    // Check for winning conditions
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cellArray[a] === selectedSymbol && cellArray[b] === selectedSymbol && cellArray[c] === selectedSymbol) {
            // Player wins
            setTimeout(() => {
                alert("You Win!");
                resetBoard();
            }, 100);
            return;
        }
        if (cellArray[a] === oponentSymbol && cellArray[b] === oponentSymbol && cellArray[c] === oponentSymbol) {
            // Opponent wins
            setTimeout(() => {
                alert("You Lose!");
                resetBoard();
            }, 100);
            return;
        }
    }

    // Check for a draw (no empty cells and no winner)
    if (!cellArray.includes('') && moveCounter >= 9) {
        setTimeout(() => {
            alert("It's a Draw!");
            resetBoard();
        }, 100);
        return;
    }
}

function resetBoard() {
    // Reset the board for a new game
    const cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        cell.textContent = "";
    });
    moveCounter = 0; // Reset the move counter
    document.getElementById("chooseXO").style.display = "block"; // Show the player selection screen
    document.getElementById("chooseLevel").style.display = "block"; // Show difficulty selection
}