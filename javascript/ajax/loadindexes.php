<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['taxPeriodNumber'])){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ];

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
	
//------------------------selecting payments

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

require ('includes/selectPremium.php');


$querySelectPayments = "SELECT * FROM weekly_payments_amount WHERE user_id = '$user_id' and taxPeriodNr = '$taxPeriodNumber'";
$resulSelectPayments = mysqli_query($dbc, $querySelectPayments);

$num = mysqli_num_rows($resulSelectPayments);
if ($num>0){
	while ($row = mysqli_fetch_array($resulSelectPayments, MYSQLI_ASSOC))
	{
		$basicHoursPay = $row['basic_pay'];
		$OT1Pay = $row['ot1_pay'];
		$OT2Pay = $row['ot2_pay'];
		$enhancedHolidayPay = $row['enhol_pay']; 
		$holidayPay = $row['hol_pay'];
		$sicknessPay = $row['sick_pay'];
		$familyPay = $row['fam_pay'];
		$bereavementPay = $row['ber_pay'];
		$compassionatePay = $row['comp_pay'];
		$bankHolidayHoursPay = $row['bhol_pay'];
		$bankHolidayClockInBonus = $row['bhol_bonus']; 
		$payBack = $row['payback'];
		$additionalPayment = $row['add_pay'];
		$additionalPaymentName = $row['add_pay_N'];
		$christmasSavingsPayment = $row['chris_sav'];
		$totalGrossPayments = $row['gross_pay'];
		$summerSavingsPayment = $row['summer_sav'];
		
		$paySummerSavingsCheck = $row['summer_sav_C_in'];
		if($paySummerSavingsCheck == 1){$paySummerSavingsCheck = "true";}
		else {$paySummerSavingsCheck = "false";}
		
		$payChristmasSavingsCheck = $row['chris_sav_C_in'];
		if($payChristmasSavingsCheck == 1){$payChristmasSavingsCheck = "true";}
		else {$payChristmasSavingsCheck = "false";}
		$SSP = $row['SSP'];
		$SPP = $row['SPP'];
		$additionalPayment2 = $row['add_pay2'];
		$additionalPayment2Name = $row['add_pay_N2'];
		$additionalPayment3 = $row['add_pay3'];
		$additionalPayment3Name = $row['add_pay_N3'];
		$saturdayExtraPay = $row['satExtraPay'];
		$sundayExtraPay = $row['sunExtraPay'];
		$pieceWork = $row['pieceWork'];
		$basic_hours = $row['basic_h'];
		$overtime1_units = $row['ot1_units'];
		$overtime2_units = $row['ot2_units'];
		$enhanced_holiday_units = $row['enhol_units'];
		$holiday_units = $row['hol_units'];
		$sick_units = $row['sick_units'];
		$family_units = $row['fam_units'];
		$bhol_units = $row['bhol_units'];
		$ber_units = $row['ber_units'];
		$comp_units = $row['comp_units'];
		$saturdayHours = $row['satExtraH'];;
		$sundayHours = $row['sunExtraH'];
		$unsocial_prem = $row['uns_prem'];
		$unsocial_prem_hol = $row['uns_hol'];
		$unsocial_prem_sick = $row['uns_sick'];
		$unsocial_prem_family = $row['uns_family'];
		$unsocial_prem_bereavement = $row['uns_ber'];
		$unsocial_prem_compassionate = $row['uns_comp'];
		$unsocial_prem_units = $row['uns_prem_un'];
		$unsocial_prem_hol_units = $row['uns_hol_un'];
		$unsocial_prem_sick_units = $row['uns_sick_un'];
		$unsocial_prem_family_units = $row['uns_family_un'];
		$uns_ber_units = $row['uns_ber_un'];
		$uns_comp_units = $row['uns_comp_un'];
		$SAP = $row['SAP'];
		$salary = $row['salary'];
		$bonus = $row['bonus'];
		$commissions = $row['commissions'];
		
		$part_sick = $row['part_sick']/100;
		$part_pater = $row['part_pater']/100;
		$part_ber = $row['part_ber']/100;
		$part_comp = $row['part_comp']/100;
	}
}
else{
		$basicHoursPay = 0;
		$OT1Pay = 0;
		$OT2Pay = 0;
		$enhancedHolidayPay = 0; 
		$holidayPay = 0;
		$sicknessPay = 0;
		$familyPay = 0;
		$bankHolidayHoursPay = 0;
		$bankHolidayClockInBonus = 0; 
		$payBack = 0;
		$additionalPayment = 0;
		$additionalPaymentName = 'Add. Pay';
		$christmasSavingsPayment = 0;
		$summerSavingsPayment = 0;
		$totalGrossPayments = 0;
		$bereavementPay	= 0;	
		$compassionatePay = 0;
		
		$paySummerSavingsCheck = "false";
		$payChristmasSavingsCheck = "false";
		$SSP = 0;
		$SPP = 0;
		$additionalPayment2 = 0;
		$additionalPayment2Name = "Add. Pay";
		$additionalPayment3 = 0;
		$additionalPayment3Name = "Add. Pay";
		$saturdayExtraPay = 0;
		$sundayExtraPay = 0;
		$pieceWork = 0;
		
		$basic_hours = 0;
		$overtime1_units = 0;
		$overtime2_units = 0;
		$enhanced_holiday_units = 0;
		$holiday_units = 0;
		$sick_units = 0;
		$family_units = 0;
		$bhol_units = 0;
		$ber_units = 0;
		$comp_units = 0;
		$saturdayHours = 0;
		$sundayHours = 0;
		
		$unsocial_prem = 0;
		$unsocial_prem_hol = 0;
		$unsocial_prem_sick = 0;
		$unsocial_prem_family = 0;
		$unsocial_prem_bereavement = 0;
		$unsocial_prem_compassionate = 0;
		$unsocial_prem_units = 0;
		$unsocial_prem_hol_units = 0;
		$unsocial_prem_sick_units = 0;
		$unsocial_prem_family_units = 0;
		$uns_ber_units = 0;
		$uns_comp_units = 0;
		
		$SAP = 0;
		$salary = 0;
		$bonus = 0;
		$commissions = 0;
		$part_sick = 0;
		$part_pater = 0;
		$part_ber = 0;
		$part_comp = 0;
}
$loadIndexesArray = array("basicHoursPay"=>$basicHoursPay, "premium"=>$premium);
$loadIndexesArray += array("unsocial_prem"=>$unsocial_prem,"unsocial_prem_hol"=>$unsocial_prem_hol);
$loadIndexesArray += array("unsocial_prem_sick"=>$unsocial_prem_sick, "unsocial_prem_family"=>$unsocial_prem_family,"OT1Pay"=>$OT1Pay);
$loadIndexesArray += array("OT2Pay"=>$OT2Pay, "enhancedHolidayPay"=>$enhancedHolidayPay, "holidayPay"=>$holidayPay, "sicknessPay"=>$sicknessPay);
$loadIndexesArray += array("familyPay"=>$familyPay,"bankHolidayHoursPay"=>$bankHolidayHoursPay, "bankHolidayClockInBonus"=>$bankHolidayClockInBonus);
$loadIndexesArray += array("payBack"=>$payBack, "additionalPayment"=>$additionalPayment,"christmasSavingsPayment"=>$christmasSavingsPayment,"totalGrossPayments"=>$totalGrossPayments );
$loadIndexesArray += array("bereavementPay"=>$bereavementPay,"unsocial_prem_bereavement"=>$unsocial_prem_bereavement, "additionalPaymentName"=>$additionalPaymentName );
$loadIndexesArray += array("compassionatePay"=>$compassionatePay,"unsocial_prem_compassionate"=>$unsocial_prem_compassionate);
$loadIndexesArray += array("unsocial_prem_units"=>$unsocial_prem_units, "basic_hours"=>$basic_hours, "unsocial_prem_hol_units"=>$unsocial_prem_hol_units);
$loadIndexesArray += array("unsocial_prem_sick_units"=>$unsocial_prem_sick_units, "unsocial_prem_family_units"=>$unsocial_prem_family_units);
$loadIndexesArray += array("overtime1_units"=>$overtime1_units, "overtime2_units"=>$overtime2_units, "enhanced_holiday_units"=>$enhanced_holiday_units);
$loadIndexesArray += array("holiday_units"=>$holiday_units, "sick_units"=>$sick_units, "family_units"=>$family_units, "bhol_units"=>$bhol_units);
$loadIndexesArray += array("ber_units"=>$ber_units, "uns_ber_units"=>$uns_ber_units, "comp_units"=>$comp_units, "uns_comp_units"=>$uns_comp_units);
$loadIndexesArray += array("paySummerSavingsCheck"=>$paySummerSavingsCheck, "payChristmasSavingsCheck"=>$payChristmasSavingsCheck);
$loadIndexesArray += array("SSP"=>$SSP, "SPP"=>$SPP, "pieceWork"=>$pieceWork,"saturdayHours"=>$saturdayHours, "sundayHours"=>$sundayHours);
$loadIndexesArray += array("additionalPayment2"=>$additionalPayment2, "additionalPayment2Name"=>$additionalPayment2Name);
$loadIndexesArray += array("additionalPayment3"=>$additionalPayment3, "additionalPayment3Name"=>$additionalPayment3Name);
$loadIndexesArray += array("saturdayExtraPay"=>$saturdayExtraPay, "sundayExtraPay"=>$sundayExtraPay);
$loadIndexesArray += array('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);
$loadIndexesArray += array("part_sick"=>$part_sick,"part_pater"=>$part_pater,"part_ber"=>$part_ber, "part_comp"=>$part_comp);


$loadIndexesArrayNoPremium = array("basicHoursPay"=>$basicHoursPay, "premium"=>$premium);
$loadIndexesArrayNoPremium += array("unsocial_prem"=>$unsocial_prem,"unsocial_prem_hol"=>$unsocial_prem_hol);
$loadIndexesArrayNoPremium += array("unsocial_prem_sick"=>$unsocial_prem_sick, "unsocial_prem_family"=>$unsocial_prem_family,"OT1Pay"=>$OT1Pay);
$loadIndexesArrayNoPremium += array("OT2Pay"=>$OT2Pay, "enhancedHolidayPay"=>$enhancedHolidayPay, "holidayPay"=>$holidayPay, "sicknessPay"=>$sicknessPay);
$loadIndexesArrayNoPremium += array("familyPay"=>$familyPay,"bankHolidayHoursPay"=>$bankHolidayHoursPay, "bankHolidayClockInBonus"=>$bankHolidayClockInBonus);
$loadIndexesArrayNoPremium += array("payBack"=>$payBack, "additionalPayment"=>$additionalPayment,"christmasSavingsPayment"=>$christmasSavingsPayment,"totalGrossPayments"=>$totalGrossPayments );
$loadIndexesArrayNoPremium += array("bereavementPay"=>$bereavementPay,"unsocial_prem_bereavement"=>$unsocial_prem_bereavement, "additionalPaymentName"=>$additionalPaymentName );
$loadIndexesArrayNoPremium += array("compassionatePay"=>$compassionatePay,"unsocial_prem_compassionate"=>$unsocial_prem_compassionate);
$loadIndexesArrayNoPremium += array("unsocial_prem_units"=>$unsocial_prem_units, "basic_hours"=>$basic_hours, "unsocial_prem_hol_units"=>$unsocial_prem_hol_units);
$loadIndexesArrayNoPremium += array("unsocial_prem_sick_units"=>$unsocial_prem_sick_units, "unsocial_prem_family_units"=>$unsocial_prem_family_units);
$loadIndexesArrayNoPremium += array("overtime1_units"=>$overtime1_units, "overtime2_units"=>$overtime2_units, "enhanced_holiday_units"=>$enhanced_holiday_units);
$loadIndexesArrayNoPremium += array("holiday_units"=>$holiday_units, "sick_units"=>$sick_units, "family_units"=>$family_units, "bhol_units"=>$bhol_units);
$loadIndexesArrayNoPremium += array("ber_units"=>$ber_units, "uns_ber_units"=>$uns_ber_units, "comp_units"=>$comp_units, "uns_comp_units"=>$uns_comp_units);
$loadIndexesArrayNoPremium += array("paySummerSavingsCheck"=>$paySummerSavingsCheck, "payChristmasSavingsCheck"=>$payChristmasSavingsCheck);
$loadIndexesArrayNoPremium += array("SSP"=>$SSP, "SPP"=>$SPP, "pieceWork"=>$pieceWork,"saturdayHours"=>$saturdayHours, "sundayHours"=>$sundayHours);
$loadIndexesArrayNoPremium += array("additionalPayment2"=>$additionalPayment2, "additionalPayment2Name"=>$additionalPayment2Name);
$loadIndexesArrayNoPremium += array("additionalPayment3"=>$additionalPayment3, "additionalPayment3Name"=>$additionalPayment3Name);
$loadIndexesArrayNoPremium += array("saturdayExtraPay"=>$saturdayExtraPay, "sundayExtraPay"=>$sundayExtraPay);
$loadIndexesArrayNoPremium += array('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);
$loadIndexesArrayNoPremium += array("part_sick"=>$part_sick,"part_pater"=>$part_pater,"part_ber"=>$part_ber, "part_comp"=>$part_comp);

//------------------selecting deductions

$querySelectDeductions = "SELECT * FROM weekly_deductions_amount WHERE user_id = '$user_id' and taxPeriodNr = '$taxPeriodNumber'";
$resulSelectDeductions = mysqli_query($dbc, $querySelectDeductions);

$num2 = mysqli_num_rows($resulSelectDeductions);


if ($num2>0){
	while ($row2 = mysqli_fetch_array($resulSelectDeductions, MYSQLI_ASSOC))
	{
		$taxAmount = $row2['tax'];
		$NIAmount = $row2['NI'];
		$pensionAmount = $row2['pension'];
		$pensionAmountEmp = $row2['pension'];
		$unionDeduction = $row2['union_de'];
		$christmasSavingsDeduction = $row2['chris_sav'];
		$totalDeductions = $row2['total'];
		$otherDeduction = $row2['other_de'];
		$otherDeductionName = $row2['other_ded_name'];
		$netPay = $row2['net_pay'];
		$pensionBeforeTax= $row2['pensionBTax'];
		$pensionRate = $row2['pensionRate'];
		$companyLoan = $row2['comp_loan'];
		$studentLoanDeduction = $row2['stud_loan'];
		$summerSavingsDeduction = $row2['summer_sav'];
		
		$otherDeduction2 = $row2['add_ded2'];
		$otherDeduction2Name = $row2['add_ded_N2'];
		$otherDeduction3 = $row2['add_ded3'];
		$otherDeduction3Name = $row2['add_ded_N3'];
		
		$unsocial_prem_rate = $row2['unsocial_prem'];
		$hourlyRate = $row2['hourly_rate'];
		$overtime1_rate = $row2['overtime1'];
		$overtime2_rate = $row2['overtime2'];
		$enhancedHolidayRate = $row2['enHol_rate'];
		$saturdayExtraRate = $row2['satExtra'];
		$sundayExtraRate = $row2['sunExtra'];
		$bHolPayTimes = $row2['BHolPay'];
	}
}
else
{
		$taxAmount = 0;
		$NIAmount = 0;
		$pensionAmount = 0;
		$pensionAmountEmp = 0;
		$unionDeduction = 0;
		$christmasSavingsDeduction = 0;
		$totalDeductions = 0;
		$otherDeduction = 0;
		$otherDeductionName = "Add. Deduction";
		$netPay = 0;
		$pensionBeforeTax= "false";
		$pensionRate = 0;
		$companyLoan = 0;
		$studentLoanDeduction = 0;
		$summerSavingsDeduction = 0;
		
		$otherDeduction2 = 0;
		$otherDeduction2Name = "Add. Deduction";
		$otherDeduction3 = 0;
		$otherDeduction3Name = "Add. Deduction";
		
		$unsocial_prem_rate = 0;
		$hourlyRate = 0;
		$overtime1_rate = 0;
		$overtime2_rate = 0;
		$enhancedHolidayRate = 0;
		$saturdayExtraRate = 0;
		$sundayExtraRate = 0;
		$bHolPayTimes = 0;
}
$loadIndexesArray += array("taxAmount"=>$taxAmount, "NIAmount"=>$NIAmount, "pensionAmount"=>$pensionAmount,"unionDeduction"=>$unionDeduction);
$loadIndexesArray += array("christmasSavingsDeduction"=>$christmasSavingsDeduction, "totalDeductions"=>$totalDeductions, "otherDeduction"=>$otherDeduction, "netPay"=>$netPay);
$loadIndexesArray += array("otherDeductionName"=>$otherDeductionName, "pensionBeforeTax"=>$pensionBeforeTax, "pensionRate"=>$pensionRate, "pensionAmountEmp"=>$pensionAmountEmp);
$loadIndexesArray += array("companyLoan"=>$companyLoan, "studentLoanDeduction"=>$studentLoanDeduction,"summerSavingsDeduction"=>$summerSavingsDeduction);
$loadIndexesArray += array("summerSavingsPayment"=>$summerSavingsPayment);
$loadIndexesArray += array("otherDeduction2"=>$otherDeduction2, "otherDeduction2Name"=>$otherDeduction2Name);
$loadIndexesArray += array("otherDeduction3"=>$otherDeduction3, "otherDeduction3Name"=>$otherDeduction3Name);
$loadIndexesArray += array ("unsocial_prem_rate"=>$unsocial_prem_rate,"hourlyRate"=>$hourlyRate,"overtime1_rate"=>$overtime1_rate);
$loadIndexesArray += array ("overtime2_rate"=>$overtime2_rate, "enhancedHolidayRate"=>$enhancedHolidayRate);
$loadIndexesArray += array("saturdayExtraRate"=>$saturdayExtraRate, "sundayExtraRate"=>$sundayExtraRate, "bHolPayTimes"=>$bHolPayTimes);


$loadIndexesArrayNoPremium += array("taxAmount"=>$taxAmount, "NIAmount"=>$NIAmount, "pensionAmount"=>$pensionAmount,"unionDeduction"=>$unionDeduction);
$loadIndexesArrayNoPremium += array("christmasSavingsDeduction"=>$christmasSavingsDeduction, "totalDeductions"=>$totalDeductions, "otherDeduction"=>$otherDeduction, "netPay"=>$netPay);
$loadIndexesArrayNoPremium += array("otherDeductionName"=>$otherDeductionName, "pensionBeforeTax"=>$pensionBeforeTax, "pensionRate"=>$pensionRate, "pensionAmountEmp"=>$pensionAmountEmp);
$loadIndexesArrayNoPremium += array("companyLoan"=>$companyLoan, "studentLoanDeduction"=>$studentLoanDeduction,"summerSavingsDeduction"=>$summerSavingsDeduction);
$loadIndexesArrayNoPremium += array("summerSavingsPayment"=>$summerSavingsPayment);
$loadIndexesArrayNoPremium += array("otherDeduction2"=>$otherDeduction2, "otherDeduction2Name"=>$otherDeduction2Name);
$loadIndexesArrayNoPremium += array("otherDeduction3"=>$otherDeduction3, "otherDeduction3Name"=>$otherDeduction3Name);
$loadIndexesArrayNoPremium += array ("unsocial_prem_rate"=>$unsocial_prem_rate,"hourlyRate"=>$hourlyRate,"overtime1_rate"=>$overtime1_rate);
$loadIndexesArrayNoPremium += array ("overtime2_rate"=>$overtime2_rate, "enhancedHolidayRate"=>$enhancedHolidayRate);
$loadIndexesArrayNoPremium += array("saturdayExtraRate"=>$saturdayExtraRate, "sundayExtraRate"=>$sundayExtraRate, "bHolPayTimes"=>$bHolPayTimes);

//---------------SELECTING DAY AND BUTTON INDEXES

$taxPeriodStart = ($taxPeriodNumber - 1)*7+$weekStart; //dienos numeris
$modTaxPeriodStart = $taxPeriodStart-21;

$dayTypeArray = array();
for($i=0;$i<7;$i++){
	
$querySelectIndexes = "SELECT * FROM day_indexes WHERE user_id = '$user_id' and day_nr = '$taxPeriodStart'";
$resulSelectIndexes = mysqli_query($dbc, $querySelectIndexes);

$num4 = mysqli_num_rows($resulSelectIndexes);
if($num4>0){
	while ($row4 = mysqli_fetch_array($resulSelectIndexes, MYSQLI_ASSOC))
	{
		$dayType = $row4['dayType'];
		$startHour = $row4['startH'];
		$startMinute = $row4['startM'];
		$endHour = $row4['endH'];
		$endMinute = $row4['endM'];
		$sickButton = $row4['sickB'];
		if ($sickButton == 1){$sickButton = "true";}else{$sickButton ="false";}
		$dayInSickButton = $row4['DISickB'];
		if ($dayInSickButton == 1){$dayInSickButton = "true";}else{$dayInSickButton ="false";}
		$familyLeaveButton = $row4['famB'];
		if ($familyLeaveButton == 1){$familyLeaveButton = "true";}else{$familyLeaveButton ="false";}
		$bereavementButton = $row4['berB'];
		if ($bereavementButton == 1){$bereavementButton = "true";}else{$bereavementButton ="false";}
		$compassionateButton = $row4['compB'];
		if ($compassionateButton == 1){$compassionateButton = "true";}else{$compassionateButton ="false";}
		$enHolButton = $row4['enHolB'];
		if ($enHolButton == 1){$enHolButton = "true";}else{$enHolButton ="false";}
		$note = html_entity_decode($row4['note']);
	}
}
else{
		$dayType = 0;
		$startHour = 0;
		$startMinute = 0;
		$endHour = 0;
		$endMinute = 0;
		$sickButton = "false";
		$dayInSickButton = "false";
		$familyLeaveButton = "false";
		$bereavementButton = "false";
		$compassionateButton = "false";
		$enHolButton = "false";
		$note = NULL;
}
$dayTypeArray[] =$dayType;
$startHourArray[] = $startHour;
$startMinuteArray[] = $startMinute;
$endHourArray[] = $endHour;
$endMinuteArray[] = $endMinute;
$sickButtonArray[] = $sickButton;
$dayInSickButtonArray[] = $dayInSickButton;
$enHolButtonArray[] = $enHolButton;
$noteArray[] = $note;
$familyLeaveButtonArray[] = $familyLeaveButton;
$bereavementButtonArray[] = $bereavementButton;
$compassionateButtonArray[] = $compassionateButton;



$taxPeriodStart++;

}
$loadIndexesArray += array ("dayType"=>$dayTypeArray, "enHolButton"=>$enHolButtonArray, "note"=>$noteArray);
$loadIndexesArray += array ("startHour" => $startHourArray, "startMinute"=>$startMinuteArray, "endHour"=>$endHourArray, "endMinute"=>$endMinuteArray);
$loadIndexesArray += array ("sickButton" =>$sickButtonArray, "dayInSickButton"=>$dayInSickButtonArray);
$loadIndexesArray += array ("familyLeaveButton" =>$familyLeaveButtonArray, "weekStart"=>$weekStart);
$loadIndexesArray += array ("bereavementButton" =>$bereavementButtonArray, "compassionateButton"=>$compassionateButtonArray);

$loadIndexesArrayNoPremium += array ("dayType"=>$dayTypeArray, "enHolButton"=>$enHolButtonArray, "note"=>$noteArray);
$loadIndexesArrayNoPremium += array ("startHour" => $startHourArray, "startMinute"=>$startMinuteArray, "endHour"=>$endHourArray, "endMinute"=>$endMinuteArray);
$loadIndexesArrayNoPremium += array ("sickButton" =>$sickButtonArray, "dayInSickButton"=>$dayInSickButtonArray);
$loadIndexesArrayNoPremium += array ("familyLeaveButton" =>$familyLeaveButtonArray, "weekStart"=>$weekStart);
$loadIndexesArrayNoPremium += array ("bereavementButton" =>$bereavementButtonArray, "compassionateButton"=>$compassionateButtonArray);


//$weekStart = 2;

for($j=0;$j<49;$j++){

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
$modTaxPeriodStart++;
}

$loadIndexesArray += array ("dayTypeArrayCalendar"=>$dayTypeArrayCalendar);

$loadIndexesArrayNoPremium += array ("dayTypeArrayCalendar"=>$dayTypeArrayCalendar);
//iskeliame i atskira faila, nes tas pats kodas loadindexes ir submit form failuose.
require ('includes/loadSubmitCalculation.php');

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