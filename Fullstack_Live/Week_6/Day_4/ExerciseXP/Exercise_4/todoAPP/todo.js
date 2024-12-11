// In todo.js, define an ES6 module that exports a TodoList class.
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(text, time) {
        const task = { text, time, done: false };
        this.tasks.push(task);
        console.log(`Task added: "${text}" at ${time}`);
    }

    markComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].done = true;
            console.log(`Task "${this.tasks[index].text}" marked as complete.`);
        } else {
            console.log("Invalid task index.");
        }
    }

    // I asked chatgopt to add emotes... I liked it!
    listTasks() {
        console.log("Todo List:");
        this.tasks.forEach((task, index) => {
            const status = task.done ? "✔" : "✖";
            console.log(`${index + 1}. [${status}] ${task.text} (Time: ${task.time})`);
        });
    }
}

export default TodoList;