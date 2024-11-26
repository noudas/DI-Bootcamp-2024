// 🌟 Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let divDOMmodule = document.getElementById("navBar");
divDOMmodule.setAttribute("attribute","socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newli = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
newli.textContent = "Logout";
// Append the text node to the newly created list node (<li>).
let ul = divDOMmodule.querySelector("ul");
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ul.appendChild(newli);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

console.log("First Link Text:", firstLi.textContent);
console.log("Last Link Text:", lastLi.textContent);