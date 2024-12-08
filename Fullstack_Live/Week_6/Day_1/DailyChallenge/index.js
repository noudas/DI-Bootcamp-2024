// 1st daily challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
function makeAllCaps(array) {
    return new Promise((resolve, reject) => {
        for(element of array){
            if(typeof(element)!== 'string'){
                return reject("ONLY STRINGS ALLOWED! GET OUT!")
            }
        }

        const uppercasesArray = array.map(element => element.toUpperCase());
        resolve(uppercasesArray)
    })
}


// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. 
// The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function sortWords(uppercasesArray) {
    return new Promise((resolve, reject) => {
        if(uppercasesArray.length > 4){
            resolve(uppercasesArray.sort())
        } else {
            reject("WHAT A TINY ARRAY AHHAHAHAHHAHAHA")
        }
    })
}

// Test:


// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))




// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
function toJs() {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
            reject("YOUR JSON IS EMPTY! FEED ME MORE DATA!");
        } else {
            resolve(morseObject);
        }
    });
}


// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

function toMorse(morseJS) {
    const sentence = prompt("HUMAN! WRITE A WORD OR A SENTENCE IF YOU DARE!").toLowerCase();
    
    return new Promise((resolve, reject) => {
        const morseArray = [];

        for (const letter of sentence) {
            if (letter === " ") {
                morseArray.push(" ");
            } else if (morseJS[letter]) {
                morseArray.push(morseJS[letter]);
            } else {
                return reject(`OUR CONCEPTIONS OF HUMAN LETTERS DO NOT INCLUDE "${letter}"! LRRR SHALL BE NOTIFIED AND YOU WILL BE EATEN!`);
            }
        }

        resolve(morseArray);
    });
}


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
function joinWords(morseTranslation) {
    const bodyDOMModule = document.body;

    const soundButton = document.createElement("button")
    soundButton.classList.add("sounds")
    soundButton.textContent = "Hear the morse code"

    const h3Morse = document.createElement("h3");
    h3Morse.textContent = morseTranslation.join("\n");
    bodyDOMModule.appendChild(h3Morse);
    bodyDOMModule.appendChild(soundButton)

    soundButton.addEventListener("click", (event) => {
        event.preventDefault();
        listenToBips(morseTranslation);
    });
}

function listenToBips(morseTranslations) {
    const smallbip = new Audio("sounds/smallbip.mp3");
    const longbip = new Audio("sounds/longbip.mp3");

    let sequenceDelay = 0;

    morseTranslations.forEach((translation, index) => {
        playTranslation(translation, sequenceDelay);
        
        sequenceDelay += translation.length * 300 + 900;
    });

    function playTranslation(translation, startDelay) {
        let charDelay = startDelay;

        for (const char of translation) {
            console.log(char);

            if (char === '.') {
                setTimeout(() => smallbip.play(), charDelay);
                charDelay += 150;
            } else if (char === '-') {
                setTimeout(() => longbip.play(), charDelay);
                charDelay += 200;
            } else if (char === ' ') {
                charDelay += 400;
            }
        }
    }
}


function main() {
    toJs()
        .then((morseJS) => toMorse(morseJS))
        .then((morseTranslation) => {
            joinWords(morseTranslation);
        })
        .catch((error) => console.log(error));
}

main()
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---