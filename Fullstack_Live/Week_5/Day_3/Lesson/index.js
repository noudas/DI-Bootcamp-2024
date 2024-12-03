// Use the methods above to :
// 
// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

console.log(`The x# key is: ${Object.keys(myObj).length} The x# value is : ${Object.values(myObj).length}`);


/// Analyse this code before executing it. What will be the output ?

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);


// Analyse the code below. Display the type of each rabbit and make them speak

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("I am the terminator")
blackRabbit.speak("KILL JOHN CONNER")