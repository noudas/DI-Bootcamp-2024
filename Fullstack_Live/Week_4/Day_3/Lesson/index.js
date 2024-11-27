function insertRow() {
    let table = document.getElementById('sampleTable');

    let size = table.rows.length + 1;
    
    // Insert a new row a the end of the tanble (-1 = the last index)
    let newRow = table.insertRow(-1);

    // Insert cell into the new rows
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Insert text into the new cells
    cell1.textContent = `Row${size} cell1`;
    cell2.textContent = `Row${size} cell2`;
}

let x = document.getElementById("btn")
let y = document.getElementById("btn1")

y.addEventListener("click", RespondClick);
y.addEventListener("mouseover", RespondMouseOver);

x.addEventListener("click", RespondClick); 
x.addEventListener("mouseover", RespondMouseOver); 
x.addEventListener("mouseout", RespondMouseOut); 

function RespondClick() { 
    alert("Button Clicked")
} 

function RespondMouseOver() { 
    alert("My mouse is over the btn")
} 

function RespondMouseOut() { 
    alert("My mouse is out of the btn")
}     
