<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta. 20 verciu is viso
if(!isset($_POST['personalAllowance'], $_POST['taxRate'], $_POST['NIRate'], $_POST['NIthreshold']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['union'], $_POST['pensionContribution'], $_POST['pensionContributionEmp'], $_POST['companyLoan']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['studentLoan_th'], $_POST['studLoanRate'], $_POST['christmasSavings'], $_POST['summerSavings']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['otherDeductionName'], $_POST['otherDeduction'], $_POST['pensionBeforeTax'], $_POST['studentLoanCheck']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['otherDeduction2Name'], $_POST['otherDeduction2'], $_POST['otherDeduction3Name'], $_POST['otherDeduction3']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['higherTaxRate'], $_POST['higherTaxThreshold'], $_POST['additionalTaxRate'], $_POST['additionalTaxThreshold']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
if(!isset($_POST['addNIRate'], $_POST['addNIThreshold']))
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load() ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ];

$errors = array();
//int
if(!empty($_POST['personalAllowance'])){
	$personalAllowance = htmlentities(mysqli_real_escape_string($dbc, $_POST['personalAllowance']));
	if(is_int($personalAllowance)){$personalAllowance;}
	elseif(is_numeric($personalAllowance)){$personalAllowance = intval($personalAllowance);}
	else{$errors[] = 'Personal allowance must be a numeric value!'; }
	}
else{$personalAllowance = 0;}
	
//int
if(!empty($_POST['taxRate'])){
	$taxRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['taxRate']));
	if(is_int($taxRate)){$taxRate;}
	elseif(is_numeric($taxRate)){$taxRate = intval($taxRate);}
	else{$errors[] = 'Tax Rate must be a numeric value!'; }
	}
else{$taxRate = 0;}	

//int
if(!empty($_POST['NIRate'])){
	$NIRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['NIRate']));
	if(is_int($NIRate)){$NIRate;}
	elseif(is_numeric($NIRate)){$NIRate = intval($NIRate);}
	else{$errors[] = 'NI Rate must be a numeric value!'; }
}
else{$NIRate = 0;}

//int
if(!empty($_POST['NIthreshold'])){
	$NIthreshold = htmlentities(mysqli_real_escape_string($dbc, $_POST['NIthreshold']));
	if(is_int($NIthreshold)){$NIthreshold;}
	elseif(is_numeric($NIthreshold)){$NIthreshold = intval($NIthreshold);}
	else{$errors[] = 'NI threshold must be a numeric value!'; }
	}
else{$NIthreshold = 0;}

//decimal
if ( !empty( $_POST['union'] ) )
{
	$union = htmlentities(mysqli_real_escape_string($dbc, $_POST['union']));
	if(is_numeric($union)){$union = $union;}
	else{$errors[] = 'Union rate must be a numeric value!'; }
}
else{$union=0;}

//decimal
if ( !empty( $_POST['pensionContribution'] ) )
{
	$pensionContribution = htmlentities(mysqli_real_escape_string($dbc, $_POST['pensionContribution']));
	if(is_numeric($pensionContribution)){$pensionContribution = $pensionContribution;}
	else{$errors[] = 'Pension rate must be a numeric value!'; }
}
else{$pensionContribution=0;}
	
//decimal
if ( !empty( $_POST['pensionContributionEmp'] ) )
{
	$pensionContributionEmp = htmlentities(mysqli_real_escape_string($dbc, $_POST['pensionContributionEmp']));
	if(is_numeric($pensionContributionEmp)){$pensionContributionEmp = $pensionContributionEmp;}
	else{$errors[] = 'Pension rate must be a numeric value!'; }
}	
else{$pensionContributionEmp=0;}

//decimal
if ( !empty( $_POST['companyLoan'] ) )
{
	$companyLoan = htmlentities(mysqli_real_escape_string($dbc, $_POST['companyLoan']));
	if(is_numeric($companyLoan)){$companyLoan = $companyLoan;}
	else{$errors[] = 'Company Loan must be a numeric value!'; }	
}
else{$companyLoan=0;}
	
