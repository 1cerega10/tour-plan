<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

if  (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $title = " доп инфа о отеле";
        $body = "
                <h2>Запрос на дополнительную информацию о отеле</h2>
                <b>Name:</b> $name <br>
                <b>Phone:</b> $phone <br>
                <b>Еmail:</b> $email <br>
                <b>Message:</b> $message <br>

    ";}

if (!empty($_POST['email']))
{
$title = "Новая подписка на новости Best Tour Plan";
$body = "<b>Пользователь с Еmail:</b> $email <b>подписался на новостную рассылку Best Tour Plan</b>";}

if (!empty($_POST['name']) && !empty($_POST['phone']) && !empty($_POST['message'])) {
$title = "Новые обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Name:</b> $name

<b>Phone:</b> $phone

<b>Message:</b> $message

";}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'cerega22822@gmail.com'; // Логин на почте
    $mail->Password   = 'Zz37554512z'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('cerega22822@gmail.com', 'Сергей Руденко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('r-cergo@yandex.ru');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

$mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);