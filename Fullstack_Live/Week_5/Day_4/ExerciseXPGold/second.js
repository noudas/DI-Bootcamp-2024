
window.onload = function() {
    const formvalues = document.getElementById('formvalues');

    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        const jsonString = JSON.stringify(formData, null, 2);
        formvalues.textContent = jsonString;
    } else {
        formvalues.textContent = "No data found.";
    }
};