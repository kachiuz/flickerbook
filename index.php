<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load('landing.php') ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="This is the main page, where payslips get generated. 
		It shows current Tax Period payments, deductions and Year To Date information. If a user has subscribed, he receives access
		to additional features like, Year To date days, hours worked and payments received, Year To Date weekly, daily, hourly averages, 
		holiday tracker. Once subscribed pie and column chart become visible which enhances the view into ones wages.">
		<meta name="keywords" content="Work start time, work finish time, basic pay, basic hours, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator, shift
		calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip generator, wage slip generator,
		payslip storage, work time tracker, hourly wage calculator, payments, Personal Allowance, Basic Tax rate, higher tax rate, 
		payslip deductions, Higher Taxable Income Threshold, Additional Tax Rate, Additional Taxable Income Threshold, National Insurance Rate, 
		National Insurance Threshold, Pension, Pension Deductions, employee pension,employer pension, student loan, student loan threshold, 
		student loan rate, loan, loan rate, union, union deduction, Christmas savings deduction, summer savings deduction, company loan,
		National insurance calculator, tax calculator, net pay calculator, work hours calculator, statutory adoption pay, SAP, salary,
		commissions, bonus payment">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Payslip Generator, salary tracker, salary calculator, work hours tracker, holiday tracker,holiday counter, 
		wageslip generator, payslip storage, work time tracker, work hours calculator</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/javaScript.js"></script>
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	</head>
	<body>
		<a href="index.php"><?php require ( 'includes/logo.html' ) ; ?></a>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu">
				<?php require ( 'includes/menu.html' ) ; ?>
			</div>
		</div>
		<div id="mainMenu">
			<?php 
				require ( 'includes/menu.html' ) ; 
			?>
		</div>
		<div id="loginInfo">
			<?php
				echo "Welcome, <b>{$_SESSION['first_name']} {$_SESSION['last_name']}</b>. In order for the app to work correctly, 
				complete the <b>Payments</b> and <b>Deductions</b> questionnaires in the menu above. Read <a href='userGuide.php'>
				<b>User guide</b></a>.";
			?>
		</div>
		<div id="tableCaptionContainer">
			<div id="tableCaptionHidden">
				<div class="leftButton" id="buttonLeftHidden"> ◄ </div>
				<div class="leftButton" id="buttonLeftFakeHidden"> ◄ </div>
				<div id="tableCaptionTitleHidden">Tax Period no.</div>
				<div class="rightButton" id="buttonRightHidden"> ► </div>
				<div class="rightButton" id="buttonRightFakeHidden"> ► </div>
			</div>
		</div>
		<div id="tableCaption">
			<div class="leftButton" id="buttonLeft"> ◄ </div>
			<div class="leftButton" id="buttonLeftFake"> ◄ </div>
			<div id="tableCaptionTitle">Tax Period no.</div>
			<div class="rightButton" id="buttonRight"> ► </div>
			<div class="rightButton" id="buttonRightFake"> ► </div>
		</div>
		<div id="table">
			<div class="tableRow">
				<div class="tableHeading">Day Type</div>
				<div class="tableHeading">Date</div>
				<div class="tableHeading">Start</div>
				<div class="tableHeading">Finish</div>
				<div class="notesName">	Notes</div>
			</div>
			<div>
			<input type="hidden" id="taxPeriodNr" name="taxPeriodNr" value="1">
			<input type="hidden" id="timeSinceEpochInput" name="timeSinceEpochInput" value="1491004800000">
<!----------------------------------------------TABLE---------------------------------------------------------------------------->				
			<div class="tableRow" id="tableRow0"></div>
			<div class="tableRow" id="tableRow1"></div>
			<div class="tableRow" id="tableRow2"></div>
			<div class="tableRow" id="tableRow3"></div>		
			<div class="tableRow" id="tableRow4"></div>
			<div class="tableRow" id="tableRow5"></div>
			<div class="tableRow" id="tableRow6"></div>
			</div>	
		</div>
		<div id="paySavingsDiv" class="nodisplay">
			<div id="payChristmasSavings" class="nodisplay"></div>
			<div id="paySummerSavings" class="nodisplay"></div>
		</div>
		<div id="tableBottom" class="tableBottom">
			<div id="submitSuccessMain" class="submitSuccessMain"></div>
			<input type="submit" value="Generate" class="submit" id="form">
		</div>
