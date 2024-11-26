// Exercise 1 : Find the numbers divisible by 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum


function displayNumbersDivisible(divisor) {
    let numbers = []
    for(let i = 0; i <= 500; i++){
        numbers.push(i);
    }

    let divisible = []
    let sum = 0

    for(num in numbers){
        if(numbers[num] % divisor == 0){
            divisible.push(numbers[num])
            sum += numbers[num]
        }
    }

    return [divisible, sum]
}

const result = displayNumbersDivisible(23);
console.log(result[0]);
console.log(result[1]);





// 🌟 Exercise 2 : Shopping List
// Instructions

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
shoppingList = ["banana","orange","apple"]

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
function myBill() {
    let payment = 0
    // The item must be in stock. (Hint : check out if .. in)
    for(item in shoppingList){
        let fruit = shoppingList[item]
        // If the item is in stock find out the price in the prices object.=
        if (stock[fruit] > 0){
            payment += prices[fruit];
            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[fruit] -= 1;
        }
    }
    return payment
}

// Call the myBill() function.
console.log(myBill())
console.log(stock);



// Exercise 3 : What’s in my wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange) {
    let moneys = 0
    for(let i = 0; i < amountOfChange.length; i++){
        switch (i) {
            case 0:
                moneys += (amountOfChange[i] * 0.25);
                break;

            case 1:
                moneys += (amountOfChange[i] * 0.10);
                break;

            case 2:
                moneys += (amountOfChange[i] * 0.05);
                break;

            case 3:
                moneys += (amountOfChange[i] * 0.01);
                break;
        }
    }

    if(itemPrice > moneys){
        return false
    } else {
        return true
    }
}

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), 
// the function should return true

// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

console.log(changeEnough(4.25, [25, 20, 5, 0]))
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

console.log(changeEnough(14.11, [2,100,0,0])) // => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true





// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost() {
    let nights = prompt("How many nights are you staying in our amazing hotel motel?")
    while (!nights || isNaN(nights) || nights <= 0){
        nights = prompt("How many nights are you staying in our amazing hotel motel?")
    }
    price_total_nights = parseInt(nights) * 140;
    return price_total_nights;
}

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost() {
    let destination = prompt("Where are you going?");
    while (!destination || !isNaN(destination)) {
        destination = prompt("Please enter a valid destination (letters only):");
    }

    let cost;
    if (destination.toLowerCase() === "london") {
        cost = 183;
    } else if (destination.toLowerCase() === "paris") {
        cost = 220;
    } else {
        cost = 300;
    }

    return cost;
}


// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(){
    let days = prompt("How many days would you like to rent the car?")
    while (!days || isNaN(days) || days <= 0) {
        days = prompt("Please enter a valid number of days:");
    }

    days = parseInt(days);
    
    let price_total = 40 * days;
    
    if (days > 10) {
        price_total *= 0.95;
    }

    return price_total
}


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 
// 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, 
// only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
function totalVacationCost() {
    plane_cost = planeRideCost()
    car_cost = rentalCarCost()
    hotel_cost = hotelCost()

    return `The car cost: ${car_cost}, the hotel cost: ${hotel_cost}, the plane tickets cost: ${plane_cost}.`
}

//console.log(totalVacationCost())

// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
let divDOMmodule = document.getElementById('container')
console.log(divDOMmodule);

// Change the name “Pete” to “Richard”.
let ilDOMmodule = document.body.children[1].firstElementChild.nextElementSibling;
console.log(ilDOMmodule);
ilDOMmodule.textContent = 'Richard';

// Delete the second <li> of the second <ul>.
let ilDOMmodule2 = document.body.children[2].firstElementChild.nextElementSibling;
ilDOMmodule2.remove()

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
let uls = document.getElementsByTagName("ul");
for(let ul of uls){
    ul.firstElementChild.textContent = "Jonathan";
}


// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
for(let ul of uls){
    ul.classList.add('student_list')
}

uls[0].classList.add('university','attendance')


// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
divDOMmodule.style.backgroundColor = "lightblue"
divDOMmodule.style.padding = "100px"

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let ilDOMmodule3 = document.body.children[2].firstElementChild.nextElementSibling;
ilDOMmodule3.style.display = "none";

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
ilDOMmodule.style.border = "1px solid"
// Change the font size of the whole body.
document.body.style.fontFamily = "Helvetica"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (divDOMmodule.style.backgroundColor == "lightblue"){
    alert(`Hello ${uls[0].firstElementChild.textContent} and ${uls[1].firstElementChild.textContent}`)
    }



// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
// Step 1: Create an array of books with the required properties.
const allBooks = [
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        image: "",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "",
        alreadyRead: false
    }
];

// Step 2: Access the section element where the books will be rendered.
const listBooksSection = document.querySelector('.listBooks');

// Step 3: Loop through each book and create the div element for each book.
allBooks.forEach(book => {
    // Create a div element for each book
    let bookDiv = document.createElement('div');
    
    // If the book is already read, change the text color to red.
    if (book.alreadyRead) {
        bookDiv.style.color = 'red';
    }

    // Create the content for the book's details
    bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <img src="${book.image}" alt="${book.title}" width="100px">
    `;

    // Append the div to the section
    listBooksSection.appendChild(bookDiv);
});
