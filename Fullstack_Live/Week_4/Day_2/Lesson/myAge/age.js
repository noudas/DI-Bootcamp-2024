// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function ageCalc(myAge) {
  const mumAge = myAge * 2;
  const dadAge = mumAge * 1.2;
  console.log(`I am ${myAge} years old`);
  console.log(`Mum is ${mumAge} years old`);
  console.log(`Dad is ${dadAge} years old`);
}

ageCalc(23);
