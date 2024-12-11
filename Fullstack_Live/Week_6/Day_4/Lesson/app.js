// const slugify = require("slugify")

// console.log(slugify("My anaconda don`t want","123"));

/*
 * info.js -> module with a function getUsers
 * getUsers return the users array from this api
 * https://jsonplaceholder.typicode.com/users
 *
 * in main.js - get the array and log
 *
 * use es6 module
 */

const {getUser} = require("./modules/info.js")

getUser()
