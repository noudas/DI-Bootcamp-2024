// Array of robots with basic information (id, name, username, email, image)
const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
];

let myInterval;
let clicked = false; // Keeps track of whether the search bar is clicked or not
let audio = document.getElementById("music")
let robotfriends = document.getElementById("robotfriends"); // Reference to the element where robot cards will be appended
let searchBar = document.getElementById("searchBar"); // Reference to the search bar input

/**
* Creates robot cards dynamically and adds them to the page.
* Each card displays a robot's image, name, and email.
*/
function robotCardCreator() {
// Iterate through the robots array to create a card for each robot
for (let robot of robots) {
  let card = document.createElement("div");
  card.className = `robotCard id_${robot.id}`; // Assign a unique class for each robot card

  // Create and append an image element for the robot's avatar
  let img = document.createElement("img");
  img.src = robot.image;
  img.alt = `${robot.name}'s avatar`;

  // Create and append a name element
  let name = document.createElement("h2");
  name.textContent = robot.name;

  // Create and append an email element
  let email = document.createElement("p");
  email.textContent = robot.email;

  // Append the img, name, and email to the card
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(email);

  // Append the card to the robotfriends section on the page
  robotfriends.appendChild(card);
}
};

// Initialize the robot card creation when the window is loaded
window.onload = robotCardCreator();


/**
* Filters the robots array by name based on the search query.
* param {string} query - The search query entered by the user.
* returns {Array} - An array of robots whose names match the query (case-insensitive).
*/
function searchRobit(query) {
return robots.filter((robot) => {
    return robot.name.toLowerCase().includes(query.toLowerCase());
    
  // Autoplay the audio on page load
});
};

/**
* Detects clicks inside the search bar and starts filtering the robots based on the search query.
* The function continuously updates the display of robot cards based on the query.
*/
searchBar.addEventListener("click", (event) => {
audio.play();
event.preventDefault(); // Prevent the default action of the click event

if (!clicked) { // Check if the search bar was not previously clicked
    clicked = true; // Mark that the search bar is clicked
    myInterval = setInterval(function () {
        let query = searchBar.value.toLowerCase(); // Get the search query in lowercase
        let queryArray = searchRobit(query); // Filter robots based on the query

        // Iterate through all robots and update their visibility
        robots.forEach((robot) => {
            let card = document.querySelector(`.robotCard.id_${robot.id}`); // Get the robot card by its class
            if (card) {
                // If the robot is in the filtered queryArray, display the card, else hide it
                if (queryArray.some((robit) => robit.id === robot.id)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }, 300); // Update every 300 milliseconds
}
});

/**
* Detects clicks outside the search bar to stop the filtering process.
* When clicked outside, it resets the clicked flag and stops the interval.
*/
document.addEventListener("click", (event) => {
  // Check if the click occurred outside the search bar
  if (!searchBar.contains(event.target)) {
      audio.pause();
      clicked = false; // Reset the clicked state
      clearInterval(myInterval); // Clear the interval that was updating the robot cards
  }
});
