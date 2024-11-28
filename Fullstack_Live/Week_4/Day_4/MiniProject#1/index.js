// What You Will Create:
// You can see the working project here

// Select a color
// Draw what you want


// What you will learn
// DOM Events
// DOM tree


// Project Brief
// Welcome to Coloring Squares.

let bodyDOMModule = document.querySelector("body");
let colorPosition = "black"
let mousedown = false;

let paintColors = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "pink", "brown", "black", "white",
    "gray", "teal", "cyan", "magenta", "lime"
];

let colorDict = {
    "black": "#000000",
    "white": "#FFFFFF",
    "gray": "#808080",
    "blue": "#0000FF",
    "cyan": "#00FFFF",
    "teal": "#008080",
    "red": "#FF0000",
    "magenta": "#FF00FF",
    "purple": "#800080",
    "green": "#008000",
    "lime": "#00FF00",
    "pink": "#FFC0CB",
    "yellow": "#FFFF00",
    "orange": "#FFA500",
    "brown": "#A52A2A"
};

function createMenu() {
    let menu = document.createElement("div");
    menu.classList.add("menu");
    menu.style.height="90%";
    menu.style.width="25%";
    menu.style.border="1px solid black";
    menu.style.position= "fixed"
    menu.style.zIndex = 1;
    menu.style.top = 0;
    menu.style.left= 0;
    menu.style.backgroundColor = "black";
    menu.style.overflowX = "hidden";
    menu.style.paddingTop= "20px";
    menu.style.margin="15px";
    menu.style.borderRadius= "10px";
    bodyDOMModule.appendChild(menu);
    return menu
}

function createTableMenu() {
    const menu = createMenu();
    const tableMenu = document.createElement("table");
    menu.appendChild(tableMenu);

    const colorKeys = Object.keys(colorDict);

    tableMenu.style.borderCollapse = "collapse";
    tableMenu.style.margin = "20px auto";
    tableMenu.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";

    for (let i = 0; i < colorKeys.length; i += 3) {
        let row = colorKeys.slice(i, i + 3);
        let tableRow = document.createElement("tr");
        tableMenu.appendChild(tableRow);

        for (const color of row) {
            const colorButton = document.createElement("td");

            colorButton.classList.add(color);
            colorButton.style.backgroundColor = colorDict[color];
            colorButton.style.height = "100px";
            colorButton.style.width = "100px";
            colorButton.style.cursor = "pointer";
            colorButton.style.border = "2px solid #ddd";
            colorButton.style.transition = "transform 0.2s, border-color 0.2s";

            colorButton.addEventListener("mouseenter", () => {
                colorButton.style.transform = "scale(1.1)";
                colorButton.style.borderColor = "#aaa";
                colorButton.style.zIndex = 1;
            });
            colorButton.addEventListener("mouseleave", () => {
                colorButton.style.transform = "scale(1)";
                colorButton.style.borderColor = "#ddd";
            });

            colorButton.addEventListener("click", () => {
                colorPosition = colorButton.className;
                console.log(colorPosition);
            });

            tableRow.appendChild(colorButton);
        }
    }

    const clearButtonContainer = document.createElement("div");
    clearButtonContainer.style.display = "flex";
    clearButtonContainer.style.flexDirection = "column"; // Stack items vertically
    clearButtonContainer.style.alignItems = "center"; // Center align
    clearButtonContainer.style.marginTop = "20px";

    const colorPicker = createColorPicker();
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.style.width = "70%";
    clearButton.style.padding = "10px";
    clearButton.style.cursor = "pointer";
    clearButton.style.fontSize = "16px";
    clearButton.style.borderRadius = "5px";
    clearButton.style.border = "1px solid #ccc";
    clearButton.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
    clearButton.style.transition = "background-color 0.2s, box-shadow 0.2s";
    clearButton.classList.add("clear");

    clearButton.addEventListener("mouseenter", () => {
        clearButton.style.backgroundColor = "#f0f0f0";
        clearButton.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
    });
    clearButton.addEventListener("mouseleave", () => {
        clearButton.style.backgroundColor = "white";
        clearButton.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
    });

    // Add the color picker above the clear button
    clearButtonContainer.appendChild(colorPicker);
    clearButtonContainer.appendChild(clearButton);

    menu.appendChild(clearButtonContainer);
}

function createDrawingBoard() {
    const drawingBoard = document.createElement("div");

    const menu = document.querySelector(".menu");
    const menuHeight = menu.offsetHeight;

    drawingBoard.style.width = `70%`;
    drawingBoard.style.height = `${menuHeight}px`;
    drawingBoard.style.border = "1px solid black";

    drawingBoard.style.marginLeft = "27%"
    drawingBoard.style.display = "inline-block";

    const tableDrawingBoard = document.createElement("table");
    tableDrawingBoard.style.width = "100%";
    tableDrawingBoard.style.height = "100%";
    tableDrawingBoard.style.borderCollapse = "collapse";

    bodyDOMModule.appendChild(drawingBoard);

    // Get dimensions after appending to DOM
    setTimeout(() => {
        // Calculate number of cells to fit within the drawing board
        const cellSize = 20; // Adjust this value to change cell size
        const screensize = drawingBoard.getBoundingClientRect();
        const widthInPixels = Math.floor(screensize.width);
        const heightInPixels = Math.floor(menuHeight - 100);

        console.log(screensize, widthInPixels, heightInPixels);

        const rows = Math.floor(heightInPixels / cellSize);
        const cols = Math.floor(widthInPixels / cellSize);

        for (let row = 0; row < rows; row++) {
            let tableRow = document.createElement("tr");
            for (let col = 0; col < cols; col++) {
                let cell = document.createElement("td");
                cell.style.width = `${cellSize}px`;
                cell.style.height = `${cellSize}px`;
                cell.style.backgroundColor = "";

                cell.addEventListener("mousedown", function (event) {
                    mousedown = true; // Mouse button is pressed
                    event.target.style.backgroundColor = colorPosition;
                });

                cell.addEventListener("mouseup", () => {
                    mousedown = false; // Mouse button is released
                });

                
                tableRow.appendChild(cell);
            }
            tableDrawingBoard.appendChild(tableRow);
        }

        drawingBoard.appendChild(tableDrawingBoard);
    }, 500);

    bodyDOMModule.addEventListener("mousemove", function (event) {
        if (mousedown) {
            const targetElement = event.target.closest("td");
            if (targetElement) {
                targetElement.style.backgroundColor = colorPosition;
            }
        }
    });

    const clearButton = document.getElementsByClassName("clear")[0];

    clearButton.addEventListener("click", function () {
        const cells = tableDrawingBoard.querySelectorAll("td");
        cells.forEach(cell => cell.style.backgroundColor = "");
    });
}

function createColorPicker() {
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.style.height = "75px"
    colorPicker.style.width = "70%"
    colorPicker.style.marginBottom = "20px";

    colorPicker.addEventListener("input", (event) => {
        colorPosition = event.target.value;
        console.log("Selected color:", colorPosition);
    });

    return colorPicker
}


createTableMenu()
createDrawingBoard()


// Your task is to build a coloring game similar to the working project above.

// You will need to use HTML, CSS and JS to accomplish this task.

// A few things to think about…
// HTML, CSS:

// How will you make the grid of colors?
// How will you make the grid of blank squares?
// Hint… GRID :P
// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.
// Good luck!
