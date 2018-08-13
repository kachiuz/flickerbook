<?php
function sundayHourCalculator ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity )
{
	$sundayHours = 0;
//nustatome ar darbo diena sestadienis, 
//tas pats sestadienis gali buti priskiriamas dviems skirtingiems taxperiodams, priklausomai, nuo kokios dienos skaiciuojamos algos (ar nuo mon sat sun)
	$dayCheck = ($timeSinceEpoch -(1491004800000 +(($taxPeriodNumber-1)*86400000*7)))/86400000 - $weekStart;
	$dayCheck2 = ($timeSinceEpoch -(1491004800000 +(($taxPeriodNumber)*86400000*7)))/86400000 - $weekStart;
			
	//----------------------saturday hours calculator------------------------------------------//
	if($dayCheck == 1 OR $dayCheck2 == -6) //patikriname ar sekmadienis
	{
		//pradedu ir baigiu sekmadieni
		if ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs <($timeSinceEpoch+86400000))
		{
			$sundayHours += round(($endTime - $startTime),2);
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		//pradedu sekmadieni baigiu pirmadieni
		elseif ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >($timeSinceEpoch+86400000))
			{
				$sundayHours += round((24 - $startTime),2);
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
				{$sundayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$sundayHours;}
				//return $saturdayHours;
			}
		else 
			{
				$sundayHours +=0;
			}
	}
	elseif($dayCheck == 0 OR $dayCheck2 == -7) //patikriname ar sestadienis
	{
		//pradedu sestadieni baigiu sekmadieni
		if($startTimeMs <$timeSinceEpoch+86400000 AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >$timeSinceEpoch+86400000)
		{
			$sundayHours += $endTime-24;
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		else
		{
			$sundayHours +=0;
		}
	}
	else 
	{
		$sundayHours +=0  ;
	}
	return $sundayHours;
}



//-----------------------------------sundayHoursCalculator2---------------------------

function sundayHourCalculator2 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity )
{
	$sundayHours = 0;
//nustatome ar darbo diena sestadienis, 
//tas pats sestadienis gali buti priskiriamas dviems skirtingiems taxperiodams, priklausomai, nuo kokios dienos skaiciuojamos algos (ar nuo mon sat sun)
	$dayCheck = ($timeSinceEpoch - $weekStart*86400000-(1491004800000 +(($taxPeriodNumber-1)*86400000*7)))/86400000 + $weekStart;
	$dayCheck2 = ($timeSinceEpoch - $weekStart*86400000-(1491004800000 +(($taxPeriodNumber)*86400000*7)))/86400000 + $weekStart;
			
	//----------------------saturday hours calculator------------------------------------------//
	if($dayCheck == 1 OR $dayCheck2 == -6) //patikriname ar sekmadienis
	{
		//pradedu ir baigiu sekmadieni
		if ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs <($timeSinceEpoch+86400000))
		{
			$sundayHours += round(($endTime - $startTime),2);
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		//pradedu sekmadieni baigiu pirmadieni
		elseif ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >($timeSinceEpoch+86400000))
			{
				$sundayHours += round((24 - $startTime),2);
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
				{$sundayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$sundayHours;}
				//return $saturdayHours;
			}
		else 
			{
				$sundayHours +=0;
			}
	}
	elseif($dayCheck == 7 OR $dayCheck2 == 0) //patikriname ar sestadienis
	{
		//pradedu sestadieni baigiu sekmadieni
		if($startTimeMs <$timeSinceEpoch+86400000 AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >$timeSinceEpoch+86400000)
		{
			$sundayHours += $endTime-24;
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		else
		{
			$sundayHours +=0;
		}
	}
	else 
	{
		$sundayHours +=0  ;
	}
	return $sundayHours;
}
//--------------------------------sundayHourCalculator3-----------------------------------------------//
function sundayHourCalculator3 ($startTime, $endTime, $taxPeriodNumber, $timeSinceEpoch, $weekStart, $startTimeMs, $endTimeMs, $unpaidBreakLength, $unpaidBreakQuantity )
{
	$sundayHours = 0;
//nustatome ar darbo diena sestadienis, 
//tas pats sestadienis gali buti priskiriamas dviems skirtingiems taxperiodams, priklausomai, nuo kokios dienos skaiciuojamos algos (ar nuo mon sat sun)
	$dayCheck = ($timeSinceEpoch - $weekStart*86400000-(1491004800000 +(($taxPeriodNumber+1)*86400000*7)))/86400000 + $weekStart;
	$dayCheck2 = ($timeSinceEpoch - $weekStart*86400000-(1491004800000 +(($taxPeriodNumber)*86400000*7)))/86400000 + $weekStart;
			
	//----------------------saturday hours calculator------------------------------------------//
	if($dayCheck == 8 OR $dayCheck2 == 1) //patikriname ar sekmadienis
	{
		//pradedu ir baigiu sekmadieni
		if ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs <($timeSinceEpoch+86400000))
		{
			$sundayHours += round(($endTime - $startTime),2);
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		//pradedu sekmadieni baigiu pirmadieni
		elseif ($startTimeMs >=$timeSinceEpoch AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >($timeSinceEpoch+86400000))
			{
				$sundayHours += round((24 - $startTime),2);
				//isminusuojame neapmokamus breakus
				if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
				{$sundayHours-= $unpaidBreakLength;}
				elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
				{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
				else{$sundayHours;}
				//return $saturdayHours;
			}
		else 
			{
				$sundayHours +=0;
			}
	}
	elseif($dayCheck == 7 OR $dayCheck2 == 0) //patikriname ar sestadienis
	{
		//pradedu sestadieni baigiu sekmadieni
		if($startTimeMs <$timeSinceEpoch+86400000 AND $endTimeMs> $timeSinceEpoch AND $endTimeMs >$timeSinceEpoch+86400000)
		{
			$sundayHours += $endTime-24;
			//isminusuojame neapmokamus breakus
			if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $sundayHours>3.5)
			{$sundayHours-= $unpaidBreakLength;}
			elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $sundayHours>=8 )
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			elseif($unpaidBreakQuantity == 3 AND $sundayHours>=12)
			{$sundayHours-= $unpaidBreakLength*$unpaidBreakQuantity;}
			else{$sundayHours;}
			//return $saturdayHours;
		}
		else
		{
			$sundayHours +=0;
		}
	}
	else 
	{
		$sundayHours +=0  ;
	}
	return $sundayHours;
}

?>