"use strict";
/** type number */
let num1;
num1 = 1;
// console.log(num);
/** type string */
let str = "abc";
// str = 1
// str = undefined
/** type boolean */
let bol = false;
// bol = {}
/** type any -- try not to use as much as you can */
let any;
any = 1;
any = "1";
/** type union */
let strnum;
strnum = 0;
strnum = "a";
strnum = true;
/** type RegExp */
let reg = /\w+/g;
/** type Array */
let strArr = ["a", "b", "c"];
strArr.push("d");
// strArr.push(1)
let numArr = [];
numArr[0] = 0;
// numArr.unshift("b");
let strNumArr = [
    1,
    "a",
    true,
    null,
    undefined,
];
/** type Tuple */
let myTuple = ["a", 1, "b"];
/** type object */
let myObj = {};
// myObj = []
// myObj.a = 1
let user = {
    name: "John",
    age: 25,
};
user.name = "Anne";
let str1 = "abc";
let str2 = "123";
let strnum1 = 1;
let strnum2 = "a";
let user1 = {
    age: 5,
    name: "dan",
    email: "ddd@gamil.com",
};
let user2 = {
    name: "Anne",
    age: 55,
    email: "aaa@gmail.com",
    gender: "F",
};
// user1.gender = "M";
/** type Enum */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade[1], Grade.D);
