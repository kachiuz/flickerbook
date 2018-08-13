<?php
$querySelectPaymentsSum = "SELECT SUM(gross_pay), SUM(basic_pay), SUM(ot1_pay), SUM(ot2_pay), SUM(hol_pay), SUM(enhol_pay), SUM(bhol_pay), 
SUM(bhol_bonus), SUM(sick_pay), SUM(fam_pay), SUM(ber_pay), SUM(comp_pay), SUM(SSP), SUM(SPP), SUM(satExtraPay), SUM(sunExtraPay), 
SUM(pieceWork), SUM(basic_h), SUM(ot1_units), SUM(ot2_units), SUM(hol_units), SUM(enhol_units), SUM(bhol_units), SUM(sick_units), 
SUM(fam_units), SUM(ber_units), SUM(comp_units), SUM(satExtraH), SUM(sunExtraH), SUM(uns_prem), SUM(uns_prem_un), SUM(uns_hol), 
SUM(uns_hol_un), SUM(uns_sick), SUM(uns_sick_un), SUM(uns_family), SUM(uns_family_un), SUM(uns_ber), SUM(uns_ber_un), SUM(uns_comp),
SUM(uns_comp_un), SUM(add_pay2), SUM(add_pay3), SUM(add_pay), SUM(payback), SUM(SAP), SUM(salary), SUM(bonus), SUM(commissions)
FROM weekly_payments_amount WHERE user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber' AND job_title = '$jobTitle'"; 
$resultSelectPaymentsSum = mysqli_query($dbc, $querySelectPaymentsSum);
$num8 = mysqli_num_rows($resultSelectPaymentsSum);