//decimal
if ( !empty( $_POST['studentLoan_th'] ) )
{
	$studentLoan_th = htmlentities(mysqli_real_escape_string($dbc, $_POST['studentLoan_th']));
	if(is_numeric($studentLoan_th)){$studentLoan_th = $studentLoan_th;}
	else{$errors[] = 'Student Loan threshold must be a numeric value!'; }
}
else{$studentLoan_th=0;}	
	
//decimal
if ( !empty( $_POST['studLoanRate'] ) )
{
	$studLoanRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['studLoanRate']));
	if(is_numeric($studLoanRate)){$studLoanRate = $studLoanRate;}
	else{$errors[] = 'Student Loan rate must be a numeric value!'; }
}
else{$studLoanRate=0;}
//decimal
if ( !empty( $_POST['christmasSavings'] ) )
{
	$christmasSavings = htmlentities(mysqli_real_escape_string($dbc, $_POST['christmasSavings']));
	if(is_numeric($christmasSavings)){$christmasSavings = $christmasSavings;}
	else{$errors[] = 'Christmas savings must be a numeric value!'; }
}
else{$christmasSavings=0;}

//decimal
if ( !empty( $_POST['summerSavings'] ) )
{
	$summerSavings = htmlentities(mysqli_real_escape_string($dbc, $_POST['summerSavings']));
	if(is_numeric($summerSavings)){$summerSavings = $summerSavings;}
	else{$errors[] = 'Summer savings must be a numeric value!'; }
}
else{$summerSavings=0;}
	
//string	
if(isset($_POST['otherDeductionName'])){
	$otherDeductionName = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeductionName']));}
else {$otherDeductionName = " ";}
	
//decimal
if ( !empty( $_POST['otherDeduction'] ) )
{
	$otherDeduction = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeduction']));
	if(is_numeric($otherDeduction)){$otherDeduction = $otherDeduction;}
	else{$errors[] = 'Additional deduction must be a numeric value!'; }
}
else{$otherDeduction=0;}
//int
	
if(isset($_POST['pensionBeforeTax']))
	{$pensionBeforeTax = htmlentities(mysqli_real_escape_string($dbc, $_POST['pensionBeforeTax']));}
else{$pensionBeforeTax = "false";}
	
if(isset($_POST['studentLoanCheck']))
	{$studentLoanCheck = htmlentities(mysqli_real_escape_string($dbc, $_POST['studentLoanCheck']));}
else{$studentLoanCheck = "false";}	
	
if ($pensionBeforeTax == "true"){$pensionBeforeTax = 1; }else{$pensionBeforeTax =0;}
if ($studentLoanCheck == "true"){$studentLoanCheck = 1; }else{$studentLoanCheck =0;}

//string	
if(isset($_POST['otherDeduction2Name'])){
	$otherDeduction2Name = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeduction2Name']));}
else {$otherDeduction2Name = " ";}
	
//decimal
if ( !empty( $_POST['otherDeduction2'] ) )
{
	$otherDeduction2 = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeduction2']));
	if(is_numeric($otherDeduction2)){$otherDeduction2 = $otherDeduction2;}
	else{$errors[] = 'Additional deduction 2 must be a numeric value!'; }
}
else{$otherDeduction2=0;}
	
//string	
if(isset($_POST['otherDeduction3Name'])){
	$otherDeduction3Name = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeduction3Name']));}
else {$otherDeduction3Name = " ";}
	
//decimal
if ( !empty( $_POST['otherDeduction3'] ) ){
	$otherDeduction3 = htmlentities(mysqli_real_escape_string($dbc, $_POST['otherDeduction3']));
	if(is_numeric($otherDeduction3)){$otherDeduction3 = $otherDeduction3;}
	else{$errors[] = 'Additional deduction 3 must be a numeric value!'; }
}
else{$otherDeduction3=0;}

//int
if(!empty($_POST['higherTaxRate'])){
	$higherTaxRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['higherTaxRate']));
	if(is_int($higherTaxRate)){$higherTaxRate;}
	elseif(is_numeric($higherTaxRate)){$higherTaxRate = intval($higherTaxRate);}
	else{$errors[] = 'Higher tax Rate must be a numeric value!'; }
	}
else{$higherTaxRate = 0;}

//int
if(!empty($_POST['higherTaxThreshold'])){
	$higherTaxThreshold = htmlentities(mysqli_real_escape_string($dbc, $_POST['higherTaxThreshold']));
	if(is_int($higherTaxThreshold)){$higherTaxThreshold;}
	elseif(is_numeric($higherTaxThreshold)){$higherTaxThreshold = intval($higherTaxThreshold);}
	else{$errors[] = 'Higher Tax threshold must be a numeric value!'; }
	}
else{$higherTaxThreshold = 0;}

//int
if(!empty($_POST['additionalTaxRate'])){
	$additionalTaxRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalTaxRate']));
	if(is_int($additionalTaxRate)){$additionalTaxRate;}
	elseif(is_numeric($additionalTaxRate)){$additionalTaxRate = intval($additionalTaxRate);}
	else{$errors[] = 'Additional Tax Rate must be a numeric value!'; }
	}
else{$additionalTaxRate = 0;}

//int
if(!empty($_POST['additionalTaxThreshold'])){
	$additionalTaxThreshold = htmlentities(mysqli_real_escape_string($dbc, $_POST['additionalTaxThreshold']));
	if(is_int($additionalTaxThreshold)){$additionalTaxThreshold;}
	elseif(is_numeric($additionalTaxThreshold)){$additionalTaxThreshold = intval($additionalTaxThreshold);}
	else{$errors[] = 'Additional Tax threshold must be a numeric value!'; }
	}
else{$additionalTaxThreshold = 0;}

//int
if(!empty($_POST['addNIRate'])){
	$addNIRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['addNIRate']));
	if(is_int($addNIRate)){$addNIRate;}
	elseif(is_numeric($addNIRate)){$addNIRate = intval($addNIRate);}
	else{$errors[] = 'Additional NI Rate must be a numeric value!'; }
	}
