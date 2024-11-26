// In this exercise we will be creating a webpage with a black background 
// as the solar system and we will fill the solar system with planets and their moons.

// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
let planets = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune" ];
let divs = {};

let contaier = document.getElementsByClassName("listPlanets")[0];

let planetColors = {
    "Mercury": "#B5B5B5",
    "Venus": "#D49A6A", 
    "Earth": "#2E8B57", 
    "Mars": "#D15D2A",
    "Jupiter": "#B5723C", 
    "Saturn": "#F1C27D",
    "Uranus": "#A7C6ED",
    "Neptune": "#4F86A1"
};

let planetScale = {
    Mercury: 0.38,  // Mercury's scale (relative size compared to Earth)
    Venus: 0.95,    // Venus' scale
    Earth: 1,       // Earth as the baseline (scale 1)
    Mars: 0.53,     // Mars' scale
    Jupiter: 11.21, // Jupiter's scale
    Saturn: 9.45,   // Saturn's scale
    Uranus: 4.01,   // Uranus' scale
    Neptune: 3.88   // Neptune's scale
};

// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
let planetMoons = {
    "Mercury": [],
    "Venus": [],
    "Earth": ["Moon"],
    "Mars": ["Phobos", "Deimos"],
    "Jupiter": ["Io", "Europa", "Ganymede", "Callisto"],
    "Saturn": ["Titan", "Rhea", "Iapetus", "Dione", "Tethys"],
    "Uranus": ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    "Neptune": ["Triton", "Nereid"] 
};
let planetSize = 100;
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
for(planet of planets){
    divs[planet] = document.createElement("div");
    divs[planet].textContent = planet;
    
   
    // Each planet should have a different background color. (Hint: you could add a new class to each planet - 
    // each class containing a different background-color).
    divs[planet].classList.add(planet);
    divs[planet].style.backgroundColor = planetColors[planet]
    divs[planet].style.borderRadius = "100%"
    divs[planet].style.width = `${planetScale[planet] * planetSize}px`
    divs[planet].style.height = `${planetScale[planet] * planetSize}px`
    divs[planet].style.display = "flex";
    divs[planet].style.justifyContent = "center";
    divs[planet].style.alignItems = "center";
    divs[planet].style.color = "white";
    divs[planet].style.fontWeight = "bold";
    // Finally append each div to the <section> in the HTML (presented below).
    contaier.appendChild(divs[planet]);
}

for (planet of planets){
    let contaier = document.getElementsByClassName(planet)[0];
    let moonList = document.createElement("ul");
    let moons = planetMoons[planet];

    if (moons.length > 0) {
        // I did the original code, then asked chat gpt to make me step by step for the moons to rotate around the planet
        let angleStep = 360 / moons.length;
        for (let i = 0; i < moons.length; i++) {
            let moonDiv = document.createElement("div");
            moonDiv.classList.add("moon");
            moonDiv.textContent = moons[i];
            moonDiv.style.position = "absolute";
            moonDiv.style.transform = `rotate(${angleStep * i}deg) translate(100px)`;
            moonDiv.style.transformOrigin = "left center";
            moonDiv.style.padding = "5px";
            moonDiv.style.color = "black"
            moonList.appendChild(moonDiv);
        }
    } else {
        let noMoonsDiv = document.createElement("div");
        noMoonsDiv.textContent = "No moons";
        moonList.appendChild(noMoonsDiv);
    }
    contaier.appendChild(moonList);
}

// Trying to do animation
for(planet of planets){
   let contaier =  document.getElementsByClassName(planet)[0]
   let rotation = 0

   function SPEEEEEEN() {
    rotation += 1
    contaier.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(SPEEEEEEN)
   }

   SPEEEEEEN()

}