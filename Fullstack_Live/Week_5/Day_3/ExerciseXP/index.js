// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output? 

// This is an object
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// The const is an object deconstruction, it will get person object and get the variables inside of the name, location, country, city, coordinates, lat, lng

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    const {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`);
    
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


// 🌟 Exercise 3: User & id
// Instructions
// Using this object 

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const users = { user1: 18273, 
                user2: 92833, 
                user3: 90315 
            }
const {user1, user2, user3} = users;
const userArray = [[Object.keys(users)[0],user1],[Object.keys(users)[1],user2],[Object.keys(users)[2],user3]]
console.log(userArray);


// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const userArray2 = [[Object.keys(users)[0],user1 * 2],[Object.keys(users)[1],user2 * 2],[Object.keys(users)[2],user3 * 2]]
console.log(userArray2);


// Exercise 4 : Person class
// Instructions
// Analyze the code below. What will be the output?
// class Person {  
//   constructor(name) {
//     this.name = name;
//   }
// }
// Creates an Person Class
// Assigns attributes to it
// makes name as its attribute


// const member = new Person('John');
// Assigns John to the name attribute

// console.log(typeof member);
// It will return object



// 🌟 Exercise 5 : Dog class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
// It will inherit the Dog class, but it will not inheric te name attribute since it is missinbg the super()
// It will throw an error because the super()



//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
// It will inherit the Dog class properly


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// It will inherit the Dog class but it will not use the name attribute
// It will throw an error because name is not defined anywhere in the constructor


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };
// It will inherit the Dog class but it will not use inherit name attribute, it will create a name attribute for itself
// It will throw an error because super() is not called before using this


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] - False since they are different areas of the memory
// {} === {} - False since they are different areas of the memory


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };  // Obj1 = { number: 5 }     - Creates the Object - Creates new memory state
const object2 = object1;        // Obj2 = { number: 5 }     - Clones Obj1 - sharing the same memory state
const object3 = object2;        // Obj3 = { number: 5 }     - Clones Obj2 -  sharing the same memory state as Obj 1
const object4 = { number: 5};   // Obj4 = { number: 5 }     - Creates the Object - Creates new memory state
// If object1 is changed, 2 and 3 will be changed, object4 will remain the same


object1.number = 4;
console.log(object2.number) // Since they share the same memory reference as object1 it will change to 4
console.log(object3.number) // Since they share the same memory reference as object1 it will change to 4
console.log(object4.number) // Object4 will remain the same


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(name,type,color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name,type,color){
        super(name,type,color);

    };

    sound(noise){
        return `I ${this.name} AM A ${this.type}, A COLORFUL ${this.color}, AND I MAKE THE ${noise} SOUND! FEAR ME! AND FEEL MY WRATH!`
    };
};


// Create a farmerCow object that is an instance of the class Mammal. 
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
class farmerCow extends Mammal{
    constructor(name,color){
        super(name,"cow",color);
    };

    sound(){
        return super.sound("Moooo")
    };
};

const lily = new farmerCow("Lily", "brown and white");

console.log(lily.sound());
