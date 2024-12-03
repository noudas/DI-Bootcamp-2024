// Exercise 1 : Bird class
// Instructions
// Analyze the code below, what will be the output?
// "I'm pink. 🌸"
// "I'm a bird. 🦢"
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
