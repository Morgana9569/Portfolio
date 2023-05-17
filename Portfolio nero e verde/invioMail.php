<?php
$destinatario = 'andrea.fabbricatore9569@gmail.com';
$email = $_POST['email'];
$oggetto = $_POST['oggetto'];
$corpo = $_POST['corpo'];
$nome = $_POST['nome'];

$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destinatario, $oggetto, $corpo, $headers);
?>
