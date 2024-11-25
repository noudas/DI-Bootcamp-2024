// Exercise 1 : Checking the BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

const person1 = {
    fullname: "Juanito Jones",
    mass: 90,
    height: 187,

    BMI() {
        return this.mass / (this.height / 100) ** 2;
    }
};

const person2 = {
    fullname: "Sarah Smith",
    mass: 70,
    height: 165,

    BMI() {
        return this.mass / (this.height / 100) ** 2;
    }
};

function BMI_comparing(person1, person2) {
    const bmi1 = person1.BMI();
    const bmi2 = person2.BMI();

    if (bmi1 > bmi2) {
        console.log(`${person1.fullname} has a higher BMI (${bmi1.toFixed(2)}) than ${person2.fullname} (${bmi2.toFixed(2)})`);
    } else if (bmi1 < bmi2) {
        console.log(`${person2.fullname} has a higher BMI (${bmi2.toFixed(2)}) than ${person1.fullname} (${bmi1.toFixed(2)})`);
    } else {
        console.log(`${person1.fullname} and ${person2.fullname} have the same BMI (${bmi1.toFixed(2)})`);
    }
}

// Call the function to compare
BMI_comparing(person1, person2);

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

function calculateAverage(gradesList) {
    let total = 0;

    for (let i = 0; i < gradesList.length; i++) {
        total += gradesList[i];
    }

    return total / gradesList.length;
}

function findAvg(gradesList) {
    const average = calculateAverage(gradesList);

    console.log(`The average grade is: ${average.toFixed(2)}`);

    if (average >= 65) {
        console.log("Congratulations! You passed.");
    } else {
        console.log("Unfortunately, you failed and must repeat the course.");
    }
}

const grades = [70, 80, 90, 60, 50];
findAvg(grades);
