let num: number = 1

let srt: string = `abc`

let bool: boolean = false

let any: any;
any = 1
any = `a`

let strnum: number | string | boolean;
strnum = 0
strnum = 'a'
strnum = false

let reg: RegExp = /\w+/g

let strArray: string[] = [`a`,`b`,`c`]

let numArrat: number[] = [1,2,3]

let strNumArray: (number | string | boolean | null| undefined)[] = []

let mytuple: [string,number,string] = [`a`,1,`b`]

// Careful, everything in javascript is an object
let myObj: object = {}
myObj = []


let user = {
    name: `John`,
    agr: 15
};
// not allowed to add more -> user.email = "aa@aa.com"

type strnum = string | number
let strnum1: strnum = 1
let strnum2: strnum = "a"
let strnum3: string | number = "a"


type UserT = {
    name: string,
    age: number,
    email:string,
    gender?:string // Optional Type
}

// let user2: UserT = {
//     "jon",
//     14,
//     "test@test"
// }

let user2: UserT = {
    name:"jon",
    age:14,
    email:"test@test"
}
let user3: UserT = {
    name:"jon",
    age:14,
    email:"test@test",
    gender:"Helicopter"
}

// You can change the index using enum,d efaukt is 0 but you can specify where it starts
enum Grade {
    U, // = 1,
    D,
    C,
    B,
    A,
}

// console.log(Grade[1],Grade.D);

type Statuses = 'LOADING' | 'SUCCESS' | 'FAILED';

let fetchStatus: Statuses = `LOADING`


type numberOrstring= number | string;
const sum = (a:number, b: numberOrstring): numberOrstring => {
    if (typeof b === `number`){
        return a + b
    } else if (typeof b === `string`){
        return `${a}${b}`
    } else{
        throw new Error("Invalid Type");
    }
}