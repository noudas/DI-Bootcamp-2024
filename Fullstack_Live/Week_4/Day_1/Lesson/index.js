`Create a structured HTML file linked to a JS file

1. Create these variables and give them values:

addressNumber
addressStreet
country
2. Write a variable named globalAddress, and concatenate inside, the variables:

addressNumber
addressStreet
country
In order to create a sentence
3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »`

let addressNumber = 1182;
let addressStreet = "Rua Conselheiro Brotero";
let country = "Brasil";

let globalAddress = ''+ addressStreet + ' '+ addressNumber + ' '+ country

console.log("I live at",globalAddress)



//1. Store your birth year in a variable.

//2. Store a future year in a variable.

//3. Calculate your possible ages for that year based on the stored values.

//4. Display : "I will be NN in YYYY", substituting the values.

let birthYear = 1998; // Birth year
let futureYear = 2024; // Target year

let possibleAge = futureYear - birthYear;

console.log("I will be", possibleAge, "in", futureYear);


// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

let pets = ['cat','dog','fish','rabbit','cow']

// 2. Display dog

console.log(pets[1])

// 3. Add to the array pets, the pet horse. Remove the pet rabbit
pets.push("horse")
pets.splice(3,1)

// 4. Display the array length
console.log(pets);



// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let user = {
    username: "Jondias",
    password: "anananananans"
}

// 2. Create an array which contains the object you have made above and name the array "database".

const database = [user]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [

    {   username: user.username,
        timeline: ['clicked','button pushed', 'submitted form']
    },

    {   username: 'Jojo',
        timeline: ['messaged','unsubscribed', 'submitted form']
    },

    {   username: 'Speedwagon',
        timeline: []
    }
]

console.log(newsfeed);
