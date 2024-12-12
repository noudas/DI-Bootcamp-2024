// Create a data array to simulate a database. 
// Each item in the array should represent a blog post with properties like id, title, and content.
const blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        content: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from an enclosing scope, even after that scope has closed."
    },
    {
        id: 2,
        title: "A Guide to Node.js File System Module",
        content: "The Node.js `fs` module allows you to work with the file system on your computer. You can create, read, write, delete, and rename files with ease."
    },
    {
        id: 3,
        title: "CSS Grid vs Flexbox",
        content: "CSS Grid and Flexbox are two powerful layout systems in CSS. This post explores their differences and when to use each."
    },
    {
        id: 4,
        title: "What’s New in ES2024?",
        content: "Every year, JavaScript evolves with new features. This article covers the key updates in ES2024 and how they can improve your code."
    },
    {
        id: 5,
        title: "How to Get Started with Express.js",
        content: "Express.js is a web application framework for Node.js. Learn how to set up a basic server and handle routes in this beginner-friendly guide."
    }
];

module.exports = blogPosts;