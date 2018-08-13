<?php
//naudojama totals calculator ir loadsubmitcalculation failuose
for($i=0; $i<12; $i++){
$querySelectDay = "SELECT COUNT(dayType) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '$i' AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber' AND job_title = '$jobTitle'"; 
$resultSelectDay = mysqli_query($dbc, $querySelectDay);
$num11 = mysqli_num_rows($resultSelectDay);

if ($num11>0){
	while ($row11 = mysqli_fetch_array($resultSelectDay, MYSQLI_ASSOC))
	{
		$dayInSum = $row11['COUNT(dayType)'];
		//reikalinga daily avregaes skaiciavimui day/in
		if($i == 1){
			$daysIn = $row11['COUNT(dayType)'];
		}
		//reikalinga daily avregaes skaiciavimui half/in halfof
		if($i == 4){
			$daysIn += $row11['COUNT(dayType)'];
		}
	}
}
else{
		$dayInSum = 0;	
		$daysIn = 0;
}
$loadIndexesArray += array ("daySum".$i=>$dayInSum);

	if ($dayInSum>0)
	{
		$dayInSum = 1;
	}
	else{
		$dayInSum = 0;
	}
	$loadIndexesArrayNoPremium += array ("daySum".$i=>$dayInSum);
}

$querySelectTotalHours = "SELECT SUM(hours_worked) FROM day_indexes WHERE user_id = '$user_id' AND dayType = '1' AND taxPeriodNr >= 
'$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber' AND job_title = '$jobTitle'"; 
$resultSelectTotalHours = mysqli_query($dbc, $querySelectTotalHours);
$numTH= mysqli_num_rows($resultSelectTotalHours);

if ($numTH>0){
	while ($rowTH = mysqli_fetch_array($resultSelectTotalHours, MYSQLI_ASSOC))
	{
		$totalHours = $rowTH['SUM(hours_worked)'];
	}
}
else{
		$totalHours = 0;	
}
$loadIndexesArray += array ("totalHours"=>$totalHours);

if ($totalHours>0){	$totalHoursNoPremium = 4;}
else{$totalHoursNoPremium = 0;}
$loadIndexesArrayNoPremium += array ("totalHours"=>$totalHoursNoPremium);

?>