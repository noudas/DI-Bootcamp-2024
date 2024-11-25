// Instructions
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

// Write code to replace “James” to “Jason”.
for (person in people) {
    if (people[person] == 'James') {
        people[person] = 'Jason'
    }
}
console.log(people)

// Write code to add your name to the end of the people array.
people.push('Jonathan')
console.log(people)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let new_people = people.slice(1,3)
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
console.log(new_people);


// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log('Foo'.indexOf());
// It returns undefined since there is no information inside of the indexof... and it returns -1


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last_item = people[people.length - 1];
console.log(last_item);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (person in people) {
    console.log(people[person]);
    
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (person in people) {
    console.log(people[person]);
}
