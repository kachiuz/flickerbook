<?php

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }

require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ]; //from sesion

require ('includes/selectAllCurrentPayments.php');

//null idiegta tik todel, kad pridejus nauja column ir nenustacius ju verciu neveikia programa
// arba jei vartotojas ivede nuli, geriau jo nerodyti, nes tada neatvaizduojamas placeholder
if ($unpaidBreakQuantity == NULL){$unpaidBreakQuantity = 0;}		
if ($unpaidBreakLength == NULL){$unpaidBreakLength = 0;}	
if ($unsocial_prem_rate == 0){$unsocial_prem_rate = NULL;}
if ($overtime1_rate == 0){$overtime1_rate = NULL;}
if ($overtime2_rate == 0){$overtime2_rate = NULL;}
if ($hourlyRate == 0){$hourlyRate = NULL;}
if ($enhancedHolidayRate == 0){$enhancedHolidayRate = NULL;}
if ($bankHolidayClockInBonusValue == 0){$bankHolidayClockInBonusValue = NULL;}
if ($clockInBonusHours == 0){$clockInBonusHours = NULL;}	
if ($additionalPayment == 0){$additionalPayment = NULL;}
if ($holidayStart == NULL){$holidayStart = 0;}
if ($holidaysPerYear == 0){$holidaysPerYear = NULL;}
if ($bHol_in == NULL){$bHol_in = 0;}
if ($payBack == 0){$payBack = NULL;}
if ($SSP ==0){$SSP = NULL;}
if ($SPP == 0){$SPP = NULL;}
if ($unsociableHoursCheck == NULL){$unsociableHoursCheck = 0;}
if ($unsociable_Hour_Start == NULL){$unsociable_Hour_Start = 0;}
if ($unsociable_Hour_Finish == NULL){$unsociable_Hour_Finish = 0;}
if ($overtime1_Start == 0){$overtime1_Start = NULL;}
if ($overtime1_Finish == 0){$overtime1_Finish = NULL;}
if ($overtime2_start == 0){$overtime2_start = NULL;}
if ($overtime2_Finish == 0){$overtime2_Finish = NULL;}
if ($holiday_Overtime == NULL){$holiday_Overtime = 0;}
if ($sick_Overtime == NULL){$sick_Overtime = 0;}
if ($paternity_Overtime == NULL){$paternity_Overtime = 0;}
if ($comp_Overtime == NULL){$comp_Overtime = 0;}
if ($bereavement_Overtime == NULL){$bereavement_Overtime = 0;}
if ($overtimeCheck == NULL){$overtimeCheck = 0;}
if ($overtimeCheck2 == NULL){$overtimeCheck2 = 0;}	
if ($additionalPayment2 == 0){$additionalPayment2 = NULL;}
if ($additionalPayment2Name == NULL){$additionalPayment2Name = NULL;}
if ($additionalPayment3 == 0){$additionalPayment3 = NULL;}
if ($additionalPayment3Name == NULL){$additionalPayment3Name = NULL;}
if ($saturdayExtraRate == 0){$saturdayExtraRate = NULL;}		
if ($sundayExtraRate == 0){$sundayExtraRate = NULL;}	
if ($pieceWork == 0){$pieceWork = NULL;}

if ($SAP == 0){$SAP = NULL;}
if ($salary == 0){$salary = NULL;}
if ($bonus == 0){$bonus = NULL;}
if ($commissions == 0){$commissions = NULL;}


$paymentsSettingsArray = array ('unpaidBreakQuantity' => $unpaidBreakQuantity, 'unpaidBreakLength' => $unpaidBreakLength, 'unsocial_prem_rate' => $unsocial_prem_rate);
$paymentsSettingsArray += array ('overtime1rate' => $overtime1_rate, 'overtime2start'=>$overtime2_start, 'hourlyRate'=>$hourlyRate);
$paymentsSettingsArray += array ('enhancedHolidayRate'=>$enhancedHolidayRate, 'clockInBonus' => $bankHolidayClockInBonusValue );
$paymentsSettingsArray += array ('clockInBonusHours'=>$clockInBonusHours, 'additionalPayment'=>$additionalPayment, 'bHol_in' => $bHol_in);
$paymentsSettingsArray += array ('weekStart' => $weekStart, 'holidayYearStart' => $holidayStart, 'holidaysPerYear' => $holidaysPerYear );
$paymentsSettingsArray += array ('unsociableHoursCheck' => $unsociableHoursCheck, 'unsociableHourStart' => $unsociable_Hour_Start, 'unsociableHourFinish' => $unsociable_Hour_Finish);
$paymentsSettingsArray += array ('overtime1Start' => $overtime1_Start, 'overtime1Finish' => $overtime1_Finish);
$paymentsSettingsArray += array ('overtime2Finish' => $overtime2_Finish, 'overtime2rate'=>$overtime2_rate);
$paymentsSettingsArray += array ('holidayOvertime'=> $holiday_Overtime, 'sickOvertime' => $sick_Overtime);
$paymentsSettingsArray += array ('bereavementOvertime'=>$bereavement_Overtime, 'shiftTypeIndex'=>$shiftTypeIndex);
$paymentsSettingsArray += array ('shiftLengthIndex'=>$shiftLengthIndex, 'employerName'=>$employerName, 'jobTitle'=>$jobTitle, 'weekStart'=>$weekStart);
$paymentsSettingsArray += array ('overtimeCheck'=>$overtimeCheck, 'overtimeCheck2'=>$overtimeCheck2, 'additionalPaymentName'=>$additionalPaymentName);
$paymentsSettingsArray += array ('payback'=>$payBack, 'SSP'=>$SSP, 'SPP'=>$SPP, 'additionalPayment2Name'=>$additionalPayment2Name, 'additionalPayment3Name'=>$additionalPayment3Name);
$paymentsSettingsArray += array ('additionalPayment2'=>$additionalPayment2, 'additionalPayment3'=>$additionalPayment3);
$paymentsSettingsArray += array ('paternityOvertime' => $paternity_Overtime, 'compOvertime' => $comp_Overtime, 'partialBereavementPay' => $partialBereavementPay);
$paymentsSettingsArray += array ('partialSickPay' => $partialSickPay, 'partialPaternityPay' => $partialPaternityPay, 'partialCompassionatePay' => $partialCompassionatePay);
$paymentsSettingsArray += array ('holidayStartDay' => $holidayStartDay, 'holidayStartMonth'=>$holidayStartMonth, 'holidayStartDay'=>$holidayStartDay);
$paymentsSettingsArray += array ('extraRateSaturday' => $saturdayExtraRate, 'extraRateSunday'=>$sundayExtraRate, 'weekendHoursCheck'=>$weekendHoursCheck);
$paymentsSettingsArray += array ('pieceWork'=>$pieceWork);
$paymentsSettingsArray += array ('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);

//$paymentsSettingsArray += array ('errors'=>$errors);

$jsonFile = json_encode($paymentsSettingsArray);
echo $jsonFile;
mysqli_close($dbc);
?>