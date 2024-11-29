const tasks = [];
let formDOMmodule = document.querySelector("form");

// Create a function called addTask(). As soon as the user clicks on the button:
function addTask() {
    let inputvalue = document.getElementById("todo");
    const value = inputvalue.value.trim();
    // Check that the input is not empty
    if (!isEmpty(value)) {
        // Then add it to the array (ie. add the text of the task)
        tasks.push({ task_id: tasks.length, text: value, done: false });
        inputvalue.value = '';
        let warning = document.getElementById("warning");
        warning.textContent = '';
    } else {
        let warning = document.getElementById("warning");
        warning.textContent = `Write something!`;
        warning.style.color = 'red';
    }
}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0 || val == '') ? true : false;
}

// Add tasks to the DOM
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
        checkbox.checked = tasks[i].done; // Reflect task's done status
        checkbox.addEventListener("change", () => doneTask(i, checkbox));
        checkboxCell.appendChild(checkbox);

        // Task label cell
        let taskCell = document.createElement("td");
        let label = document.createElement("label");
        label.setAttribute("for", `task_checkbox_${i}`);
        label.textContent = tasks[i].text;
        if (tasks[i].done) {
            label.style.color = "darkgreen";
            label.style.textDecoration = "line-through";
        }
        taskCell.appendChild(label);

        // Delete button cell
        let deleteCell = document.createElement("td");
        let buttonDelete = document.createElement("button");
        buttonDelete.classList.add("delete-task");
        buttonDelete.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'; // Font Awesome "X"
        buttonDelete.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this task?")) {
                tasks.splice(i, 1);
                createTasktoList();
            }
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

// Function to handle task completion
function doneTask(index, checkbox) {
    tasks[index].done = checkbox.checked; // Toggle done status in tasks array
    createTasktoList(); // Refresh the task list to update styles
}

formDOMmodule.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
    createTasktoList();
});

console.log(formDOMmodule);
