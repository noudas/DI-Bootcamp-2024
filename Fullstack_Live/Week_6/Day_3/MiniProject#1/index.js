// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.

// DOM Elements
const container = document.getElementById("info-container");
const nameDOMmodule = document.getElementById("name");
const heightDOMmodule = document.getElementById("height");
const genderDOMmodule = document.getElementById("gender");
const birthDOMmodule = document.getElementById("birth-year");
const homeDOMmodule = document.getElementById("home-world");
const buttonDOMmodule = document.getElementById("button");

// to get the data from the API (star wars characters).
// API URL
const baseUrl = "https://www.swapi.tech/api/people/"

// Random Number Generator (1 to 83)
const getRandomNum = () => Math.floor(Math.random() * 83) + 1;


// Fetch Helper
// I Did it everythinmg in one function before, but it was really hard to read and very confusing... so as i wanted to see how
// helper funcitons worked in JS I tried
// It is just reused code from here:
/*
// GET starwars character
async function getRandomStarWarsCharacter() {
    let num = randomNum()

    try {
        const response = await fetch(`${url}${num}`);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // to display the info on the DOM: the name, height, gender, birth year, and home world of the character.
        nameDOMmodule.textContent = "Name: " + data.result.properties.name
        heightDOMmodule.textContent = "Height: " + data.result.properties.height + " cm"
        genderDOMmodule.textContent = "Gender: " + data.result.properties.gender
        birthDOMmodule.textContent = "Birth: " + data.result.properties.birth_year

        // Fetch HomwWorld
        let homeworldurl = data.result.properties.homeworld

        try {
            const responseHomeWorld = await fetch(homeworldurl);

            if(!responseHomeWorld.ok){
                throw new Error(`HTTP error! status: ${responseHomeWorld.status}`);
            }
            const dataHomeWorld = await responseHomeWorld.json();

            homeDOMmodule.textContent = "Home World: " + dataHomeWorld.result.properties.name

        } catch (error) {
            console.error("Failed to fetch starship data:", error);
        }
        
        
    } catch (error) {
        console.error("Failed to fetch starship data:", error);
    }
}
*/

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


// Update DOM with Character Info
// Again trying to make the code more readable using helper funcitons

const updateCharacterInfo = (characterData, homeWorld) => {
    nameDOMmodule.textContent = `Name: ${characterData.name}`;
    heightDOMmodule.textContent = `Height: ${characterData.height} cm`;
    genderDOMmodule.textContent = `Gender: ${characterData.gender}`;
    birthDOMmodule.textContent = `Birth: ${characterData.birth_year}`;
    homeDOMmodule.textContent = `Home World: ${homeWorld}`;
};


const getRandomStarWarsCharacter = async () => {
    const randomID = getRandomNum();

    try {
        // Using the helçper function to make it wayyy easier than to keep copying and pasting the same code
        const characterData = await fetchData(`${baseUrl}${randomID}`);
        const properties = characterData.result.properties;

        // Fetch Homeworld
        // Same here
        const homeWorldData = await fetchData(properties.homeworld);

        // Update DOM
        updateCharacterInfo(properties, homeWorldData.result.properties.name);
    } catch (error) {
        console.error("Failed to fetch Star Wars character:", error);
        nameDOMmodule.textContent = "I am sorry Master Luke, It appears that this person does not exist.";
        heightDOMmodule.textContent = "";
        genderDOMmodule.textContent = "";
        birthDOMmodule.textContent = "";
        homeDOMmodule.textContent = "";
    }
};



buttonDOMmodule.addEventListener("click", (event) => {
    event.preventDefault();
    getRandomStarWarsCharacter();
})



// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
// If there is an error getting the data, display a message as follows:

// You can use your own css to style the website as you see fit
