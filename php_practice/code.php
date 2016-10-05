<?php 
$hour = date('G');
if ($hour < 12) {
	echo "Good morning!";
}
elseif ($hour >= 12 and $hour < 17) {
	echo "Good afternoon!";
}
elseif ($hour >= 17 and $hour < 20) {
	echo "Good evening!";
}
elseif ($hour >= 20) {
	echo "Good night!";
}

?>