<?php
// Read attendance data from CSV file
function readAttendanceData() {
    $attendanceData = [];

    // Open the CSV file for reading
    if (($handle = fopen("attendance.csv", "r")) !== FALSE) {
        // Read each row from the CSV file
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            // Add the row data to the attendance data array
            $attendanceData[] = $data;
        }
        fclose($handle);
    }

    return $attendanceData;
}

// Send attendance data as JSON response
echo json_encode(readAttendanceData());
?>
