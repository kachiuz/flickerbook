<?php
//year to date calculation

if ($taxPeriodNumber <=52)
{
	$firstTaxPeriodOfYear = 1;
}
elseif ($taxPeriodNumber >52 and $taxPeriodNumber <=104 )
{
	$firstTaxPeriodOfYear = 53;
}
elseif ($taxPeriodNumber >104 and $taxPeriodNumber <=156 )
{
	$firstTaxPeriodOfYear = 104;
}
elseif ($taxPeriodNumber >156 and $taxPeriodNumber <=2014 )
{
	$firstTaxPeriodOfYear = 156;
}
else{
	$firstTaxPeriodOfYear = 204;
}


require('selectDeductionsSum.php');
require('selectPaymentsSum.php');
require('DaysOffNotSelectedCalculator.php');
require('dayTypeHoursWorked.php');


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
	
$loadIndexesArray += array("summerSavingsPaymentCollected"=>$summerSavingsPaymentCollected, "christmasSavingsPaymentCollected"=>$christmasSavingsPaymentCollected);
$loadIndexesArrayNoPremium += array("summerSavingsPaymentCollected"=>$summerSavingsPaymentCollected, "christmasSavingsPaymentCollected"=>$christmasSavingsPaymentCollected);





//---------------------------last 12 weeks totals--------------------------------------------------------------------//
$taxPeriodNumberMinus12Weeks =  $taxPeriodNumber - 12;

$querySelectTaxSumLast12Weeks  = "SELECT SUM(tax), SUM(NI), SUM(union_de), SUM(pension), SUM(chris_sav), SUM(other_de), SUM(net_pay), 
SUM(pensionAmountEmp), SUM(comp_loan), SUM(stud_loan), SUM(summer_sav), SUM(add_ded2), SUM(add_ded3) 
FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr >= '$taxPeriodNumberMinus12Weeks' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectTaxSumLast12Weeks  = mysqli_query($dbc, $querySelectTaxSumLast12Weeks );
$num24 = mysqli_num_rows($resultSelectTaxSumLast12Weeks );

if ($num24>0){
	while ($row24 = mysqli_fetch_array($resultSelectTaxSumLast12Weeks , MYSQLI_ASSOC))
	{
		$taxSumLast12Weeks = $row24['SUM(tax)'];
		$NISumLast12Weeks  = $row24['SUM(NI)'];
		$union_deSumLast12Weeks  = $row24['SUM(union_de)'];
		$pensionSumLast12Weeks  = $row24['SUM(pension)'];
		$pensionEmpSumLast12Weeks  = $row24['SUM(pensionAmountEmp)'];
		$chris_savSumLast12Weeks  = $row24['SUM(chris_sav)'];
		$other_deLast12Weeks  = $row24['SUM(other_de)'];
		$netPaySumLast12Weeks  = $row24['SUM(net_pay)'];
		$companyLoanSumLast12Weeks  = $row24['SUM(comp_loan)'];
		$studentLoanDeductionSumLast12Weeks  = $row24['SUM(stud_loan)'];
		$summer_savSumLast12Weeks  = $row24['SUM(summer_sav)'];
		
		$add_deSum2Last12Weeks = $row24['SUM(add_ded2)'];
		$add_deSum3Last12Weeks = $row24['SUM(add_ded3)'];
	}
}	
else{
		$taxSumLast12Weeks  = 0;
		$NISumLast12Weeks  = 0;
		$union_deSumLast12Weeks  = 0;
		$pensionSumLast12Weeks  = 0;
		$pensionEmpSumLast12Weeks  = 0;
		$chris_savSumLast12Weeks  = 0;
		$other_deLast12Weeks  = 0;
		$netPaySumLast12Weeks  = 0;
		$companyLoanSumLast12Weeks  = 0;
		$studentLoanDeductionSumLast12Weeks  = 0;
		$summer_savSumLast12Weeks  = 0;
		$add_deSum2Last12Weeks = 0;
		$add_deSum3Last12Weeks = 0;
}

$loadIndexesArray += array ("taxSumLast12Weeks"=>$taxSumLast12Weeks, "NISumLast12Weeks"=>$NISumLast12Weeks, "union_deSumLast12Weeks"=>$union_deSumLast12Weeks); 
$loadIndexesArray += array ("pensionSumLast12Weeks"=>$pensionSumLast12Weeks, "chris_savSumLast12Weeks"=>$chris_savSumLast12Weeks, "other_deLast12Weeks"=>$other_deLast12Weeks);
$loadIndexesArray += array ("netPaySumLast12Weeks"=>$netPaySumLast12Weeks, "pensionEmpSumLast12Weeks"=>$pensionEmpSumLast12Weeks);
$loadIndexesArray += array ("companyLoanSumLast12Weeks"=>$companyLoanSumLast12Weeks, "studentLoanDeductionSumLast12Weeks"=>$studentLoanDeductionSumLast12Weeks);
$loadIndexesArray += array ("summer_savSumLast12Weeks"=>$summer_savSumLast12Weeks);
$loadIndexesArray += array ("add_deSum2Last12Weeks"=>$add_deSum2Last12Weeks, "add_deSum3Last12Weeks"=>$add_deSum3Last12Weeks);

