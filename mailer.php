<?php

if($_POST) {
  $to = "sucorreo@aqui.com"; // your mail here
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $lastname = filter_var($_POST["lastname"], FILTER_SANITIZE_STRING);
  $city = filter_var($_POST["city"], FILTER_SANITIZE_STRING);
  $username = filter_var($_POST["username"], FILTER_SANITIZE_STRING);
  $bus = filter_var($_POST["bus"], FILTER_SANITIZE_STRING);
/*   $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $start = filter_var($_POST["start"], FILTER_SANITIZE_STRING);
  $end = filter_var($_POST["end"], FILTER_SANITIZE_STRING);
  $number = filter_var($_POST["number"], FILTER_SANITIZE_STRING);
  if($checkbox_nub !== 0){
	  $checkbox_nub ="Todavía no he decidido la fecha";
  } */
   if($deseo !== 0){
	  $deseo ="Yes";
	   } 
   if($acuerdo !== 0){
	  $acuerdo ="Yes";
	   } 
  
  
  $note ="Este mensaje se envió desde www.teper.com";
  $body = "$note\nNombre: $username\nApellido: $lastname\nCorreo electrónico: $email\nCiudad: $city\nEmpresas: $bus\nDeseo recibir promociones exclusivas para viajar:$deseo\nTérminos y Condiciones:$acuerdo";
  
  if(@mail($to, $username, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}

