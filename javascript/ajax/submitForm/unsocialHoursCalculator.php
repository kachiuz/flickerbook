<?php
function unscocial_hour_calculator($startTime, $endTime, $sociable_Hour_Start, $unsociable_Hour_Start, $unsociable_Hour_Finish, $unpaidBreakLength, $unpaidBreakQuantity )
{
$unsocial_hours = 0;
//1.jei pradedame darba pries 7 ryto ir baigiame iki 7 ryto
if($startTime<$sociable_Hour_Start and $endTime<=$sociable_Hour_Start)
{$unsocial_hours += $endTime-$startTime;
	//isminusuojame breikus
	if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $unsocial_hours>3.5)
	{$unsocial_hours-= $unpaidBreakLength;}
	elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $unsocial_hours>=8 )
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	elseif($unpaidBreakQuantity == 3 AND $unsocial_hours>=12)
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	else{$unsocial_hours;}

}
//2.jei pradedame darba pries 7 ryto, bei baigiame pries 17; - 22<7 ir 30<17 -> false and false
elseif($startTime<=$sociable_Hour_Start and $endTime<=$unsociable_Hour_Start)
{$unsocial_hours+=$sociable_Hour_Start - $startTime;
	if($sociable_Hour_Start-$startTime>3.5) // jei pradedama dirbti 4 valandos iki 7 ryto, isminusuojamas neapmokamas breakas
	{$unsocial_hours = $unsocial_hours - $unpaidBreakLength;}
}
//3.jei pradedame darba pries 7 ryto, bei baigiame po 17; 22<7 ir 30>17 -> false and true
elseif($startTime<$sociable_Hour_Start and ($endTime)>$unsociable_Hour_Start)
{$unsocial_hours+=($sociable_Hour_Start - $startTime)+($endTime - $unsociable_Hour_Start) ; 
	if($sociable_Hour_Start-$startTime>3.5)
	{$unsocial_hours = $unsocial_hours - $unpaidBreakLength; }
}
//4.jei pradedame darba po 7 ryto bei baigiame pries 17; 22>7 ir 30<17 -> true and false
elseif($startTime>$sociable_Hour_Start and ($endTime)<$unsociable_Hour_Start and $startTime<$unsociable_Hour_Start )
{$unsocial_hours += 0 ;	}
//5.jei pradedame darba po 7 ryto bei baigiame po 17; 22>7 and 30> 17 true true !!!! todel pridedama dar viena and salyga.
elseif(($startTime>$sociable_Hour_Start) and ($endTime)>=$unsociable_Hour_Start and $startTime<=$unsociable_Hour_Start)
{$unsocial_hours += $endTime - $unsociable_Hour_Start; 	
	if ($unsociable_Hour_Start - $startTime< 3 AND $unpaidBreakQuantity ==1)
	{
		$unsocial_hours; //jei neapmokamas vienas breikas, ir jis patenka i paprastas valandas, jo neminusuojame is uns hours
	}
	elseif ($unsociable_Hour_Start - $startTime>= 3 AND $unpaidBreakQuantity ==1)
	{
		$unsocial_hours-= $unpaidBreakLength; //jei neapmokamas breakas pasislenka i uns valandas
	}
	elseif ($unsociable_Hour_Start - $startTime< 3 AND $unpaidBreakQuantity ==2)
	{
		$unsocial_hours -= $unpaidBreakLength*2; //jei neapmokami breakai pasislenka i uns hours.
	}
	elseif ($unsociable_Hour_Start - $startTime>= 3 AND $unpaidBreakQuantity ==2)
	{
		$unsocial_hours -= $unpaidBreakLength; //jei neapmokami du breikai, ir vienas patenka i uns valandas, ji isminusuojame is uns hours
	}
	elseif ($unsociable_Hour_Start - $startTime>= 7 AND $unpaidBreakQuantity ==3){
		$unsocial_hours -= $unpaidBreakLength*2;
	}
	else{
		$unsocial_hours;
	}


$unsocial_hours -= $unpaidBreakLength;}
//6.jei pradedame darba po 17 valandos ir baigiame pries 7;
elseif(($startTime>$unsociable_Hour_Start) and ($endTime<=($unsociable_Hour_Finish)))
{$unsocial_hours += $endTime-$startTime; 
//isminusuojame breikus
	if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $unsocial_hours>3.5)
	{$unsocial_hours-= $unpaidBreakLength;}
	elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $unsocial_hours>=8 )
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	elseif($unpaidBreakQuantity == 3 AND $unsocial_hours>=12)
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	else{$unsocial_hours;}
}
//7.jei pradedame po 17 ir baigiame po 7
elseif(($startTime>$unsociable_Hour_Start) and ($endTime>($sociable_Hour_Start+24)))
{$unsocial_hours += ($endTime-$startTime)-(($endTime) - ($sociable_Hour_Start+24));
//isminusuojame breikus
	if(($unpaidBreakQuantity == 1 OR $unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3)  AND $unsocial_hours>3.5)
	{$unsocial_hours-= $unpaidBreakLength;}
	elseif(($unpaidBreakQuantity == 2 OR $unpaidBreakQuantity == 3) AND $unsocial_hours>=8 )
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	elseif($unpaidBreakQuantity == 3 AND $unsocial_hours>=12)
	{$unsocial_hours-= $unpaidBreakLength*$unpaidBreakQuantity;}
	else{$unsocial_hours;}}
else{$unsocial_hours += 0;}	

return $unsocial_hours; 

}
?>