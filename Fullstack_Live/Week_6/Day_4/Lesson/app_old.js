// Modules imports
// const { hello , a } = require("./modules/main.js")
// const { minus, divide, multi, plus, mods } = require("./math/math.js")
import { minus, divide, multi, mods } from './math/math.js'
import bruxaria from './math/math.js'; // When you export default it can be called in any shape or form



// Main module
// const obj = require("./modules/main.js")

// console.log(obj.hello("Josefino Pontifacio"));
// console.log(a);
// console.log(hello("Jonicreubesson"));
// console.log(a);


// Math module
console.log(minus(10,9));
console.log(bruxaria(10,9));
console.log(divide(15,3));
console.log(multi(1,1));
console.log(mods(2,2));


try {
    console.log(minus(10,10));
} catch (error) {
    console.error(`An error has occured ${error}`)
}