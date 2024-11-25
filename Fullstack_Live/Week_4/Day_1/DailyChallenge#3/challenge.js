// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, 
// then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

for (let i = 1; i < 6; i++){
    let stars1 = `* `.repeat(i);
    console.log(stars1)
}



for (let i = 1; i <= 6; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '* '; 
    }
    console.log(stars.trim());
}