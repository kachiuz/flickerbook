<?php
$querySelectCustomerId = "SELECT CUSTOMER_ID FROM users WHERE user_id = '$user_id'";
$resulSelectCustomerId = mysqli_query($dbc, $querySelectCustomerId);

$numCustomerId = mysqli_num_rows($resulSelectCustomerId);

if ($numCustomerId == 1){
	while ($rowCustomerId = mysqli_fetch_array($resulSelectCustomerId, MYSQLI_ASSOC))
	{
		$customer_id = $rowCustomerId['CUSTOMER_ID'];
	}
}
else{
	$customer_id = 0;
}

?>