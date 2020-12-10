<?php

if($_POST) {
  $to = "doppelandganger@gmail.com"; // your mail here
  $newsletterMail = filter_var($_POST["newsletterMail"], FILTER_SANITIZE_EMAIL);
/*   $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
  $start = filter_var($_POST["start"], FILTER_SANITIZE_STRING);
  $end = filter_var($_POST["end"], FILTER_SANITIZE_STRING);
  $number = filter_var($_POST["number"], FILTER_SANITIZE_STRING);
  if($checkbox_nub !== 0){
	  $checkbox_nub ="Todavía no he decidido la fecha";
  } */
   if($newsCheckbox !== 0){
	  $newsCheckbox ="Yes";
	   } 
  
  
  $newsletterinfo ="Este mensaje se envió desde www.teper.com";
  $body = "$newsletterinfo\nEmail: $newsletterMail\nDe acuerdo con Términos y Condiciones, así como el Aviso de Privacidad:	$newsCheckbox";
  
  if(@mail($to, $newsletterMail, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}

