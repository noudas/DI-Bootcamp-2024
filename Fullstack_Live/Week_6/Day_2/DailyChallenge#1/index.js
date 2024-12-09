// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
let api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
const gifForm = document.getElementById('gifForm');
const gifResults = document.getElementById('gifResults');

async function fetchGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${api_key}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        const gifUrl = data.data.images.fixed_height.url; // Extract the GIF URL

        appendGif(gifUrl); // Append the GIF to the page
    } catch (error) {
        console.error('Error fetching GIF:', error);
    }
}

// The gif should be appended with a DELETE button next to it. 
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

function appendGif(gifUrl) {
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');

    const gifImage = document.createElement('img');
    gifImage.src = gifUrl;
    gifImage.alt = 'GIF';
    gifContainer.appendChild(gifImage);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => gifContainer.remove());
    gifContainer.appendChild(deleteButton);

    gifResults.appendChild(gifContainer);
}

// Allow the user to delete a specific gif by clicking the DELETE button.

gifForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const category = document.getElementById('category').value.trim();
    if (category) {
        fetchGif(category);
        gifForm.reset();
    } else {
        alert('Please enter a category to search for GIFs.');
    }
});

// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'DELETE ALL';
deleteAllButton.addEventListener('click', () => {
    gifResults.innerHTML = '';
});
gifResults.appendChild(deleteAllButton);