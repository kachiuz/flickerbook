<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="A page where user has to provide Flickerbook with his payments details in order to get 
		payslips generated properly.">
		<meta name="keywords" content="Work start time, work finish time, basic pay, basic hours, overtime, unsocial hours, unsocial payments,
		shift work, hourly rate, unpaid breaks, extra pay for weekend, bank holiday, bank holiday pay, bank holiday bonus, clock in bonus, 
		statutory sick pay, SSP, statutory paternity pay, SPP, compassionate leave, bereavement leave, back pay, back pay calculator, shift
		calendar, work calendar, day in, day off, holiday, sick leave, sickness leave, Christmas savings, summer savings, piece Work,
		salary tracker, salary calculator, working hours tracker, holiday tracker, holiday counter, payslip generator, wageslip generator,
		payslip storage, work time tracker, hourly wage calculator, payments">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Payments Settings</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/paymentsettings.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		</div>
		<div id="mainMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
<!---------------------------Payments Settings--------------------------------------------------------------------------------->		
		<div class="deductionCaption">Payments Settings</div>
		<div id="paymentSettings">
			<p class="textIndent">Answer the questions below about your employment. Additionally you can use an email address of somebody, 
			who has filled the form	and enabled to use it.</p>
			<hr>
			<p class="textIndent">Load payment settings using someone's Email address:</p>
		
				<input class="alignCenter alignCenterPayments" type="text" name="paymentSettingsEmail" id="paymentSettingsEmail" placeholder="Enter Email Address" value="" size="25" maxlength="50"></input>
				<div class="tableBottomPE">
					<div class="registerButton">
						<input type="submit" value="Load" id="paymentSettingsEmailButton"name="paymentSettingsEmailButton" class="loginButtonAccount">
					</div>
				</div>
				<div class="tableBottomPE">
					<div class="buttonAlign">
						<div id="paymentSettingsEmailDivResponse"></div>
					</div>
				</div>
				<br>
				<div class="brForSmallScreen"><br></div>
			
		</div>	
<!-------------------------------Employment Info------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Employment Info
			<div class="rightButton" id="employmentInfoHide"> &#9432;</div>
			<div class="rightButton" id="employmentInfoShow"> &#9432;</div>
		</div>
		<div id="employmentInfo">
			Employer Name:
			<input type="text" name="employerName" value="" size="20" maxlength="50" id="employerName" placeholder="Enter Employer Name"></input><br>
			Job Title:
			<input type="text" name="jobTitle" value="" size="20" maxlength="50" id="jobTitle" placeholder="Enter Job Title"></input><br>
			Shift length in hours:
			<select name="shiftLength" id="shiftLength">
				<option value="8" selected="selected">8</option>
				<option value="12">12</option>
			<select><br>
			The work week starts at: 
			<select name="weekStart" id="weekStart">
				<option value="0" selected="selected">Saturday</option>
				<option value="1">Sunday</option>
				<option value="2">Monday</option>
			<select><br>
			Type of shift: 
			<select name="shiftType" id="shiftType">
				<option value="Day" selected="selected">Day</option>
				<option value="Night">Night</option>
			<select><br>
			<div id="employmentInfoInfo">
				<p>Employment data helps you keep a track of payments received while working for different employers. It is
				also important to select a <i>week start</i> value as it is used to generate a calender. Depending on an employer they 
				calculate wages starting from Saturday, Sunday or Monday</p>
			</div>
		</div>
<!-------------------------------Basic Pay Settings------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Basic Pay Settings
			<div class="rightButton" id="basicPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="basicPayInfoShow"> &#9432;</div>
		</div>
		<div id="basicPaySettings">
			Hourly rate:
			<input type="text" name="hourlyRate" value="" size="5" maxlength="6" id="hourlyRate" placeholder="Rate"></input><br>
			Unpaid breaks:
			<select name="unpaidBreaks" id="unpaidBreaks">
				<option value="0">All Paid</option>
				<option value="1" selected="selected">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			<select><br>
			Break length in minutes:
			<select name="breakLength" id="breakLength"> <select>
			<div id="basicPayInfo">
				<p>The most important field in this section is the hourly rate. Enter the amount you are getting 
				paid per hour. Also you are welcome to specify the amount of unpaid breaks and their length in minutes</p>
			</div>
		</div>		
