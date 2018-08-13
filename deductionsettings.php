<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="A page where user has to provide Flickerbook with his deductions details in order to get 
		payslips generated properly.">
		<meta name="keywords" content="salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip 
		generator, wage slip generator,	payslip storage, work time tracker, hourly wage calculator, payments,Personal Allowance, Basic Tax 
		rate, higher tax rate, payslip deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold,
		National Insurance Rate, National Insurance Threshold, Pension, Pension Deductions, employee pension,employer pension, student loan,
		student loan threshold, student loan rate, loan, loan rate, union, union deduction, Christmas savings deduction, summer savings 
		deduction, company loan.">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Deductions Settings, provide deductions info such as, National Insurance and Tax.</title>
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<link type="text/css" rel="stylesheet" href="style.css">
		<script type="text/javascript" src="javascript/deductionsettings.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		</div>
		<div id="mainMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
<!---------------------------Deductions Settings--------------------------------------------------------------------------------->		
		<div class="deductionCaption">Deductions Settings</div>
		<div id="deductionsSettings">
			<p class="textIndent">Answer the questions about your deductions below.</p> 
			<p class="textIndent">If you are not sure what your deductions settings are (TAX and NI), default
			values are provided. If this is the first time, you are using this page, you must press submit button at the bottom,
			otherwise deductions wont be calculated properly.</p>
		</div>
		<div class="deductionCaption">
			Tax and NI
			<div class="rightButton" id="taxAndNIInfoHide"> &#9432;</div>
			<div class="rightButton" id="taxAndNIInfoShow"> &#9432;</div>
		</div>
		<div id="taxAndNI">	
			Personal Allowance: <input type="text" name="personalAllowance" id="personalAllowance" value="11500" size="5" maxlength="5" placeholder="Value"></input><br>
			Basic Tax Rate: <input type="text" name="taxRate" id="taxRate" value="20" size="3" maxlength="3" placeholder="Rate"></input>%<br>
			<hr>
			Higher Tax Rate: <input type="text" name="higherTaxRate" id="higherTaxRate" value="40" size="3" maxlength="3" placeholder="Rate"></input>%<br>
			Higher Taxable Income Threshold: <input type="text" name="higherTaxThreshold" id="higherTaxThreshold" value="32000" size="5" maxlength="5" placeholder="Value"></input><br>
			Additional Tax Rate: <input type="text" name="additionalTaxRate" id="additionalTaxRate" value="45" size="3" maxlength="3" placeholder="Rate"></input>%<br>
			Add. Taxable Income Threshold: <input type="text" name="additionalTaxThreshold" id="additionalTaxThreshold" value="150000" size="6" maxlength="6" placeholder="Value"></input><br>
			<hr>
			National Insurance Rate: <input type="text" name="NIRate" id="NIRate" value="12" size="3" maxlength="3" placeholder="Rate"></input>%<br>
			NI Threshold: <input type="text" name="NIthreshold" id="NIthreshold" value="157" size="3" maxlength="4" placeholder="Value"></input><br>
			Add. National Insurance Rate: <input type="text" name="addNIRate" id="addNIRate" value="2" size="3" maxlength="3" placeholder="Rate"></input>%<br>
			Add. NI Threshold: <input type="text" name="addNIThreshold" id="addNIThreshold" value="866" size="3" maxlength="4" placeholder="Value"></input><br>
			<div id="taxAndNIInfo">
				<p>If you earn less the the Personal Allowance per year, you do not have to pay any taxes. If your <b>taxable</b> income is
				32,000£ or lower, you will have to pay the basic Tax rate, which now is 20%.<p>
				<p> Personal allowances, basic tax rate and taxable income thresholds are provided in the table below.</p>
				<table>
				  <tr>
					<th></th>
					<th>Personal Allowance</th>
					<th>Basic Rate</th>
					<th>Taxable Income</th>
				  </tr>
				  <tr>
					<td>2017/2018</td>
					<td>11500</td>
					<td>20%</td>
					<td>£0-32,000</td>
				  </tr>
				  <tr>
					<td>2018/2019</td>
					<td>11850</td>
					<td>20%</td>
					<td>£0-34,500</td>
				  </tr>
				</table>
				<p> If however your earnings exceed the basic tax rate threshold, additional tax rates will be applied. Their values
				are shown in the table below.</p>
				<table>
				  <tr>
					<th></th>
					<th>Higher Rate</th>
					<th>Taxable Income</th>
					<th>Add Rate</th>
					<th>Taxable Income</th>
				  </tr>
				  <tr>
					<td>2017/2018</td>
					<td>40%</td>
					<td>£32,001-150,000</td>
					<td>45%</td>
					<td>>£150,000</td>
				  </tr>
				  <tr>
					<td>2018/2019</td>
					<td>40%</td>
					<td>£34,501-150,000</td>
					<td>45%</td>
					<td>>£150,000</td>
				  </tr>
				</table>
				<br>
				<hr>
				<br>
				<p>The table below provides National insurance rates and weekly thresholds. If you earn less the the threshold, you
					don't pay any national insurance.
					<table>
				  <tr>
					<th></th>
					<th>NI Rate</th>
					<th>NI Threshold</th>
				  </tr>
				  <tr>
					<td>2017/2018</td>
					<td>12%</td>
					<td>157£</td>
				  </tr>
				  <tr>
					<td>2018/2019</td>
					<td>12%</td>
					<td>162£</td>
				  </tr>
				</table>
				<br>
				<hr>
				<p>More information about TAX and NI can be found on the
				<a href="https://www.gov.uk/government/publications/tax-and-tax-credit-rates-and-thresholds-for-2017-18/tax-and-tax-credit-rates-and-thresholds-for-2017-18">
				gov.uk</a> web page.
				<br>
			</div>
		</div>
