<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['shiftLengthIndex'], $_POST['shiftLengthValue'], $_POST['shiftTypeIndex'], $_POST['shiftTypeValue'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['employerName'], $_POST['jobTitle'], $_POST['weekStart'], $_POST['hourlyRate'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['unsociablePrem'], $_POST['overtime1rate'], $_POST['overtime2rate'], $_POST['extraRateSunday'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['extraRateSaturday'], $_POST['weekendHoursCheck'], $_POST['clockInBonus'], $_POST['enhancedHolidayPay'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['unpaidBreaks'], $_POST['breakLength'], $_POST['bankHolidayPayValue'], $_POST['additionalPayment'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['payback'], $_POST['pieceWork'], $_POST['SSP'], $_POST['SPP'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['additionalPaymentName'], $_POST['clockInBonusHours'], $_POST['holidayStartYearIndex'], $_POST['holidayStartMonthIndex'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['holidayStartDayIndex'], $_POST['holidayStart'], $_POST['bankHolidayIndex'], $_POST['holidaysPerYear'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['unsociableHoursCheck'], $_POST['unsociableHourStart'], $_POST['unsociableHourFinish'], $_POST['overtimeCheck'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['overtimeCheck2'], $_POST['overtime1Start'], $_POST['overtime1Finish'], $_POST['overtime2start'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['overtime2Finish'], $_POST['holidayOvertime'], $_POST['sickOvertime'], $_POST['paternityOvertime'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['bereavementOvertime'], $_POST['compOvertime'], $_POST['additionalPayment2'], $_POST['additionalPayment2Name'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['additionalPayment3'], $_POST['additionalPayment3Name'], $_POST['partialSickPay'], $_POST['partialPaternityPay'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['partialBereavementPay'], $_POST['partialCompassionatePay']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['salary'], $_POST['bonus'], $_POST['commissions'], $_POST['SAP'] ))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }

require('../../../connect_db.php');

$errors = array();

$user_id = $_SESSION[ 'user_id' ];

//--------------------------------------------------------employment info-------------------------------------//
//int
if(!empty($_POST['shiftLengthIndex']))
	{$shiftLengthIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['shiftLengthIndex']));
	if(is_int($shiftLengthIndex)){$shiftLengthIndex;}
	elseif(is_numeric($shiftLengthIndex)){$shiftLengthIndex = intval($shiftLengthIndex);}
	else{$errors[] = 'Shift length must be a numeric value!'; }
	}
else{$shiftLengthIndex = 0;}
	
//int
if(!empty($_POST['shiftLengthValue']))
	{$shiftLengthValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['shiftLengthValue']));
	if(is_int($shiftLengthValue)){$shiftLengthValue;}
	elseif(is_numeric($shiftLengthValue)){$shiftLengthValue = intval($shiftLengthValue);}
	else{$errors[] = 'Shift length must be a numeric value!'; }
	}
else{$shiftLengthValue = 0;}	
//int
if(!empty($_POST['shiftTypeIndex']))
	{$shiftTypeIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['shiftTypeIndex']));
	if(is_int($shiftTypeIndex)){$shiftTypeIndex;}
	elseif(is_numeric($shiftTypeIndex)){$shiftTypeIndex = intval($shiftTypeIndex);}
	else{$errors[] = 'Shift type index must be a numeric value!'; }
	}
else{$shiftTypeIndex = 0;}	
//string
if(!empty($_POST['shiftTypeValue'])){
	$shiftTypeValue = htmlentities(mysqli_real_escape_string($dbc, $_POST['shiftTypeValue']));}
else {$shiftTypeValue = 'Day';}
//string
if(!empty($_POST['employerName'])){
	$employerName = htmlentities(mysqli_real_escape_string($dbc, $_POST['employerName']));}
else {$employerName = NULL;}
//string
if(!empty($_POST['jobTitle'])){
	$jobTitle = htmlentities(mysqli_real_escape_string($dbc, $_POST['jobTitle']));}
else {$jobTitle = NULL;}
//int
if(!empty($_POST['weekStart'])){
	$weekStart = htmlentities(mysqli_real_escape_string($dbc, $_POST['weekStart']));
	if(is_int($weekStart)){$weekStart;}
	elseif(is_numeric($weekStart)){$weekStart = intval($weekStart);}
	else{$errors[] = 'Week start index must be a numeric value!'; }
	}
else{$weekStart = 0;}

//---------------------------------------------------payments---------------------------------------------------------------------//

//decimal
if(!empty($_POST['hourlyRate'])){
	$hourlyRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['hourlyRate']));
	if(is_numeric($hourlyRate)){$hourlyRate = $hourlyRate;}
	else{$errors[] = 'Hourly rate must be a numeric value!'; }
}	
else{$hourlyRate=0;}
//decimal
if(!empty($_POST['unsociablePrem'])){
	$unsociablePrem = htmlentities(mysqli_real_escape_string($dbc, $_POST['unsociablePrem']));
	if(is_numeric($unsociablePrem)){$unsociablePrem = $unsociablePrem;}
	else{$errors[] = 'Unsociable prem rate must be a numeric value!'; }
}
else {$unsociablePrem=0;}
//decimal
if(!empty($_POST['overtime1rate'])){
	$overtime1rate = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime1rate']));
	if(is_numeric($overtime1rate)){$overtime1rate = $overtime1rate;}
	else{$errors[] = 'Overtime 1 rate must be a numeric value!'; }
}
else {$overtime1rate=0;}
//decimal
if(!empty($_POST['overtime2rate'])){
	$overtime2rate = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime2rate']));
	if(is_numeric($overtime2rate)){$overtime2rate = $overtime2rate;}
	else{$errors[] = 'Overtime 2 rate must be a numeric value!'; }
}
else{$overtime2rate=0;}

//decimal
if(!empty($_POST['extraRateSunday'])){
	$extraRateSunday = htmlentities(mysqli_real_escape_string($dbc, $_POST['extraRateSunday']));
	if(is_numeric($extraRateSunday)){$extraRateSunday = $extraRateSunday;}
	else{$errors[] = 'Extra ratio for Sunday must be a numeric value!'; }
}
else{$extraRateSunday=0;}

//decimal
if(!empty($_POST['extraRateSaturday'])){
	$extraRateSaturday = htmlentities(mysqli_real_escape_string($dbc, $_POST['extraRateSaturday']));
	if(is_numeric($extraRateSaturday)){$extraRateSaturday = $extraRateSaturday;}
	else{$errors[] = 'Extra ratio for Saturday must be a numeric value!'; }
}
else{$extraRateSaturday=0;}

//true false
if(!empty($_POST['weekendHoursCheck'])){
	$weekendHoursCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['weekendHoursCheck']));
	if ($weekendHoursCheck == "true"){$weekendHoursCheck = 1; }
	else{$weekendHoursCheck =0;}}
