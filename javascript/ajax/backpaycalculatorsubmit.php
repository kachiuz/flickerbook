<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['backPayEndDate'],$_POST['backPayStartDate'] )){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

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
	$loadIndexesArray = array("errors"=>$errors);
	$jsonFile = json_encode($loadIndexesArray);
	Die ($jsonFile = json_encode($loadIndexesArray));
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

//employment info
if(!empty($_POST['jobTitle'])){
	$jobTitle = htmlentities(mysqli_real_escape_string($dbc, $_POST['jobTitle']));}
else {$jobTitle = NULL;}
if(!empty($_POST['employer'])){
	$employer = htmlentities(mysqli_real_escape_string($dbc, $_POST['employer']));}
else {$employer = NULL;}

if ( empty( $errors ) )
{
	$loadIndexesArray = array ("errors"=>$errors);
	$loadIndexesArrayNoPremium = array ("errors"=>$errors); // be sito neveikia
		
	//--------------------------------------Nustatome tax period, nuo kurio skaiciuojamas back pay--------------------------------//
	
	$querySelectStartTaxPeriod = "SELECT taxPeriodNr FROM day_indexes WHERE user_id = '$user_id' and date = '$backPayStartDate'";
	$resulSelectStartTaxPeriod = mysqli_query($dbc, $querySelectStartTaxPeriod);

	$num = mysqli_num_rows($resulSelectStartTaxPeriod);
	if($num>0){
		while ($row = mysqli_fetch_array($resulSelectStartTaxPeriod, MYSQLI_ASSOC))
		{
			$backPayStartTaxPeriod = $row['taxPeriodNr'];
		}
	}
	else{
		//jei nerandama data ieskoma artimiausia data, kuri butu didesne uz pateikta: MIN(date)
		$querySelectStartTaxPeriodMinDate = "SELECT MIN(date) FROM day_indexes WHERE user_id = '$user_id' and date >'$backPayStartDate'";
		$resulSelectStartTaxPeriodMinDate = mysqli_query($dbc, $querySelectStartTaxPeriodMinDate);

		$num2 = mysqli_num_rows($resulSelectStartTaxPeriodMinDate);
		if($num2>0){
			while ($row2 = mysqli_fetch_array($resulSelectStartTaxPeriodMinDate, MYSQLI_ASSOC))
			{
				$backPayStartTaxPeriodMinDate = $row2['MIN(date)'];
				//$backpayArray += array ("backPayStartTaxPeriodMinDate"=>$backPayStartTaxPeriodMinDate);
				
				$querySelectStartTaxPeriodMin = "SELECT taxPeriodNr FROM day_indexes WHERE user_id = '$user_id' and date = '$backPayStartTaxPeriodMinDate'";
				$resulSelectStartTaxPeriodMin = mysqli_query($dbc, $querySelectStartTaxPeriodMin);

				$num3 = mysqli_num_rows($resulSelectStartTaxPeriodMin);
				if($num3>0){
					while ($row3 = mysqli_fetch_array($resulSelectStartTaxPeriodMin, MYSQLI_ASSOC))
					{
						$backPayStartTaxPeriod = $row3['taxPeriodNr'];
					}
				}
				else{
				//jei nerandama jokia data sukuriame error reporta
				$errors[] = 'No Start or End Date found. Make sure you have submitted at least one week payments for the chosen period.' ;
				$loadIndexesArray = array("errors"=>$errors);
				$jsonFile = json_encode($loadIndexesArray);
				Die ($jsonFile = json_encode($loadIndexesArray));
				}	
			}
		}
		else{
				//jei nerandamas joks Tax Period sukuriame error reporta
				$errors[] = 'No payments data found for the chosen back pay period.' ;
				$loadIndexesArray = array("errors"=>$errors);
				$jsonFile = json_encode($loadIndexesArray);
				Die ($jsonFile = json_encode($loadIndexesArray));
				}	
			}
		
		
	//--------------------------------------Nustatome tax period, iki kurio skaiciuojamas back pay--------------------------------//
	
	$querySelectEndTaxPeriod = "SELECT taxPeriodNr FROM day_indexes WHERE user_id = '$user_id' and date = '$backPayEndDate'";
	$resulSelectEndTaxPeriod = mysqli_query($dbc, $querySelectEndTaxPeriod);

	$num4 = mysqli_num_rows($resulSelectEndTaxPeriod);
	if($num4>0){
		while ($row4 = mysqli_fetch_array($resulSelectEndTaxPeriod, MYSQLI_ASSOC))
		{
			$backPayEndTaxPeriod = $row4['taxPeriodNr'];
		}
	}
	else{
		//jei nerandama data ieskoma artimiausia data, kuri butu didesne uz pateikta: MIN(date)
		$querySelectEndTaxPeriodMinDate = "SELECT MAX(date) FROM day_indexes WHERE user_id = '$user_id' and date <'$backPayEndDate'";
		$resulSelectEndTaxPeriodMinDate = mysqli_query($dbc, $querySelectEndTaxPeriodMinDate);

		$num5 = mysqli_num_rows($resulSelectEndTaxPeriodMinDate);
		if($num5>0){
			while ($row5 = mysqli_fetch_array($resulSelectEndTaxPeriodMinDate, MYSQLI_ASSOC))
			{
				$backPayEndTaxPeriodMinDate = $row5['MAX(date)'];
							
				$querySelectEndTaxPeriodMin = "SELECT taxPeriodNr FROM day_indexes WHERE user_id = '$user_id' and date = '$backPayEndTaxPeriodMinDate'";
				$resulSelectEndtTaxPeriodMin = mysqli_query($dbc, $querySelectEndTaxPeriodMin);

				$num6 = mysqli_num_rows($resulSelectEndtTaxPeriodMin);
				if($num6>0){
					while ($row6 = mysqli_fetch_array($resulSelectEndtTaxPeriodMin, MYSQLI_ASSOC))
					{
						$backPayEndTaxPeriod = $row6['taxPeriodNr'];
					}
				}
				else{
				//jei nerandama jokia data sukuriame error reporta
				$errors[] = 'No End Date found. Make sure you have submitted at least one week payments for the chosen back pay period.' ;
				$loadIndexesArray = array("errors"=>$errors);
				$jsonFile = json_encode($loadIndexesArray);
				Die ($jsonFile = json_encode($loadIndexesArray));
				}	
			}
		}
		else{
				//jei nerandamas joks Tax Period sukuriame error reporta
				$errors[] = 'No payments data found for the chosen back pay period.' ;
				$loadIndexesArray = array("errors"=>$errors);
				$jsonFile = json_encode($loadIndexesArray);
				Die ($jsonFile = json_encode($loadIndexesArray));
				}	
	}
	
	//pakeiciame veertes, kad ceikti itraukta sql query
	$firstTaxPeriodOfYear = $backPayStartTaxPeriod;
	$taxPeriodNumber = $backPayEndTaxPeriod;
	
	
	//parenkame atitinakam query
	if ($employer == NULL AND $jobTitle == NULL)
	{
		require('includes/selectPaymentsSum.php');
		require('includes/selectDeductionsSum.php');
		require('includes/dayTypeHoursWorked.php');
	}
	else if ($employer != NULL AND $jobTitle == NULL)
	{
		require('includes/totalsCalculator/selectPaymentsSumEmployer.php');
		require('includes/totalsCalculator/selectDeductionsSumEmployer.php');
		require('includes/totalsCalculator/dayTypeHoursWorkedEmployer.php');
	}
	else if ($employer == NULL AND $jobTitle != NULL)
	{
		require('includes/totalsCalculator/selectPaymentsSumJobTitle.php');
		require('includes/totalsCalculator/selectDeductionsSumJobTitle.php');
		require('includes/totalsCalculator/dayTypeHoursWorkedJobTitle.php');
	}
	else if ($employer != NULL AND $jobTitle != NULL)
	{
		require('includes/totalsCalculator/selectPaymentsSumBoth.php');
		require('includes/totalsCalculator/selectDeductionsSumBoth.php');
		require('includes/totalsCalculator/dayTypeHoursWorkedBoth.php');
	}
	else{
		require('includes/selectPaymentsSum.php');
		require('includes/selectDeductionsSum.php');
		require('includes/dayTypeHoursWorked.php');
	}

	
	$jsonFile = json_encode($loadIndexesArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else
{
	$loadIndexesArray = array("errors"=>$errors);
	$jsonFile = json_encode($loadIndexesArray);
	echo $jsonFile;
	mysqli_close($dbc);

		
	}


?>