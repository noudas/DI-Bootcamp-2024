// Instructions
// Part 1 : Quote generator
// Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. 
// The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

// Populate the array with a few quotes that you like.
function arrayGenerator() {
        let arrayObjects = []

        // Add quotes from Jack Black
        arrayObjects.push({
            id: 0,
            author: "Jack Black",
            quote: "You can't make a good movie without a good script. That's a no-brainer."
        });
        arrayObjects.push({
            id: 1,
            author: "Jack Black",
            quote: "My dream is to make movies with my friends."
        });

        // Add quotes from Monty Python
        arrayObjects.push({
            id: 2,
            author: "Monty Python",
            quote: "I'm not dead yet!"
        });
        arrayObjects.push({
            id: 3,
            author: "Monty Python",
            quote: "It's just a flesh wound!"
        });
        arrayObjects.push({
            id: 4,
            author: "Monty Python",
            quote: "We are the knights who say... Ni!"
        });

        // Add quotes from Malcolm Gladwell
        arrayObjects.push({
            id: 5,
            author: "Malcolm Gladwell",
            quote: "The key to good decision making is not knowledge. It is understanding."
        });
        arrayObjects.push({
            id: 6,
            author: "Malcolm Gladwell",
            quote: "Success is not a random act. It arises out of a predictable and powerful set of circumstances and opportunities."
        });
        arrayObjects.push({
            id: 7,
            author: "Malcolm Gladwell",
            quote: "We learn by example and by direct experience because there are real limits to the adequacy of verbal instruction."
        });
    return arrayObjects
}

// When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
let quoteSection = document.getElementById("quoteSection")
let quotePrintArea = document.getElementById("quotePrint")
let quoteGeneratorButton = document.getElementById("generateQuote")
let formGeneratorButton = document.getElementById("formGenerator")

function randomQuote() {
    let arrayObjects = arrayGenerator()
    let randomIndex = Math.floor(Math.random() * arrayObjects.length);
    return arrayObjects[randomIndex]
}


function formGenerator() {
    let generatorDOMmodule = document.getElementById("Generator")

    let quotePrint = document.getElementById("quotePrint")
        quotePrint.style.visibility = "hidden";

    let h1DOMmodule = document.getElementsByTagName("h1")[0];
        h1DOMmodule.textContent = "Add Your Quote"



    

}

formGeneratorButton.addEventListener("click",(event) =>{
    event.preventDefault();
    formGenerator()
})

quoteGeneratorButton.addEventListener("click", (event) => {
    event.preventDefault();
    let quote = randomQuote();
    let h1DOMmodule = document.getElementsByTagName("h1")[0];
    h1DOMmodule.textContent = "Quote Generator"
    let quotePrint = document.getElementById("quotePrint")
    quotePrint.style.visibility = "";

    let existingParagraph = document.querySelector("#quoteDisplay");
    let existingAuthor = document.querySelector("#quoteAuthor");


    if (existingParagraph) {
        existingParagraph.textContent = quote.quote;
        existingAuthor.textContent = quote.author;

    } else {
        let blockQuote = document.createElement("p");
        let blockAuthor = document.createElement("cite");
        blockQuote.id = "quoteDisplay";
        blockAuthor.id = "quoteAuthor";
        blockQuote.textContent = quote.quote;
        blockAuthor.textContent = quote.author
        quotePrintArea.appendChild(blockQuote);
        quotePrintArea.appendChild(blockAuthor)
    }
});


// Part 2 : Add buttons
// In the HTML file, create a form with the inputs “Quote” and “Author” and a button. 
// So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

// In the HTML file, under the displayed quote, create a few more buttons:
// A button that gives the number of character inside each quote (space included)
// A button that gives the number of character inside each quote (space NOT included)
// A button that gives the number of words in each quote
// A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.

// Part 3 : Filter form
// Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.

// Instead of showing all the qu