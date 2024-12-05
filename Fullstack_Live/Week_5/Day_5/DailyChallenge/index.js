// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

let str1 = prompt("Write an anagram").trim();
let str2 = prompt("Write another anagram").trim();

function isValidString(input) {
    return typeof input === "string" && input.length > 0 && isNaN(input);
}

if (!isValidString(str1) || !isValidString(str2)) {
    console.error("Both inputs must be valid non-empty strings and cannot be numbers.");
} else {
    function anagramaMan(str1, str2) {
        str1 = str1.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
        str2 = str2.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
        return str1 === str2;
    }

    if (anagramaMan(str1, str2)) {
        console.log(`"${str1}" is an anagram of "${str2}"`);
    } else {
        console.log(`"${str1}" is not an anagram of "${str2}"`);
    }
}


// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.