else{$addNIRate = 0;}

//int
if(!empty($_POST['addNIThreshold'])){
	$addNIThreshold = htmlentities(mysqli_real_escape_string($dbc, $_POST['addNIThreshold']));
	if(is_int($addNIThreshold)){$addNIThreshold;}
	elseif(is_numeric($addNIThreshold)){$addNIThreshold = intval($addNIThreshold);}
	else{$errors[] = 'Additional NI Rate must be a numeric value!'; }
	}
else{$addNIThreshold = 0;}
if ( empty( $errors ) )
{	

	$queryDeleteDeductionsSettings = "DELETE FROM current_deductions_settings  WHERE user_id = '$user_id'";
	$queryInsertDeductionsSettings = "INSERT INTO current_deductions_settings  (user_id, personal_All , taxRate , NIRate , NIthreshold , 
	union_de , pension , chris_sav , other_Ded , pensionBTax, other_ded_name, pensionRateEmp, comp_loan, studentLoan_th, stu_loan_rate, 
	stu_loan_ch, summer_sav, add_ded2, add_ded_N2, add_ded3, add_ded_N3, higherTaxRate, higherTaxTh, addTaxRate, addTaxTh, addNIRate,
	addNITh) VALUES ('$user_id', '$personalAllowance' , '$taxRate', '$NIRate', '$NIthreshold', '$union', '$pensionContribution', 
	'$christmasSavings', '$otherDeduction', '$pensionBeforeTax', '$otherDeductionName', '$pensionContributionEmp', '$companyLoan', 
	'$studentLoan_th', '$studLoanRate', '$studentLoanCheck', '$summerSavings', '$otherDeduction2', '$otherDeduction2Name',
	'$otherDeduction3','$otherDeduction3Name', '$higherTaxRate', '$higherTaxThreshold', '$additionalTaxRate', '$additionalTaxThreshold',
	'$addNIRate', '$addNIThreshold')";
	$resultDeleteDeductionsSettings = mysqli_query($dbc, $queryDeleteDeductionsSettings);
	$resultInsertDeductionsSettings = mysqli_query($dbc, $queryInsertDeductionsSettings);

	$deductionArray = array ("errors"=>$errors);
	
	$jsonFile = json_encode($deductionArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else
{
	$deductionArray = array("errors"=>$errors);
	$jsonFile = json_encode($deductionArray);
	echo $jsonFile;
	mysqli_close($dbc);	
}	
?>