<?php 

$querySelectPaymentsSettings = "SELECT * FROM current_payments_settings WHERE user_id = '$user_id'";
$resulSelectPaymentsSettings = mysqli_query($dbc, $querySelectPaymentsSettings);

$num = mysqli_num_rows($resulSelectPaymentsSettings);

if ($num>0){
	while ($row = mysqli_fetch_array($resulSelectPaymentsSettings, MYSQLI_ASSOC))
	{	//null idiegta tik todel, kad pridejus nauja column ir nenustacius ju verciu neveikia programa
		// arba jei vartotojas ivede nuli, geriau jo nerodyti, nes tada neatvaizduojamas placeholder
		$unpaidBreakQuantity = $row['unpaidBreaks'];
		$unpaidBreakLength = $row['breakLength'];
		$unsocial_prem_rate = $row['uns_prem'];
		$overtime1_rate = $row['ot1_rate'];
		$overtime2_rate = $row['ot2_rate'];
		$hourlyRate	= $row['H_rate'];
		$enhancedHolidayRate = $row['enHol_rate'];
		$bHolPayTimes = $row['BHolPay'];
		$bankHolidayClockInBonusValue = $row['CIBonus'];
		$clockInBonusHours = $row['CI_B_Hours'];
		$additionalPayment = $row['add_pay'];
		$additionalPaymentName = $row['add_pay_N'];
		$payBack = $row['payback'];
		$SSP = $row['SSP'];
		$SPP = $row['SPP'];
		$holidayStart = $row['hol_Y_start'];
		$holidaysPerYear = $row['hol_p_year'];
		$bHol_in = $row['bHol_in'];
		$unsociableHoursCheck = $row['uns_H_check'];
		$unsociable_Hour_Start = $row['uns_H_start'];
		$unsociable_Hour_Finish = $row['uns_H_finish'];
		$overtime1_Start = $row['OT1_start'];
		$overtime1_Finish = $row['OT1_finish'];
		$overtime2_start = $row['OT2_start'];
		$overtime2_Finish = $row['OT2_finish'];
		$overtimeCheck = $row['OT_check'];
		$overtimeCheck2 = $row['OT_check2'];
		$holiday_Overtime = $row['hol_OT'];
		$sick_Overtime = $row['sick_OT'];
		$paternity_Overtime = $row['pater_OT'];
		$comp_Overtime = $row['comp_OT'];
		$bereavement_Overtime = $row['ber_OT'];
		$additionalPayment2 = $row['add_pay2'];
		$additionalPayment2Name = $row['add_pay_N2'];
		$additionalPayment3 = $row['add_pay3'];
		$additionalPayment3Name = $row['add_pay_N3'];
		$partialSickPay = $row['part_sick'];
		$partialPaternityPay = $row['part_pater'];
		$partialBereavementPay = $row['part_ber'];
		$partialCompassionatePay = $row['part_comp'];
		$holidayStartYear  = $row['holStartY'];
		$holidayStartMonth = $row['holStartM'];
		$holidayStartDay = $row['holStartD'];
		$saturdayExtraRate = $row['satExtra'];
		$sundayExtraRate = $row['sunExtra'];
		$weekendHoursCheck = $row['weekendCh'];
		$pieceWork = $row['pieceWork'];
		$shiftLengthIndex = $row['shift_len_in'];
		$shiftLengthValue = $row['shift_len_val'];
		$employerName = $row['employer'];
		$jobTitle = $row['job_title'];
		$weekStart = $row['weekstart'];
		$shiftTypeIndex = $row['shift_t_in'];
		$shiftTypeValue = $row['shift_t_val'];
		$SAP = $row['SAP']; 
		$salary = $row['salary']; 
		$bonus = $row['bonus'];
		$commissions = $row['commissions'];
	}
}
else
{
		$unpaidBreakQuantity = 1;
		$unpaidBreakLength = 0;
		$unsocial_prem_rate = 0;
		$overtime1_rate = 0;
		$overtime2_rate = 0;
		$hourlyRate	= 0;
		$enhancedHolidayRate = 0;
		$bHolPayTimes = 0;
		$bankHolidayClockInBonusValue = 0;
		$clockInBonusHours = 0;
		$additionalPayment = 0;
		$additionalPaymentName = NULL;
		$payBack = 0;
		$SSP = 0;
		$SPP = 0;
		$holidayStart = "2018-01-01";
		$holidaysPerYear = 0;
		$bHol_in = 0;
		$unsociableHoursCheck = 0;
		$unsociable_Hour_Start = 0;
		$unsociable_Hour_Finish = 0;
		$overtime1_Start = 0;
		$overtime1_Finish = 0;
		$overtime2_start = 0;
		$overtime2_Finish = 0;
		$overtimeCheck = 0;
		$overtimeCheck2 = 0;
		$holiday_Overtime = 0;	
		$sick_Overtime = 0;
		$paternity_Overtime = 0;
		$comp_Overtime = 0;
		$bereavement_Overtime = 0;
		
		$additionalPayment2 = 0;
		$additionalPayment2Name = NULL;
		$additionalPayment3 = 0;
		$additionalPayment3Name = NULL;
		$partialSickPay = 0;
		$partialPaternityPay = 0;
		$partialBereavementPay = 0;
		$partialCompassionatePay = 0;
		$holidayStartYear  = 0;
		$holidayStartMonth = 0;
		$holidayStartDay = 0;
		$saturdayExtraRate = 0;
		$sundayExtraRate = 0;
		$weekendHoursCheck = 0;
		$pieceWork = 0;
		
		$shiftLengthIndex = 0;
		$shiftLengthValue = 8;
		$employerName = NULL;
		$jobTitle = NULL;
		$weekStart = 0;
		$shiftTypeIndex = 0;
		$shiftTypeValue = 'Day';
		
		$SAP = 0; 
		$salary = 0; 
		$bonus = 0;
		$commissions = 0;
}

?>