import './style.css'

// interface Student {
//   [key: string | number]: string | number | string[] | undefined;
//   name: string;
//   grade: string | number;
//   course?: string[];
// }

// const student1: Student = {
//   name: "Jobson",
//   grade: "5A",
//   course: [`Math`,`Science`]
// }

// Object.keys(student1).forEach((key) =>{
//   console.log(key, student1[key as keyof Student]);
//   console.log(key, student1[key as keyof typeof student1]);
//   console.log(key, student1[key]);
// })



/**
 * Create a function isObj - get a generic type as parameter (arg: T)
 * retrun type { arg, is: true/false}
 */

interface Boolcheck<T> {
  arg: T,
  is: boolean
}

const isObj = <T>(arg: T): Boolcheck<T> => {
  if(typeof arg === `object` && Array.isArray(arg) && arg !== null) {
    return {arg, is: true}
  }
  return {arg, is: false}
}

// function isObj<T>(arg: T): { arg: T; is: boolean } {
//   return { 
//       arg, 
//       is: typeof arg === 'object' && arg !== null 
//   };
// }

// const result1 = isObj({ name: 'John' });
// console.log(result1); // { arg: { name: 'John' }, is: true }

// const result2 = isObj(42);
// console.log(result2); // { arg: 42, is: false }
