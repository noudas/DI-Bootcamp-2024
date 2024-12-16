// Exercise 1 : Giphy API #2
// Instructions
// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
let api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Create a program to fetch a gif. Make sure to check the status of the Response and to catch any occuring errors.
const url = "https://api.giphy.com/v1/gifs/search"

fetch(`${url}?q=hilarious&rating=g&api_key=${api_key}`)
    .then((response) =>{
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("This is an error",error);
    });


// Once the server sends back data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Example Output:



// output



// Exercise 2 : Analyze #2
// Instructions
// Analyse the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()


// Exercise 3 : Analyze #3
// Instructions
// Analyse the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)


// Exercise 4 : Modify fetch with Async/Await
// Instructions
// Using this code:

// const urls = [
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/posts",
//         "https://jsonplaceholder.typicode.com/albums"
//       ];

// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posta', posts);
//   console.log('albums', albums);
// }

// getData()
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Add a try catch block in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.
// Excepted Output:



// output



// Excepted Output:



// output