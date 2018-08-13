<?php require_once 'premium_init.php';?>

<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Subscribe to premium and get access to additional features and statistics.">
		<meta name="keywords" content="Total earnings,Total deductions, Total hours worked, Total hours paid Last 3 months weekly averages, 
		Holiday tracker, holiday counter, holiday statistics, work days statistics, Year to date weekly averages, Year to date totals, 
		Year to date hourly averages, Year to date weekly averages, Back pay calculator, Calendar generator, Totals calculator">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Premium</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body>
	<a href="index.php"><?php require_once ( 'includes/logo.html' ) ; ?></a>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		</div>
		<div id="mainMenu">	<?php require ( 'includes/menu.html' ) ; ?></div>
		<div class="deductionCaption">Premium</div>
		<div id="premiumDiv">
			<?php if($premium == 1)
					{echo '<span style="color:green;"><h3>You are Premium.<br>Thank You for supporting us<br>
						since '.$premiumSinceDate.'!</h3></span>';
						if($premiumUntil !=NULL){
							echo '<span style="color:#ff8080;">You either subscribed to 1 week premium or have requested to cancel your 
							monthly subscription. It expires at <b>'.$premiumUntilDate.'</b>.</span>';
						}
					}
				  else
					{echo '<span style="color:green;"><h3>Monthly Subscription</h3></span>You can subscribe to Premium for 
					<b><span style="color:green;">2.99£</span></b> per month. 
					After you subscribe, your card will be charged	automatically every month.<br><br>';
					require_once 'includes/premiumButton.html';
					echo '<br><hr><span style="color:green;"><h3>One Time Payment</h3></span>If you do not wish to subscribe to a monthly
					plan, but would like to access all the premium features, You can do so for a week with a one time payment of 
					<b><span style="color:green;">0.99£</span></b>. After your 1 week subscription expires, you can resubscribe whenever
					it is convenient for You and as many times as You want.<br><br>';
					require_once 'includes/premiumButtonOnce.html';
					echo '<br>';
				}
			?>
		</div>
		<div class="deductionCaption">Premium Benefits</div>
		<div id="premiumBenefits">
			Premium membership grants you access to extended earnings and deductions statistics, like:
			<span style="color:green;"><i><b>
			<br>Total earnings;
			<br>Total deductions;
			<br>Total hours worked;
			<br>Total hours paid;
			<br>Last 3 months weekly averages;
			<br>Holiday tracker;
			<br>Holiday statistics;
			<br>Days In/Off statistics;
			<br>Year to date weekly averages;
			<br>Year to date total payments;
			<br>Year to date total hours;</i></b>
			<br>And more..</span>
			<p>It also enables You to access features like:
			<span style="color:green;"><b>
			<br><i>Back pay calculator;
			<br>Calendar generator;
			<br>Totals calculator;
			<br>Pie charts and diagrams.</i></p></b></span>
		</div>
		<div class="deductionCaption">Your Payment Credentials are Safe!</div>
		<div id="premiumSafe">
			Flickerbook does not store your payment credentials in any form on it's servers. To process payments, we use
			<b><a href="https://stripe.com/gb">Stripe</a></b> payments gateway.
		</div><div class="deductionCaption">Cancelling Premium Subscription</div>
		<div id="premiumSafe">
			If you wish to cancel Your Premium membership, contact us via email 
			<a href="mailto:premium@flickerbook.co.uk">premium@flickerbook.co.uk</a>. Your subscription will be cancelled
			manually. It is important, that you contact us using the same email you subscribed with, otherwise your cancellation request will be discarded.
		</div>
	<?php require ( 'includes/footer.html' ) ; ?>	
	</body>
</html>	