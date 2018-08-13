<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="A simple user guide to Flickerbook.">
		<meta name="keywords" content="Work start time, work finish time, basic pay, basic hours, overtime, unsocial hours, unsocial payments,
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
		<title>Flickerbook User Guide</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/userGuide.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body><?php require ( 'includes/logo.html' ) ;?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ; }?></div>
		</div>
		<div id="mainMenu">	<?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;}?>	</div>
		<div class="paymentsCaption">Guide To Flickerbook</div>
		<div class="account contactUs">
			<p class="textIndent">The idea behind Flickerbook is to make payslip generating as simple as possible. Therefore to create a 
				payslip you	must execute three simple steps:
				<div class="paddingLeft">
					<ol>
						<li>provide payments details;</li>
						<li>provide deductions details;</li>
						<li>provide work hours details.</li>
					</ol>
				</div>
				<iframe class="iframe" src="https://www.youtube.com/embed/roOIF8FAeOY" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen></iframe>
			</p>
		</div>
		<div class="paymentsCaption">Providing Payments Details</div>
		<div class="account contactUs">
			<p class="textIndent">Providing payments details will take only a couple minutes. Once you register, go to the Payments page,
				where you will find a payments questionnaire. It consists of several sections: fill only the ones that suite your contract.</p>
			<p class="textIndent">Currently the payments page consist of the following sections:
			<div class="paddingLeft">
				<ul class="noBorder">
					<li>Employment Info</li>
					<li>Basic Pay Settings</li>
					<li>Unsociable Pay Settings</li>
					<li>Overtime Settings</li>
					<li>Extra Weekend Pay Settings</li>
					<li>Holiday Pay Settings</li>
					<li>Bank Holiday Pay Settings</li>
					<li>Sickness And Paternity Leaves</li>
					<li>Compassionate And Bereavement Leaves</li>
					<li>Other Payments: piece work, salary, commissions, bonuses</li>
					<li>Additional Payments</li>
				</ul>
			</div>	
			<p class="textIndent">Since we aim to make our web application adaptable to as many contract variations as possible, 
			more payments options will be added in the future.</p>
		</div>	
		<div class="paymentsCaption">Providing Deductions Details</div>
		<div class="account contactUs">
			<p class="textIndent">The second step is to provide your deductions details, from which the most important is TAX and
			National Insurance. To do that you must go to Deductions page.</p>
			<p class="textIndent">Currently the deductions page consist of the following sections:
			<div class="paddingLeft">
				<ul class="noBorder">
					<li>Tax and National Insurance</li>
					<li>Pension Contribution</li>
					<li>Student Loan</li>
					<li>Savings, Loans, Union</li>
					<li>Additional Deductions</li>
				</ul>
			</div>
			<p class="textIndent">Once both payments and deductions details are provided, generating payslips will take seconds.</p>
		</div>	
		<div class="paymentsCaption">Providing Work Hours Details</div>
		<div class="account contactUs">	
			<p class="textIndent">To provide work hours details, you must go to the <b>Flicker</b> page. This is the same page you get
			redirected once you log in.</p>
			<p class="textIndent">The top table on the page enables you to compose your week shift: in the first drop down menu
			select the day type. Currently there are 12 day types available, from which the most important are Day In and Day Off.
			To calculate working hours you must choose Day In, and another 4 drop down menus will appear for the chosen day. These enable
			you to provide Flickerbook with your start and finish times of the day. </p>
			<p class="textIndent"><b>Important!</b> If you finish work the following 
			morning, you must choose the finish hour values that follow 23 in the drop down menu.</p>
			<p class="textIndent">Once You compose your week, just press <b><i>Generate</i></b> button under the bottom right corner of the
			table and all the calculation will be done for you with the results appearing in the tables below. The three Main tables are the
			same as on every payslip: Payments, Deductions and Year To Date.</p>
		</div>
		<div class="paymentsCaption">Other Information</div>
		<div class="account contactUs">	
			<p class="textIndent">Currently payslips can be generated for a period between <span id="start"></span> and
			<span id="finish"></span>. More Tax Years will be added in the future.</p>
		</div>
		<div class="paymentsCaption">Flickerbook Tutorial Videos</div>
		<div class="account contactUs">	
			<iframe class="iframe" src="https://www.youtube.com/embed/kIp86qUQ-2E" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen>
			</iframe>
			<iframe class="iframe" src="https://www.youtube.com/embed/MerkPZCJKVA" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen>
			</iframe>
			<iframe class="iframe" src="https://www.youtube.com/embed/sN_EW4vacdM" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen>
			</iframe>
			<iframe class="iframe" src="https://www.youtube.com/embed/nCB8LaiMCB4" frameborder="0" allow="autoplay;
				encrypted-media" allowfullscreen>
			</iframe>
		</div>
		<?php require ( 'includes/footer.html' ) ;?>	
	</body>
</html>