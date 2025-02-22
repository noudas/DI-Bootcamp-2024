// Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// When the function is called without any arguments return a string where all words have been merged into a sentence.

// For example
// mergeWords('There')('is')('no')('spoon.')();
// should return 'There is no spoon.'
// Below is a verbose JavaScript solution, turn this into a currying function.

// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }

const mergeWords = (string) => (nextString) =>
    nextString === undefined
      ? string
      : mergeWords(string + ' ' + nextString);

console.log(mergeWords('There')('is')('no')('spoon.')());