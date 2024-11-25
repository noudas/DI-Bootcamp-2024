const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
let names_sorted = names.sort()
console.log(names_sorted);

let secret_name = ''

for (let name in names_sorted){
    secret_name += names_sorted[name].charAt(0)
}
console.log(secret_name.toUpperCase());

// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”