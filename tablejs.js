console.log("in func");

function buildTable() {
    addLineToHTMLTable("Himanshu","Singh");
    addLineToHTMLTable("Ram","Singh");
    addLineToHTMLTable("Shyam","Singh");
}

//Add a line to the HTML Table
function addLineToHTMLTable(firstName,lastName){
    //Get the body of the table using the selector API
    var tableBody = document.querySelector("#tableContactBody");

    // Add a new row at the end of the table
    var newRow = tableBody.insertRow();

    // add new cells to the row
    var firstNameCell = newRow.insertCell();
    firstNameCell.innerHTML = firstName;

    var lastNameCell = newRow.insertCell();
    lastNameCell.innerHTML = lastName ;
}