<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Contacts page</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/menu.js"></script>
		<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
		<script>
		window.addEventListener("load", function(){
		window.cookieconsent.initialise({
		  "palette": {
			"popup": {
			  "background": "#edeff5",
			  "text": "#838391"
			},
			"button": {
			  "background": "#4b81e8"
			}
		  }
		})});
		</script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;}?></div>
		</div>
		<div id="mainMenu">
			<?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;} ?>
		</div>
		<div class="paymentsCaption">About Flickerbook</div>
		<div class="account contactUs">
			<p class="textIndent">For anyone who is employed sorting their payments, deductions, work hours, annual or other type of leaves
			is a matter of great importance. All this information is tracked by employer, but not all employers have systems, that enable 
			their employees to 	access payments, deductions, work hours, holidays information when an employee requires it.  That's what 
			Flickerbook is aiming to do.
			<p class="textIndent">To simply put, Flickerbook is a platform to generate and store all  work related information, such as your 
			payslips, working days and hours, shift pattern and work calendar, in one place on-line.</p>
			<p class="textIndent">We provide our users with tools that are independent from	their employer.
			With the help of these tools our users are able to track their working hours, income and deductions, days in/off, holidays 
			and other information.</p>
			<p class="textIndent">Our main goals can be described as:
				<ul class="noBorder">
					<li>to create an easy to use, intuitive system to track work related information;</li>
					<li>to provide our users with a platform, where they can generate and store payslips for different employers;</li>
					<li>from the gathered information, produce charts and statistics that are useful to our users;</li>
					<li>to make all calculations as accurate as possible;</li>
					<li>to keep improving the service by adding new features or enhancing the existing ones.</li>
				</ul></p>
			<p class="textIndent">If you have any suggestions how to make our service better, or just want us to add an additional names to 
			payments or deductions settings to make your payslips as accurate as possible, contact us on one of the methods provided in our <i>Contact Us</i> page below.</p>
		</div>

		<?php require ( 'includes/footer.html' ) ; ?>	
	</body>
</html>