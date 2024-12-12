/*
 * create a module userInfo.js that get users from this api - https://jsonplaceholder.typicode.com/users
 * create a server.js
 * GET - get al users
 * GET to search users with id in params
 * GET - to search a user with name case insensetive in query
 */

async function fetchUserInfo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users

    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

module.exports = { fetchUserInfo };