if ($taxSumLast12Weeks>0){
$taxSumLast12Weeks  = 1;}
if ($NISumLast12Weeks>0){
$NISumLast12Weeks  = 1;}
if ($union_deSumLast12Weeks>0){
$union_deSumLast12Weeks  = 1;}
if ($pensionSumLast12Weeks>0){
$pensionSumLast12Weeks  = 1;}
if ($pensionEmpSumLast12Weeks>0){
$pensionEmpSumLast12Weeks  = 1;}
if ($chris_savSumLast12Weeks>0){
$chris_savSumLast12Weeks  = 1;}
if ($other_deLast12Weeks>0){
$other_deLast12Weeks  = 1;}
if ($netPaySumLast12Weeks>0){
$netPaySumLast12Weeks  = 1;}
if ($companyLoanSumLast12Weeks>0){
$companyLoanSumLast12Weeks  = 1;}
if ($studentLoanDeductionSumLast12Weeks>0){
$studentLoanDeductionSumLast12Weeks  = 1;}
if ($summer_savSumLast12Weeks>0){
$summer_savSumLast12Weeks  = 1;}
if ($add_deSum2Last12Weeks>0){
$add_deSum2Last12Weeks = 1;}
if ($add_deSum3Last12Weeks>0){
$add_deSum3Last12Weeks = 1;}

$loadIndexesArrayNoPremium += array ("taxSumLast12Weeks"=>$taxSumLast12Weeks, "NISumLast12Weeks"=>$NISumLast12Weeks, "union_deSumLast12Weeks"=>$union_deSumLast12Weeks); 
$loadIndexesArrayNoPremium += array ("pensionSumLast12Weeks"=>$pensionSumLast12Weeks, "chris_savSumLast12Weeks"=>$chris_savSumLast12Weeks, "other_deLast12Weeks"=>$other_deLast12Weeks);
$loadIndexesArrayNoPremium += array ("netPaySumLast12Weeks"=>$netPaySumLast12Weeks, "pensionEmpSumLast12Weeks"=>$pensionEmpSumLast12Weeks);
$loadIndexesArrayNoPremium += array ("companyLoanSumLast12Weeks"=>$companyLoanSumLast12Weeks, "studentLoanDeductionSumLast12Weeks"=>$studentLoanDeductionSumLast12Weeks);
$loadIndexesArrayNoPremium += array ("summer_savSumLast12Weeks"=>$summer_savSumLast12Weeks);
$loadIndexesArrayNoPremium += array ("add_deSum2Last12Weeks"=>$add_deSum2Last12Weeks, "add_deSum3Last12Weeks"=>$add_deSum3Last12Weeks);


$querySelectPaymentsSumLast12Weeks = "SELECT SUM(gross_pay) FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr >= '$taxPeriodNumberMinus12Weeks' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectPaymentsSumLast12Weeks = mysqli_query($dbc, $querySelectPaymentsSumLast12Weeks);
$num25 = mysqli_num_rows($resultSelectPaymentsSumLast12Weeks);

if ($num25>0){
	while ($row25 = mysqli_fetch_array($resultSelectPaymentsSumLast12Weeks, MYSQLI_ASSOC))
	{
		$gross_paySumLast12Weeks = $row25['SUM(gross_pay)'];
	}
}
else{
		$gross_paySumLast12Weeks = 0;
}

$loadIndexesArray += array ("gross_paySumLast12Weeks"=>$gross_paySumLast12Weeks);

if ($gross_paySumLast12Weeks>0){
$gross_paySumLast12Weeks = 1;}
$loadIndexesArrayNoPremium += array ("gross_paySumLast12Weeks"=>$gross_paySumLast12Weeks);


//-----------------------------------------------------Payments Percentage values--------------//
$holidayPayments = $enhol_paySum + $hol_paySum+$uns_holSum;
$bankHolidayPayments = $bhol_paySum +$bhol_bonusSum ;
$sicknessPaymens = $sick_paySum + $SSP_Sum+$uns_sickSum;
$parentalPayments = $fam_paySum +$SPP_Sum+$uns_familySum+$SAPSum;
$overtimePayments = $ot1_paySum + $ot2_paySum;
$basicPayments = $basicPaySum + $uns_premSum+$salarySum;
$otherPayments = $gross_paySum -$holidayPayments-$bankHolidayPayments-$sicknessPaymens-$parentalPayments -$overtimePayments-$basicPayments;
if($otherPayments <0){$otherPayments = 0;} //jei kartais gautusi neigiama verte, paverciame ja inuli, kad nupiestu grafika
if ($gross_paySum>0){
	$holidaysPercentage = round((($holidayPayments/$gross_paySum)*100),2);
	$bankHolidayPercentge = round((($bankHolidayPayments/$gross_paySum)*100),2);
	$sicknessPercentage  = round((($sicknessPaymens/$gross_paySum)*100),2);
	$parentalPercentage  = round((($parentalPayments/$gross_paySum)*100),2);
	$overtimePercentage = round((($overtimePayments/$gross_paySum)*100),2);
	$otherPercentage =  round((($otherPayments/$gross_paySum)*100),2);
	$basicPaymentsPercentage =  round((($basicPayments/$gross_paySum)*100),2);
}
else{
	$holidaysPercentage = 0;
	$bankHolidayPercentge = 0;
	$sicknessPercentage  = 0;
	$parentalPercentage  = 0;
	$overtimePercentage = 0;
	$otherPercentage =  0;
	$basicPaymentsPercentage = 0;
}
$loadIndexesArray += array ("holidaysPercentage"=>$holidaysPercentage, "bankHolidayPercentge"=>$bankHolidayPercentge);
$loadIndexesArray += array ("sicknessPercentage"=>$sicknessPercentage, "parentalPercentage"=>$parentalPercentage);
$loadIndexesArray += array ("overtimePercentage"=>$overtimePercentage, "otherPercentage"=>$otherPercentage);
$loadIndexesArray += array ("basicPaymentsPercentage"=>$basicPaymentsPercentage);

