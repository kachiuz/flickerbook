<?php
$querySelectPremium = "SELECT premium, premiumSince, premiumUntil FROM users WHERE user_id = '$user_id'";
$resulSelectPremium = mysqli_query($dbc, $querySelectPremium);

$numPremium = mysqli_num_rows($resulSelectPremium);

if ($numPremium == 1){
	while ($rowPremium = mysqli_fetch_array($resulSelectPremium, MYSQLI_ASSOC))
	{
		$premium = $rowPremium['premium'];
		$premiumSince = $rowPremium['premiumSince'];
		$premiumUntil = $rowPremium['premiumUntil'];
	}
}
else{
	$premium = 0;
	$premiumSince = NULL;
	$premiumUntil = NULL;
}

//nukerpame valandas ir parodome laika, nuo kada yra premium.
if ($premiumSince !=NULL){
	$premiumSinceDate = date("d/m/Y", strtotime($premiumSince));
	
	//jei nustatyta kad premium turi baigtis, patikriname ar ta diena jau praejo
	if ($premiumUntil!= NULL){
		$today = date("Y-m-d H:i:s");
		$date = $premiumUntil;

		if ($date < $today)
		{
			$premium = 0;
			$premiumSince = NULL;
			$premiumUntil = NULL;
			$premiumUntilDate = NULL;
			$premiumSinceDate = NULL;
			
			//jei esama data yra didesne nei nustatyta premiumUntil, pakeiciame vertes duomenu bazeje.
			$queryRemovePremium = "UPDATE users SET Premium = 0, premiumUntil = NULL, premiumSince = NULL WHERE user_id = '$user_id'";
			$resulRemovePremium = mysqli_query($dbc, $queryRemovePremium);
		}
		else{
			$premiumSince;
			$premiumUntil;
			$premium;
			$premiumUntilDate = date("d/m/Y", strtotime($premiumUntil));
		}
	}
}
?>