// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function helloworld() {
    setTimeout(function() {
        alert("Hello World!");
    },2000);
    
}
// helloworld()

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function paragraphadder() {
    setTimeout(function () {
        let divDOMmodule = document.getElementById("container")
        let p = document.createElement("p")
        p.textContent = "Hello World"
        divDOMmodule.appendChild(p)
    },2000)
}
// paragraphadder()

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.


function paragraphAdder2() {
    // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
    let paragraphCount = 0;
    
    let intervalID = setInterval(function () {
        let divDOMmodule = document.getElementById("container");
        let p = document.createElement("p");
        p.textContent = "Hello World";
        divDOMmodule.appendChild(p);
        
        // as soon as there will be 5 paragraphs inside the <div id="container">.
        paragraphCount++;

        if (paragraphCount === 5) {
            clearInterval(intervalID);
        }
    }, 2000);
}

let btn = document.getElementById("clear");
btn.setAttribute("onclick",function(){
    clearInterval(intervalId);
});


// Call the function to start adding paragraphs
paragraphAdder2();