if ($holidaysPercentage>0)	{$holidaysPercentage = 1;} 		if ($bankHolidayPercentge>0){$bankHolidayPercentge = 1;}
if ($sicknessPercentage>0)	{$sicknessPercentage = 1;}		if ($parentalPercentage>0){$parentalPercentage  = 1;}
if ($overtimePercentage>0)	{$overtimePercentage = 1;} 		if ($otherPercentage>0){$otherPercentage = 1;}
if ($basicPaymentsPercentage>0)	{$basicPaymentsPercentage = 1;}

$loadIndexesArrayNoPremium += array ("holidaysPercentage"=>$holidaysPercentage, "bankHolidayPercentge"=>$bankHolidayPercentge);
$loadIndexesArrayNoPremium += array ("sicknessPercentage"=>$sicknessPercentage, "parentalPercentage"=>$parentalPercentage);
$loadIndexesArrayNoPremium += array ("overtimePercentage"=>$overtimePercentage, "otherPercentage"=>$otherPercentage);
$loadIndexesArrayNoPremium += array ("basicPaymentsPercentage"=>$basicPaymentsPercentage);

//-----------------------------------------------------daily averages calculator--------------//
//isdirbtos ir apmoketos vaalndos
$totalHoursPaid = $ot1_unitsSum + $ot2_unitsSum + $basicHoursSum;
//visos apmoketos valandos iskaitant sick, hol pater, ber, comp valandas
$totalHoursPaidAll =$totalHoursPaid+ $sick_unitsSum + $fam_unitsSum + $ber_unitsSum + $comp_unitsSum;

if ($daysIn>0){
	//daily values for every DAY IN
	$dailyGrossPay = round(($gross_paySum/$daysIn),2);
	$dailyNetPay = round(($netPaySum/$daysIn),2);
	$dailytaxSum  = round(($taxSum/$daysIn),2);
	$dailyNISum  = round(($NISum/$daysIn),2);
	$dailyHoursAtWork = round(($totalHours/$daysIn),2);
	$dailyPaidHours =  round(($totalHoursPaid/$daysIn),2);
	
	//daily values for every DAY ASSOCIATED WITH WORK (SICK, hol, pater, ber, cpm, unpaidho an so on)
	$dailyGrossPayAllDays = round(($gross_paySum/$daysNotOff),2);
	$dailyNetPayAllDays = round(($netPaySum/$daysNotOff),2);
	$dailytaxSumAllDays  = round(($taxSum/$daysNotOff),2);
	$dailyNISumAllDays = round(($NISum/$daysNotOff),2);
	
	$dailyHoursAtWorkAllDays = round(($totalHours/$daysNotOff),2);
	$dailyPaidHoursAllDays =  round(($totalHoursPaidAll/$daysNotOff),2);
}
else{
	//daily values for every DAY IN
	$dailyGrossPay = 0;
	$dailyNetPay = 0;
	$dailytaxSum = 0;
	$dailyNISum  = 0;
	$dailyHoursAtWork = 0;
	$dailyPaidHours = 0;
	
	//daily values for every DAY ASSOCIATED WITH WORK (SICK, hol, pater, ber, cpm, unpaidho an so on)
	$dailyGrossPayAllDays = 0;
	$dailyNetPayAllDays = 0;
	$dailytaxSumAllDays  = 0;
	$dailyNISumAllDays  = 0;
	
	$dailyHoursAtWorkAllDays = 0;
	$dailyPaidHoursAllDays =  0;
}
$loadIndexesArray += array ("dailyGrossPay"=>$dailyGrossPay, "dailyNetPay"=>$dailyNetPay, "dailytaxSum"=>$dailytaxSum );
$loadIndexesArray += array ("dailyNISum"=>$dailyNISum, "dailyHoursAtWork"=>$dailyHoursAtWork, "dailyPaidHours"=>$dailyPaidHours);
$loadIndexesArray += array ("dailyGrossPayAllDays"=>$dailyGrossPayAllDays, "dailyNetPayAllDays"=>$dailyNetPayAllDays);
$loadIndexesArray += array ("dailytaxSumAllDays"=>$dailytaxSumAllDays, "dailyNISumAllDays"=>$dailyNISumAllDays);
$loadIndexesArray += array ("dailyHoursAtWorkAllDays"=>$dailyHoursAtWorkAllDays, "dailyPaidHoursAllDays"=>$dailyPaidHoursAllDays);

if ($dailyGrossPay>0)			{$dailyGrossPay = 1;} 			if ($dailyNetPay>0)				{$dailyNetPay = 1;}
if ($dailytaxSum>0)				{$dailytaxSum = 1;}		 		if ($dailyNISum>0)				{$dailyNISum  = 1;}
if ($dailyHoursAtWork>0)		{$dailyHoursAtWork = 1;} 		if ($dailyPaidHours>0)			{$dailyPaidHours = 1;}
if ($dailyGrossPayAllDays>0)	{$dailyGrossPayAllDays = 1;}	if ($dailyNetPayAllDays>0)		{$dailyNetPayAllDays = 1;}
if ($dailytaxSumAllDays>0)		{$dailytaxSumAllDays = 1;} 		if ($dailyNISumAllDays>0)		{$dailyNISumAllDays = 1;}
if ($dailyHoursAtWorkAllDays>0)	{$dailyHoursAtWorkAllDays = 1;} if ($dailyPaidHoursAllDays>0)	{$dailyPaidHoursAllDays = 1;}