if ($num8>0){
	while ($row8 = mysqli_fetch_array($resultSelectPaymentsSum, MYSQLI_ASSOC))
	{
		
		$basicPaySum = $row8['SUM(basic_pay)'];
		$ot1_paySum = $row8['SUM(ot1_pay)'];
		$ot2_paySum = $row8['SUM(ot2_pay)'];
		$hol_paySum = $row8['SUM(hol_pay)'];
		$enhol_paySum = $row8['SUM(enhol_pay)'];
		$bhol_paySum = $row8['SUM(bhol_pay)'];
		$bhol_bonusSum = $row8['SUM(bhol_bonus)'];
		$sick_paySum = $row8['SUM(sick_pay)'];
		$fam_paySum = $row8['SUM(fam_pay)'];
		$ber_paySum = $row8['SUM(ber_pay)'];
		$comp_paySum = $row8['SUM(comp_pay)'];
		$SSP_Sum = $row8['SUM(SSP)'];
		$SPP_Sum = $row8['SUM(SPP)'];
		$sundayExtraPaySum = $row8['SUM(sunExtraPay)'];
		$saturdayExtraPaySum = $row8['SUM(satExtraPay)'];
		$pieceWorkSum = $row8['SUM(pieceWork)']; 
		$basicHoursSum = $row8['SUM(basic_h)'];
		$ot1_unitsSum = $row8['SUM(ot1_units)'];
		$ot2_unitsSum = $row8['SUM(ot2_units)'];
		$hol_unitsSum = $row8['SUM(hol_units)'];
		$enhol_unitsSum = $row8['SUM(enhol_units)'];
		$bhol_unitsSum = $row8['SUM(bhol_units)'];
		$sick_unitsSum = $row8['SUM(sick_units)'];
		$fam_unitsSum = $row8['SUM(fam_units)'];
		$ber_unitsSum = $row8['SUM(ber_units)'];
		$comp_unitsSum = $row8['SUM(comp_units)'];
		$saturdayHoursSum = $row8['SUM(satExtraH)'];
		$sundayHoursSum = $row8['SUM(sunExtraH)'];
		$uns_premSum = $row8['SUM(uns_prem)'];
		$uns_prem_unSum = $row8['SUM(uns_prem_un)'];
		$uns_holSum = $row8['SUM(uns_hol)'];
		$uns_hol_unSum = $row8['SUM(uns_hol_un)'];
		$uns_sickSum = $row8['SUM(uns_sick)'];
		$uns_sick_unSum = $row8['SUM(uns_sick_un)'];
		$uns_familySum = $row8['SUM(uns_family)'];
		$uns_family_unSum = $row8['SUM(uns_family_un)'];
		$uns_berSum = $row8['SUM(uns_ber)'];
		$uns_ber_unSum = $row8['SUM(uns_ber_un)'];
		$uns_compSum = $row8['SUM(uns_comp)'];
		$uns_comp_unSum = $row8['SUM(uns_comp_un)'];
		$gross_paySum = $row8['SUM(gross_pay)'];
		$add_paySum = $row8['SUM(add_pay)'];
		$add_pay2Sum = $row8['SUM(add_pay2)'];
		$add_pay3Sum = $row8['SUM(add_pay3)'];
		$SAPSum = $row8['SUM(SAP)'];
		$salarySum = $row8['SUM(salary)'];
		$bonusSum = $row8['SUM(bonus)'];
		$commissionsSum = $row8['SUM(commissions)'];
		$paybackSum = $row8['SUM(payback)'];
	}
}
else{
		$gross_paySum = 0;
		$basicPaySum = 0;
		$ot1_paySum = 0;
		$ot2_paySum = 0;
		$hol_paySum = 0;
		$enhol_paySum = 0;
		$bhol_paySum = 0;
		$bhol_bonusSum = 0;
		$sick_paySum = 0;
		$fam_paySum = 0;
		$ber_paySum = 0;
		$comp_paySum = 0;
		$SSP_Sum = 0;
		$SPP_Sum = 0;
		$sundayExtraPaySum = 0;
		$saturdayExtraPaySum = 0;
		$pieceWorkSum = 0;
		$basicHoursSum = 0;
		$ot1_unitsSum = 0;
		$ot2_unitsSum = 0;
		$hol_unitsSum = 0;
		$enhol_unitsSum = 0;
		$bhol_unitsSum = 0;
		$sick_unitsSum = 0;
		$fam_unitsSum = 0;
		$ber_unitsSum = 0;
		$comp_unitsSum = 0;
		$saturdayHoursSum = 0;
		$sundayHoursSum = 0;
		$uns_premSum = 0;
		$uns_prem_unSum = 0;
		$uns_holSum = 0;
		$uns_hol_unSum = 0;
		$uns_sickSum = 0;
		$uns_sick_unSum = 0;
		$uns_familySum = 0;
		$uns_family_unSum = 0;
		$uns_berSum = 0;
		$uns_ber_unSum = 0;
		$uns_compSum = 0;
		$uns_comp_unSum = 0;
		$add_paySum = 0;
		$add_pay2Sum = 0;
		$add_pay3Sum = 0;
		$SAPSum = 0;
		$salarySum = 0;
		$bonusSum = 0;
		$commissionsSum = 0;
		$paybackSum = 0;
}
$loadIndexesArray += array ("gross_paySum"=>$gross_paySum, "basicPaySum"=>$basicPaySum, "ot1_paySum"=>$ot1_paySum);
$loadIndexesArray += array ("ot2_paySum"=>$ot2_paySum, "hol_paySum"=>$hol_paySum, "enhol_paySum"=>$enhol_paySum);
$loadIndexesArray += array ("bhol_paySum"=>$bhol_paySum,"bhol_bonusSum"=>$bhol_bonusSum, "sick_paySum"=>$sick_paySum);
$loadIndexesArray += array ("fam_paySum"=>$fam_paySum, "ber_paySum"=>$ber_paySum,"comp_paySum"=>$comp_paySum );
$loadIndexesArray += array ("basicHoursSum"=>$basicHoursSum,"ot1_unitsSum"=>$ot1_unitsSum, "ot2_unitsSum"=>$ot2_unitsSum);
$loadIndexesArray += array ("hol_unitsSum"=>$hol_unitsSum,"enhol_unitsSum"=>$enhol_unitsSum,"bhol_unitsSum"=>$bhol_unitsSum);
$loadIndexesArray += array ("sick_unitsSum"=>$sick_unitsSum, "fam_unitsSum"=>$fam_unitsSum, "ber_unitsSum"=>$ber_unitsSum, "comp_unitsSum"=>$comp_unitsSum );
$loadIndexesArray += array ("saturdayHoursSum"=>$saturdayHoursSum, "sundayHoursSum"=>$sundayHoursSum);
$loadIndexesArray += array ("uns_premSum"=>$uns_premSum, "uns_prem_unSum"=>$uns_prem_unSum, "uns_holSum"=>$uns_holSum,);
$loadIndexesArray += array ("uns_hol_unSum"=>$uns_hol_unSum, "uns_sickSum"=>$uns_sickSum, "uns_sick_unSum"=>$uns_sick_unSum);
$loadIndexesArray += array ("uns_familySum"=>$uns_familySum, "uns_family_unSum"=>$uns_family_unSum, "uns_berSum"=>$uns_berSum);
$loadIndexesArray += array ("uns_ber_unSum"=>$uns_ber_unSum, "uns_compSum"=>$uns_compSum, "uns_comp_unSum"=>$uns_comp_unSum);
$loadIndexesArray += array ("SSP_Sum"=>$SSP_Sum, "SPP_Sum"=>$SPP_Sum, "pieceWorkSum"=>$pieceWorkSum, "paybackSum"=>$paybackSum);
$loadIndexesArray += array ("sundayExtraPaySum"=>$sundayExtraPaySum, "saturdayExtraPaySum"=>$saturdayExtraPaySum);
$loadIndexesArray += array ("add_pay2Sum"=>$add_pay2Sum, "add_pay3Sum"=>$add_pay3Sum, "add_paySum"=>$add_paySum);
$loadIndexesArray += array ('SAPSum' => $SAPSum, 'salarySum'=>$salarySum, 'bonusSum'=>$bonusSum, 'commissionsSum'=>$commissionsSum);

