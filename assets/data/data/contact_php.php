<?php
header('Content-Type: application/json');
$name = $_POST['user-name'];
$email = $_POST['user-email'];
$message = $_POST['user-message'];

require("../PHPMailerAutoload.php");

$mail = new PHPMailer;

//$mail->IsSMTP();
$mail->SMTPDebug = 1;                                      // set mailer to use SMTP
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->SMTPSecure = "tls";
$mail->Host = "smtp.gmail.com";  // specify main and backup server
$mail->Port = 465;
$mail->Username = "noorszps@gmail.com";  // SMTP username
$mail->Password = "Noor193"; // SMTP password

$mail->From = "noorszps@gmail.com";
$mail->FromName = "Noor";
$mail->AddAddress("noorszps@gmail.com");

$mail->WordWrap = 500;                                 // set word wrap to 50 characters
$mail->IsHTML(true);                                  // set email format to HTML

$mail->Subject = "Contact query message";
$mail->Body    = "
  <html>
<head>
<title>Conatact Query</title>
</head>
<body>
<p>You got a cutomer query</p>
<table>
<tr>
<th>name</th>
<th>email</th>
<th>message</th>
<th>subject</th>
</tr>
<tr>
<td>".$name."</td>
<td>".$email."</td>
<td>".$message."</td>
<td>".$subject."</td>
</tr>
</table>
</body>
</html>
";
$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo $name;
    ?>