$loadIndexesArrayNoPremium += array ("dailyGrossPay"=>$dailyGrossPay, "dailyNetPay"=>$dailyNetPay, "dailytaxSum"=>$dailytaxSum );
$loadIndexesArrayNoPremium += array ("dailyNISum"=>$dailyNISum, "dailyHoursAtWork"=>$dailyHoursAtWork, "dailyPaidHours"=>$dailyPaidHours);
$loadIndexesArrayNoPremium += array ("dailyGrossPayAllDays"=>$dailyGrossPayAllDays, "dailyNetPayAllDays"=>$dailyNetPayAllDays);
$loadIndexesArrayNoPremium += array ("dailytaxSumAllDays"=>$dailytaxSumAllDays, "dailyNISumAllDays"=>$dailyNISumAllDays);
$loadIndexesArrayNoPremium += array ("dailyHoursAtWorkAllDays"=>$dailyHoursAtWorkAllDays, "dailyPaidHoursAllDays"=>$dailyPaidHoursAllDays);

//-----------------------------------------------------Hourly averages calculator--------------//
$totalHoursPaid = $ot1_unitsSum + $ot2_unitsSum + $basicHoursSum;
$totalAllHoursPaid = $totalHoursPaid+$enhol_unitsSum+$hol_unitsSum+$sick_unitsSum+$fam_unitsSum+$ber_unitsSum+$comp_unitsSum;
if ($totalHoursPaid>0){
	//for paid hours spent at work
	$hourlyGrossPay = round(($gross_paySum/$totalHoursPaid),2);
	$hourlyNetPay = round(($netPaySum/$totalHoursPaid),2);
	$hourlytaxSum  = round(($taxSum/$totalHoursPaid),2);
	$hourlyNISum  = round(($NISum/$totalHoursPaid),2);
	//for total hours spent at work
	$hourlyGrossPayTotalH = round(($gross_paySum/$totalHours),2);
	$hourlyNetPayTotalH = round(($netPaySum/$totalHours),2);
	$hourlytaxSumTotalH  = round(($taxSum/$totalHours),2);
	$hourlyNISumTotalH  = round(($NISum/$totalHours),2);
	//for all paid hours
	$hourlyGrossPayAllH = round(($gross_paySum/$totalAllHoursPaid),2);
	$hourlyNetPayAllH = round(($netPaySum/$totalAllHoursPaid),2);
	$hourlytaxSumAllH  = round(($taxSum/$totalAllHoursPaid),2);
	$hourlyNISumAllH  = round(($NISum/$totalAllHoursPaid),2);
	
}
else{
	//for paid hours spent at work
	$hourlyGrossPay = 0;
	$hourlyNetPay = 0;
	$hourlytaxSum  = 0;
	$hourlyNISum  = 0;
	//for total hours spent at work
	$hourlyGrossPayTotalH = 0;
	$hourlyNetPayTotalH = 0;
	$hourlytaxSumTotalH = 0;
	$hourlyNISumTotalH = 0;
	//for all paid hours
	$hourlyGrossPayAllH = 0;
	$hourlyNetPayAllH = 0;
	$hourlytaxSumAllH  = 0;
	$hourlyNISumAllH  = 0;
}
$loadIndexesArray += array ("hourlyGrossPay"=>$hourlyGrossPay, "hourlyNetPay"=>$hourlyNetPay, "hourlytaxSum"=>$hourlytaxSum );
$loadIndexesArray += array ("hourlyNISum"=>$hourlyNISum, "hourlyGrossPayTotalH"=>$hourlyGrossPayTotalH, "hourlyNetPayTotalH"=>$hourlyNetPayTotalH);
$loadIndexesArray += array ("hourlytaxSumTotalH"=>$hourlytaxSumTotalH, "hourlyNISumTotalH"=>$hourlyNISumTotalH);
$loadIndexesArray += array ("hourlyGrossPayAllH"=>$hourlyGrossPayAllH, "hourlyNetPayAllH"=>$hourlyNetPayAllH);
$loadIndexesArray += array ("hourlytaxSumAllH"=>$hourlytaxSumAllH, "hourlyNISumAllH"=>$hourlyNISumAllH);

if ($hourlyGrossPay>0)			{$hourlyGrossPay = 1;} 				if ($hourlyNetPay>0){$hourlyNetPay = 1;}
if ($hourlytaxSum>0)			{$hourlytaxSum = 1;}				if ($hourlyNISum>0){$hourlyNISum  = 1;}
if ($hourlyGrossPayTotalH>0)	{$hourlyGrossPayTotalH = 1;} 		if ($hourlyNetPayTotalH>0){$hourlyNetPayTotalH = 1;}
if ($hourlytaxSumTotalH>0)		{$hourlytaxSumTotalH = 1;}			if ($hourlyNISumTotalH>0){$hourlyNISumTotalH  = 1;}
if ($hourlyGrossPayAllH>0)		{$hourlyGrossPayAllH = 1;}			if ($hourlyNetPayAllH>0){$hourlyNetPayAllH  = 1;}
if ($hourlytaxSumAllH>0)		{$hourlytaxSumAllH = 1;}			if ($hourlyNISumAllH>0){$hourlyNISumAllH  = 1;}

