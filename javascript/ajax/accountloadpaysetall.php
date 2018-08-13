<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../account.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ('../../login_tools.php' ) ; load('../../account.php') ; }
require('../../../connect_db.php');

$errors3 = array();
$user_id = $_SESSION[ 'user_id' ];
	
if(isset($_POST['changePaySetAllow']))
	{$changePaySetAllow = htmlentities(mysqli_real_escape_string($dbc, $_POST['changePaySetAllow']));}
	else{$changePaySetAllow = "false";}	
	
if ($changePaySetAllow == "true"){$changePaySetAllow = 1;}
elseif ($changePaySetAllow == "false") {$changePaySetAllow = 0;}
else{$changePaySetAllow = 0;}


$queryUpdateUsers = "UPDATE users SET allow_pay_set = '$changePaySetAllow' WHERE user_id = '$user_id'";
$resultUpdateUsers = mysqli_query($dbc, $queryUpdateUsers);


$paymentsSettingsArray = array("errors"=>$errors3);
$jsonFile = json_encode($paymentsSettingsArray);
echo $jsonFile;
mysqli_close($dbc);
?>