else{$weekendHoursCheck = 0;}

//decimal
if(!empty($_POST['clockInBonus'])){
	$clockInBonus = htmlentities(mysqli_real_escape_string($dbc, $_POST['clockInBonus']));
	if(is_numeric($clockInBonus)){$clockInBonus = $clockInBonus;}
	else{$errors[] = 'Clock in bonus must be a numeric value!'; }
}
else{$clockInBonus=0;}
//decimal
if(!empty($_POST['enhancedHolidayPay'])){
	$enhancedHolidayPay = htmlentities(mysqli_real_escape_string($dbc, $_POST['enhancedHolidayPay']));
	if(is_numeric($enhancedHolidayPay)){$enhancedHolidayPay = $enhancedHolidayPay;}
	else{$errors[] = 'Enhanced holiday rate must be a numeric value!'; }
}
else {$enhancedHolidayPay=0;}
//int
if(!empty($_POST['unpaidBreaks'])){
	$unpaidBreaks = htmlentities(mysqli_real_escape_string($dbc, $_POST['unpaidBreaks']));
	if(is_int($unpaidBreaks)){$unpaidBreaks;}
	elseif(is_numeric($unpaidBreaks)){$unpaidBreaks = intval($unpaidBreaks);}
	else{$errors[] = 'Unpaid breaks index must be a numeric value!'; }
	}
