// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", 
// else you should display "You live in the Middle Age"

function date(year = new Date().getFullYear()) {
    return (year > 2000 ? "You are in the 21st century" : "You live in the Middle Age")
}

console.log(date());
