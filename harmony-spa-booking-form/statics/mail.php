<?php
// Include Composer's autoloader'
// require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';
// require 'vendor/autoload.php';

if (isset($_POST["submit"])) {
    try {
        // Validate and sanitize user input
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars($_POST["name"]);
        $phone = htmlspecialchars($_POST["phone"]);
        $address = htmlspecialchars($_POST["address"]);
        $service= htmlspecialchars($_POST["service"]);
        $message = htmlspecialchars($_POST["message"]);
        $date = htmlspecialchars($_POST["date"]); 
        $time= htmlspecialchars($_POST["time"]);
        $meetingDate = $date . " " . $time;       
        $subject = "Booking Request for $service";
        // Server settings
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'pegasusrespond@gmail.com';
        $mail->Password = 'glwkbaffdisedctd';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('pegasusrespond@gmail.com', 'Twubahimana Herve');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Address:</strong> $address</p>
            <p><strong>Service:</strong> $service</p>
            <p><strong>Message:</strong> $message</p>
            <p><strong>Meeting Date:</strong> $meetingDate</p>
        ";
        

        // Send email
        $mail->send();

        // Send confirmation email to the sender
        $confirmationMail = new PHPMailer(true);
        $confirmationMail->isSMTP();
        $confirmationMail->Host = 'smtp.gmail.com';
        $confirmationMail->SMTPAuth = true;
        $confirmationMail->Username = 'pegasusrespond@gmail.com';
        $confirmationMail->Password = 'glwkbaffdisedctd';
        $confirmationMail->SMTPSecure = 'ssl';
        $confirmationMail->Port = 465;
        $confirmationMail->setFrom('pegasusrespond@gmail.com', 'Twubahimana Herve');
        $confirmationMail->addAddress($email);
        $getLocation = "Location:  harmony spa-rw, 24 KG 257 St, Kigali";
        $tel = '<a href="tel: +250785234933">tel: +250785234933</a>';
        
        $confirmationMail->isHTML(true);
        $confirmationMail->Subject = 'Confirmation Email';
        $confirmationMail->Body = "Dear". $name."!<br><br> This is a confirmation that your appointmtnt for ".$service. " has been successfully received.
        <br><br>Thank you for considering us for Harmonyspa services .<br><br>
        Below is your appointment information:<br><br>
        Name: $name<br>
        Email: $email<br>
        Phone: $phone<br>
        Date: $date<br>
        Time: $time<br>
        Service: $service<br>
        Message: $message<br>
        <br>"."<br><br>
        reach us at ".$tel." or visit us at our workplace".$getLocation."
        ";
       
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
       
        $confirmationMail->send();
        
        // Confirmation message (output escaping)
        echo "<script>alert('Message was sent successfully!');</script>";

        // Redirect
        echo "<script>document.location.href ='../html/booking.html';</script>";
    } catch (Exception $e) {
        echo $e->errorMessage();
    }
}
?>
