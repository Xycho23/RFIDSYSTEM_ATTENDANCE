// Function to fetch and parse CSV data
function fetchAndParseCSV() {
    fetch('attendance.csv')
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');
            const tableBody = document.getElementById('memberTableBody');
            rows.forEach(row => {
                const rowData = row.split(',');
                const newRow = document.createElement('tr');
                rowData.forEach((cellData, index) => {
                    const newCell = document.createElement('td');
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = cellData.trim();
                    input.addEventListener('input', () => updateCellValue(newRow.rowIndex, index, input.value));
                    newCell.appendChild(input);
                    newRow.appendChild(newCell);
                });
                tableBody.appendChild(newRow);
            });
        })
        .catch(error => console.error('Error fetching CSV file:', error));

    // Get the logged-in user's information from the index login form
    const loggedInUser = document.getElementById('username').value; // Assuming your login form has an input field with the ID 'username'

    // Update the welcome message with the logged-in user's username
    document.getElementById('welcomeMessage').textContent = "Welcome, " + loggedInUser;
}

// Function to update cell value in the table and store changes
function updateCellValue(rowIndex, cellIndex, value) {
    const table = document.getElementById('memberTable');
    const cell = table.rows[rowIndex].cells[cellIndex];
    cell.textContent = value;
}

// Call the function to fetch and parse CSV when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchAndParseCSV);

function redirectToIndex() {
    window.location.href = 'index.html'; // Replace 'index.html' with the path to your index login form
}
