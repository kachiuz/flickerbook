<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../account.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ]; //from sesion


$querySelectAccountInfo = "SELECT first_name, last_name, email, reg_date, allow_pay_set FROM users WHERE user_id = '$user_id'";
$resultAccountInfo = mysqli_query($dbc, $querySelectAccountInfo);

$num = mysqli_num_rows($resultAccountInfo);
if ($num>0){
	while ($row = mysqli_fetch_array($resultAccountInfo, MYSQLI_ASSOC))
	{
		$first_name = $row['first_name'];
		$last_name = $row['last_name'];
		$email = $row['email'];
		$memberSince = $row['reg_date'];
		$allow_pay_set = $row['allow_pay_set'];
	}
}else{
		$first_name = "First name";
		$last_name =  "Last name ";
		$email =  "Email address";
		$memberSince = "Data not found";
		$allow_pay_set = 0;
}

$accountInfoArray = array ("first_name" => $first_name, 'last_name' => $last_name, 'email' => $email,'memberSince' => $memberSince);
$accountInfoArray += array ("allow_pay_set"=>$allow_pay_set);

$jsonFile = json_encode($accountInfoArray);
echo $jsonFile;
mysqli_close($dbc);
?>