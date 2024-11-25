// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
let sentence = 'This movie is not so bad !'

// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
const wordNot = 'not'

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
const wordBad = 'bad'


// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (sentence.includes(wordNot) && sentence.includes(wordBad)){
    if (sentence.indexOf(wordNot) < sentence.indexOf(wordBad)){
        let new_sentece = sentence.split(" ");
        let not_remover = new_sentece.indexOf(wordNot);
        let bad_remover = new_sentece.indexOf(wordBad);

        // i still don't understand how this works
        new_sentece.splice(not_remover, bad_remover - not_remover + 1, "good");
        new_sentece = new_sentece.join(" ")
        console.log(new_sentece);
    }
    else {
        console.log(sentence);
    }
}
else {
    console.log(sentence);
}
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
// Example:

//   Your string is : 'This dinner is not that bad ! You cook well', 
//   --> the result is : 'This dinner is good ! You cook well'

//   Your string is : 'This movie is not so bad !' 
//   --> the result is : 'This movie is good !'

//   Your string is : 'This dinner is bad !' 
//   --> the result is : 'This dinner is bad !'
