<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ){
	require_once 'premium_init.php';
	if (isset( $_POST['stripeToken']))
	{	
		try
		{
			$customer = Stripe_Customer::create(array(
			'email' => $_POST['stripeEmail'],
			'source'  => $_POST['stripeToken'],
			'plan' => 'Flickerbook Premium'
			));
			
			$customer_id = $customer->id;
			
			$queryPremium = "UPDATE users SET premium = 1, PremiumSince = NOW(), CUSTOMER_ID = '$customer_id' where user_id = '$user_id'";
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