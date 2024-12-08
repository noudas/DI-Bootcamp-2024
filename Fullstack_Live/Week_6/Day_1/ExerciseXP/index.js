// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if(num <= 10){
            resolve("Num is smaller than or equal to 10");
        } else {
            reject("Num is greater than 10");
        }
    })
}
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// //In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
function success() {
    return new Promise((resolve, reject) => {
        console.log("Starting the promise");
        setTimeout(() => {
            console.log("It took 4 seconds");
            resolve("success")
        }, 4000);
    })
}

success()
    .then(result => console.log(result))

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const promise1 = Promise.resolve(3)
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise2 = Promise.reject("Boo!")

promise1.then((value) => {
    console.log(value);
})

promise2.catch((error) => {
    console.log(error);
})
