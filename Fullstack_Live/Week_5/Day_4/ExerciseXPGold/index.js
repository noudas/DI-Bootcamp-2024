// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data to a section tag, using the DOM.

const form = document.getElementById('formsubs');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    const formData = {
        name: first_name,
        lastName: last_name
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the second page
    window.location.href = 'second.html';
});


