<?php

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php') ; load('../../index.php') ; }


session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }

require('../../../connect_db.php');
$errors = array();


//nustatome tax perioda	pagal esama data
$timeSinceEpochOriginal = 1491004800; //
$currentTime = time() ;					//seconds since epoch
$mSecondsInWeek = 604800;
$taxPeriodNumberCurrent = ceil(($currentTime - $timeSinceEpochOriginal)/$mSecondsInWeek);
//-----------------------------------------------------------------------------------------------//

//$taxPeriodNumber = lol;
$user_id = $_SESSION[ 'user_id' ];

if(!empty($_POST['taxPeriodNumberName']))
	{$taxPeriodNumber = htmlentities(mysqli_real_escape_string($dbc, $_POST['taxPeriodNumberName']));
	if(is_int($taxPeriodNumber)){$taxPeriodNumber;}
	elseif(is_numeric($taxPeriodNumber)){$taxPeriodNumber = intval($taxPeriodNumber);}
	else{$errors[] = 'Tax Period Number must be a numeric value!'; }
	}
else {$taxPeriodNumber = $taxPeriodNumberCurrent;}

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['taxPeriodNumberName'], $_POST['payChristmasSavingsCheck'.$taxPeriodNumber], $_POST['paySummerSavingsCheck'.$taxPeriodNumber],$_POST['timeSinceEpoch']))
	{ 	$errors[] = 'Improper values Provided';}
		//require ( 'login_tools.php' ) ; load('../../index.php'') ; }

//apsauga nuo ktiokiu datu nustatymu,kurie sugeneruotu arba neigiamus arba per didelius taxperiodNR
require ('limits/taxPeriodLimit.php');
if ($taxPeriodNumber < 0 OR $taxPeriodNumber >$taxPeriodLimit)
	{
		$errors[] = 'Tax Period Number Disallowed';
	}

//true false
if(!empty($_POST['payChristmasSavingsCheck'.$taxPeriodNumber]))
	{$payChristmasSavingsCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['payChristmasSavingsCheck'.$taxPeriodNumber]));}
	else{$payChristmasSavingsCheck = "false";}
//true false	
if(!empty($_POST['paySummerSavingsCheck'.$taxPeriodNumber]))
	{$paySummerSavingsCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['paySummerSavingsCheck'.$taxPeriodNumber]));}
	else{$paySummerSavingsCheck = "false";}
		
//numeric
if(!empty($_POST['timeSinceEpoch']))
	{$timeSinceEpoch = htmlentities(mysqli_real_escape_string($dbc, $_POST['timeSinceEpoch']));
	if(is_numeric($timeSinceEpoch)){$timeSinceEpoch = $timeSinceEpoch;}
	else{$errors[] = 'Time since Epoch must be a numeric value!';}
	}
else {$timeSinceEpoch = $timeSinceEpochOriginal+$taxPeriodNumber*604800000;}


if(!empty( $errors ))
{
	$loadIndexesArray = array("errors"=>$errors);
	$jsonFile = json_encode($loadIndexesArray);
	Die ($jsonFile = json_encode($loadIndexesArray));
}
//hours variables
$totalHours = 0;

require ('includes/selectAllCurrentPayments.php');
$unpaidBreakLength = $unpaidBreakLength /60;
$unsociable_Hour_Start = $unsociable_Hour_Start+11; //nes db yra tik indexas iki 12.
$unsociable_Hour_Finish = $unsociable_Hour_Finish+23;
$sociable_Hour_Start = $unsociable_Hour_Finish - 24;
$partialSickPay = $partialSickPay/100;
$partialPaternityPay = $partialPaternityPay/100;
$partialBereavementPay = $partialBereavementPay/100;
$partialCompassionatePay = $partialCompassionatePay/100;

//select all deductions
require ('includes/selectAllCurrentDeductions.php');
$taxRate = $taxRate/100;
$higherTaxRate = $higherTaxRate/100;
$additionalTaxRate = $additionalTaxRate/100;
$NIRate = $NIRate/100;
$addNIRate = $addNIRate/100;

/////////////////////sita bus galima perdaryti i paprastesni kai iftpnr== xx tx = 53 else 52
if ($taxPeriodNumber <=52)
{
	$taxPeriodQuantity = 52;
}
elseif ($taxPeriodNumber >52 and $taxPeriodNumber <=104 )
{
	$taxPeriodQuantity = 52;
}
elseif ($taxPeriodNumber >104 and $taxPeriodNumber <=156 )
{
	$taxPeriodQuantity = 52;
}
else{
	$taxPeriodQuantity = 52;
}
/////////////////
$taxPeriodStart = ($taxPeriodNumber - 1)*7+$weekStart; //dienos numeris
$saturdayHours  = 0;
$sundayHours = 0;
$saturdayExtraPay = 0;
$sundayExtraPay = 0;

$unsocial_hours = 0;
$unsocial_hours_hol = 0;
$unsocial_hours_family = 0;
$unsocial_hours_sick = 0;
$unsocial_hours_bereavement = 0;
$unsocial_hours_compassionate = 0;

$OT1Hours = 0;
$OT1Pay = 0;
$OT2Hours = 0;
$OT2Pay = 0;

//bank holiday variables
$bankHolidayHours = 0;
$bankHolidayPay = 0;
$bankHolidayClockInBonus = 0;


//payments variables
$enhancedHolidayPay = 0;
$holidayPay = 0;
$enhancedHolidayHours =0;
$holidayHours = 0;
$sicknessHours = 0;
$sicknessPay = 0;
$familyHours = 0;
$familyPay = 0;
$familyPayOneDay = 0;
$christmasSavingsPayment = 0;
$summerSavingsPayment = 0;
$bereavementPay = 0;
$bereavementHours = 0;
$compassionatePay = 0;
$compassionateHours = 0;

$compassionate_Overtime = 0;

$NIAmount = 0;
$taxAmount = 0;
$pensionAmount = 0;
$pensionAmountEmp = 0;
$studentLoanDeduction = 0;

//datos patikrinimas
function validateDate($date, $format= 'Y-m-d H:i:s')
{
	$d = DateTime::createFromFormat($format, $date);
	return $d && $d->format($format) == $date;
}

//funkcija suskaicuojanti unsocial hours
require('submitForm/unsocialHoursCalculator.php');

//funkcija skaiciuojanti bank holidays hours
require('submitForm/bankHolidaysHoursCalculator.php');

//funkcijos skaiciuojancio saturday hours
require('submitForm/saturdayHoursCalculator.php');

//funkcijos skaiciuojancios Sunday hours
require('submitForm/sundayHoursCalculator.php');