$loadIndexesArrayNoPremium += array ("hourlyGrossPay"=>$hourlyGrossPay, "hourlyNetPay"=>$hourlyNetPay, "hourlytaxSum"=>$hourlytaxSum );
$loadIndexesArrayNoPremium += array ("hourlyNISum"=>$hourlyNISum, "hourlyGrossPayTotalH"=>$hourlyGrossPayTotalH, "hourlyNetPayTotalH"=>$hourlyNetPayTotalH);
$loadIndexesArrayNoPremium += array ("hourlytaxSumTotalH"=>$hourlytaxSumTotalH, "hourlyNISumTotalH"=>$hourlyNISumTotalH);
$loadIndexesArrayNoPremium += array ("hourlyGrossPayAllH"=>$hourlyGrossPayAllH, "hourlyNetPayAllH"=>$hourlyNetPayAllH);
$loadIndexesArrayNoPremium += array ("hourlytaxSumAllH"=>$hourlytaxSumAllH, "hourlyNISumAllH"=>$hourlyNISumAllH);



//-------------------------------------------------------------------------holiday calculator------------------
//holiday start vertes paemimas
$querySelectPaymentsSettings = "SELECT hol_Y_start, hol_p_year  FROM current_payments_settings WHERE user_id = '$user_id'";
$resulSelectPaymentsSettings = mysqli_query($dbc, $querySelectPaymentsSettings);

$num0 = mysqli_num_rows($resulSelectPaymentsSettings);

if ($num0>0){
	while ($row0 = mysqli_fetch_array($resulSelectPaymentsSettings, MYSQLI_ASSOC))
	{
		$holidayStart = $row0['hol_Y_start'];
		$holidaysPerYear = $row0['hol_p_year'];
	}
}
else{
		$holidayStart = "2018-01-01";
		$holidaysPerYear = 0;
}
//paimame atostogu metu pabaigos data
$querySelectHolidayEnd = "SELECT DATE_ADD('$holidayStart',INTERVAL 1 YEAR) as holidayEnd"; 
$resultSelectHolidayEnd = mysqli_query($dbc, $querySelectHolidayEnd);
$num26 = mysqli_num_rows($resultSelectHolidayEnd);

if ($num26>0){
	while ($row26 = mysqli_fetch_array($resultSelectHolidayEnd, MYSQLI_ASSOC))
	{
		$holidayEnd = $row26['holidayEnd'];
	}
}
else{
		$holidayEnd = "Not found";
		//$errors
}

//paimame esamos dienos verte
$querySelectCurrentDate = "SELECT CURDATE() as currentDate"; 
$resultSelectCurrenDate = mysqli_query($dbc, $querySelectCurrentDate);
$num27 = mysqli_num_rows($resultSelectCurrenDate);

if ($num27>0){
	while ($row27 = mysqli_fetch_array($resultSelectCurrenDate, MYSQLI_ASSOC))
	{
		$currentDate = $row27['currentDate'];
	}
}
else{
		$currentDate = "Not found";
		//$errors
}

//suskaiciuojame visas pilnas isnaudotas atostogu dienas iki esanos datos
$querySelectHolidayDaysUsed = "SELECT COUNT(dayType) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '3' AND date >= '$holidayStart' AND date < '$currentDate'"; 
$resultSelectHolidayDaysUsed = mysqli_query($dbc, $querySelectHolidayDaysUsed);
$num28 = mysqli_num_rows($resultSelectHolidayDaysUsed);

if ($num28>0){
	while ($row28 = mysqli_fetch_array($resultSelectHolidayDaysUsed, MYSQLI_ASSOC))
	{
		$holidaysUsed = $row28['COUNT(dayType)'];
	}
}
else{
		$holidaysUsed = "Not found";
		//$errors
}

//suskaiciuojame visas half/holiday isnaudotas atostogu dienas iki esanos datos
$querySelectHalfHolidayDaysUsed = "SELECT COUNT(dayType) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '4' AND date >= '$holidayStart' AND date < '$currentDate'"; 
$resultSelectHalfHolidayDaysUsed = mysqli_query($dbc, $querySelectHalfHolidayDaysUsed);
$num30 = mysqli_num_rows($resultSelectHalfHolidayDaysUsed);

if ($num30>0){
	while ($row30 = mysqli_fetch_array($resultSelectHalfHolidayDaysUsed, MYSQLI_ASSOC))
	{
		$halfHolidaysUsed = $row30['COUNT(dayType)']/2;
	}
}
else{
		$halfHolidaysUsed = "Not found";
		//$errors
}

//suskaiciuojame visas pilnas uzbookintas atostogu dienas po esanos datos
$querySelectHolidayDaysBooked = "SELECT COUNT(dayType), MIN(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '3' AND date >= '$currentDate' AND date < '$holidayEnd'"; 
$resultSelectHolidayDaysBooked = mysqli_query($dbc, $querySelectHolidayDaysBooked);
$num29 = mysqli_num_rows($resultSelectHolidayDaysBooked);

if ($num29>0){
	while ($row29 = mysqli_fetch_array($resultSelectHolidayDaysBooked, MYSQLI_ASSOC))
	{
		$holidaysBooked = $row29['COUNT(dayType)'];
		//$nextFullHoliday = $row29['MIN(date)']; //sitai vertei reiketu surasyti atskira query, kad butu galima imti verte is sekanciu hol year metu
	}
}
else{
		$holidaysBooked = 0;
		//$nextFullHoliday = "Not Found";
		//$errors
}




