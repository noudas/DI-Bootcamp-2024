// Exercise 1 : Divisible by three
// Instructions
let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.
for (num in numbers){
    if (num % 3 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

// Exercise 2 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// Given the object above where the key is the student’s name and the value is the country they are from.
// Prompt the student for their name.
// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."
for (let key in guestList){
    console.log(`Hi! I'm ${key}, and I'm from ${guestList[key]}`);
}

// Exercise 3 : Playing with numbers
// Instructions
let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. 
// You have to create the logic by yourself. Use simple for loops.

let highest_age = 0
let sum = 0

for (let i = 0; i < age.length; i++){
    // 1. Console.log the sum of all the numbers in the age array.
    sum += age[i]
    if (highest_age < age[i]){
        highest_age = age[i]
    }
    // 2. Console.log the highest age in the array.

}
console.log(sum,highest_age)