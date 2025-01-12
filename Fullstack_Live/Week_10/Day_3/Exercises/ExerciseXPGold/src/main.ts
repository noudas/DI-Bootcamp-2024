import './style.css'


// Exercise 1: Combining Intersection Types with Type Guards
// What You Will Learn:
// How to use intersection types to combine multiple types into one.
// How to use type guards to narrow down the type of a variable.
// Description:
// In this exercise, you’ll combine two interfaces using an intersection type and use type guards to handle different property types safely.

// Instructions:
// Define Interfaces: Create two interfaces, User and Admin. 
// The User interface should have name and email properties, while Admin should have an adminLevel property.
type User = {
  name:string;
  email:string;
}

type Admin = {
  adminLevel:string;
}

// Combine Interfaces: Use an intersection type to create a new type AdminUser that combines both User and Admin.
type AdminUser = User & Admin;

// Write a function getProperty that takes an object of type AdminUser and a string property name. ]
function getProperty(AdminUser: AdminUser, property:string): string | undefined {
  if (property in AdminUser) {
    return AdminUser[property as keyof AdminUser];
  }
  return undefined;
}

// Use a type guard to check if the property exists on the object and return its value. 
// If the property does not exist, return undefined.

const adminUser: AdminUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  adminLevel: "superadmin",
};

console.log(getProperty(adminUser, "name")); // Output: John Doe
console.log(getProperty(adminUser, "email")); // Output: john.doe@example.com
console.log(getProperty(adminUser, "adminLevel")); // Output: superadmin
console.log(getProperty(adminUser, "nonExistent")); // Output: undefined


// Exercise 2: Type Casting with Generics
// What You Will Learn:
// How to use type casting to convert a variable from one type to another.
// How to use TypeScript generics to create reusable functions.
// Description:
// In this exercise, you’ll create a generic function that uses type casting to convert values to different types.

// Instructions:
// Write a generic function castToType that takes a value and a constructor function for the type to cast to. 
// The function should cast the value to the specified type and return it.

// Use this function to cast a string to a number and a string to a boolean, 
// demonstrating how type casting can be used with generics.

function castToType<T>(value:any, constructor:{new(): T}): T {
  return value as T;
}


// Exercise 3: Type Assertions with Generic Constraints
// What You Will Learn:
// How to use type assertions to instruct TypeScript to treat a value as a specific type.
// How to apply generic constraints to enforce type safety.
// Description:
// In this exercise, you’ll create a generic function that returns the length of an array. 
// You’ll use type assertions and generic constraints to ensure type safety.

// Instructions:
// Create a generic function getArrayLength that takes an array of items and returns its length. 
function getArrayLength<T extends number | string>(array:T[] ): number {
  return array.length;
}

// Apply constraints to ensure the function only works with arrays of numbers or strings.
// Use the function with different types of arrays to demonstrate its functionality.

// Array of numbers
const numberArray = [1, 2, 3, 4, 5];
console.log(getArrayLength(numberArray)); // Output: 5

// Array of strings
const stringArray = ['a', 'b', 'c', 'd'];
console.log(getArrayLength(stringArray)); // Output: 4

// Exercise 4: Generic Interfaces with Class Implementation
// What You Will Learn:
// How to create a generic interface to maintain type safety.
// How to implement a generic interface in a class.
// Description:
// In this exercise, you’ll define a generic interface and implement it in a class.

// Instructions:
// Create a generic interface Storage<T> with methods add and get. add should add an item of type T, and get should retrieve an item by index.
interface Storage<T>{
  add(item: T): void;
  get(index: number): T | undefined;
}
// Implement the Storage<T> interface in a class Box. The class should manage an internal array to store items.
// Instantiate the class with different types and test the add and get methods.
class Box<T> implements Storage<T>{
  private items: T[] = [];

    add(item: T): void {
      this.items.push(item);
    }
  
    get(index: number): T | undefined {
      return this.items[index];
    }
}

const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
console.log(numberBox.get(0));

// Box of strings
const stringBox = new Box<string>();
stringBox.add("hello");
stringBox.add("world");
console.log(stringBox.get(1)); 


// Exercise 5: Combining Generic Classes with Constraints
// What You Will Learn:
// How to use generic classes with constraints to ensure type safety.
// How to use generic parameters to create flexible and reusable code.
// Description:
// In this exercise, you’ll create a generic class with constraints to ensure it only accepts objects with a value property.

// Instructions:
// Create an interface Item<T> with a value property of type T.
// Implement a class Queue<T> that manages a collection of Item<T>. The class should have methods add and remove for managing items in the queue.
// Instantiate the class with different types and test the add and remove methods.

// Interface Item<T> with a value property
interface Item<T> {
  value: T;
}

// Class Queue<T> with methods add and remove
class Queue<T> {
  private items: Item<T>[] = [];  // Internal array to store items of type Item<T>

  // Add an item to the queue
  add(item: Item<T>): void {
    this.items.push(item);
  }

  // Remove and return the first item from the queue
  remove(): Item<T> | undefined {
    return this.items.shift();
  }
}

// Testing the class with different types:

// Queue of numbers
const numberQueue = new Queue<number>();
numberQueue.add({ value: 1 });
numberQueue.add({ value: 2 });
console.log(numberQueue.remove());  // Output: { value: 1 }

// Queue of strings
const stringQueue = new Queue<string>();
stringQueue.add({ value: "apple" });
stringQueue.add({ value: "banana" });
console.log(stringQueue.remove());  // Output: { value: "apple" }


