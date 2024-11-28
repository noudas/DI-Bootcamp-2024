// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];




const tasks = [];
let formDOMmodule = document.querySelector("form");

// Create a function called addTask(). As soon as the user clicks on the button:
function addTask() {
    let inputvalue = document.getElementById("todo");
    const value = inputvalue.value.trim();
    // check that the input is not empty,
    if (!isEmpty(value)) {
        // then add it to the array (ie. add the text of the task)
        tasks.push(value);
        inputvalue.value = '';
        let warning = document.getElementById("warning");
        warning.textContent = '';
    } else {
        let warning = document.getElementById("warning");
        warning.textContent = `Write something!`;
        warning.style.color = 'red'
    }
}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0 || val == '') ? true : false;
}

// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
function createTasktoList() {
    let listTasks = document.getElementsByClassName("listTasks")[0];
    listTasks.innerHTML = ""; // Clear the existing table

    // Create a table element
    let table = document.createElement("table");
    table.classList.add("task-table");

    // Add a header row (optional)
    let headerRow = document.createElement("tr");
    let headerCheckbox = document.createElement("th");
    let headerTask = document.createElement("th");
    let headerDelete = document.createElement("th");

    headerCheckbox.textContent = "Done";
    headerTask.textContent = "Task";
    headerDelete.textContent = "Delete";

    headerRow.appendChild(headerCheckbox);
    headerRow.appendChild(headerTask);
    headerRow.appendChild(headerDelete);
    table.appendChild(headerRow);

    // Create table rows for each task
    for (let i = 0; i < tasks.length; i++) {
        let row = document.createElement("tr");

        // Checkbox cell
        let checkboxCell = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task_checkbox_${i}`;
        checkbox.classList.add("task-checkbox");
        checkboxCell.appendChild(checkbox);

        // Task label cell
        let taskCell = document.createElement("td");
        let label = document.createElement("label");
        label.setAttribute("for", `task_checkbox_${i}`);
        label.textContent = tasks[i];
        taskCell.appendChild(label);

        // Delete button cell
        let deleteCell = document.createElement("td");
        let buttonDelete = document.createElement("button");
        buttonDelete.classList.add("delete-task");
        buttonDelete.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'; // Font Awesome "X"
        buttonDelete.addEventListener("click", function () {
            tasks.splice(i, 1); // Remove the task from the array
            createTasktoList(); // Re-render the table
        });
        deleteCell.appendChild(buttonDelete);

        // Append cells to the row
        row.appendChild(checkboxCell);
        row.appendChild(taskCell);
        row.appendChild(deleteCell);

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the table to the container
    listTasks.appendChild(table);
}


formDOMmodule.addEventListener("submit",function(event){
    event.preventDefault();
    addTask();
    console.log(tasks);
    createTasktoList()

})

console.log(formDOMmodule);
// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, 
// and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.