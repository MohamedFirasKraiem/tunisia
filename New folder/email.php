<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mohamedfiraskraiem@gmail.com";
    $subject = "Website Contact Form: $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $body = "You have received a new message from your website contact form.\n\n".
            "Here are the details:\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>