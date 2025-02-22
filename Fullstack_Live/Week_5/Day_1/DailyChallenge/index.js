let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Creatz an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. 
// Use the forEach method.
const displayGroceries = (groceries) => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};
displayGroceries(groceries);


// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
const cloneGroceries = () => {
    let user = client;
    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    client = "Betty";
    console.log(user);

    let shopping = groceries; 

    shopping.totalPrice = "35$";
    console.log(groceries.totalPrice);

    shopping.other.paid = false;
    console.log(groceries.other.paid);
};
// The variable created inside the function will duplicate the value of client, 
// but it will be independent of client. Changing client to "Betty" does not affect user.


// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ?
// Why ?
// Change the value of the paid key to false. 
// Will we also see this modification in the shopping object ? Why ?

// Modifications made to shopping are also seen in the groceries object because objects in 
// JavaScript are passed by reference. 
// The shopping variable does not create a new object but instead references the same memory location as 
// groceries.




// Invoke the cloneGroceries function.