import './style.css'

// Exercise 1: Advanced Access Modifiers and Inheritance
// What You Will Learn:

// How to use private, protected, and public access modifiers in a complex inheritance structure.
// How to use protected methods to allow access in derived classes but restrict them from outside use.
// How to extend multiple levels of inheritance while maintaining encapsulation and overriding methods.


// Instructions:
// Create a base class Employee with the following properties:

// name (public), age (private), and salary (protected).
// Include a protected method calculateBonus that calculates a bonus based on the salary.
class Employee{
  public name:string;
  private age:number;
  protected salary:number;

  constructor(name:string, age:number, salary:number){
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  protected calculateBonus(): number{
    return this.salary * 0.10; 
  }
};

// Now create a class Manager that extends Employee and 
// overrides a method getSalaryDetails to include a bonus calculation using the calculateBonus method. 
class Manager extends Employee{
  public getSalaryDetails(): string {
    const bonus = this.calculateBonus();
    return `${this.name}'s salary is $${this.salary} and the bonus is $${bonus}`;
  }
};

// Finally, create another class ExecutiveManager that further extends Manager and introduces a new method approveBudget.
class ExecutiveManager extends Manager {
  public approveBudget(budget: number): string {
    return `${this.name} has approved a budget of $${budget}`;
  }
};

// Create an instance of ExecutiveManager, and ensure the encapsulation of private and protected members.
const executive = new ExecutiveManager("Bob", 45, 8000);
console.log(executive.getSalaryDetails()); // Bob's salary is $8000 and the bonus is $800
console.log(executive.approveBudget(100000)); // Bob has approved a budget of $100000


// Exercise 2: Advanced Static Methods and Properties
// What You Will Learn:

// How to define and use static properties and methods in TypeScript.
// How to combine static methods and properties with inheritance and how to override them in derived classes.


// Instructions:
// Create a base class Shape with a static method getType that returns the type of the shape. 
// Define a static property totalShapes to count how many instances of any shape have been created. 
class Shape{
  static totalShapes: number = 0
  static getType(): string{
      return 'Shape'
  }
  constructor(){
    Shape.totalShapes ++;
  }
}
// Extend the class to Circle and Square, each with its own area calculation. 
// Override the static method getType in each subclass.
// Ensure that you track the total number of shapes created using the totalShapes static property.

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super(); // Increment the totalShapes count
    this.radius = radius;
  }

  static getType(): string {
    return "Circle";
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}


class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super(); // Increment the totalShapes count
    this.width = width;
    this.height = height;
  }

  static getType(): string {
    return "Rectangle";
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle1 = new Circle(5);
const rectangle1 = new Rectangle(4, 6);
const circle2 = new Circle(3);

console.log(Circle.getType()); // Output: "Circle"
console.log(Rectangle.getType()); // Output: "Rectangle"
console.log(Shape.getType()); // Output: "Shape"

console.log(Shape.totalShapes); // Output: 3 (circle1, rectangle1, circle2)

// Access areas
console.log(circle1.getArea()); // Output: 78.53981633974483
console.log(rectangle1.getArea()); // Output: 24
console.log(circle2.getArea()); // Output: 28.274333882308138




// Exercise 3: Complex Interfaces with Function Types
// What You Will Learn:

// How to use function types in interfaces.
// How to define complex objects with methods inside interfaces and enforce type safety.


// Instructions:
// Create an interface Calculator with properties for two numbers (a and b), 
// and a method operate that accepts a function for performing an operation (addition, subtraction, multiplication, etc.). 
// The operate method should apply the passed function to a and b and return the result.

interface Calculator {
  a: number;
  b: number;
  operate(operation: (a: number, b: number) => number): number;
}

class SimpleCalculator implements Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  operate(operation: (a: number, b: number) => number): number {
    return operation(this.a, this.b);
  }
}

// Then, create a class AdvancedCalculator that implements this interface and can perform operations like add, subtract, and multiply.
class AdvancedCalculator implements Calculator {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  operate(operation: (a: number, b: number) => number): number {
    return operation(this.a, this.b);
  }

  add(): number {
    return this.a + this.b;
  }

  subtract(): number {
    return this.a - this.b;
  }

  multiply(): number {
    return this.a * this.b;
  }

  divide(): number {
    if (this.b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return this.a / this.b;
  }
}


const simpleCalc = new SimpleCalculator(10, 5);
console.log("Simple Calculator - Custom Operation (Modulus):", simpleCalc.operate((a, b) => a % b)); // Output: 0

const advancedCalc = new AdvancedCalculator(20, 10);
console.log("Advanced Calculator - Addition:", advancedCalc.add()); // Output: 30
console.log("Advanced Calculator - Subtraction:", advancedCalc.subtract()); // Output: 10
console.log("Advanced Calculator - Multiplication:", advancedCalc.multiply()); // Output: 200
console.log("Advanced Calculator - Division:", advancedCalc.divide()); // Output: 2
console.log("Advanced Calculator - Custom Operation (Power):", advancedCalc.operate((a, b) => a ** b)); // Output: 10240000000000


// Exercise 4: Readonly Properties in Complex Inheritance
// What You Will Learn:

// How to use readonly properties in a more advanced scenario with multiple inheritance.
// How to prevent modification of properties in base and derived classes using readonly.


// Instructions:
// Create a base class Device with a readonly property serialNumber. 
class Device{
  readonly serialNumber: number;

  constructor(serialNumber: number){
    this.serialNumber = serialNumber
  }

  public getInfo(): string{
    return `Serial number: ${this.serialNumber}`
  }
}

// Extend it with a class Laptop that adds additional properties like model and price. 
// Ensure that the serialNumber is immutable but model and price can be updated. 
// Override a method to return the device information including the serialNumber.
class Laptop extends Device{
  public model: string;
  public price: number;

  constructor(serialNumber: number, model: string, price: number){
    super(serialNumber);
    this.model = model;
    this.price = price;
  }

  public getInfo(): string {
    return `Serial number: ${this.serialNumber} -> Model ${this.model} -> Price $${this.price}`
  }
}

const laptop = new Laptop(12345, "MacBook Pro", 2499.99);
console.log(laptop.getInfo());



// Exercise 5: Extending Multiple Interfaces with Optional and Readonly Properties
// What You Will Learn:

// How to extend multiple interfaces and combine optional and readonly properties.
// How to enforce complex type rules using interfaces and inheritance.


// Instructions:
// Create an interface Product with properties name (readonly), price, and an optional discount. 
interface Product{
  readonly name: string;
  price: number;
  discount?: number
}

// Then, create another interface Electronics that extends Product and adds a property warrantyPeriod. 
interface Electronics extends Product{
  warrantyPeriod: number;
}

// Finally, create a class Smartphone that implements the Electronics interface and calculates the price after discount.
class Smartphone implements Electronics{

  // Ensure that the name is immutable, and 
  readonly name: string;
  price: number;

  // the discount is optional.
  discount?: number | undefined;
  warrantyPeriod: number;

  constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
    this.name = name;
    this.price = price;
    this.warrantyPeriod = warrantyPeriod;
    this.discount = discount;
  }

  public getPriceAfterDiscount(): number {
    if (this.discount) {
      return this.price - (this.price * this.discount) / 100;
    }
    return this.price;
  }

  public getDetails(): string {
    const finalPrice = this.getPriceAfterDiscount();
    return `Smartphone: ${this.name}, Price: $${finalPrice.toFixed(2)}, Warranty Period: ${this.warrantyPeriod} months`;
  }
}

const smartphone = new Smartphone("iPhone 14", 999.99, 24, 10);

// Print details
console.log(smartphone.getDetails()); 
