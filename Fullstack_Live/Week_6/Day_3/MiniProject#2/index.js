const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const nameDOM = document.getElementById("name");
const numberDOM = document.getElementById("number");
const heightDOM = document.getElementById("height");
const weightDOM = document.getElementById("weight");
const typeDOM = document.getElementById("type");
const spriteDOM = document.getElementById("sprite")
const buttonDOMmodule = document.getElementById("button");
const leftDOM = document.getElementById("left");
const rightDOM = document.getElementById("right");

let currentID = 1;

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

const randomPokemon = async () => {
    try {
        const randomID = Math.floor(Math.random() * 1025) + 1;
        const pokemonData = await fetchData(`${BASE_URL}${randomID}`);
        return pokemonData;
    } catch (error) {
        console.error("Failed to fetch Pokemon:", error);
    }
};

const updatePokedexInfo = (pokemonData) => {
    if (!pokemonData) {
        console.error("No Pokémon data to update!");
        return;
    }

    let sound = new Audio(pokemonData.cries.latest)
    sound.volume = 0.4;
    sound.play()

    spriteDOM.src = pokemonData.sprites.front_default;
    nameDOM.textContent = `Name: ${pokemonData.name}`;
    numberDOM.textContent = `Number: ${pokemonData.id}`;
    heightDOM.textContent = `Height: ${pokemonData.height} cm`;
    weightDOM.textContent = `Weight: ${pokemonData.weight} g`;
    typeDOM.textContent = `Type: ${pokemonData.types.map((type) => type.type.name).join(", ")}`;
};

const getPokemon = async (id) => {
    try {
        const pokemonData = await fetchData(`${BASE_URL}${id}`);
        return pokemonData;
    } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
    }
};

buttonDOMmodule.addEventListener("click", async (event) => {
    event.preventDefault();
    const pokemonData = await randomPokemon(); // Await Pokémon data
    updatePokedexInfo(pokemonData); // Update the DOM
});

// Left button: Fetch previous Pokémon
leftDOM.addEventListener("click", async (event) => {
    event.preventDefault();
    currentID = currentID > 1 ? currentID - 1 : 1025;
    const pokemonData = await getPokemon(currentID);
    updatePokedexInfo(pokemonData);
});

// Right button: Fetch next Pokémon
rightDOM.addEventListener("click", async (event) => {
    event.preventDefault();
    currentID = currentID < 1025 ? currentID + 1 : 1;
    const pokemonData = await getPokemon(currentID);
    updatePokedexInfo(pokemonData);
});