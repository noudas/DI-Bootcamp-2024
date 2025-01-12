import './style.css'

// What You Will Learn:
// Access Modifiers (private, protected, public):

// How to restrict or expose properties and methods within a class.
// Understanding how access modifiers control visibility inside and outside a class.
// Readonly Properties:

// How to create immutable properties in a class and interface.
// Learn to use readonly to prevent properties from being modified after initialization.
// Inheritance:

// How to create a base class and extend it in a subclass.
// Reusing and overriding methods and properties in the subclass for specialization.
// Static Properties and Methods:

// How to define static members that can be accessed without instantiating the class.
// Interfaces with Optional and Readonly Properties:

// How to define optional and immutable properties in an interface.
// Extending interfaces to add more specialized properties and methods.
// Function Types in Interfaces:

// How to define function types within interfaces and classes for more structured behavior.


// 🌟 Exercise 1: Class with Access Modifiers
// What You Will Learn:

// How to use access modifiers (private, protected, and public) in a class.
// How to create methods that interact with private and protected properties.


// Instructions:
// Create a class Employee with the following properties:

class Employee {

  // A private property name of type string.
  private name: string;

  // A private property salary of type number.
  private salary: number;

  // A public property position of type string.
  public position: string;

  // A protected property department of type string.
  protected department: string


  // Also, include a constructor to initialize these properties. 
  constructor(name: string, salary:number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department
  }

  // Create a public method getEmployeeInfo that returns the employee’s name and position.
  public getEmployeeInfo(): string{
    return `HALLO! MAI NAME IS ${this.name} AND I AM A HUMAN BEING THAT WORKS AS A ${this.position}`
  }
}


// 🌟 Exercise 2: Readonly Properties in a Class
// What You Will Learn:

// How to use the readonly modifier to make class properties immutable.
// How to prevent modifications to class properties after initialization.


// Instructions:
// Create a class Product with the following properties:

class Product{

  // A readonly property id of type number.
  readonly id: number;

  // A public property name of type string.
  public name:string;

  // A public property price of type number.
  public price: number;

  constructor(id: number, name:string, price: number){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(){
    return `${this.name} - $${this.price}`
  }
}
// Create a method getProductInfo that returns a string with the product’s name and price. 
// Attempt to modify the id property after creating a new instance of the class and observe the result.

const product1 = new Product(1, "Laptop", 999.99);
console.log(product1.getProductInfo());

const product2 = new Product(2, "Smartphone", 799.99);
console.log(product2.getProductInfo());

product2.id = 3;
product2.name = "Smartphone Pro";
product2.price = 899.99;
console.log(product2.getProductInfo());



// 🌟 Exercise 3: Class Inheritance
// What You Will Learn:

// How to create a base class and extend it using inheritance.
// How to reuse properties and methods from the base class.


// Instructions:
// Create a base class Animal with a public property name and a method makeSound that returns a string. 
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name
  }
  public makeSound(): string {
    return ""
  } 
}

// Create a subclass Dog that extends Animal and overrides the makeSound method to return the sound a dog makes (“bark”). 

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  public makeSound(): string {
      return "Bork"
  }
}
// Create an instance of the Dog class and call the makeSound method.

const myDog = new Dog("Galaxy Anniahlathor");
console.log(myDog.name);
console.log(myDog.makeSound());



// 🌟 Exercise 4: Static Properties and Methods
// What You Will Learn:

// How to use static properties and methods in a class.
// How to access static members without creating an instance of the class.


// Instructions:
// Create a class Calculator with the following static methods:

// add(a: number, b: number): number – returns the sum of two numbers.
// subtract(a: number, b: number): number – returns the difference between two numbers.
// Call these methods without creating an instance of the class.



// 🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:

// How to extend an interface to add new properties.
// How to use optional and readonly properties in interfaces.


// Instructions:
// Create an interface User with properties id (readonly), name, and email. Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. Create a function printUserDetails that accepts a PremiumUser and logs the details to the console.

