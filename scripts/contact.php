<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
  $first_name = $_POST['firstname'];
  $last_name = $_POST['lastname'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $message = $_POST['message'];
    
    // Validate form data
    if(empty($first_name) || empty($last_name) || empty($phone) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill all fields!');window.location.href='../contact.html';</script>";
        exit();
    }
    
    // Send email
    $to = "admin@hog.cerebremediahosting.xyz"; // Replace with your email
    $subject = "Volunteer Indication from $first_name";
    $body = "First_Name: $first_name\nLast_Name: $last_name\nPhone: $phone\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    if(mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you for your feedback! An email has been sent to you');window.location.href='../contact.html';</script>";
        
        // Send congratulations email to user
        $to = $email;
        $subject = "Heart Of Gold Team: We've got your message";
        $body = "Dear $first_name,\n\nThank you for submitting your feedback. A representative at Heart of Gold Children's Hospice would reach out to you shortly.\n\nBest regards,\nThe Team";
        $headers = "From: admin@hog.cerebremediahosting.xyz"; // Replace with your email
        
        mail($to, $subject, $body, $headers);
    } else {
        echo "<script>alert('Oops! Something went wrong. Please try again later.');window.location.href='../contact.html';</script>";
    }
}
?>