else {$unpaidBreaks=0;}
//int
if(!empty($_POST['breakLength'])){
	$breakLength = htmlentities(mysqli_real_escape_string($dbc, $_POST['breakLength']));
	if(is_int($breakLength)){$breakLength;}
	elseif(is_numeric($breakLength)){$breakLength = intval($breakLength);}
	else{$errors[] = 'Unpaid breaks length index must be a numeric value!'; }
	}
else {$breakLength = 0;}

//decimal
if(!empty($_POST['bankHolidayPayValue'])){
	$bankHolidayPay = htmlentities(mysqli_real_escape_string($dbc, $_POST['bankHolidayPayValue']));
	if(is_numeric($bankHolidayPay)){$bankHolidayPay = $bankHolidayPay;}
	else{$errors[] = 'Bank holiday pay value must be a numeric!'; }
}	
else {$bankHolidayPay = 0;}
//decimal
if(!empty($_POST['additionalPayment'])){
	$additionalPayment = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPayment']));
	if(is_numeric($additionalPayment)){$additionalPayment = $additionalPayment;}
	else{$errors[] = 'Additional payment must be a numeric value!'; }
}	
else {$additionalPayment = 0;}
//decimal
if(!empty($_POST['payback'])){
	$payback = htmlentities(mysqli_real_escape_string($dbc, $_POST['payback']));
	if(is_numeric($payback)){$payback = $payback;}
	else{$errors[] = 'Back pay must be a numeric value!'; }
}	
else {$payback = 0;}

//decimal
if(!empty($_POST['pieceWork'])){
	$pieceWork = htmlentities(mysqli_real_escape_string($dbc, $_POST['pieceWork']));
	if(is_numeric($pieceWork)){$pieceWork = $pieceWork;}
	else{$errors[] = 'Piece work must be a numeric value!'; }
}	
else {$pieceWork = 0;}

//SSP
if(!empty($_POST['SSP'])){
	$SSP = htmlentities(mysqli_real_escape_string($dbc, $_POST['SSP']));
	if(is_numeric($SSP)){$SSP = $SSP;}
	else{$errors[] = 'SSP must be a numeric value!'; }
}	
else {$SSP = 0;}

//SPP
if(!empty($_POST['SPP'])){
	$SPP = htmlentities(mysqli_real_escape_string($dbc, $_POST['SPP']));
	if(is_numeric($SPP)){$SPP = $SPP;}
	else{$errors[] = 'SPP must be a numeric value!'; }
}	
else {$SPP = 0;}

//string
if(!empty($_POST['additionalPaymentName'])){
$additionalPaymentName = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPaymentName']));}
else {$additionalPaymentName = NULL;}

//decimal
if(!empty($_POST['clockInBonusHours'])){
	$clockInBonusHours = htmlentities(mysqli_real_escape_string($dbc, $_POST['clockInBonusHours']));
	if(is_numeric($clockInBonusHours)){$clockInBonusHours = $clockInBonusHours;}
	else{$errors[] = 'Clock in bonus hours must be a numeric value!'; }
}	
else {$clockInBonusHours = 0;}



function validateDate($date, $format= 'Y-m-d H:i:s')
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}

//int
if(!empty($_POST['holidayStartYearIndex'])){
	$holidayStartYearIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidayStartYearIndex']));
	if(is_int($holidayStartYearIndex)){$holidayStartYearIndex;}
	elseif(is_numeric($holidayStartYearIndex)){$holidayStartYearIndex = intval($holidayStartYearIndex);}
	else{$errors[] = 'Holiday start year must be a numeric value!'; }
}
else{$holidayStartYearIndex = 0;}

//int
if(!empty($_POST['holidayStartMonthIndex'])){
	$holidayStartMonthIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidayStartMonthIndex']));
	if(is_int($holidayStartMonthIndex)){$holidayStartMonthIndex;}
	elseif(is_numeric($holidayStartMonthIndex)){$holidayStartMonthIndex = intval($holidayStartMonthIndex);}
	else{$errors[] = 'Holiday start month must be a numeric value!'; }
}
else{$holidayStartMonthIndex = 0;}

