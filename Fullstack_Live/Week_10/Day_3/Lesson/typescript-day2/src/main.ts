/** daily */
// function validateUnionType(value: any, allowedType: string[]): boolean {
//   for (const type of allowedType) {
//     if (typeof value === type) {
//       return true;
//     }
//   }
//   return false;
// }

import { futimesSync } from "fs";
import { normalize } from "path/posix";

// const allowedType: string[] = ["string", 'number','boolean'];

// console.log(validateUnionType({}, allowedType));

/** functions */
const sum = (a: number, b: number): number => {
  return a + b;
};

// const multiple = (a: number, b: number): number => {
//   return a * b;
// };

type Operation = (a: number, b: number) => number;

const decrement: Operation = (a, b) => {
  return a + b;
};

const multiple: Operation = (a, b) => {
  return a * b;
};

/** default parameters */
const addDefault = (a: number, b: number = 5): number => {
  return a + b;
};

/** optional patrameter */
const addOptional = (a: number, b?: number): number => {
  /** type guard */
  // if (b === undefined) return a;
  return a + (b || 5);
};

/** rest parameter */
const addRest = (a: number, ...rest: number[]): number => {
  const result = rest.reduce((total, num) => {
    return total + num;
  }, a);
  return result;
};

// console.log(addRest(100, 100, 2, 4, 5));

/** never type */
const errorMessage = (msg: string) => {
  throw new Error(msg);
};

/** use of never type */
const numberOrString = (value: number | string | boolean): string => {
  if (typeof value === "string") return "Amazing string";
  if (typeof value === "number") return "Your lucky number";
  return errorMessage("value is not a string or number");
};

// try {
//   console.log(numberOrString(true));
// } catch (error) {
//   console.log(error.message);
// }

/** function overload */
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof b === "string" && typeof a === "string") {
    return a + b + "";
  }
  if (typeof b === "number" && typeof a === "number") {
    return a + b;
  }
  return -1;
}

// add(1,2)
// add('a','b')
// add(1 ,'a')
// add('a',1)

// function addNoOverload(
//   a: string | number,
//   b: string | number
// ): string | number {
//   if (typeof b === "string" && typeof a === "string") {
//     return a + b + "";
//   }
//   if (typeof b === "number" && typeof a === "number") {
//     return a + b;
//   }
//   return -1;
// }
// console.log(addNoOverload('1',9))

/** Assertions Or Casting */
/** as or <...> */

/** aliases */
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";
// console.log(a);

let b = a as Two;
b = 1;
// console.log(b);

let c = a as Three;
// console.log(c);
c = "hello";

let d = <One>"hi";
let e = <Two>"hello";
let f = <Three>"hello";

/** Note: tsx - not with <..> */

/** Dom Element */
// const myImg1 = document.querySelector("img"); // HTML Image Element
// if (myImg1) myImg1.src = "/images/abc.jpg";

/** not null ! */
// const myImg2 = document.querySelector("img")!;
// myImg2.src = "...";

// const myImg3 = document.querySelector("img") as HTMLImageElement;
// myImg3.src = "...";

// const myDiv = document.getElementById("#app") as HTMLDivElement;
// myDiv.src = "";

// const year = document.getElementById('year') as HTMLSpanElement
// const year = <HTMLSpanElement>document.getElementById('year')
// const year: HTMLSpanElement = document.getElementById('year')!;
// const thisYear: string = new Date().getFullYear().toString();
// year ? year.textContent = thisYear : null;

/** Classes */
/**
 * access modifiers
 * public - anywhere
 * private - within the class
 * protected withn the class and subclass
 * readonly - set in the constructor
 */
// console.log(this);

class User {
  // public name: string;
  // private age: number;
  // protected active: boolean
  public gender: string | number;

  constructor(
    public name: string,
    private age: number,
    protected active: boolean
  ) {
    // this.name = n;
    // this.age = a;
    // this.active = ac;
    this.gender = "";
  }

  getAge() {
    return `My age is ${this.age}`;
  }

  getActive() {
    return `Am I active? ${this.active}`;
  }

  setAge(age: number) {
    if (age < 100) this.age = age;
  }
}

let user1 = new User("John", 25, true);
console.log(user1.name);
console.log(user1.getAge());
console.log(user1.getActive());

// user1.setAge(100); // = 100

console.log(user1.getAge());

class Student extends User {
  private classes: string[];

  constructor(name: string, age: number, active: boolean) {
    super(name, age, active);
    this.classes = ["js", "react"];
  }
}

let student1 = new Student("Anne", 22, true);

student1.name;
student1.getAge();
// student1.classes

/** Class with Interface */

interface UserI {
  name: string;
  age: number;
  getAge(): number;
}

class MyUser implements UserI {
  public _name: string;
  public _age: number;

  constructor(n: string, a: number) {
    this._age = a;
    this._name = n;
  }

  get name(): string {

    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set name(name: string) {
    this._name = name;
  }

  getAge(): number {
    return this._age;
  }
  setName(value: string) {
    this._name = value;
  }
}

/**
 * Exercise: Create a Car Class implements a Car interface
 * 
Create a Car class with the following properties:

make (string) - The manufacturer of the car.
model (string) - The model of the car.
year (number) - The year the car was made.
isElectric (boolean) - Whether the car is electric or not.

Add a constructor to initialize these properties.

Add a method getCarDetails() that returns a string in the format:

"{year} {make} {model} - Electric: {isElectric}"

Add a method age(currentYear: number): number 
to calculate how old the car is based on the currentYear passed as a parameter.

Bonus Challenge
Add a static method compareCars(car1: Car, car2: Car): string 
to compare the ages of two cars and return which one is older.
*/