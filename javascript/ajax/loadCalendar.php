<?php

/*
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['taxPeriodNumber'])){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ];


*/
$user_id = 1;
$numberOfWeeks = 52;

require('../../../connect_db.php');//sita reikes istrinti veliau

//nustatome tax perioda	pagal esama data
$timeSinceEpochOriginal = 1491004800; //
$currentTime = time() ;					//seconds since epoch
$mSecondsInWeek = 604800;
$taxPeriodNumberCurrent = ceil(($currentTime - $timeSinceEpochOriginal)/$mSecondsInWeek);
//-----------------------------------------------------------------------------------------------//

if(!empty($_POST['taxPeriodNumber']))
	{$taxPeriodNumber = htmlentities(mysqli_real_escape_string($dbc, $_POST['taxPeriodNumber']));
	$intChecktaxPeriodNumber = (int)$taxPeriodNumber;
	if($taxPeriodNumber == $intChecktaxPeriodNumber){$taxPeriodNumber = $intChecktaxPeriodNumber;}
	else{$taxPeriodNumber = $taxPeriodNumberCurrent;}
	}
else {$taxPeriodNumber = $taxPeriodNumberCurrent;}
	
//------------------------selecting weekstart

$querySelectWeekStart = "SELECT weekstart FROM weekly_payments_amount WHERE user_id = '$user_id' and taxPeriodNr = '$taxPeriodNumber'";
$resulSelectWeekStart = mysqli_query($dbc, $querySelectWeekStart);

$numWS = mysqli_num_rows($resulSelectWeekStart);


if ($numWS == 1){
	while ($rowWS = mysqli_fetch_array($resulSelectWeekStart, MYSQLI_ASSOC))
	{
		$weekStart = $rowWS['weekstart'];
	}
}
else if ($numWS < 1)
{
		$querySelectWeekStartFromSettings = "SELECT weekstart FROM current_payments_settings WHERE user_id = '$user_id'";
		$resulSelectWeekStartFromSettings = mysqli_query($dbc, $querySelectWeekStartFromSettings);

		$numWSFS = mysqli_num_rows($resulSelectWeekStartFromSettings);
		
		if ($numWSFS == 1){
		while ($rowWSFS = mysqli_fetch_array($resulSelectWeekStartFromSettings, MYSQLI_ASSOC))
		{
			$weekStart = $rowWSFS['weekstart'];
		}
		}
		else {
			$weekStart = 0;
		}	
}
else{
	$weekStart = 0;
}

//select day indexes////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//13 or 26 or 52 weeks for i
if ($numberOfWeeks == 13){	$taxPeriodStartWeek = 6;}
else if ($numberOfWeeks == 26){	$taxPeriodStartWeek = 13;}
else if ($numberOfWeeks == 52){	$taxPeriodStartWeek = 26;}
else {$taxPeriodStartWeek = 6;}

$taxPeriodStart = ($taxPeriodNumber - 1)*7+$weekStart; //dienos numeris
$modTaxPeriodStart = $taxPeriodStart-7*$taxPeriodStartWeek;

$numberOfDays = $numberOfWeeks*7;
for($j=0;$j<$numberOfDays;$j++){

$querySelectDayType = "SELECT dayType FROM day_indexes WHERE user_id = '$user_id' AND day_nr = '$modTaxPeriodStart'";
$resulSelectDayType = mysqli_query($dbc, $querySelectDayType);
$num6 = mysqli_num_rows($resulSelectDayType);
if($num6>0){
	while ($row6 = mysqli_fetch_array($resulSelectDayType, MYSQLI_ASSOC))
	{
		$dayType = $row6['dayType'];
	}
}
else{
		$dayType = 0;
}

$dayTypeArrayCalendar[] = $dayType;
echo $j.' - '.$modTaxPeriodStart.'<br>';
$modTaxPeriodStart++;
}

$loadIndexesArray = array ("dayTypeArrayCalendar"=>$dayTypeArrayCalendar);
$jsonFile = json_encode($loadIndexesArray);
echo $jsonFile;

?>