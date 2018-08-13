<?php

$querySelectDeductionsSettings = "SELECT * FROM current_deductions_settings WHERE user_id = '$user_id'";
$resulSelectDeductionsSettings = mysqli_query($dbc, $querySelectDeductionsSettings);

$numD = mysqli_num_rows($resulSelectDeductionsSettings);

if ($numD>0)
{
	while ($rowD = mysqli_fetch_array($resulSelectDeductionsSettings, MYSQLI_ASSOC))
	{
		$personalAllowance = $rowD['personal_All'];
		$taxRate = ($rowD['taxRate']);
		$NIThreshold = $rowD['NIthreshold'];
		$NIRate = $rowD['NIRate'];
		$pensionRate = ($rowD['pension']);
		$pensionRateEmp = ($rowD['pensionRateEmp']);
		$unionDeduction = $rowD['union_de'];
		$christmasSavingsDeduction = $rowD['chris_sav'];
		$otherDeduction = $rowD['other_Ded'];
		$otherDeductionName = $rowD['other_ded_name'];
		$pensionBeforeTax = $rowD['pensionBTax'];
		$companyLoan = $rowD['comp_loan'];
		$studentLoan_th = $rowD['studentLoan_th'];
		$studLoanRate = $rowD['stu_loan_rate'];
		$studentLoanCheck = $rowD['stu_loan_ch'];
		$summerSavingsDeduction = $rowD['summer_sav'];
		$otherDeduction2 = $rowD['add_ded2'];
		$otherDeduction2Name = $rowD['add_ded_N2'];
		$otherDeduction3 = $rowD['add_ded3'];
		$otherDeduction3Name = $rowD['add_ded_N3'];
		
		$higherTaxRate = $rowD['higherTaxRate'];
		$higherTaxThreshold = $rowD['higherTaxTh'];
		$additionalTaxRate = $rowD['addTaxRate'];
		$additionalTaxThreshold = $rowD['addTaxTh'];
		$addNIRate = $rowD['addNIRate'];
		$addNIThreshold = $rowD['addNITh'];
	}
}
else
{
		$personalAllowance = 11500;
		$taxRate = 20;
		$higherTaxRate = 40;
		$higherTaxThreshold = 32000;
		$additionalTaxRate = 45;
		$additionalTaxThreshold = 150000;
		$NIThreshold = 157;
		$NIRate = 12;
		$addNIRate = 2;
		$addNIThreshold = 866;
		$pensionRate = 0;
		$pensionRateEmp = 0;
		$unionDeduction = 0;
		$christmasSavingsDeduction = 0;
		$otherDeduction = 0;
		$otherDeductionName = NULL;
		$pensionBeforeTax = 0;
		$companyLoan = 0;
		$studentLoan_th = 0;
		$studLoanRate = 0;
		$studentLoanCheck = 0;
		$summerSavingsDeduction = 0;
		$otherDeduction2 = 0;
		$otherDeduction2Name = NULL;
		$otherDeduction3 = 0;
		$otherDeduction3Name = NULL;
}


?>