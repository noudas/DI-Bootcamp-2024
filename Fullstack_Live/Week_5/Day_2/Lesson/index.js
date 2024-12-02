const numbers = [10,11,12,15,20];

// Using the for each method, display only the even numbers in the array

numbers.forEach((number => {if (number % 2 === 0){
    console.log(number);
}}))


const words = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'

words.some((word => word.startsWith("h")))


const words2 = ["hello","hey","hola"];

// Check if all the elements of the array start with the letter 'h'

words2.every((word => word.startsWith("h")))


// Anayse this code before executing it. What will be the output ?

myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});



// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

let totalCalories = party.reduce((sum, dessert) => {
    return dessert.desert == 'Apple Pie' ? 
    sum : 
    sum + dessert.calories
  }, 0);
  
  console.log(totalCalories)

// Anayse this code before executing it. What will be the output ?

let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray);


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);