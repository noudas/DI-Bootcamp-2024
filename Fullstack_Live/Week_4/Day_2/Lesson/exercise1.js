// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
const divDOMNode1 = document.body.firstElementChild;
const divDOMNode2 = document.body.children[0];

// 2. The ul DOM node?
const ulDOMNode1 = document.body.children[1];
const ulDOMNode2 = document.body.firstElementChild.nextElementSibling;

// 3. The second li (with Pete)?
const ilDOMNode1 = document.body.children[1].children[1];
const ilDOMNode2 = document.body.lastElementChild;

console.log(ilDOMNode1);
console.log(ilDOMNode2);