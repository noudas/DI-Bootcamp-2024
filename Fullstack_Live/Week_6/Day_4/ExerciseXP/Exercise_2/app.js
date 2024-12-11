import people from "./data.js";

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.
const calculateAvarage = () => {
    // Use the imported array and the average age function in app.js.
    let sum = 0
    people.forEach(person => {
        return sum += person.age
    });
    return sum / people.length
}
console.log(calculateAvarage())

// Run app.js and confirm that the average age is correctly calculated and displayed.