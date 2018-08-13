<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Privacy Policy</title>
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
		<div class="deductionCaption">Privacy Policy</div>
		<div id="calendarGenerator">
			<p class="textIndent">This privacy policy sets out how Flickerbook uses and protects any information that you give Flickerbook 
			when you use this website.</p>
			<p class="textIndent">Flickerbook is committed to ensuring that your privacy is protected. Should we ask you to provide certain information
			by which you can be identified when using this website, then you can be assured that it will only be used in accordance 
			with this privacy statement.</p>
			<p class="textIndent">Flickerbook may change this policy from time to time by updating this page. You should check this page from time to time 
			to ensure that you are happy with any changes. This policy is effective from 2018-02-10.</p>
			<p class="textIndent"><b>What we collect</b></p>
			<p class="textIndent">We may collect the following information:</p>
			<p class="textIndent">Contact informations such as: <i>your name and surname, email address.</i></p>
			<p class="textIndent">Employment information such as: <i>employer name and job title, shift length and type, unpaid break quantity 
			and length.</i></p>
			<p class="textIndent">Payments information such as: <i>basic hourly rate, unsociable hours start, finish, hours worked and rate,
			overtime types, hours worked and rates, extra weekend rates, payments and worked hours, bank holiday payments, bonuses and worked hours, sickness, compassionate,
			paternity, bereavement leaves payments, rates and hours paid, back pay amount, basic pay, piece work pay, bonus payments, commissions,
			additional payments.</i></p>
			<p class="textIndent">Deductions information, such as: <i>Tax rates and deductions, National Insurance rates and deductions, pension rate and deductions,
			student loan deductions, student loan rate and threshold, union deduction, Christmas savings deduction, Summer savings deduction,
			loan deduction, additional deductions.</i></p>
			<p class="textIndent">Holiday informations, such as: <i>holiday year start, holiday pay rate, enhanced holiday rate, eligible number
			of holidays per year.</i></p>
			<p class="textIndent">Work related information such as:	<i>work start and finish times, number of days off/in, number of half in/half holiday
			days, number of sickness, absence, annual leave days, number of parental/maternity, compassionate, bereavement leaves days,
			number of unpaid holiday days. We also collect information on when the mention days occurred (their dates).</i></p> 
			<p class="textIndent">Other information, such as: <i>demographic information such as postcode, preferences and interests,
			other information relevant to customer surveys and/or offers.</i></p>
			<p class="textIndent">You, as a client, decide which of the information mentioned above you wish to provide to Flickerbook.
			If you wish to omit some of it	or all off it, you are free to do so, but this may influence the quality of our service.
			<p class="textIndent"><b>What we do with the information we gather</b></p>
			<p class="textIndent">We require this information to understand your needs and provide you 
			with a better service, and in particular for the following reasons:</p>
			<p class="textIndent"><b>Internal record keeping.</b></p>
			<p class="textIndent">We may use the information to improve our products and services.</p>
			<p class="textIndent">We may periodically send promotional emails about new products, special offers or other information which we think you 
			may find interesting using the email address which you have provided.</p>
			<p class="textIndent">From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
			Security</p>
			<p class="textIndent">We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, 
			we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we 
			collect on-line.</p>
			<p class="textIndent"><b>Links to other websites</p></b>
			<p class="textIndent">Our website may contain links to other websites of interest. However, once you have used these links to leave our site, 
			you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the 
			protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this 
			privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.<p>
			<p class="textIndent"><b>Controlling your personal information</b></p>
			<p class="textIndent">We will not sell, distribute or lease your personal information to third parties unless we have your permission or are 
			required by law to do so. We may use your personal information to send you promotional information about third parties which 
			we think you may find interesting if you tell us that you wish this to happen.</p>
			<p class="textIndent">You may request details of personal information which we hold about you under the Data Protection Act 1998. 
			A small fee will be payable. If you would like a copy of the information held on you please write to support@flickerbook.co.uk.</p>
			<p class="textIndent">If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as 
			soon as possible at the above address. We will promptly correct any information found to be incorrect.</p>
		</div>
		<?php require ( 'includes/footer.html' ) ; ?>	
	</body>
</html>