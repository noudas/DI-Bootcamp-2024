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
        }
    });
});

function oponentPlays() {
    
}