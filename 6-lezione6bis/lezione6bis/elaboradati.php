<?php
$login = $_POST['pluto'];
$password = $_POST['pippo'];

$controllologin = "info@talent.it";
$controllopassword = "12345";

if ( $login == $controllologin && $password == $controllopassword ) {

    echo "PUOI ACCEDERE";

} else {

    echo "NON PUOI ACCEDERE";

}


?>