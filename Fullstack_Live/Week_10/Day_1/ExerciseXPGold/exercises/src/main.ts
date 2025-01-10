// Exercise 1: Union Types
// What You Will Learn:
// How to use union types for flexible parameter handling.
// How to implement logic that processes different types.
// How to return appropriately formatted results based on the input type.
// Description:

// You’ll create a function that accepts either a string or a number. 
// The function formats numbers as currency and reverses strings. 
// This exercise demonstrates how to use union types and handle different input types.

// Instructions
// Create the Function:

// Write a function called processValue that accepts one parameter of type string | number.
const processValue = (param: string | number) :string =>{
    if(typeof param === `number`){
      return `$${param.toFixed(2)}`;
    } else if (typeof param == `string`) {
      return param.split('').reverse().join('');
    } else {
      return ''
    }
}
// If the input is a number, format it as a currency string (e.g., $100.00).
// If the input is a string, return the reversed version of the string.
// Test the Function:

// Call the processValue function with different inputs (both strings and numbers) to verify functionality.

console.log(processValue(100));        // Output: $100.00
console.log(processValue("hello"));    // Output: "olleh"
console.log(processValue(123.45));     // Output: $123.45
console.log(processValue("typescript")); // Output: "tpircsety"



// Exercise 2: Array Type Annotations
// What You Will Learn:
// How to specify array types in TypeScript.
// How to perform array operations like summing values.
// Description:

// Create a function that takes an array of numbers, strings, or both, and sums only the numbers. 
// You’ll practice working with arrays of different types and using type guards.

// Instructions
// Create the Function:
// Write a function named sumNumbersInArray that accepts an array of number | string.
// Iterate through the array and sum only the number values, ignoring strings.
const sumNumbersInArray = (array: number[] | string[]): number => {
  let soma: number = 0;

  for (let element of array) {
    if (typeof element === "number") {
      soma += element;
    }
  }
  return soma;
}
// Test the Function:

// Test sumNumbersInArray with different arrays containing both numbers and strings.

console.log(sumNumbersInArray([1, 2, 3, 4, 5])); // Expected output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumNumbersInArray([10, "hello", 20, "world", 30])); // Expected output: 60 (10 + 20 + 30)
console.log(sumNumbersInArray(["a", "b", "c"])); // Expected output: 0 (no numbers)
console.log(sumNumbersInArray([5, "test", 10])); // Expected output: 15 (5 + 10)
console.log(sumNumbersInArray([100])); // Expected output: 100 (only one number)


// Exercise 3: Type Aliases
// What You Will Learn:
// How to create and use type aliases for custom types.
// How to structure more complex objects for better maintainability.
// Description:

// You’ll create a type alias representing a user with multiple properties and 
// write a function that processes the object to return a formatted string, 
// including additional information if an optional property is present.

// Instructions
// Define a Type Alias:
// Create a type alias called AdvancedUser that represents a user object with the properties: name, age, and an optional address.
type AdvancedUser = {
  name:string;
  age: number;
  address?: string;
}

// Implement the Function:

// Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the user’s name and age.
// If the address property is present, include it in the greeting message.

const introduceAdvancedUser = (user:AdvancedUser): string =>{
  let greeting = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
  if (user.address) {
    greeting += ` I live at ${user.address}.`;
  }

  return greeting;
}

// Test the Function:

// Test introduceAdvancedUser with and without the address property.

const user1: AdvancedUser = { name: "Alice", age: 30 };
console.log(introduceAdvancedUser(user1)); // Output: Hello, my name is Alice and I am 30 years old.

const user2: AdvancedUser = { name: "Bob", age: 25, address: "123 Main St" };
console.log(introduceAdvancedUser(user2));


// Exercise 4: Optional Parameters
// What You Will Learn:
// How to use optional parameters and set default values.
// How to handle multiple input scenarios with conditional logic.
// Description:

// Create a function with an optional parameter for a greeting. Use conditional logic to apply a default greeting if none is provided.

// Instructions
// Create the Function:
// Write a function welcomeUser that takes a required name and an optional greeting.
// If no greeting is provided, use "Hello" as the default.

const welcomeUser = (name: string, greetings?: string): string => {
  if (greetings) {
    return `${greetings}, ${name}`;
  }
  return `Hello, ${name}`;
};

// Test the Function:

// Test welcomeUser with and without a custom greeting.

console.log(welcomeUser("Alice"));           // Output: Hello, Alice
console.log(welcomeUser("Bob", "Good morning")); // Output: Good morning, Bob
console.log(welcomeUser("Charlie", "Hey"));  // Output: Hey, Charlie