<!---------------------------Pension Contribution--------------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Pension Contribution
			<div class="rightButton" id="pensionInfoHide"> &#9432;</div>
			<div class="rightButton" id="pensionInfoShow"> &#9432;</div>
		</div>
		<div id="pensionDeduction">
			Is pension deducted before taxes? <input type="checkbox" id="pensionBeforeTax" checked></input><br>
			Employee Pension %: 
			<select name="pensionContribution" id="pensionContribution">
				<option value="none">none</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			<select><br>
			Employer Pension %: 
			<select name="pensionContributionEmp" id="pensionContributionEmp">
				<option value="none">none</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			<select>
			<div id="pensionInfo">
			<p>If you are enrolled in a pension scheme, select the % that gets deducted from your salary in the drop down menu. If your employer
			contributes to the pension plan as well, pick the % value in the drop down menu. If your pension is deducted from your salary before
			TAX and NI (salary sacrifice) check the appropriate checkbox. </p>
			<p> More information about salary sacrifice can be found on
			<a href="https://www.moneyadviceservice.org.uk/en/articles/salary-sacrifice-schemes">moneyadviceservice.org.uk</a> webpage.
			</div>
		</div>
<!---------------------------Student Loan--------------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Student Loan 
			<div class="rightButton" id="studentLoanInfoHide"> &#9432;</div>
			<div class="rightButton" id="studentLoanInfoShow"> &#9432;</div>
		</div>
		<div id="studentLoanDeduction">
			Repaying a student Loan?: Yes
			<input type="checkbox" name ="studentLoanCheck" id="studentLoanCheck"><br>
			<div id="studentLoan">
			<div id="hideStudentLoan"></div>
			Student Loan Threshold: <input type="text" name="studentLoan_th" id="studentLoan_th" value="" size="15" maxlength="7" placeholder="Weekly Threshold"></input><br>
			Student Loan Rate %: <input type="text" name="studLoanRate" id="studLoanRate" value="" size="11" maxlength="7" placeholder="Loan Rate"></input>
			</div>
			<div id="studentLoanInfo">
			<p>If You are repaying student loan, you have to provide Your student loan threshold and loan rate %.</p>
			<p>More information about student loan can be found
			<a href="https://studentcalculator.org/more-info/cash-course/paying-for-uni/repaying-your-loan">
			studentloancalculator.org</a> web page.
			</div>
		</div>
<!---------------------------Savings Loans Union--------------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Savings, Loans, Union
			<div class="rightButton" id="savingsInfoHide"> &#9432;</div>
			<div class="rightButton" id="savingsInfoShow"> &#9432;</div>
		</div>
		<div id="savingsDeductions">
			Union: <input type="text" name="union" id="union" value="3.25" size="7" placeholder="Amount"></input><br>
			Christmas Savings: <input type="text" name="christmasSavings" id="christmasSavings" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Summer Savings: <input type="text" name="summerSavings" id="summerSavings" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Company Loan: <input type="text" name="companyLoan" id="companyLoan" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			<div id="savingsInfo">
			<p>If you participate in any savings schemes provided by your employer, like summer or Christmas savings schemes, provide the amount that
			gets deducted every week from your salary. If you pay your Union membership fee directly from you salary, provide the deduction amount.</p>
			</div>
		</div>
<!---------------------------Additional Deductions--------------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Additional Deductions
			<div class="rightButton" id="addDeductionsInfoHide"> &#9432;</div>
			<div class="rightButton" id="addDeductionsInfoShow">&#9432;</div>
		</div>
		<div id="addDeduction">
			Add. Deduction Name: <input type="text" name="otherDeductionName" id="otherDeductionName" value="" size="11" maxlength="20" placeholder="Enter Name"></input><br>
			Add. Deduction Amount: <input type="text" name="otherDeduction" id="otherDeduction" value="" size="11" maxlength="7" placeholder="Enter Amount"></input>
			<hr>
			Add. Deduction Name: <input type="text" name="otherDeduction2Name" id="otherDeduction2Name" value="" size="11" maxlength="20" placeholder="Enter Name"></input><br>
			Add. Deduction Amount: <input type="text" name="otherDeduction2" id="otherDeduction2" value="" size="11" maxlength="7" placeholder="Enter Amount"></input>
			<hr>
			Add. Deduction Name: <input type="text" name="otherDeduction3Name" id="otherDeduction3Name" value="" size="11" maxlength="20" placeholder="Enter Name"></input><br>
			Add. Deduction Amount: <input type="text" name="otherDeduction3" id="otherDeduction3" value="" size="11" maxlength="7" placeholder="Enter Amount"></input>
			<div id="addDeductionsInfo">
			<p>In case you have deductions, that are not defined above, use this section to add these deductions to your payslips. Simply just provide
			the name of the deduction and it's amount. </p>
			</div>
		</div>
<!---------------------------Bottom--------------------------------------------------------------------------------->		
			<div id="tableBottomDeductions" class="tableBottomBP">
				<div id="submitSuccessDeductions"></div>
				<input type="submit" value="Submit" id="buttonSubmit" class="submit2">
			</div>
		<?php require ( 'includes/footer.html' ) ; ?><br>
	</body>
</html>