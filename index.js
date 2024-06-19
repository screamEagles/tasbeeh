// add date, and export data as pdf
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("records");
let count = 0;

function increment() {
    count++;
    document.getElementById("count-el").textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("count-el").textContent = count;
    }
}

function resetTasbeeh() {
    count = 0;
    countEl.innerText = count;
}

function save() {
    let textField = document.getElementById("txt-field");
    let inputValue = textField.value.trim(); // Get input value and trim any leading/trailing whitespace

    if (count !== 0 && inputValue !== '') {
        // Create a new table row element
        let tr = document.createElement('tr');
        
        // Create a new table data cell for the dhikr name
        let tdDhikr = document.createElement('td');
        tdDhikr.textContent = inputValue;

        // Create a new table data cell for the count
        let tdCount = document.createElement('td');
        tdCount.textContent = count;

        // Create a new table data cell for the current date/time
        let tdDateTime = document.createElement('td');
        let now = new Date();
        tdDateTime.textContent = now.toLocaleString();

        // Append the cells to the row
        tr.appendChild(tdDhikr);
        tr.appendChild(tdCount);
        tr.appendChild(tdDateTime);

        // Append the row to the table body
        document.getElementById("saved-list").appendChild(tr);

        // Clear the input field
        textField.value = '';
        // Reset the count and update the display
        count = 0;
        document.getElementById("count-el").textContent = count;
    }
}

function downloadExcel() {
    let table = document.getElementById("saved-table");
    let tbody = table.querySelector("tbody");
    
    // Check if the tbody has any rows
    if (tbody.rows.length === 0) {
        alert("Please add some data before downloading.");
        return;
    }
    
    let workbook = XLSX.utils.table_to_book(table, {sheet: "Sheet1"});
    XLSX.writeFile(workbook, "tasbeeh_records.xlsx");
}