<!-------------------------------Unsociable Pay Settings------------------------------------------------------------------------->			
		<div class="deductionCaption">
			Unsociable Pay Settings
			<div class="rightButton" id="unsocialPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="unsocialPayInfoShow"> &#9432;</div>
		</div>
		<div id="unsPaySettings">
			Are there unsociable hours?: Yes
			<input type="checkbox" name ="unsociableHoursCheck" id="unsociableHoursCheck"><br>
			<div id = "UnsocialHours">
				<div id = "hideUnsocialHours"></div>
				Unsociable Hours start:
				<select name="unsociableHourStart" id="unsociableHourStart">
					<option value="0">none</option>
					<option value="1">12</option>
					<option value="2">13</option>
					<option value="3">14</option>
					<option value="4">15</option>
					<option value="5">16</option>
					<option value="6" selected="selected">17</option>
					<option value="7">18</option>
					<option value="8">19</option>
					<option value="9">20</option>
					<option value="10">21</option>
					<option value="11">22</option>
					<option value="12">23</option>
				<select><br>
				Unsociable Hours end:
				<select name="unsociableHourFinish" id="unsociableHourFinish">
					<option value="0">none</option>
					<option value="1">0</option>
					<option value="2">1</option>
					<option value="3">2</option>
					<option value="4">3</option>
					<option value="5">4</option>
					<option value="6">5</option>
					<option value="7">6</option>
					<option value="8" selected="selected">7</option>
					<option value="9">8</option>
					<option value="10">9</option>
					<option value="11">10</option>
					<option value="12">11</option>
				<select><br>
				Rate for the Unsociable hours is: 
				<input type="text" name="unsociablePrem" id="unsociablePrem" value="" size="6" maxlength="6" placeholder="Rate"></input>
			</div>
			<div id="unsocialPayInfo">
				<p>Some employers pay extra for working unsocial hours. In case unsocial bonus is paid and calculated separately,
				use this section to determine these hours and the amount earned. You are asked to provide the time when the unsocial 
				hours start and the time when they end. Also the field requiring the rate of the unsocial hours must be filled.
				In this case you must enter the difference between unsocial hour rate and the basic hour rate, you get paid for doing social hours,
				so for example if you get paid 8£ for doing social hour, and 10£ for the unsocial hour, you must enter a value of 2£
				(10£-8£ = 2£).</p>
			</div>
		</div>
<!-------------------------------Overtime Settings------------------------------------------------------------------------->		
		<div class="deductionCaption">	
			Overtime Settings
			<div class="rightButton" id="overtimePayInfoHide"> &#9432;</div>
			<div class="rightButton" id="overtimePayInfoShow"> &#9432;</div>
		</div>	
		<div id="overtimeSettings">	
			Is Overtime paid?: Yes
			<input type="checkbox" name ="overtimeCheck" id="overtimeCheck"><br>
			<div id = "overtimeCheckDiv">
				<div id = "hideOvertimeCheckDiv"></div>
				Overtime 1 hours are between:
				<div class="brForSmallScreen"><br></div>
				<input type="text" name="overtime1Start" id="overtime1Start" value="0" size="5" maxlength="7" placeholder="Hours"></input> and
				<input type="text" name="overtime1Finish"  id="overtime1Finish" value="0" size="5" maxlength="7" placeholder="Hours"></input><br>
				Overtime rate 1:
				<input type="text" name="overtime1rate" id="overtime1rate" value="11.5125" size="7" maxlength="7" placeholder="Rate"></input>	
				<br><hr>
				Is there a second overtime rate?: Yes
				<input type="checkbox" name ="overtimeCheck2" id="overtimeCheck2"><br>
			</div>
			<div id = "overtimeCheckDiv2">
				<div id = "hideOvertimeCheckDiv2"></div>
				Overtime 2 hours are between:
				<div class="brForSmallScreen"><br></div>
				<input type="text" name="overtime2start" id="overtime2start" value="0" size="5" maxlength="7" placeholder="Hours"></input> and
				<input type="text" name="overtime2Finish" id="overtime2Finish" value="0" size="6" maxlength="7" placeholder="Hours"></input><br>
				Overtime rate 2:
				<input type="text" name="overtime2rate" id="overtime2rate" value="13.8150" size="7" maxlength="7" placeholder="Rate"></input>	
				<br>
			</div>
			<div id="overtimePayInfo">
				<p>If your employer pays extra for working more then 37.5 hours thick the check box and provide the necessary details below.
				In case you have just one overtime rate, the end time value should be entered bigger then the amount of actual hours worked 
				that week. You are welcome to enter which ever value you wish as long as it exceeds the amount of total hours worked. So to keep it safe
				enter a value of 168 (amount of total hours per week) or even 999. If you have a second overtime rate, then set the thresholds and apply
				the same rule for end time value as stated earlier.</p>
			</div>
		</div>
