// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad.
// My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

function ageCalculator(myAge) {
  const mum = myAge * 2;
  const dad = mum * 1.2;

  console.log(`Mum is ${mum}`);
  console.log(`Dad is ${dad}`);
}

ageCalculator(10);
