// Write a JavaScript program to calculate the volume of a sphere.

let formDOMmodule = document.querySelector("form")
console.log(formDOMmodule);

let inputDOMmodule1 = document.getElementById("radius")
let inputDOMmodule2 = document.getElementById("volume")
inputDOMmodule2.disabled = true;


formDOMmodule.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let radius = inputDOMmodule1.value
    let pi = 3.14
    let volume =  (4/3) * pi * (radius**3)
    inputDOMmodule2.value = volume
});