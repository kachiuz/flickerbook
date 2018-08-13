<?php
function bankHolidayHourCalculator ($timeSinceEpoch, $startTimeMs, $endTimeMs, $bankHolidayHours, $bankHolidayClockInBonus, $clockInBonusHours, $unpaidBreakLength, $unpaidBreakQuantity, $bankHolidayClockInBonusValue)
{
	//bank holidays 2017 be naujako
	$bankHolidayArray = array(1492128000000,1492387200000,1493596800000,1496016000000,1503878400000,1514160000000,1514246400000);
	//bank holidays 2018
	array_push($bankHolidayArray, 1514764800000, 1522368000000, 1527465600000, 1535328000000, 1522627200000, 1525651200000, 1545696000000, 1545782400000);
	//bank holidays 2019
	array_push($bankHolidayArray, 1546300800000, 1555632000000, 1555891200000, 1557100800000, 1558915200000, 1566777600000, 1577232000000, 1577318400000);
	//2020
	array_push($bankHolidayArray, 1577836800000, 1586476800000, 1586736000000, 1590364800000, 1588550400000, 1598832000000, 1608854400000, 1608940800000, 1609113600000);
	//2021
	array_push($bankHolidayArray, 1609459200000, 1617321600000, 1617580800000, 1620000000000, 1622419200000, 1630281600000);
	array_push($bankHolidayArray, 1640390400000, 1640476800000, 1640563200000, 1640649600000);
	//array_push($bankHolidayArray, 1514592000000, 1514678400000, 1514851200000, 1514937600000, 1515024000000);
	$bankHolidayArrayLength = sizeof($bankHolidayArray);
	
	for($j=0; $j<$bankHolidayArrayLength; $j++)
	{
		//pradedu ne bank holiday, baigiu bank holiday
		if ($timeSinceEpoch<$bankHolidayArray[$j] and $timeSinceEpoch+($startTimeMs-$timeSinceEpoch)+($endTimeMs-$startTimeMs)> $bankHolidayArray[$j])
		{
			$bankHolidayHours = ($endTimeMs-$bankHolidayArray[$j])/(60*60*1000);
			if ($bankHolidayHours >= $clockInBonusHours){$bankHolidayClockInBonus = $bankHolidayClockInBonusValue;}
			else {$bankHolidayClockInBonus = 0;}
			//echo $bankHolidayClockInBonus.' 11 <br>';
			
			if (($bankHolidayArray[$j]-$startTimeMs)/(60*60*1000)<3.5)
			{
				$bankHolidayHours -= $unpaidBreakLength;
				//echo 'lol';
			}
			else{$bankHolidayHours;}
			
			
			$bankHolidayHoursCIbonusArray = array ($bankHolidayHours, $bankHolidayClockInBonus);
			return $bankHolidayHoursCIbonusArray;
		}
		//return $bankHolidayHours;}

		//pradedu ir baigiu bank holiday
		else if($bankHolidayArray[$j] <= $startTimeMs and $endTimeMs < ($bankHolidayArray[$j]+86400000))
		{
			$bankHolidayHours = $bankHolidayHours = ($endTimeMs-$startTimeMs)/(60*60*1000); 
			if ($bankHolidayHours >= $clockInBonusHours){$bankHolidayClockInBonus = $bankHolidayClockInBonusValue;}
			else {$bankHolidayClockInBonus = 0;}
			//echo $bankHolidayClockInBonus.' 22 <br>';
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $bankHolidayHours>3.5)
			{$bankHolidayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $bankHolidayHours>=8 )
			{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $bankHolidayHours>=12)
			{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$bankHolidayHours;}
		
			$bankHolidayHoursCIbonusArray = array ($bankHolidayHours, $bankHolidayClockInBonus);
			return $bankHolidayHoursCIbonusArray;
		}	
		//return $bankHolidayHours;}
		
		//pradedu bank holiday, baigiu nebe bank holiday
		else if ($bankHolidayArray[$j]+86400000>$timeSinceEpoch-($timeSinceEpoch-$startTimeMs) and $bankHolidayArray[$j]+86400000<$endTimeMs )
		{
			// jei du bank holiday is eiles
			if ($bankHolidayArray[$j]+ 86400000 == $bankHolidayArray[$j+1])
			{
				$bankHolidayHours = ($endTimeMs-$startTimeMs)/(60*60*1000);
				if ($bankHolidayHours >= $clockInBonusHours){$bankHolidayClockInBonus = $bankHolidayClockInBonusValue;}
				else {$bankHolidayClockInBonus = 0;}
				
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $bankHolidayHours>3.5)
				{$bankHolidayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $bankHolidayHours>=8 )
				{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $bankHolidayHours>=12)
				{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$bankHolidayHours;}
				//echo $bankHolidayClockInBonus.' 31 <br>';
			}
			else
			{	
				$bankHolidayHours = ($bankHolidayArray[$j]+86400000 - $startTimeMs)/(60*60*1000); 
				if ($bankHolidayHours >= $clockInBonusHours){$bankHolidayClockInBonus = $bankHolidayClockInBonusValue;}
				else {$bankHolidayClockInBonus = 0;}
				
				if (($bankHolidayArray[$j]+86400000-$startTimeMs)/(60*60*1000)>=3.5)
				{
					//isminusuojame neapmokamus breakus
					if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $bankHolidayHours>3.5)
					{$bankHolidayHours-= $unpaidBreakLength;}
					elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $bankHolidayHours>=8 )
					{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
					elseif($unpaidBreakQuantity == 3 AND $bankHolidayHours>=12)
					{$bankHolidayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
					else{$bankHolidayHours;}
					//echo 'lol';
				}
				else{$bankHolidayHours;}
				//echo $bankHolidayClockInBonus.' 32 <br>';
			}
			//echo '33 <br>';
			
			$bankHolidayHoursCIbonusArray = array ($bankHolidayHours, $bankHolidayClockInBonus);
			return $bankHolidayHoursCIbonusArray;
			//return $bankHolidayHours;
		}
		else{$bankHolidayHours = 0;}
	}
}


?>