$loadIndexesArrayNoPremium += array ("gross_paySum"=>$gross_paySum); 

if ($ot1_paySum>0)			{$ot1_paySumNP = 1;}		else {$ot1_paySumNP = 0;}
if ($ot2_paySum>0)			{$ot2_paySumNP = 1;}		else {$ot2_paySumNP = 0;}
if ($hol_paySum>0)			{$hol_paySumNP = 1;}		else {$hol_paySumNP = 0;}		
if ($enhol_paySum>0)		{$enhol_paySumNP = 1;}		else {$enhol_paySumNP = 0;}
if ($bhol_paySum>0)			{$bhol_paySumNP = 1;}		else {$bhol_paySumNP = 0;}		
if ($bhol_bonusSum>0)		{$bhol_bonusSumNP = 1;}		else {$bhol_bonusSumNP = 0;}
if ($sick_paySum>0)			{$sick_paySumNP = 1;}		else {$sick_paySumNP = 0;}		
if ($fam_paySum>0)			{$fam_paySumNP = 1;}		else {$fam_paySumNP = 0;}
if ($ber_paySum>0)			{$ber_paySumNP = 1;}		else {$ber_paySumNP = 0;}		
if ($comp_paySum>0)			{$comp_paySumNP = 1;}		else {$comp_paySumNP = 0;}
if ($basicHoursSum>0)		{$basicHoursSumNP = 1;}		else {$basicHoursSumNP = 0;}
if ($ot1_unitsSum>0)		{$ot1_unitsSumNP = 1;}		else {$ot1_unitsSumNP = 0;}
if ($ot2_unitsSum>0)		{$ot2_unitsSumNP = 1;}		else {$ot2_unitsSumNP = 0;}	
if ($hol_unitsSum>0)		{$hol_unitsSumNP = 1;}		else {$hol_unitsSumNP = 0;}
if ($enhol_unitsSum>0)		{$enhol_unitsSumNP = 1;}	else {$enhol_unitsSumNP = 0;}	
if ($bhol_unitsSum>0)		{$bhol_unitsSumNP = 1;}		else {$bhol_unitsSumNP = 0;}
if ($sick_unitsSum>0)		{$sick_unitsSumNP = 1;}		else {$sick_unitsSumNP = 0;}
if ($fam_unitsSum>0)		{$fam_unitsSumNP = 1;}		else {$fam_unitsSumNP = 0;}
if ($ber_unitsSum>0)		{$ber_unitsSumNP = 1;}		else {$ber_unitsSumNP = 0;}
if ($comp_unitsSum>0)		{$comp_unitsSumNP = 1;}		else {$comp_unitsSumNP = 0;}
if ($saturdayHoursSum>0)	{$saturdayHoursSumNP = 1;}	else {$saturdayHoursSumNP = 0;}	
if ($sundayHoursSum>0)		{$sundayHoursSumNP = 1;}	else {$sundayHoursSumNP = 0;}
if ($uns_premSum>0)			{$uns_premSumNP = 1;}		else {$uns_premSumNP = 0;}	
if ($uns_prem_unSum>0)		{$uns_prem_unSumNP = 1;}	else {$uns_prem_unSumNP = 0;}
if ($uns_holSum>0)			{$uns_holSumNP = 1;}		else {$uns_holSumNP = 0;}	
if ($uns_hol_unSum>0)		{$uns_hol_unSumNP = 1;}		else {$uns_hol_unSumNP = 0;}
if ($uns_sickSum>0)			{$uns_sickSumNP = 1;}		else {$uns_sickSumNP = 0;}	
if ($uns_sick_unSum>0)		{$uns_sick_unSumNP = 1;}	else {$uns_sick_unSumNP = 0;}
if ($uns_familySum>0)		{$uns_familySumNP = 1;}		else {$uns_familySumNP = 0;}	
if ($uns_family_unSum>0)	{$uns_family_unSumNP = 1;}	else {$uns_family_unSumNP = 0;}
if ($uns_berSum>0)			{$uns_berSumNP = 1;}		else {$uns_berSumNP = 0;}		
if ($uns_ber_unSum>0)		{$uns_ber_unSumNP = 1;}		else {$uns_ber_unSumNP = 0;}
if ($uns_compSum>0)			{$uns_compSumNP = 1;}		else {$uns_compSumNP = 0;}	
if ($uns_comp_unSum>0)		{$uns_comp_unSumNP = 1;}	else {$uns_comp_unSumNP = 0;}
if ($SSP_Sum>0)				{$SSP_SumNP = 1;}			else {$SSP_SumNP = 0;}	
if ($SPP_Sum>0)				{$SPP_SumNP = 1;}			else {$SPP_SumNP = 0;}
if ($pieceWorkSum>0)		{$pieceWorkSumNP = 1;}		else {$pieceWorkSumNP = 0;}		
if ($paybackSum>0)			{$paybackSumNP = 1;}		else {$paybackSumNP = 0;}
if ($sundayExtraPaySum>0)	{$sundayExtraPaySumNP = 1;}	else {$sundayExtraPaySumNP = 0;}
if ($saturdayExtraPaySum>0)	{$saturdayExtraPaySumNP = 1;}else {$saturdayExtraPaySumNP = 0;}
if ($add_pay2Sum>0)			{$add_pay2SumNP = 1;}		else {$add_pay2SumNP = 0;}	
if ($add_pay3Sum>0)			{$add_pay3SumNP = 1;}		else {$add_pay3SumNP = 0;}
if ($add_paySum>0)			{$add_paySumNP = 1;}		else {$add_paySumNP = 0;}	
if ($basicPaySum>0)			{$basicPaySumNP = 1;}		else {$basicPaySumNP = 0;}
if ($SAPSum>0)				{$SAPSumNP = 1;}			else {$SAPSumNP = 0;}	
if ($salarySum>0)			{$salarySumNP = 1;}			else {$salarySumNP = 0;}
if ($bonusSum>0)			{$bonusSumNP = 1;}			else {$bonusSumNP = 0;}	
if ($commissionsSum>0)		{$commissionsSumNP = 1;}	else {$commissionsSumNP = 0;}

