<?php

define("YEAR", 2014);
define("JOB_TITLE", "Teacher");
define("MAX_BADGES", 150000);

//invalid constant name
//define("2LEGIT", "to quit"); can't begin variable with a number



$name = "Mikey";
$location = "Orlando, FL";
$full_name = "Mike the Frog";
$name = $full_name;

?>

<!DOCTYPE html>
<html>
  <head>
  	<meta charset=utf-8>
  	<title><?php echo $name ?>| Treehouse Profile</title>
  	<link href="css/style.css" rel="stylesheet" />
  </head>
  
  <body>
    <section class="sidebar text-center">
      <div class="avatar">
        <img src="img/avatar.png" alt="<?php echo $name ?>">
      </div>
      <h1><?php echo $name ?></h1>
      <p><?php echo $location ?></p>
      <hr />
      <p>Welcome to PHP Basics!</p>
      <hr />
      <ul class="social">
        <li><a href=""><span class="icon twitter"></span></a></li>
      </ul>
    </section>
    <section class="main">
      <p>Let's Get Started!</p>
      </ppre>
        <?php 
          
          $bool = TRUE;
          $bool = FALSE;

//          var_dump($bool);

            // $a = 10;
            // $b = 10;

            // $sum = $a + $b;
            // $diff = $a - $b;
            // $prod = $a * $b;
            // $quot = $a / $b;

            // $prod--;

            $a = 10;
            $b = 10;
            $c = 20;
            $d = "10";

            var_dump( $a == $b ); //equal operator
            var_dump( $a === $d ); //identical operator
            var_dump( $a != $b ); //not equal
            var_dump( $a !== $d ); //not identical

            var_dump( $a < $b ); //less than
            var_dump( $a > $b ); //greater than
            var_dump( $a <= $b ); //less than or equal
            var_dump( $a >= $b ); //greater than or equal 

        ?>
        </pre>
      
      <ul>

      </ul>

    </section>
  </body>
</html>