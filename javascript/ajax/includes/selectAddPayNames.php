<?php
////////sitas failas niekur nepanaudotas
require('../../connect_db.php');
$firstTaxPeriodOfYear = 36;
$taxPeriodNumber = 42;
$user_id = 1;
///MIN IR MAX NETINKA< COUNT != NEVEIKIA, IS NOT NULL NEVEIKIA TAI AS BBD

//pirmas add pay name
$querySelectAddPayName = "SELECT COUNT(add_pay_N) FROM weekly_payments_amount WHERE 
add_pay_N != NULL AND user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectAddPayName = mysqli_query($dbc, $querySelectAddPayName);
$num8 = mysqli_num_rows($resultSelectAddPayName);

if ($num8>0){
	while ($row8 = mysqli_fetch_array($resultSelectAddPayName, MYSQLI_ASSOC))
	{
		$add_pay_NMAX = $row8['COUNT(add_pay_N)'];
		if ($add_pay_NMAX == NULL){$add_pay_NMAX = "Add. Pay1";}
		$add_pay_NMIN = $row8['COUNT(add_pay_N)'];
		if ($add_pay_NMIN == NULL){$add_pay_NMIN = "Add. Pay1";}
	}
}
else{
	$add_pay_NMAX = "Add. Pay";
	$add_pay_NMIN = "Add. Pay";
	}

//antras add pay name
$querySelectAddPay2Name = "SELECT MAX(add_pay_N2) FROM weekly_payments_amount WHERE 
add_pay_N2 IS NOT NULL AND user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectAddPay2Name = mysqli_query($dbc, $querySelectAddPay2Name);
$num8 = mysqli_num_rows($resultSelectAddPay2Name);

if ($num8>0){
	while ($row8 = mysqli_fetch_array($resultSelectAddPay2Name, MYSQLI_ASSOC))
	{
		$add_pay_N2 = $row8['MAX(add_pay_N2)'];
		if ($add_pay_N2 == NULL){$add_pay_N2 = "Add. Pay 2";}
	}
}
else{$add_pay_N2 = "Add. Pay 2";}

//trecias add pay name
$querySelectAddPay3Name = "SELECT MAX(add_pay_N3) FROM weekly_payments_amount WHERE 
add_pay_N3 IS NOT NULL AND user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectAddPay3Name = mysqli_query($dbc, $querySelectAddPay3Name);
$num8 = mysqli_num_rows($resultSelectAddPay3Name);

if ($num8>0){
	while ($row8 = mysqli_fetch_array($resultSelectAddPay3Name, MYSQLI_ASSOC))
	{
		$add_pay_N3 = $row8['MAX(add_pay_N3)'];
		if ($add_pay_N3 == NULL){$add_pay_N3 = "Add. Pay 3";}
	}
}
else{$add_pay_N3 = "Add. Pay 3";}

$querySelectDistinctValues = "SELECT COUNT(DISTINCT add_pay_N) FROM weekly_payments_amount 
WHERE  user_id = '$user_id' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectDistinctValues = mysqli_query($dbc, $querySelectDistinctValues);
$num8 = mysqli_num_rows($resultSelectDistinctValues);

if ($num8>0){
	while ($row8 = mysqli_fetch_array($resultSelectDistinctValues, MYSQLI_ASSOC))
	{
		$add_pay_N_Count = $row8['COUNT(DISTINCT add_pay_N)'];
		//$add_pay_N2_Count = $row8['COUNT(DISTINCT add_pay_N2 IS NOT NULL)'];
		//$add_pay_N3_Count = $row8['COUNT(DISTINCT add_pay_N3 IS NOT NULL)'];
		
		if ($add_pay_N_Count == NULL){$add_pay_N_Count = 0;}
		//if ($add_pay_N2_Count == NULL){$add_pay_N2_Count = 0;}
		//if ($add_pay_N3_Count == NULL){$add_pay_N3_Count = 0;}
	}
}
else{
		$add_pay_N_Count = 0;
		//$add_pay_N2_Count = 0;
		//$add_pay_N3_Count = 0;
}

echo $add_pay_NMAX;
echo '<br>'.$add_pay_NMIN;
//echo $add_pay_N3;

//echo '<br>'.$add_pay_N_Count;
//echo $add_pay_N2_Count;
//echo $add_pay_N3_Count;
//echo "lolol";

?>