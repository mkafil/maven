<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $service = $_POST['services'];

  $to = "info@mavenand.ae";
  $subject = "New Service Request";
  $message = "New Requested in google sheet kindly check google sheet for: $service";
  $headers = "From: yourwebsite@mavenand.ae";

  mail($to, $subject, $message, $headers);
}
?>