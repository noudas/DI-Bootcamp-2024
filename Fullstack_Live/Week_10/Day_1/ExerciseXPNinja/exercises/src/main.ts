// Exercise 1: Conditional Types
// What You Will Learn:
// How to use conditional types in TypeScript.
// How to create functions that change the output type based on the input type.
// How to handle both number and string inputs with specific operations.
// Description:

// In this exercise, you will create a function that takes an input of type number or string and returns a 
// different output based on the type of the input. You will use conditional types to map these input types to specific output types.

// Instructions
// Define a Conditional Type:

// Create a type called MappedType that maps an input type to an output type.

// type MappedType<T> = 
//   [T] extends [number] ? number:
//   [T] extends [string] ? number:
//   never;

// Tipo MappedType usando uma referencia T como valoe

type MappedType<T> =  T extends number ? number : 
                      T extends string ? number : 
                      never;

  // If the input is a number, the output should be a number.
  // If the input is a string, the output should also be a number (in this case, the length of the string).

// Implement the Function:

// Write a function called mapType that takes a value of type number or string and returns a result based on the input type.
// If the input is a number, return the square of the value.
// If the input is a string, return the length of the string.

// Using MappedType
const mapType = <T extends number | string>(input: T): MappedType<T> => {
  if (typeof input === "number") {
    return (input ** 2) as MappedType<T>;
  } else if (typeof input === "string") {
    return input.length as MappedType<T>;
  } else {
    throw new Error("Input must be either a number or a string");
  }
};

// Using MappedType as a Reference
const mapTypev2 = (input: number | string): number => {
  if (typeof input === "number") {
    return input ** 2;
  } else if (typeof input === "string") {
    return input.length;
  } else {
    throw new Error("Input must be either a number or a string");
  }
};

// Test the Function:

// Test the mapType function with both number and string inputs to ensure it returns the correct results.

console.log(mapType(5)); // Output: 25 (square of the number)
console.log(mapType("Hello")); // Output: 5 (length of the string)

console.log(mapTypev2(5)); // Output: 25 (square of the number)
console.log(mapTypev2("Hello")); // Output: 5 (length of the string)



// Exercise 2: Keyof and Lookup Types
// What You Will Learn:
// How to use keyof and lookup types in TypeScript.
// How to retrieve a property value from an object dynamically while maintaining type safety.
// Description:

// In this exercise, you will create a function that retrieves the value of a property from an object based on a provided key. 
// This function will ensure type safety by leveraging TypeScript’s keyof and lookup types.

// Instructions
// Define the Function:

// Create a function named getProperty that accepts two parameters:
// An object that contains various properties.
// A key which represents one of the properties in the object.

// Quando usamos <>, estamos declarando "parâmetros de tipo" no TypeScript, 
// ou seja, estamos permitindo que o código seja genérico e flexível para trabalhar com diferentes tipos.

// T representa um tipo genérico qualquer. Nesse caso, T será o objeto que estamos manipulando.
// K representa uma das chaves do tipo T, ou seja, um valor que corresponde a uma propriedade existente em T.
// K é restrito pelo tipo T (usando `extends`), garantindo que ele só possa ser uma chave válida do objeto T.

function getProperty<T, K extends keyof T>(myObj:T, key:K):T[K] {
    return myObj[key]
}
// The function should return the value of the property associated with the given key.
// Ensure Type Safety:

// Use TypeScript’s keyof to ensure that the key provided is valid for the object.
// Use lookup types to ensure that the return type matches the type of the property.
// Test the Function:

// Test the getProperty function with an object, passing different keys to retrieve different property values.

const user = {
  id: 123,
  name: "Alice",
  age: 30,
  isAdmin: true,
};

const userId = getProperty(user, "id"); // Type: number
console.log(`User ID: ${userId}`); // Output: User ID: 123

const userName = getProperty(user, "name"); // Type: string
console.log(`User Name: ${userName}`); // Output: User Name: Alice

const userAge = getProperty(user, "age"); // Type: number
console.log(`User Age: ${userAge}`); // Output: User Age: 30

const userIsAdmin = getProperty(user, "isAdmin"); // Type: boolean
console.log(`Is User Admin?: ${userIsAdmin}`); // Output: Is User Admin?: true


// Exercise 3: Using Interfaces with Numeric Properties in TypeScript
// What You Will Learn:
// How to use interfaces to define specific shapes of objects in TypeScript.
// How to create functions that perform operations on objects with certain properties.
// How to work with numeric properties in objects.
// Description:

// In this exercise, you will create a function that operates on objects with specific numeric properties. 
// The function will multiply the value of a specified numeric property by a given factor.

// Instructions
// Define an Interface:

// Create an interface named HasNumericProperty that describes objects with properties that have numeric values.
interface HasNumericProperty{
  [key:string]: number
}

// Implement the Function:

// Write a function named multiplyProperty that takes three parameters:
// An object that adheres to the HasNumericProperty interface.
// A string key that corresponds to one of the numeric properties in the object.
// A numeric factor by which to multiply the property’s value.
// The function should return the result of multiplying the specified property’s value by the given factor.

function multiplyProperty<T extends HasNumericProperty, K extends keyof T>(myObj:T, key:K, fator:number): number{
  return myObj[key] * fator;
}

// Test the Function:

// Test the multiplyProperty function with different objects and keys to ensure it works as expected.
const exemplo: HasNumericProperty ={
  value1: 10,
  value2: 20,
  value3: 30,
}

const result = multiplyProperty(exemplo, "value2", 3);
console.log(result); // Output: 60