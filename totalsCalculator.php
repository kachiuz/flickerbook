<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="description" content="Find out your payments and deductions for a chosen period in a matter of seconds.">
		<meta name="keywords" content="Total deductions, Total payments, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator,
		day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		payments, payslip deductions, Pension, Pension Deductions, employee pension,employer pension, student loan, loan,
		union deduction, Christmas savings deduction, summer savings deduction, company loan">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<title>Flickerbook Totals Calculator, a quick look in to your income and deductions over years.</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/totalsCalculator.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		</div>
		<div id="mainMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		<div class="deductionCaption">Select Period</div>
		<div id="backPayCalculatorDate" >
			Start date:
			<select name="backPayStartYear" id="backPayStartYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="backPayStartMonth" id="backPayStartMonth">
				<option value="01">January</option>
				<option value="02">February</option>
				<option value="03">March</option>
				<option value="04">April</option>
				<option value="05">May</option> 
				<option value="06">June</option> 
				<option value="07">July</option> 
				<option value="08">August</option> 
				<option value="09">September</option> 
				<option value="10">October</option> 
				<option value="11">November</option> 
				<option value="12">December</option> 
			</select>
			<select name="backPayStartDay" id="backPayStartDay"></select><br>
			End date:
			<select name="backPayEndYear" id="backPayEndYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="backPayEndMonth" id="backPayEndMonth">
				<option value="01">January</option>
				<option value="02">February</option>
				<option value="03">March</option>
				<option value="04">April</option>
				<option value="05">May</option> 
				<option value="06">June</option> 
				<option value="07">July</option> 
				<option value="08">August</option> 
				<option value="09">September</option> 
				<option value="10">October</option> 
				<option value="11">November</option> 
				<option value="12">December</option> 
			</select>
			<select name="backPayEndDay" id="backPayEndDay"></select><hr>
			Show pie charts<input type="checkbox" name ="totalsPieChartCheck" id="totalsPieChartCheck"><hr>
			If You want to find out Totals not only by date, but buy employer, job title or both of them, provide these details below.<hr>
			Employer Name:
			<input type="text" name="employer" value="" size="20" maxlength="50" id="employer" placeholder="Enter Employer Name"></input><br>
			Job Title:
			<input type="text" name="jobTitle" value="" size="20" maxlength="50" id="jobTitle" placeholder="Enter Job Title"></input><br>
			
		</div>
		<div id="tableBottomBP" class="tableBottomBP">
			<div id="backPayCalculatorDivResponse"></div>
			<input type="submit" value="Submit" id="backPayCalculatorSubmitButton" class="submit2">
		</div>
		<div class="deductionCaption totalsCaption">Total Payments For Period</div>
		<div id="backPayPayments">
			<div class="tableRow">
				<div class="paymentsHeadingMainTotals">Payments</div>
				<div class="paymentsHeadingTotals">Units</div>
				<div class="paymentsHeadingTotals">Amount £</div>
			</div>
			<div class="totalsPaymentsNames" id="backPayPaymentsNamesDiv"></div>
			<div class="totalsPaymentsUnits" id="backPayPaymentsUnitsDiv"></div>
			<div class="totalsPaymentsAmount" id="backPayPaymentsAmountDiv"></div>
			<div id="paymentsPieChart" class="chartStyle nodisplay"></div>
		</div>
		<div class="deductionCaption totalsCaption">Total Deductions For Period</div>
		<div id="totalsDeductions">
			<div class="tableRow">
				<div class="totalsDeductionsUnitsHeading">Deductions</div>
				<div class="totalsDeductionsAmountHeading">Amount £</div>
			</div>
			<div class="totalsDeductionsNamesDiv" id="totalsDeductionsNamesDiv"></div>
			<div class="totalsDeductionsAmountDiv" id="totalsDeductionsAmountDiv"></div>
			<div id="deductionsPieChart" class="chartStyle nodisplay"></div>
		</div>
		<div class="deductionCaption totalsCaption">Total Hours For Period</div>
		<div id="totalsHours">
			<div class="tableRow">
				<div class="totalsDeductionsUnitsHeading">Name</div>
				<div class="totalsDeductionsAmountHeading">Hours</div>
			</div>
			<div class="totalsDeductionsNamesDiv" id="totalsHoursNamesDiv"></div>
			<div class="totalsDeductionsAmountDiv" id="totalsHoursAmountDiv"></div>
			<div id="totalsHoursPieChart" class="chartStyle nodisplay"></div>
		</div>
		<div class="deductionCaption totalsCaption">Total Days For Period</div>
		<div id="totalsDays">
			<div class="tableRow">
				<div class="totalsDeductionsUnitsHeading">Name</div>
				<div class="totalsDeductionsAmountHeading">Amount</div>
			</div>
			<div class="totalsDeductionsNamesDiv" id="totalsDaysNamesDiv"></div>
			<div class="totalsDeductionsAmountDiv" id="totalsDaysAmountDiv"></div>
			<div id="dayStatisticsPieChart" class="chartStyle nodisplay"></div>
		</div>
		<?php require ( 'includes/footer.html' ) ;?><br>
	</body>
</html>