<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' )
	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load() ; }
require('../../../connect_db.php');

$user_id = $_SESSION[ 'user_id' ]; //from sesion


require ('includes/selectAllCurrentDeductions.php');

//kad butu aktyvuotas placeholder, jei verciu nera arba jos lygios nuliui
if ($unionDeduction == 0){$unionDeduction = NULL;}
if ($pensionBeforeTax == 1){$pensionBeforeTax = "true";}else{$pensionBeforeTax= "false";}
if ($christmasSavingsDeduction == 0){$christmasSavingsDeduction = NULL;}
if ($otherDeduction == 0){$otherDeduction = NULL;}
if ($companyLoan == 0){$companyLoan = NULL;}
if ($studentLoan_th == 0){$studentLoan_th = NULL;}
if ($studLoanRate == 0){$studLoanRate = NULL;}
if ($studentLoanCheck == 1){$studentLoanCheck = "true";}else{$studentLoanCheck= "false";}
if ($summerSavingsDeduction == 0){$summerSavingsDeduction = NULL;}
if ($otherDeduction2 == 0){$otherDeduction2 = NULL;}
if ($otherDeduction3 == 0){$otherDeduction3 = NULL;}
if ($additionalTaxRate == 0){$additionalTaxRate = NULL;}
if ($additionalTaxThreshold == 0){$additionalTaxThreshold = NULL;}
if ($addNIRate == 0){$addNIRate = NULL;}
if ($addNIThreshold == 0){$addNIThreshold = NULL;}
if ($higherTaxRate == 0){$higherTaxRate = NULL;}
if ($higherTaxThreshold == 0){$higherTaxThreshold = NULL;}

$deductionsSettingsArray = array ('personalAllowance' => $personalAllowance, 'taxRate' => $taxRate, 'NIRate' => $NIRate);
$deductionsSettingsArray += array ('NIthreshold' => $NIThreshold, 'union'=>$unionDeduction, 'pensionContribution'=>$pensionRate);
$deductionsSettingsArray += array ('christmasSavings'=>$christmasSavingsDeduction, 'otherDeduction' => $otherDeduction, 'pensionBeforeTax'=> $pensionBeforeTax);
$deductionsSettingsArray += array ('otherDeductionName'=>$otherDeductionName,'pensionContributionEmp'=>$pensionRateEmp ); 
$deductionsSettingsArray += array ('companyLoan'=>$companyLoan, 'studentLoan_th'=>$studentLoan_th, 'studLoanRate'=>$studLoanRate);
$deductionsSettingsArray += array ('studentLoanCheck'=>$studentLoanCheck, 'summerSavings'=>$summerSavingsDeduction);
$deductionsSettingsArray += array("otherDeduction2"=>$otherDeduction2, "otherDeduction2Name"=>$otherDeduction2Name);
$deductionsSettingsArray += array("otherDeduction3"=>$otherDeduction3, "otherDeduction3Name"=>$otherDeduction3Name);
$deductionsSettingsArray += array("higherTaxRate"=>$higherTaxRate, "higherTaxThreshold"=>$higherTaxThreshold);
$deductionsSettingsArray += array("additionalTaxRate"=>$additionalTaxRate, "additionalTaxThreshold"=>$additionalTaxThreshold);
$deductionsSettingsArray += array("addNIRate"=>$addNIRate, "addNIThreshold"=>$addNIThreshold);

$jsonFile = json_encode($deductionsSettingsArray);
echo $jsonFile;
mysqli_close($dbc);
?>