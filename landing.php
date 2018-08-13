<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Flickerbook is an on-line payslip generator, salary, payments, Tax, National insurance, work hours
		tracker and calculator.">
		<meta name="keywords" content="basic pay, basic hours, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator, shift
		calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip generator, wage slip generator,
		payslip storage, work time tracker, hourly wage calculator, payments, Personal Allowance, Basic Tax rate, higher tax rate, 
		payslip deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold, National Insurance Rate, 
		National Insurance Threshold, Pension, Pension Deductions, employee pension,employer pension, student loan, student loan threshold, 
		student loan rate, loan, loan rate, union, union deduction, Christmas savings deduction, summer savings deduction, company loan,
		National insurance calculator, tax calculator, net pay calculator, work hours calculator">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook is an on-line payslip generator, salary, payments, Tax, National insurance, work hours tracker and calculator.</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<!--<script type="text/javascript" src="javascript/index.js"></script>-->
		<script type="text/javascript" src="javascript/menu.js"></script>
		<script src='https://www.google.com/recaptcha/api.js'></script>
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
		<?php require ( 'includes/logo.html' ) ;?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;}?></div>
		</div>
		<div id="mainMenu">	<?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;} ?></div>
		<?php if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/loginform.php') ;} ?><p>
		<?php require ( 'includes/info.html' ) ;?></p>
		<?php require ( 'includes/footer.html' ) ;?>	
	</body>
</html>