<!-------------------------------Extra Weekend Pay Settings------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Extra Weekend Pay Settings
			<div class="rightButton" id="weekendPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="weekendPayInfoShow"> &#9432;</div>
		</div>
		<div id="weekendPaySettings">
			Extra pay for working weekends?: Yes
			<input type="checkbox" name ="weekendHoursCheck" id="weekendHoursCheck"><br>
			<div id = "weekendHours">
				<div id = "hideWeekendHours"></div>
				Extra ratio for Saturday:
				<input type="text" name="extraRateSaturday" id="extraRateSaturday" value="" placeholder="1.5" size="5" maxlength="5"></input>
				<br>
				Extra ratio for Sunday: 
				<input type="text" name="extraRateSunday" id="extraRateSunday" value="" placeholder="2.0"size="6" maxlength="5"></input>
			</div>
			<div id="weekendPayInfo">
				<p>If your are getting paid extra for working on weekends, specify the ratio for each weekend day: Saturday and Sunday. For
				example 1.5 for Saturday and 2.0 for Sunday.</p>
			</div>
		</div>
		<div class="deductionCaption">	
			Bank Holiday Pay Settings
			<div class="rightButton" id="bankHolPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="bankHolPayInfoShow"> &#9432;</div>
		</div>
		<div id="bankHolSettings">
			Bank holiday pay:
			<select name="bankHolidayPay" id="bankHolidayPay">
				<option value="0">0</option>
				<option value="1.5">1.5</option>
				<option value="2">2.0</option>
				<option value="2.5">2.5</option>
				<option value="3">3.0</option> 
			</select> times.<br>			
			Bank holiday clock in bonus:
			<input type="text" name="clockInBonus" id="clockInBonus" value="20" size="5" maxlength="7" placeholder="Bonus"></input><br>
			Hours required to work to receive a clock in bonus:
			<input type="text" name="clockInBonusHours" id="clockInBonusHours" value="4.00" size="5" maxlength="7" placeholder="Hours"></input><br>
			<div id="bankholPayInfo">
				<p>If you get paid extra for working on bank holiday, fill this section. Depending on an employer, some pay double or triple pay
				on bank holiday so choose the value from a drop down menu that suits your contract. If you get paid a bonus just for clocking in
				provide that value. If you are required to work a certain amount of hours in order to claim that bonus enter that number of
				hours in the bottom field. </p>
			</div>
		</div>
<!-------------------------------Holiday Settings------------------------------------------------------------------------->			
		<div class="deductionCaption">		
			Holiday Settings
			<div class="rightButton" id="holidayPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="holidayPayInfoShow"> &#9432;</div>
		</div>
		<div id="holidaySettings">
			Holiday year start:
			<select name="holidayStartYear" id="holidayStartYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="holidayStartMonth" id="holidayStartMonth">
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
			<select name="holidayStartDay" id="holidayStartDay"></select><br>
			Eligible holiday days per year:
			<input type="text" name="holidaysPerYear" id="holidaysPerYear" maxlength="2" size="5" value="33" placeholder="Days"></input><br>
			Enhanced holiday rate:
			<input type="text" name="enhancedHolidayPay" id="enhancedHolidayPay" value="11.70" size="7" maxlength="7" placeholder="Rate"></input><br>
			Do paid holiday hours count towards overtime?:Yes
			<input type="checkbox" name ="holidayOvertime" id="holidayOvertime"><br>
			<div id="holidayPayInfo">
				<p>Declare the start date of your holiday year, as it is different with each employer. The year in this date has to be changed 
				yearly in order for Flickerbook to accurately demonstrate the number of holidays used, booked or left unbooked. If you are getting paid 
				an enhanced rate for some of your annual leave, provide that rate. If you have a contracted number of annual leave days enter it
				in the <i>Eligable holiday days per year</i> field.</p>
			</div>
		</div>
<!-------------------------------Sickness And Paternity Leaves------------------------------------------------------------------------->		
		<div class="deductionCaption">		
			<div class="alignLeftOnSmallScreen">Sickness And Paternity Leaves</div>
			<div class="rightButton" id="sickBerCompPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="sickBerCompPayInfoShow"> &#9432;</div>
		</div>
		<div id="sickBerCompSettings">
			Statutory Sick Pay: <input type="text" name="SSP" id="SSP" value="" size="12" maxlength="7" placeholder="Enter £89.35 "></input><br>
			Partially paid sick leave:<select name="partialSickPay" id="partialSickPay"> 	<select>%<br>
			Do paid sick hours count towards overtime?: Yes
			<input type="checkbox" name ="sickOvertime" id="sickOvertime" checked="checked"><hr>
			Statutory Paternity Pay: <input type="text" name="SPP" id="SPP" value="" size="12" maxlength="7" placeholder="Enter £140.98"></input><br>
			Statutory Adoption Pay: <input type="text" name="SAP" id="SAP" value="" size="12" maxlength="7" placeholder="Enter £140.98"></input><br>
			Partially paid Paternity leave:<select name="partialPaternityPay" id="partialPaternityPay"> 	<select>%<br>
			Do paid paternity hours count towards overtime?: Yes
			<input type="checkbox" name ="paternityOvertime" id="paternityOvertime">
			<div id="sickBerCompPayInfo">
				<p>Each employer has a different sickness, bereavement or compassionate leave policies. You can get £89.35 
				per week Statutory Sick Pay (SSP) if you’re too ill to work. You can’t get less than the statutory amount. 
				You can get more if your company has a sick pay scheme. In case your employer has one, you can provide details about it by
				filling this section. For example if you get paid 80% sickness pay of your regular pay, select that value in the drop
				down menu.
				</p>
				<p>More information about Statutory Sick Pay can be found on
				<a href="https://www.gov.uk/statutory-sick-pay">gov.uk</a> web page.</p>
			</div>
		</div>	
