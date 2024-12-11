// const { hello } = require("./modules/main.js");
import { hello } from "./modules/main.cjs";
// const { multiply, divide } = require("./math/math.js");
import { multiply, divide, add } from "./math/math.js";
import zivuch from "./math/math.js";

// console.log(obj);
console.log(hello("Dan"));
// console.log(a);
console.log('zivuch',zivuch(2,2))

try {
  console.log(multiply(2, 5));
  console.log(divide(2, 5));

  console.log(add(2,5));
  // console.log(subtarct(2,5));
  console.log(divide(2, 0));
} catch (error) {
  console.log(error.message);
}

/**
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */
