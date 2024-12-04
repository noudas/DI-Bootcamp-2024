// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
  const form = document.getElementById('myForm');
  const jsonOutputDiv = document.getElementById('json-output');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;

    const formData = {
      name: name,
      lastName: lastName
    };

    const jsonString = JSON.stringify(formData, null, 2);
    jsonOutputDiv.textContent = jsonString;
  });
