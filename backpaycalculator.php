<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Calculate your back pay for a chosen period in just a few clicks.">
		<meta name="keywords" content="Total deductions, Total payments, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator,
		day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work, back pay calculator,
		payments, payslip deductions, Pension, Pension Deductions, employee pension,employer pension, student loan, loan, back pay,
		union deduction, Christmas savings deduction, summer savings deduction, company loan">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Back Pay Calculator</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/backpaycalculator.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		</div>
		<div id="mainMenu"><?php require ( 'includes/menu.html' ) ;	?></div>
		<div class="deductionCaption">	Select Back Pay Period</div>
		<div id="backPayCalculatorDate" >
			Select start and end dates for back pay period.
			<hr>
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
			<select name="backPayEndDay" id="backPayEndDay"></select>
		</div>
		<div id="tableBottomBP" class="tableBottomBP">
			<div id="backPayCalculatorDivResponse">	</div>
			<input type="submit" value="Submit" id="backPayCalculatorSubmitButton" class="submit2">
		</div>
		<div id="backPayPayments">
			<div class="BPCaption">
				Total Earnings For Period
				<div class="rightButton" id="backPayInfoHide"> &#9432;</div>
				<div class="rightButton" id="backPayInfoShow">&#9432;</div>
			</div>
			<div id="backPayInfo">
				<p>First, select the desired period, for which you wish to calculate pay back. After the dates have been selected and submitted
				all payments received during the chosen period will appear in this section.
				If the payment in the generated list should not be included in the back pay calculation, thick a checkbox accordingly.
				After the payments selection enter the back pay rate, and press calculate button, which appears as soon as the start and end 
				period days had been submitted. The back pay result will appear, which you have to enter in the <i>Payments</i> page back pay
				field, and then generate a payslip with back pay included.</p>
				<iframe class="iframe" src="https://www.youtube.com/embed/MerkPZCJKVA" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen></iframe>
				<br><br>
			</div>
			<div class="tableRow">
				<div class="paymentsHeadingMainBP">Payments	</div>
				<div class="paymentsHeadingBP">Units</div>
				<div class="paymentsHeadingBP">Amount</div>
				<div class="paymentsHeadingIncludeBP">Incl.	</div>
			</div>
			<div class="backPayPaymentsNames" id="backPayPaymentsNamesDiv"></div>
			<div class="backPayPaymentsUnits" id="backPayPaymentsUnitsDiv"></div>
			<div class="backPayPaymentsAmount" id="backPayPaymentsAmountDiv"></div>
			<div class="backPayPaymentsInclude" id="backPayIncludeCheckbox"></div><hr>
			<div class="changeFont">
				Back Pay Rate: <input type="text" name="backPayRate" id="backPayRate" value="" size="7" maxlength="4" placeholder="Rate %"></input><br>
				Payments Sum for Back Pay:
				<input type="text" readonly class="backPayAmountResult" name="totalAmountForBackPay" id="totalAmountForBackPay" value="" size="12" maxlength="7"></input><br>
				Calculated Back Pay:
				<input type="text" readonly class="backPayAmountResult" name="backPayAmount" id="backPayAmount" value="" size="12" maxlength="7"></input><br>
			</div>
		</div>
		<div id="backPayCalculator">
			<div id="tableBottomBP2" class="tableBottomBP">
				<div id="backPayCalculatorDivResponse2"></div>
				<input type="submit" value="Calculate" id="backPayCalculatorSubmitButton2" class="submit2">
			</div>
		</div>
		<?php require ( 'includes/footer.html' ) ; ?><br>
	</body>
</html>