for($i=0;$i<7;$i++){
	
	//jei sios vertes nepateiktos, numariname scripta
	if(!isset($_POST['dayType'.$taxPeriodStart], $_POST['startHours'.$taxPeriodStart], $_POST['startMinutes'.$taxPeriodStart], $_POST['endHours'.$taxPeriodStart], $_POST['endMinutes'.$taxPeriodStart])) 
		{ require ( 'login_tools.php' ) ; load('index.php') ; }
	if(!isset($_POST['dayInSickButton'.$taxPeriodStart], $_POST['bereavementButton'.$taxPeriodStart], $_POST['compassionateButton'.$taxPeriodStart], $_POST['familyLeaveButton'.$taxPeriodStart], $_POST['enHolButon'.$taxPeriodStart])) 
		{ require ( 'login_tools.php' ) ; load('index.php') ; }
	if(!isset($_POST['sicknessButton'.$taxPeriodStart], $_POST['noteInput'.$taxPeriodStart], $_POST['dateInputHidden'.$taxPeriodStart])) 
		{ require ( 'login_tools.php' ) ; load('index.php') ; }
	
	
	
	//dayType INT
	if(!empty($_POST['dayType'.$taxPeriodStart]))
	{$dayTypeName = htmlentities(mysqli_real_escape_string($dbc, $_POST['dayType'.$taxPeriodStart]));
		if(is_int($dayTypeName)){$dayTypeName;}
		elseif(is_numeric($dayTypeName)){$dayTypeName = intval($dayTypeName);}
		else{$errors[] = 'Day Type '.($i+1).' Index must be a numeric value!'; }
	}
	else{$dayTypeName = 0;}
	
	
//isdirbtu valandu skaiciavimas----------------------------------------------------------------------------------------------------------------

	//startHours INT
	if(!empty($_POST['startHours'.$taxPeriodStart]))
	{$startHours = htmlentities(mysqli_real_escape_string($dbc, $_POST['startHours'.$taxPeriodStart]));
		if(is_int($startHours)){$startHours;}
		elseif(is_numeric($startHours)){$startHours = intval($startHours);}
		else{$errors[] = 'Start Hour '.($i+1).' must be a numeric value!'; }
	}
	else{$startHours = 0;}
	
	//startMinutes INT
	if(!empty($_POST['startMinutes'.$taxPeriodStart]))
	{$startMinutes = htmlentities(mysqli_real_escape_string($dbc, $_POST['startMinutes'.$taxPeriodStart]));
		if(is_int($startMinutes)){$startMinutes;}
		elseif(is_numeric($startMinutes)){$startMinutes = intval($startMinutes);}
		else{$errors[] = 'Start Minute '.($i+1).' must be a numeric value!'; }
	}
	else{$startMinutes = 0;}
	
	//endHours INT
	if(!empty($_POST['endHours'.$taxPeriodStart]))
	{$endHours = htmlentities(mysqli_real_escape_string($dbc, $_POST['endHours'.$taxPeriodStart]));
		if(is_int($endHours)){$endHours;}
		elseif(is_numeric($endHours)){$endHours = intval($endHours);}
		else{$errors[] = 'End Hour '.($i+1).' must be a numeric value!'; }
	}
	else{$endHours = 0;}
	
	//endMinutes INT
	if(!empty($_POST['endMinutes'.$taxPeriodStart]))
	{$endMinutes = htmlentities(mysqli_real_escape_string($dbc, $_POST['endMinutes'.$taxPeriodStart]));
		if(is_int($endMinutes)){$endMinutes;}
		elseif(is_numeric($endMinutes)){$endMinutes = intval($endMinutes);}
		else{$errors[] = 'End Minute '.($i+1).' must be a numeric value!'; }
	}
	else{$endMinutes = 0;}
	
	
	//dayInSickButtonValue
	if(!empty($_POST['dayInSickButton'.$taxPeriodStart]))
	{$dayInSickButtonValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['dayInSickButton'.$taxPeriodStart]));}
	else{$dayInSickButtonValue = "false";}
	
	//bereavementButton select value
	if(!empty($_POST['bereavementButton'.$taxPeriodStart]))
	{$bereavementButtonValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['bereavementButton'.$taxPeriodStart]));}
	else{$bereavementButtonValue = "false";}
	
	
	//compassionateButton select value
	if(!empty($_POST['compassionateButton'.$taxPeriodStart]))
	{$compassionateButtonValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['compassionateButton'.$taxPeriodStart]));}
	else{$compassionateButtonValue = "false";}
	
		
	//sicknessButtonValue
	if(!empty($_POST['familyLeaveButton'.$taxPeriodStart]))
	{$familyLeaveButtonValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['familyLeaveButton'.$taxPeriodStart]));}
	else{$familyLeaveButtonValue = "false";}
	
	
	
	//enhanced holiday button value
	if(!empty($_POST['enHolButon'.$taxPeriodStart]))
	{$enHolButton = htmlentities(mysqli_real_escape_string($dbc, $_POST['enHolButon'.$taxPeriodStart]));}
	else{$enHolButton = "false";}
	
	//sicknessButtonValue
	if(!empty($_POST['sicknessButton'.$taxPeriodStart]))
	{$sicknessButtonValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['sicknessButton'.$taxPeriodStart]));}
	else{$sicknessButtonValue = "false";}
	
	// note input value
	if(!empty($_POST['noteInput'.$taxPeriodStart]))
	{$noteInput = htmlentities(mysqli_real_escape_string($dbc, $_POST['noteInput'.$taxPeriodStart]));}
	else{$noteInput = "";}
	
	//date value dateInputHidden
	if(!empty($_POST['dateInputHidden'.$taxPeriodStart]))
	{$dateInput = htmlentities(mysqli_real_escape_string($dbc, $_POST['dateInputHidden'.$taxPeriodStart]));
		$dateInputCheck = validateDate($dateInput, 'Y-m-d');
		if ($dateInputCheck == true)
		{$dateInput = $dateInput;}
		else {
			$errors[] = 'Invalid Start date format for day nr. '.$i.'!' ;
		}
	}
	else{$errors[] = 'Start date for week day nr. '.($i+1).' is not set!' ;}
	
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
	
	
	//apsauga nuo per dideliu ar per mazu datu ivedimo, bet turetu uztekti ir taxperiodnr apsaugos.
	require('limits/flickerbookStartEndDates.php');

	if ($dateInput < $startDateOfFlickerbook OR $dateInput >$surrentEndDateOfFlickrbook)
	{
		$errors[] = "Date disallowed";
	}
	
	if(!empty( $errors ))
	{
		$loadIndexesArray = array("errors"=>$errors);
		$jsonFile = json_encode($loadIndexesArray);
		Die ($jsonFile = json_encode($loadIndexesArray));
	}
	
	//suskaiciuojamos isdribtos valados
	
	$startTime = round(($startHours +($startMinutes/60)),4); //round($startTime,4);
	$endTime = round(($endHours + ($endMinutes/60)),4);
	
	//isdribtos valandos su neapmokamais breakais
	$hoursWorked = round(($endTime - $startTime),2);
	
	
//isskaiciuojami neapmokami breakai is bendru valandu-----------------------------------------------------------------------
	if ($unpaidBreakQuantity == 0){$unpaidBreakLength = 0;}//reikalinga siuntimui i unsocial_hour_calculator funkcija

	if ($dayTypeName == 1)
	{
		$totalHours+=round($endTime-$startTime);
		
		//isminusuojame neapmokamus breakus
		if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $totalHours>3.5)
		{$totalHours-= $unpaidBreakLength;}
		elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $totalHours>=8 )
		{$totalHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		elseif($unpaidBreakQuantity == 3 AND $totalHours>=12)
		{$totalHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		else{$totalHours;}
		
		
		//unsocial_hours skaiciavimas
		if ($unsociableHoursCheck == 1){
		$unsocial_hours += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity );
		}
	}	
	
	