//suskaiciuojame visas half/hol uzbookintas atostogu dienas po esanos datos
$querySelectHalfHolidayDaysBooked = "SELECT COUNT(dayType) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '4' AND date >= '$currentDate' AND date < '$holidayEnd'"; 
$resultSelectHalfHolidayDaysBooked = mysqli_query($dbc, $querySelectHalfHolidayDaysBooked);
$num31 = mysqli_num_rows($resultSelectHalfHolidayDaysBooked);

if ($num31>0){
	while ($row31 = mysqli_fetch_array($resultSelectHalfHolidayDaysBooked, MYSQLI_ASSOC))
	{
		$halfHolidaysBooked = $row31['COUNT(dayType)']/2;
	}
}
else{
		$halfHolidaysBooked = 0;

}

//nustatome kuri dabar metu diena
$queryDayOffYear = "SELECT DATEDIFF('$currentDate', '$holidayStart') as dayOffHolidayYear"; 
$resultDayOffYear = mysqli_query($dbc, $queryDayOffYear);
$num37 = mysqli_num_rows($resultDayOffYear);

if ($num37>0){
	while ($row37 = mysqli_fetch_array($resultDayOffYear, MYSQLI_ASSOC))
	{
		$dayOfYear = $row37['dayOffHolidayYear'];
	}
}
else{
		$dayOfYear = 0;
}




//skaiciuojam sunaudotas, nepanaudotas ir uzbukintas atostogas
$totalHolidaysUsed = $holidaysUsed + $halfHolidaysUsed;
$totalHolidaysBooked = $holidaysBooked + $halfHolidaysBooked;
$holidaysNotUsed = $holidaysPerYear - $totalHolidaysBooked -$totalHolidaysUsed;
$holidaysEarned = round((($holidaysPerYear/365)*$dayOfYear),2);

$loadIndexesArray += array ("holidaysEarned"=>$holidaysEarned);
$loadIndexesArray += array ("totalHolidaysUsed"=>$totalHolidaysUsed, "totalHolidaysBooked"=>$totalHolidaysBooked);
$loadIndexesArray += array ("holidaysNotUsed"=>$holidaysNotUsed);

if ($totalHolidaysUsed>0){
$totalHolidaysUsed = 1;}
if ($totalHolidaysUsed>0){
$totalHolidaysBooked = 1;}
if ($totalHolidaysUsed>0){
$holidaysNotUsed = 1;}
if ($totalHolidaysUsed>0){
$holidaysEarned = 1;}

$loadIndexesArrayNoPremium += array ("holidaysEarned"=>$holidaysEarned);
$loadIndexesArrayNoPremium += array ("totalHolidaysUsed"=>$totalHolidaysUsed, "totalHolidaysBooked"=>$totalHolidaysBooked);
$loadIndexesArrayNoPremium += array ("holidaysNotUsed"=>$holidaysNotUsed);

//nustatome ar dabar yra atostogos ar ne

$queryCurrentDayType = "SELECT dayType FROM day_indexes WHERE user_id = '$user_id' AND date = '$currentDate'"; 
$resultCurrentDayType = mysqli_query($dbc, $queryCurrentDayType);
$num40 = mysqli_num_rows($resultCurrentDayType);

if ($num40>0){
	while ($row40 = mysqli_fetch_array($resultCurrentDayType, MYSQLI_ASSOC))
	{$currentDayType = $row40['dayType'];}
}
else{$currentDayType = 0;}



//jei dabar ne atostogos nustatome artimiausia pilnu atostogu atostogu data

