<?php
	require_once 'premium_init.php';
	require_once 'javascript/ajax/includes/selectCustomerId.php';
	// cancel subscription
	$subscription = Stripe_Subscription::retrieve($customer_id);
	$subscription->cancel();
	
	$untilDate =  date('Y-m-d H:i:s', strtotime(date("Y-m-d H:i:s"). ' + 7 days'));
	$queryCancel = "UPDATE users SET premiumUntil = '$untilDate' where user_id = '$user_id'";
	$resultCancel = mysqli_query($dbc, $queryCancel);
	mysqli_close($dbc);
	echo '<script type="text/javascript">window.location = "premium.php"</script>';
?>