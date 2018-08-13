<?php
//suskaiciuojame visas dienas, kurios yra ne dayOff ir ne notSelected. Tai reiskia suskaiciuoame visas dienas kurios susijusios su darbu.

$querySelectDay = "SELECT COUNT(dayType) FROM day_indexes WHERE user_id = '$user_id' AND dayType != 0 AND dayType != 2 AND taxPeriodNr >= '$firstTaxPeriodOfYear' AND taxPeriodNr <= '$taxPeriodNumber'"; 
$resultSelectDay = mysqli_query($dbc, $querySelectDay);
$num11 = mysqli_num_rows($resultSelectDay);

if ($num11>0){
	while ($row11 = mysqli_fetch_array($resultSelectDay, MYSQLI_ASSOC))
	{
		$daysNotOff = $row11['COUNT(dayType)'];
	}
}
else{
		$daysNotOff = 0;
}
if ($daysNotOff>0){$daysNotOffNP = 1;}	else	{$daysNotOffNP = 0;}

$loadIndexesArray += array ("daysNotOff"=>$daysNotOff);
$loadIndexesArrayNoPremium += array ("daysNotOff"=>$daysNotOffNP);

?>