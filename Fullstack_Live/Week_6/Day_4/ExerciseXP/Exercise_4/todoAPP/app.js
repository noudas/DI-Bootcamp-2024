// 🌟 Exercise 4: Todo List using ES6 module syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.
import TodoList from "./todo.js";

// Create an instance of the TodoList class.
const myTodoList = new TodoList();
myTodoList.addTask("Buy groceries", "10:00 AM");
myTodoList.addTask("Attend meeting", "2:00 PM");
myTodoList.listTasks();
myTodoList.markComplete(0);
myTodoList.listTasks();


// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.