let X_Button = document.getElementById("X");
let O_Button = document.getElementById("O");
let selectedSymbol = null;
let oponentSymbol = null;
let moveCounter = 0;

X_Button.addEventListener("click",(event) =>{
    event.preventDefault();
    selectedSymbol = "X";
    oponentSymbol = "O"
    alert("You chose X!");
    let chooseXO = document.getElementById("chooseXO");
    chooseXO.style.display = "none";
});


O_Button.addEventListener("click", () => {
    selectedSymbol = "O";
    oponentSymbol = "X"
    alert("You chose O!");
    let chooseXO = document.getElementById("chooseXO");
    chooseXO.style.display = "none";
});

const cells = document.querySelectorAll("td");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (!cell.textContent && selectedSymbol) {
            cell.textContent = selectedSymbol;
            cell.style.textAlign = "center";
            cell.style.fontSize = "2em";
            moveCounter++;
            setTimeout(oponentPlays, 500);
        }
    });
});

function oponentPlays() {

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