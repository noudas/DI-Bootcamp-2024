// Exercise 1 : Analyzing the map method
// Instructions
// Analyze this code, what will be the output ?
// 
// console.log([1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   }));
// it will return [2,4,6]
// 
// 
// Exercise 2: Analyzing the reduce method
// Instructions
// Analyze this code, what will be the output ?
// 
// console.log([[0, 1], [2, 3]].reduce( // join 0,1,2,3
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2], // initial value
//   ));
// 
// [1,2,0,1,2,3]
// 
// Exercise 3 : Analyze this code
// Instructions
// Using this code:
// 
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// What is the value of i ?
//  [2,4,8,10,16,18]
// 
// Exercise 4 : Nested arrays
// Instructions
// Using a method, take this array 
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
const newArray = array.flat(2) 
// and modify it to look like this array: [1,2,3,[4],[5]].
console.log(newArray);

// Bonus Try to do it on one line.
// Using a method, take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
const newGreeting = greeting.flat(1).join(' ')
console.log(newGreeting);

// and modify it to look like this 
// array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: 
// ‘Hello young grasshopper! you are learning fast!’.
// Turn the trapped number 3 
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] 
// into: [3]
const freed = trapped.flat(30)
console.log(freed);
