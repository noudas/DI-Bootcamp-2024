// Using a DOM property, retrieve the h1 and console.log it.
let articleDOMmodule = document.body.firstElementChild;
let h1DOMmodule = articleDOMmodule.firstElementChild;
console.log(h1DOMmodule);

// Using DOM methods, remove the last paragraph in the <article> tag.
if (articleDOMmodule.lastElementChild.tagName.toLowerCase() == 'p'){
    articleDOMmodule.lastElementChild.remove();
}

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2DOMmodule = articleDOMmodule.firstElementChild.nextElementSibling;
function changeBackground() {
    h2DOMmodule.style.backgroundColor = "red";
}
h2DOMmodule.addEventListener('click',changeBackground);


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3DOMmodule = articleDOMmodule.querySelector("h3");
function vanish() {
    h3DOMmodule.style.display = "none";
}
h3DOMmodule.addEventListener('click',vanish);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let buttonDOMmodule = articleDOMmodule.querySelector("button"); 
let ps = articleDOMmodule.querySelectorAll("p");
function bolder() {
    ps.forEach(p => {
        p.style.fontWeight = "bold";
    });
};

buttonDOMmodule.addEventListener('click', bolder);

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
let pixelsize = Math.floor(Math.random() * 100) + 1;
function piscqueelsize() {
    h1DOMmodule.style.fontSize = `${pixelsize}px`
}

h1DOMmodule.addEventListener('mouseover', piscqueelsize);

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
function fadeout() {
    let p2 = document.querySelectorAll("p")[1];
    let opacity = 1;
    
    // Define fadeInterval in the outer scope
    let fadeInterval;

    function vanishing() {
        if (opacity <= 0) {
            clearInterval(fadeInterval); // Clear the interval when opacity reaches 0
        } else {
            opacity -= 0.05;  // Decrease opacity
            p2.style.opacity = opacity; // Update the opacity
        }
    }

    p2.addEventListener("mouseover", function() {
        // Set the interval when hovering starts
        fadeInterval = setInterval(vanishing, 30);
    });
}

fadeout();
