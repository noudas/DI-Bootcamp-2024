const divNode1 = document.getElementById('container');
const divNode2 = document.querySelector('#container');

const ulNodes1 = document.getElementsByClassName('list');
// Loop through each ul element
for (let i = 0; i < ulNodes1.length; i++) {
  // Loop through each li child of the current ul
  for (let j = 0; j < ulNodes1[i].children.length; j++) {
    console.log(ulNodes1[i].children[j].textContent);
  }
}

const ulNodes2 = document.getElementsByTagName('ul');
// Loop through each ul element
for (let i = 0; i < ulNodes2.length; i++) {
  // Loop through each li child of the current ul
  for (let j = 0; j < ulNodes2[i].children.length; j++) {
    console.log(ulNodes2[i].children[j].textContent);
  }
}

const firstLi1 = document.querySelectorAll('ul.list > li:first-child');
for (let i = 0; i < firstLi1.length; i++) {
  console.log(firstLi1[i].textContent);
}

const ulNodes3 = document.getElementsByTagName('ul');
// Loop through each ul element
for (let i = 0; i < ulNodes3.length; i++) {
  // Access the first li child of the current ul
  const firstLi = ulNodes3[i].getElementsByTagName('li')[0];
  console.log(firstLi.textContent);
}
