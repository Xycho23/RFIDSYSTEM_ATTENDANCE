<?php
// Define the CSV file name
$csvFileName = "new_added_member.csv";

// Function to save member data to CSV
function saveToCSV($data, $fileName) {
    $file = fopen($fileName, "a"); // Open the CSV file for appending
    fputcsv($file, $data); // Write the data to the file
    fclose($file); // Close the file
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve member data from the form
    $rfid = $_POST['rfid'];
    $lastName = $_POST['lastName'];
    $firstName = $_POST['firstName'];
    // Add other fields as needed

    // Create an array with member data
    $memberData = [$rfid, $lastName, $firstName /* Add other fields here */];

    // Save member data to CSV
    saveToCSV($memberData, $csvFileName);

    // Redirect back to the dashboard or display a success message
    header("Location: dashboard");
    exit;
}
?>