//bank holiday valandu skaiciavimo pradzia----------------------------------------------------------------------------------------------
	$startTimeMs = $timeSinceEpoch + $startTime*60*60*1000;
	$endTimeMs = $timeSinceEpoch + $endTime*60*60*1000;
		
	if ($dayTypeName == 1)
	{		
		$bankHolidayHoursCIbonusArray = bankHolidayHourCalculator($timeSinceEpoch, $startTimeMs, $endTimeMs, $bankHolidayHours, $bankHolidayClockInBonus, $clockInBonusHours, $unpaidBreakLength, $unpaidBreakQuantity, $bankHolidayClockInBonusValue);
		$bankHolidayHours += $bankHolidayHoursCIbonusArray[0];
		$bankHolidayClockInBonus += $bankHolidayHoursCIbonusArray[1];
	}
	
	//extra weekend pay calculation

	if ($dayTypeName == 1)
	{
		if ($weekendHoursCheck == 1)
		{
			if ($weekStart == 0)
			{
				$saturdayHours += saturdayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
				$sundayHours += sundayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
			}
			elseif($weekStart == 1)
			{
				$saturdayHours += saturdayHourCalculator2 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
				$sundayHours += sundayHourCalculator2 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
			}
			elseif($weekStart == 2)
			{
				$saturdayHours += saturdayHourCalculator2 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
				$sundayHours += sundayHourCalculator3 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
			}
			else{
				$saturdayHours += saturdayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
				$sundayHours += sundayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity );
			}
		}
		else{
			$saturdayHours =0;
			$sundayHours = 0;
		}
	}
		

	$timeSinceEpoch+=86400000;

	
	
	// holiday pay calculation
	if ($dayTypeName == 3)
	{
		//jei mokama uz unsocial hours
		if ($unsociableHoursCheck == 1)
		{
			$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
			$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			
			if ($enHolButton == "true" )
			{
				$enhancedHolidayHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
			}
			else{
				$holidayHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
			}
			
			$unsocial_hours_hol += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
		}
		//jei nemokama uz unsocial hours
		else{
			
			$totalHours+= $shiftLengthValue;
			$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			if ($enHolButton == "true" )
			{
				$enhancedHolidayHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
			}
			else{
				$holidayHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
			}
			$unsocial_hours_hol +=0;// jauciu net nereikia nes ju nera lol
		}
	}	
	
	if ($dayTypeName == 4) // reikia isiaiskinti kaip skaiciuojamos unsocial hours: ar atostogos pridedmos prie laiko pabaigos ar ne? ;/
	//ir jei dirbama 12h pamaina tai atostogos turetu buti ne 3.5 o 5.75, kaip skaiciuoti tokiu atveju??
	{
		if ($enHolButton == "true" )
		{
			//half night
			$totalHours+=(round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4))*2;
			$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
						
			if ($unsociableHoursCheck == 1){
			$unsocial_hours += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			$unsocial_hours += ($unpaidBreakQuantity*$unpaidBreakLength)/2;
			}	
			//half holiday
			$enhancedHolidayHours += $shiftLengthValue/2;		
			$enhancedHolidayHours -=($unpaidBreakQuantity*$unpaidBreakLength)/2;
			$enhancedHolidayPay += $enhancedHolidayHours*$enhancedHolidayRate;
			
			$startTimeHol = $endTime;
			$endTimeHol = $endTime + $shiftLengthValue/2;
			
			if ($unsociableHoursCheck == 1){
			$unsocial_hours_hol += unscocial_hour_calculator($startTimeHol, $endTimeHol, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			$unsocial_hours_hol += $unpaidBreakQuantity*$unpaidBreakLength/2;
			}
			
			//$unsocial_hours -= $unsocial_hours_hol;

		}
		else
		{
					
			$totalHours+=(round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4))*2;
			$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			
			if ($unsociableHoursCheck == 1){
			$unsocial_hours += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			$unsocial_hours += ($unpaidBreakQuantity*$unpaidBreakLength)/2;
			}
			$holidayHours += $shiftLengthValue/2;
			$holidayHours -= ($unpaidBreakQuantity*$unpaidBreakLength)/2;
			$holidayPay += $holidayHours*$hourlyRate;
			
			
			$startTimeHol = $endTime;
			$endTimeHol = $endTime + $shiftLengthValue/2;
			
			if ($unsociableHoursCheck == 1){
			$unsocial_hours_hol += unscocial_hour_calculator($startTimeHol, $endTimeHol, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			$unsocial_hours_hol += $unpaidBreakQuantity*$unpaidBreakLength/2; //nes breakai jau isminusuoti
			}
			
			//$unsocial_hours -= $unsocial_hours_hol;
		}
	}
	
	
	if ($dayTypeName == 6)
	{
		if ($dayInSickButtonValue == "true"){
			
		$totalHours+=(round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4))*2;
		//isminusuojame neapmokamus breakus
		if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $totalHours>3.5)
		{$totalHours-= $unpaidBreakLength;}
		elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $totalHours>=8 )
		{$totalHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		elseif($unpaidBreakQuantity == 3 AND $totalHours>=12)
		{$totalHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		else{$totalHours;}
		
		if ($unsociableHoursCheck == 1){
		$unsocial_hours += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
		}
		
		$sicknessHours += $shiftLengthValue - ($endTime - $startTime);
		
		//isminusuojame neapmokamus breakus is sick hours
		if(($unpaidBreakQuantity == 1)  AND $totalHours>3.5)
		{$sicknessHours;}//jei total hours daugiau uz 3.5 nebeminusjuojame breako
		elseif(($unpaidBreakQuantity == 1)  AND $totalHours<3.5)
		{$sicknessHours -= $unpaidBreakLength;}
		elseif(($unpaidBreakQuantity == 2) AND $totalHours> 3.5 )
		{$sicknessHours-= $unpaidBreakLength;} //jei 
		elseif($unpaidBreakQuantity == 2 AND $totalHours<3.5)
		{$sicknessHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		elseif($unpaidBreakQuantity == 3 AND $totalHours<3.5)
		{$sicknessHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
		elseif($unpaidBreakQuantity == 3 AND $totalHours>3.5 )
		{$sicknessHours-= $unpaidBreakLength*2;}
		elseif($unpaidBreakQuantity == 3 AND $totalHours> 7 )
		{$sicknessHours-= $unpaidBreakLength;}
		else{$sicknessHours;}
		
		
		$sicknessPay = $sicknessHours*$hourlyRate*$partialSickPay; 
		
		$startTimeSick = $endTime;
		$endTimeSick = $startTime + $shiftLengthValue;
		if ($unsociableHoursCheck == 1){
		$unsocial_hours_sick += unscocial_hour_calculator($startTimeSick, $endTimeSick, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
		}
		//be sito nuima breaka, kai nereikia
		if(($unpaidBreakQuantity == 1)  AND $totalHours>3.5)
		{$unsocial_hours_sick+=$unpaidBreakLength ;}//jei total hours daugiau uz 3.5 nebeminusjuojame breako
		
		}
		
		else{
		$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
		$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
		
		$unsocial_hours_sick += 0;
		$sicknessHours += 0;
		$sicknessPay += 0;
		if ($unsociableHoursCheck == 1){
		$unsocial_hours += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
		}
		}
	}
	
	
	
	if ($dayTypeName == 7)
	{
		if ($unsociableHoursCheck == 1)
		{
			$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
			//$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			
			if ($sicknessButtonValue == "true" )
			{
				$sicknessHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
				$sicknessPay = $sicknessHours*$hourlyRate*$partialSickPay; 
				$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				$unsocial_hours_sick += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
				
			}
			else if ($sicknessButtonValue == "false")
			{
				$sicknessHours +=0;
				$sicknessPay +=0;
				$unsocial_hours_sick += 0;
			}
			else
			{
				echo 'Something wrong with sick pay calculation!';
			}
		}
		elseif ($unsociableHoursCheck == 0){
			if ($sicknessButtonValue == "true" )
			{
				$totalHours+= $shiftLengthValue;
				$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				$sicknessHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
				$sicknessPay = $sicknessHours*$hourlyRate*$partialSickPay; 
			}
			elseif($sicknessButtonValue == "false")
			{
				$sicknessHours +=0;
				$sicknessPay +=0;
				//$unsocial_hours_sick += 0;
			}
			else{
				echo 'Something wrong with sick pay calculation!';
			}
			
		}
		else{}
	}
	
	if ($dayTypeName == 9)
	{
		if ($unsociableHoursCheck == 1){
			$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
			//$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			
			if ($familyLeaveButtonValue == "true" )
			{
				$familyHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
				$familyPay = $familyHours*$hourlyRate*$partialPaternityPay; 
				$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				$unsocial_hours_family += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			}
			else if ($familyLeaveButtonValue == "false")
			{
				$familyHours +=0;
				$familyPay +=0;
				$unsocial_hours_family += 0;
			}
			else
			{
				echo 'Error calculating parental pay!';
			}
		}
		elseif ($unsociableHoursCheck == 0 )
		{
			if ($familyLeaveButtonValue == "true" ){
				$totalHours+= $shiftLengthValue;
				$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				$familyHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
				$familyPay = $familyHours*$hourlyRate*$partialPaternityPay;
			}
			else if ($familyLeaveButtonValue == "false")
			{
				$familyHours +=0;
				$familyPay +=0;
			}
			else
			{
				echo 'Error calculating parental pay!';
			}
		}
		else{
			echo 'Error calculating parental pay!';
		}		
	}
	//bereavement leave
	if ($dayTypeName == 10)
	{
		if ($unsociableHoursCheck == 1){
			$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
			//$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
			
			if ($bereavementButtonValue == "true" )
			{
				$bereavementHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
				$bereavementPay = $bereavementHours*$hourlyRate*$partialBereavementPay; 
				$totalHours=$totalHours-($unpaidBreakQuantity*$unpaidBreakLength);
				$unsocial_hours_bereavement += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
			}
			else if ($bereavementButtonValue == "false")
			{
				$bereavementHours +=0;
				$bereavementPay +=0;
				$unsocial_hours_bereavement += 0;
			}
			else
			{
				echo 'Something wrong with bereavement pay calculation!';
			}
		}
		elseif ($unsociableHoursCheck == 0)
		{
			if ($bereavementButtonValue == "true" ){
				$totalHours+= $shiftLengthValue;
				$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				$bereavementHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
				$bereavementPay = $bereavementHours*$hourlyRate*$partialBereavementPay;
			}
			else if ($bereavementButtonValue == "false")
			{
				$bereavementHours +=0;
				$bereavementPay +=0;
			}
			else
			{
				echo 'Something wrong with bereavement pay calculation!';
			}
		}
		else{
			echo 'Something wrong with bereavement pay calculation!';
		}
	}
	
		if ($dayTypeName == 11)
		{
			if ($unsociableHoursCheck == 1){
				$totalHours+=round(($endHours+($endMinutes/60)-($startHours+($startMinutes/60))),4);
				//$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
				
				if ($compassionateButtonValue == "true" )
				{
					$compassionateHours += (($endTime - $startTime) - $unpaidBreakQuantity * $unpaidBreakLength);
					$compassionatePay = $compassionateHours*$hourlyRate*$partialCompassionatePay; 
					$totalHours=$totalHours-($unpaidBreakQuantity*$unpaidBreakLength);
					if ($unsociableHoursCheck == 1){
					$unsocial_hours_compassionate += unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity  );
					}
				}
				else if ($compassionateButtonValue == "false")
				{
					$compassionateHours +=0;
					$compassionatePay +=0;
					$unsocial_hours_compassionate += 0;
				}
				else
				{
					echo 'Something wrong with compassionate pay calculation!';
				}
			}	
			elseif ($unsociableHoursCheck == 0){
				if ($compassionateButtonValue == "true" ){
					$totalHours+= $shiftLengthValue;
					$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);
					$compassionateHours += ($shiftLengthValue - $unpaidBreakQuantity * $unpaidBreakLength);
					$compassionatePay = $compassionateHours*$hourlyRate*$partialCompassionatePay;
				}
				else if ($compassionateButtonValue == "false")
				{
					$compassionateHours +=0;
					$compassionatePay +=0;
				}
				else
				{
					echo 'Something wrong with compassionate pay calculation!';
				}
			}
			else{
				echo 'Something wrong with compassionate pay calculation!';
			}
	}
	
	//-----------------------------convert boolean checkbox values to 1 or 0-------------------------------------------------//

		if ($sicknessButtonValue == "true"){$sicknessButtonValue = 1;}else{$sicknessButtonValue =0;}
		if ($dayInSickButtonValue == "true"){$dayInSickButtonValue = 1; }else{$dayInSickButtonValue =0;}
		if ($familyLeaveButtonValue == "true"){$familyLeaveButtonValue = 1; }else{$familyLeaveButtonValue =0;}
		if ($enHolButton == "true"){$enHolButton = 1; }else{$enHolButton =0;}
		if ($bereavementButtonValue  == "true"){$bereavementButtonValue  = 1; }else{$bereavementButtonValue  =0;}
		if ($compassionateButtonValue == "true"){$compassionateButtonValue = 1; }else{$compassionateButtonValue =0;}
	
	
	// siunciame indexus i duomenu baze
	$queryInsertIndexes = "INSERT INTO day_indexes (user_id, day_nr, dayType, startH, startM, endH, endM, sickB, DISickB, famB, enHolB, note, date, berB, compB, taxPeriodNr, employer, job_title, shift_t_val, hours_worked) VALUES ('$user_id', '$taxPeriodStart', '$dayTypeName', '$startHours', '$startMinutes', '$endHours', '$endMinutes', '$sicknessButtonValue', '$dayInSickButtonValue', '$familyLeaveButtonValue', '$enHolButton', '$noteInput', '$dateInput', '$bereavementButtonValue', '$compassionateButtonValue', '$taxPeriodNumber', '$employerName', '$jobTitle', '$shiftTypeValue', '$hoursWorked')";
	$queryDeleteIndexes = "DELETE FROM day_indexes WHERE user_id = '$user_id' and day_nr ='$taxPeriodStart'";
	
	$resultDeleteIndexes = mysqli_query($dbc, $queryDeleteIndexes);
	$resultInsertIndexes = mysqli_query($dbc, $queryInsertIndexes);
	

	
	
	$taxPeriodStart++;
}//ciklo pabaiga
	