if ($currentDayType ==3 OR $currentDayType == 4)
{
	$daysSinceLastHoliday = "Holiday!";
	$daysTillNextHoliday = "Holiday!";
}
else{

	//nustatome artimiausia pilnu atostogu atostogu data
	$querySelectNextHoliday = "SELECT MIN(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '3' AND date >= '$currentDate'"; 
	$resultNextHoliday = mysqli_query($dbc, $querySelectNextHoliday);
	$num33 = mysqli_num_rows($resultNextHoliday);

	if ($num33>0){
		while ($row33 = mysqli_fetch_array($resultNextHoliday, MYSQLI_ASSOC))
		{$nextFullHoliday = $row33['MIN(date)'];}
	}
	else{$nextFullHoliday = $currentDate;}


	//nustatome artimiausia puse atostogu atostogu data
	$querySelectNextHalfHoliday = "SELECT MIN(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '4' AND date >= '$currentDate'"; 
	$resultNextHalfHoliday = mysqli_query($dbc, $querySelectNextHalfHoliday);
	$num33 = mysqli_num_rows($resultNextHalfHoliday);

	if ($num33>0){
		while ($row33 = mysqli_fetch_array($resultNextHalfHoliday, MYSQLI_ASSOC))
		{$nextHalfHoliday = $row33['MIN(date)'];}
	}
	else{$nextHalfHoliday = $currentDate;}

	//nustatome kiek dienu liko iki kitu atostogu
	if ($nextHalfHoliday>$nextFullHoliday and $nextFullHoliday != NULL)
	{
		$nextHoliday = $nextFullHoliday;
	}
	elseif ($nextHalfHoliday>$nextFullHoliday and $nextFullHoliday == NULL)
	{
		$nextHoliday = $nextHalfHoliday;
	}
	elseif ($nextFullHoliday > $nextHalfHoliday and $nextHalfHoliday !=NULL)
	{
		$nextHoliday = $nextHalfHoliday;
	}
	elseif ($nextFullHoliday > $nextHalfHoliday and $nextHalfHoliday ==NULL)
	{
		$nextHoliday = $nextFullHoliday;
	}
	else{
		$nextHoliday = $currentDate;
	}

	$queryDateDiff = "SELECT DATEDIFF('$nextHoliday', '$currentDate') as dateDiff"; 
	$resultDateDiff = mysqli_query($dbc, $queryDateDiff);
	$num32 = mysqli_num_rows($resultDateDiff);

	if ($num32>0){
		while ($row32 = mysqli_fetch_array($resultDateDiff, MYSQLI_ASSOC))
		{
			$daysTillNextHoliday = $row32['dateDiff'];
		}
	}
	else{
			$daysTillNextHoliday = 0;
	}

	//nustatome artimiausia puse atostogu  data
	$querySelectLastHalfHoliday = "SELECT MAX(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '4' AND date < '$currentDate'"; 
	$resultLastHalfHoliday = mysqli_query($dbc, $querySelectLastHalfHoliday);
	$num35 = mysqli_num_rows($resultLastHalfHoliday);

	if ($num35>0){
		while ($row35 = mysqli_fetch_array($resultLastHalfHoliday, MYSQLI_ASSOC))
		{$lastHalfHoliday = $row35['MAX(date)'];}
	}
	else{$lastHalfHoliday = $currentDate;}



	//nustatome artimiausia pilnu atostogu atostogu data
	$querySelectLastHoliday = "SELECT MAX(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '3' AND date < '$currentDate'"; 
	$resultLastHoliday = mysqli_query($dbc, $querySelectLastHoliday);
	$num34 = mysqli_num_rows($resultLastHoliday);

	if ($num34>0){
		while ($row34 = mysqli_fetch_array($resultLastHoliday, MYSQLI_ASSOC))
		{$lastFullHoliday = $row34['MAX(date)'];}
	}
	else{$lastFullHoliday = $currentDate;}



	if ($lastHalfHoliday>$lastFullHoliday)
	{
		$lastHoliday = $lastHalfHoliday;
	}
	elseif ($lastFullHoliday > $lastHalfHoliday)
	{
		$lastHoliday = $lastFullHoliday;
	}
	else{
		$lastHoliday = $currentDate;
	}


	$queryDateDiff = "SELECT DATEDIFF('$currentDate', '$lastHoliday') as dateDiff"; 
	$resultDateDiff = mysqli_query($dbc, $queryDateDiff);
	$num36 = mysqli_num_rows($resultDateDiff);

	if ($num36>0){
		while ($row36 = mysqli_fetch_array($resultDateDiff, MYSQLI_ASSOC))
		{
			$daysSinceLastHoliday = $row36['dateDiff'];
		}
	}
	else{
			$daysSinceLastHoliday = 0;
	}
}

$loadIndexesArray += array ("daysSinceLastHoliday"=>$daysSinceLastHoliday);
$loadIndexesArray += array ("nextFullHoliday"=>$daysTillNextHoliday);

$loadIndexesArrayNoPremium += array ("daysSinceLastHoliday"=>1);
$loadIndexesArrayNoPremium += array ("nextFullHoliday"=>1);

//----------------------------------sickness dienos--------------------------------------------//

//nustatome ar dabar sick ar ne
$queryCurrentDayType = "SELECT dayType FROM day_indexes WHERE user_id = '$user_id' AND date = '$currentDate'"; 
$resultCurrentDayType = mysqli_query($dbc, $queryCurrentDayType);
$num41 = mysqli_num_rows($resultCurrentDayType);

if ($num41>0){
	while ($row41 = mysqli_fetch_array($resultCurrentDayType, MYSQLI_ASSOC))
	{$currentDayType = $row41['dayType'];}
}
else{$currentDayType = 0;}


if ($currentDayType ==6 OR $currentDayType == 7)
{
	$daysSinceLastSick = "Today";
}
else{
	//nustatome paskutine sick dienas
	$querySelectLastSick = "SELECT MAX(date) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '7' OR dayType = '6' AND date < '$currentDate'"; 
	$resultLastSick = mysqli_query($dbc, $querySelectLastSick);
	$num38 = mysqli_num_rows($resultLastSick);

	if ($num38>0){
		while ($row38 = mysqli_fetch_array($resultLastSick, MYSQLI_ASSOC))
		{$lastSick = $row38['MAX(date)'];}
	}
	else{$lastSick = $currentDate;}

	$queryDateDiff = "SELECT DATEDIFF('$currentDate', '$lastSick') as dateDiff"; 
	$resultDateDiff = mysqli_query($dbc, $queryDateDiff);
	$num39 = mysqli_num_rows($resultDateDiff);

	if ($num39>0){
		while ($row39 = mysqli_fetch_array($resultDateDiff, MYSQLI_ASSOC))
		{
			$daysSinceLastSick = $row39['dateDiff'];
		}
	}
	else{
			$daysSinceLastSick = 0;
	}
}
$loadIndexesArray += array ("daysSinceLastSick"=>$daysSinceLastSick);
$loadIndexesArrayNoPremium += array ("daysSinceLastSick"=>1);

//last 10 weeks net pay and deductions

