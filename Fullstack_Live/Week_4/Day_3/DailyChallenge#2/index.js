// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

document.getElementById("Powerofletters").addEventListener("input", function(event){
    const input = event.target;
    const errorMessage = document.getElementById("errorMessage");
    
    // Hint : Check out keycodes in Javascript or Regular Expressions
    const letters = input.value.replace(/[^a-zA-Z]/g, "");

    if(input.value != letters) {
        errorMessage.textContent = "Only letters are allowed.";
    } else {
        errorMessage.textContent = "";
    }

    input.value = letters;
});


