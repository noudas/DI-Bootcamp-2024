// Using the code below:
// Create a variable called experiencePoints.
let experiencePoints;

// Transform the winBattle() function to an arrow function.
// Assign to this variable, a ternary operator. 
// If winBattle() is true, the experiencePoints variable should be equal to 10, 
// else the variable should be equal to 1.
const winBattle = (win) => (win ? 10 : 1);
experiencePoints = winBattle(true);

// Console.log the experiencePoints variable.
console.log(experiencePoints);