//$totalHours-=($unpaidBreakQuantity*$unpaidBreakLength);

	$totalHours -= ($enhancedHolidayHours+$holidayHours+$sicknessHours+$familyHours+$bereavementHours+$compassionateHours);

	
	
//overtime skaiciavimas--------------------------------------------------------------------------------------------	
	$totalHoursForOvertime = $totalHours;
	
		//kadangi visos sick hol, ber comp valados jau pridetos prie totalhours, tai jei uz jas virsvalandziai nemokami, jas isminusuojam.
		//jei sick pay isiskiaciuoja i overtime
		if ($sick_Overtime == 1){$totalHoursForOvertime+=$sicknessHours;}
		else{$totalHoursForOvertime -=$sicknessHours ;}
		
		// jei atostogos isiskaiciuoja i overtime
		if ($holiday_Overtime == 1){$totalHoursForOvertime+= ($holidayHours + $enhancedHolidayHours);}
		else{$totalHoursForOvertime  -= ($holidayHours + $enhancedHolidayHours);}
		
		// jei bereavement isiskaiciuoja i overime
		if ($bereavement_Overtime == 1){$totalHoursForOvertime+=$bereavementHours;}
		else{$totalHoursForOvertime -= $bereavementHours;}
		
		//jei compassionate isikaiciuoja i overtime
		if ($comp_Overtime == 1){$totalHoursForOvertime += $compassionateHours;}
		else{$totalHoursForOvertime  -= $compassionateHours;;}
		
		//jei compassionate isikaiciuoja i overtime
		if ($paternity_Overtime == 1){$totalHoursForOvertime +$familyHours;}
		else{$totalHoursForOvertime -= $familyHours;}
		
		// parental pay isikaiciuoja i overtime
		//if ($parental_Overtime == 1){$totalHoursForOvertime += $bereavementHours;}
		//else{$totalHoursForOvertime;}
	
//jei nemokami jokie virsvalandziai
if ($overtimeCheck == 0 and $overtimeCheck2 == 0){
	$OT1Hours = 0;
	$OT2Hours = 0;
}
//jei mokami tik vieno tarifo virsvalabdziai
elseif ($overtimeCheck==1 and $overtimeCheck2 == 0){
	$OT1Hours = $totalHoursForOvertime - $overtime1_Start; //48-37.5=11.5
	$OT2Hours = 0;
	//$totalHours = $overtime1_Start - ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours);
	$totalHours = $totalHoursForOvertime -$OT1Hours;
	$totalHours -= ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours +$compassionateHours);
}
//jei mokami dvieju tarifu virsvalandziai
elseif ($overtimeCheck==1 and $overtimeCheck2 == 1){
	if ($totalHoursForOvertime<$overtime1_Start) 
	{
		$OT1Hours = 0;
		$OT2Hours = 0;
	}
	else if(($totalHoursForOvertime>$overtime1_Start) and ($totalHoursForOvertime<=$overtime1_Finish)){
		$OT1Hours = $totalHoursForOvertime - $overtime1_Start;
		$OT2Hours = 0;
		//$totalHours = $overtime1_Start - ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours);
		$totalHours = $totalHoursForOvertime -$OT1Hours;
		$totalHours -= ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours +$compassionateHours);
	}
	elseif($totalHoursForOvertime>$overtime2_start) //jei isdirbta daugiau nei 48 valandos
		{
			$OT1Hours = $overtime1_Finish - $overtime1_Start; //48-37.5=11.5
			$OT2Hours = $totalHoursForOvertime - $overtime2_start;
			//$totalHours = $overtime1_Start - ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours);
			$totalHours = $totalHoursForOvertime -$OT1Hours-$OT2Hours;
			$totalHours -= ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours+$compassionateHours);
		}
}	
// jei kazkaip pazymimas antras variantas, bet pirmas ne
elseif ($overtimeCheck==0 and $overtimeCheck2 == 1){
	$OT1Hours = $totalHoursForOvertime - $overtime1_Start; //48-37.5=11.5
	$OT2Hours = 0;
	//$totalHours = $overtime1_Start - ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours);
	$totalHours = $totalHoursForOvertime -$OT1Hours;
	$totalHours -= ($holidayHours + $enhancedHolidayHours+$sicknessHours+$bereavementHours+$compassionateHours);
}
else{
	$OT1Hours = 0;
	$OT2Hours = 0;
}

	$OT1Pay = round(($OT1Hours*$overtime1_rate),2);
	$OT2Pay = round(($OT2Hours*$overtime2_rate),2);

	
//rounding values to two decimals

$totalHours = round(($totalHours*1.00),2);	

$enhancedHolidayPay = round(($enhancedHolidayHours*$enhancedHolidayRate), 2);
$holidayPay = round (($holidayHours*$hourlyRate), 2);
//payments calculation

