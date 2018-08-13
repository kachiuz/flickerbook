<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['deleteCalendarStartDate'], $_POST['deleteCalendarEndDate'])){ require ( 'login_tools.php' ) ; load('../../index.php') ; }


session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$errors = array();

$user_id = $_SESSION[ 'user_id' ];


////---------------------------------------------------------------------------------------------//
$querySelectPremium = "SELECT premium FROM users WHERE user_id = '$user_id'";
$resulSelectPremium = mysqli_query($dbc, $querySelectPremium);
$numPremium = mysqli_num_rows($resulSelectPremium);

if ($numPremium == 1){
	while ($rowPremium = mysqli_fetch_array($resulSelectPremium, MYSQLI_ASSOC))
	{
		$premium = $rowPremium['premium'];
	}
}
else{
	$premium = 0;
}

if($premium == 0)
{
	$errors[] = 'Only for Premium members!' ;
	$backpayArray = array("errors"=>$errors);
	$jsonFile = json_encode($backpayArray);
	Die ($jsonFile = json_encode($backpayArray));
}


//-------------------------------------------------------------------------------------------------------//

function validateDate($date, $format= 'Y-m-d H:i:s')
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}

//date value dateInputHidden
if(isset($_POST['deleteCalendarStartDate']))
{$deleteCalendarStartDate = htmlentities(mysqli_real_escape_string($dbc, $_POST['deleteCalendarStartDate']));
	$deleteCalendarStartDateCheck = validateDate($deleteCalendarStartDate, 'Y-m-d');
	if ($deleteCalendarStartDateCheck == true)
		{$deleteCalendarStartDate = $deleteCalendarStartDate;}
	else {
		$errors[] = 'Invalid Start date format!' ;
		}
}
else{$errors[] = 'Start date is not set!' ;}

//date value dateInputHidden
if(isset($_POST['deleteCalendarEndDate']))
{$deleteCalendarEndDate = htmlentities(mysqli_real_escape_string($dbc, $_POST['deleteCalendarEndDate']));
	$deleteCalendarEndDateCheck = validateDate($deleteCalendarEndDate, 'Y-m-d');
	if ($deleteCalendarEndDateCheck == true)
		{
			$deleteCalendarEndDate = $deleteCalendarEndDate;
		}
	else 
	{
		$errors[] = 'Invalid End date format!' ;
	}
}
else{$errors[] = 'End date is not set!' ;}


if($deleteCalendarStartDate>=$deleteCalendarEndDate)
{
	$errors[] = 'Start date is Greater or equal to End Date!' ;
}
require('limits/flickerbookStartEndDates.php');

//apsauga nuo per dideliu arba per mazy datu
if($deleteCalendarStartDate<$startDateOfFlickerbook){
	$errors[] = 'Start Date can not be earlier then '.$startDateOfFlickerbook.'!';
}
if($deleteCalendarStartDate>$surrentEndDateOfFlickrbook){
	$errors[] = 'Start Date can not be greater then '.$surrentEndDateOfFlickrbook.'!';
}

if($deleteCalendarEndDate>$surrentEndDateOfFlickrbook){
	$errors[] = 'End Date can not be greater then '.$surrentEndDateOfFlickrbook.'!';
}
if($deleteCalendarEndDate<$startDateOfFlickerbook){
	$errors[] = 'End Date can not be earlier then '.$startDateOfFlickerbook.'!';
}


//nustatome dienu numerius nuo flickerbook pradzios

$queryStartDayNumber = "SELECT DATEDIFF('$deleteCalendarStartDate', '$startDateOfFlickerbook') as startDateNumber"; 
$resulStartDayNumber = mysqli_query($dbc, $queryStartDayNumber);
$num = mysqli_num_rows($resulStartDayNumber);

if ($num>0){
	while ($row = mysqli_fetch_array($resulStartDayNumber, MYSQLI_ASSOC))
	{
		$startDateNumber = $row['startDateNumber'];
	}
}
else{
		$errors[] = 'Error generating start day!';
}

$queryEndDayNumber = "SELECT DATEDIFF('$deleteCalendarEndDate', '$startDateOfFlickerbook') as endDateNumber"; 
$resultEndDayNumber = mysqli_query($dbc, $queryEndDayNumber);
$num2 = mysqli_num_rows($resultEndDayNumber);

if ($num2>0){
	while ($row3 = mysqli_fetch_array($resultEndDayNumber, MYSQLI_ASSOC))
	{
		$endDateNumber = $row3['endDateNumber']-1; //be -3 prideda per daug dienu
	}
}
else{
		$errors[] = 'Error generating End day!';
}	

if ( empty( $errors ) )
{
	for ($i=$startDateNumber; $i<=$endDateNumber; $i++)
	{
		$queryCheckIfCGSubmitted = "SELECT CG_check, date FROM day_indexes WHERE user_id = '$user_id' AND day_nr = '$i'";
		$resulCheckIfCGSubmitted = mysqli_query($dbc, $queryCheckIfCGSubmitted);
		$numOfRows = mysqli_num_rows($resulCheckIfCGSubmitted);
			
		if ($numOfRows > 0){
			while ($row = mysqli_fetch_array($resulCheckIfCGSubmitted, MYSQLI_ASSOC))
			{
				$CG_check = $row['CG_check'];
				$date = $row['date'];
			}
		}
		else{
			$CG_check = 0;
			$date = "<i>not found or</i>";
		}
			
		if ($CG_check == 0){	
			$errors[] = "Date ".$date ." was not submitted via Calendar Generator, therefore it can not be deleted!";
		}
			
		if(!empty( $errors ))
		{
			$backpayArray = array("errors"=>$errors);
			$jsonFile = json_encode($backpayArray);
			Die ($jsonFile = json_encode($backpayArray));
		}
		else{		
			$queryDeleteIndexes = "DELETE FROM day_indexes WHERE user_id = '$user_id' and day_nr ='$i'";
			$resultDeleteIndexes = mysqli_query($dbc, $queryDeleteIndexes);
		}
	}
	
	
	$backpayArray = array ("endDateNumber"=>$endDateNumber, "startDateNumber"=>$startDateNumber);
	$backpayArray += array("errors"=>$errors);
	$jsonFile = json_encode($backpayArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else
{
	$backpayArray = array("errors"=>$errors);
	$jsonFile = json_encode($backpayArray);
	echo $jsonFile;
	mysqli_close($dbc);

		
	}


?>