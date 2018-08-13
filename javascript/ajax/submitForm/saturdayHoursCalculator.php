<?php

function saturdayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity )
{
	$saturdayHours = 0;
//nustatome ar darbo diena sestadienis, 
//tas pats sestadienis gali buti priskiriamas dviems skirtingiems taxperiodams, priklausomai, nuo kokios dienos skaiciuojamos algos (ar nuo mon sat sun)
	$dayCheck = ($timeSinceEpoch -(1491004800000 +(($taxPeriodNumber-1)*86400000*7)))/86400000 - $weekStart;
	$dayCheck2 = ($timeSinceEpoch -(1491004800000 +(($taxPeriodNumber)*86400000*7)))/86400000 - $weekStart;
	$saturdayCheckArray[] = $dayCheck;
			
	//----------------------saturday hours calculator------------------------------------------//
	if($dayCheck == 0 OR $dayCheck2 == -7) //patikriname ar sestadienis
	{
		//pradedu sestadieni baigiu sestadieni
		if ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs <($timeSinceEpoch+86400000))
		{
			$saturdayHours += round(($endTime - $startTime),2);
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
			{$saturdayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$saturdayHours;}
			//return $saturdayHours;
		}
		//pradedu sestadieni baigiu sekmadieni	
		elseif ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >($timeSinceEpoch+86400000))
			{
				$saturdayHours += round((24 - $startTime),2);
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
				{$saturdayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
				{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
				{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$saturdayHours;}
				//return $saturdayHours;
			}
		else 
			{
				$saturdayHours +=0;
			}
	}
	elseif($dayCheck == 6 OR $dayCheck2 == -1) //patikriname ar penktadienis
	{
		//pradedu 5dieni baigiu sestadieni
		if($startTimeMs <$timeSinceEpoch+86400000 AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >$timeSinceEpoch+86400000)
		{
			$saturdayHours += $endTime-24;
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
			{$saturdayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$saturdayHours;}
			//return $saturdayHours;
		}
		else
		{
			$saturdayHours +=0;
		}
	}
	else 
	{
		$saturdayHours +=0  ;
	}
	return $saturdayHours;
}

function saturdayHourCalculator2 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity )
{
	$saturdayHours = 0;
//nustatome ar darbo diena sestadienis, 
//tas pats sestadienis gali buti priskiriamas dviems skirtingiems taxperiodams, priklausomai, nuo kokios dienos skaiciuojamos algos (ar nuo mon sat sun)
	//$timeSinceEpoch = $timeSinceEpoch - $weekStart*86400000;
	$dayCheck = ($timeSinceEpoch- $weekStart*86400000 -(1491004800000 +(($taxPeriodNumber+1)*86400000*7)))/86400000 + $weekStart;
	$dayCheck2 = ($timeSinceEpoch- $weekStart*86400000 -(1491004800000 +(($taxPeriodNumber)*86400000*7)))/86400000 + $weekStart;
	$saturdayCheckArray[] = $dayCheck;
			//$loadIndexesArray += array("timeSinceEpoch"=>$timeSinceEpoch);
	//----------------------saturday hours calculator------------------------------------------//
	if($dayCheck == 7 OR $dayCheck2 == 0) //patikriname ar sestadienis
	{
		//pradedu sestadieni baigiu sestadieni
		if ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs <($timeSinceEpoch+86400000))
		{
			$saturdayHours += round(($endTime - $startTime),2);
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
			{$saturdayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$saturdayHours;}
			//return $saturdayHours;
		}
		//pradedu sestadieni baigiu sekmadieni	
		elseif ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >($timeSinceEpoch+86400000))
			{
				$saturdayHours += round((24 - $startTime),2);
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
				{$saturdayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
				{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
				{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$saturdayHours;}
				//return $saturdayHours;
			}
		else 
			{
				$saturdayHours +=0;
			}
	}
	elseif($dayCheck == 6 OR $dayCheck2 == -1) //patikriname ar penktadienis
	{
		//pradedu 5dieni baigiu sestadieni
		if($startTimeMs <$timeSinceEpoch+86400000 AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >$timeSinceEpoch+86400000)
		{
			$saturdayHours += $endTime-24;
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $saturdayHours>3.5)
			{$saturdayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $saturdayHours>=8 )
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $saturdayHours>=12)
			{$saturdayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$saturdayHours;}
			//return $saturdayHours;
		}
		else
		{
			$saturdayHours +=0;
		}
	}
	else 
	{
		$saturdayHours +=0  ;
	}
	return $saturdayHours;
}

?>