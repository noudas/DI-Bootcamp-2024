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
let paintColors = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "pink", "brown", "black", "white",
    "gray", "teal", "cyan", "magenta", "lime"
];

let customColors = new Array(5).fill(null);

let colorDict = {
    "red": "#FF0000",
    "blue": "#0000FF",
    "green": "#008000",
    "yellow": "#FFFF00",
    "orange": "#FFA500",
    "purple": "#800080",
    "pink": "#FFC0CB",
    "brown": "#A52A2A",
    "black": "#000000",
    "white": "#FFFFFF",
    "gray": "#808080",
    "teal": "#008080",
    "cyan": "#00FFFF",
    "magenta": "#FF00FF",
    "lime": "#00FF00",
    "custom1": null,
    "custom2": null,
    "custom3": null,
    "custom4": null,
    "custom5": null
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
    menu = createMenu()
    let tableMenu = document.createElement("table")
    menu.appendChild(tableMenu)
}

function createDrawingBoard(){
    let drawingboard = document.createElement("div");
    bodyDOMModule.appendChild(drawingboard);
}

createTableMenu()
createDrawingBoard()
console.log(bodyDOMModule);

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
