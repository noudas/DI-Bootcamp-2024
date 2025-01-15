// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// Defining types for list items using TypeScript.
// Creating a generic List component in React to display different types of items.
// Using TypeScript generics to customize how each item in a list is rendered.
// Managing state of a book list using React’s useState hook.
// Adding new items to the list and handling state updates.


// Description
// You will build a Book List application using TypeScript and React. 
// The goal is to create a generic List component that can handle various item types (e.g., books, movies, etc.) while allowing customization of the rendering logic. 
// You’ll use TypeScript generics and the useState hook to manage the book list’s state and let users dynamically add new books.



// Explanation
// Book Type - OK
// Define the Book type, which includes an id, a title, and an author, specifying the structure for each book item.

// Generic List Component
// Create a reusable, generic List component that accepts an array of items and a renderItem function. 
// This allows you to decide exactly how each book is displayed.

// Main BookApp Component
// Use the useState hook in BookApp to manage a list of books. Prepopulate it with a few entries, and let the list grow by adding new books.

// Adding a New Book
// Implement a function addBook that generates a new book object (with a unique id) and appends it to the state.

// Rendering the App
// Use the generic List component to display the list of books. The renderItem function determines how each book is presented.

// By focusing on TypeScript generics and React components, this challenge demonstrates how to write flexible code that can easily adapt to different data structures. The final result is a book list that you can extend or customize as needed.

import './App.css'

function App() {

  return (
    <>

    </>
  )
}

export default App
