<?php
// jei ne post method, numariname scripta
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['backPayStartDate'], $_POST['backPayEndDate'], $_POST['number'] )){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }


session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load() ; }
require('../../../connect_db.php');

$errors = array();


$user_id = $_SESSION[ 'user_id' ];
//calendar generator check. nurodo db is kur buvo ivestos dienos, reikalinga norint istrinti tik tas dienas, kurios buvo suvestis per calendar generator puslapi
$CG_check = 1;

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

if($premium != 1)
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
if(!empty($_POST['backPayStartDate']))
{$backPayStartDate = htmlentities(mysqli_real_escape_string($dbc, $_POST['backPayStartDate']));
	$backPayStartDateCheck = validateDate($backPayStartDate, 'Y-m-d');
	if ($backPayStartDateCheck == true)
		{$backPayStartDate = $backPayStartDate;}
	else {
		$errors[] = 'Invalid Start date format!' ;
		}
}
else{$errors[] = 'Start date is not set!' ;}

//date value dateInputHidden
if(!empty($_POST['backPayEndDate']))
{$backPayEndDate = htmlentities(mysqli_real_escape_string($dbc, $_POST['backPayEndDate']));
	$backPayEndDateCheck = validateDate($backPayEndDate, 'Y-m-d');
	if ($backPayEndDateCheck == true)
		{
			$backPayEndDate = $backPayEndDate;
		}
	else 
	{
		$errors[] = 'Invalid End date format!' ;
	}
}
else{$errors[] = 'End date is not set!' ;}

if($backPayStartDate>=$backPayEndDate)
{
	$errors[] = 'Start date is Greater or equal to End Date!' ;
}


if(!empty($_POST['number']))
	{$number = htmlentities(mysqli_real_escape_string($dbc, $_POST['number']));
		if(is_int($number)){$number;}
		elseif(is_numeric($number)){$number = intval($number);}
		else{$errors[] = 'Number of days must be a numeric value!'; }
	}
	else{$number = 7;}//paliekame 7 dienas
	
require('limits/flickerbookStartEndDates.php');

//apsauga nuo per dideliu arba per mazy datu
if($backPayStartDate<$startDateOfFlickerbook){
	$errors[] = 'Start Date can not be earlier then '.$startDateOfFlickerbook.'!';
}
if($backPayStartDate>$surrentEndDateOfFlickrbook){
	$errors[] = 'Start Date can not be greater then '.$surrentEndDateOfFlickrbook.'!';
}

if($backPayEndDate>$surrentEndDateOfFlickrbook){
	$errors[] = 'End Date can not be greater then '.$surrentEndDateOfFlickrbook.'!';
}
if($backPayEndDate<$startDateOfFlickerbook){
	$errors[] = 'End Date can not be earlier then '.$startDateOfFlickerbook.'!';
}
//$startDateOfFlickerbook ;
//$surrentEndDateOfFlickrbook;

//nustatome pradine data, nuo kurios iterpiame calendar.
$queryStartDayNumber = "SELECT DATEDIFF('$backPayStartDate', '$startDateOfFlickerbook') as startDateNumber"; 
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

	
//nustatome pradine data, nuo kurios iterpiame calendar.
$queryEndDayNumber = "SELECT DATEDIFF('$backPayEndDate', '$startDateOfFlickerbook') as endDateNumber"; 
$resultEndDayNumber = mysqli_query($dbc, $queryEndDayNumber);
$num2 = mysqli_num_rows($resultEndDayNumber);

if ($num2>0){
	while ($row3 = mysqli_fetch_array($resultEndDayNumber, MYSQLI_ASSOC))
	{
		$endDateNumber = $row3['endDateNumber']-1;
	}
}
else{
		$errors[] = 'Error generating End day!';
}		
	
//paimame weekstart verte, kuri reikalinga taxperiodNr skaiciavimamas	
$querySelectWeekStartFromSettings = "SELECT weekstart FROM current_employment_info WHERE user_id = '$user_id'";
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
	
