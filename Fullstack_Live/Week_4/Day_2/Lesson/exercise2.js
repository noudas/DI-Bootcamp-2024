// For each of the questions, find 2 WAYS to access :

// 1. The div node
const divDOMNode1 = document.getElementById("container");
const divDOMNode2 = document.querySelector("div#container")

// 2. The ul nodes, and render all of it's children one by one
const uls = document.getElementsByTagName("ul");
for(let ul of uls){
    for(li of ul){
        console.log(li.TextContent)
    }
}

// 3. The first li of each ul