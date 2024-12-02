// Exercise 1: Sum elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
function sumArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma
}
// 
// 
// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
function removeDuplicate(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (!newArray.includes(array[i])){
            newArray.push(array[i])
        } else {
            continue
        }
    }
    return newArray
}
// 
// 
// Exercise 3 : Remove certain values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// 
// 
// Exercise 4 : Repeat please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
// 
// 
// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.
// 
// Using this code :
// 
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:
// 
//     When you write:
// 
//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);
// 
//     It should look like this:
// 
//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'
// 
// 
// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?