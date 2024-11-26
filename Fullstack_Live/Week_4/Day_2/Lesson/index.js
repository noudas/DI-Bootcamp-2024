// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function calculateParentsAge(myAge) {
    const mumAge = myAge * 2;
    const dadAge = mumAge * 1.2;

    // Log the results
    console.log(`My age: ${myAge}`);
    console.log(`My mum's age: ${mumAge}`);
    console.log(`My dad's age: ${dadAge}`);
}

calculateParentsAge(25);



// . Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)
function agetakerv2(myage2) {
    let mymom = myage2 * 2
    return mymom
}

// 4. Call the function
let something = agetakerv2(12)

// 5. In the global scope, console.log the result of the function
console.log(something);