//int
if(!empty($_POST['holidayStartDayIndex'])){
	$holidayStartDayIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidayStartDayIndex']));
	if(is_int($holidayStartDayIndex)){$holidayStartDayIndex;}
	elseif(is_numeric($holidayStartDayIndex)){$holidayStartDayIndex = intval($holidayStartDayIndex);}
	else{$errors[] = 'Holiday start month must be a numeric value!'; }
}
else{$holidayStartDayIndex = 0;}

//date
if(!empty($_POST['holidayStart'])){
$holidayStart = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidayStart']));
	$holidayStartCheck = validateDate($holidayStart, 'Y-m-d');
	if ($holidayStartCheck == true) {$holidayStart = $holidayStart;}
	else {$errors[] = 'Invalid holiday start year date format!' ;
		
	}
}
else{
	$holidayStart = '2017-01-01';
	$holidayStartYearIndex = 0;
	$holidayStartMonthIndex = 0;
	$holidayStartDayIndex = 0;
}


//int
if(!empty($_POST['bankHolidayIndex'])){
	$bankHolidayIndex = htmlentities(mysqli_real_escape_string($dbc, $_POST['bankHolidayIndex']));
	if(is_int($bankHolidayIndex)){$bankHolidayIndex;}
	elseif(is_numeric($bankHolidayIndex)){$bankHolidayIndex = intval($bankHolidayIndex);}
	else{$errors[] = 'Bank holiday index must be a numeric value!'; }
}
else{$bankHolidayIndex = 0;}


//decimal
if(!empty($_POST['holidaysPerYear'])){
	$holidaysPerYear = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidaysPerYear']));  // VELIAU REIKES SUFORMATUOTI
	if(is_numeric($holidaysPerYear)){$holidaysPerYear = $holidaysPerYear;}
	else{$errors[] = 'Holidays per year must be a numeric value!'; }
}	
else{$holidaysPerYear = 0;}

//true false
if(!empty($_POST['unsociableHoursCheck'])){
	$unsociableHoursCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['unsociableHoursCheck']));
	if ($unsociableHoursCheck == "true"){$unsociableHoursCheck = 1; }
	else{$unsociableHoursCheck =0;}
}
else{$unsociableHoursCheck = 0;}
//int
if(!empty($_POST['unsociableHourStart'])){
	$unsociableHourStart = htmlentities(mysqli_real_escape_string($dbc, $_POST['unsociableHourStart']));
	if(is_int($unsociableHourStart)){$unsociableHourStart;}
	elseif(is_numeric($unsociableHourStart)){$unsociableHourStart = intval($unsociableHourStart);}
	else{$errors[] = 'Unsociable start hour must be a numeric value!'; }
}
else{$unsociableHourStart = 0;}

if ($unsociableHourStart < 0 OR $unsociableHourStart >12)
	{
		$errors[] = 'Unsociable Hour start value Disallowed';
	}

//int
if(!empty($_POST['unsociableHourFinish'])){
	$unsociableHourFinish = htmlentities(mysqli_real_escape_string($dbc, $_POST['unsociableHourFinish']));
	if(is_int($unsociableHourFinish)){$unsociableHourFinish;}
	elseif(is_numeric($unsociableHourFinish)){$unsociableHourFinish = intval($unsociableHourFinish);}
	else{$errors[] = 'Unsociable end hour must be a numeric value!';}
}	
else{$unsociableHourFinish = 0;}
if ($unsociableHourFinish < 0 OR $unsociableHourFinish >12)
	{
		$errors[] = 'Unsociable Hour end value Disallowed';
	}

if(!empty($_POST['overtimeCheck'])){
	$overtimeCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtimeCheck']));
	if ($overtimeCheck == "true"){$overtimeCheck = 1; }
	else{$overtimeCheck =0;}}
else{$overtimeCheck = 0;}

if(!empty($_POST['overtimeCheck2'])){
	$overtimeCheck2 = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtimeCheck2']));
	if ($overtimeCheck2 == "true"){$overtimeCheck2 = 1; }else{$overtimeCheck2 =0;}}
