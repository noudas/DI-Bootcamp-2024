import './style.css'



// Exercise 1: Class Inheritance with Protected Access Modifiers
// What You Will Learn:

// How to use protected access modifiers in a base class.
// How to create a class that extends a base class and reuses its properties and methods.
// How to add new functionality to the derived class.


// Instructions
// Create a base class Employee with the following:


class Employee {

  // A protected property name of type string.
  protected name:string;

  // A protected property salary of type number.
  protected salary:number
  constructor(name:string, salary:number) {
    this.name = name;
    this.salary = salary;
  }
  // A method getDetails() that returns the employee’s name and salary.
  getDetails(){
    return [this.name, this.salary]
  }
}

// Then create a derived class Manager that:
class Manager extends Employee{

  // Adds a public property department of type string.
  public department: string;
  
  // Inherits from Employee.
  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.department = department;
  }
  
  
  // Overrides the getDetails() method to include the department information.
  getDetails() {
    const employeeDetails = super.getDetails();
    // Finally, create a new instance of the Manager class and call the getDetails() method.
    employeeDetails.push(`Department: ${this.department}`);
    return employeeDetails;
  }
}




// Exercise 2: Using Readonly with Access Modifiers
// What You Will Learn:

// How to use the readonly modifier with class properties.
// How to combine readonly with other access modifiers.
// How to ensure properties cannot be modified after initialization.


// Instructions
// Create a class Car with the following properties:

// A readonly and public property make of type string.
// A readonly and private property model of type string.
// A public property year of type number.
// Create a method getCarDetails() that returns the make, model, and year of the car. 
// Attempt to modify the make and model properties after the car is instantiated, and observe the results.

class Car {
  public readonly make_of: string;
  private readonly model: string
  public year: number;
  
  constructor(make_of: string, model: string, year: number) {
    this.make_of = make_of;  // Initialize make_of
    this.model = model;      // Initialize model
    this.year = year;        // Initialize year
  }

  public getCarDetails(): string {
    return `Make: ${this.make_of}, Model: ${this.model}, Year: ${this.year}`;
  }

}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarDetails()); 
// myCar.make_of = "Honda";
// myCar.model = "Civic";

// Exercise 3: Static Properties and Methods in Classes
// What You Will Learn:

// How to define and use static properties and methods.
// How to access static members directly on the class without creating an instance.
// When to use static properties for shared data or utility methods.


// Instructions
// Create a class MathUtils with:

// A static property PI with a value of 3.14159.
// A static method circumference(radius: number) that returns the circumference of a circle given its radius.
// Use the PI static property inside the circumference method. Call the method without creating an instance of MathUtils.

class MathUtils {
  static PI: number = 3.14159;

  static circumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

const radius = 5;
const result = MathUtils.circumference(radius);

console.log(`The circumference of the circle with radius ${radius} is: ${result}`);

// Exercise 4: Interface with Function Types
// What You Will Learn:

// How to define an interface with a function type.
// How to implement the function type in classes.
// How to ensure function signatures follow the interface contract.


// Instructions
// Create an interface Operation with a function type that takes two numbers and returns a number. 
// Create two classes Addition and Multiplication, both implementing the Operation interface. 
// Each class should define the function to perform the respective operation.

// Create instances of both classes and use them to perform operations on two numbers.

interface Operation{
  operate(a: number, b:number) : number;
}

class Addition implements Operation {
  operate(a: number, b: number): number {
    return a + b;
  }
}

class Multiplication implements Operation {
  operate(a: number, b: number): number {
    return a * b;
  }
}

const add = new Addition();
const multiply = new Multiplication();

const resultAdd = add.operate(5, 3);
const resultMultiply = multiply.operate(5, 3);

console.log(`Addition result: ${resultAdd}`); 
console.log(`Multiplication result: ${resultMultiply}`); 


// Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:

// How to extend an interface to add more properties.
// How to use optional and readonly properties in extended interfaces.


// Instructions
// Create an interface Shape with a property color of type string and a method getArea(). 

interface Shape {
  color: string;
  getArea(): number;
}

// Extend the interface with a new interface Rectangle that adds properties width and height (both readonly) and a method getPerimeter(). 
interface Rectangle extends Shape{
  readonly width: number;
  readonly height: number;

  getPerimeter():number;
}

// Implement the Rectangle interface in a class and provide implementations for the methods.

class MyRectangle implements Rectangle {
  color: string;
  readonly width: number;
  readonly height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
  }

  // Implement the getArea method from the Shape interface
  getArea(): number {
    return this.width * this.height;
  }

  // Implement the getPerimeter method from the Rectangle interface
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const rectangle = new MyRectangle('blue', 10, 5);
console.log(`Color: ${rectangle.color}`);
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);