$basicHoursPay = round(($totalHours*$hourlyRate),2); // turi buti paskaiciuota pries skaiciuojant overtime
$unsocial_prem = round(($unsocial_hours*$unsocial_prem_rate),2);
$unsocial_prem_hol = round(($unsocial_hours_hol*$unsocial_prem_rate),2);
$unsocial_prem_sick = round(($unsocial_hours_sick*$unsocial_prem_rate*$partialSickPay),2);
$unsocial_prem_family = round(($unsocial_hours_family*$unsocial_prem_rate*$partialPaternityPay),2);
$unsocial_prem_bereavement = round(($unsocial_hours_bereavement*$unsocial_prem_rate*$partialBereavementPay),2);
$unsocial_prem_compassionate = round(($unsocial_hours_compassionate*$unsocial_prem_rate*$partialCompassionatePay),2);
$bankHolidayHoursPay = round($bankHolidayHours*$hourlyRate*($bHolPayTimes-1),2);
$saturdayExtraPay = round($saturdayHours*$hourlyRate*($saturdayExtraRate-1),2);
$sundayExtraPay = round($sundayHours*$hourlyRate*($sundayExtraRate-1),2);

//------------------------------------------------------------christmas ir summer savings ismokejimas--------------------------------

//nustatome ar rodyti ar paslepti christmas, summer savings ismokejimo mygtuka

$querySavingsSum = "SELECT SUM(summer_sav), SUM(chris_sav) FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSavingsSum = mysqli_query($dbc, $querySavingsSum);
$num19 = mysqli_num_rows($resultSavingsSum);

	if ($num19>0){
		while ($row19 = mysqli_fetch_array($resultSavingsSum, MYSQLI_ASSOC))
		{
			$summerSavingsDeductionsTotal = $row19['SUM(summer_sav)'];
			$christmasSavingsDeductionsTotal = $row19['SUM(chris_sav)'];
		}
	}
	else{
			$summerSavingsPayment = 0;	
			$christmasSavingsPayment = 0;	
	}
	
	//surenkame suma , kiek jau buvo ismoketa summer savings ir christmas savings