for ($i=$taxPeriodNumber;$i>$taxPeriodNumber-10;$i--){
	$querySummerSavingsPaymentsSum = "SELECT net_pay 
	FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr = '$i' LIMIT 10"; 
	$resultSummerSavingsPaymentsSum = mysqli_query($dbc, $querySummerSavingsPaymentsSum);
	$num18 = mysqli_num_rows($resultSummerSavingsPaymentsSum);

	if ($num18==1){
		while ($row18 = mysqli_fetch_array($resultSummerSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$net_pay = $row18['net_pay'];
		}
	}
	else{
			$net_pay =0;
	}
	
	$last10GrossPayQuery = "SELECT gross_pay 
	FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr = '$i' LIMIT 10"; 
	$last10GrossPayResult = mysqli_query($dbc, $last10GrossPayQuery);
	$num18 = mysqli_num_rows($last10GrossPayResult);

	if ($num18==1){
		while ($row18 = mysqli_fetch_array($last10GrossPayResult, MYSQLI_ASSOC))
		{
			$gross_pay = $row18['gross_pay'];
		}
	}
	else{
			$gross_pay =0;
	}
	
	$deductions = $gross_pay - $net_pay;
	//echo $net_pay.' - '.$deductions.'<br>';
	
	$last10NetPayArray[] = $net_pay;
	$last10DeductionsArray[] = $deductions;
	
	if ($net_pay>0)
	{
		$last10NetPayArrayNoPremium[] = 1;
	}
	else{
		$last10NetPayArrayNoPremium[] = 0;
	}
	
	if ($deductions>0)
	{
		$last10DeductionsArrayNoPremium[] = 1;
	}
	else{
		$last10DeductionsArrayNoPremium[] = 0;
	}
	
}
$loadIndexesArray += array ("last10NetPayArray"=>$last10NetPayArray, "last10DeductionsArray"=>$last10DeductionsArray);
$loadIndexesArrayNoPremium += array ("last10NetPayArrayNoPremium"=>$last10NetPayArrayNoPremium, "last10DeductionsArrayNoPremium"=>$last10DeductionsArrayNoPremium);


//last 10 weeks Paid Hours

for ($i=$taxPeriodNumber;$i>$taxPeriodNumber-10;$i--){
	$querySummerSavingsPaymentsSum = "SELECT basic_h, ot1_units, ot2_units, enhol_units, hol_units, sick_units, fam_units, 
	ber_units, comp_units 
	FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr = '$i' LIMIT 10"; 
	$resultSummerSavingsPaymentsSum = mysqli_query($dbc, $querySummerSavingsPaymentsSum);
	$num18 = mysqli_num_rows($resultSummerSavingsPaymentsSum);

	if ($num18==1){
		while ($row18 = mysqli_fetch_array($resultSummerSavingsPaymentsSum, MYSQLI_ASSOC))
		{
			$basicHours = $row18['basic_h'];
			$OT1Hours = $row18['ot1_units'];
			$OT2Hours = $row18['ot2_units'];
			$enholHours = $row18['enhol_units'];
			$holHours = $row18['hol_units'];
			$sickHours = $row18['sick_units'];
			$famHours = $row18['fam_units'];
			$berHours = $row18['ber_units'];
			$compHours = $row18['comp_units'];
		}
	}
	else{
			$basicHours = 0;
			$OT1Hours = 0;
			$OT2Hours = 0;
			$enholHours = 0;
			$holHours = 0;
			$sickHours = 0;
			$famHours = 0;
			$berHours = 0;
			$compHours = 0;
	}
	
	$workingHours = $basicHours +$OT1Hours + $OT2Hours;
	$allHolidayHours = $enholHours + $holHours;
	
	$last10WorkingHoursArray[] = $workingHours;
	$last10AllHolidayHoursArray[] = $allHolidayHours;
	$last10SickHoursArray[] = $sickHours;
	$last10FamHoursArray[] = $famHours;
	$last10BerHoursArray[] = $berHours;
	$last10CompHoursArray[] = $compHours;
	
	if ($workingHours>0)	{$last10WorkingHoursArrayNP[] = 1;}			else{$last10WorkingHoursArrayNP[] = 0;}
	if ($allHolidayHours>0)	{$last10AllHolidayHoursArrayNP[] = 1;}		else{$last10AllHolidayHoursArrayNP[] = 0;}
	if ($sickHours>0)		{$last10SickHoursArrayNP[] = 1;}			else{$last10SickHoursArrayNP[] = 0;}
	if ($famHours>0)		{$last10FamHoursArrayNP[] = 1;}				else{$last10FamHoursArrayNP[] = 0;}
	if ($berHours>0)		{$last10BerHoursArrayNP[] = 1;}				else{$last10BerHoursArrayNP[] = 0;}
	if ($compHours>0)		{$last10CompHoursArrayNP[] = 1;}			else{$last10CompHoursArrayNP[] = 0;}
}
$loadIndexesArray += array ("last10WorkingHoursArray"=>$last10WorkingHoursArray, "last10SickHoursArray"=>$last10SickHoursArray);
$loadIndexesArray += array ("last10AllHolidayHoursArray"=>$last10AllHolidayHoursArray, "last10FamHoursArray"=>$last10FamHoursArray);
$loadIndexesArray += array ("last10BerHoursArray"=>$last10BerHoursArray, "last10CompHoursArray"=>$last10CompHoursArray);

$loadIndexesArrayNoPremium += array ("last10WorkingHoursArray"=>$last10WorkingHoursArrayNP, "last10SickHoursArray"=>$last10SickHoursArrayNP);
$loadIndexesArrayNoPremium += array ("last10AllHolidayHoursArray"=>$last10AllHolidayHoursArrayNP, "last10FamHoursArray"=>$last10FamHoursArrayNP);
$loadIndexesArrayNoPremium += array ("last10BerHoursArray"=>$last10BerHoursArrayNP, "last10CompHoursArray"=>$last10CompHoursArrayNP);
?>