<!---------------------------------------------------------CALENDAR-------------------------------------------------------->			
		<div id="calendar">
			<div id="calendarCaption">
				<div id="fastBackward">
					<span class="bottom">▲</span>
					<span class="top">▲</span>
				</div>
				<div id="fastBackwardFake">
					<span class="bottom">▲</span>
					<span class="top">▲</span>
				</div>
				<div class="leftButton" id="buttonUp"> ▲ </div>
				<div class="leftButton" id="buttonUpFake"> ▲ </div>
				<div id="calendarCaptionTitle">	Calendar 2018</div>
				<div id="fastForward">
					<span class="bottom">▼</span>
					<span class="top">▼</span>
				</div>
				<div id="fastForwardFake">
					<span class="bottom">▼</span>
					<span class="top">▼</span>
				</div>
				<div class="rightButton" id="buttonDown"> ▼ </div>
				<div class="rightButton" id="buttonDownFake"> ▼ </div>
			</div>
			<div class="tableRow" id="dayRow">
				<div class="calendarHeading">&nbsp </div>
				<div class="calendarHeading" id ="dayName0"></div>
				<div class="calendarHeading" id ="dayName1"></div>
				<div class="calendarHeading" id ="dayName2"></div>
				<div class="calendarHeading" id ="dayName3"></div>
				<div class="calendarHeading" id ="dayName4"></div>
				<div class="calendarHeading" id ="dayName5"></div>
				<div class="calendarHeading" id ="dayName6"></div>
			</div>
			<div class="tableRow calendar" id="calendarRow0"></div>
			<div class="tableRow calendar" id="calendarRow1"></div>
			<div class="tableRow calendar" id="calendarRow2"></div>
			<div class="tableRow calendar currentWeek" id="calendarRow3">
				<div class="absoluteDiv currentWeekFilter"></div>
			</div>
			<div class="tableRow calendar" id="calendarRow4"></div>
			<div class="tableRow calendar" id="calendarRow5"></div>
			<div class="tableRow calendar" id="calendarRow6"></div>
		</div>	
