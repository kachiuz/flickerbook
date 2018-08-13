<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ){
	require_once 'premium_init.php';
	if (isset( $_POST['stripeToken']))
	{	
		try
		{
			// Charge the user's card:
			$charge = Stripe_Charge::create(array(
			  "amount" => 99,
			  "currency" => "gbp",
			  "description" => "Flickerbook 1 Week Premium",
			  "statement_descriptor" => "Flickerbook",
			  "source" => $_POST['stripeToken'],
			  ));
			
			$untilDate =  date('Y-m-d H:i:s', strtotime(date("Y-m-d H:i:s"). ' + 7 days'));
			$queryPremium = "UPDATE users SET premium = 1, PremiumSince = NOW(), premiumUntil = '$untilDate' where user_id = '$user_id'";
			$resultPremium = mysqli_query($dbc, $queryPremium);
			mysqli_close($dbc);
		}catch(Stripe_CardError $e){
			
			echo "Your payment didn't go through, please try again. <a href='premium.php'>Premium Page</a>";
			//do something with the error
			mysqli_close($dbc);
		}
	}
	echo '<script type="text/javascript">window.location = "premium.php"</script>';
	exit();
}
?>
