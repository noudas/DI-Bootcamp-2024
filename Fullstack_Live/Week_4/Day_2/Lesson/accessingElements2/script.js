// For each of the questions, find 2 WAYS to access :

// 1. The div node

// 2. The ul nodes, and render all of it's children one by one

// 3. The first li of each ul

// div

const divNode1 = document.getElementById('container');
const divNode2 = document.querySelector('div#container');

// ul elements
const ulNodes1 = document.getElementsByClassName('list'); // returns an array
for (let ul of ulNodes1) {
  for (let li of ul.children) {
    console.log(li.textContent);
  }
}

const ulNodes2 = document.getElementsByTagName('ul');
for (let ul of ulNodes2) {
  for (let li of ul.children) {
    console.log(li.textContent);
  }
}

// li of the ul
const firstLiOfEachUl1 = document.querySelectorAll('ul.list > li:first-child'); // returns an array
for (const li of firstLiOfEachUl1) {
  console.log(li.textContent);
}

const ulNodes3 = document.getElementsByTagName('ul'); // returns an array
for (let ul of ulNodes3) {
  const firstLi = ul.getElementsByTagName('li')[0];
  console.log(firstLi.textContent);
}
