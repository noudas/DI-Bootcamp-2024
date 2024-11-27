// Retrieve the form and console.log it.
let formDOMmodule = document.querySelector("form")
console.log(formDOMmodule)

// Retrieve the inputs by their id and console.log them.
let inputDOMmodule1 = document.getElementById("fname")
let inputDOMmodule2 = document.getElementById("lname")

console.log(inputDOMmodule1)
console.log(inputDOMmodule2)

// Retrieve the inputs by their name attribute and console.log them.
let inputAttributeDOMmodule1 = document.querySelector("input[name='firstname']");
let inputAttributeDOMmodule2 = document.querySelector("input[name='lastname']");

console.log(inputAttributeDOMmodule1);
console.log(inputAttributeDOMmodule2);


// When the user submits the form (ie. submit event listener)
let submitDOMmodule = document.getElementById("submit")

// use event.preventDefault(), why ?
// Prevent site refreshing after sending
formDOMmodule.addEventListener("submit", function (event) {
    event.preventDefault();
    // get the values of the input tags,
    let value1 = inputDOMmodule1.value
    let value2 = inputDOMmodule2.value

    // make sure that they are not empty,
    console.log(value1);
    console.log(value2);
    

    let ul = document.getElementsByClassName("usersAnswer")[0];
    
    // create an li per input value,
    let li1 = document.createElement("li");
    li1.textContent = `${value1}: first name of the user`;
    let li2 = document.createElement("li");
    li2.textContent = `${value2}: first name of the user`;
    
    // then append them to a the <ul class="usersAnswer"></ul>, below the form.
    ul.appendChild(li1)
    ul.appendChild(li2)


    console.log("Form submitted");
});

    // The output should be :
    
    // <ul class="usersAnswer">
    //     <li>first name of the user</li>
    //     <li>last name of the user</li>
    // </ul>
