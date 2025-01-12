import './style.css'


// Exercise 1: TypeScript Generics and Intersection Types
// What You Will Learn
// Implement generics with intersection types to create flexible and reusable functions.
// Task
// Create a generic class Container that can store and manage items of types combined using intersection types. 
// Define methods to add, remove, and list items. Use generic types to ensure flexibility.
class Container<T> {
  private items: T[] = [];

  // Add an item to the container
  add(item: T): void {
    this.items.push(item);
  }

  // Remove an item from the container by index
  remove(index: number): T | undefined {
    if (index >= 0 && index < this.items.length) {
      return this.items.splice(index, 1)[0];
    }
    return undefined;
  }

  // List all items in the container
  list(): T[] {
    return [...this.items];
  }
}

// Example Usage:

// Define types Person and Job
type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

// Define an intersection type Employee
type Employee = Person & Job;

// Create a Container for Employee type
const employeeContainer = new Container<Employee>();

// Add employees to the container
employeeContainer.add({
  name: "Alice",
  age: 30,
  position: "Manager",
  department: "HR",
});
employeeContainer.add({
  name: "Bob",
  age: 25,
  position: "Developer",
  department: "IT",
});

// List all employees
console.log("Employees:", employeeContainer.list());

// Remove an employee by index
console.log("Removed Employee:", employeeContainer.remove(0));

// List remaining employees
console.log("Remaining Employees:", employeeContainer.list());



// Exercise 2: Generic Interfaces and Type Casting
// What You Will Learn
// Use generic interfaces to define versatile structures.
// Apply type casting to ensure type consistency in complex scenarios.
// Task
// Define a generic interface Response<T> for handling API responses, where T is the type of data in the response. 
// Create a function parseResponse that casts the response data to the desired type and returns it.
interface Response<T> {
  data: T;
  status: number;
  message: string;
}

// Define a function to parse the response
function parseResponse<T>(response: Response<any>, castToType: new () => T): T {
  const parsedData = response.data;

  // Simulate type casting by creating a new instance of the desired type
  return Object.assign(new castToType(), parsedData);
}



// Exercise 3: Generic Classes and Type Assertions
// What You Will Learn
// Create flexible generic classes.
// Use type assertions to enforce specific types within generic classes.
// Task
// Create a generic class Repository<T> that stores items of type T.
// Implement methods to add, retrieve, and list items.
// Use type assertions to ensure type safety when retrieving items.

class Repository<T> {
  private items: T[] = [];

  // Add an item to the repository
  public add(item: T): void {
    this.items.push(item);
  }

  // Retrieve an item by index, with a type assertion for safety
  public get(index: number): T | undefined {
    return this.items[index];
  }

  // List all items in the repository
  public list(): T[] {
    return [...this.items];
  }
}