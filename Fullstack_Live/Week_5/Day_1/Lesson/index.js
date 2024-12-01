// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", 
// else you should display "You live in the Middle Age"

function date(year = new Date().getFullYear()) {
    return (year > 2000 ? "You are in the 21st century" : "You live in the Middle Age")
}

console.log(date());



// Using arrow function and ternary operator create a calculator that returns the result of the 
// calculus depending on the operator : +, - , * ,
// 
// The function should be able to to take 2 numbers as parameters

const calculus = (num1,num2, operator) => {
    return operator === "+" ? num1 + num2 :
    operator === "-" ? num1 - num2 :
    operator === "*" ? num1 * num2 :
    operator === "/" ? (num2 !== 0 ? num1 / num2 : 
    "Error: Division by zero") : "Invalid operator";
}

console.log(calculus(5, 3, "+")); // 8
console.log(calculus(5, 3, "-")); // 2
console.log(calculus(5, 3, "*")); // 15
console.log(calculus(5, 0, "/")); // Error: Division by zero
console.log(calculus(5, 3, "%")); // Invalid operator


// Analyse this code before executing it. Write explanatory comments. What will be the output ?

function add() {
  let counter = 0;
  function plus() {
      counter += 1;
      console.log(counter);
  }
  plus();  
}

add()



// Analyse this code before executing it. Write explanatory comments. What will be the output ?

let add = (function () { // Invoked function
  let counter = 0; 
  function calculus() { // inner function
      counter += 1; 
      return counter // It remembers the scope
  }
  return calculus
})();

add();
add();
add();

// Returns 1,2,3




// Analyse this code before executing it. Write explanatory comments

const g = n => n + 1; // currying
const f = n => n * 2; // currying 

const h = x => f(g(x)); // ((h) + 1) + 2

h(20); //=> 42