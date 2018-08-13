<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' )
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }


session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ] ;
require ('limits/taxPeriodLimit.php'); //tax period Limit
//nustatome tax perioda	
$timeSinceEpochOriginal = 1491004800; //
$currentTime = time() ;					//seconds since epoch
$mSecondsInWeek = 604800;
$taxPeriodNumber = ceil(($currentTime - $timeSinceEpochOriginal)/$mSecondsInWeek);		
		
		

//------------------------------------------------------------------weekstart array--------------------------------------//
$weekStartArrayAssociative = array();

$querySelectWeekStart = "SELECT taxPeriodNr, weekstart FROM weekly_payments_amount WHERE user_id = '$user_id'";
$resulSelectWeekStart = mysqli_query($dbc, $querySelectWeekStart);

//$numWS = mysqli_num_rows($resulSelectWeekStart);
//$rowWS = mysqli_fetch_array($resulSelectWeekStart, MYSQLI_ASSOC);


 while($row = mysqli_fetch_array($resulSelectWeekStart, MYSQLI_ASSOC)) {
        $taxPeriodNr = ($row['taxPeriodNr']);
        $weekstart = ($row['weekstart']);
		$taxPeriodNr = 'taxPeriodNr'.$taxPeriodNr; //pabandom
		$weekStartArrayAssociative += array($taxPeriodNr=>$weekstart);
		}
		

//is db paimeme esamus weekstart nustatymus
$querySelectWeekStartFromSettings = "SELECT weekstart FROM current_payments_settings WHERE user_id = '$user_id'";
$resulSelectWeekStartFromSettings = mysqli_query($dbc, $querySelectWeekStartFromSettings);

$numWSFS = mysqli_num_rows($resulSelectWeekStartFromSettings);
		
if ($numWSFS == 1){
while ($rowWSFS = mysqli_fetch_array($resulSelectWeekStartFromSettings, MYSQLI_ASSOC))
	{
		$CurrentWeekStart = $rowWSFS['weekstart'];
	}
	}
	else {
		$CurrentWeekStart = 0;
	}			
		
		
//sukuriamas assosiative array, kuriame galime patikrinti ar egzistuoja weekstart verte pasirinktam tax periodui		
//$search_array = array('first' => 1, 'second' => 4);
for($i=0;$i<$taxPeriodLimit; $i++){
	if (!array_key_exists('taxPeriodNr'.$i, $weekStartArrayAssociative)) {
		//echo "The ".$i." element is in the array<br>";
		$weekStartArrayAssociative += array('taxPeriodNr'.$i=>$CurrentWeekStart);
	}	
	//else{echo "The ".$i." Element is <b>not</b> in the array<br>";}	
}


$weekStartArray = array();
for($i=0;$i<$taxPeriodLimit; $i++){
		$weekStartArray[] = $weekStartArrayAssociative['taxPeriodNr'.$i];
}

//sukuriamas associative array kuris siunciamas i javascript faila
$loadIndexesArray = array ("weekStartArray"=>$weekStartArray);



//------------------------------------------weekstart array end----------------------------------------------------------//



//------------------------------------------------------------------unsHCheck array--------------------------------------//
$unsHCheckArrayAssociative = array();

$querySelectunsHCheck = "SELECT taxPeriodNr, unsHCheck FROM weekly_payments_amount WHERE user_id = '$user_id'";
$resulSelectunsHCheck = mysqli_query($dbc, $querySelectunsHCheck);

$numWS = mysqli_num_rows($resulSelectunsHCheck);
$rowWS = mysqli_fetch_array($resulSelectunsHCheck, MYSQLI_ASSOC);


 while($row = mysqli_fetch_array($resulSelectunsHCheck, MYSQLI_ASSOC)) {
        $taxPeriodNr = ($row['taxPeriodNr']);
        $unsHCheck = ($row['unsHCheck']);
		$taxPeriodNr = 'taxPeriodNr'.$taxPeriodNr;
		$unsHCheckArrayAssociative += array($taxPeriodNr=>$unsHCheck);
		}
		

//is db paimeme esamus weekstart nustatymus
$querySelectunsHCheckFromSettings = "SELECT uns_H_check FROM current_payments_settings WHERE user_id = '$user_id'";
$resulSelectunsHCheckFromSettings = mysqli_query($dbc, $querySelectunsHCheckFromSettings);

$numWSFS = mysqli_num_rows($resulSelectunsHCheckFromSettings);
		
if ($numWSFS == 1){
while ($rowWSFS = mysqli_fetch_array($resulSelectunsHCheckFromSettings, MYSQLI_ASSOC))
	{
		$CurrentunsHCheck = $rowWSFS['uns_H_check'];
	}
	}
	else {
		$CurrentunsHCheck = 0;
	}			
		
		
//sukuriamas assosiative array, kuriame galime patikrinti ar egzistuoja weekstart verte pasirinktam tax periodui		
for($i=0;$i<$taxPeriodLimit; $i++){
	if (!array_key_exists('taxPeriodNr'.$i, $unsHCheckArrayAssociative)) {
		//echo "The ".$i." element is in the array<br>";
		$unsHCheckArrayAssociative += array('taxPeriodNr'.$i=>$CurrentunsHCheck);
	}	
}


$unsHCheckArray = array();
for($i=0;$i<$taxPeriodLimit; $i++){
		$unsHCheckArray[] = $unsHCheckArrayAssociative['taxPeriodNr'.$i];
}

//sukuriamas associative array kuris siunciamas i javascript faila
$loadIndexesArray += array ("unsHCheckArray"=>$unsHCheckArray);

$jsonFile = json_encode($loadIndexesArray);
echo $jsonFile;


mysqli_close($dbc);
?>