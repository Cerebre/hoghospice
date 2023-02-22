<?php
// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$first_name = mysqli_real_escape_string($conn, $_POST['firstname']);
$first_name = mysqli_real_escape_string($conn, $_POST['lastname']);
$gender = mysqli_real_escape_string($conn, $_POST['gender']);
$phone = mysqli_real_escape_string($conn, $_POST['phone_numberl']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

// Insert the form data into the database
$sql = "INSERT INTO form_data (firstname, lastname, gender, phone_number, email, message) VALUES ('$first_name', '$last_name', '$gender', '$phone', '$email', '$message')";
if ($conn->query($sql) === FALSE) {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Send email to admin with form data
$to = "mc2frase@gmail.com";
$subject = "New Volunteer submission";
$message = "Name: $name\nEmail: $email";
$headers = "From: $email";
mail($to, $subject, $message, $headers);

// Send congratulations email to user
$to = $email;
$subject = "Congratulations!";
$message = "Dear $name,\n\nCongratulations on submitting the form! We will get back to you soon.\n\nBest regards,\nThe Team";
$headers = "From: mc2frase@gmail.com";
mail($to, $subject, $message, $headers);

// Display feedback message using popup
if ($conn->query($sql) === TRUE && mail($to, $subject, $message, $headers)) {
  echo '<script>alert("Form submitted successfully!");</script>';
} else {
  echo '<script>alert("Form submission failed!");</script>';
}

// Close the database connection
$conn->close();
?>