$loadIndexesArrayNoPremium += array ("basicPaySum"=>$basicPaySumNP, "ot1_paySum"=>$ot1_paySumNP);
$loadIndexesArrayNoPremium += array ("ot2_paySum"=>$ot2_paySumNP, "hol_paySum"=>$hol_paySumNP, "enhol_paySum"=>$enhol_paySumNP);
$loadIndexesArrayNoPremium += array ("bhol_paySum"=>$bhol_paySumNP,"bhol_bonusSum"=>$bhol_bonusSumNP, "sick_paySum"=>$sick_paySumNP);
$loadIndexesArrayNoPremium += array ("fam_paySum"=>$fam_paySumNP, "ber_paySum"=>$ber_paySumNP,"comp_paySum"=>$comp_paySumNP );
$loadIndexesArrayNoPremium += array ("basicHoursSum"=>$basicHoursSumNP,"ot1_unitsSum"=>$ot1_unitsSumNP, "ot2_unitsSum"=>$ot2_unitsSumNP);
$loadIndexesArrayNoPremium += array ("hol_unitsSum"=>$hol_unitsSumNP,"enhol_unitsSum"=>$enhol_unitsSumNP,"bhol_unitsSum"=>$bhol_unitsSumNP);
$loadIndexesArrayNoPremium += array ("sick_unitsSum"=>$sick_unitsSumNP, "fam_unitsSum"=>$fam_unitsSumNP, "ber_unitsSum"=>$ber_unitsSumNP, "comp_unitsSum"=>$comp_unitsSumNP );
$loadIndexesArrayNoPremium += array ("saturdayHoursSum"=>$saturdayHoursSumNP, "sundayHoursSum"=>$sundayHoursSumNP);
$loadIndexesArrayNoPremium += array ("uns_premSum"=>$uns_premSumNP, "uns_prem_unSum"=>$uns_prem_unSumNP, "uns_holSum"=>$uns_holSumNP);
$loadIndexesArrayNoPremium += array ("uns_hol_unSum"=>$uns_hol_unSumNP, "uns_sickSum"=>$uns_sickSumNP, "uns_sick_unSum"=>$uns_sick_unSumNP);
$loadIndexesArrayNoPremium += array ("uns_familySum"=>$uns_familySumNP, "uns_family_unSum"=>$uns_family_unSumNP, "uns_berSum"=>$uns_berSumNP);
$loadIndexesArrayNoPremium += array ("uns_ber_unSum"=>$uns_ber_unSumNP, "uns_compSum"=>$uns_compSumNP, "uns_comp_unSum"=>$uns_comp_unSumNP);
$loadIndexesArrayNoPremium += array ("SSP_Sum"=>$SSP_SumNP, "SPP_Sum"=>$SPP_SumNP, "pieceWorkSum"=>$pieceWorkSumNP, "paybackSum"=>$paybackSumNP);
$loadIndexesArrayNoPremium += array ("sundayExtraPaySum"=>$sundayExtraPaySumNP, "saturdayExtraPaySum"=>$saturdayExtraPaySumNP);
$loadIndexesArrayNoPremium += array ("add_pay2Sum"=>$add_pay2SumNP, "add_pay3Sum"=>$add_pay3SumNP, "add_paySum"=>$add_paySumNP);
$loadIndexesArrayNoPremium += array ('SAPSum' => $SAPSumNP, 'salarySum'=>$salarySumNP, 'bonusSum'=>$bonusSumNP, 'commissionsSum'=>$commissionsSumNP);
?>