else{$overtimeCheck2 = 0;}

//decimal
if(!empty($_POST['overtime1Start'])){
	$overtime1Start = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime1Start']));
	if(is_numeric($overtime1Start)){$overtime1Start = $overtime1Start;}
	else{$errors[] = 'Overtime 1 start time must be a numeric value!';}
}	
else{$overtime1Start = 0;}

//decimal
if(!empty($_POST['overtime1Finish'])){
	$overtime1Finish = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime1Finish']));
	if(is_numeric($overtime1Finish)){$overtime1Finish = $overtime1Finish;}
	else{$errors[] = 'Overtime 1 end time must be a numeric value!';}
}	
else{$overtime1Finish = 0;}

//decimal
if(!empty($_POST['overtime2start'])){
	$overtime2start = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime2start']));
	if(is_numeric($overtime2start)){$overtime2start = $overtime2start;}
	else{$errors[] = 'Overtime 2 start time must be a numeric value!';}
}	
else{$overtime2start = 0;}

//decimal
if(!empty($_POST['overtime2Finish'])){
	$overtime2Finish = htmlentities(mysqli_real_escape_string($dbc, $_POST['overtime2Finish']));
	if(is_numeric($overtime2Finish)){$overtime2Finish = $overtime2Finish;}
	else{$errors[] = 'Overtime 2 end time must be a numeric value!';}
}	
else{$overtime2Finish = 0;}	

		
if(!empty($_POST['holidayOvertime'])){
	$holidayOvertime = htmlentities(mysqli_real_escape_string($dbc, $_POST['holidayOvertime']));
	if ($holidayOvertime == "true"){$holidayOvertime = 1; }else{$holidayOvertime =0;}}
else{$holidayOvertime = 0;}	
	
if(!empty($_POST['sickOvertime'])){
	$sickOvertime = htmlentities(mysqli_real_escape_string($dbc, $_POST['sickOvertime']));
	if ($sickOvertime == "true"){$sickOvertime = 1; }else{$sickOvertime =0;}}
else{$sickOvertime = 0;}	

if(!empty($_POST['paternityOvertime'])){
	$paternityOvertime = htmlentities(mysqli_real_escape_string($dbc, $_POST['paternityOvertime']));
	if ($paternityOvertime == "true"){$paternityOvertime = 1; }else{$paternityOvertime =0;}}
else{$paternityOvertime = 0;}
	
if(!empty($_POST['bereavementOvertime'])){	
	$bereavementOvertime = htmlentities(mysqli_real_escape_string($dbc, $_POST['bereavementOvertime']));
	if ($bereavementOvertime == "true"){$bereavementOvertime = 1; }else{$bereavementOvertime =0;}}
else{$bereavementOvertime = 0;}	
	
if(!empty($_POST['compOvertime'])){	
	$compOvertime = htmlentities(mysqli_real_escape_string($dbc, $_POST['compOvertime']));
	if ($compOvertime == "true"){$compOvertime = 1; }else{$compOvertime =0;}}
else{$compOvertime = 0;}	


