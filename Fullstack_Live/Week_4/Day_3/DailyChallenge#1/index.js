// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.


document.addEventListener("DOMContentLoaded", function () {
    let formDOMmodule = document.getElementById("libform");
    let noun = document.getElementById("noun");
    let adjective = document.getElementById("adjective");
    let person = document.getElementById("person");
    let verb = document.getElementById("verb");
    let place = document.getElementById("place");
    let shufflecounter = 0;
    let shuffle = document.getElementById("shuffle");
    
    function generateStory() {
        // Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
        // Make sure the values are not empty
        const nounvalue = noun.value.trim();
        const adjectivevalue = adjective.value.trim();
        const personvalue = person.value.trim();
        const verbvalue = verb.value.trim();
        const placevalue = place.value.trim();
        
        // Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
        const madlibs = [
            `There once was a Sir named ${personvalue}. He lived in a small village in the heart of ${placevalue}! One day, a ${adjectivevalue} dragon appeared. He was ${verbvalue} and wanted revenge because the people had stolen his ${nounvalue}.`,
            
            `Captain ${personvalue} boarded the spaceship bound for ${placevalue}. The journey was ${adjectivevalue}, but suddenly, the ship started ${verbvalue}! They realized they had to fix the ${nounvalue} before it was too late.`,
            
            `In the mystical land of ${placevalue}, ${personvalue} discovered a ${adjectivevalue} portal. Stepping through, they started ${verbvalue} uncontrollably. They found a ${nounvalue} that held the key to the world's destiny.`,
            
            `${personvalue} was the most ${adjectivevalue} student at ${placevalue} High School. One day during class, the teacher asked everyone to start ${verbvalue}. That's when ${personvalue} pulled out a ${nounvalue} and chaos ensued!`,
            
            `Aboard the ${adjectivevalue} ship, Captain ${personvalue} set sail for ${placevalue}. The crew was busy ${verbvalue} when they discovered a ${nounvalue} buried in the sand.`,
            
            `After a ${adjectivevalue} accident in ${placevalue}, ${personvalue} realized they could ${verbvalue} like never before. Using their power, they saved the city from a giant ${nounvalue}.`,
            
            `On a dark night in ${placevalue}, ${personvalue} dared to enter the ${adjectivevalue} house. Inside, they heard ${verbvalue} and found an ancient ${nounvalue} glowing mysteriously.`,
            
            `In the bustling kitchen of ${placevalue}, Chef ${personvalue} tried to prepare a ${adjectivevalue} dish. While ${verbvalue}, they accidentally dropped a ${nounvalue} into the pot!`,
            
            `Lost in the ${adjectivevalue} jungles of ${placevalue}, ${personvalue} was ${verbvalue} through the trees when they stumbled upon a mysterious ${nounvalue}. It was their only hope of survival.`,
            
            `With the ${nounvalue} in hand, ${personvalue} activated the time machine. They appeared in ${placevalue}, a ${adjectivevalue} era, and started ${verbvalue} to fit in.`,
            
            `${personvalue} and their team planned a ${adjectivevalue} heist at ${placevalue}. Everything was going smoothly until someone started ${verbvalue}. They had to escape with the ${nounvalue}!`
        ];
        
        if (!nounvalue || !adjectivevalue || !personvalue || !verbvalue || !placevalue) {
            story.textContent = "Please fill in all fields to generate a story.";
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * madlibs.length);
        const template = madlibs[randomIndex];
        let story = document.getElementById("story");
        
        // Write a story that uses each of the values.
        const filledstory = template
        .replace("{noun}", nounvalue)
        .replace("{adjective}", adjectivevalue)
        .replace("{person}", personvalue)
        .replace("{verb}", verbvalue)
        .replace("{place}", placevalue);
        
        story.textContent = filledstory;
    }
    
    formDOMmodule.addEventListener("submit", function (event) {
        event.preventDefault();
        generateStory();
    });
    
    shuffle.addEventListener("click", function () {
        shufflecounter++;
        if (shufflecounter <= 3){
            generateStory();
        }
        else {
            alert("You cannot generate more stories, refresh the page!")
        }
    });
});


// Make sure you check the console for errors when playing the game.