/** type number */
let num1: number;
num1 = 1;
// console.log(num);

/** type string */
let str: string = "abc";
// str = 1
// str = undefined

/** type boolean */
let bol: boolean = false;
// bol = {}

/** type any -- try not to use as much as you can */
let any: any;
any = 1;
any = "1";

/** type union */
let strnum: number | string | boolean;
strnum = 0;
strnum = "a";
strnum = true;

/** type RegExp */
let reg: RegExp = /\w+/g;

/** type Array */
let strArr: string[] = ["a", "b", "c"];
strArr.push("d");
// strArr.push(1)

let numArr: number[] = [];
numArr[0] = 0;
// numArr.unshift("b");

let strNumArr: (number | string | boolean | null | undefined)[] = [
  1,
  "a",
  true,
  null,
  undefined,
];

/** type Tuple */
let myTuple: [string, number, string] = ["a", 1, "b"];

/** type object */
let myObj: object = {};
// myObj = []
// myObj.a = 1

let user = {
  name: "John",
  age: 25,
};

user.name = "Anne";
// user.name = 1
// user.email = "jjj@gmail.com";

/** type OR interface */

type myString = string;
let str1: string = "abc";
let str2: myString = "123";

type strnum = string | number;
let strnum1: number | string = 1;
let strnum2: strnum = "a";

type UserT = {
  name: string;
  age: number;
  email: string;
  gender?: string;
};

type strbol = string | boolean;

interface UserI {
  name: string;
  age: number;
  email: string;
  gender?: string;
}

let user1: UserT = {
  age: 5,
  name: "dan",
  email: "ddd@gamil.com",
};

let user2: UserT = {
  name: "Anne",
  age: 55,
  email: "aaa@gmail.com",
  gender: "F",
};

// user1.gender = "M";
/** type Enum */
enum Grade {
  D,
  C,
  B,
  A,
}

// console.log(Grade[1], Grade.D);

/** type literal */
type Statuses = "A" | "B" | "C" | "D";

// let fetchStatus: Statuses = 'FAILED'

/** type Aliases */
type StringOrNumber = string | number;

type BooleanStringOrNumber = StringOrNumber | boolean;

type StudentT = {
  name: string;
  grade: Grade;
  status: Statuses;
  classes: StringOrNumber;
};

type AgeT = { age: number };

type ExtendedStudentT = StudentT & AgeT;

let student1: StudentT = {
  name: "Sting",
  grade: Grade.B,
  status: "C",
  classes: "js",
};

let student2: ExtendedStudentT = {
  name: "Sting",
  grade: Grade.B,
  status: "C",
  classes: "js",
  age: 99,
};

/** functions */
const sum = (a: number, b: number): number => {
  return a + b;
};
sum(3, 3);
// sum(3,undefined)

/**
 * Create a function with 2 parameters
 * a: number and, b: aliase of a string | number
 * return a string or a number as sum or concat;
 */
type StringNumber = string | number;
const sumOrConcat = (a: number, b: StringNumber) => {
  /** type guard */
  if (typeof b === "string") {
    return a + b + "";
  }
  return a + b;
};
