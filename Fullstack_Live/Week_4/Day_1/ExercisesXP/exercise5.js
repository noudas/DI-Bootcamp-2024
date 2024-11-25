// Create an object called family with a few key value pairs.

const family = {
    father: "John",
    mother: "Sarah",
    children: ["Alice", "Bob", "Charlie"],
    familyPet: "Max", 
    numberOfFamilyMembers: 5
};

// Using a for in loop, console.log the keys of the object.
console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

// Using a for in loop, console.log the values of the object.
console.log("\nValues of the family object:");
for (let key in family) {
    console.log(family[key]);  // This prints the values associated with each key
}