$querySummerSavingsPaymentsSum = "SELECT SUM(summer_sav), SUM(chris_sav) FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSummerSavingsPaymentsSum = mysqli_query($dbc, $querySummerSavingsPaymentsSum);
$num20 = mysqli_num_rows($resultSummerSavingsPaymentsSum);

	if ($num20>0){
		while ($row20 = mysqli_fetch_array($resultSummerSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$SummerSavingsPaymentsSum = $row20['SUM(summer_sav)'];
			$christmasSavingsPaymentsSum = $row20['SUM(chris_sav)'];
		}
	}
	else{
			$SummerSavingsPaymentsSum = 0;	
			$christmasSavingsPaymentsSum = 0;
	}
	
	
// jei neismoketu verciu suma yra didesne uz ismoketu verciu suma, parodome ismokejimo mygtuka, kitu atveju ji paslepiame	
//summerSavingsPaymentCollected - surinkta ismokejimui suma, bet dar nepasirinkta kad butu ismoketa
if ($summerSavingsDeductionsTotal - $SummerSavingsPaymentsSum > 0){
	$summerSavingsPaymentCollected = $summerSavingsDeductionsTotal - $SummerSavingsPaymentsSum;
	}
else{
	$summerSavingsPaymentCollected = 0;
	}
// jei neismoketu verciu suma yra didesne uz ismoketu verciu suma, parodome ismokejimo mygtuka, kitu atveju ji paslepiame
if ($christmasSavingsDeductionsTotal - $christmasSavingsPaymentsSum >0){
	$christmasSavingsPaymentCollected = $christmasSavingsDeductionsTotal - $christmasSavingsPaymentsSum;
	}
else{
	$christmasSavingsPaymentCollected = 0;
	}
	
$loadIndexesArray = array("summerSavingsPaymentCollected"=>$summerSavingsPaymentCollected, "christmasSavingsPaymentCollected"=>$christmasSavingsPaymentCollected);
$loadIndexesArray += array("saturdayHours"=>$saturdayHours, "sundayHours"=>$sundayHours);
$loadIndexesArray += array("saturdayExtraPay"=>$saturdayExtraPay, "sundayExtraPay"=>$sundayExtraPay);
$loadIndexesArray += array("saturdayExtraRate"=>$saturdayExtraRate, "sundayExtraRate"=>$sundayExtraRate);


$loadIndexesArrayNoPremium = array("summerSavingsPaymentCollected"=>$summerSavingsPaymentCollected, "christmasSavingsPaymentCollected"=>$christmasSavingsPaymentCollected);
$loadIndexesArrayNoPremium += array("saturdayHours"=>$saturdayHours, "sundayHours"=>$sundayHours);
$loadIndexesArrayNoPremium += array("saturdayExtraPay"=>$saturdayExtraPay, "sundayExtraPay"=>$sundayExtraPay);
$loadIndexesArrayNoPremium += array("saturdayExtraRate"=>$saturdayExtraRate, "sundayExtraRate"=>$sundayExtraRate);

//patikriname ar ismokamas chrismas savings
if ($payChristmasSavingsCheck == "true" AND $paySummerSavingsCheck == "false"){
	
	// surenkame suma visu iki datos atliktus christmas savings deductions
	$queryChritmasSavingsSum = "SELECT SUM(chris_sav) FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultChritmasSavingsSum = mysqli_query($dbc, $queryChritmasSavingsSum);
	$num12 = mysqli_num_rows($resultChritmasSavingsSum);

	if ($num12>0){
		while ($row12 = mysqli_fetch_array($resultChritmasSavingsSum, MYSQLI_ASSOC))
		{
			$christmasSavingsDeductionsTotal = $row12['SUM(chris_sav)'];
		}
	}
	else{
			$christmasSavingsDeductionsTotal = 0;	
	}
	
	//surenkame suma , kiek jau buvo ismoketa christmas savings
	$queryChritmasSavingsPaymentsSum = "SELECT SUM(chris_sav) FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultChritmasSavingsPaymentsSum = mysqli_query($dbc, $queryChritmasSavingsPaymentsSum);
	$num15 = mysqli_num_rows($resultChritmasSavingsPaymentsSum);

	if ($num15>0){
		while ($row15 = mysqli_fetch_array($resultChritmasSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$christmasSavingsPaymentsSum = $row15['SUM(chris_sav)'];
		}
	}
	else{
			$christmasSavingsPaymentsSum = 0;	
	}
	
	// visu surinktu christmas deductions verte atemus jau ismoketu chris sav suma ir bus $christmasSavingsPayment
	
	$christmasSavingsPayment = $christmasSavingsDeductionsTotal - $christmasSavingsPaymentsSum;
	$christmasSavingsDeduction = 0 - $christmasSavingsPayment; //jei ismokame visa sukaupta suma, ta savaite daugiau nebenuimame deduction
	
}


//patikriname ar ismokamas summer savings
elseif ($paySummerSavingsCheck == "true" AND $payChristmasSavingsCheck == "false"){
	$querySummerSavingsSum = "SELECT SUM(summer_sav) FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultSummerSavingsSum = mysqli_query($dbc, $querySummerSavingsSum);
	$num13 = mysqli_num_rows($resultSummerSavingsSum);

	if ($num13>0){
		while ($row13 = mysqli_fetch_array($resultSummerSavingsSum, MYSQLI_ASSOC))
		{
			$summerSavingsDeductionsTotal = $row13['SUM(summer_sav)'];
		}
	}
	else{
			$summerSavingsDeductionsTotal = 0;	
	}
	//surenkame suma , kiek jau buvo ismoketa summer savings
	$querySummerSavingsPaymentsSum = "SELECT SUM(summer_sav) FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultSummerSavingsPaymentsSum = mysqli_query($dbc, $querySummerSavingsPaymentsSum);
	$num16 = mysqli_num_rows($resultSummerSavingsPaymentsSum);

	if ($num16>0){
		while ($row16 = mysqli_fetch_array($resultSummerSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$SummerSavingsPaymentsSum = $row16['SUM(summer_sav)'];
		}
	}
	else{
			$SummerSavingsPaymentsSum = 0;	
	}
	
	// visu surinktu christmas deductions verte atemus jau ismoketu chris sav suma ir bus $christmasSavingsPayment
	$summerSavingsPayment = $summerSavingsDeductionsTotal - $SummerSavingsPaymentsSum;
	$summerSavingsDeduction = 0 - $summerSavingsPayment; //jei ismokame visa sukaupta suma, ta savaite daugiau nebenuimame deduction
}
//jei abu savingai ismokami iskarto
elseif ($paySummerSavingsCheck == "true" AND $payChristmasSavingsCheck == "true" ){
	
	$querySavingsSum = "SELECT SUM(summer_sav), SUM(chris_sav) FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultSavingsSum = mysqli_query($dbc, $querySavingsSum);
	$num17 = mysqli_num_rows($resultSavingsSum);

	if ($num17>0){
		while ($row17 = mysqli_fetch_array($resultSavingsSum, MYSQLI_ASSOC))
		{
			$summerSavingsDeductionsTotal = $row17['SUM(summer_sav)'];
			$christmasSavingsDeductionsTotal = $row17['SUM(chris_sav)'];
		}
	}
	else{
			$summerSavingsPayment = 0;	
			$christmasSavingsPayment = 0;	
	}
	
	//surenkame suma , kiek jau buvo ismoketa summer savings ir christmas savings
	$querySummerSavingsPaymentsSum = "SELECT SUM(summer_sav), SUM(chris_sav) FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr < '$taxPeriodNumber'"; 
	$resultSummerSavingsPaymentsSum = mysqli_query($dbc, $querySummerSavingsPaymentsSum);
	$num18 = mysqli_num_rows($resultSummerSavingsPaymentsSum);

	if ($num18>0){
		while ($row18 = mysqli_fetch_array($resultSummerSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$SummerSavingsPaymentsSum = $row18['SUM(summer_sav)'];
			$christmasSavingsPaymentsSum = $row18['SUM(chris_sav)'];
		}
	}
	else{
			$SummerSavingsPaymentsSum = 0;	
			$christmasSavingsPaymentsSum = 0;
	}
	
	$summerSavingsPayment = $summerSavingsDeductionsTotal - $SummerSavingsPaymentsSum;
	$christmasSavingsPayment = $christmasSavingsDeductionsTotal - $christmasSavingsPaymentsSum;
	
	$christmasSavingsDeduction = 0 - $christmasSavingsPayment; //jei ismokame visa sukaupta suma, ta savaite daugiau nebenuimame deduction
	$summerSavingsDeduction = 0 - $summerSavingsPayment; //jei ismokame visa sukaupta suma, ta savaite daugiau nebenuimame deduction
}
elseif($paySummerSavingsCheck == "false" AND $payChristmasSavingsCheck == "false" ){
	$summerSavingsPayment = 0;
	$christmasSavingsPayment = 0;	
}
else{
	$summerSavingsPayment = 0;
	$christmasSavingsPayment = 0;
}



$totalGrossPayments = $basicHoursPay+$unsocial_prem+$unsocial_prem_hol+$unsocial_prem_sick+$unsocial_prem_family+$OT1Pay;
$totalGrossPayments += $OT2Pay+$enhancedHolidayPay+$holidayPay+$sicknessPay+$familyPay+$bankHolidayHoursPay+$bankHolidayClockInBonus;
$totalGrossPayments += $additionalPayment+$payBack+$pieceWork+$unsocial_prem_bereavement +$bereavementPay+$compassionatePay;
$totalGrossPayments += $summerSavingsPayment+$christmasSavingsPayment+$SSP+$SPP+$additionalPayment2+$additionalPayment3+$sundayExtraPay;
$totalGrossPayments += $saturdayExtraPay+$SAP+$salary+$bonus+$commissions; 

//suskaiciuojame pension amount
$pensionAmount= round(($totalGrossPayments*$pensionRate/100),2);
$pensionAmountEmp= round(($totalGrossPayments*$pensionRateEmp/100),2);
//jei pensija nuskaiciuojama pries mokescius isminusuojame pensionAmount is visos sumos
if ($pensionBeforeTax == 1)
{
	$totalGrossPayments -= $pensionAmount;
}




//naujas tax skaiciavimas itraukiant naujus threshold ir rates
/*
if($totalGrossPayments>(($additionalTaxThreshold)/$taxPeriodQuantity))
{
	$taxAmount = ($totalGrossPayments - $additionalTaxThreshold/$taxPeriodQuantity)*$additionalTaxRate;
	$taxAmount += (($additionalTaxThreshold - $higherTaxThreshold)/$taxPeriodQuantity)*$higherTaxRate;
	$taxAmount += round((($higherTaxThreshold/$taxPeriodQuantity)*$taxRate),2);
}
elseif($totalGrossPayments>=(($personalAllowance+$higherTaxThreshold)/$taxPeriodQuantity))
{
	$taxAmount = ($totalGrossPayments - ($personalAllowance+$higherTaxThreshold)/$taxPeriodQuantity)*$higherTaxRate;
	$taxAmount += round(((($higherTaxThreshold-$personalAllowance)/$taxPeriodQuantity)*$taxRate),2);
}
elseif ($totalGrossPayments>=($personalAllowance/$taxPeriodQuantity)){
$taxAmount = round((($totalGrossPayments-$personalAllowance/$taxPeriodQuantity)*$taxRate),2);
}
else {$taxAmount = 0;}
*/

//pakolkas taikome tik sena tax skaiciavimo buda
if ($totalGrossPayments>($personalAllowance/$taxPeriodQuantity)){
$taxAmount = round((($totalGrossPayments-$personalAllowance/$taxPeriodQuantity)*$taxRate),2);
}
else {$taxAmount = 0;}


if ($totalGrossPayments>$NIThreshold AND $totalGrossPayments<=$addNIThreshold){
$NIAmount = round((($totalGrossPayments - $NIThreshold)*$NIRate),2);
}
elseif ($totalGrossPayments>$addNIThreshold)
{
	$NIAmount = round((($addNIThreshold - $NIThreshold)*$NIRate),2);
	$NIAmount += round((($totalGrossPayments - $addNIThreshold)*$addNIRate),2);
}
else {$NIAmount = 0;}


//calculating student loan
if ($studentLoanCheck == 1)
{
	if ($totalGrossPayments>$studentLoan_th){
		$studentLoanDeduction = ($totalGrossPayments - $studentLoan_th)*($studLoanRate/100); 
		$studentLoanDeduction = round(($studentLoanDeduction-0.5),0); //suapvaliname i mazaja puse iki artimiausio svaro
	}
	else{
		$studentLoanDeduction = 0;
	}
}
else{
	$studentLoanDeduction = 0;
}




//$totalDeductions = round(($taxAmount+$NIAmount+$pensionAmount+$unionDeduction+$otherDeduction+$christmasSavingsDeduction),2);
//sutvarkome summer savings deduction jei vete yra neigiama. neigiama verte gaunama, kai i deductions_amount iterpiame neigiama verte su
//ismoketais seivingais.
if ($summerSavingsDeduction<0){
	$summerSavingsDeduction2  = 0;
}
else{
	$summerSavingsDeduction2 = $summerSavingsDeduction;
}
if ($christmasSavingsDeduction<0){
	$christmasSavingsDeduction2  = 0;
}
else{
	$christmasSavingsDeduction2 = $christmasSavingsDeduction;
}

//if pension is deducted before or after tax
if ($pensionBeforeTax == 0){
	$totalDeductions = round(($taxAmount+$NIAmount+$pensionAmount+$unionDeduction+$otherDeduction+$otherDeduction2+$otherDeduction3+$christmasSavingsDeduction2+$summerSavingsDeduction2+$companyLoan+$studentLoanDeduction),2);
	}
else if ($pensionBeforeTax == 1)
{
	$totalDeductions = round(($taxAmount+$NIAmount+$unionDeduction+$otherDeduction+$otherDeduction2+$otherDeduction3+$christmasSavingsDeduction2+$summerSavingsDeduction2+$companyLoan+$studentLoanDeduction),2);
}
else {
	$totalDeductions = round(($taxAmount+$NIAmount+$pensionAmount+$unionDeduction+$otherDeduction+$otherDeduction2+$otherDeduction3+$christmasSavingsDeduction2+$summerSavingsDeduction2+$companyLoan+$studentLoanDeduction),2);
}


$netPay = round(($totalGrossPayments-$totalDeductions),2);

//pakeiciame true/false i 1/0 ir siunciame i db
if($payChristmasSavingsCheck == "true")	{$payChristmasSavingsCheck = 1;}
else {$payChristmasSavingsCheck = 0;}
if($paySummerSavingsCheck =="true"){$paySummerSavingsCheck = 1;}
else {$paySummerSavingsCheck = 0;}

//atverciame i int vertes siuntimui i db
$partialSickPay = $partialSickPay*100;
$partialPaternityPay = $partialPaternityPay*100;
$partialBereavementPay = $partialBereavementPay*100;
$partialCompassionatePay = $partialCompassionatePay*100;

//-----------------------------------SIUNCIAME DUOMENIS I DUOMENU BAZES-------------------------------------------------------------------

//user_id INT, taxPeriodNr INT, basic_hour_pay INT, unsocial_prem INT, unsocial_prem_hol INT, unsocial_prem_sick INT, unsocial_prem_family INT, ot1_pay INT, ot2_pay INT,	enhanced_holiday_pay INT, holiday_pay INT, sickness_pay INT, family_pay INT, bank_holiday_pay INT, bank_holiday_bonus INT, payback INT,	additional_payment INT,	PRIMARY KEY (user_id, taxPeriodNr), );
$queryDeletePayments = "DELETE FROM weekly_payments_amount WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$queryInsertPayments = "INSERT INTO weekly_payments_amount (user_id, taxPeriodNr,basic_pay, ot1_pay, ot2_pay, enhol_pay, hol_pay, 
sick_pay, fam_pay, bhol_pay, bhol_bonus, payback, add_pay, chris_sav, gross_pay, ber_pay, add_pay_N, comp_pay, summer_sav, 
chris_sav_c_in, summer_sav_c_in, SSP, SPP, add_pay2, add_pay_N2, add_pay3, add_pay_N3, satExtraPay, sunExtraPay, pieceWork, 
unsHCheck, basic_h, ot1_units, ot2_units, enhol_units, hol_units, sick_units, fam_units, bhol_units, ber_units, comp_units, 
satExtraH, sunExtraH, uns_prem, uns_prem_un, uns_hol, uns_hol_un, uns_sick, uns_sick_un, uns_family, uns_family_un, uns_ber, 
uns_ber_un, uns_comp, uns_comp_un, weekstart, employer, job_title, shift_len_val, shift_t_val, SAP, salary, bonus, commissions,
part_sick, part_pater, part_ber, part_comp) 
VALUES ('$user_id', '$taxPeriodNumber', '$basicHoursPay', '$OT1Pay', '$OT2Pay', '$enhancedHolidayPay', '$holidayPay', '$sicknessPay', 
'$familyPay', '$bankHolidayHoursPay', '$bankHolidayClockInBonus', '$payBack', '$additionalPayment', '$christmasSavingsPayment', 
'$totalGrossPayments','$bereavementPay', '$additionalPaymentName', '$compassionatePay', '$summerSavingsPayment','$payChristmasSavingsCheck',
 '$paySummerSavingsCheck', '$SSP', '$SPP', '$additionalPayment2', '$additionalPayment2Name', '$additionalPayment3', 
 '$additionalPayment3Name', '$saturdayExtraPay','$sundayExtraPay', '$pieceWork', '$unsociableHoursCheck', '$totalHours','$OT1Hours',
 '$OT2Hours','$enhancedHolidayHours','$holidayHours','$sicknessHours','$familyHours','$bankHolidayHours', '$bereavementHours', 
 '$compassionateHours', '$saturdayHours', '$sundayHours', '$unsocial_prem','$unsocial_hours', '$unsocial_prem_hol', '$unsocial_hours_hol',
 '$unsocial_prem_sick', '$unsocial_hours_sick','$unsocial_prem_family', '$unsocial_hours_family', '$unsocial_prem_bereavement', 
 '$unsocial_hours_bereavement', '$unsocial_prem_compassionate', '$unsocial_hours_compassionate', '$weekStart', '$employerName', 
 '$jobTitle', '$shiftLengthValue', '$shiftTypeValue', '$SAP', '$salary', '$bonus', '$commissions', '$partialSickPay', '$partialPaternityPay',
 '$partialBereavementPay', '$partialCompassionatePay')";

$resultDeletePayments = mysqli_query($dbc, $queryDeletePayments);
$resultInsertPayments = mysqli_query($dbc, $queryInsertPayments);


$queryDeleteDeductions = "DELETE FROM weekly_deductions_amount WHERE user_id = '$user_id' and taxPeriodNr ='$taxPeriodNumber'";
$queryInsertDeductions = "INSERT INTO weekly_deductions_amount (user_id, taxPeriodNr, tax, NI, pension, union_de, chris_sav, total, 
net_pay, other_de, other_ded_name, pensionBTax, pensionRate, pensionRateEmp, pensionAmountEmp, comp_loan, stud_loan, summer_sav, 
add_ded2, add_ded_N2, add_ded3, add_ded_N3, hourly_rate, unsocial_prem, overtime1, overtime2, enHol_rate, satExtra, sunExtra, BHolPay,
employer, job_title)
 VALUES ($user_id, '$taxPeriodNumber', '$taxAmount', '$NIAmount', '$pensionAmount', '$unionDeduction', '$christmasSavingsDeduction', 
 '$totalDeductions', '$netPay', '$otherDeduction', '$otherDeductionName', '$pensionBeforeTax', '$pensionRate', '$pensionRateEmp', 
 '$pensionAmountEmp', '$companyLoan', '$studentLoanDeduction', '$summerSavingsDeduction', '$otherDeduction2', '$otherDeduction2Name', 
 '$otherDeduction3', '$otherDeduction3Name', '$hourlyRate', '$unsocial_prem_rate', '$overtime1_rate', '$overtime2_rate', 
 '$enhancedHolidayRate', '$saturdayExtraRate', '$sundayExtraRate', '$bHolPayTimes', '$employerName', '$jobTitle')";

$resultDeleteDeductions = mysqli_query($dbc, $queryDeleteDeductions);
$resultInsertDeductions = mysqli_query($dbc, $queryInsertDeductions);

//siunciame atgal i fron enda true/false vertes
if($payChristmasSavingsCheck == 1)	{$payChristmasSavingsCheck = "true";}
else {$payChristmasSavingsCheck = "false";}
if($paySummerSavingsCheck == 1){$paySummerSavingsCheck = "true";}
else {$paySummerSavingsCheck = "false";}

//siunciame atgal i fron enda decimal vertes
$partialSickPay = $partialSickPay/100;
$partialPaternityPay = $partialPaternityPay/100;
$partialBereavementPay = $partialBereavementPay/100;
$partialCompassionatePay = $partialCompassionatePay/100;

$loadIndexesArray += array("basicHoursPay"=>$basicHoursPay,"unsocial_prem"=>$unsocial_prem,"unsocial_prem_hol"=>$unsocial_prem_hol);
$loadIndexesArray += array("unsocial_prem_sick"=>$unsocial_prem_sick, "unsocial_prem_family"=>$unsocial_prem_family,"OT1Pay"=>$OT1Pay);
$loadIndexesArray += array("OT2Pay"=>$OT2Pay, "enhancedHolidayPay"=>$enhancedHolidayPay, "holidayPay"=>$holidayPay, "sicknessPay"=>$sicknessPay);
$loadIndexesArray += array("familyPay"=>$familyPay,"bankHolidayHoursPay"=>$bankHolidayHoursPay, "bankHolidayClockInBonus"=>$bankHolidayClockInBonus);
$loadIndexesArray += array("payBack"=>$payBack, "additionalPayment"=>$additionalPayment,"christmasSavingsPayment"=>$christmasSavingsPayment,"totalGrossPayments"=>$totalGrossPayments );
$loadIndexesArray += array("taxAmount"=>$taxAmount, "NIAmount"=>$NIAmount, "pensionAmount"=>$pensionAmount,"unionDeduction"=>$unionDeduction);
$loadIndexesArray += array("christmasSavingsDeduction"=>$christmasSavingsDeduction, "totalDeductions"=>$totalDeductions, "otherDeduction"=>$otherDeduction, "netPay"=>$netPay);
$loadIndexesArray += array("unsocial_prem_rate"=>$unsocial_prem_rate,"hourlyRate"=>$hourlyRate,"overtime1_rate"=>$overtime1_rate, "otherDeductionName"=>$otherDeductionName);
$loadIndexesArray += array("overtime2_rate"=>$overtime2_rate, "enhancedHolidayRate"=>$enhancedHolidayRate, "additionalPaymentName"=>$additionalPaymentName);
$loadIndexesArray += array("unsocial_prem_units"=>$unsocial_hours, "basic_hours"=>$totalHours, "unsocial_prem_hol_units"=>$unsocial_hours_hol);
$loadIndexesArray += array("unsocial_prem_sick_units"=>$unsocial_hours_sick, "unsocial_prem_family_units"=>$unsocial_hours_family);
$loadIndexesArray += array("overtime1_units"=>$OT1Hours, "overtime2_units"=>$OT2Hours, "enhanced_holiday_units"=>$enhancedHolidayHours);
$loadIndexesArray += array("holiday_units"=>$holidayHours, "sick_units"=>$sicknessHours, "family_units"=>$familyHours, "bhol_units"=>$bankHolidayHours);
$loadIndexesArray += array("unsocial_prem_bereavement"=>$unsocial_prem_bereavement, "ber_units"=>$bereavementHours); 
$loadIndexesArray += array("bereavementPay"=>$bereavementPay, "uns_ber_units"=>$unsocial_hours_bereavement);
$loadIndexesArray += array("unsocial_prem_compassionate"=>$unsocial_prem_compassionate, "comp_units"=>$compassionateHours);
$loadIndexesArray += array("compassionatePay"=>$compassionatePay, "uns_comp_units"=>$unsocial_hours_compassionate);
$loadIndexesArray += array("pensionBeforeTax"=>$pensionBeforeTax, "pensionRate"=>$pensionRate, "pensionRateEmp"=>$pensionRateEmp, "pensionAmountEmp"=>$pensionAmountEmp);
$loadIndexesArray += array("companyLoan"=>$companyLoan,"studentLoanDeduction"=>$studentLoanDeduction, "summerSavingsDeduction"=>$summerSavingsDeduction);
$loadIndexesArray += array("summerSavingsPayment"=>$summerSavingsPayment, "paySummerSavingsCheck"=>$paySummerSavingsCheck);
$loadIndexesArray += array("payChristmasSavingsCheck"=>$payChristmasSavingsCheck, "SSP"=>$SSP, "SPP"=>$SPP, "bHolPayTimes"=>$bHolPayTimes);
$loadIndexesArray += array("additionalPayment2"=>$additionalPayment2, "additionalPayment2Name"=>$additionalPayment2Name);
$loadIndexesArray += array("additionalPayment3"=>$additionalPayment3, "additionalPayment3Name"=>$additionalPayment3Name);
$loadIndexesArray += array("otherDeduction2"=>$otherDeduction2, "otherDeduction2Name"=>$otherDeduction2Name);
$loadIndexesArray += array("otherDeduction3"=>$otherDeduction3, "otherDeduction3Name"=>$otherDeduction3Name, "pieceWork"=>$pieceWork);
$loadIndexesArray += array('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);
$loadIndexesArray += array("part_sick"=>$partialSickPay ,"part_pater"=>$partialPaternityPay ,"part_ber"=>$partialBereavementPay);
$loadIndexesArray += array("part_comp"=>$partialCompassionatePay);

//sitas butinas kad veiktu.
$loadIndexesArray += array("errors"=>$errors);


$loadIndexesArrayNoPremium += array("basicHoursPay"=>$basicHoursPay,"unsocial_prem"=>$unsocial_prem,"unsocial_prem_hol"=>$unsocial_prem_hol);
$loadIndexesArrayNoPremium += array("unsocial_prem_sick"=>$unsocial_prem_sick, "unsocial_prem_family"=>$unsocial_prem_family,"OT1Pay"=>$OT1Pay);
$loadIndexesArrayNoPremium += array("OT2Pay"=>$OT2Pay, "enhancedHolidayPay"=>$enhancedHolidayPay, "holidayPay"=>$holidayPay, "sicknessPay"=>$sicknessPay);
$loadIndexesArrayNoPremium += array("familyPay"=>$familyPay,"bankHolidayHoursPay"=>$bankHolidayHoursPay, "bankHolidayClockInBonus"=>$bankHolidayClockInBonus);
$loadIndexesArrayNoPremium += array("payBack"=>$payBack, "additionalPayment"=>$additionalPayment,"christmasSavingsPayment"=>$christmasSavingsPayment,"totalGrossPayments"=>$totalGrossPayments );
$loadIndexesArrayNoPremium += array("taxAmount"=>$taxAmount, "NIAmount"=>$NIAmount, "pensionAmount"=>$pensionAmount,"unionDeduction"=>$unionDeduction);
$loadIndexesArrayNoPremium += array("christmasSavingsDeduction"=>$christmasSavingsDeduction, "totalDeductions"=>$totalDeductions, "otherDeduction"=>$otherDeduction, "netPay"=>$netPay);
$loadIndexesArrayNoPremium += array("unsocial_prem_rate"=>$unsocial_prem_rate,"hourlyRate"=>$hourlyRate,"overtime1_rate"=>$overtime1_rate, "otherDeductionName"=>$otherDeductionName);
$loadIndexesArrayNoPremium += array("overtime2_rate"=>$overtime2_rate, "enhancedHolidayRate"=>$enhancedHolidayRate, "additionalPaymentName"=>$additionalPaymentName);
$loadIndexesArrayNoPremium += array("unsocial_prem_units"=>$unsocial_hours, "basic_hours"=>$totalHours, "unsocial_prem_hol_units"=>$unsocial_hours_hol);
$loadIndexesArrayNoPremium += array("unsocial_prem_sick_units"=>$unsocial_hours_sick, "unsocial_prem_family_units"=>$unsocial_hours_family);
$loadIndexesArrayNoPremium += array("overtime1_units"=>$OT1Hours, "overtime2_units"=>$OT2Hours, "enhanced_holiday_units"=>$enhancedHolidayHours);
$loadIndexesArrayNoPremium += array("holiday_units"=>$holidayHours, "sick_units"=>$sicknessHours, "family_units"=>$familyHours, "bhol_units"=>$bankHolidayHours);
$loadIndexesArrayNoPremium += array("unsocial_prem_bereavement"=>$unsocial_prem_bereavement, "bereavementHours"=>$bereavementHours, "bereavementPay"=>$bereavementPay, "unsocial_hours_bereavement"=>$unsocial_hours_bereavement);
$loadIndexesArrayNoPremium += array("unsocial_prem_compassionate"=>$unsocial_prem_compassionate, "compassionateHours"=>$compassionateHours, "compassionatePay"=>$compassionatePay, "unsocial_hours_compassionate"=>$unsocial_hours_compassionate);
$loadIndexesArrayNoPremium += array("pensionBeforeTax"=>$pensionBeforeTax, "pensionRate"=>$pensionRate, "pensionRateEmp"=>$pensionRateEmp, "pensionAmountEmp"=>$pensionAmountEmp);
$loadIndexesArrayNoPremium += array("companyLoan"=>$companyLoan,"studentLoanDeduction"=>$studentLoanDeduction, "summerSavingsDeduction"=>$summerSavingsDeduction);
$loadIndexesArrayNoPremium += array("summerSavingsPayment"=>$summerSavingsPayment, "paySummerSavingsCheck"=>$paySummerSavingsCheck);
$loadIndexesArrayNoPremium += array("payChristmasSavingsCheck"=>$payChristmasSavingsCheck, "SSP"=>$SSP, "SPP"=>$SPP, "bHolPayTimes"=>$bHolPayTimes);
$loadIndexesArrayNoPremium += array("additionalPayment2"=>$additionalPayment2, "additionalPayment2Name"=>$additionalPayment2Name);
$loadIndexesArrayNoPremium += array("additionalPayment3"=>$additionalPayment3, "additionalPayment3Name"=>$additionalPayment3Name);
$loadIndexesArrayNoPremium += array("otherDeduction2"=>$otherDeduction2, "otherDeduction2Name"=>$otherDeduction2Name);
$loadIndexesArrayNoPremium += array("otherDeduction3"=>$otherDeduction3, "otherDeduction3Name"=>$otherDeduction3Name, "pieceWork"=>$pieceWork);
$loadIndexesArrayNoPremium += array('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);
$loadIndexesArrayNoPremium += array("part_sick"=>$partialSickPay ,"part_pater"=>$partialPaternityPay ,"part_ber"=>$partialBereavementPay);
$loadIndexesArrayNoPremium += array("part_comp"=>$partialCompassionatePay);

//sitas butinas kad veiktu.
$loadIndexesArrayNoPremium += array("errors"=>$errors);
//iskeliame i atskira faila, nes tas pats kodas loadindexes ir submit form failuose.
require ('includes/loadSubmitCalculation.php');

require ('includes/selectPremium.php');
$loadIndexesArray += array("premium"=>$premium);
$loadIndexesArrayNoPremium += array("premium"=>$premium);

if ($premium == 1){
	$jsonFile = json_encode($loadIndexesArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else{
	$jsonFile = json_encode($loadIndexesArrayNoPremium);
	echo $jsonFile;
	mysqli_close($dbc);
}

?>