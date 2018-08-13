<?php

$querySelectTaxSum = "SELECT SUM(tax), SUM(NI), SUM(union_de), SUM(pension), SUM(other_de), SUM(net_pay), 
SUM(pensionAmountEmp), SUM(comp_loan), SUM(stud_loan), SUM(add_ded2), SUM(add_ded3) 
FROM weekly_deductions_amount WHERE user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber' AND employer = '$employer' AND job_title = '$jobTitle'"; 
$resultSelectTaxSum = mysqli_query($dbc, $querySelectTaxSum);
$num7 = mysqli_num_rows($resultSelectTaxSum);

if ($num7>0){
	while ($row7 = mysqli_fetch_array($resultSelectTaxSum, MYSQLI_ASSOC))
	{
		$taxSum = $row7['SUM(tax)'];
		$NISum = $row7['SUM(NI)'];
		$union_deSum = $row7['SUM(union_de)'];
		$pensionSum = $row7['SUM(pension)'];
		$pensionEmpSum = $row7['SUM(pensionAmountEmp)'];
		$other_de = $row7['SUM(other_de)'];
		$netPaySum = $row7['SUM(net_pay)'];
		$companyLoanSum = $row7['SUM(comp_loan)'];
		$studentLoanDeductionSum = $row7['SUM(stud_loan)'];
		$add_deSum2 = $row7['SUM(add_ded2)'];
		$add_deSum3 = $row7['SUM(add_ded3)'];
	}
}	
else{
		$taxSum = 0;
		$NISum = 0;
		$union_deSum = 0;
		$pensionSum = 0;
		$pensionEmpSum = 0;
		$other_de = 0;
		$netPaySum = 0;
		$companyLoanSum = 0;
		$studentLoanDeductionSum = 0;
		$add_deSum2 = 0;
		$add_deSum3 = 0;
}

$loadIndexesArray += array ("taxSum"=>$taxSum, "NISum"=>$NISum, "union_deSum"=>$union_deSum, "pensionSum"=>$pensionSum);
$loadIndexesArray += array ("other_de"=>$other_de, "netPaySum"=>$netPaySum, "pensionEmpSum"=>$pensionEmpSum);
$loadIndexesArray += array ("companyLoanSum"=>$companyLoanSum, "studentLoanDeductionSum"=>$studentLoanDeductionSum);
$loadIndexesArray += array ("add_deSum2"=>$add_deSum2, "add_deSum3"=>$add_deSum3);

$loadIndexesArrayNoPremium += array ("taxSum"=>$taxSum, "NISum"=>$NISum, "union_deSum"=>$union_deSum, "pensionSum"=>$pensionSum);
$loadIndexesArrayNoPremium += array ("other_de"=>$other_de, "netPaySum"=>$netPaySum, "pensionEmpSum"=>$pensionEmpSum);
$loadIndexesArrayNoPremium += array ("companyLoanSum"=>$companyLoanSum, "studentLoanDeductionSum"=>$studentLoanDeductionSum);
$loadIndexesArrayNoPremium += array ("add_deSum2"=>$add_deSum2, "add_deSum3"=>$add_deSum3);

?>