//decimal
if(!empty($_POST['additionalPayment2'])){
	$additionalPayment2 = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPayment2']));
	if(is_numeric($additionalPayment2)){$additionalPayment2 = $additionalPayment2;}
	else{$errors[] = 'Additional payment 2 must be a numeric value!';}
}	
else {$additionalPayment2 = 0;}
//string
if(!empty($_POST['additionalPayment2Name'])){
$additionalPayment2Name = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPayment2Name']));}
else {$additionalPayment2Name = NULL;}


//decimal
if(!empty($_POST['additionalPayment3'])){
	$additionalPayment3 = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPayment3']));
	if(is_numeric($additionalPayment3)){$additionalPayment3 = $additionalPayment3;}
	else{$errors[] = 'Additional payment 3 must be a numeric value!';}
}	
else {$additionalPayment3 = 0;}
//string
if(!empty($_POST['additionalPayment3Name'])){
$additionalPayment3Name = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalPayment3Name']));}
else {$additionalPayment3Name = NULL;}

//int
if(!empty($_POST['partialSickPay'])){
	$partialSickPay = htmlentities(mysqli_real_escape_string($dbc, $_POST['partialSickPay']));
	if(is_int($partialSickPay)){$partialSickPay;}
	elseif(is_numeric($partialSickPay)){$partialSickPay = intval($partialSickPay);}
	else{$errors[] = 'Partial sick index must be a numeric value!'; }
}
else {$partialSickPay = 0;}

if ($partialSickPay < 0 OR $partialSickPay >100)
	{
		$errors[] = 'Partial Sick Pay value disallowed';
	}

//int
if(!empty($_POST['partialPaternityPay'])){
	$partialPaternityPay = htmlentities(mysqli_real_escape_string($dbc, $_POST['partialPaternityPay']));
	if(is_int($partialPaternityPay)){$partialPaternityPay;}
	elseif(is_numeric($partialPaternityPay)){$partialPaternityPay = intval($partialPaternityPay);}
	else{$errors[] = 'Partial paternity index must be a numeric value!'; }
}
else {$partialPaternityPay = 0;}

if ($partialPaternityPay < 0 OR $partialPaternityPay >100)
	{
		$errors[] = 'Partial Paternity Pay value disallowed';
	}

//int
if(!empty($_POST['partialBereavementPay'])){
	$partialBereavementPay = htmlentities(mysqli_real_escape_string($dbc, $_POST['partialBereavementPay']));
	if(is_int($partialBereavementPay)){$partialBereavementPay;}
	elseif(is_numeric($partialBereavementPay)){$partialBereavementPay = intval($partialBereavementPay);}
	else{$errors[] = 'Partial bereavement index must be a numeric value!'; }
}
else {$partialBereavementPay = 0;}

if ($partialBereavementPay < 0 OR $partialBereavementPay >100)
	{
		$errors[] = 'Partial Bereavement Pay value disallowed';
	}
//int
if(!empty($_POST['partialCompassionatePay'])){
	$partialCompassionatePay = htmlentities(mysqli_real_escape_string($dbc, $_POST['partialCompassionatePay']));
	if(is_int($partialCompassionatePay)){$partialCompassionatePay;}
	elseif(is_numeric($partialCompassionatePay)){$partialCompassionatePay = intval($partialCompassionatePay);}
	else{$errors[] = 'Partial compassionate index must be a numeric value!'; }
}
else {$partialCompassionatePay = 0;}



//SAP decimal
if(!empty($_POST['SAP'])){
	$SAP = htmlentities(mysqli_real_escape_string($dbc, $_POST['SAP']));
	if(is_numeric($SAP)){$SAP = $SAP;}
	else{$errors[] = 'SAP must be a numeric value!'; }
}	
else {$SAP = 0;}

//salary decimal
if(!empty($_POST['salary'])){
	$salary = htmlentities(mysqli_real_escape_string($dbc, $_POST['salary']));
	if(is_numeric($salary)){$salary = $salary;}
	else{$errors[] = 'Salary must be a numeric value!'; }
}	
else {$salary = 0;}

//bonus decimal
if(!empty($_POST['bonus'])){
	$bonus = htmlentities(mysqli_real_escape_string($dbc, $_POST['bonus']));
	if(is_numeric($bonus)){$bonus = $bonus;}
	else{$errors[] = 'Bonus must be a numeric value!'; }
}	
else {$bonus = 0;}

//commissions decimal
if(!empty($_POST['commissions'])){
	$commissions = htmlentities(mysqli_real_escape_string($dbc, $_POST['commissions']));
	if(is_numeric($commissions)){$commissions = $commissions;}
	else{$errors[] = 'Commissions must be a numeric value!'; }
}	
else {$commissions = 0;}



if ($partialCompassionatePay < 0 OR $partialCompassionatePay >100)
	{
		$errors[] = 'Partial Compassionate Pay value disallowed';
	}
//overtime valandu patikrinimas-------------------------------------------------------------------------//
	if ($overtimeCheck2 == 1 And $overtimeCheck == 0 )
	{
		$errors[] = 'Can not set Overtime 2 parameters without setting overtime 1 first!';
	}
	else if ($overtimeCheck == 1 And $overtimeCheck2 == 1 ){
		if ($overtime1Start> $overtime1Finish)
		{
			$errors[] = 'Start time for overtime 1 is greater then end time!';
		}
		else if ($overtime1Finish > $overtime2start)
		{
			$errors[] = 'Finish time for overtime 1 is greater then start time of overtime 2!';
		}
		
		if ($overtime2Finish < $overtime2start)
		{
			$errors[] = 'Start time for overtime 2 is greater then end time!';
		}
		//else {return true;}
		
	}
		
	else if ($overtimeCheck == 1 and $overtimeCheck2 == 0){
		if ($overtime1Start> $overtime1Finish)
		{
			$errors[] = 'Start time for overtime 1 is greater then end time!';
		}
		
	}


//arba suvedame vertes i db arba padarome error raporta.
if ( empty( $errors ) )
{

	$queryDeletePaymentsSettings = "DELETE FROM current_payments_settings WHERE user_id = '$user_id'";
	$queryInsertPaymentsSettings = "INSERT INTO current_payments_settings (user_id, H_rate , uns_prem , ot1_rate , ot2_rate , CIBonus , 
	enHol_rate , unpaidBreaks , breakLength, BHolPay, add_pay, CI_B_Hours, hol_Y_start, hol_p_year, bHol_in, add_pay_N, payback, SSP,
	SPP, uns_H_check, uns_H_start, uns_H_finish, OT1_start, OT1_finish, OT2_start, OT2_finish, hol_OT, sick_OT, ber_OT, OT_check,
	OT_check2, pater_OT, comp_OT, add_pay2, add_pay_N2, add_pay3, add_pay_N3, part_sick, part_pater, part_ber, part_comp, holStartY,
	holStartM, holStartD, satExtra, sunExtra, weekendCh, pieceWork, weekstart, employer, job_title, shift_len_in, shift_len_val, 
	shift_t_in,shift_t_val, SAP, salary, bonus, commissions ) VALUES ('$user_id', '$hourlyRate', '$unsociablePrem', '$overtime1rate', '$overtime2rate', '$clockInBonus', 
	'$enhancedHolidayPay', '$unpaidBreaks', '$breakLength', '$bankHolidayPay', '$additionalPayment', '$clockInBonusHours', '$holidayStart', 
	'$holidaysPerYear', '$bankHolidayIndex', '$additionalPaymentName', '$payback', '$SSP', '$SPP','$unsociableHoursCheck', 
	'$unsociableHourStart', '$unsociableHourFinish', '$overtime1Start', '$overtime1Finish', '$overtime2start', '$overtime2Finish', 
	'$holidayOvertime', '$sickOvertime', '$bereavementOvertime', '$overtimeCheck', '$overtimeCheck2', '$paternityOvertime', 
	'$compOvertime', '$additionalPayment2', '$additionalPayment2Name', '$additionalPayment3', '$additionalPayment3Name', 
	'$partialSickPay', '$partialPaternityPay', '$partialBereavementPay', '$partialCompassionatePay', '$holidayStartYearIndex', 
	'$holidayStartMonthIndex', '$holidayStartDayIndex', '$extraRateSaturday', '$extraRateSunday', '$weekendHoursCheck', '$pieceWork', 
	'$weekStart', '$employerName', '$jobTitle', '$shiftLengthIndex', '$shiftLengthValue', '$shiftTypeIndex', '$shiftTypeValue', 
	'$SAP', '$salary', '$bonus', '$commissions')";
	$resultDeletePaymentsSettings = mysqli_query($dbc, $queryDeletePaymentsSettings);
	$resultInsertPaymentsSettings = mysqli_query($dbc, $queryInsertPaymentsSettings);

	$paymentsArray = array ("errors"=>$errors);
	
	$jsonFile = json_encode($paymentsArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else{
	
	$paymentsArray = array("errors"=>$errors);
	$jsonFile = json_encode($paymentsArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
?>