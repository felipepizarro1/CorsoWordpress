<?php 

$clicksuccess = $_POST['clicksuccess'];
$clickwarning = $_POST['clickwarning'];
$clickdanger = $_POST['clickdanger'];

$clicktotali = $clickdanger + $clicksuccess + $clickwarning;

echo '<h1 class="text-center">'.$clicktotali.'</h1>';


?>