// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to :

// 1. Get the value of the 2nd Option
// 2. Add a new option with the value 'Work' at the end of the select form
// 3. Add a new option with the value 'Primary School' at the beginning of the select form
// 4. Change 'College' as selected. Use the 3 properties we learned above
// 5. Add a button that alert the choice selected

// manipulate select
function modifySelect() {
  const selectElement = document.getElementById('school-type');

  // get 2nd Option
  const secondOptionValue = selectElement.options[1].value;
  console.log('Second Option Value:', secondOptionValue); // Outputs: "university"

  // add new option work
  const newOptionEnd = document.createElement('option');
  newOptionEnd.value = 'work';
  newOptionEnd.textContent = 'Work';
  selectElement.appendChild(newOptionEnd);

  // add a new option 'Primary School'
  const newOptionStart = document.createElement('option');
  newOptionStart.value = 'primaryschool';
  newOptionStart.textContent = 'Primary School';
  selectElement.insertBefore(newOptionStart, selectElement.firstChild);

  // change college

  // use selectedIndex
  selectElement.selectedIndex = 3; // Index of 'College' after adding 'Primary School' option

  // Method 2: Using `value` property
  // selectElement.value = 'college';

  // Method 3: Using `options` property and setting `selected` to true
  // selectElement.options[3].selected = true;

  // Function to alert the selected choice
  document
    .getElementById('alert-button')
    .addEventListener('click', function () {
      alert(
        'Selected Option: ' +
          selectElement.options[selectElement.selectedIndex].textContent
      );
    });
}

// Call the function to apply changes
modifySelect();