<!-------------------------------Compassionate Bereavement------------------------------------------------------------------------->		
			<div class="deductionCaption">		
			<div class="alignLeftOnSmallScreen">Compassionate, Bereavement</div>
			<div class="rightButton" id="berCompPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="berCompPayInfoShow"> &#9432;</div>
		</div>
		<div id="berCompSettings">
			Partially paid bereavement leave:<select name="partialBereavementPay" id="partialBereavementPay">
			<select>%<br>
			Do paid bereavement hours count towards overtime?: Yes
			<input type="checkbox" name ="bereavementOvertime" id="bereavementOvertime"><br><hr>
			Partially paid compassionate leave:<select name="partialCompassionatePay" id="partialCompassionatePay">
			<select>%<br>
			Do paid Compassionate hours count towards overtime?: Yes
			<input type="checkbox" name ="compOvertime" id="compOvertime"><br>
			<div id="berCompPayInfo">
				<p>Provide Compassionate and Bereavement Leave details. If you don't get paid fully for your compassionate or 
				bereavement leave  select appropriate value from the drop down menu (for example 80 for 80% pay).</p>
				<p>More information about Statutory Paternity Pay can be found on
				<a href="https://www.gov.uk/employers-paternity-pay-leave">gov.uk</a> web page.</p>
			</div>
		</div>	
<!-------------------------------Other Payments------------------------------------------------------------------------->			
		<div class="deductionCaption">
			Other Payments
			<div class="rightButton" id="otherPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="otherPayInfoShow"> &#9432;</div>
		</div>
		<div id="otherPaymentSettings">
			Salary: <input type="text" name="salary" id="salary" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Bonus: <input type="text" name="bonus" id="bonus" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Commissions: <input type="text" name="commissions" id="commissions" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Piece Work: <input type="text" name="pieceWork" id="pieceWork" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			Back Pay amount: <input type="text" name="payback" id="payback" value="" size="12" maxlength="7" placeholder="Enter Amount"></input>
			<div id="otherPaymentsInfo">
			<p>In this section you can provide other payments such as salary, commissions, piece work or other bonuses.</p>
			<p>Back Pay is the amount calculated for a retroactive pay increase. This can be done in the <i>Back Pay Calculator</i> menu section.
			</p>
			</div>
		</div>
		
<!-------------------------------Additional Payments------------------------------------------------------------------------->		
		<div class="deductionCaption">
			Additional Payments
			<div class="rightButton" id="addPayInfoHide"> &#9432;</div>
			<div class="rightButton" id="addPayInfoShow"> &#9432;</div>
		</div>
		<div id="additionalPaymentSettings">
			Additional payment name: <input type="text" name="additionalPaymentName" id="additionalPaymentName" value="" size="12" maxlength="20" placeholder="Enter Name"></input><br>
			Additional payment amount: <input type="text" name="additionalPayment" id="additionalPayment" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			<hr>
			Additional payment name: <input type="text" name="additionalPayment2Name" id="additionalPayment2Name" value="" size="12" maxlength="20" placeholder="Enter Name"></input><br>
			Additional payment amount: <input type="text" name="additionalPayment2" id="additionalPayment2" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			<hr>
			Additional payment name: <input type="text" name="additionalPayment3Name" id="additionalPayment3Name" value="" size="12" maxlength="20" placeholder="Enter Name"></input><br>
			Additional payment amount: <input type="text" name="additionalPayment3" id="additionalPayment3" value="" size="12" maxlength="7" placeholder="Enter Amount"></input><br>
			<div id="addPayInfo">
			<p>If there are still some payments or bonuses you receive as part of your contract that are not covered in any above section you can add them
			to your wages here, by stating the additional payment names and their values.</p>
			</div>
		</div>
<!--------------------------------------------------bottom------------------------------------------------------------>		
		<div id="tableBottomPayments" class="tableBottomBP">
			<div id="submitSuccessPayments"></div>
			<input type="submit" value="Submit" id="buttonSubmit" class="submit2">
		</div>
		<?php require ( 'includes/footer.html' ) ;?><br>
	</body>
</html>