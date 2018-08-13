<?php session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="An easy to use calendar generator. If you work shifts, this generator will enable you to 
		create a calendar in just a few clicks.">
		<meta name="keywords" content="shift work, shift calendar, shift hours, shift start, shift finish, work calendar, calendar generator
		work start, work finish, shift pattern">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Calendar Generator, easy way to create a calendar with your shift pattern.</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/calendarGenerator.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
			<div id="hiddenMenuContainer">
				<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ;?>	</div>
			</div>
			<div id="mainMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
		<div class="deductionCaption">
			Calendar Generator
			<div class="rightButton" id="CGInfoHide"> &#9432;</div>
			<div class="rightButton" id="CGInfoShow"> &#9432;</div>
		</div>
		<div id="calendarGenerator">
			Select start date:	<br>
			<select name="calendarGeneratorStartYear" id="calendarGeneratorStartYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="calendarGeneratorStartMonth" id="calendarGeneratorStartMonth">
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
			<select name="calendarGeneratorStartDay" id="calendarGeneratorStartDay"></select><hr><br>
			Create your shift pattern<hr>
			<div id="tableCalendarGen" class="tableCalendarGen">
				<div class="tableRow">
					<div class="tableHeadingCG">Day Type</div>
					<div class="tableHeadingCGDayName">Day Name</div>
					<div class="tableHeadingCGStartEndTime">Start</div>
					<div class="tableHeadingCGStartEndTime">Finish</div>
				</div>
				<div class="tableRow" id="tableRow0"></div>
				<div class="tableRow" id="tableRow1"></div>
				<div class="tableRow" id="tableRow2"></div>
				<div class="tableRow" id="tableRow3"></div>
				<div class="tableRow" id="tableRow4"></div>
				<div class="tableRow" id="tableRow5"></div>
				<div class="tableRow" id="tableRow6"></div>	
			</div>
			<div id="tableBottom" class="tableBottomCG">
				<input type="submit" value="Add Day" class="submit2" id="addRow">
				<input type="submit" value="Remove Day" class="submit2" id="removeRow">
			</div><br><br><hr>Select End Date.<br>
			<select name="calendarGeneratorEndYear" id="calendarGeneratorEndYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="calendarGeneratorEndMonth" id="calendarGeneratorEndMonth">
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
			<select name="calendarGeneratorEndDay" id="calendarGeneratorEndDay"></select>
			<div id="CGInfo">
				<p>First, select a start date for your chosen period, then create your shift pattern (max. two weeks pattern allowed) and finally choose
				the end period for which you wish to apply your shift pattern. Calendar can only be generated if there are no values submitted 
				previously for your chosen period. Important: this will only insert your chosen shift pattern into the calendar, it does not produce payslips!
				</p>
				<iframe class="iframe" src="https://www.youtube.com/embed/kIp86qUQ-2E" frameborder="0" allow="autoplay; 
				encrypted-media" allowfullscreen>
				</iframe>
				<br><br>
			</div>
		</div>
		<div id="tableBottomBP" class="tableBottomBP">
			<div id="calendarGenerateDivResponse"></div>
			<input type="submit" value="Generate" id="generateCalendarSubmitButton" class="submit2">
		</div>
			<input type="hidden" id="numberOriginalValue" name="numberOriginalValue" value="6">
		<div class="deductionCaption">Delete Calendar Period</div>
		<div id="calendarGeneratorDelete">
			<p class="textIndent">Select a Period you wish to delete. Only dates added through calendar generator can be deleted!</p><hr>
			Start date:
			<select name="calendarDeleteStartYear" id="calendarDeleteStartYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="calendarDeleteStartMonth" id="calendarDeleteStartMonth">
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
			<select name="calendarDeleteStartDay" id="calendarDeleteStartDay"></select><br>
			End date:
			<select name="calendarDeleteEndYear" id="calendarDeleteEndYear">
				<option value="2017">2017</option>
				<option value="2018">2018</option>
				<option value="2019">2019</option>
				<option value="2020">2020</option>
				<option value="2021">2021</option> 
			</select>
			<select name="calendarDeleteEndMonth" id="calendarDeleteEndMonth">
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
			<select name="calendarDeleteEndDay" id="calendarDeleteEndDay"></select>
		</div>
		<div id="tableBottomBP2" class="tableBottomBP">
			<div id="calendarDeleteDivResponse"></div>
			<input type="submit" value="Delete" id="calendarGeneratorDeleteButton" class="submit2">
		</div>
		<?php require ( 'includes/footer.html' ) ; ?><br>
	</body>
</html>