if ( empty( $errors ) )
{

	$backPayStartDateNew=date_create($backPayStartDate);
	for ($i=$startDateNumber; $i<=$endDateNumber; $i++)
	{
		for($i=0;$i<=$number;$i++){
			//dayType INT
			if(!empty($_POST['dayType'.$i]))
			{$dayTypeName = htmlentities(mysqli_real_escape_string($dbc, $_POST['dayType'.$i]));
				if(is_int($dayTypeName)){$dayTypeName;}
				elseif(is_numeric($dayTypeName)){$dayTypeName = intval($dayTypeName);}
				else{$errors[] = 'Day Type '.($i+1).' Index must be a numeric value!'; }
			}
			else{$dayTypeName = 0;}
			
			
			//startHours INT
			if(!empty($_POST['startHours'.$i]))
			{$startHours = htmlentities(mysqli_real_escape_string($dbc, $_POST['startHours'.$i]));
				if(is_int($startHours)){$startHours;}
				elseif(is_numeric($startHours)){$startHours = intval($startHours);}
				else{$errors[] = 'Start Hour '.($i+1).' must be a numeric value!'; }
			}
			else{$startHours = 0;}
			
			//startMinutes INT
			if(!empty($_POST['startMinutes'.$i]))
			{$startMinutes = htmlentities(mysqli_real_escape_string($dbc, $_POST['startMinutes'.$i]));
				if(is_int($startMinutes)){$startMinutes;}
				elseif(is_numeric($startMinutes)){$startMinutes = intval($startMinutes);}
				else{$errors[] = 'Start Minute '.($i+1).' must be a numeric value!'; }
			}
			else{$startMinutes = 0;}
			
			//endHours INT
			if(!empty($_POST['endHours'.$i]))
			{$endHours = htmlentities(mysqli_real_escape_string($dbc, $_POST['endHours'.$i]));
				if(is_int($endHours)){$endHours;}
				elseif(is_numeric($endHours)){$endHours = intval($endHours);}
				else{$errors[] = 'End Hour '.($i+1).' must be a numeric value!'; }
			}
			else{$endHours = 0;}
			
			//endMinutes INT
			if(!empty($_POST['endMinutes'.$i]))
			{$endMinutes = htmlentities(mysqli_real_escape_string($dbc, $_POST['endMinutes'.$i]));
				if(is_int($endMinutes)){$endMinutes;}
				elseif(is_numeric($endMinutes)){$endMinutes = intval($endMinutes);}
				else{$errors[] = 'End Minute '.($i+1).' must be a numeric value!'; }
			}
			else{$endMinutes = 0;}
			
			
			//apsauga nuo kitokiu numeriu nei yra starthours.h
			if ($startHours <0 OR $startHours > 23)
			{
				$errors[] = "Start hour invalid value!";
			}


			//apsauga nuo kitokiu numeriu nei yra startMinutes.h
			if ($startMinutes <0 OR $startMinutes > 59)
			{
				$errors[] = "Start minute invalid value!";
			}
				

			//apsauga nuo kitokiu numeriu nei yra endHours.h
			if ($endHours <0 OR $endHours > 35)
			{
				$errors[] = "End Hour invalid value!";
			}


			//apsauga nuo kitokiu numeriu nei yra endMinutes.h
			if ($endMinutes <0 OR $endMinutes > 59)
			{
				$errors[] = "End minute invalid value!";
			}
			//apsauga nuo endtime<startime
			if ($startHours >$endHours)
			{
				$errors[] = "Start time can not be greater then finish time!";
			}
			
			//suskaiciuojamos isdribtos valados
		
			//$startTime = round(($startHours +($startMinutes/60)),4); //round($startTime,4);
			//$endTime = round(($endHours + ($endMinutes/60)),4);
			
			//isdribtos valandos su neapmokamais breakais
			$hoursWorked = 0;
			
			date_sub($backPayStartDateNew, date_interval_create_from_date_string($weekStart.' days'));
			$backPayStartDateFormated = date_format($backPayStartDateNew,"Y-m-d");
			
			//isminusuojame weekstart is datos.
			//$backPayStartDateFormated = date_create($backPayStartDateFormated);
			
			
			//nustatome taxPeriodNr, be jo blogai veikia backpay ir totals calculator;
			$taxPeriodNr = ceil(($startDateNumber+0.1-$weekStart)/7);
			if($taxPeriodNr<=0){$taxPeriodNr = 1;} //just in case
			
				
			
			//patikriname, ar jau nera ivestos vertes pasirinktai dienai
			$queryCheckIfNotEmpty = "SELECT day_nr FROM day_indexes WHERE user_id = '$user_id' AND day_nr = '$startDateNumber'";
			$resulCheckIfNotEmpty = mysqli_query($dbc, $queryCheckIfNotEmpty);
			$emptyCheck = mysqli_num_rows($resulCheckIfNotEmpty);

			if ($emptyCheck == 1){
				$errors[] = "Chosen date ".$backPayStartDateFormated ." already exists! You can only use Calendar generator, if no dates have been previously submitted.";
			}
			
			if(!empty( $errors ))
			{
				$backpayArray = array("errors"=>$errors);
				$jsonFile = json_encode($backpayArray);
				Die ($jsonFile = json_encode($backpayArray));
			}
			else{
				// siunciame indexus i duomenu baze
				$queryInsertIndexes = "INSERT INTO day_indexes (user_id, day_nr, dayType, startH, startM, endH, endM, date, taxPeriodNr, hours_worked, CG_check) VALUES ('$user_id', '$startDateNumber', '$dayTypeName', '$startHours', '$startMinutes', '$endHours', '$endMinutes', '$backPayStartDateFormated', '$taxPeriodNr', '$hoursWorked', '$CG_check')";
				$queryDeleteIndexes = "DELETE FROM day_indexes WHERE user_id = '$user_id' and day_nr ='$startDateNumber'";
				
				$resultDeleteIndexes = mysqli_query($dbc, $queryDeleteIndexes);
				$resultInsertIndexes = mysqli_query($dbc, $queryInsertIndexes);
			}
			
			if ($startDateNumber>$endDateNumber){break;}
			else{
				$startDateNumber++;
				date_add($backPayStartDateNew,date_interval_create_from_date_string("1 day"));
			}
		}
		if ($startDateNumber>$endDateNumber){break;}
	}
	
	$backpayArray = array("errors"=>$errors);
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