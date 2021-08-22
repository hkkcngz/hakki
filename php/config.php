<?php
  $hostname = "localhost";
  $username = "kodmobco_chatuser";
  $password = "Gs102030.";
  $dbname = "kodmobco_chatapp";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>
