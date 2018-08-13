<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

if(!isset($_POST['taxPeriodNumber'])){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');


$user_id = $_SESSION[ 'user_id' ];

if(!empty($_POST['taxPeriodNumber']))
	{$taxPeriodNumber = htmlentities(mysqli_real_escape_string($dbc, $_POST['taxPeriodNumber']));
	$intChecktaxPeriodNumber = (int)$taxPeriodNumber;
	if($taxPeriodNumber == $intChecktaxPeriodNumber){$taxPeriodNumber = $intChecktaxPeriodNumber;}
	else{$taxPeriodNumber = 1;}
	}
else {$taxPeriodNumber = 1;}


$queryDeleteIndexes = "DELETE FROM day_indexes WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteIndexes = mysqli_query($dbc, $queryDeleteIndexes);

$queryDeleteDeductions = "DELETE FROM weekly_deductions_amount WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteDeductions = mysqli_query($dbc, $queryDeleteDeductions);

$queryDeleteDeductions2 = "DELETE FROM weekly_deductions_amount2 WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteDeductions2 = mysqli_query($dbc, $queryDeleteDeductions2);

$queryDeleteRates = "DELETE FROM weekly_rates WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteRates = mysqli_query($dbc, $queryDeleteRates);

$queryDeleteUnits = "DELETE FROM weekly_payments_units WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteUnits = mysqli_query($dbc, $queryDeleteUnits);

$queryDeleteUnsocial = "DELETE FROM weekly_payments_unsocial WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteUnsocial = mysqli_query($dbc, $queryDeleteUnsocial);

$queryDeleteEmploymentInfo = "DELETE FROM weekly_employment_info WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeleteEmploymentInfo = mysqli_query($dbc, $queryDeleteEmploymentInfo);

$queryDeletePayments = "DELETE FROM weekly_payments_amount WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeletePayments = mysqli_query($dbc, $queryDeletePayments);

$queryDeletePayments2 = "DELETE FROM weekly_payments_amount2 WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$resultDeletePayments2 = mysqli_query($dbc, $queryDeletePayments2);


mysqli_close($dbc);
?>