<!-----------------------------------------------------------PAYMENTS----------------------------------------------------------->		
		<div id="payments">
			<div class="calendarCaption">Payments</div>
			<div class="tableRow">
				<div class="paymentsHeadingMain">Payments</div>
				<div class="paymentsHeading">Units</div>
				<div class="paymentsHeading">Rate</div>
				<div class="paymentsHeading">£.pp</div>
			</div>
			<div id="weekPayments">
				<div class="paymentsDiv" id="paymentsNamesDiv"></div>
				<div class="unitsRate£ppDiv" id="paymentsUnitsDiv"></div>
				<div class="unitsRate£ppDiv" id="paymentsRateDiv"></div>
				<div class="unitsRate£ppDiv" id="paymentsAmountDiv"></div>
				<div class="tableRow calendar" id="totalPayments">
					<div id="totalGrossPaymentsName">Total gross payments</div>
					<div id="totalGrossPaymentsAmount">0.0</div>
				</div>
			</div>
		</div>
		<div class="marginBottom border">
			<div id="paymentsPieChart" class="chartStyle nodisplay">
			</div>
			<div id="paymentsPieChartNoPremium" class="noPremium nodisplay">
			<br>Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------DEDUCTIONS------------------------------------------>
		<div id="deductions">
			<div class="calendarCaption">
			Deductions</div>
		<div id="deductionsBackground">
			<div class="deductionsNamesDiv"id="deductionsNamesDiv"> TAX	<br></div>
			<div class="unitsRate£ppDivDeductions" id="deductionsAmountDiv"></div>
			<div id="totalDeductions">
				<div id="totalDeductionsName">Total Deductions</div>
				<div id="totalDeductionsAmount"></div>
			</div>
			<div id="netPayAmount">0.0</div>
			<div id="netPay">Net Pay</div>
		</div>
		</div>
		<div class="border marginBottom">
			<div id="deductionsPieChart" class="chartStyle nodisplay"></div>
			<div id="deductionsPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date----------------------------------------------------------->		
		<div id="yearToDate">
			<div class="calendarCaption">Year To Date</div>
			<div id="yearToDateNames"></div>
			<div id="yearToDateAmount"></div>
		</div>	
		<div class="border marginBottom">
			<div id="yearToDatePieChart" class="chartStyle nodisplay"></div>
			<div id="yearToDatePieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Pay Structure----------------------------------------------------------->		
		<div class="paymentsCaption">
			Year To Date Pay Structure
			<div class="rightButton" id="yearToDatePercentageInfoHide"> &#9432;</div>
			<div class="rightButton" id="yearToDatePercentageInfoShow">&#9432;</div>
		</div>
		<div id="yearToDatePercentage">
			<div id="yearToDatePercentageNames"></div>
			<div id="yearToDatePercentageAmount"></div>
			<div id="yearToDatePercentageAmountHid"></div>
			<div id="yearToDatePercentageInfo">
				<p>This section demonstrate a percentage structure of your payments.</p>
				<p>Basic Pay consists of regular hourly pay and unsocial hours pay.</p>
				<p>Holiday payments consists of normal, enhanced and unsocial holiday payments.</p>
				<p>Sickness payments consists of hourly paid sickness leave, unsocial sickness hours and SSP.</p>
				<p>Overtime payments is a sum, received for doing all overtime rates.</p>
				<p>Paternity payments consists of paid paternity hours, unsocial paternity hours, SAP and SPP.</p>
				<p>Bank holiday payments consists of Bank Holiday hours and clock in bonuses.</p>
			</div>
		</div>	
		<div class="border marginBottom">
			<div id="yearToDatePercentagePieChart" class="chartStyle nodisplay"></div>
			<div id="yearToDatePercentagePieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Payments Totals----------------------------------------------------------->		
		<div class="paymentsCaption">
			<div class="alignLeftOnSmallScreen">Year To Date Payments Totals</div>
			<div class="rightButton" id="yearToDateTotalsInfoHide">&#9432;</div>
			<div class="rightButton" id="yearToDateTotalsInfoShow">&#9432;</div>
		</div>
		<div id="yearToDateII">	
			<div id="yearToDateNamesII"></div>
			<div id="yearToDateAmountII"></div>
			<div id="yearToDateAmountIIHid"></div>
			<div id="yearToDateIIInfo">
				<p>All payments received during the Tax Year are displayed in this table.</p>
			</div>
		</div>	
		<div class="border">
			<div id="yearToDateIIPieChart" class="chartStyle nodisplay"></div>
			<div id="yearToDateIIPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Hours Totals----------------------------------------------------------->		
		<div class="paymentsCaption">
			Year To Date Hours Totals
			<div class="rightButton" id="yearToDateTotalsHoursInfoHide">&#9432;</div>
			<div class="rightButton" id="yearToDateTotalsHoursInfoShow">&#9432;</div>
		</div>
		<div id="yearToDateHours">	
			<div id="yearToDateNamesHours"></div>
			<div id="yearToDateAmountHours"></div>
			<div id="yearToDateAmountHoursHid"></div>
			<div id="yearToDateHoursInfo">
				<p>This table displays total hours amounts done during the Tax Year.</p>
				<p>Total Paid Hours Spent At Work are equal to the sum of Total Basic Hours and Overtime Hours;</p>
				<p>Total Hours spent at work include hours you get paid for and unpaid breaks.</p>
			</div>
		</div>	
		<div class="border">
			<div id="yearToDateHoursPieChart" class="chartStyle nodisplay"></div>
			<div id="yearToDateHoursPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Days Totals----------------------------------------------------------->		
		<div class="paymentsCaption">
			Year To Date Days Totals
			<div class="rightButton" id="dayStatisticsInfoHide"> &#9432;</div>
			<div class="rightButton" id="dayStatisticsInfoShow"> &#9432;</div>
		</div>
		<div id="dayStatistics">
			<div id="dayStatisticsNames"></div>
			<div id="dayStatisticsAmount"></div>
			<div id="dayStatisticsAmountHid"></div>
		<div id="dayStatisticsInfo">
		<p>Here You can find the number of days you worked or had day off's to date. Other type off days are displayed as well.</p>
		<p>Days since last sick is displayed for current date, which means that even if you skip forward or backward through
		your payslips, it's value does not change.</p>
		</div>
		</div>
		<div class="border">
			<div id="dayStatisticsPieChart" class="chartStyle nodisplay"></div>
			<div id="dayStatisticsPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Holidays----------------------------------------------------------->		
		<div class="paymentsCaption">
			Holidays
			<div class="rightButton" id="holidayStatisticsInfoHide"> &#9432;</div>
			<div class="rightButton" id="holidayStatisticsInfoShow">&#9432;</div>
		</div>
		<div id="holidayStatistics">	
			<div id="holidayStatisticsNames"></div>
			<div id="holidayStatisticsAmount"></div>
			<div id="holidayStatisticsAmountHid"></div>
			<div id="holidayStatisticsInfo">
				<p>This table displays holiday statistics such as booked, used, earned holiday days. It also shows how many days have passed
				since your last holidays and how many days left till your next one.</p>
				<p>Important! Holidays are shown on current date, so even if you skip forwards or backwards through your payslips, values in this section will not change!
			</div>
		</div>	
		<div class="border">
			<div id="holidayStatisticsPieChart" class="chartStyle nodisplay"></div>
			<div id="holidayStatisticsPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Weekly Averages----------------------------------------------------------->		
		<div class="paymentsCaption">	
			<div class="alignLeftOnSmallScreen">Year To Date Weekly Averages</div>
				<div class="rightButton" id="weeklyAveragesInfoHide"> &#9432;</div>
				<div class="rightButton" id="weeklyAveragesInfoShow"> &#9432;</div>
			</div>
			<div id="weeklyAverages">
				<div id="weeklyAveragesNames"></div>
				<div id="weeklyAveragesAmount"></div>
				<div id="weeklyAveragesAmountHid"></div>
				<div id="weeklyAveragesInfo">
					<p>In this section you can find out your average earnings and deductions per week during the Tax year.
					To calculate this Flickerbook uses the Total amounts earned or deducted and divide them by the number of a current Tax Period.
					For example, if you have worked 37.5 hours on tax period no. 1 and 41.5 hours on tax period  no 2, 
					the result of average hours worked after second Tax period would be (37.5+41.5)/2 = 39.5.</p>
				</div>
			</div>
		<div class="border">
			<div id="weeklyAveragesPieChart" class="chartStyle nodisplay"></div>
			<div id="weeklyAveragesPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Daily Averages----------------------------------------------------------->		
		<div class="paymentsCaption">
			Year To Date Daily Averages
			<div class="rightButton" id="dailyAveragesInfoHide"> &#9432;</div>
			<div class="rightButton" id="dailyAveragesInfoShow"> &#9432;</div>
		</div>
		<div id="dailyAverages">
			<div id="dailyAveragesNames"></div>
			<div id="dailyAveragesAmount"></div>
			<div id="dailyAveragesAmountHid"></div>
			<div id="dailyAveragesInfo">
				<p>This table displays two types of daily averages statistics. </p>
				<p>The first one, shows daily averages for every day in:
				The more payments you have, that do not require you to work, like holiday, sick or paternity pay, the higher the values 
				in this section will be.To simply put, it just takes all your Gross and  Net Pay and divides it by the number of Days In. 
				Same rule applies to deductions.</p>
				<p>The second one, shows daily averages for all days associated with work, this includes holidays, unpaid holidays, sick, paternity and other 
				leave days. The more leave days you have per year, the smaller average values will be calculated in this section.</p>
			</div>
		</div>
		<div class="border">
			<div id="dailyAveragesPieChart" class="chartStyle nodisplay"></div>
			<div id="dailyAveragesPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Year To Date Hourly Averages----------------------------------------------------------->		
		<div class="paymentsCaption">
			<div class="alignLeftOnSmallScreen">
			Year To Date Hourly Averages</div>
			<div class="rightButton" id="hourlyAveragesInfoHide"> &#9432;</div>
			<div class="rightButton" id="hourlyAveragesInfoShow"> &#9432;</div>
		</div>
		<div id="hourlyAverages">
			<div id="hourlyAveragesNames"></div>
			<div id="hourlyAveragesAmount"></div>
			<div id="hourlyAveragesAmountHid"></div>
			<div id="hourlyAveragesInfo">
				<p>This section displays three types of hourly averages.</p>
				<p>The first one shows hourly averages rates for All Paid Hours that you spent at work: only day in hours are 
				used for calculation.<p>
				<p>The second one shows hourly averages rates for All Hours In: it includes unpaid breaks, so if you have 
				unpaid breaks, this rate will be lower the the first one, if you do not, then it will be identical to the first rate.<p>
				<p>The third one shows hourly averages for All Paid hours, including holiday, sick, and paternity leave hours, so this rate 
				will be the lowest of all three.<p>
			</div>
		</div>
		<div class="border">
			<div id="hourlyAveragesPieChart" class="chartStyle nodisplay"></div>
			<div id="hourlyAveragesPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Last 3 Months Weekly Averages----------------------------------------------------------->		
		<div class="paymentsCaption">
			<div class="alignLeftOnSmallScreen">Last 3 Months Weekly Averages
			<div class="rightButton" id="yearToDateLast12WeeksInfoHide"> &#9432;</div>
			<div class="rightButton" id="yearToDateLast12WeeksInfoShow">&#9432;</div></div>
		</div>
		<div id="yearToDateLast12Weeks">	
			<div id="yearToDateLast12WeeksNames"></div>
			<div id="yearToDateLast12WeeksAmount"></div>
			<div id="yearToDateLast12WeeksAmountHid"></div>
			<div id="yearToDateLast12WeeksInfo">
			<p>Shows the last 13 weeks earnings and deductions. Values in this section are handy for those, who wish to apply for
			mortgage or a personal loan.</p>
			</div>
		</div>	
		<div class="border">
			<div id="las3MonthsPieChart" class="chartStyle nodisplay"></div>
			<div id="las3MonthsPieChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Last 10 Weeks Net Pay Chart----------------------------------------------------------->		
		<div class="paymentsCaption">
			Last 10 Weeks Net Pay Chart
		</div>
		<div class="border diagramOnly">
			<div id="columnChart" class="chartStyle nodisplay"></div>
			<div id="columnChartNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!-----------------------------------------------------------Last 10 Weeks Paid Hours Chart----------------------------------------------------------->		
		<div class="paymentsCaption">
			Last 10 Weeks Paid Hours Chart
		</div>
		<div class="border diagramOnly">
			<div id="columnChartPaidHours" class="chartStyle nodisplay"></div>
			<div id="columnChartPaidHoursNoPremium" class="noPremium nodisplay"><br>
			Charts Are Visible to Premium Members.<br><br></div>
		</div>
<!----------------------------------------------------End of Charts and data----------------------------------------------------->		
		<div id="tableBottom2" class="tableBottomBP">
			<div id="submitSuccessMain2"></div>
			<input type="submit" value="Delete Payslip" class="submit2" id="delete">
		</div>
		<?php require ( 'includes/footer.html' ) ; ?>
	</body>
</html>