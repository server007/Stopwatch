<?php
$hostname="localhost";
$username="root";
$password="";
$a=$_POST['name'];
$b=$_POST['age'];
$con=mysqli($hostname,$username,$password);
if(!$con)
{
    die("could not connect the server".mysql_error());
}
mysql_select_db('stopwatch');
$sqli_query="insert into result(Name,Age)values('$a','$b')";
mysql_close($con);
?>