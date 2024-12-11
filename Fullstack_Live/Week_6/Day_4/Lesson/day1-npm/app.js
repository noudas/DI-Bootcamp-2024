// const slugify = require('slugify');
import { getUsers } from "./info.js";

getUsers("https://jsonplaceholder.typicode.com/user")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  });

// console.log(slugify('my link to the article', '123'));

/**
 * info.js -> module with a function getUsers
 * getUsers return the users array from this api
 * https://jsonplaceholder.typicode.com/users
 *
 * in main.js - get the array and log
 *
 * use es6 module
 */
