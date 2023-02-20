<?php

// Connect to your database
$host = 'localhost'; // replace with your database host
$username = 'cereuert_hogweb'; // replace with your database username
$password = 'rO]*Jfp$8wt%'; // replace with your database password
$dbname = 'cereuert_hogweb'; // replace with your database name

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$f_name = $_POST['firstname'];
$l_name = $_POST['lastname'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$phone_number = $_POST['phone-number'];
$message = $_POST['message']

// Insert the data into your database
$sql = "INSERT INTO hog_volunteer_form (firstname, lastname, email, gender, phone-number, message) VALUES ('$f_name', '$l_name', '$email', '$gender', '$phone-number', '$message',)";

if ($conn->query($sql) === TRUE) {
  // Return a success message as JSON
  echo json_encode(array('success' => true));
} else {
  // Return an error message as JSON
  echo json_encode(array('success' => false));
}

// Close the database connection
$conn->close();

?>
