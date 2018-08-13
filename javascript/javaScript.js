var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var timeSinceEpochOriginal = 1491004800000	//balandzio pirma //1491177600000 - balandzio 3
//var timeSinceEpoch = 1491004800000;

var weekStartArray = [];
var unsHCheck = [];

var bankHolidayArray = [1492128000000, 1492387200000, 1493596800000, 1496016000000, 1503878400000, 1514160000000, 1514246400000];
//2018
bankHolidayArray.push(1514764800000, 1522368000000, 1522627200000, 1525651200000, 1527465600000, 1535328000000, 1545696000000, 1545782400000);
//2019
bankHolidayArray.push(1546300800000, 1555632000000, 1555891200000, 1557100800000, 1558915200000, 1566777600000, 1577232000000, 1577318400000);
//2020
bankHolidayArray.push(1577836800000, 1586476800000, 1586736000000, 1590364800000, 1588550400000, 1598832000000, 1608854400000, 1608940800000, 1609113600000);
//2021
bankHolidayArray.push(1609459200000, 1617321600000, 1617580800000, 1620000000000, 1622419200000, 1630281600000);
bankHolidayArray.push(1640390400000, 1640476800000, 1640563200000, 1640649600000);

//---------funkcija, kuri keicia fono spalva, bei matomumo parametrus priklausomai nuo pasirinktos dienos
function hideHoursSelect()
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	unsHCheckCurrent = Number(unsHCheck[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(b=0;b<7;b++)
	{
		var index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;	
		var startHours = document.getElementById("startHours"+taxPeriodStart);
		var startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		var bereavementDiv = document.getElementById("bereavementDiv"+taxPeriodStart);
		var sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		var dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		var familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		var compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);
		//var familyLeaveDiv = document.getElementById("familyLeaveDiv"+taxPeriodStart);
		
		var sicknessCheck = document.getElementById("sicknessButton"+taxPeriodStart).checked;
		var dayInSickCheck = document.getElementById("dayInSickButton"+taxPeriodStart).checked;
		var bereavementCheck = document.getElementById("bereavementButton"+taxPeriodStart).checked;
		var familyCheck = document.getElementById("familyLeaveButton"+taxPeriodStart).checked;
		
		//var familySelectIndex = document.getElementById("familySelect"+taxPeriodStart).options.selectedIndex;
		var compassionateCheck = document.getElementById("compassionateButton"+taxPeriodStart).checked;
	
		if (index === 7){
			if (unsHCheckCurrent === 1){
				if (sicknessCheck === false)
				{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				sicknessTextDiv.style.visibility = "visible";
				}
				else if (sicknessCheck === true){
				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				
				sicknessTextDiv.style.visibility = "hidden";
				}	
				else {};
			}
			else{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				sicknessTextDiv.style.visibility = "visible";
			}
		}
		
		//family leave
		else if (index === 9){
			if (unsHCheckCurrent === 1){
				if (familyCheck === false)
				{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				familyLeaeveTextDiv.style.visibility = "visible";
				}
				else if (familyCheck === true){
				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				
				familyLeaeveTextDiv.style.visibility = "hidden";
				}
				else {};
			}
			else
			{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				familyLeaeveTextDiv.style.visibility = "visible";
			}
		}
		
		//bereavement check
		else if (index === 10){
			if (unsHCheckCurrent === 1){
				if (bereavementCheck === false)
				{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				bereavementDiv.style.visibility = "visible"
				}
				else if (bereavementCheck === true){
				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				
				bereavementDiv.style.visibility = "hidden"
				}
				else {};
			}
			else
			{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				bereavementDiv.style.visibility = "visible"
			}
		}
		
		//compassionate check
		else if (index === 11){
			if (unsHCheckCurrent === 1){
				if (compassionateCheck === false)
				{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				compassionateDiv.style.visibility = "visible"
				}
				else if (compassionateCheck === true){
				startHours.style.visibility = "visible";
				startMinutes.style.visibility = "visible";
				endHours.style.visibility = "visible";
				endMinutes.style.visibility = "visible";
				
				compassionateDiv.style.visibility = "hidden"
				}
				else {};
			}
			else{
				startHours.style.visibility = "hidden";
				startMinutes.style.visibility = "hidden";
				endHours.style.visibility = "hidden";
				endMinutes.style.visibility = "hidden";
				
				compassionateDiv.style.visibility = "visible"
			}
		}
		//changeSelectBackground();
		taxPeriodStart++;
	}	
}

function calendarBackgroundChangeOnSelect ()
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	
	var currentDate = new Date();
	var currentTime = currentDate.getTime() 
	var timeSinceEpochCurrentDay = timeSinceEpoch;
	for(i=21;i<28;i++)
	{
		
		var index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		
		var dayDiv = document.getElementById("dayDiv"+i);
		if (index === 0) 
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");}
				else
				{dayDiv.className="dayDiv notSelectedColor";} 
			}
		else if (index === 1)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv dayInColor currentDay");}
				else
				{dayDiv.className="dayDiv dayInColor";} 
			}
		else if (index === 2)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv dayOffColor currentDay");}
				else
				{dayDiv.className="dayDiv dayOffColor";} 
			}
		else if (index === 3)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv holidayColor currentDay");}
				else
				{dayDiv.className="dayDiv holidayColor";} 
			}
		else if (index === 4)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv halfInHalfOffColor currentDay");}
				else
				{dayDiv.className="dayDiv halfInHalfOffColor";}
			}
		else if (index === 5) 
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv unpaidHolColor currentDay");}
				else
				{dayDiv.className="dayDiv unpaidHolColor";}
			}
		else if (index === 6)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv dayInSickColor currentDay");}
				else
				{dayDiv.className="dayDiv dayInSickColor";}
			}
		else if (index === 7) 
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv sicknessColor currentDay");}
				else
				{dayDiv.className="dayDiv sicknessColor";}
			}
		else if (index === 8)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv absenceColor currentDay");}
				else
				{dayDiv.className="dayDiv absenceColor";}
			}
		else if (index === 9)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv familyLeaveColor currentDay");}
				else
				{dayDiv.className="dayDiv familyLeaveColor";}
			}
		else if (index === 10)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv bereavementColor currentDay");}
				else
				{dayDiv.className="dayDiv bereavementColor";}
			}
		else if (index === 11)
			{
				if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
				{dayDiv.setAttribute("class", "dayDiv compassionateColor currentDay");}
				else
				{dayDiv.className="dayDiv compassionateColor";}
			}
		else {dayDiv.className = "dayDiv notSelectedColor";}
		
		taxPeriodStart++;
		timeSinceEpochCurrentDay += 86400000;
	}
}
function markBankHoliday()
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	timeSinceEpochMBH = timeSinceEpochOriginal+(taxPeriodNumber-1)*604800000+weekStart*86400000;
	for(b=0;b<7;b++)
	{
		var dateInput = document.getElementById("dateInput"+taxPeriodStart);
		for (i=0; i<bankHolidayArray.length; i++)
		{
			if ( timeSinceEpochMBH !== bankHolidayArray[i]) {continue;} dateInput.style.color = "red"; dateInput.style.fontWeight = "bold";
		}
		taxPeriodStart++;
		timeSinceEpochMBH+=86400000;
	}	
}
function markCurrentDay ()
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth()+1; //be 1 gaunasi invalid date
	var currentDay = currentDate.getDate();
	
	var currentDayYMD = currentYear+'/'+currentMonth+'/'+currentDay;
	var currentDateMidnight = new Date(currentDayYMD);
	var currentDateMidnightMilisecondsSinceEpoch = currentDateMidnight.getTime();
	
	for(b=0;b<7;b++)
	{
		var dateInputHidden = document.getElementById("dateInputHidden"+taxPeriodStart).value;
		var dateInput = document.getElementById("dateInput"+taxPeriodStart);
		var startHours = document.getElementById("startHours"+taxPeriodStart);
		var startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		
		var notSelectedDiv = document.getElementById("notSelectedDiv"+taxPeriodStart);
		var holidayDiv = document.getElementById("holidayDiv"+taxPeriodStart);
		var sicknessDiv = document.getElementById("sicknessDiv"+taxPeriodStart);
		var dayOffDiv = document.getElementById("dayOffDiv"+taxPeriodStart);
		var absenceDiv = document.getElementById("absenceDiv"+taxPeriodStart);
		var familyLeaveDiv = document.getElementById("familyLeaveDiv"+taxPeriodStart);
		//var bereavementDiv = document.getElementById("bereavementDiv"+taxPeriodStart);
		var dayInSickDiv = document.getElementById("dayInSickDiv"+taxPeriodStart);
		var enhancedHolidayDiv = document.getElementById("enhancedHolidayDiv"+taxPeriodStart)
		var unpaidHolDiv = document.getElementById("unpaidHolDiv"+taxPeriodStart);
		//var bereavementButtonDiv = document.getElementById("bereavementButtonDiv"+taxPeriodStart);
		var compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);
		
		var sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		var dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		var familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		var compassionateButtonDiv = document.getElementById("compassionateButtonDiv"+taxPeriodStart);
		
		//pakeisti formata, kad veiktu ant ios
		var dateInputHiddenSplit =  dateInputHidden.split("-");
		var dateInputHiddenFormatted = dateInputHiddenSplit[0]+'/'+dateInputHiddenSplit[1]+'/'+dateInputHiddenSplit[2];
		
		var submittedDate = new Date(dateInputHiddenFormatted);
		var miliseconds = submittedDate.getTime();
		if (miliseconds == currentDateMidnightMilisecondsSinceEpoch)
		{
			dateInput.className+=" currentDateInput";
			startHours.className +=" currentStartTime";
			startMinutes.className +=" currentStartTime";
			endHours.className +=" currentStartTime";
			endMinutes.className +=" currentStartTime";
			
			 notSelectedDiv.className +=" currentDateInput";
			 holidayDiv.className +=" currentDateInput";
			 unpaidHolDiv.className +=" currentDateInput";
			 sicknessDiv.className +=" currentDateInput";
			 dayOffDiv.className +=" currentDateInput";
			 absenceDiv.className +=" currentDateInput";
			 familyLeaveDiv.className +=" currentDateInput";
			 //bereavementDiv.className +=" currentDateInput";
			 dayInSickDiv.className +=" currentDateInput";
			 enhancedHolidayDiv.className +=" currentDateInput";
			 //bereavementButtonDiv.className +=" currentDateInput";
			 sicknessTextDiv.className +=" currentDateInput";
			 dayInSickTextDiv.className +=" currentDateInput";
			 familyLeaeveTextDiv.className +=" currentDateInput";
			 compassionateDiv.className +=" currentDateInput";
			 compassionateButtonDiv.className +=" currentDateInput";
			
		}
		
		taxPeriodStart++
	}	
	markBankHoliday();
}

function changeSelectBackground() 
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	unsHCheckCurrent = Number(unsHCheck[taxPeriodNumber]);
	for(b=0;b<7;b++)
	{
		var index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		
		var dayType = document.getElementById("dayType"+taxPeriodStart);				//select meniu, kuriame pasirenkamas dienos tipas
		var dateInput = document.getElementById("dateInput"+taxPeriodStart); 				//datos laukelis
		var noteInput = document.getElementById("noteInput"+taxPeriodStart);
		var tableRow = document.getElementById("tableRow"+b);
		var dateDiv = document.getElementById("dateDiv"+b);							//div i kuri iterpiamas datos laukelis
		//var endTime = document.getElementById("endTime"+taxPeriodStart);					//div i kuri iterpiami valandu ir minuciu drop down meniu
		
		var startHours = document.getElementById("startHours"+taxPeriodStart);
		var startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		var notSelectedDiv = document.getElementById("notSelectedDiv"+taxPeriodStart);
		var holidayDiv = document.getElementById("holidayDiv"+taxPeriodStart);
		var sicknessDiv = document.getElementById("sicknessDiv"+taxPeriodStart);
		var dayOffDiv = document.getElementById("dayOffDiv"+taxPeriodStart);
		var absenceDiv = document.getElementById("absenceDiv"+taxPeriodStart);
		var familyLeaveDiv = document.getElementById("familyLeaveDiv"+taxPeriodStart);
		var bereavementDiv = document.getElementById("bereavementDiv"+taxPeriodStart);
		var dayInSickDiv = document.getElementById("dayInSickDiv"+taxPeriodStart);
		var enhancedHolidayDiv = document.getElementById("enhancedHolidayDiv"+taxPeriodStart)
		var unpaidHolDiv = document.getElementById("unpaidHolDiv"+taxPeriodStart);
		var bereavementButtonDiv = document.getElementById("bereavementButtonDiv"+taxPeriodStart);
		
		var sicknessTextDiv = document.getElementById("sicknessTextDiv"+taxPeriodStart);
		var dayInSickTextDiv = document.getElementById("dayInSickTextDiv"+taxPeriodStart);
		var familyLeaeveTextDiv = document.getElementById("familyLeaeveTextDiv"+taxPeriodStart);
		var compassionateDiv = document.getElementById("compassionateDiv"+taxPeriodStart);
		var compassionateButtonDiv = document.getElementById("compassionateButtonDiv"+taxPeriodStart);
		
		if (index === 0)			//Not Selected
		{dayType.className="notSelectedColor typeOfDaySelect";
		 dateInput.className="notSelectedColor dateInput";
		 noteInput.className="notSelectedColor noteInput";
		 dateDiv.className="dateDiv notSelectedColor tableData tableDataRelative ";
		 //endTime.className="notSelectedColor tableData tableDataRelative";
		 tableRow.className="notSelectedColor tableRow";
		 
		 notSelectedDiv.style.visibility = "visible";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "hidden";
		 startMinutes.style.visibility = "hidden";
		 endHours.style.visibility = "hidden";
		 endMinutes.style.visibility = "hidden";
		 }
		else if (index === 1)		//Day In
		{dayType.className="dayInColor typeOfDaySelect";
		 dateInput.className="dayInColor dateInput";
		 noteInput.className="dayInColor noteInput";	
		 dateDiv.className="dateDiv dayInColor tableData tableDataRelative ";
		 //endTime.className="dayInColor tableData tableDataRelative";
		 tableRow.className="dayInColor tableRow";
		 
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "visible";
		 startMinutes.style.visibility = "visible";
		 endHours.style.visibility = "visible";
		 endMinutes.style.visibility = "visible";
		 }
		else if (index === 2)		//Day Off
		{dayType.className="dayOffColor typeOfDaySelect";
		 dateInput.className="dayOffColor dateInput";
		 noteInput.className="dayOffColor noteInput";	
		 dateDiv.className="dateDiv dayOffColor tableData tableDataRelative ";
		// endTime.className="dayOffColor tableData tableDataRelative";
		tableRow.className="dayOffColor tableRow";
		 
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "visible";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "hidden";
		 startMinutes.style.visibility = "hidden";
		 endHours.style.visibility = "hidden";
		 endMinutes.style.visibility = "hidden";
		}
		else if (index === 3)		//Holiday
		{dayType.className="holidayColor typeOfDaySelect";
		 dateInput.className="holidayColor dateInput";
		 noteInput.className="holidayColor noteInput";	
		 dateDiv.className="dateDiv holidayColor tableData tableDataRelative ";
		 //endTime.className="holidayColor tableData tableDataRelative";
		 tableRow.className="holidayColor tableRow";
		  
		 notSelectedDiv.style.visibility = "hidden";
		 //parodome arba paslepiame holiday div priklausomai nuo to ar yra unsocial hours ar nera.
		 if (unsHCheckCurrent === 1)
		 {
			holidayDiv.style.visibility = "hidden"; 
			
			startHours.style.visibility = "visible";
			startMinutes.style.visibility = "visible";
			endHours.style.visibility = "visible";
			endMinutes.style.visibility = "visible";
		 }
		 else{
			holidayDiv.style.visibility = "visible"; 
			
			startHours.style.visibility = "hidden";
			startMinutes.style.visibility = "hidden";
			endHours.style.visibility = "hidden";
			endMinutes.style.visibility = "hidden";
		 }
		
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "visible";
		 enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		}
		else if (index === 4)		//Half In/Holl
		{dayType.className="halfInHalfOffColor typeOfDaySelect";
		 dateInput.className="halfInHalfOffColor dateInput";
		 noteInput.className="halfInHalfOffColor noteInput";	
		 dateDiv.className="dateDiv halfInHalfOffColor tableData tableDataRelative";
		 //endTime.className="halfInHalfOffColor tableData tableDataRelative";
		 tableRow.className="halfInHalfOffColor tableRow";
		  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 enhancedHolidayDiv.style.visibility = "visible";
		 enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv halfInHalfOffColor");
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "visible";
		 startMinutes.style.visibility = "visible";
		 endHours.style.visibility = "visible";
		 endMinutes.style.visibility = "visible";
		}
		else if (index === 5)		//unpaid hol
		{dayType.className="unpaidHolColor typeOfDaySelect";
		 dateInput.className="unpaidHolColor dateInput";
		 noteInput.className="unpaidHolColor noteInput";	
		 dateDiv.className="dateDiv unpaidHolColor tableData tableDataRelative";
		// endTime.className="unpaidHolColor tableData tableDataRelative";
		tableRow.className="unpaidHolColor tableRow";
		  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "visible";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "hidden";
		 startMinutes.style.visibility = "hidden";
		 endHours.style.visibility = "hidden";
		 endMinutes.style.visibility = "hidden";
		}
		else if (index === 6)		//Day In / Sick
		{dayType.className="dayInSickColor typeOfDaySelect";
		 dateInput.className="dayInSickColor dateInput";
		 noteInput.className="dayInSickColor noteInput";	
		 dateDiv.className="dateDiv dayInSickColor tableData tableDataRelative";
		 //endTime.className="dayInSickColor tableData tableDataRelative";
		 tableRow.className="dayInSickColor tableRow";
		  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "visible";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "visible";
		 startMinutes.style.visibility = "visible";
		 endHours.style.visibility = "visible";
		 endMinutes.style.visibility = "visible";
		}
		else if (index === 7)		//Sickness
		{dayType.className="sicknessColor typeOfDaySelect";
		 dateInput.className="sicknessColor dateInput";
		 noteInput.className="sicknessColor noteInput";	
		 dateDiv.className="dateDiv sicknessColor tableData tableDataRelative";
		 //endTime.className="sicknessColor tableData tableDataRelative";
		 tableRow.className="sicknessColor tableRow";
		
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "visible"; 
		 /*if (unsHCheckCurrent === 1)
		 {
			sicknessTextDiv.style.visibility = "hiddden";
			
			startHours.style.visibility = "visible";
			startMinutes.style.visibility = "visible";
			endHours.style.visibility = "visible";
			endMinutes.style.visibility = "visible";
		 }
		 else{
			sicknessTextDiv.style.visibility = "visible";
			
			startHours.style.visibility = "hidden";
			startMinutes.style.visibility = "hidden";
			endHours.style.visibility = "hidden";
			endMinutes.style.visibility = "hidden";
		 }*/
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		}
		else if (index === 8)		//Abscence
		{dayType.className="absenceColor typeOfDaySelect";
		 dateInput.className="absenceColor dateInput";
		 noteInput.className="absenceColor noteInput";	
		 dateDiv.className="dateDiv absenceColor tableData tableDataRelative";
		// endTime.className="absenceColor tableData tableDataRelative";
		tableRow.className="absenceColor tableRow";
		  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "visible";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		 
		 startHours.style.visibility = "hidden";
		 startMinutes.style.visibility = "hidden";
		 endHours.style.visibility = "hidden";
		 endMinutes.style.visibility = "hidden";
		}
		else if (index === 9)		//Family Leave
		{dayType.className="familyLeaveColor typeOfDaySelect";
		 dateInput.className="familyLeaveColor dateInput";
		 noteInput.className="familyLeaveColor noteInput";	
		 dateDiv.className="dateDiv familyLeaveColor tableData tableDataRelative";
		 //endTime.className="familyLeaveColor tableData tableDataRelative";
		 tableRow.className="familyLeaveColor tableRow";
		  
		  
		
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "visible";
		 /* if (unsHCheckCurrent === 1)
		  {
			
			startHours.style.visibility = "visible";
			startMinutes.style.visibility = "visible";
			endHours.style.visibility = "visible";
			endMinutes.style.visibility = "visible";
		  }
		  else{
			
			startHours.style.visibility = "hidden";
			startMinutes.style.visibility = "hidden";
			endHours.style.visibility = "hidden";
			endMinutes.style.visibility = "hidden";
		  } */
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		}
		else if (index === 10)		//Bereavement
		{dayType.className="bereavementColor typeOfDaySelect";
		 dateInput.className="bereavementColor dateInput";
		 noteInput.className="bereavementColor noteInput";	
		 dateDiv.className="dateDiv bereavementColor tableData tableDataRelative";
		 //endTime.className="bereavementColor tableData tableDataRelative";
		 tableRow.className="bereavementColor tableRow";
		  
		  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "visible";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "hidden";
		}
		else if (index === 11)		//compassionate
		{dayType.className="compassionateColor typeOfDaySelect";
		 dateInput.className="compassionateColor dateInput";
		 noteInput.className="compassionateColor noteInput";	
		 dateDiv.className="dateDiv compassionateColor tableData tableDataRelative";
		 //endTime.className="compassionateColor tableData tableDataRelative";
		 tableRow.className="compassionateColor tableRow";
		  	  
		 notSelectedDiv.style.visibility = "hidden";
		 holidayDiv.style.visibility = "hidden";
		 unpaidHolDiv.style.visibility = "hidden";
		 sicknessDiv.style.visibility = "hidden";
		 dayOffDiv.style.visibility = "hidden";
		 absenceDiv.style.visibility = "hidden";
		 familyLeaveDiv.style.visibility = "hidden";
		 bereavementDiv.style.visibility = "hidden";
		 dayInSickDiv.style.visibility = "hidden";
		 enhancedHolidayDiv.style.visibility = "hidden";
		 bereavementButtonDiv.style.visibility = "hidden";
		 sicknessTextDiv.style.visibility = "hidden";
		 dayInSickTextDiv.style.visibility = "hidden";
		 familyLeaeveTextDiv.style.visibility = "hidden";
		 compassionateDiv.style.visibility = "hidden";
		 compassionateButtonDiv.style.visibility = "visible";
		}
		taxPeriodStart++;
	}
	finishNextMorningBColor (weekStart);
}

function bankHolidayFilter (timeSinceEpoch)
{
	var mSecondsInWeek = 604800000;
	timeSinceEpoch = timeSinceEpoch - mSecondsInWeek*3;
	id = 0;
	for (st=0;st<7;st++)
	{
		for(stt=0;stt<7;stt++)
		{
			dayDiv = document.getElementById("dayDiv"+id);
			if ( timeSinceEpoch === bankHolidayArray[0]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";} // april 14 2017
			else if(timeSinceEpoch === bankHolidayArray[1])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// april 17 2017
			else if(timeSinceEpoch === bankHolidayArray[2])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// may 1 2017
			else if(timeSinceEpoch === bankHolidayArray[3])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// may 29 2017
			else if(timeSinceEpoch === bankHolidayArray[4])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// august 28 2017
			else if(timeSinceEpoch === bankHolidayArray[5])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// december 25 2017
			else if(timeSinceEpoch === bankHolidayArray[6])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// december 26 2017
			else if(timeSinceEpoch === bankHolidayArray[7])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// January 01 2018
			else if(timeSinceEpoch === bankHolidayArray[8])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	// March 30 2018
			else if(timeSinceEpoch === bankHolidayArray[9])	{dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[10]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[11]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[12]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[13]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[14]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[15]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[16]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[17]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[18]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[19]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[20]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[21]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[22]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[23]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[24]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[25]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[26]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[27]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[28]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[29]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[30]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[31]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[32]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[33]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[34]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[35]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[36]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[37]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[38]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[39]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}
			else if(timeSinceEpoch === bankHolidayArray[40]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}	
			else if(timeSinceEpoch === bankHolidayArray[41]){dayDiv.style.color = "red"; dayDiv.style.fontWeight = "bold";}			
			else {dayDiv.style.color = "black";  dayDiv.style.fontWeight = "normal";}
			timeSinceEpoch+=86400000;
			id++;
		}
	}
}

function generateCalendar (taxPeriodNumber,timeSinceEpoch)
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var calendarTable = document.getElementById("calendar");
	var calendarCaptionTitle = document.getElementById("calendarCaptionTitle");
	
	timeSinceEpochForDay = timeSinceEpoch;		
	var mSecondsInWeek = 604800000;
	timeSinceEpoch -= mSecondsInWeek*3;
	
	var id = 0;
	for(tr=0;tr<7;tr++)
	{
		
		//iterpiami dienu pavadinimai i kalendorius
		var dayName = document.getElementById("dayName"+tr);
		var startDay = new Date(timeSinceEpochForDay);
		var dy = startDay.getDay();
		dy = days[dy];
		dayName.innerHTML = dy;
		timeSinceEpochForDay += 86400000;
		
		var startDate = new Date(timeSinceEpoch);
		var mm = startDate.getMonth();
		mm = months[mm];
		var calendarRow = document.getElementById("calendarRow"+tr);
		
		//iterpiami menesiu pavadinimai i kalendoriu
		var monthDiv = document.createElement("div");
		monthDiv.setAttribute("class", "dayDiv monthDiv");
		monthDiv.setAttribute("id", "monthDiv"+tr);
		var monthName = document.createTextNode(mm);
		monthDiv.appendChild(monthName);
		calendarRow.appendChild(monthDiv);
		
		if (tr==3){
			var currentWeekFilter = document.createElement("div");
			currentWeekFilter.setAttribute("class", "currentWeekFilter");
			calendarRow.appendChild(currentWeekFilter);
		}
		
		var startDatecalendarCaption = new Date(timeSinceEpoch-86400000*21);
		var yy = startDatecalendarCaption.getFullYear();
		calendarCaptionTitle.innerHTML = "Calendar "+yy;
		
		
		for(cd=0;cd<7;cd++)  //cd - create div
		{		
			//iterpiami dienu numeriai i kalendoriu
			var startDate = new Date(timeSinceEpoch);
			var dd = startDate.getDate();
			if (dd<10){dd="0"+dd;}
			var dayDiv = document.createElement("div");
			dayDiv.setAttribute("class", "dayDiv");
			dayDiv.setAttribute("id", "dayDiv"+id);
			var dayNumber = document.createTextNode(dd);
			dayDiv.appendChild(dayNumber);
			calendarRow.appendChild(dayDiv);
			
			//paryskiname esama diena kalendoriuje
			var currentDate = new Date();
			var currentTime = currentDate.getTime() 
			
			if (currentTime>timeSinceEpoch && currentTime <(timeSinceEpoch + 86400000))
			{
				dayDiv.setAttribute("class", "dayDiv currentDay");
			}
			else 
			{dayDiv.setAttribute("class", "dayDiv");}
			timeSinceEpoch += 86400000;
			
			id++;
		}
	}
	bankHolidayFilter(timeSinceEpoch);
}

function finishNextMorningBColor()
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(b=0;b<7;b++)
	{
		var index = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		if (index>=24)
		{
			endHours.setAttribute("class", "nextMorningSelect");
			endMinutes.setAttribute("class", "nextMorningSelect");
		}
		else if (index<24)
		{
			endHours.className="hourMinuteSelect endTimeColor";
			endMinutes.className="hourMinuteSelect endTimeColor";
		}
		taxPeriodStart++;
	}
	markCurrentDay ();
}

//-----------------filing the table with elements
function createThourthColumnElements (taxPeriodNumber)
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;	
	
	for(th=0;th<7;th++)
	{
		var tableRow = document.getElementById("tableRow"+th);
		var noteDiv = document.createElement("div");
		noteDiv.setAttribute("class", "tableData tableDataRelative noteDiv");

		var noteInput = document.createElement("input");
		noteInput.setAttribute("type","text");
		noteInput.setAttribute("name","noteInput"+taxPeriodStart);
		noteInput.setAttribute("class","noteInput");
		noteInput.setAttribute("id","noteInput"+taxPeriodStart);
		noteInput.setAttribute("size", "15");
		noteInput.setAttribute("maxlength", "50");
		
		noteDiv.appendChild(noteInput);
		tableRow.appendChild(noteDiv);
		taxPeriodStart++
	}
}


function createThirdColumnElements (taxPeriodNumber)
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;	
	for(th=0;th<7;th++)
	{
		var tableRow = document.getElementById("tableRow"+th);
		var tableData = document.createElement("div");
		tableData.setAttribute("class", "tableData tableDataRelative");
	
		var startHours = document.createElement("select");
		startHours.setAttribute("name", "startHours"+taxPeriodStart);
		startHours.setAttribute("id", "startHours"+taxPeriodStart);
		startHours.setAttribute("class", "hourMinuteSelect startTimeColor");
		
		var startHourOptionArray = [];
			for (sh=0;sh<=23;sh++)
			{
				if (sh<10){sh="0"+sh;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10				
				startHourOptionArray[sh] = sh; // pildomas valandu masyvas
				var startHourOption = document.createElement("option");
				var startHour = document.createTextNode(startHourOptionArray[sh]);
				startHourOption.appendChild(startHour);						//option<---[text]
				startHours.appendChild(startHourOption);					//select<--[option]
			}		
		tableData.appendChild(startHours);
		
		var startMinutes = document.createElement("select");
		startMinutes.setAttribute("name", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("id", "startMinutes"+taxPeriodStart);
		startMinutes.setAttribute("class", "hourMinuteSelect startTimeColor");
		var startMinuteOptionArray = [];
			for (sm=0;sm<=59;sm++)
			{
				if (sm<10){sm="0"+sm;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10			
				startMinuteOptionArray[sm] = sm; // pildomas minuciu masyvas
				var startMinuteOption = document.createElement("option");
				var startMinute = document.createTextNode(startMinuteOptionArray[sm]);
				startMinuteOption.appendChild(startMinute);					//option<--[text]
				startMinutes.appendChild(startMinuteOption);				//select<--[option]
			}
		tableData.appendChild(startMinutes);
		
		var endHours = document.createElement("select");
		endHours.setAttribute("name", "endHours"+taxPeriodStart);
		endHours.setAttribute("id", "endHours"+taxPeriodStart);
		endHours.setAttribute("class", "hourMinuteSelect endTimeColor");
		var endHourOptionArray = [];
			for (eh=0;eh<=23;eh++)
			{
				if (eh<10){eh="0"+eh;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10				
				endHourOptionArray[eh] = eh; // pildomas valandu masyvas
				var endHourOption = document.createElement("option");
				endHourOption.setAttribute("class", "endTimeColor");
				var endHour = document.createTextNode(endHourOptionArray[eh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}
		var endHourNextMorning = [];
			for(nmh=0;nmh<=11;nmh++)
			{
				if (nmh<10){nmh="0"+nmh;}			
				endHourNextMorning[nmh] = nmh;
				var endHourOption = document.createElement("option");
				endHourOption.setAttribute("class","nextMorning");
				var endHour = document.createTextNode(endHourNextMorning[nmh]);
				endHourOption.appendChild(endHour);							//option<--[text]
				endHours.appendChild(endHourOption);						//select<--[option]
			}	
		tableData.appendChild(endHours);
				
		var endMinutes = document.createElement("select");
		endMinutes.setAttribute("name", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("id", "endMinutes"+taxPeriodStart);
		endMinutes.setAttribute("class", "hourMinuteSelect endTimeColor");
		
		var endMinuteOptionArray = [];
		for (em=0;em<=59;em++)
		{
			if (em<10){em="0"+em;} //iterpiamas nulis priekyje, jei valanda yra mazesne uz 10			
			endMinuteOptionArray[em] = em; // pildomas masyvas
			var endMinuteOption = document.createElement("option");
			var endMinute = document.createTextNode(endMinuteOptionArray[em]);
			endMinuteOption.appendChild(endMinute);						//option<--[text]
			endMinutes.appendChild(endMinuteOption);					//select<--[option]
		}	
		tableData.appendChild(endMinutes);
		
		var notSelectedDiv = document.createElement("div");
		notSelectedDiv.setAttribute("id","notSelectedDiv"+taxPeriodStart);
		notSelectedDiv.setAttribute("class","absoluteDiv notSelectedColor notSelectedDiv");
		var notSelectedText = document.createTextNode("Select a Day Type.");
		notSelectedDiv.appendChild(notSelectedText);
		tableData.appendChild(notSelectedDiv);
		
		//nenaudojamas
		var holidayDiv = document.createElement("div");
		holidayDiv.setAttribute("id","holidayDiv"+taxPeriodStart);
		holidayDiv.setAttribute("class","absoluteDiv holidayColor holidayDiv");
		var holidayText = document.createTextNode("Holiday Time!");
		holidayDiv.appendChild(holidayText);
		tableData.appendChild(holidayDiv);
				
		var dayOffDiv = document.createElement("div");
		dayOffDiv.setAttribute("id","dayOffDiv"+taxPeriodStart);
		dayOffDiv.setAttribute("class","absoluteDiv dayOffDiv dayOffColor");
		var dayOffText = document.createTextNode("Enjoy Your Day Off!");
		dayOffDiv.appendChild(dayOffText);
		tableData.appendChild(dayOffDiv);

		var sicknessTextDiv = document.createElement("div");
		sicknessTextDiv.setAttribute("id","sicknessTextDiv"+taxPeriodStart);
		sicknessTextDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		var sicknessTextDivText = document.createTextNode("Get well soon!");
		sicknessTextDiv.appendChild(sicknessTextDivText);
		tableData.appendChild(sicknessTextDiv);
		
		var dayInSickTextDiv = document.createElement("div");
		dayInSickTextDiv.setAttribute("id","dayInSickTextDiv"+taxPeriodStart);
		dayInSickTextDiv.setAttribute("class","absoluteDiv dayInSickDiv dayInSickColor");
		var dayInSickTextDivText = document.createTextNode("Get well soon!");
		dayInSickTextDiv.appendChild(dayInSickTextDivText);
		tableData.appendChild(dayInSickTextDiv);
		
		var absenceDiv = document.createElement("div");
		absenceDiv.setAttribute("id","absenceDiv"+taxPeriodStart);
		absenceDiv.setAttribute("class","absoluteDiv absenceDiv absenceColor");
		var absenceDivText = document.createTextNode("Hope It's Authorised!");
		absenceDiv.appendChild(absenceDivText);
		tableData.appendChild(absenceDiv);
		
		var familyLeaeveTextDiv = document.createElement("div");
		familyLeaeveTextDiv.setAttribute("id","familyLeaeveTextDiv"+taxPeriodStart);
		familyLeaeveTextDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");
		var familyLeaeveTextDivText = document.createTextNode("Enjoy Being a Parent!");
		familyLeaeveTextDiv.appendChild(familyLeaeveTextDivText);
		tableData.appendChild(familyLeaeveTextDiv);
			
		var bereavementDiv = document.createElement("div");
		bereavementDiv.setAttribute("id","bereavementDiv"+taxPeriodStart);
		bereavementDiv.setAttribute("class","absoluteDiv bereavementDiv bereavementColor");
		var bereavementText = document.createTextNode("Sincere Condolences.");
		bereavementDiv.appendChild(bereavementText);
		tableData.appendChild(bereavementDiv);
		
		var compassionateDiv = document.createElement("div");
		compassionateDiv.setAttribute("id","compassionateDiv"+taxPeriodStart);
		compassionateDiv.setAttribute("class","absoluteDiv compassionateDiv compassionateColor");
		var compassionateText = document.createTextNode("Take Care!");
		compassionateDiv.appendChild(compassionateText);
		tableData.appendChild(compassionateDiv);
		
		var unpaidHolDiv = document.createElement("div");
		unpaidHolDiv.setAttribute("id","unpaidHolDiv"+taxPeriodStart);
		unpaidHolDiv.setAttribute("class","absoluteDiv unpaidHolDiv unpaidHolColor");
		var unpaidHolDivText = document.createTextNode("Enjoy Your Time Off!");
		unpaidHolDiv.appendChild(unpaidHolDivText);
		tableData.appendChild(unpaidHolDiv);
			
		tableRow.appendChild(tableData);	
		taxPeriodStart++;
		endHours.onchange = function(){finishNextMorningBColor(weekStart);};
	}
}

function createSecondColumnElements(taxPeriodNumber, timeSinceEpoch) //sugeneruojamos datos visai savaitei
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	//pakeiciame periodnr formoje
	var periodNr = document.getElementById("taxPeriodNr");
	periodNr.setAttribute("value", taxPeriodNumber);
	if (taxPeriodNumber<10){taxPeriodNumber="0"+taxPeriodNumber;} 
	var tableCaptionTitle = document.getElementById("tableCaptionTitle");
	var tableCaptionTitleHidden = document.getElementById("tableCaptionTitleHidden");
	
	//keiciame antraste priklausomai nuo tax year.
	if(taxPeriodNumber<=52 && taxPeriodNumber>0 ){
		tableCaptionTitle.innerHTML = "2017/2018 Tax Period no. " + taxPeriodNumber;
		tableCaptionTitleHidden.innerHTML = "2017/2018 Tax Period no. " + taxPeriodNumber;
	}
	else if(taxPeriodNumber<=104 && taxPeriodNumber>52 ){
		taxPeriodNumberNew = taxPeriodNumber - 52;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;} 
		tableCaptionTitle.innerHTML = "2018/2019 Tax Period no. " + taxPeriodNumberNew;
		tableCaptionTitleHidden.innerHTML = "2018/2019 Tax Period no. " + taxPeriodNumberNew;
	}
	else if(taxPeriodNumber<=156 && taxPeriodNumber>104 ){
		taxPeriodNumberNew = taxPeriodNumber - 104;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;} 
		tableCaptionTitle.innerHTML = "2019/2020 Tax Period no. " + taxPeriodNumberNew;
		tableCaptionTitleHidden.innerHTML = "2019/2020 Tax Period no. " + taxPeriodNumberNew;
	}
	else if(taxPeriodNumber<=208 && taxPeriodNumber>156 ){
		taxPeriodNumberNew = taxPeriodNumber - 156;
		if (taxPeriodNumberNew<10){taxPeriodNumberNew="0"+taxPeriodNumberNew;} 
		tableCaptionTitle.innerHTML = "2020/2021 Tax Period no. " + taxPeriodNumberNew;
		tableCaptionTitleHidden.innerHTML = "2020/2021 Tax Period no. " + taxPeriodNumberNew;
	}
	else{
		
	}
	
	taxPeriodNumber = Number(taxPeriodNumber);
	
	var timeSinceEpochInput = document.getElementById("timeSinceEpochInput");
	var timeSinceEpochInputValue = 1491004800000;
	timeSinceEpochInputValue = Number(timeSinceEpochInputValue);
	taxPeriodNumberN = Number(taxPeriodNumber); // pridedame weekstart
	timeSinceEpochInputValue += 604800000*(taxPeriodNumberN-1)+weekStart*86400000;  
	timeSinceEpochInput.setAttribute("value",timeSinceEpochInputValue);
	
	var taxPeriodStart= (taxPeriodNumber-1)*7+weekStart;
	var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;	
	
	for(s=0;s<7;s++)
	{	
		var tableRow = document.getElementById("tableRow"+s);
		var dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "dateDiv tableData tableDataRelative");
		dateDiv.setAttribute("id", "dateDiv"+s);
		
		var startDate = new Date(timeSinceEpoch);				
		//var startDateShort = startDate.toDateString();			// suformatuojama data		dn,mn dd yyyy
		var mm = startDate.getMonth();			// month index
		var MM = startDate.getMonth() +1;		//+1 nes skaiciuojama nuo 0.
		var dd = startDate.getDate();			//day of the month number
		var dy = startDate.getDay();			// day name index
		var yy = startDate.getFullYear();
		
		if (dd<10){dd="0"+dd;} 
		
		mm = months[mm]; // mothn names
		dy = days[dy];  // day names
		
		var formatedDate = dy + " " + mm + " " + dd;
		
		var dateInput = document.createElement("input");
		dateInput.setAttribute("type","text");
		dateInput.setAttribute("name","dateInput"+taxPeriodStart);
		dateInput.setAttribute("class","dateInput");
		dateInput.setAttribute("id","dateInput"+taxPeriodStart);
		dateInput.setAttribute("value",formatedDate);
		dateInput.setAttribute("readonly","readonly");
		dateDiv.appendChild(dateInput);
		
		//pridedame 0 menesio priekyje jei maziau uz 10.
		if (MM<10){MM="0"+MM;}
		var formatedDateHidden = yy + "-" + MM + "-" + dd; // siuntimui i serveri
		
		var dateInputHidden = document.createElement("input");
		dateInputHidden.setAttribute("type","text");
		dateInputHidden.setAttribute("name","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("class","dateInputHidden");
		dateInputHidden.setAttribute("id","dateInputHidden"+taxPeriodStart);
		dateInputHidden.setAttribute("value",formatedDateHidden);
		dateInputHidden.setAttribute("readonly","readonly");
		dateDiv.appendChild(dateInputHidden);
		
		var dayInSickDiv = document.createElement("div");
		dayInSickDiv.setAttribute("id","dayInSickDiv"+taxPeriodStart);
		dayInSickDiv.setAttribute("class","absoluteDiv absoluteDivSick dayInSickDiv dayInSickColor");
		var dayInSickText = document.createTextNode("Paid");
		dayInSickDiv.appendChild(dayInSickText);
		var dayInSickButton = document.createElement("input");
		dayInSickButton.setAttribute("id", "dayInSickButton"+taxPeriodStart);
		dayInSickButton.setAttribute("type", "checkbox");
		dayInSickButton.setAttribute("name", "dayInSick"+taxPeriodStart);
		dayInSickButton.setAttribute("value", "true");
		dayInSickDiv.appendChild(dayInSickButton);
		
		dateDiv.appendChild(dayInSickDiv);
		
		var sicknessDiv = document.createElement("div");
		sicknessDiv.setAttribute("id","sicknessDiv"+taxPeriodStart);
		sicknessDiv.setAttribute("class","absoluteDiv sicknessDiv sicknessColor");
		var sicknessText = document.createTextNode("Paid");
		sicknessDiv.appendChild(sicknessText);
		var sicknessButton = document.createElement("input");
		sicknessButton.setAttribute("id", "sicknessButton"+taxPeriodStart);
		sicknessButton.setAttribute("type", "checkbox");
		sicknessButton.setAttribute("name", "sickness"+taxPeriodStart);
		sicknessButton.setAttribute("value", "true");
		sicknessDiv.appendChild(sicknessButton);
		dateDiv.appendChild(sicknessDiv);
		
		var familyLeaveDiv = document.createElement("div");
		familyLeaveDiv.setAttribute("id","familyLeaveDiv"+taxPeriodStart);
		familyLeaveDiv.setAttribute("class","absoluteDiv familyLeaveDiv familyLeaveColor");
		
		var familyLeaveText = document.createTextNode("Paid");
		familyLeaveDiv.appendChild(familyLeaveText);
		var familyLeaveButton = document.createElement("input");
		familyLeaveButton.setAttribute("id", "familyLeaveButton"+taxPeriodStart);
		familyLeaveButton.setAttribute("type", "checkbox");
		familyLeaveButton.setAttribute("name", "familyLeave"+taxPeriodStart);
		familyLeaveButton.setAttribute("value", "true");
		familyLeaveDiv.appendChild(familyLeaveButton);
		dateDiv.appendChild(familyLeaveDiv);
				
		var enhancedHolidayDiv = document.createElement("div");
		enhancedHolidayDiv.setAttribute("id","enhancedHolidayDiv"+taxPeriodStart);
		enhancedHolidayDiv.setAttribute("class","absoluteDiv absoluteDivSick holidayDiv holidayColor");
		var enhancedHolidayText = document.createTextNode("Enhanced");
		enhancedHolidayDiv.appendChild(enhancedHolidayText);
		var enhancedHolidayButton = document.createElement("input");
		enhancedHolidayButton.setAttribute("id", "enhancedHolidayButton"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("type", "checkbox");
		enhancedHolidayButton.setAttribute("name", "enhancedHoliday"+taxPeriodStart);
		enhancedHolidayButton.setAttribute("value", "true");
		enhancedHolidayDiv.appendChild(enhancedHolidayButton);
		dateDiv.appendChild(enhancedHolidayDiv);
		
		var bereavementButtonDiv = document.createElement("div");
		bereavementButtonDiv.setAttribute("id","bereavementButtonDiv"+taxPeriodStart);
		bereavementButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick bereavementDiv bereavementColor");
		var bereavementButtonText = document.createTextNode("Paid");
		bereavementButtonDiv.appendChild(bereavementButtonText);
		var bereavementButton = document.createElement("input");
		bereavementButton.setAttribute("id", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("type", "checkbox");
		bereavementButton.setAttribute("name", "bereavementButton"+taxPeriodStart);
		bereavementButton.setAttribute("value", "true");
		bereavementButtonDiv.appendChild(bereavementButton);
		dateDiv.appendChild(bereavementButtonDiv);
		
		var compassionateButtonDiv = document.createElement("div");
		compassionateButtonDiv.setAttribute("id","compassionateButtonDiv"+taxPeriodStart);
		compassionateButtonDiv.setAttribute("class","absoluteDiv absoluteDivSick compassionateDiv compassionateColor");
		var compassionateButtonText = document.createTextNode("Paid");
		compassionateButtonDiv.appendChild(compassionateButtonText);
		var compassionateButton = document.createElement("input");
		compassionateButton.setAttribute("id", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("type", "checkbox");
		compassionateButton.setAttribute("name", "compassionateButton"+taxPeriodStart);
		compassionateButton.setAttribute("value", "true");
		compassionateButtonDiv.appendChild(compassionateButton);
		dateDiv.appendChild(compassionateButtonDiv);
				
		tableRow.appendChild(dateDiv);
		
		timeSinceEpoch += 86400000 //pridedama viena diena
		taxPeriodStart++;
		sicknessButton.onchange = function (){hideHoursSelect();}
		dayInSickButton.onchange = function (){hideHoursSelect();}
		bereavementButton.onchange = function (){hideHoursSelect();}
		compassionateButton.onchange = function(){hideHoursSelect();}
		familyLeaveButton.onchange = function(){hideHoursSelect();}
		
	}
}

function createFirstColumnElements (taxPeriodNumber)
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for (f=0;f<7;f++)
	{
		var tableRow = document.getElementById("tableRow"+f);
		var tableData = document.createElement("div");
		tableData.setAttribute("class", "tableData");
		
		var dayType = document.createElement("select");
		dayType.setAttribute("name", "dayType"+taxPeriodStart);
		dayType.setAttribute("id", "dayType"+taxPeriodStart);
		dayType.setAttribute("class", "typeOfDaySelect");
		tableData.appendChild(dayType);
		
		var dayOptionsArray =["Not Selected", "Day In", "Day Off", "Holiday", "Half In/Hol", "Unpaid Hol", "Day In/Sick", "Sickness", "Absence",  "Parental Leave", "Bereavement", "Compassionate" ];			
		var dayOptionsColors = ["notSelectedColor", "dayInColor", "dayOffColor", "holidayColor", "halfInHalfOffColor", "unpaidHolColor", "dayInSickColor", "sicknessColor", "absenceColor", "familyLeaveColor","bereavementColor", "compassionateColor"];	
		//sukuriamas ciklas, kuris i select elementa sutalpina visus galimus pasirinktinu dienu variantus
		for(k=0; k<dayOptionsArray.length; k++)
		{								
			//sukuriamas option elementas su value atributu ir verte
			var dayOption = document.createElement("option");										
			//parenkamos spalvos dropdown meniu, kurios yra tokios pat kaip ir select elemento.
			dayOption.setAttribute("class",dayOptionsColors[k]);																		
			//sukuriamas textas, kurio verte paimama is dayOptionsArray masyvo
			var optionText = document.createTextNode(dayOptionsArray[k]);				
			//tekstas iterpiamas i option elementa, o pastaris i select elementa
			dayOption.appendChild(optionText);
			dayType.appendChild(dayOption);
		}
		tableRow.appendChild(tableData);
		taxPeriodStart++;
		dayType.onchange = function (){changeSelectBackground(), calendarBackgroundChangeOnSelect(), hideHoursSelect(), bankHolidayFilter(timeSinceEpoch)};
		//dayType.onchange = test;
	}
}

function createPayoutButtons(taxPeriodNumber){
	
	var payChristmasSavings = document.getElementById("payChristmasSavings");
	
	payChristmasSavings.innerHTML = " "; //istriname esama elementa
	
	var payChristmasSavingsCheck = document.createElement("input");
	payChristmasSavingsCheck.setAttribute("type", "checkbox");
	payChristmasSavingsCheck.setAttribute("name", "payChristmasSavingsCheck"+taxPeriodNumber);
	payChristmasSavingsCheck.setAttribute("id", "payChristmasSavingsCheck"+taxPeriodNumber);
	payChristmasSavings.appendChild(payChristmasSavingsCheck);
	var payChristmasSavingsCheckText = document.createTextNode("Pay Christmas Savings");
	payChristmasSavings.appendChild(payChristmasSavingsCheckText);
	
	var paySummerSavings = document.getElementById("paySummerSavings");
	paySummerSavings.innerHTML = " ";
	
	var paySummerSavingsCheck = document.createElement("input");
	paySummerSavingsCheck.setAttribute("type", "checkbox");
	paySummerSavingsCheck.setAttribute("name", "paySummerSavingsCheck"+taxPeriodNumber);
	paySummerSavingsCheck.setAttribute("id", "paySummerSavingsCheck"+taxPeriodNumber);
	paySummerSavings.appendChild(paySummerSavingsCheck);
	var paySummerSavingsCheckText = document.createTextNode("Pay Summer Savings");
	paySummerSavings.appendChild(paySummerSavingsCheckText);
}

//--------------------------------ajax conection
	
function loadIndexes(taxPeriodNumber)
{
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	if (XMLHttpRequest)
		{
			var request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			var request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	//request = new XMLHttpRequest();
	request.open( "POST" , "javascript/ajax/loadindexes.php"  , true ) ;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send( "taxPeriodNumber="+taxPeriodNumber ) ;
	request.onreadystatechange = function(){
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;	
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	taxPeriodNumberCalendar = taxPeriodNumber- 3; //
	taxPeriodStartCalendar = (taxPeriodNumberCalendar-1)*7+weekStart;    //
	if ( (request.readyState === 4 ) && ( request.status === 200 ) )
	{ 
		var response = JSON.parse(this.responseText);
		
		var premium = Number(response.premium);
		
		// total payments amount div
		var paymentsAmountDiv = document.getElementById("paymentsAmountDiv");
		var basicHoursPay = Number(response.basicHoursPay);
		var unsocial_prem = Number(response.unsocial_prem);
		var unsocial_prem_hol = Number(response.unsocial_prem_hol);
		var unsocial_prem_sick = Number(response.unsocial_prem_sick);
		var unsocial_prem_family = Number(response.unsocial_prem_family);
		var unsocial_prem_bereavement = Number(response.unsocial_prem_bereavement);
		var unsocial_prem_compassionate = Number(response.unsocial_prem_compassionate);
		var OT1Pay = Number(response.OT1Pay);
		var OT2Pay = Number(response.OT2Pay);
		var enhancedHolidayPay = Number(response.enhancedHolidayPay);
		var holidayPay = Number(response.holidayPay);
		var sicknessPay = Number(response.sicknessPay);
		var familyPay = Number(response.familyPay);
		var bereavementPay = Number(response.bereavementPay);
		var compassionatePay = Number(response.compassionatePay);
		var bHolPayTimes = Number(response.bHolPayTimes);
		var bankHolidayHoursPay = Number(response.bankHolidayHoursPay);
		var bankHolidayClockInBonus = Number(response.bankHolidayClockInBonus);
		var payBack = Number(response.payBack);
		var pieceWork = Number(response.pieceWork);
		var SSP = Number(response.SSP);
		var SPP = Number(response.SPP);
		var additionalPayment = Number(response.additionalPayment);
		var additionalPaymentName = response.additionalPaymentName;
		var additionalPayment2 = Number(response.additionalPayment2);
		var additionalPayment2Name = response.additionalPayment2Name;
		var additionalPayment3 = Number(response.additionalPayment3);
		var additionalPayment3Name = response.additionalPayment3Name;
		var christmasSavingsPayment = Number(response.christmasSavingsPayment);
		var summerSavingsPayment = Number(response.summerSavingsPayment);
		var pensionBeforeTax = Number(response.pensionBeforeTax);
		var pensionAmount = Number(response.pensionAmount);
		var pensionRate = Number(response.pensionRate);
		var saturdayHours = Number(response.saturdayHours);
		var sundayHours = Number(response.sundayHours);
		var saturdayExtraPay = Number(response.saturdayExtraPay);
		var sundayExtraPay = Number(response.sundayExtraPay);
		var saturdayExtraRate = Number(response.saturdayExtraRate);
		var sundayExtraRate = Number(response.sundayExtraRate);
		
		var SAP = Number(response.SAP);
		var salary = Number(response.salary);
		var bonus = Number(response.bonus);
		var commissions = Number(response.commissions);

		paymentsAmountDiv.innerHTML = basicHoursPay.toFixed(2);
		if (unsocial_prem>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem.toFixed(2);}
		if (unsocial_prem_hol>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_hol.toFixed(2);}
		if (unsocial_prem_sick>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_sick.toFixed(2);}
		if (unsocial_prem_family>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_family.toFixed(2);}
		if (unsocial_prem_bereavement>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_bereavement.toFixed(2);}
		if (unsocial_prem_compassionate>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_compassionate.toFixed(2);}
		if (OT1Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT1Pay.toFixed(2);}
		if (OT2Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT2Pay.toFixed(2);}
		if (enhancedHolidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+enhancedHolidayPay.toFixed(2);}
		if (holidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+holidayPay.toFixed(2);}
		if (saturdayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+saturdayExtraPay.toFixed(2);}
		if (sundayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sundayExtraPay.toFixed(2);}
		if (sicknessPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sicknessPay.toFixed(2);}
		if (familyPay>0) {paymentsAmountDiv.innerHTML += '<br>'+familyPay.toFixed(2);}
		if (bereavementPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bereavementPay.toFixed(2);}
		if (compassionatePay>0) {paymentsAmountDiv.innerHTML += '<br>'+compassionatePay.toFixed(2);}
		if (bankHolidayHoursPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayHoursPay.toFixed(2);}
		if (bankHolidayClockInBonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayClockInBonus.toFixed(2);}
		if (payBack>0) {paymentsAmountDiv.innerHTML += '<br>'+payBack.toFixed(2);}
		if (pieceWork>0) {paymentsAmountDiv.innerHTML += '<br>'+pieceWork.toFixed(2);}
		if (SSP>0) {paymentsAmountDiv.innerHTML += '<br>'+SSP.toFixed(2);}
		if (SPP>0) {paymentsAmountDiv.innerHTML += '<br>'+SPP.toFixed(2);}
		if (SAP>0) {paymentsAmountDiv.innerHTML += '<br>'+SAP.toFixed(2);}
		if (salary>0) {paymentsAmountDiv.innerHTML += '<br>'+salary.toFixed(2);}
		if (bonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bonus.toFixed(2);}
		if (commissions>0) {paymentsAmountDiv.innerHTML += '<br>'+commissions.toFixed(2);}
		if (additionalPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment.toFixed(2);}
		if (additionalPayment2>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment2.toFixed(2);}
		if (additionalPayment3>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment3.toFixed(2);}
		if (christmasSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+christmasSavingsPayment.toFixed(2);}
		if (summerSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+summerSavingsPayment.toFixed(2);}
		if (pensionAmount>0 && pensionBeforeTax === 1){paymentsAmountDiv.innerHTML += '<br>- '+pensionAmount.toFixed(2);}
		
		//payments name div
		var paymentsNamesDiv = document.getElementById("paymentsNamesDiv");
		paymentsNamesDiv.innerHTML = 'Basic Hours';
		if (unsocial_prem>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem';}
		if (unsocial_prem_hol>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem H';}
		if (unsocial_prem_sick>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem S';}
		if (unsocial_prem_family>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem P';}
		if (unsocial_prem_bereavement>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem B';}
		if (unsocial_prem_compassionate>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem C';}
		if (OT1Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 1';}
		if (OT2Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 2';}
		if (enhancedHolidayPay>0) {paymentsNamesDiv.innerHTML += '<br>En. Hol';}
		if (holidayPay>0) {paymentsNamesDiv.innerHTML += '<br>Holiday';}
		if (saturdayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Saturday B';}
		if (sundayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Sunday B';}
		if (sicknessPay>0) {paymentsNamesDiv.innerHTML += '<br>Sick Pay';}
		if (familyPay>0) {paymentsNamesDiv.innerHTML += '<br>Parental Pay';}
		if (bereavementPay>0) {paymentsNamesDiv.innerHTML += '<br>Bereavement';}
		if (compassionatePay>0) {paymentsNamesDiv.innerHTML += '<br>Compassionate';}
		if (bankHolidayHoursPay>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol';}
		if (bankHolidayClockInBonus>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol Bonus';}
		if (payBack>0) {paymentsNamesDiv.innerHTML += '<br>Back Pay';}
		if (pieceWork>0) {paymentsNamesDiv.innerHTML += '<br>Piece Work';}
		if (SSP>0) {paymentsNamesDiv.innerHTML += '<br>SSP';}
		if (SPP>0) {paymentsNamesDiv.innerHTML += '<br>SPP';}
		if (SAP>0) {paymentsNamesDiv.innerHTML += '<br>SAP';}
		if (salary>0) {paymentsNamesDiv.innerHTML += '<br>Salary';}
		if (bonus>0) {paymentsNamesDiv.innerHTML += '<br>Bonus';}
		if (commissions>0) {paymentsNamesDiv.innerHTML += '<br>Commissions';}
		if (additionalPayment>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPaymentName;}
		if (additionalPayment2>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment2Name;}
		if (additionalPayment3>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment3Name;}
		if (christmasSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Chris. Sav';}
		if (summerSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Summer Sav.';}
		if (pensionAmount>0 && pensionBeforeTax === 1){paymentsNamesDiv.innerHTML += '<br> Pension';}
		
		//payments units div
		var paymentsUnitsDiv = document.getElementById("paymentsUnitsDiv");
		var basicHoursUnits = Number(response.basic_hours);
		var unsocial_prem_units = Number(response.unsocial_prem_units);
		var unsocial_prem_hol_units = Number(response.unsocial_prem_hol_units);
		var unsocial_prem_sick_units = Number(response.unsocial_prem_sick_units);
		var unsocial_prem_family_units = Number(response.unsocial_prem_family_units);
		var uns_ber_units = Number(response.uns_ber_units);
		var uns_comp_units = Number(response.uns_comp_units);
		var overtime1_units = Number(response.overtime1_units);
		var overtime2_units = Number(response.overtime2_units);
		var enhanced_holiday_units = Number(response.enhanced_holiday_units);
		var holiday_units = Number(response.holiday_units);
		var sick_units = Number(response.sick_units);
		var family_units =Number(response.family_units);
		var ber_units =Number(response.ber_units);
		var comp_units =Number(response.comp_units);
		var bhol_units = Number(response.bhol_units);
		
		paymentsUnitsDiv.innerHTML = basicHoursUnits.toFixed(2);
		if (unsocial_prem>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_units.toFixed(2);}
		if (unsocial_prem_hol>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_hol_units.toFixed(2);}
		if (unsocial_prem_sick>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_sick_units.toFixed(2);}
		if (unsocial_prem_family>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_family_units.toFixed(2);}
		if (unsocial_prem_bereavement>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_ber_units.toFixed(2);}
		if (unsocial_prem_compassionate>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_comp_units.toFixed(2);}
		if (OT1Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime1_units.toFixed(2);}
		if (OT2Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime2_units.toFixed(2);}
		if (enhancedHolidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+enhanced_holiday_units.toFixed(2);}
		if (holidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+holiday_units.toFixed(2);}
		if (saturdayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+saturdayHours.toFixed(2);}
		if (sundayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sundayHours.toFixed(2);}
		if (sicknessPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sick_units.toFixed(2);}
		if (familyPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+family_units.toFixed(2);}
		if (bereavementPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+ber_units.toFixed(2);}
		if (compassionatePay>0) {paymentsUnitsDiv.innerHTML += '<br>'+comp_units.toFixed(2);}
		if (bankHolidayHoursPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+bhol_units.toFixed(2);}
		if (bankHolidayClockInBonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (payBack>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (pieceWork>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (SSP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (SPP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (SAP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (salary>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (bonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (commissions>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (additionalPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (additionalPayment2>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (additionalPayment3>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (christmasSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (summerSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
		if (pensionAmount>0 && pensionBeforeTax === 1){paymentsUnitsDiv.innerHTML += '<br>-';}
		
		//rate div
		var paymentsRateDiv = document.getElementById("paymentsRateDiv");
		var hourlyRate = Number(response.hourlyRate);
		var unsocial_prem_rate = Number(response.unsocial_prem_rate);
		var overtime1_rate = Number(response.overtime1_rate);
		var overtime2_rate = Number(response.overtime2_rate);
		var enhancedHolidayRate = Number(response.enhancedHolidayRate);
		
		var part_sick = Number(response.part_sick);
		var part_pater = Number(response.part_pater);
		var part_ber = Number(response.part_ber);
		var part_comp = Number(response.part_comp);		

		
		paymentsRateDiv.innerHTML = hourlyRate.toFixed(4);
		if (unsocial_prem>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
		if (unsocial_prem_hol>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
		if (unsocial_prem_sick>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_sick).toFixed(4);}
		if (unsocial_prem_family>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_pater).toFixed(4);}
		if (unsocial_prem_bereavement>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_ber).toFixed(4);}
		if (unsocial_prem_compassionate>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_comp).toFixed(4);}
		if (OT1Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime1_rate.toFixed(4);}
		if (OT2Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime2_rate.toFixed(4);}
		if (enhancedHolidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+enhancedHolidayRate;}
		if (holidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+hourlyRate.toFixed(4);}
		if (saturdayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+saturdayExtraRate.toFixed(4);}
		if (sundayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+sundayExtraRate.toFixed(4);}
		if (sicknessPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_sick).toFixed(4);}
		if (familyPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_pater).toFixed(4);}
		if (bereavementPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_ber).toFixed(4);}
		if (compassionatePay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_comp).toFixed(4);}
		if (bankHolidayHoursPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*(bHolPayTimes-1)).toFixed(4);}
		if (bankHolidayClockInBonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (payBack>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (pieceWork>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (SSP>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (SPP>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (SAP>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (salary>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (bonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (commissions>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (additionalPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (additionalPayment2>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (additionalPayment3>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (christmasSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if (summerSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
		if ((pensionAmount>0) && (pensionBeforeTax === 1)){paymentsRateDiv.innerHTML += '<br> '+pensionRate.toFixed(2)+'%';}
		
		//total gross payments
		var totalGrossPaymentsAmountDiv = document.getElementById("totalGrossPaymentsAmount");
		var totalGrossPaymentsAmountValue = Number(response.totalGrossPayments);
		totalGrossPaymentsAmountDiv.innerHTML = totalGrossPaymentsAmountValue.toFixed(2);
		
		//deductions amount
		var deductionsAmountDiv = document.getElementById("deductionsAmountDiv");
		var taxAmount = Number(response.taxAmount);
		var NIAmount = Number(response.NIAmount);
		var unionDeduction = Number(response.unionDeduction);
		var christmasSavingsDeduction = Number(response.christmasSavingsDeduction);
		var otherDeduction = Number(response.otherDeduction);
		var otherDeductionName = response.otherDeductionName;
		var otherDeduction2 = Number(response.otherDeduction2);
		var otherDeduction2Name = response.otherDeduction2Name;
		var otherDeduction3 = Number(response.otherDeduction3);
		var otherDeduction3Name = response.otherDeduction3Name;
		var companyLoan = Number(response.companyLoan);	
		var studentLoanDeduction = Number(response.studentLoanDeduction);
		var summerSavingsDeduction = Number(response.summerSavingsDeduction);
		
		////////////sutavrkome mygtukus kaledu ir vasaros santaupoms
		var payChristmasSavings = document.getElementById("payChristmasSavings");
		var paySummerSavings = document.getElementById("paySummerSavings");
		var paySavingsDiv = document.getElementById("paySavingsDiv");
		var tableBottom = document.getElementById("tableBottom");
		var generateButton = document.getElementById("form");
		
		var summerSavingsPaymentCollected = response.summerSavingsPaymentCollected;
		var christmasSavingsPaymentCollected = response.christmasSavingsPaymentCollected;
		var paySummerSavingsCheckRes = response.paySummerSavingsCheck;
		var payChristmasSavingsCheckRes = response.payChristmasSavingsCheck;
		var submitSuccessMain =document.getElementById("submitSuccessMain");
		var calendar = document.getElementById("calendar");
		
		//parodome arba paslepiame paysavings div
		if (summerSavingsPaymentCollected > 0 || christmasSavingsPaymentCollected >0 || payChristmasSavingsCheckRes == "true"|| paySummerSavingsCheckRes=="true"){
			paySavingsDiv.removeAttribute("class");
			paySavingsDiv.setAttribute("class", "displayBlock");
			tableBottom.style.marginTop = "30px";
			calendar.style.marginTop = "65px";
			//submitSuccessMain.style.marginTop = "5px";
		}
		else {
			paySavingsDiv.setAttribute("class", "nodisplay");
			tableBottom.style.marginTop = "7px";
			calendar.style.marginTop = "40px";
			//submitSuccessMain.style.marginTop = "0px";
		}
		
		//1 rodome abudu mygtukus
		if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "false")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//2 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0 && payChristmasSavingsCheckRes == "false")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//3 rodome summer savings mygtuka
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
		{
			paySummerSavings.style.display = "initial";
			paySummerSavings.style.left = "0"
			payChristmasSavings.style.display = "none";
		}
		//4 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//5 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//6 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";				
			paySummerSavings.style.left = "180px"
		}
		//7 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//8 rodome summer savings mygtuka
		else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
		{
			paySummerSavings.style.display = "initial";
			paySummerSavings.style.left = "0"
			payChristmasSavings.style.display = "none";
		}
		//9 rodome christmas savings mygtuka
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "false")
		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.left = "180px"
		}
		//10 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0 && payChristmasSavingsCheckRes == "false")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//11 rodome summer savings mygtuka
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
		{
			paySummerSavings.style.display = "initial";
			paySummerSavings.style.left = "0"
			payChristmasSavings.style.display = "none";
		}
		//12 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//13 rodome christmas savings mygtuka
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
		}
		//14 rodome abudu mygtukus
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
		{
			payChristmasSavings.style.display = "initial";
			paySummerSavings.style.display = "initial";					
			paySummerSavings.style.left = "180px"
		}
		//15 rodome christmas savings mygtuka
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "initial";
		}
		//16 paslepiame abudu mygtukus
		else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "none";
		}
		// paslepiame abudu mygtukus
		else 
		{
			paySummerSavings.style.display = "none";
			payChristmasSavings.style.display = "none";
		}

		var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
		
		if(payChristmasSavingsCheckRes == "true")
			{
			document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
			}
		else if (payChristmasSavingsCheckRes == "false")
			{
			document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
			}
		else{
			alert('Something wrong with Christmas payout checkbox!');
			}
			
		if(paySummerSavingsCheckRes == "true")
			{
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
			}
		else if (paySummerSavingsCheckRes == "false")
			{
			document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
			}
		else{
			alert('Something wrong with Summer payout checkbox!');
			}
	
		deductionsAmountDiv.innerHTML = taxAmount.toFixed(2);
		deductionsAmountDiv.innerHTML += '<br>'+NIAmount.toFixed(2);
		if (pensionAmount>0  && pensionBeforeTax === 0){deductionsAmountDiv.innerHTML += '<br>'+pensionAmount.toFixed(2);}
		if (unionDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+unionDeduction.toFixed(2);}
		if (christmasSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+christmasSavingsDeduction.toFixed(2);}
		if (summerSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+summerSavingsDeduction.toFixed(2);}
		if (otherDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction.toFixed(2);}
		if (otherDeduction2>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction2.toFixed(2);}
		if (otherDeduction3>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction3.toFixed(2);}
		if (companyLoan>0){deductionsAmountDiv.innerHTML += '<br>'+companyLoan.toFixed(2);}
		if (studentLoanDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+studentLoanDeduction.toFixed(2);}
		
		//deductions names
		var deductionsNamesDiv = document.getElementById("deductionsNamesDiv");
		deductionsNamesDiv.innerHTML = 'TAX';
		deductionsNamesDiv.innerHTML += '<br>National Insurance';
		if (pensionAmount>0  && pensionBeforeTax === 0)deductionsNamesDiv.innerHTML += '<br>Pension '+pensionRate.toFixed(2)+'%';
		if (unionDeduction>0)deductionsNamesDiv.innerHTML += '<br>Union';
		if (christmasSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Christmas sav.';
		if (summerSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Summer sav.';
		if (otherDeduction>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeductionName;
		if (otherDeduction2>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction2Name;
		if (otherDeduction3>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction3Name;
		if (companyLoan>0)deductionsNamesDiv.innerHTML += '<br>Loan Deduction';
		if (studentLoanDeduction>0)deductionsNamesDiv.innerHTML += '<br>Student Loan';
		
		//total deductions
		var totalDeductionsDiv = document.getElementById("totalDeductionsAmount");
		var totalDeductions = Number(response.totalDeductions);
		totalDeductionsDiv.innerHTML = totalDeductions.toFixed(2);
		
		//net Pay
		var netPayAmountDiv = document.getElementById("netPayAmount");
		var netPay = Number(response.netPay);
		netPayAmountDiv.innerHTML = netPay.toFixed(2);
		
		//year to date amounts
		var yearToDateAmount = document.getElementById("yearToDateAmount");
		
		var taxSum = Number(response.taxSum);
		var NISum = Number(response.NISum);
		var union_deSum = Number(response.union_deSum);
		var pensionSum = Number(response.pensionSum);
		var chris_savSum = Number(response.chris_savSum);
		var summer_savSum = Number(response.summer_savSum);
		var other_de = Number(response.other_de);
		var add_deSum2 = Number(response.add_deSum2);
		var add_deSum3 = Number(response.add_deSum3);
		var netPaySum = Number(response.netPaySum);
		var gross_paySum = Number(response.gross_paySum);
		var pensionEmpSum = Number(response.pensionEmpSum);
		var companyLoanSum = Number(response.companyLoanSum);
		var studentLoanDeductionSum = Number(response.studentLoanDeductionSum);

		
		yearToDateAmount.innerHTML = taxSum.toFixed(2)+' £<br>'+NISum.toFixed(2)+' £<hr>';
		if (union_deSum>0){yearToDateAmount.innerHTML+= union_deSum.toFixed(2)+' £<br>';}
		if (companyLoanSum >0){yearToDateAmount.innerHTML+= companyLoanSum.toFixed(2)+' £<br>';}
		if (studentLoanDeductionSum >0){yearToDateAmount.innerHTML+= studentLoanDeductionSum.toFixed(2)+' £<br>';}
		if (christmasSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= chris_savSum.toFixed(2)+' £<br>';}
		if (christmasSavingsPaymentCollected>chris_savSum) {yearToDateAmount.innerHTML+= christmasSavingsPaymentCollected.toFixed(2)+' £<br>';}
		if (summerSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= summer_savSum.toFixed(2)+' £<br>';}
		if (summerSavingsPaymentCollected>summer_savSum) {yearToDateAmount.innerHTML+= summerSavingsPaymentCollected.toFixed(2)+'<br>';}
		
		if (other_de>0) {yearToDateAmount.innerHTML+= other_de.toFixed(2)+' £<br>';}
		if (add_deSum2>0) {yearToDateAmount.innerHTML+= add_deSum2.toFixed(2)+' £<br>';}
		if (add_deSum3>0) {yearToDateAmount.innerHTML+= add_deSum3.toFixed(2)+' £<br>';}
		if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || chris_savSum>0 || christmasSavingsPaymentCollected>chris_savSum||other_de>0||summerSavingsPaymentCollected>summer_savSum||add_deSum2>0||add_deSum3>0){yearToDateAmount.innerHTML+= '<hr>';}
		if (pensionSum>0) {yearToDateAmount.innerHTML+= pensionSum.toFixed(2)+' £<br>';}
		if (pensionEmpSum >0) {yearToDateAmount.innerHTML+= pensionEmpSum.toFixed(2) +' £<br>';}
		var totalPension = pensionSum + pensionEmpSum;
		if (totalPension>0){yearToDateAmount.innerHTML+= totalPension.toFixed(2)+' £<hr>';}
		
		yearToDateAmount.innerHTML+= netPaySum.toFixed(2)+' £<br>';
		yearToDateAmount.innerHTML+= '<b>'+gross_paySum.toFixed(2)+' £</b>';
		
		//year to date names
		var yearToDateNames = document.getElementById("yearToDateNames");
		yearToDateNames.innerHTML = 'Tax<br>National Insurance<hr>' ;
		if (union_deSum>0){yearToDateNames.innerHTML+= 'Union<br>';}
		if (companyLoanSum>0){yearToDateNames.innerHTML+= 'Loan Deduction<br>';}
		if (studentLoanDeductionSum>0){yearToDateNames.innerHTML+= 'Student Loan<br>';}
		if (christmasSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Christmas Savings Deductions<br>';}
		if (christmasSavingsPaymentCollected>chris_savSum){yearToDateNames.innerHTML+= 'Christmas Savings Total Ded.<br>';}
		if (summerSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Summer Savings Deductions<br>';}
		if (summerSavingsPaymentCollected>summer_savSum){yearToDateNames.innerHTML+= 'Summer Savings Total Ded.<br>';}
		
		if (other_de>0){yearToDateNames.innerHTML+= otherDeductionName+'<br>';}
		if (add_deSum2>0){yearToDateNames.innerHTML+= otherDeduction2Name+'<br>';}
		if (add_deSum3>0){yearToDateNames.innerHTML+= otherDeduction3Name+'<br>';}
		if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || christmasSavingsPaymentCollected>0||other_de>0||
		summerSavingsPaymentCollected>summer_savSum||add_deSum2>0||add_deSum3>0){yearToDateNames.innerHTML+= '<hr>';}
		if (pensionSum>0){yearToDateNames.innerHTML+= 'Employee Pension<br>';}
		if (pensionEmpSum>0){yearToDateNames.innerHTML+= 'Employer Pension<br>';}
		if (totalPension>0){yearToDateNames.innerHTML+= 'Total Pension<hr>';}
		
		yearToDateNames.innerHTML+= 'Total Net Pay<br>';
		yearToDateNames.innerHTML+= 'Total Gross Pay<br>';
		
		
		//-------Percentage payments Value--------------------//
		var holidaysPercentage = response.holidaysPercentage;
		var bankHolidayPercentge = response.bankHolidayPercentge;
		var sicknessPercentage  = response.sicknessPercentage;
		var parentalPercentage  = response.parentalPercentage;
		var overtimePercentage = response.overtimePercentage;
		var otherPercentage = response.otherPercentage;
		var basicPaymentsPercentage = response.basicPaymentsPercentage;
				
		//percentage amounts
		var yearToDatePercentageAmount = document.getElementById("yearToDatePercentageAmount");
		yearToDatePercentageAmount.innerHTML= basicPaymentsPercentage.toFixed(2)+' %<br>';
		if (holidaysPercentage>0){yearToDatePercentageAmount.innerHTML+= holidaysPercentage.toFixed(2)+' %<br>';}
		if (sicknessPercentage>0){yearToDatePercentageAmount.innerHTML+= sicknessPercentage.toFixed(2)+' %<br>';}
		if (overtimePercentage>0){yearToDatePercentageAmount.innerHTML+= overtimePercentage.toFixed(2)+' %<br>';}
		if (parentalPercentage>0){yearToDatePercentageAmount.innerHTML+= parentalPercentage.toFixed(2)+' %<br>';}
		if (otherPercentage>0){yearToDatePercentageAmount.innerHTML+= otherPercentage.toFixed(2)+' %<br>';}
		if (bankHolidayPercentge>0){yearToDatePercentageAmount.innerHTML+= bankHolidayPercentge.toFixed(2)+' %<br>';}
		
		//percentage amounts hidden
		var yearToDatePercentageAmountHid = document.getElementById("yearToDatePercentageAmountHid");
		yearToDatePercentageAmountHid.innerHTML= 'Premium<br>';
		if (holidaysPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
		if (sicknessPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
		if (overtimePercentage>0){yearToDatePercentageAmountHid.innerHTML+='Premium<br>';}
		if (parentalPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
		if (otherPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
		if (bankHolidayPercentge>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
		
		// percentage names
		var yearToDatePercentageNames = document.getElementById("yearToDatePercentageNames");
		yearToDatePercentageNames.innerHTML= 'Basic Pay<br>';
		if (holidaysPercentage>0){yearToDatePercentageNames.innerHTML+= 'Holiday Payments<br>';}
		if (sicknessPercentage>0){yearToDatePercentageNames.innerHTML+= 'Sickness Payments<br>';}
		if (overtimePercentage>0){yearToDatePercentageNames.innerHTML+= 'Overtime Payments<br>';}
		if (parentalPercentage>0){yearToDatePercentageNames.innerHTML+= 'Paternity Payments<br>';}
		if (otherPercentage>0){yearToDatePercentageNames.innerHTML+= 'Other Payments<br>';}
		if (bankHolidayPercentge>0){yearToDatePercentageNames.innerHTML+= 'Bank Holiday Payments<br>';}
		
		//holiday table
		var holidayStart = response.holidayStart;
		var holidayEnd = response.holidayEnd;
		var currentDate = response.currentDate;
		var totalHolidaysUsed = response.totalHolidaysUsed;
		var totalHolidaysBooked = response.totalHolidaysBooked;
		var holidaysNotUsed = response.holidaysNotUsed;
		var nextFullHoliday = response.nextFullHoliday;
		var daysSinceLastHoliday = response.daysSinceLastHoliday;
		var holidaysEarned = response.holidaysEarned;

		var holidayStatisticsAmount = document.getElementById("holidayStatisticsAmount");

		holidayStatisticsAmount.innerHTML= totalHolidaysUsed;
		if (totalHolidaysUsed==1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
		else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
			
		if (totalHolidaysBooked>0)
		{
			holidayStatisticsAmount.innerHTML+= totalHolidaysBooked;
			if (totalHolidaysBooked<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
			else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (holidaysNotUsed>0)
		{
			holidayStatisticsAmount.innerHTML+= holidaysNotUsed;
			if (holidaysNotUsed<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
			else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (holidaysEarned>0)
		{
			holidayStatisticsAmount.innerHTML+= holidaysEarned;
			if (holidaysEarned<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
			else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (nextFullHoliday === "Holiday!")
		{
			holidayStatisticsAmount.innerHTML+= '<b>'+nextFullHoliday+'</b><br>';
		}	
		else if (nextFullHoliday>0)
		{
			holidayStatisticsAmount.innerHTML+= nextFullHoliday;
			if (nextFullHoliday<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
			else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
		}
		
		if (daysSinceLastHoliday === "Holiday!")
		{
			holidayStatisticsAmount.innerHTML+='<b>'+ daysSinceLastHoliday+'</b><br>';
		}		
		else if (daysSinceLastHoliday>0)
		{
			holidayStatisticsAmount.innerHTML+= daysSinceLastHoliday;
			if (daysSinceLastHoliday<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
			else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
		}

		var holidayStatisticsAmountHid = document.getElementById("holidayStatisticsAmountHid");
		holidayStatisticsAmountHid.innerHTML= 'Premium<br>';
		if (totalHolidaysBooked>0){holidayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (holidaysNotUsed>0){holidayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (holidaysEarned>0){holidayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (nextFullHoliday>0  || nextFullHoliday === "Holiday!"){holidayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysSinceLastHoliday>0 || daysSinceLastHoliday === "Holiday!"){holidayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		
		var holidayStatisticsNames = document.getElementById("holidayStatisticsNames");
		holidayStatisticsNames.innerHTML= 'Holidays Used:<br>';
		if (totalHolidaysBooked>0){holidayStatisticsNames.innerHTML+= 'Holidays Booked:<br>';}
		if (holidaysNotUsed>0){holidayStatisticsNames.innerHTML+= 'Holidays Available:<br>';}
		if (holidaysEarned>0){holidayStatisticsNames.innerHTML+= 'Holidays Earned:<br>';}
		if (nextFullHoliday>0 || nextFullHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Till Next Holiday:<br>';}
		if (daysSinceLastHoliday>0  || daysSinceLastHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Since Last Holiday:<br>';}
				
		//last 13 weeks totals
		var yearToDateLast12WeeksAmount = document.getElementById("yearToDateLast12WeeksAmount");
		var taxSumLast12Weeks = Number(response.taxSumLast12Weeks)/13;
		var NISumLast12Weeks = Number(response.NISumLast12Weeks)/13;
		var union_deSumLast12Weeks = Number(response.union_deSumLast12Weeks)/13;
		var pensionSumLast12Weeks = Number(response.pensionSumLast12Weeks)/13;
		var chris_savSumLast12Weeks = Number(response.chris_savSumLast12Weeks)/13;
		var summer_savSumLast12Weeks = Number(response.summer_savSumLast12Weeks)/13;
		var other_deLast12Weeks = Number(response.other_deLast12Weeks)/13;
		var add_deSum2Last12Weeks = Number(response.add_deSum2Last12Weeks)/13;
		var add_deSum3Last12Weeks = Number(response.add_deSum3Last12Weeks)/13;
		var netPaySumLast12Weeks = Number(response.netPaySumLast12Weeks)/13;
		var gross_paySumLast12Weeks = Number(response.gross_paySumLast12Weeks)/13;
		var pensionEmpSumLast12Weeks = Number(response.pensionEmpSumLast12Weeks)/13;
		var companyLoanSumLast12Weeks = Number(response.companyLoanSumLast12Weeks)/13;
		var studentLoanDeductionSumLast12Weeks = Number(response.studentLoanDeductionSumLast12Weeks)/13;
		
		//last 13 weeks amounts
		yearToDateLast12WeeksAmount.innerHTML = taxSumLast12Weeks.toFixed(2)+' £<br>'+NISumLast12Weeks.toFixed(2)+' £<hr>';
		if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= union_deSumLast12Weeks.toFixed(2)+' £<br>';}
		if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= companyLoanSumLast12Weeks.toFixed(2)+' £<br>';}
		if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= studentLoanDeductionSumLast12Weeks.toFixed(2)+' £<br>';}
		if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= chris_savSumLast12Weeks.toFixed(2)+' £<br>';}
		if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= summer_savSumLast12Weeks.toFixed(2)+' £<br>';}
		
		if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= other_deLast12Weeks.toFixed(2)+' £<br>';}
		if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum2Last12Weeks.toFixed(2)+' £<br>';}
		if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum3Last12Weeks.toFixed(2)+' £<br>';}
		if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 || chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= '<hr>';}
		if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= pensionSumLast12Weeks.toFixed(2)+' £<br>';}
		if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmount.innerHTML+= pensionEmpSumLast12Weeks.toFixed(2) +' £<br>';}
		var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
		if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= totalPensionLast12Weeks.toFixed(2)+' £<hr>';}
		
		yearToDateLast12WeeksAmount.innerHTML+= netPaySumLast12Weeks.toFixed(2)+' £<br>';
		yearToDateLast12WeeksAmount.innerHTML+= '<b>'+gross_paySumLast12Weeks.toFixed(2)+' £</b>';
		
		//last 13 weeks amounts
		var yearToDateLast12WeeksAmountHid = document.getElementById("yearToDateLast12WeeksAmountHid");
		yearToDateLast12WeeksAmountHid.innerHTML = 'Premium<br>Premium<hr>';
		if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		
		if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 || chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= '<hr>';}
		if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
		var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
		if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<hr>';}
		
		yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
		yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
		
		//last 13 weeks names
		var yearToDateLast12WeeksNames = document.getElementById("yearToDateLast12WeeksNames");
		yearToDateLast12WeeksNames.innerHTML = 'Tax<br> National Insurance<hr>' ;
		if (union_deSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Union <br>';}
		if (companyLoanSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Loan Deduction <br>';}
		if (studentLoanDeductionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Student Loan <br>';}
		if (chris_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Christmas Savings Deductions <br>';}
		if (summer_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Summer Savings Deductions<br>';}
		
		if (other_deLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeductionName+'<br>';}
		if (add_deSum2Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction2Name+'<br>';}
		if (add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction3Name+'<br>';}
		if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
		summer_savSumLast12Weeks>0||other_deLast12Weeks>0||summer_savSumLast12Weeks>0 ||add_deSum2Last12Weeks>0||
		add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= '<hr>';}
		if (pensionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employee Pension<br>';}
		if (pensionEmpSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employer Pension<br>';}
		if (totalPensionLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Pension <hr>';}
		
		yearToDateLast12WeeksNames.innerHTML+= 'Net Pay<br>';
		yearToDateLast12WeeksNames.innerHTML+= 'Gross Pay<br>';
		
		
		//year to date II table totals
		var basicPaySum = Number(response.basicPaySum);
		var basicHoursSum = Number(response.basicHoursSum);
		var ot1_paySum = Number(response.ot1_paySum);
		var ot1_unitsSum = Number(response.ot1_unitsSum);
		var ot2_paySum = Number(response.ot2_paySum);
		var ot2_unitsSum = Number(response.ot2_unitsSum);
		var hol_unitsSum = Number(response.hol_unitsSum);
		var hol_paySum = Number(response.hol_paySum);
		var enhol_unitsSum = Number(response.enhol_unitsSum);
		var enhol_paySum = Number(response.enhol_paySum);
		var bhol_unitsSum = Number(response.bhol_unitsSum);
		var bhol_paySum = Number(response.bhol_paySum);
		var bhol_bonusSum = Number(response.bhol_bonusSum);
		var sick_paySum = Number(response.sick_paySum);
		var sick_unitsSum = Number(response.sick_unitsSum);
		var fam_unitsSum = Number(response.fam_unitsSum);
		var fam_paySum = Number(response.fam_paySum);
		var ber_unitsSum = Number(response.ber_unitsSum);
		var ber_paySum = Number(response.ber_paySum);
		var comp_unitsSum = Number(response.comp_unitsSum);
		var comp_paySum = Number(response.comp_paySum);
		var uns_premSum = Number(response.uns_premSum);
		var uns_prem_unSum = Number(response.uns_prem_unSum);
		var uns_holSum = Number(response.uns_holSum);
		var uns_hol_unSum = Number(response.uns_hol_unSum);
		var uns_sickSum = Number(response.uns_sickSum);
		var uns_sick_unSum = Number(response.uns_sick_unSum);
		var uns_familySum = Number(response.uns_familySum);
		var uns_family_unSum = Number(response.uns_family_unSum);
		var uns_berSum = Number(response.uns_berSum);
		var uns_ber_unSum = Number(response.uns_ber_unSum);
		var uns_compSum = Number(response.uns_compSum);
		var uns_comp_unSum = Number(response.uns_comp_unSum);
		var SPP_Sum = Number(response.SPP_Sum);
		var SSP_Sum = Number(response.SSP_Sum);
		
		var totalHours = Number(response.totalHours); //cia visos valandos praleistos darbe iskaitant virsvalandzius ir unpaid breakus
		var totalPaidHours = ot1_unitsSum + ot2_unitsSum + basicHoursSum;
		var unpaidBreaksLength = totalHours - totalPaidHours;
		var pieceWorkSum = Number(response.pieceWorkSum);
		var paybackSum = Number(response.paybackSum);
		
		var add_paySum = Number(response.add_paySum);
		var add_pay2Sum = Number(response.add_pay2Sum);
		var add_pay3Sum = Number(response.add_pay3Sum);
		
		var saturdayExtraPaySum = Number(response.saturdayExtraPaySum);
		var sundayExtraPaySum = Number(response.sundayExtraPaySum);
		var saturdayHoursSum = Number(response.saturdayHoursSum);
		var sundayHoursSum = Number(response.sundayHoursSum);
		var SAPSum = Number(response.SAPSum);
		var salarySum = Number(response.salarySum);
		var bonusSum = Number(response.bonusSum);
		var commissionsSum = Number(response.commissionsSum);

		
		//year to date II amounts
		var yearToDateAmountII = document.getElementById("yearToDateAmountII");
		yearToDateAmountII.innerHTML = basicPaySum.toFixed(2)+' £<br>';
		if (salarySum>0){yearToDateAmountII.innerHTML+= salarySum.toFixed(2)+' £<br>';}
		if (uns_premSum>0){yearToDateAmountII.innerHTML+= uns_premSum.toFixed(2)+' £<br>';}
		if (ot1_paySum>0){yearToDateAmountII.innerHTML+= ot1_paySum.toFixed(2)+' £<br>';}
		if (ot2_paySum>0){yearToDateAmountII.innerHTML+= ot2_paySum.toFixed(2)+' £<br>';}

		if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (hol_paySum>0){yearToDateAmountII.innerHTML+= hol_paySum.toFixed(2)+' £<br>';}
		if (enhol_paySum>0){yearToDateAmountII.innerHTML+= enhol_paySum.toFixed(2)+' £<br>';}
		if (uns_holSum>0){yearToDateAmountII.innerHTML+= uns_holSum.toFixed(2)+' £<br>';}
		if (bhol_paySum>0){yearToDateAmountII.innerHTML+= bhol_paySum.toFixed(2)+' £<br>';}
		if (bhol_bonusSum>0){yearToDateAmountII.innerHTML+= bhol_bonusSum.toFixed(2)+' £<br>';}
		
		if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= saturdayExtraPaySum.toFixed(2)+' £<br>';}
		if (sundayExtraPaySum>0){yearToDateAmountII.innerHTML+= sundayExtraPaySum.toFixed(2)+' £<br>';}
		
		if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (sick_paySum>0){yearToDateAmountII.innerHTML+= sick_paySum.toFixed(2)+' £<br>';}
		if (uns_sickSum>0){yearToDateAmountII.innerHTML+= uns_sickSum.toFixed(2)+' £<br>';}
		if (SSP_Sum>0){yearToDateAmountII.innerHTML+= SSP_Sum.toFixed(2)+' £<br>';}
		
		
		if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (fam_paySum>0){yearToDateAmountII.innerHTML+= fam_paySum.toFixed(2)+' £<br>';}
		if (uns_familySum>0){yearToDateAmountII.innerHTML+= uns_familySum.toFixed(2)+' £<br>';}
		if (SPP_Sum>0){yearToDateAmountII.innerHTML+= SPP_Sum.toFixed(2)+' £<br>';}
		if (SAPSum>0){yearToDateAmountII.innerHTML+= SAPSum.toFixed(2)+' £<br>';}
		
		if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (ber_paySum>0){yearToDateAmountII.innerHTML+= ber_paySum.toFixed(2)+' £<br>';}
		if (uns_berSum>0){yearToDateAmountII.innerHTML+= uns_berSum.toFixed(2)+' £<br>';}
		if (comp_paySum>0){yearToDateAmountII.innerHTML+= comp_paySum.toFixed(2)+' £<br>';}
		if (uns_compSum>0){yearToDateAmountII.innerHTML+= uns_compSum.toFixed(2)+' £<br>';}
		
		if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0|| paybackSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (pieceWorkSum>0){yearToDateAmountII.innerHTML += pieceWorkSum.toFixed(2)+' £<br>';}
		if (paybackSum>0){yearToDateAmountII.innerHTML += paybackSum.toFixed(2)+' £<br>';}
		if (bonusSum>0){yearToDateAmountII.innerHTML += bonusSum.toFixed(2)+' £<br>';}
		if (commissionsSum>0){yearToDateAmountII.innerHTML += commissionsSum.toFixed(2)+' £<br>';}
		
		if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
		if (add_paySum>0){yearToDateAmountII.innerHTML += add_paySum.toFixed(2)+' £<br>';}
		if (add_pay2Sum>0){yearToDateAmountII.innerHTML += add_pay2Sum.toFixed(2)+' £<br>';}
		if (add_pay3Sum>0){yearToDateAmountII.innerHTML += add_pay3Sum.toFixed(2)+' £<br>';}		
		
		//year to date amounts hidden
		var yearToDateAmountIIHid = document.getElementById("yearToDateAmountIIHid");
				
		yearToDateAmountIIHid.innerHTML = 'Premium<br>';
		if (salarySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_premSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (ot1_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (ot2_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}

		if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (hol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (enhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_holSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (bhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (bhol_bonusSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		
		if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (sundayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		
		if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (sick_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_sickSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		
		
		if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (fam_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_familySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (SPP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (SAPSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		
		if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (ber_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_berSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (comp_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		if (uns_compSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
		
		if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (pieceWorkSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		if (paybackSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		if (bonusSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		if (commissionsSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		
		if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
		if (add_paySum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		if (add_pay2Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
		if (add_pay3Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				
		//year to date II names
		var yearToDateNamesII = document.getElementById("yearToDateNamesII");
		
		yearToDateNamesII.innerHTML = 'Total Basic Pay<br>';
		if (salarySum>0){yearToDateNamesII.innerHTML+= 'Total Salary Pay<br>';}
		if (uns_premSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Basic Pay<br>';}
		if (ot1_paySum>0){yearToDateNamesII.innerHTML+= 'Total Overtime 1 Pay <br>';}
		if (ot2_paySum>0){yearToDateNamesII.innerHTML+= 'Total Overtime 2 Pay<br>';}

		if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (hol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Holiday Pay<br>';}
		if (enhol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Enhanced Holiday Pay<br>';}
		if (uns_holSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Holiday Pay<br>';}
		if (bhol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Bank Holiday Pay <br>';}
		if (bhol_bonusSum>0){yearToDateNamesII.innerHTML+= 'Total Bank Holiday Bonuses<br>';}
		
		if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Total Saturday Bonuses<br>';}
		if (sundayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Total Sunday Bonuses<br>';}
		
		if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (sick_paySum>0){yearToDateNamesII.innerHTML+= 'Total Sickness Pay<br>';}
		if (uns_sickSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Sickness Pay<br>';}
		if (SSP_Sum>0){yearToDateNamesII.innerHTML+= 'Total SSP Pay<br>';}
		
		
		if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (fam_paySum>0){yearToDateNamesII.innerHTML+= 'Total Parental Pay<br>';}
		if (uns_familySum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Parental Pay<br>';}
		if (SPP_Sum>0){yearToDateNamesII.innerHTML+= 'Total SPP Pay<br>';}
		if (SAPSum>0){yearToDateNamesII.innerHTML+= 'Total SAP Pay<br>';}
		
		if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (ber_paySum>0){yearToDateNamesII.innerHTML+= 'Total Bereavement Pay<br>';}
		if (uns_berSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Bereavement Pay<br>';}
		if (comp_paySum>0){yearToDateNamesII.innerHTML+= 'Total Compassionate Pay<br>';}
		if (uns_compSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Compass. Pay <br>';}
		
		if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (pieceWorkSum>0){yearToDateNamesII.innerHTML += 'Total Piece Work Pay<br>';}
		if (paybackSum>0){yearToDateNamesII.innerHTML += 'Total Back Pays<br>';}
		if (bonusSum>0){yearToDateNamesII.innerHTML += 'Total Bonuses Pay<br>';}
		if (commissionsSum>0){yearToDateNamesII.innerHTML += 'Total Commissions Pay<br>';}
		
		if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
		if (add_paySum>0){yearToDateNamesII.innerHTML += 'Add. Pay 1<br>';}
		if (add_pay2Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 2<br>';}
		if (add_pay3Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 3<br>';}
		

		//--------------------year to date totals hours div-----------------------------//
		var yearToDateAmountHours = document.getElementById("yearToDateAmountHours");
		yearToDateAmountHours.innerHTML= totalHours.toFixed(2)+' h<br>';
		if (totalPaidHours>0){yearToDateAmountHours.innerHTML+= totalPaidHours.toFixed(2)+' h<br>';}
		if (unpaidBreaksLength>0){yearToDateAmountHours.innerHTML+= unpaidBreaksLength.toFixed(2)+' h<br>';}
		//yearToDateAmountHours.innerHTML+= '<hr>';

		if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
		yearToDateAmountHours.innerHTML+= basicHoursSum.toFixed(2)+' h<br>';
		if (uns_prem_unSum>0){yearToDateAmountHours.innerHTML+= uns_prem_unSum.toFixed(2)+' h<br>';}		
		if (ot1_unitsSum>0){yearToDateAmountHours.innerHTML+= ot1_unitsSum.toFixed(2)+' h<br>';}
		if (ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= ot2_unitsSum.toFixed(2)+' h<br>';}
		
		if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
		if (hol_unitsSum>0){yearToDateAmountHours.innerHTML+= hol_unitsSum.toFixed(2)+' h<br>';}
		if (enhol_unitsSum>0){yearToDateAmountHours.innerHTML+= enhol_unitsSum.toFixed(2)+' h<br>';}
		if (uns_hol_unSum>0){yearToDateAmountHours.innerHTML+= uns_hol_unSum.toFixed(2)+' h<br>';}
		if (bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= bhol_unitsSum.toFixed(2)+' h<br>';}
		
		if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
		if (saturdayHoursSum>0){yearToDateAmountHours.innerHTML+= saturdayHoursSum.toFixed(2)+' h<br>';}
		if (sundayHoursSum>0){yearToDateAmountHours.innerHTML+= sundayHoursSum.toFixed(2)+' h<br>';}	
		
		if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
		if (uns_sick_unSum>0){yearToDateAmountHours.innerHTML+= uns_sick_unSum.toFixed(2)+' h<br>';}
		if (sick_unitsSum>0){yearToDateAmountHours.innerHTML+= sick_unitsSum.toFixed(2)+' h<br>';}
		if (uns_family_unSum>0){yearToDateAmountHours.innerHTML+= uns_family_unSum.toFixed(2)+' h<br>';}
		if (fam_unitsSum>0){yearToDateAmountHours.innerHTML+= fam_unitsSum.toFixed(2)+' h<br>';}
		
		if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
		if (uns_ber_unSum>0){yearToDateAmountHours.innerHTML+= uns_ber_unSum.toFixed(2)+' h<br>';}
		if (ber_unitsSum>0){yearToDateAmountHours.innerHTML+= ber_unitsSum.toFixed(2)+' h<br>';}
		if (uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= uns_comp_unSum.toFixed(2)+' h<br>';}
		if (comp_unitsSum>0){yearToDateAmountHours.innerHTML+= comp_unitsSum.toFixed(2)+' h<br>';}
				
		var yearToDateNamesHours = document.getElementById("yearToDateNamesHours");
		yearToDateNamesHours.innerHTML= 'Total Hours Spent At Work<br>';
		if (totalPaidHours>0){yearToDateNamesHours.innerHTML+= 'Total Paid Hours Spent At Work<br>';}
		if (unpaidBreaksLength>0){yearToDateNamesHours.innerHTML+= 'Total Unpaid Break Hours<br>';}
		
		if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
		yearToDateNamesHours.innerHTML+= 'Total Basic Hours<br>';
		if (uns_prem_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Basic Hours<br>';}
		if (ot1_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Overtime 1 Hours<br>';}
		if (ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Overtime 2 Hours<br>';}
		
		if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
		if (hol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Holiday Hours<br>';}
		if (enhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Enhanced Holiday Hours<br>';}
		if (uns_hol_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Holiday Hours<br>';}
		if (bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Bank Holiday Hours<br>';}
		
		if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
		if (saturdayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Total Saturday Hours<br>';}
		if (sundayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Total Sunday Hours<br>';}
		
		if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
		if (uns_sick_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Sickness Hours<br>';}
		if (sick_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Paid Sickness Hours<br>';}
		if (uns_family_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Parental Hours<br>';}
		if (fam_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Parental Leave Hours<br>';}
		
		if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
		if (uns_ber_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Bereav. Hours<br>';}
		if (ber_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Bereavement Leave Hours<br>';}
		if (uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Compass. Hours<br>';}
		if (comp_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Compassionate Hours<br>';}
		
		var yearToDateAmountHoursHid = document.getElementById("yearToDateAmountHoursHid");
		yearToDateAmountHoursHid.innerHTML= 'Premium<br>';
		if (totalPaidHours>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (unpaidBreaksLength>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		
		if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
		yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';
		if (uns_prem_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (ot1_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		
		if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
		if (hol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (enhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (uns_hol_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		
		if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
		if (saturdayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		
		if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
		if (uns_sick_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (sick_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (uns_family_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		
		if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
		if (uns_ber_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (ber_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
		if (comp_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}

		
		//--------------weeklyAverages div--------------------------//
		//petvarkome Tax numeri
		if(taxPeriodNumber>0 && taxPeriodNumber<=52)
		{
			taxPeriodNumberNew = taxPeriodNumber;
		}
		else if (taxPeriodNumber>52 && taxPeriodNumber<=104)
		{
			taxPeriodNumberNew = taxPeriodNumber -52;
		}
		else if (taxPeriodNumber>104 && taxPeriodNumber<=156)
		{
			taxPeriodNumberNew = taxPeriodNumber -104;
		}
		else{
			
		}
		
		var averageTax = taxSum / taxPeriodNumberNew;
		var averageNI = NISum / taxPeriodNumberNew;
		gross_paySum = Number(gross_paySum);
		var averageGrossPay = gross_paySum / taxPeriodNumberNew;
		netPaySum = Number(netPaySum);
		var averageNetPay = netPaySum / taxPeriodNumberNew;
		var averageBasicHoursPay = basicPaySum / taxPeriodNumberNew;
		var averageBasicHours = basicHoursSum / taxPeriodNumberNew ;
		var averageUnsocialPrem = uns_premSum / taxPeriodNumberNew;
		var averageUnsocialHours = uns_prem_unSum / taxPeriodNumberNew;
		var averageOvertimeHours = (ot1_unitsSum + ot2_unitsSum) / taxPeriodNumberNew; //sudeti overtime 1 ir overtime 2 hours
		var averageOvertimePay = (ot1_paySum + ot2_paySum) / taxPeriodNumberNew;; // sudeti overtime1 ir overtime 2 pay
		
		//weeklyAverages amounts
		var weeklyAveragesAmount = document.getElementById("weeklyAveragesAmount");
		weeklyAveragesAmount.innerHTML= averageTax.toFixed(2)+' £<br>';
		if (averageNI>0){weeklyAveragesAmount.innerHTML+= averageNI.toFixed(2)+' £<br>';}
		if (averageGrossPay>0){weeklyAveragesAmount.innerHTML+= averageGrossPay.toFixed(2)+' £<br>';}
		if (averageNetPay>0){weeklyAveragesAmount.innerHTML+= averageNetPay.toFixed(2)+' £<br>';}
		if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmount.innerHTML+= '<hr>';}
		
		if (averageBasicHoursPay>0){weeklyAveragesAmount.innerHTML+= averageBasicHoursPay.toFixed(2)+' £<br>';}
		if (averageBasicHours>0){weeklyAveragesAmount.innerHTML+= averageBasicHours.toFixed(2)+' h<br>';}
		if (averageUnsocialPrem>0){weeklyAveragesAmount.innerHTML+= averageUnsocialPrem.toFixed(2)+' £<br>';}
		if (averageUnsocialHours>0){weeklyAveragesAmount.innerHTML+= averageUnsocialHours.toFixed(2)+' h<br>';}
		if (averageOvertimePay>0){weeklyAveragesAmount.innerHTML+= averageOvertimePay.toFixed(2)+' £<br>';}
		if (averageOvertimeHours>0){weeklyAveragesAmount.innerHTML+= averageOvertimeHours.toFixed(2)+' h<br>';}
		
		//weeklyAverages amounts hidden
		var weeklyAveragesAmountHid = document.getElementById("weeklyAveragesAmountHid");
		weeklyAveragesAmountHid.innerHTML= 'Premium<br>';
		if (averageNI>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageGrossPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
		
		if (averageBasicHoursPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageBasicHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageUnsocialPrem>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageUnsocialHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageOvertimePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (averageOvertimeHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		
		//weeklyAverages names
		var weeklyAveragesNames = document.getElementById("weeklyAveragesNames");
		weeklyAveragesNames.innerHTML= 'Average Tax<br>';
		if (NISum>0){weeklyAveragesNames.innerHTML+= 'Average NI<br>';}
		if (averageGrossPay>0){weeklyAveragesNames.innerHTML+= 'Average Gross Pay<br>';}
		if (averageNetPay>0){weeklyAveragesNames.innerHTML+= 'Average Net Pay<br>';}
		if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesNames.innerHTML+= '<hr>';}
		
		if (averageBasicHoursPay>0){weeklyAveragesNames.innerHTML+= 'Average Basic Pay<br>';}
		if (averageBasicHours>0){weeklyAveragesNames.innerHTML+= 'Average Basic Hours<br>';}
		if (averageUnsocialPrem>0){weeklyAveragesNames.innerHTML+= 'Average Unsocial Basic Pay<br>';}
		if (averageUnsocialHours>0){weeklyAveragesNames.innerHTML+= 'Average Unsocial Basic Hours<br>';}
		if (averageOvertimePay>0){weeklyAveragesNames.innerHTML+= 'Average Overtime Pay<br>';}
		if (averageOvertimeHours>0){weeklyAveragesNames.innerHTML+= 'Average Overtime Hours<br>';}
		
		
		//-----------------days statistics-----------------------------//
		var daysNotSelected = Number(response.daySum0);
		var daysIn = Number(response.daySum1);
		var daysOff = Number(response.daySum2);
		var daysHoliday = Number(response.daySum3);
		var daysHalfInHalfHol = Number(response.daySum4);
		var daysUnpaidHoliday = Number(response.daySum5);
		var daysInSick = Number(response.daySum6);
		var daysSickness = Number(response.daySum7);
		var daysAbsence = Number(response.daySum8);
		var daysParental = Number(response.daySum9);
		var daysBereavement = Number(response.daySum10);
		var daysCompassionate = Number(response.daySum11);
		var daysSinceLastSick = response.daysSinceLastSick;	
		
		//days amounts
		var dayStatisticsAmount = document.getElementById("dayStatisticsAmount");
		
		dayStatisticsAmount.innerHTML= daysIn.toFixed(0);
		if (daysIn<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
		else{dayStatisticsAmount.innerHTML+= ' days<br>';}
			
		if (daysOff>0)
		{
			dayStatisticsAmount.innerHTML+= daysOff.toFixed(0);
			if (daysOff<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysHoliday>0)
		{
			dayStatisticsAmount.innerHTML+= daysHoliday.toFixed(0);
			if (daysHoliday<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysHalfInHalfHol>0)
		{
			dayStatisticsAmount.innerHTML+= daysHalfInHalfHol.toFixed(0);
			if (daysHalfInHalfHol<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysUnpaidHoliday>0)
		{
			dayStatisticsAmount.innerHTML+= daysUnpaidHoliday.toFixed(0);
			if (daysUnpaidHoliday<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
		if (daysInSick>0)
		{
			dayStatisticsAmount.innerHTML+= daysInSick.toFixed(0);
			if (daysInSick<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysSickness>0)
		{
			dayStatisticsAmount.innerHTML+= daysSickness.toFixed(0);
			if (daysSickness<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysAbsence>0)
		{
			dayStatisticsAmount.innerHTML+= daysAbsence.toFixed(0);
			if (daysAbsence<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysParental>0)
		{
			dayStatisticsAmount.innerHTML+= daysParental.toFixed(0);
			if (daysParental<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysBereavement>0)
		{
			dayStatisticsAmount.innerHTML+= daysBereavement.toFixed(0);
			if (daysBereavement<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysCompassionate>0)
		{
			dayStatisticsAmount.innerHTML+= daysCompassionate.toFixed(0);
			if (daysCompassionate<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		if (daysNotSelected>0){dayStatisticsAmount.innerHTML+= daysNotSelected.toFixed(0);
			if (daysNotSelected<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
		if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmount.innerHTML+= '<hr>';}
		if (daysSinceLastSick ==="Today")
		{
			dayStatisticsAmount.innerHTML+= '<b>'+daysSinceLastSick+'</b>';
		}
		else if (daysSinceLastSick>0)
		{
			dayStatisticsAmount.innerHTML+= daysSinceLastSick;
			if (daysSinceLastSick<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
			else{dayStatisticsAmount.innerHTML+= ' days<br>';}
		}
			
		//days amounts hidden
		var dayStatisticsAmountHid = document.getElementById("dayStatisticsAmountHid");
		dayStatisticsAmountHid.innerHTML= 'Premium<br>';
		if (daysOff>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysHalfInHalfHol>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysUnpaidHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysInSick>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysSickness>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysAbsence>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysParental>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysBereavement>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysCompassionate>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysNotSelected>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmountHid.innerHTML+= '<hr>';}
		if (daysSinceLastSick>0 || daysSinceLastSick==="Today"){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
		// days names
		var dayStatisticsNames = document.getElementById("dayStatisticsNames");
		dayStatisticsNames.innerHTML= 'Days In<br>';
		if (daysOff>0){dayStatisticsNames.innerHTML+= 'Days Off<br>';}
		if (daysHoliday>0){dayStatisticsNames.innerHTML+= 'Holidays<br>';}
		if (daysHalfInHalfHol>0){dayStatisticsNames.innerHTML+= 'Half Days In/Half Holidays<br>';}
		if (daysUnpaidHoliday>0){dayStatisticsNames.innerHTML+= 'Unpaid Holidays<br>';}
		if (daysInSick>0){dayStatisticsNames.innerHTML+= 'Days In/Sickness<br>';}
		if (daysSickness>0){dayStatisticsNames.innerHTML+= 'Days On Sick<br>';}
		if (daysAbsence>0){dayStatisticsNames.innerHTML+= 'Days On Absence<br>';}
		if (daysParental>0){dayStatisticsNames.innerHTML+= 'Parental Leave Days<br>';}
		if (daysBereavement>0){dayStatisticsNames.innerHTML+= 'Bereavement Leave Days<br>';}
		if (daysCompassionate>0){dayStatisticsNames.innerHTML+= 'Compassionate Leave Days<br>';}
		if (daysNotSelected>0){dayStatisticsNames.innerHTML+= 'Days Not Defined<br>';}
		if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsNames.innerHTML+= '<hr>';}
		if (daysSinceLastSick>0 || daysSinceLastSick === "Today"){dayStatisticsNames.innerHTML+= 'Days Since Last Sick<br>';}
		
		//-------average daily statistics--------------------//
		var dailyGrossPay = response.dailyGrossPay;
		var dailyNetPay = response.dailyNetPay;
		var dailytaxSum  = response.dailytaxSum;
		var dailyNISum  = response.dailyNISum;
		var dailyHoursAtWork = response.dailyHoursAtWork;
		var dailyPaidHours = response.dailyPaidHours;
		
		var dailyGrossPayAllDays = response.dailyGrossPayAllDays;
		var dailyNetPayAllDays = response.dailyNetPayAllDays;
		var dailytaxSumAllDays  = response.dailytaxSumAllDays;
		var dailyNISumAllDays  = response.dailyNISumAllDays;
		var dailyHoursAtWorkAllDays = response.dailyHoursAtWorkAllDays;
		var dailyPaidHoursAllDays = response.dailyPaidHoursAllDays;
		
		//daylaverages amounts
		var dailyAveragesAmount = document.getElementById("dailyAveragesAmount");
		dailyAveragesAmount.innerHTML= +dailyGrossPay.toFixed(2)+' £<br>';
		if (dailyNetPay>0){dailyAveragesAmount.innerHTML+= dailyNetPay.toFixed(2)+' £<br>';}
		if (dailytaxSum>0){dailyAveragesAmount.innerHTML+= dailytaxSum.toFixed(2)+' £<br>';}
		if (dailyNISum>0){dailyAveragesAmount.innerHTML+= dailyNISum.toFixed(2)+' £<br>';}
		if (dailyHoursAtWork>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWork.toFixed(2)+' h<br>';}
		if (dailyPaidHours>0){dailyAveragesAmount.innerHTML+= dailyPaidHours.toFixed(2)+' h<br>';}
		
		var dailyAveragesAmount = document.getElementById("dailyAveragesAmount");
		dailyAveragesAmount.innerHTML+= '<hr>'+dailyGrossPayAllDays.toFixed(2)+' £<br>';
		if (dailyNetPayAllDays>0){dailyAveragesAmount.innerHTML+= dailyNetPayAllDays.toFixed(2)+' £<br>';}
		if (dailytaxSumAllDays>0){dailyAveragesAmount.innerHTML+= dailytaxSumAllDays.toFixed(2)+' £<br>';}
		if (dailyNISumAllDays>0){dailyAveragesAmount.innerHTML+= dailyNISumAllDays.toFixed(2)+' £<br>';}
		if (dailyHoursAtWorkAllDays>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWorkAllDays.toFixed(2)+' h<br>';}
		if (dailyPaidHoursAllDays>0){dailyAveragesAmount.innerHTML+= dailyPaidHoursAllDays.toFixed(2)+' h<br>';}
		
		//daylaverages amounts hidden
		var dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
		dailyAveragesAmountHid.innerHTML= 'Premium<br>';
		if (dailyNetPay>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailytaxSum>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailyNISum>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
		if (dailyHoursAtWork>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailyPaidHours>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		
		var dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
		dailyAveragesAmountHid.innerHTML+= '<hr>Premium<br>';
		if (dailyNetPayAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailytaxSumAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailyNISumAllDays>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
		if (dailyHoursAtWorkAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (dailyPaidHoursAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		
		// daylyaverages names
		var dailyAveragesNames = document.getElementById("dailyAveragesNames");
		dailyAveragesNames.innerHTML= 'Average Gross Pay For Day In<br>';
		if (dailyNetPay>0){dailyAveragesNames.innerHTML+= 'Average Net Pay For Day In<br>';}
		if (dailytaxSum>0){dailyAveragesNames.innerHTML+= 'Average TAX For Day In<br>';}
		if (dailyNISum>0){dailyAveragesNames.innerHTML+= 'Average NI For Day In<br>';}
		if (dailyHoursAtWork>0){dailyAveragesNames.innerHTML+= 'Average Hours Worked Per Day<br>';}
		if (dailyPaidHours>0){dailyAveragesNames.innerHTML+= 'Average Paid Hours Per Day<br>';}
		
		var dailyAveragesNames = document.getElementById("dailyAveragesNames");
		dailyAveragesNames.innerHTML+= '<hr>Average Gross Pay For All Days<br>';
		if (dailyNetPayAllDays>0){dailyAveragesNames.innerHTML+= 'Average Net Pay For All Days<br>';}
		if (dailytaxSumAllDays>0){dailyAveragesNames.innerHTML+= 'Average TAX For All Days<br>';}
		if (dailyNISumAllDays>0){dailyAveragesNames.innerHTML+= 'Average NI For All Days<br>';}
		if (dailyHoursAtWorkAllDays>0){dailyAveragesNames.innerHTML+= 'Average Hours Worked All Days<br>';}
		if (dailyPaidHoursAllDays>0){dailyAveragesNames.innerHTML+= 'Average Paid Hours All Days<br>';}
		
		//-------average hourly statistics--------------------//
		var hourlyGrossPay = response.hourlyGrossPay;
		var hourlyNetPay = response.hourlyNetPay;
		var hourlytaxSum  = response.hourlytaxSum;
		var hourlyNISum  = response.hourlyNISum;
		
		var hourlyGrossPayTotalH = response.hourlyGrossPayTotalH;
		var hourlyNetPayTotalH = response.hourlyNetPayTotalH;
		var hourlytaxSumTotalH  = response.hourlytaxSumTotalH;
		var hourlyNISumTotalH  = response.hourlyNISumTotalH;
		
		var hourlyGrossPayAllH = response.hourlyGrossPayAllH;;
		var hourlyNetPayAllH = response.hourlyNetPayAllH;;
		var hourlytaxSumAllH  = response.hourlytaxSumAllH;;
		var hourlyNISumAllH  = response.hourlyNISumAllH;;

		
		//hourly averages amounts
		var hourlyAveragesAmount = document.getElementById("hourlyAveragesAmount");
		hourlyAveragesAmount.innerHTML= hourlyGrossPay.toFixed(2)+' £<br>';
		if (hourlyNetPay>0){hourlyAveragesAmount.innerHTML+= hourlyNetPay.toFixed(2)+' £<br>';}
		if (hourlytaxSum>0){hourlyAveragesAmount.innerHTML+= hourlytaxSum.toFixed(2)+' £<br>';}
		if (hourlyNISum>0){hourlyAveragesAmount.innerHTML+= hourlyNISum.toFixed(2)+' £<br>';}
		
		hourlyAveragesAmount.innerHTML+='<hr>';
		hourlyAveragesAmount.innerHTML+= hourlyGrossPayTotalH .toFixed(2)+' £<br>';
		if (hourlyNetPayTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayTotalH.toFixed(2)+' £<br>';}
		if (hourlytaxSumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumTotalH.toFixed(2)+' £<br>';}
		if (hourlyNISumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumTotalH.toFixed(2)+' £<br>';}
		
		hourlyAveragesAmount.innerHTML+='<hr>';
		hourlyAveragesAmount.innerHTML+= hourlyGrossPayAllH .toFixed(2)+' £<br>';
		if (hourlyNetPayAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayAllH.toFixed(2)+' £<br>';}
		if (hourlytaxSumAllH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumAllH.toFixed(2)+' £<br>';}
		if (hourlyNISumAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumAllH.toFixed(2)+' £<br>';}

		
		//hourly averages amounts hidden
		var hourlyAveragesAmountHid = document.getElementById("hourlyAveragesAmountHid");
		hourlyAveragesAmountHid.innerHTML= 'Premium<br>';
		if (hourlyNetPay>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlytaxSum>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlyNISum>0){hourlyAveragesAmountHid.innerHTML+='Premium<br>';}
		
		hourlyAveragesAmountHid.innerHTML+='<hr>';
		hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
		if (hourlyNetPayTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlytaxSumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlyNISumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}

		hourlyAveragesAmountHid.innerHTML+='<hr>';
		hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
		if (hourlyNetPayAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlytaxSumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		if (hourlyNISumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
		
		// hourly averages names
		var hourlyAveragesNames = document.getElementById("hourlyAveragesNames");
		hourlyAveragesNames.innerHTML= 'Paid Hours In Aver. Gross Pay<br>';
		if (hourlyNetPay>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average Net Pay<br>';}
		if (hourlytaxSum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average TAX <br>';}
		if (hourlyNISum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average NI<br>';}
		
		hourlyAveragesNames.innerHTML+='<hr>';
		hourlyAveragesNames.innerHTML+= 'All Hours In Average Gross Pay<br>';
		if (hourlyNetPayTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average Net Pay<br>';}
		if (hourlytaxSumTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average TAX<br>';}
		if (hourlyNISumTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average NI<br>';}
		
		hourlyAveragesNames.innerHTML+='<hr>';
		hourlyAveragesNames.innerHTML+= 'All Paid Hours Aver. Gross Pay<br>';
		if (hourlyNetPayAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average Net Pay<br>';}
		if (hourlytaxSumAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average TAX<br>';}
		if (hourlyNISumAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average NI<br>';}
		
		
		//show amounts if premium, hide if not
		var yearToDateAmountIIHid = document.getElementById("yearToDateAmountIIHid");
		var yearToDatePercentageAmountHid = document.getElementById("yearToDatePercentageAmountHid");
		var yearToDatePercentageAmount = document.getElementById("yearToDatePercentageAmount");
		var weeklyAveragesAmountHid = document.getElementById("weeklyAveragesAmountHid");
		var dayStatisticsAmountHid = document.getElementById("dayStatisticsAmountHid");
		var dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
		var yearToDateLast12WeeksAmountHid = document.getElementById("yearToDateLast12WeeksAmountHid");
		var holidayStatisticsAmountHid = document.getElementById("holidayStatisticsAmountHid");
		var hourlyAveragesAmountHid = document.getElementById("hourlyAveragesAmountHid");
		var yearToDateAmountHoursHid = document.getElementById("yearToDateAmountHoursHid");
		
		
		var paymentsPieChart = document.getElementById("paymentsPieChart");
		var deductionsPieChart = document.getElementById("deductionsPieChart");
		var yearToDatePieChart = document.getElementById("yearToDatePieChart");
		var holidayStatisticsPieChart = document.getElementById("holidayStatisticsPieChart");
		var dayStatisticsPieChart = document.getElementById("dayStatisticsPieChart");
		var las3MonthsPieChart = document.getElementById("las3MonthsPieChart");
		var weeklyAveragesPieChart = document.getElementById("weeklyAveragesPieChart");
		var dailyAveragesPieChart = document.getElementById("dailyAveragesPieChart");
		var hourlyAveragesPieChart = document.getElementById("hourlyAveragesPieChart");
		var columnChart = document.getElementById("columnChart");
		var columnChartPaidHours = document.getElementById("columnChartPaidHours");
		
		
		var paymentsPieChartNoPremium = document.getElementById("paymentsPieChartNoPremium");
		var deductionsPieChartNoPremium = document.getElementById("deductionsPieChartNoPremium");
		var yearToDatePieChartNoPremium = document.getElementById("yearToDatePieChartNoPremium");
		var holidayStatisticsPieChartNoPremium = document.getElementById("holidayStatisticsPieChartNoPremium");
		var yearToDatePercentagePieChartNoPremium = document.getElementById("yearToDatePercentagePieChartNoPremium");
		var yearToDateIIPieChartNoPremium = document.getElementById("yearToDateIIPieChartNoPremium");
		var yearToDateHoursPieChartNoPremium = document.getElementById("yearToDateHoursPieChartNoPremium");
		var dayStatisticsPieChartNoPremium = document.getElementById("dayStatisticsPieChartNoPremium");
		var las3MonthsPieChartNoPremium = document.getElementById("las3MonthsPieChartNoPremium");
		var weeklyAveragesPieChartNoPremium = document.getElementById("weeklyAveragesPieChartNoPremium");
		var dailyAveragesPieChartNoPremium = document.getElementById("dailyAveragesPieChartNoPremium");
		var hourlyAveragesPieChartNoPremium = document.getElementById("hourlyAveragesPieChartNoPremium");
		var columnChartNoPremium = document.getElementById("columnChartNoPremium");
		var columnChartPaidHoursNoPremium = document.getElementById("columnChartPaidHoursNoPremium");
		
		if (premium === 1){
			
			yearToDatePercentageAmount.style.visibility = "visible";
			yearToDatePercentageAmountHid.style.visibility = "hidden";
			
			yearToDateAmountII.style.visibility = "visible";
			yearToDateAmountIIHid.style.visibility = "hidden";
			
			weeklyAveragesAmount.style.visibility = "visible";
			weeklyAveragesAmountHid.style.visibility = "hidden";
			
			dayStatisticsAmount.style.visibility = "visible";
			dayStatisticsAmountHid.style.visibility = "hidden";
			
			dailyAveragesAmount.style.visibility = "visible";
			dailyAveragesAmountHid.style.visibility = "hidden";
			
			yearToDateLast12WeeksAmount.style.visibility = "visible";
			yearToDateLast12WeeksAmountHid.style.visibility = "hidden";
			
			holidayStatisticsAmount.style.visibility = "visible";
			holidayStatisticsAmountHid.style.visibility = "hidden";
			
			hourlyAveragesAmount.style.visibility = "visible";
			hourlyAveragesAmountHid.style.visibility = "hidden";
			
			yearToDateAmountHours.style.visibility = "visible";
			yearToDateAmountHoursHid.style.visibility = "hidden";
			
			paymentsPieChart.setAttribute("class", "chartStyle");
			deductionsPieChart.setAttribute("class", "chartStyle");
			yearToDatePieChart.setAttribute("class", "chartStyle");
			yearToDatePercentagePieChart.setAttribute("class", "chartStyle");
			yearToDateIIPieChart.setAttribute("class", "chartStyle");
			yearToDateHoursPieChart.setAttribute("class", "chartStyle");
			holidayStatisticsPieChart.setAttribute("class", "chartStyle");
			dayStatisticsPieChart.setAttribute("class", "chartStyle");
			las3MonthsPieChart.setAttribute("class", "chartStyle");
			weeklyAveragesPieChart.setAttribute("class", "chartStyle");
			dailyAveragesPieChart.setAttribute("class", "chartStyle");
			hourlyAveragesPieChart.setAttribute("class", "chartStyle");
			columnChart.setAttribute("class", "chartStyle");
			columnChartPaidHours.setAttribute("class", "chartStyle");
		}
		else{
			yearToDateAmountII.style.visibility = "hidden";
			yearToDateAmountIIHid.style.visibility = "visible";
			
			yearToDatePercentageAmount.visibility = "hidden";
			yearToDatePercentageAmountHid.visibility = "visible";
			
			weeklyAveragesAmount.style.visibility = "hidden";
			weeklyAveragesAmountHid.style.visibility = "visible";
			
			dayStatisticsAmount.style.visibility = "hidden";
			dayStatisticsAmountHid.style.visibility = "visible";
			
			dailyAveragesAmount.style.visibility = "hidden";
			dailyAveragesAmountHid.style.visibility = "visible";
			
			yearToDateLast12WeeksAmount.style.visibility = "hidden";
			yearToDateLast12WeeksAmountHid.style.visibility = "visible";
			
			holidayStatisticsAmount.style.visibility = "hidden";
			holidayStatisticsAmountHid.style.visibility = "visible";
			
			hourlyAveragesAmount.style.visibility = "hidden";
			hourlyAveragesAmountHid.style.visibility = "visible";
			
			yearToDateAmountHours.style.visibility = "hidden";
			yearToDateAmountHoursHid.style.visibility = "visible";
			
			
			paymentsPieChartNoPremium.setAttribute("class", "noPremium");
			deductionsPieChartNoPremium.setAttribute("class", "noPremium");
			yearToDatePieChartNoPremium.setAttribute("class", "noPremium");
			yearToDatePercentagePieChartNoPremium.setAttribute("class", "noPremium");
			yearToDateIIPieChartNoPremium.setAttribute("class", "noPremium");
			yearToDateHoursPieChartNoPremium.setAttribute("class", "noPremium");
			holidayStatisticsPieChartNoPremium.setAttribute("class", "noPremium");
			dayStatisticsPieChartNoPremium.setAttribute("class", "noPremium");
			las3MonthsPieChartNoPremium.setAttribute("class", "noPremium");
			weeklyAveragesPieChartNoPremium.setAttribute("class", "noPremium");
			dailyAveragesPieChartNoPremium.setAttribute("class", "noPremium");
			hourlyAveragesPieChartNoPremium.setAttribute("class", "noPremium");
			columnChartNoPremium.setAttribute("class", "noPremium");
			columnChartPaidHoursNoPremium.setAttribute("class", "noPremium");
			
		}
		
		
		for ( i = 0 ; i < 7 ; i++ )
		{
			//document.getElementById("panel").innerHTML = response.dayType[5];
			document.getElementById("dayType"+taxPeriodStart).options.selectedIndex = response.dayType[i]; //+21 del to, kad yr 21 fake num xml faile
			document.getElementById("startHours"+taxPeriodStart).options.selectedIndex = response.startHour[i];
			document.getElementById("startMinutes"+taxPeriodStart).options.selectedIndex = response.startMinute[i];
			document.getElementById("endHours"+taxPeriodStart).options.selectedIndex = response.endHour[i];
			document.getElementById("endMinutes"+taxPeriodStart).options.selectedIndex = response.endMinute[i];
			
			//SICKNESS button nustatymai
			var sicknessButtonValue = response.sickButton[i];
			
			if(sicknessButtonValue == "true")
			{
				document.getElementById("sicknessButton"+taxPeriodStart).setAttribute("checked", "checked")
			}
			else if (sicknessButtonValue == "false")
			{
				document.getElementById("sicknessButton"+taxPeriodStart).removeAttribute("checked");
			}
			else{
				alert('Something went wrong with the sick pay calculation!');
			}
			
			
			//FAMILY button nustatymai
			var familyLeaveButtonValue = response.familyLeaveButton[i];
			
			if(familyLeaveButtonValue == "true")
			{
				document.getElementById("familyLeaveButton"+taxPeriodStart).setAttribute("checked", "checked")
			}
			else if (familyLeaveButtonValue == "false")
			{
				document.getElementById("familyLeaveButton"+taxPeriodStart).removeAttribute("checked");
			}
			else{
				alert('Something went wrong with parental pay calculation!');
			}
			
			
			//Day in sicknes button nustatymai
			var dayInSickButtonValue = response.dayInSickButton[i];
			
			if(dayInSickButtonValue == "true")
			{
				document.getElementById("dayInSickButton"+taxPeriodStart).setAttribute("checked", "checked")
			}
			else if (dayInSickButtonValue == "false")
			{
				document.getElementById("dayInSickButton"+taxPeriodStart).removeAttribute("checked")
			}
			else{
				alert('Something went wrong with the day in/sick pay calculation!');
			}
			
			
			//Bereavement button nustatymai
			var bereveamentButtonValue = response.bereavementButton[i];
			
			if(bereveamentButtonValue == "true")
			{
				document.getElementById("bereavementButton"+taxPeriodStart).setAttribute("checked", "checked")
			}
			else if (bereveamentButtonValue == "false")
			{
				document.getElementById("bereavementButton"+taxPeriodStart).removeAttribute("checked");
			}
			else{
				alert('Something went wrong with the bereavement pay calculation!');
			}
			
				//COMPASSIONATE button nustatymai
			var compassionateButtonValue = response.compassionateButton[i];
			
			if(compassionateButtonValue == "true")
			{
				document.getElementById("compassionateButton"+taxPeriodStart).setAttribute("checked", "checked")
			}
			else if (compassionateButtonValue == "false")
			{
				document.getElementById("compassionateButton"+taxPeriodStart).removeAttribute("checked");
			}
			else{
				alert('Something went wrong with the compassionate pay calculation!');
			}
						
			//enhanced Holiday input nustatymai
			
			var enhancedHolidayButtonValue = response.enHolButton[i];
			if(enhancedHolidayButtonValue == "true")
			{
				document.getElementById("enhancedHolidayButton"+taxPeriodStart).setAttribute("checked", "checked");
			}
			else if (enhancedHolidayButtonValue == "false")
			{
				document.getElementById("enhancedHolidayButton"+taxPeriodStart).removeAttribute("checked");
			}
			else{
				alert('Something went wrong with enhanced holiday calculations!');
			}
			
			//note input vertes
			document.getElementById("noteInput"+taxPeriodStart).value = response.note[i];
			
			taxPeriodStart++;	
		}

		
		var currentDate = new Date();
		var currentTime = currentDate.getTime() 
		var timeSinceEpochCurrentDay = timeSinceEpoch-(21*86400000);
		for ( bg = 0; bg < 49 ; bg++ )
			{
				dayDiv = document.getElementById("dayDiv"+bg);
				
				backgroundIndex = response.dayTypeArrayCalendar[bg];
				//document.getElementById("panel").innerHTML += '<br>'+timeSinceEpochCurrentDay ;

				if (backgroundIndex === "0")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv notSelectedColor currentDay");}
					else
					{dayDiv.className="dayDiv notSelectedColor";}
				}
				else if (backgroundIndex === "1")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv dayInColor currentDay");}
					else
					{dayDiv.className="dayDiv dayInColor";}
				}
				else if (backgroundIndex === "2")
				{	
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv dayOffColor currentDay");}
					else
					{dayDiv.className="dayDiv dayOffColor";}
				}
				else if (backgroundIndex === "3")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv holidayColor currentDay");}
					else
					{dayDiv.className="dayDiv holidayColor";}				
				}
				else if (backgroundIndex === "4")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv unpaidHolColor currentDay");}
					else
					{dayDiv.className="dayDiv unpaidHolColor";}					
				}
				else if (backgroundIndex === "5")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv halfInHalfOffColor currentDay");}
					else
					{dayDiv.className="dayDiv halfInHalfOffColor";}	
				}
				else if (backgroundIndex === "6")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv dayInSickColor currentDay");}
					else
					{dayDiv.className="dayDiv dayInSickColor";}	
				}
				else if (backgroundIndex === "7")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv sicknessColor currentDay");}
					else
					{dayDiv.className="dayDiv sicknessColor";}	
				}
				else if (backgroundIndex === "8")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv absenceColor currentDay");}
					else
					{dayDiv.className="dayDiv absenceColor";}
				}
				else if (backgroundIndex === "9")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv familyLeaveColor currentDay");}
					else
					{dayDiv.className="dayDiv familyLeaveColor";}
				}
				else if (backgroundIndex === "10")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv bereavementColor currentDay");}
					else
					{dayDiv.className="dayDiv bereavementColor";}
				}
				else if (backgroundIndex === "11")
				{
					if (currentTime>timeSinceEpochCurrentDay && currentTime <(timeSinceEpochCurrentDay + 86400000))
					{dayDiv.setAttribute("class", "dayDiv compassionateColor currentDay");}
					else
					{dayDiv.className="dayDiv compassionateColor";}
				}
				else  {dayDiv.className="dayDiv notSelectedColor";}
				//id++;
				taxPeriodStartCalendar++;
				timeSinceEpochCurrentDay += 86400000
			}
			
		//------------------------drawing charts--------------------------------------------------//
		if (premium === 1){
		google.charts.load('current', {'packages':['corechart']});
		
		//holidays chart
		if(totalHolidaysUsed>0||totalHolidaysBooked>0||holidaysNotUsed>0){
			google.charts.setOnLoadCallback(drawChartHolidays);
			function drawChartHolidays() {

			var data = google.visualization.arrayToDataTable([
				['Type', 'Days'],
				['Used', totalHolidaysUsed],
				['Booked', totalHolidaysBooked],
				['Available', holidaysNotUsed],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Holidays Pie Chart',
				colors: ['#ff944d', '#9fdf9f', '#53c653'],
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('holidayStatisticsPieChart'));

				chart.draw(data, options);
			}
		}
		else
		{
			document.getElementById('holidayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		//days chart
		if(daysNotSelected>0||daysIn>0||daysOff>0||daysHoliday>0||daysHalfInHalfHol>0||daysUnpaidHoliday>0||daysInSick>0||
		daysSickness>0||daysAbsence>0||daysParental>0||daysBereavement>0||daysCompassionate>0){
			google.charts.setOnLoadCallback(drawChartDays);
			function drawChartDays() {

			var data = google.visualization.arrayToDataTable([
				['Type', 'Days'],
				['Not Defined', daysNotSelected],
				['Days In', daysIn],
				['Days Off', daysOff],
				['Holidays', daysHoliday],
				['Half In/Hals Off', daysHalfInHalfHol],
				['Unpaid Holiday', daysUnpaidHoliday],
				['Day In/Sick', daysInSick],
				['Sickness', daysSickness],
				['Absence', daysAbsence],
				['Paternal', daysParental],
				['Bereavement', daysBereavement],
				['Compassionate', daysCompassionate],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Days Statistics',
				colors: ['#ffffff', '#e6e600', '#c3c3a2', '#d5ff80', '#e6ffe6', '#e6ffb3', '#ffcccc', '#ff9999', '#ccebff', '#ffcc99', '#4d4d4d', '#ffe6cc'],
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('dayStatisticsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('dayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		//payments chart
		if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
		unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||
		saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
		bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
		christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)
		{
			google.charts.setOnLoadCallback(drawChartPayments);
			function drawChartPayments() {

			var data = google.visualization.arrayToDataTable([
				['Type', 'Payments'],
				['Basic Pay', basicHoursPay],
				['Uns. Premium', unsocial_prem],
				['Uns Prem. Holidays', unsocial_prem_hol],
				['Uns Prem. Sickness', unsocial_prem_sick],
				['Uns Prem. Paternity', unsocial_prem_family],
				['Uns Prem. Bereav.', unsocial_prem_bereavement],
				['Uns Prem. Compass.', unsocial_prem_compassionate],
				['Overtime 1 Pay', OT1Pay],
				['Overtime 2 Pay', OT2Pay],
				['Enhanced Holiday Pay', enhancedHolidayPay],
				['Holiday Pay', holidayPay],
				['Saturday Extra Pay', saturdayExtraPay],
				['Sunday Extra Pay', sundayExtraPay],
				['Sickness Pay', sicknessPay],
				['Paternity Pay', familyPay],
				['Bereavement Pay', bereavementPay],
				['Compassionate Pay', compassionatePay],
				['Bank Holiday Pay', bankHolidayHoursPay],
				['Bank Holiday Bonus', bankHolidayClockInBonus],
				['Back Pay', payBack],
				['Piece Work', pieceWork],
				['SSP', SSP],
				['SPP', SPP],
				['Add. Payment 1', additionalPayment],
				['Add. Payment 2', additionalPayment2],
				['Add. Payment 3', additionalPayment3],
				['Christmas Sav. Payment', christmasSavingsPayment],
				['Summer Sav. Payment', summerSavingsPayment],
				['SAP', SAP],
				['Salary', salary],
				['Bonus', bonus],
				['Commissions', commissions],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Payments Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('paymentsPieChart'));

				chart.draw(data, options);
			}
		}	
		else{
			 document.getElementById("paymentsPieChart").innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		//if peniosn is not a salary sacrifise, show it in deductions chart
		if (pensionBeforeTax === 0)
		{
			var pensionAmountChart = pensionAmount;
			var pensionSumChart = pensionSum;
			var pensionSumLast12WeeksChart = pensionSumLast12Weeks;
		}
		else{
			var pensionAmountChart = 0;
			var pensionSumChart = 0;
			var pensionSumLast12WeeksChart = 0;
		}
			
		//deductions chart
		if (christmasSavingsDeduction<0){christmasSavingsDeduction = 0;}
		if (summerSavingsDeduction<0){summerSavingsDeduction = 0;}
		if (taxAmount>0||NIAmount>0||unionDeduction>0||pensionAmountChart>0||christmasSavingsDeduction>0||summerSavingsDeduction>0||
		companyLoan>0||studentLoanDeduction>0||otherDeduction>0||otherDeduction2>0||otherDeduction3>0||netPay>0){
			google.charts.setOnLoadCallback(drawChartDeductions);
			function drawChartDeductions() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', taxAmount],
				['NI', NIAmount],
				['Union', unionDeduction],
				['Pension', pensionAmountChart],
				['Christmas savings', christmasSavingsDeduction],
				['Summer savings.', summerSavingsDeduction],
				['Company Loan', companyLoan],
				['Student Loan', studentLoanDeduction],
				[otherDeductionName, otherDeduction],
				[otherDeduction2Name, otherDeduction2],
				[otherDeduction3Name, otherDeduction3],
				['Net Pay', netPay],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Deductions Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('deductionsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			//document.getElementById('deductionsPieChart').style.paddingTop = 
			document.getElementById('deductionsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		
		//Year to date chart
		if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
		studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
			google.charts.setOnLoadCallback(drawChartYearToDate);
			function drawChartYearToDate() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', taxSum ],
				['NI', NISum ],
				['Union', union_deSum],
				['Pension', pensionSumChart],
				['Christmas savings', chris_savSum ],
				['Summeer savings.', summer_savSum ],
				['Company Loan', companyLoanSum ],
				['Student Loan', studentLoanDeductionSum],
				['Add. Deduction', other_de ],
				['Add. Deduction 2', add_deSum2 ],
				['Add. Deduction 3', add_deSum3 ],
				['Net Pay', netPaySum ],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Year To Date Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('yearToDatePieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('yearToDatePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}	
		
		//Year to date Percentage chart
		if (basicPaymentsPercentage>0||holidaysPercentage>0||sicknessPercentage>0||overtimePercentage>0||bankHolidayPercentge>0||
		parentalPercentage>0||otherPercentage>0){
			google.charts.setOnLoadCallback(drawChartYearToDatePercentages);
			function drawChartYearToDatePercentages() {
			var data = google.visualization.arrayToDataTable([
				['Name', 'Value'],
				['Basic Payments', basicPaymentsPercentage],
				['Holiday Payments', holidaysPercentage],
				['Sick Payments', sicknessPercentage],
				['Overtime Payments', overtimePercentage],
				['Bank Holiday Payments', bankHolidayPercentge],
				['Paternity Payments', parentalPercentage],
				['Other Payments', otherPercentage],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Year To Date Percentage Pie Chart',
				is3D: true,
				colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
				};

				var chart = new google.visualization.PieChart(document.getElementById('yearToDatePercentagePieChart'));

				chart.draw(data, options);
			}
		}
		else
		{
			document.getElementById('yearToDatePercentagePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		//Year to date Payments chart
		var workPayments = basicPaySum+ot1_paySum+ot2_paySum+uns_premSum+bhol_paySum+bhol_bonusSum+saturdayExtraPaySum+sundayExtraPaySum;
		workPayments+=pieceWorkSum+add_paySum+add_pay2Sum+add_pay3Sum+salarySum+bonusSum+commissionsSum;
		
		var leavePayments = hol_paySum+enhol_paySum+uns_holSum+sick_paySum+uns_sickSum+SSP_Sum+fam_paySum+uns_familySum+SPP_Sum;
		leavePayments+= ber_paySum+uns_berSum+comp_paySum+uns_compSum+SAPSum;
		
		if(workPayments>0 || leavePayments>0){
			google.charts.setOnLoadCallback(drawChartYearToDatePayments);
			function drawChartYearToDatePayments() {
			var data = google.visualization.arrayToDataTable([
				['Name','Work Payments', 'Leave Payments'],
				['Value',workPayments, leavePayments],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Year To Date Work and Leave Payments Comparison',
				//is3D: true,
				isStacked: true,
				colors: ['#e6e600', '#d5ff80'],
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateIIPieChart'));

				chart.draw(data, options);
			}
		}
		else
		{
			document.getElementById('yearToDateIIPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		
		//Year to date Hours chart: du skirtingi grafikai, priklausomai nuo to ar yra uns hours ar nera
		var unsHourSum = uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum;
		if (unsHourSum>0){
			if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||uns_prem_unSum>0||uns_hol_unSum>0||uns_sick_unSum>0||uns_family_unSum>0||
			uns_ber_unSum>0||uns_comp_unSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||ber_unitsSum>0||
			comp_unitsSum>0){
				google.charts.setOnLoadCallback(drawChartYearToDateHours);
				function drawChartYearToDateHours() {
				var data = google.visualization.arrayToDataTable([
					['Name', 'Value'],
					['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
					['Unsocial Hours', uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum],
					['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Year To Date Hours column Chart',
					isStacked: true,
					colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
					};

					var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
					chart.draw(data, options);
				}
			}
			else
			{
				document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
		}
		else{
			if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
			ber_unitsSum>0||comp_unitsSum>0){
				google.charts.setOnLoadCallback(drawChartYearToDateHours);
				function drawChartYearToDateHours() {
				var data = google.visualization.arrayToDataTable([
					['Name', 'Value'],
					['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
					['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Year To Date Hours column Chart',
					isStacked: true,
					colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
					};
					var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
					chart.draw(data, options);
				}
			}
			else
			{
				document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
		}
		//last 13 weeks averages
		if (chris_savSumLast12Weeks<0){chris_savSumLast12Weeks = 0;}
		if (summer_savSumLast12Weeks<0){summer_savSumLast12Weeks = 0;}
		
		if(taxSumLast12Weeks>0||NISumLast12Weeks>0||union_deSumLast12Weeks>0||pensionSumLast12WeeksChart>0||chris_savSumLast12Weeks>0||
		summer_savSumLast12Weeks>0||companyLoanSumLast12Weeks>0||studentLoanDeductionSumLast12Weeks>0||other_deLast12Weeks>0||
		add_deSum2Last12Weeks>0||add_deSum3Last12Weeks>0||netPaySumLast12Weeks>0){
			google.charts.setOnLoadCallback(drawChartLast3Months);
			function drawChartLast3Months() {
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', taxSumLast12Weeks],
				['NI', NISumLast12Weeks],
				['Union', union_deSumLast12Weeks],
				['Pension', pensionSumLast12WeeksChart],
				['Christmas savings', chris_savSumLast12Weeks],
				['Summer savings.', summer_savSumLast12Weeks],
				['Company Loan', companyLoanSumLast12Weeks],
				['Student Loan', studentLoanDeductionSumLast12Weeks],
				['Add. Deduction', other_deLast12Weeks],
				['Add. Deduction 2', add_deSum2Last12Weeks],
				['Add. Deduction 3', add_deSum3Last12Weeks],
				['Net Pay', netPaySumLast12Weeks],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Last 3 Months Averages Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('las3MonthsPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('las3MonthsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		
		//weekly averages
		if(averageTax>0||averageNI>0||averageNetPay>0||averageGrossPay>0){
			google.charts.setOnLoadCallback(drawChartWeeklyAverages);
			function drawChartWeeklyAverages() {
				
			var averageOtherWeekly = averageGrossPay - averageNetPay - averageNI - averageTax;
			var data = google.visualization.arrayToDataTable([
				['Type', 'Chart'],
				['Tax', averageTax ],
				['NI', averageNI ],
				['NetPay', averageNetPay ],
				['Other deductions sum', averageOtherWeekly],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Weekly Averages Pie Chart',
				is3D: true,
				};

				var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('weeklyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		
		//daily averages
		if(dailyGrossPayAllDays>0||dailyGrossPay>0||dailyNetPayAllDays>0||dailyNetPay>0||dailytaxSumAllDays>0||dailytaxSum>0||
		dailyNISumAllDays>0||dailyNISum>0||dailyHoursAtWorkAllDays>0||dailyHoursAtWork>0||dailyPaidHoursAllDays>0||dailyPaidHours>0){
			google.charts.setOnLoadCallback(drawChartDailyAverages);
			function drawChartDailyAverages() {			
			var data = google.visualization.arrayToDataTable([
				['Name', 'All Work Days','Difference between all work days and days in values'],
				["Gross Pay", dailyGrossPayAllDays,dailyGrossPay-dailyGrossPayAllDays],
				["Net Pay", dailyNetPayAllDays, dailyNetPay-dailyNetPayAllDays],
				["TAX", dailytaxSumAllDays, dailytaxSum-dailytaxSumAllDays],
				["NI", dailyNISumAllDays, dailyNISum-dailyNISumAllDays],
				["Hours at work", dailyHoursAtWorkAllDays, dailyHoursAtWork-dailyHoursAtWorkAllDays],
				["Paid hours at work", dailyPaidHoursAllDays, dailyPaidHours-dailyPaidHoursAllDays],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Hourly Averages Column Chart',
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('dailyAveragesPieChart'));

				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('dailyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		
		
		//hourly averages
		if(hourlyGrossPayAllH>0||hourlyGrossPayTotalH>0||hourlyGrossPay>0||hourlyNetPayAllH>0||hourlyNetPayTotalH>0||hourlyNetPay>0||
		hourlytaxSumAllH>0||hourlytaxSumTotalH>0||hourlytaxSum>0||hourlyNISumAllH>0||hourlyNISumTotalH>0||hourlyNISum>0){
			google.charts.setOnLoadCallback(drawChartHourlyAverages);
			function drawChartHourlyAverages() {
				
			var data = google.visualization.arrayToDataTable([
			
				['TAX Period Nr.', 'All Paid Hours','Difference between all paid hours and hours worked', 'Difference between paid Hours and hours worked'],
				["Gross Pay", hourlyGrossPayAllH,hourlyGrossPayTotalH-hourlyGrossPayAllH,hourlyGrossPay-hourlyGrossPayTotalH],
				["Net Pay", hourlyNetPayAllH, hourlyNetPayTotalH-hourlyNetPayAllH ,hourlyNetPay-hourlyNetPayTotalH],
				["TAX", hourlytaxSumAllH, hourlytaxSumTotalH-hourlytaxSumAllH , hourlytaxSum-hourlytaxSumTotalH],
				["NI", hourlyNISumAllH, hourlyNISumTotalH-hourlyNISumAllH , hourlyNISum-hourlyNISumTotalH],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Hourly Averages Column Chart',
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('hourlyAveragesPieChart'));
				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('hourlyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}

		//paid hours chart
		if(Number(response.last10NetPayArray[9])>0||Number(response.last10DeductionsArray[9])>0||
		Number(response.last10NetPayArray[8])>0||Number(response.last10DeductionsArray[8])>0||
		Number(response.last10NetPayArray[7])>0||Number(response.last10DeductionsArray[7])>0||
		Number(response.last10NetPayArray[6])>0||Number(response.last10DeductionsArray[6])>0||
		Number(response.last10NetPayArray[5])>0||Number(response.last10DeductionsArray[5])>0||
		Number(response.last10NetPayArray[4])>0||Number(response.last10DeductionsArray[4])>0||
		Number(response.last10NetPayArray[3])>0||Number(response.last10DeductionsArray[3])>0||
		Number(response.last10NetPayArray[2])>0||Number(response.last10DeductionsArray[2])>0||
		Number(response.last10NetPayArray[1])>0||Number(response.last10DeductionsArray[1])>0||
		Number(response.last10NetPayArray[0])>0||Number(response.last10DeductionsArray[0])>0){
			google.charts.setOnLoadCallback(drawChartColumnPaidHours);
			function drawChartColumnPaidHours() {
				
			var data = google.visualization.arrayToDataTable([
			
				['TAX Period Nr.', 'Net Pay', 'Deductions' ],
				["10", Number(response.last10NetPayArray[9]), Number(response.last10DeductionsArray[9])],
				["9", Number(response.last10NetPayArray[8]), Number(response.last10DeductionsArray[8])],
				["8", Number(response.last10NetPayArray[7]), Number(response.last10DeductionsArray[7])],
				["7", Number(response.last10NetPayArray[6]), Number(response.last10DeductionsArray[6])],
				["6", Number(response.last10NetPayArray[5]), Number(response.last10DeductionsArray[5])],
				["5", Number(response.last10NetPayArray[4]), Number(response.last10DeductionsArray[4])],
				["4", Number(response.last10NetPayArray[3]), Number(response.last10DeductionsArray[3])],
				["3", Number(response.last10NetPayArray[2]), Number(response.last10DeductionsArray[2])],
				["2", Number(response.last10NetPayArray[1]), Number(response.last10DeductionsArray[1])],
				["Current", Number(response.last10NetPayArray[0]), Number(response.last10DeductionsArray[0])],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Last 10 Weeks Net Pay and Deductions Chart',
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('columnChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}
		//susumuojame visas valandas patikrinti ar reikia braizyti grafika
		var last10weeksHoursSum = 0;
		for (i=0;i<10;i++)
		{
			last10weeksHoursSum += Number(response.last10WorkingHoursArray[i]);
			last10weeksHoursSum += Number(response.last10AllHolidayHoursArray[i]);
			last10weeksHoursSum += Number(response.last10SickHoursArray[i]);
			last10weeksHoursSum += Number(response.last10FamHoursArray[i]);
			last10weeksHoursSum += Number(response.last10BerHoursArray[i]);
			last10weeksHoursSum += Number(response.last10CompHoursArray[i]);	
		}
		
		if(last10weeksHoursSum>0){
			google.charts.setOnLoadCallback(drawChartColumn);
			function drawChartColumn() {
				
			var data = google.visualization.arrayToDataTable([
			
				['TAX Period Nr.', 'Working Hours', 'Holiday Hours', 'Sickness Hours', 'Parental Hours', 'Bereavement Hours', 'Compassionate Hours' ],
				["10", Number(response.last10WorkingHoursArray[9]), Number(response.last10AllHolidayHoursArray[9]), Number(response.last10SickHoursArray[9]), Number(response.last10FamHoursArray[9]), Number(response.last10BerHoursArray[9]), Number(response.last10CompHoursArray[9])],
				["9", Number(response.last10WorkingHoursArray[8]), Number(response.last10AllHolidayHoursArray[8]), Number(response.last10SickHoursArray[8]), Number(response.last10FamHoursArray[8]), Number(response.last10BerHoursArray[8]), Number(response.last10CompHoursArray[8])],
				["8", Number(response.last10WorkingHoursArray[7]), Number(response.last10AllHolidayHoursArray[7]), Number(response.last10SickHoursArray[7]), Number(response.last10FamHoursArray[7]), Number(response.last10BerHoursArray[7]), Number(response.last10CompHoursArray[7])],
				["7", Number(response.last10WorkingHoursArray[6]), Number(response.last10AllHolidayHoursArray[6]), Number(response.last10SickHoursArray[6]), Number(response.last10FamHoursArray[6]), Number(response.last10BerHoursArray[6]), Number(response.last10CompHoursArray[6])],
				["6", Number(response.last10WorkingHoursArray[5]), Number(response.last10AllHolidayHoursArray[5]), Number(response.last10SickHoursArray[5]), Number(response.last10FamHoursArray[5]), Number(response.last10BerHoursArray[5]), Number(response.last10CompHoursArray[5])],
				["5", Number(response.last10WorkingHoursArray[4]), Number(response.last10AllHolidayHoursArray[4]), Number(response.last10SickHoursArray[4]), Number(response.last10FamHoursArray[4]), Number(response.last10BerHoursArray[4]), Number(response.last10CompHoursArray[4])],
				["4", Number(response.last10WorkingHoursArray[3]), Number(response.last10AllHolidayHoursArray[3]), Number(response.last10SickHoursArray[3]), Number(response.last10FamHoursArray[3]), Number(response.last10BerHoursArray[3]), Number(response.last10CompHoursArray[3])],
				["3", Number(response.last10WorkingHoursArray[2]), Number(response.last10AllHolidayHoursArray[2]), Number(response.last10SickHoursArray[2]), Number(response.last10FamHoursArray[2]), Number(response.last10BerHoursArray[2]), Number(response.last10CompHoursArray[2])],
				["2", Number(response.last10WorkingHoursArray[1]), Number(response.last10AllHolidayHoursArray[1]), Number(response.last10SickHoursArray[1]), Number(response.last10FamHoursArray[1]), Number(response.last10BerHoursArray[1]), Number(response.last10CompHoursArray[1])],
				["Current", Number(response.last10WorkingHoursArray[0]), Number(response.last10AllHolidayHoursArray[0]), Number(response.last10SickHoursArray[0]), Number(response.last10FamHoursArray[0]), Number(response.last10BerHoursArray[0]), Number(response.last10CompHoursArray[0])],
				]);

				var options = {
				backgroundColor: '#ffffcc',
				title: 'Last 10 Weeks Paid Hours Chart',
				colors: ['#e6e600', '#d5ff80','#ff9999','#ffcc99', '#4d4d4d', '#ffe6cc'],
				isStacked: true,
				};

				var chart = new google.visualization.ColumnChart(document.getElementById('columnChartPaidHours'));
				chart.draw(data, options);
			}
		}
		else{
			document.getElementById('columnChartPaidHours').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
		}		
		}
		
		//--------------------------------------------------------------------------------//end of charts	
			
		changeSelectBackground();
		finishNextMorningBColor(weekStart);
		bankHolidayFilter(timeSinceEpoch);
		hideHoursSelect();		
		}
	}
}


function getFormValues(weekStart){
	var str = '';
	
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	
	var timeSinceEpochValue = document.getElementById("timeSinceEpochInput").value;
	str += 'taxPeriodNumberName'+'='+taxPeriodNumber+'&'+'timeSinceEpoch'+'='+timeSinceEpochValue+'&';
										
	var payChristmasSavingsCheckName = "payChristmasSavingsCheck"+taxPeriodNumber;
	var payChristmasSavingsCheckValue = document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).checked;
	
	var paySummerSavingsCheckName = "paySummerSavingsCheck"+taxPeriodNumber;
	var paySummerSavingsCheckValue = document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).checked;
	
	str += payChristmasSavingsCheckName+'='+payChristmasSavingsCheckValue+'&'+paySummerSavingsCheckName+'='+paySummerSavingsCheckValue+'&';
	
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	var submitSuccess = document.getElementById("submitSuccessMain");
	for(b=0;b<7;b++)
	{
		//day type
		var dayTypeName = "dayType"+taxPeriodStart
		var dayTypeValue = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		//start time
		var startHoursName = "startHours"+taxPeriodStart;
		var startHoursValue = document.getElementById("startHours"+taxPeriodStart).value;
		var startMinutesName = "startMinutes"+taxPeriodStart;
		var startMinutesValue = document.getElementById("startMinutes"+taxPeriodStart).value;
		
		//end time
		var endHoursName = "endHours"+taxPeriodStart;
		var endHoursValue = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;//imame ne value o index, del naktines pamainaos valandu skaiciavimo
		var endMinutesName = "endMinutes"+taxPeriodStart;
		var endMinutesValue = document.getElementById("endMinutes"+taxPeriodStart).value;
		
		//sicknes 
		var sicknessButton = "sicknessButton"+taxPeriodStart;
		var sicknessButtonValue = document.getElementById("sicknessButton"+taxPeriodStart).checked;
		
		//day in sickness
		var dayInSickButton = "dayInSickButton"+taxPeriodStart;
		var dayInSickButtonValue = document.getElementById("dayInSickButton"+taxPeriodStart).checked;
		
		var bereavementButton = "bereavementButton"+taxPeriodStart;
		var bereavementButtonValue = document.getElementById("bereavementButton"+taxPeriodStart).checked;
		
		var compassionateButton = "compassionateButton"+taxPeriodStart;
		var compassionateButtonValue = document.getElementById("compassionateButton"+taxPeriodStart).checked;
		
		//enhanced holidays
		var enHolButon = "enHolButon"+taxPeriodStart;
		var enHolButonValue = document.getElementById("enhancedHolidayButton"+taxPeriodStart).checked;
		
		//note values
		var noteInput = "noteInput"+taxPeriodStart;
		var noteInputValue = document.getElementById("noteInput"+taxPeriodStart).value;
		
		//family leave 
		var familyLeaveButton = "familyLeaveButton"+taxPeriodStart;
		var familyLeaveButtonValue = document.getElementById("familyLeaveButton"+taxPeriodStart).checked;
		
		
		// date values
		var dateInputHidden ='dateInputHidden' +taxPeriodStart;
		var dateInputHiddenValue = document.getElementById("dateInputHidden"+taxPeriodStart).value;
			//----------------------------------------------------------date checker--------------
			var flickerbookStartDate = new Date("2017-03-31");
			var flickerbookEndDate = new Date("2021-03-29");
			var submmitedDate = new Date(dateInputHiddenValue);
	
			
			if( submmitedDate < flickerbookStartDate || submmitedDate>flickerbookEndDate )
			{
				submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
				submitSuccess.innerHTML += 'Submitted Date Not allowed, check your devices date settings.<br>';
				submitSuccess.removeAttribute("class");
				submitSuccess.setAttribute("class", "submitErrorMain");
		
				return false;
			}
			else{
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessMain");
		}
			//---------------------------------------------------------------------------------------
			
		str += dateInputHidden+'='+dateInputHiddenValue+'&'+dayTypeName+'='+dayTypeValue+'&'+startHoursName+'='+startHoursValue+'&'+startMinutesName+'='+startMinutesValue+'&'+endHoursName+'='+endHoursValue+'&'+endMinutesName+'='+endMinutesValue+'&'+sicknessButton+'='+sicknessButtonValue+'&'+enHolButon+'='+enHolButonValue+'&'+dayInSickButton+'='+dayInSickButtonValue+'&'+noteInput+'='+noteInputValue+'&'+familyLeaveButton+'='+familyLeaveButtonValue+'&'+bereavementButton+'='+bereavementButtonValue+'&'+compassionateButton+'='+compassionateButtonValue+'&';                			
		
		taxPeriodStart++

	}
	//taxPeriodNumber = 60;
	if (taxPeriodNumber <0 || taxPeriodNumber>156)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Tax Period no. not allowed, check your date settings on your device.<br>';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitErrorMain");
		
		return false;
	}
	else{
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessMain");
		return str;
	}
}

function ajaxPost(weekStart){
	str = getFormValues(weekStart);
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	//request = new XMLHttpRequest() ;
	var url = "javascript/ajax/submitForm.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			var response = JSON.parse(this.responseText);
			var submitSuccessMain = document.getElementById("submitSuccessMain");
			//submitSuccessMain.innerHTML = 'Payslip Generated!';
			
			
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccessMain.innerHTML = " ";
			if (errorsArrayLength>0){
				submitSuccessMain.innerHTML = "Error! Touch to dismiss.<hr> ";
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccessMain.setAttribute("class", "submitErrorMain");
					submitSuccessMain.innerHTML += response.errors[i]+'<br>';
				}
			}	
			else{
				submitSuccessMain.setAttribute("class", "submitSuccessMain");
				submitSuccessMain.innerHTML = 'Payslip Generated!';
				setTimeout(function(){submitSuccessMain.innerHTML=" ";},1500);
			
				// total payments amount div
				var paymentsAmountDiv = document.getElementById("paymentsAmountDiv");
				var basicHoursPay = Number(response.basicHoursPay);
				var unsocial_prem = Number(response.unsocial_prem);
				var unsocial_prem_hol = Number(response.unsocial_prem_hol);
				var unsocial_prem_sick = Number(response.unsocial_prem_sick);
				var unsocial_prem_family = Number(response.unsocial_prem_family);
				var unsocial_prem_bereavement = Number(response.unsocial_prem_bereavement);
				var unsocial_prem_compassionate = Number(response.unsocial_prem_compassionate);
				var OT1Pay = Number(response.OT1Pay);
				var OT2Pay = Number(response.OT2Pay);
				var enhancedHolidayPay = Number(response.enhancedHolidayPay);
				var holidayPay = Number(response.holidayPay);
				var sicknessPay = Number(response.sicknessPay);
				var familyPay = Number(response.familyPay);
				var bereavementPay = Number(response.bereavementPay);
				var compassionatePay = Number(response.compassionatePay);
				var bHolPayTimes = Number(response.bHolPayTimes);
				var bankHolidayHoursPay = Number(response.bankHolidayHoursPay);
				var bankHolidayClockInBonus = Number(response.bankHolidayClockInBonus);
				var payBack = Number(response.payBack);
				var pieceWork = Number(response.pieceWork);
				var SSP = Number(response.SSP);
				var SPP = Number(response.SPP);
				var additionalPayment = Number(response.additionalPayment);
				var additionalPaymentName = response.additionalPaymentName;
				var additionalPayment2 = Number(response.additionalPayment2);
				var additionalPayment2Name = response.additionalPayment2Name;
				var additionalPayment3 = Number(response.additionalPayment3);
				var additionalPayment3Name = response.additionalPayment3Name;
				var christmasSavingsPayment = Number(response.christmasSavingsPayment);
				var summerSavingsPayment = Number(response.summerSavingsPayment);
				var pensionBeforeTax = Number(response.pensionBeforeTax);
				var pensionAmount = Number(response.pensionAmount);
				var pensionRate = Number(response.pensionRate);
				var saturdayHours = Number(response.saturdayHours);
				var sundayHours = Number(response.sundayHours);
				var saturdayExtraPay = Number(response.saturdayExtraPay);
				var sundayExtraPay = Number(response.sundayExtraPay);
				var saturdayExtraRate = Number(response.saturdayExtraRate);
				var sundayExtraRate = Number(response.sundayExtraRate);
				
				var SAP = Number(response.SAP);
				var salary = Number(response.salary);
				var bonus = Number(response.bonus);
				var commissions = Number(response.commissions);

				paymentsAmountDiv.innerHTML = basicHoursPay.toFixed(2);
				if (unsocial_prem>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem.toFixed(2);}
				if (unsocial_prem_hol>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_hol.toFixed(2);}
				if (unsocial_prem_sick>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_sick.toFixed(2);}
				if (unsocial_prem_family>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_family.toFixed(2);}
				if (unsocial_prem_bereavement>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_bereavement.toFixed(2);}
				if (unsocial_prem_compassionate>0) {paymentsAmountDiv.innerHTML += '<br>'+unsocial_prem_compassionate.toFixed(2);}
				if (OT1Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT1Pay.toFixed(2);}
				if (OT2Pay>0) {paymentsAmountDiv.innerHTML += '<br>'+OT2Pay.toFixed(2);}
				if (enhancedHolidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+enhancedHolidayPay.toFixed(2);}
				if (holidayPay>0) {paymentsAmountDiv.innerHTML += '<br>'+holidayPay.toFixed(2);}
				if (saturdayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+saturdayExtraPay.toFixed(2);}
				if (sundayExtraPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sundayExtraPay.toFixed(2);}
				if (sicknessPay>0) {paymentsAmountDiv.innerHTML += '<br>'+sicknessPay.toFixed(2);}
				if (familyPay>0) {paymentsAmountDiv.innerHTML += '<br>'+familyPay.toFixed(2);}
				if (bereavementPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bereavementPay.toFixed(2);}
				if (compassionatePay>0) {paymentsAmountDiv.innerHTML += '<br>'+compassionatePay.toFixed(2);}
				if (bankHolidayHoursPay>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayHoursPay.toFixed(2);}
				if (bankHolidayClockInBonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bankHolidayClockInBonus.toFixed(2);}
				if (payBack>0) {paymentsAmountDiv.innerHTML += '<br>'+payBack.toFixed(2);}
				if (pieceWork>0) {paymentsAmountDiv.innerHTML += '<br>'+pieceWork.toFixed(2);}
				if (SSP>0) {paymentsAmountDiv.innerHTML += '<br>'+SSP.toFixed(2);}
				if (SPP>0) {paymentsAmountDiv.innerHTML += '<br>'+SPP.toFixed(2);}
				if (SAP>0) {paymentsAmountDiv.innerHTML += '<br>'+SAP.toFixed(2);}
				if (salary>0) {paymentsAmountDiv.innerHTML += '<br>'+salary.toFixed(2);}
				if (bonus>0) {paymentsAmountDiv.innerHTML += '<br>'+bonus.toFixed(2);}
				if (commissions>0) {paymentsAmountDiv.innerHTML += '<br>'+commissions.toFixed(2);}
				if (additionalPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment.toFixed(2);}
				if (additionalPayment2>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment2.toFixed(2);}
				if (additionalPayment3>0) {paymentsAmountDiv.innerHTML += '<br>'+additionalPayment3.toFixed(2);}
				if (christmasSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+christmasSavingsPayment.toFixed(2);}
				if (summerSavingsPayment>0) {paymentsAmountDiv.innerHTML += '<br>'+summerSavingsPayment.toFixed(2);}
				if (pensionAmount>0 && pensionBeforeTax === 1){paymentsAmountDiv.innerHTML += '<br>- '+pensionAmount.toFixed(2);}
				

				//payments name div
				var paymentsNamesDiv = document.getElementById("paymentsNamesDiv");
				paymentsNamesDiv.innerHTML = 'Basic Hours';
				if (unsocial_prem>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem';}
				if (unsocial_prem_hol>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem H';}
				if (unsocial_prem_sick>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem S';}
				if (unsocial_prem_family>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem P';}
				if (unsocial_prem_bereavement>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem B';}
				if (unsocial_prem_compassionate>0) {paymentsNamesDiv.innerHTML += '<br>Unsoc Prem C';}
				if (OT1Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 1';}
				if (OT2Pay>0) {paymentsNamesDiv.innerHTML += '<br>Overtime 2';}
				if (enhancedHolidayPay>0) {paymentsNamesDiv.innerHTML += '<br>En. Hol';}
				if (holidayPay>0) {paymentsNamesDiv.innerHTML += '<br>Holiday';}
				if (saturdayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Saturday B';}
				if (sundayExtraPay>0) {paymentsNamesDiv.innerHTML += '<br>Sunday B';}
				if (sicknessPay>0) {paymentsNamesDiv.innerHTML += '<br>Sick Pay';}
				if (familyPay>0) {paymentsNamesDiv.innerHTML += '<br>Parental Pay';}
				if (bereavementPay>0) {paymentsNamesDiv.innerHTML += '<br>Bereavement';}
				if (compassionatePay>0) {paymentsNamesDiv.innerHTML += '<br>Compassionate';}
				if (bankHolidayHoursPay>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol';}
				if (bankHolidayClockInBonus>0) {paymentsNamesDiv.innerHTML += '<br>B. Hol Bonus';}
				if (payBack>0) {paymentsNamesDiv.innerHTML += '<br> Back Pay';}
				if (pieceWork>0) {paymentsNamesDiv.innerHTML += '<br> Piece Work';}
				if (SSP>0) {paymentsNamesDiv.innerHTML += '<br> SSP';}
				if (SPP>0) {paymentsNamesDiv.innerHTML += '<br> SPP';}
				if (SAP>0) {paymentsNamesDiv.innerHTML += '<br> SAP';}
				if (salary>0) {paymentsNamesDiv.innerHTML += '<br> Salary';}
				if (bonus>0) {paymentsNamesDiv.innerHTML += '<br> Bonus';}
				if (commissions>0) {paymentsNamesDiv.innerHTML += '<br> Commissions';}
				if (additionalPayment>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPaymentName;}
				if (additionalPayment2>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment2Name;}
				if (additionalPayment3>0) {paymentsNamesDiv.innerHTML += '<br>'+additionalPayment3Name;}
				if (christmasSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Chris. Sav';}
				if (summerSavingsPayment>0) {paymentsNamesDiv.innerHTML += '<br> Summer Sav.';}
				if (pensionAmount>0 && pensionBeforeTax === 1){paymentsNamesDiv.innerHTML += '<br> Pension';}
				
				//payments units div
				var paymentsUnitsDiv = document.getElementById("paymentsUnitsDiv");
				var basicHoursUnits = Number(response.basic_hours);
				var unsocial_prem_units = Number(response.unsocial_prem_units);
				var unsocial_prem_hol_units = Number(response.unsocial_prem_hol_units);
				var unsocial_prem_sick_units = Number(response.unsocial_prem_sick_units);
				var unsocial_prem_family_units = Number(response.unsocial_prem_family_units);
				var uns_ber_units = Number(response.uns_ber_units);
				var uns_comp_units = Number(response.uns_comp_units);
				var overtime1_units = Number(response.overtime1_units);
				var overtime2_units = Number(response.overtime2_units);
				var enhanced_holiday_units = Number(response.enhanced_holiday_units);
				var holiday_units = Number(response.holiday_units);
				var sick_units = Number(response.sick_units);
				var family_units =Number(response.family_units);
				var ber_units =Number(response.ber_units);
				var comp_units =Number(response.comp_units);
				var bhol_units = Number(response.bhol_units);
				
				paymentsUnitsDiv.innerHTML = basicHoursUnits.toFixed(2);
				if (unsocial_prem>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_units.toFixed(2);}
				if (unsocial_prem_hol>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_hol_units.toFixed(2);}
				if (unsocial_prem_sick>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_sick_units.toFixed(2);}
				if (unsocial_prem_family>0) {paymentsUnitsDiv.innerHTML += '<br>'+unsocial_prem_family_units.toFixed(2);}
				if (unsocial_prem_bereavement>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_ber_units.toFixed(2);}
				if (unsocial_prem_compassionate>0) {paymentsUnitsDiv.innerHTML += '<br>'+uns_comp_units.toFixed(2);}
				if (OT1Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime1_units.toFixed(2);}
				if (OT2Pay>0) {paymentsUnitsDiv.innerHTML += '<br>'+overtime2_units.toFixed(2);}
				if (enhancedHolidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+enhanced_holiday_units.toFixed(2);}
				if (holidayPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+holiday_units.toFixed(2);}
				if (saturdayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+saturdayHours.toFixed(2);}
				if (sundayExtraPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sundayHours.toFixed(2);}
				if (sicknessPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+sick_units.toFixed(2);}
				if (familyPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+family_units.toFixed(2);}
				if (bereavementPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+ber_units.toFixed(2);}
				if (compassionatePay>0) {paymentsUnitsDiv.innerHTML += '<br>'+comp_units.toFixed(2);}
				if (bankHolidayHoursPay>0) {paymentsUnitsDiv.innerHTML += '<br>'+bhol_units.toFixed(2);}
				if (bankHolidayClockInBonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (payBack>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (pieceWork>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (SSP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (SPP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (SAP>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (salary>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (bonus>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (commissions>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (additionalPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (additionalPayment2>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (additionalPayment3>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (christmasSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (summerSavingsPayment>0) {paymentsUnitsDiv.innerHTML += '<br>-';}
				if (pensionAmount>0 && pensionBeforeTax === 1){paymentsUnitsDiv.innerHTML += '<br>-';}
				
				//rate div
				var paymentsRateDiv = document.getElementById("paymentsRateDiv");
				var hourlyRate = Number(response.hourlyRate);
				var unsocial_prem_rate = Number(response.unsocial_prem_rate);
				var overtime1_rate = Number(response.overtime1_rate);
				var overtime2_rate = Number(response.overtime2_rate);
				var enhancedHolidayRate = Number(response.enhancedHolidayRate);
				
				var part_sick = Number(response.part_sick);
				var part_pater = Number(response.part_pater);
				var part_ber = Number(response.part_ber);
				var part_comp = Number(response.part_comp);		

				
				paymentsRateDiv.innerHTML = hourlyRate.toFixed(4);
				if (unsocial_prem>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
				if (unsocial_prem_hol>0){paymentsRateDiv.innerHTML += '<br>'+unsocial_prem_rate.toFixed(4);}
				if (unsocial_prem_sick>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_sick).toFixed(4);}
				if (unsocial_prem_family>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_pater).toFixed(4);}
				if (unsocial_prem_bereavement>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_ber).toFixed(4);}
				if (unsocial_prem_compassionate>0){paymentsRateDiv.innerHTML += '<br>'+(unsocial_prem_rate*part_comp).toFixed(4);}
				if (OT1Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime1_rate.toFixed(4);}
				if (OT2Pay>0){paymentsRateDiv.innerHTML += '<br>'+overtime2_rate.toFixed(4);}
				if (enhancedHolidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+enhancedHolidayRate;}
				if (holidayPay>0) {paymentsRateDiv.innerHTML += '<br>'+hourlyRate.toFixed(4);}
				if (saturdayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+saturdayExtraRate.toFixed(4);}
				if (sundayExtraPay>0) {paymentsRateDiv.innerHTML += '<br>*'+sundayExtraRate.toFixed(4);}
				if (sicknessPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_sick).toFixed(4);}
				if (familyPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_pater).toFixed(4);}
				if (bereavementPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_ber).toFixed(4);}
				if (compassionatePay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*part_comp).toFixed(4);}
				if (bankHolidayHoursPay>0) {paymentsRateDiv.innerHTML += '<br>'+(hourlyRate*(bHolPayTimes-1)).toFixed(4);}
				if (bankHolidayClockInBonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (payBack>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (pieceWork>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (SSP>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (SPP>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (SAP>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (salary>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (bonus>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (commissions>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (additionalPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (additionalPayment2>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (additionalPayment3>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (christmasSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if (summerSavingsPayment>0) {paymentsRateDiv.innerHTML += '<br>-';}
				if ((pensionAmount>0) && (pensionBeforeTax === 1)){paymentsRateDiv.innerHTML += '<br> '+pensionRate.toFixed(2)+'%';}
				//total gross payments
				var totalGrossPaymentsAmountDiv = document.getElementById("totalGrossPaymentsAmount");
				var totalGrossPaymentsAmountValue = Number(response.totalGrossPayments);
				totalGrossPaymentsAmountDiv.innerHTML = totalGrossPaymentsAmountValue.toFixed(2);
				
				//deductions amount	
				var deductionsAmountDiv = document.getElementById("deductionsAmountDiv");
				var taxAmount = Number(response.taxAmount);
				var NIAmount = Number(response.NIAmount);
				var pensionAmount = Number(response.pensionAmount);
				var unionDeduction = Number(response.unionDeduction);
				var christmasSavingsDeduction = Number(response.christmasSavingsDeduction);
				var summerSavingsDeduction = Number(response.summerSavingsDeduction);
				var otherDeduction = Number(response.otherDeduction);
				var otherDeductionName = response.otherDeductionName;
				var otherDeduction2 = Number(response.otherDeduction2);
				var otherDeduction2Name = response.otherDeduction2Name;
				var otherDeduction3 = Number(response.otherDeduction3);
				var otherDeduction3Name = response.otherDeduction3Name;
				var companyLoan = Number(response.companyLoan);
				var studentLoanDeduction = Number(response.studentLoanDeduction);
				
				////////////sutavrkome mygtukus kaledu ir vasaros santaupoms
				var payChristmasSavings = document.getElementById("payChristmasSavings");
				var paySummerSavings = document.getElementById("paySummerSavings");
				var paySavingsDiv = document.getElementById("paySavingsDiv");
				var calendar = document.getElementById("calendar");
				var generateButton = document.getElementById("form");
				
				var summerSavingsPaymentCollected = response.summerSavingsPaymentCollected;
				var christmasSavingsPaymentCollected = response.christmasSavingsPaymentCollected;
				var paySummerSavingsCheckRes = response.paySummerSavingsCheck;
				var payChristmasSavingsCheckRes = response.payChristmasSavingsCheck; //res=response

				//parodome arba paslepiame paysavings div
				if (summerSavingsPaymentCollected > 0 || christmasSavingsPaymentCollected >0 || payChristmasSavingsCheckRes == "true"|| paySummerSavingsCheckRes=="true"){
					paySavingsDiv.removeAttribute("class");
					paySavingsDiv.setAttribute("class", "displayBlock");
					tableBottom.style.marginTop = "30px";
					calendar.style.marginTop = "65px";
					//submitSuccessMain.style.marginTop = "5px";
				}
				else {
					paySavingsDiv.setAttribute("class", "nodisplay");
					tableBottom.style.marginTop = "7px";
					calendar.style.marginTop = "40px";
				}
				//1 rodome abudu mygtukus
				if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "false")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//2 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0 && payChristmasSavingsCheckRes == "false")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//3 rodome summer savings mygtuka
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
				{
					paySummerSavings.style.display = "initial";
					paySummerSavings.style.left = "0"
					payChristmasSavings.style.display = "none";
				}
				//4 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//5 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//6 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";				
					paySummerSavings.style.left = "180px"
				}
				//7 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//8 rodome summer savings mygtuka
				else if (summerSavingsPaymentCollected>0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
				{
					paySummerSavings.style.display = "initial";
					paySummerSavings.style.left = "0"
					payChristmasSavings.style.display = "none";
				}
				//9 rodome christmas savings mygtuka
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "false")
				{
					paySummerSavings.style.display = "none";
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.left = "180px"
				}
				//10 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected >0 && payChristmasSavingsCheckRes == "false")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//11 rodome summer savings mygtuka
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
				{
					paySummerSavings.style.display = "initial";
					paySummerSavings.style.left = "0"
					payChristmasSavings.style.display = "none";
				}
				//12 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//13 rodome christmas savings mygtuka
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "true")
				{
					paySummerSavings.style.display = "none";
					payChristmasSavings.style.display = "initial";
				}
				//14 rodome abudu mygtukus
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "true" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
				{
					payChristmasSavings.style.display = "initial";
					paySummerSavings.style.display = "initial";					
					paySummerSavings.style.left = "180px"
				}
				//15 rodome christmas savings mygtuka
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected>0 && payChristmasSavingsCheckRes == "true")
				{
					paySummerSavings.style.display = "none";
					payChristmasSavings.style.display = "initial";
				}
				//16 paslepiame abudu mygtukus
				else if (summerSavingsPaymentCollected<=0 && paySummerSavingsCheckRes == "false" && christmasSavingsPaymentCollected<=0 && payChristmasSavingsCheckRes == "false")
				{
					paySummerSavings.style.display = "none";
					payChristmasSavings.style.display = "none";
				}
				// paslepiame abudu mygtukus
				else 
				{
					paySummerSavings.style.display = "none";
					payChristmasSavings.style.display = "none";
				}

				var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
				
				if(payChristmasSavingsCheckRes == "true")
					{
						document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
					}
					else if (payChristmasSavingsCheckRes == "false")
					{
						document.getElementById("payChristmasSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
					}
					else{
						alert('Something wrong with Christmas payout checkbox!');
					}
					
				if(paySummerSavingsCheckRes == "true")
					{
						document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).setAttribute("checked", "checked")
					}
					else if (paySummerSavingsCheckRes == "false")
					{
						document.getElementById("paySummerSavingsCheck"+taxPeriodNumber).removeAttribute("checked");
					}
					else{
						alert('Something wrong with Summer payout checkbox!');
					}
			
				
				deductionsAmountDiv.innerHTML = taxAmount.toFixed(2);
				deductionsAmountDiv.innerHTML += '<br>'+NIAmount.toFixed(2);
				if (pensionAmount>0  && pensionBeforeTax === 0){deductionsAmountDiv.innerHTML += '<br>'+pensionAmount.toFixed(2);}
				if (unionDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+unionDeduction.toFixed(2);}
				if (christmasSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+christmasSavingsDeduction.toFixed(2);}
				if (summerSavingsDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+summerSavingsDeduction.toFixed(2);}
				if (otherDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction.toFixed(2);}
				if (otherDeduction2>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction2.toFixed(2);}
				if (otherDeduction3>0){deductionsAmountDiv.innerHTML += '<br>'+otherDeduction3.toFixed(2);}
				if (companyLoan>0){deductionsAmountDiv.innerHTML += '<br>'+companyLoan.toFixed(2);}
				if (studentLoanDeduction>0){deductionsAmountDiv.innerHTML += '<br>'+studentLoanDeduction.toFixed(2);}
				
				//deductions names
				var deductionsNamesDiv = document.getElementById("deductionsNamesDiv");
				deductionsNamesDiv.innerHTML = 'TAX';
				deductionsNamesDiv.innerHTML += '<br>National Insurance';
				if (pensionAmount>0  && pensionBeforeTax === 0)deductionsNamesDiv.innerHTML += '<br>Pension '+pensionRate.toFixed(2)+'%';
				if (unionDeduction>0)deductionsNamesDiv.innerHTML += '<br>Union';
				if (christmasSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Christmas sav.';
				if (summerSavingsDeduction>0)deductionsNamesDiv.innerHTML += '<br>Summer sav.';
				if (otherDeduction>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeductionName;
				if (otherDeduction2>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction2Name;
				if (otherDeduction3>0)deductionsNamesDiv.innerHTML += '<br>' + otherDeduction3Name;
				if (companyLoan>0)deductionsNamesDiv.innerHTML += '<br>Loan Deduction';
				if (studentLoanDeduction>0)deductionsNamesDiv.innerHTML += '<br>Student Loan';
				
				//total deductions
				var totalDeductionsDiv = document.getElementById("totalDeductionsAmount");
				var totalDeductions = Number(response.totalDeductions);
				totalDeductionsDiv.innerHTML = totalDeductions.toFixed(2);
				
				//net Pay
				var netPayAmountDiv = document.getElementById("netPayAmount");
				var netPay = Number(response.netPay);
				netPayAmountDiv.innerHTML = netPay.toFixed(2);
				
				//year to date amounts
				var yearToDateAmount = document.getElementById("yearToDateAmount");
				var taxSum = Number(response.taxSum);
				var NISum = Number(response.NISum);
				var union_deSum = Number(response.union_deSum);
				var pensionSum = Number(response.pensionSum);
				var chris_savSum = Number(response.chris_savSum);
				var summer_savSum = Number(response.summer_savSum);
				var other_de = Number(response.other_de);
				var add_deSum2 = Number(response.add_deSum2);
				var add_deSum3 = Number(response.add_deSum3);
				var netPaySum = Number(response.netPaySum);
				var gross_paySum = Number(response.gross_paySum);
				var pensionEmpSum = Number(response.pensionEmpSum);
				var companyLoanSum = Number(response.companyLoanSum);
				var studentLoanDeductionSum = Number(response.studentLoanDeductionSum);

				
				yearToDateAmount.innerHTML = taxSum.toFixed(2)+' £<br>'+NISum.toFixed(2)+' £<hr>';
				if (union_deSum>0){yearToDateAmount.innerHTML+= union_deSum.toFixed(2)+' £<br>';}
				if (companyLoanSum >0){yearToDateAmount.innerHTML+= companyLoanSum.toFixed(2)+' £<br>';}
				if (studentLoanDeductionSum >0){yearToDateAmount.innerHTML+= studentLoanDeductionSum.toFixed(2)+' £<br>';}
				if (christmasSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= chris_savSum.toFixed(2)+' £<br>';}
				if (christmasSavingsPaymentCollected>chris_savSum) {yearToDateAmount.innerHTML+= christmasSavingsPaymentCollected.toFixed(2)+' £<br>';}
				if (summerSavingsPaymentCollected>0) {yearToDateAmount.innerHTML+= summer_savSum.toFixed(2)+' £<br>';}
				if (summerSavingsPaymentCollected>summer_savSum) {yearToDateAmount.innerHTML+= summerSavingsPaymentCollected.toFixed(2)+'<br>';}
				
				if (other_de>0) {yearToDateAmount.innerHTML+= other_de.toFixed(2)+' £<br>';}
				if (add_deSum2>0) {yearToDateAmount.innerHTML+= add_deSum2.toFixed(2)+' £<br>';}
				if (add_deSum3>0) {yearToDateAmount.innerHTML+= add_deSum3.toFixed(2)+' £<br>';}
				if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || chris_savSum>0 ||
				christmasSavingsPaymentCollected>chris_savSum||other_de>0||summerSavingsPaymentCollected>summer_savSum||
				add_deSum2>0||add_deSum3>0){yearToDateAmount.innerHTML+= '<hr>';}
				if (pensionSum>0) {yearToDateAmount.innerHTML+= pensionSum.toFixed(2)+' £<br>';}
				if (pensionEmpSum >0) {yearToDateAmount.innerHTML+= pensionEmpSum.toFixed(2) +' £<br>';}
				var totalPension = pensionSum + pensionEmpSum;
				if (totalPension>0){yearToDateAmount.innerHTML+= totalPension.toFixed(2)+' £<hr>';}
				
				yearToDateAmount.innerHTML+= netPaySum.toFixed(2)+' £<br>';
				yearToDateAmount.innerHTML+= '<b>'+gross_paySum.toFixed(2)+' £</b>';
				
				//year to date names
				var yearToDateNames = document.getElementById("yearToDateNames");
				yearToDateNames.innerHTML = 'Tax<br> National Insurance<hr>' ;
				if (union_deSum>0){yearToDateNames.innerHTML+= 'Union<br>';}
				if (companyLoanSum>0){yearToDateNames.innerHTML+= 'Loan Deduction<br>';}
				if (studentLoanDeductionSum>0){yearToDateNames.innerHTML+= 'Student Loan<br>';}
				if (christmasSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Christmas Savings Deductions<br>';}
				if (christmasSavingsPaymentCollected>chris_savSum){yearToDateNames.innerHTML+= 'Christmas Savings Total Ded.<br>';}
				if (summerSavingsPaymentCollected>0){yearToDateNames.innerHTML+= 'Summer Savings Deductions<br>';}
				if (summerSavingsPaymentCollected>summer_savSum){yearToDateNames.innerHTML+= 'Summer Savings Total Ded.<br>';}
				
				if (other_de>0){yearToDateNames.innerHTML+= otherDeductionName+'<br>';}
				if (add_deSum2>0){yearToDateNames.innerHTML+= otherDeduction2Name+'<br>';}
				if (add_deSum3>0){yearToDateNames.innerHTML+= otherDeduction3Name+'<br>';}
				if (companyLoanSum >0 || studentLoanDeductionSum>0 || union_deSum >0 || christmasSavingsPaymentCollected>0||
				other_de>0||summerSavingsPaymentCollected>summer_savSum ||add_deSum2>0||add_deSum3>0){yearToDateNames.innerHTML+= '<hr>';}
				if (pensionSum>0){yearToDateNames.innerHTML+= 'Employee Pension<br>';}
				if (pensionEmpSum>0){yearToDateNames.innerHTML+= 'Employer Pension<br>';}
				if (totalPension>0){yearToDateNames.innerHTML+= 'Total Pension<hr>';}
				
				yearToDateNames.innerHTML+= 'Total Net Pay<br>';
				yearToDateNames.innerHTML+= 'Total Gross Pay<br>';
				
				
				//-------Percentage payments Value--------------------//
				var holidaysPercentage = response.holidaysPercentage;
				var bankHolidayPercentge = response.bankHolidayPercentge;
				var sicknessPercentage  = response.sicknessPercentage;
				var parentalPercentage  = response.parentalPercentage;
				var overtimePercentage = response.overtimePercentage;
				var otherPercentage = response.otherPercentage;
				var basicPaymentsPercentage = response.basicPaymentsPercentage;
						
				//percentage amounts
				var yearToDatePercentageAmount = document.getElementById("yearToDatePercentageAmount");
				yearToDatePercentageAmount.innerHTML= basicPaymentsPercentage.toFixed(2)+' %<br>';
				if (holidaysPercentage>0){yearToDatePercentageAmount.innerHTML+= holidaysPercentage.toFixed(2)+' %<br>';}
				if (sicknessPercentage>0){yearToDatePercentageAmount.innerHTML+= sicknessPercentage.toFixed(2)+' %<br>';}
				if (overtimePercentage>0){yearToDatePercentageAmount.innerHTML+= overtimePercentage.toFixed(2)+' %<br>';}
				if (parentalPercentage>0){yearToDatePercentageAmount.innerHTML+= parentalPercentage.toFixed(2)+' %<br>';}
				if (otherPercentage>0){yearToDatePercentageAmount.innerHTML+= otherPercentage.toFixed(2)+' %<br>';}
				if (bankHolidayPercentge>0){yearToDatePercentageAmount.innerHTML+= bankHolidayPercentge.toFixed(2)+' %<br>';}
				
				//percentage amounts hidden
				var yearToDatePercentageAmountHid = document.getElementById("yearToDatePercentageAmountHid");
				yearToDatePercentageAmountHid.innerHTML= 'Premium<br>';
				if (holidaysPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
				if (sicknessPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
				if (overtimePercentage>0){yearToDatePercentageAmountHid.innerHTML+='Premium<br>';}
				if (parentalPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
				if (otherPercentage>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
				if (bankHolidayPercentge>0){yearToDatePercentageAmountHid.innerHTML+= 'Premium<br>';}
				
				// percentage names
				var yearToDatePercentageNames = document.getElementById("yearToDatePercentageNames");
				yearToDatePercentageNames.innerHTML= 'Basic Pay <br>';
				if (holidaysPercentage>0){yearToDatePercentageNames.innerHTML+= 'Holiday Payments<br>';}
				if (sicknessPercentage>0){yearToDatePercentageNames.innerHTML+= 'Sickness Payments<br>';}
				if (overtimePercentage>0){yearToDatePercentageNames.innerHTML+= 'Overtime Payments<br>';}
				if (parentalPercentage>0){yearToDatePercentageNames.innerHTML+= 'Paternity Payments<br>';}
				if (otherPercentage>0){yearToDatePercentageNames.innerHTML+= 'Other Payments<br>';}
				if (bankHolidayPercentge>0){yearToDatePercentageNames.innerHTML+= 'Bank Holiday Payments<br>';}
				
				//holiday table
				var holidayStart = response.holidayStart;
				var holidayEnd = response.holidayEnd;
				var currentDate = response.currentDate;
				var totalHolidaysUsed = response.totalHolidaysUsed;
				var totalHolidaysBooked = response.totalHolidaysBooked;
				var holidaysNotUsed = response.holidaysNotUsed;
				var nextFullHoliday = response.nextFullHoliday;
				var daysSinceLastHoliday = response.daysSinceLastHoliday;
				var holidaysEarned = response.holidaysEarned;

				var holidayStatisticsAmount = document.getElementById("holidayStatisticsAmount");

				holidayStatisticsAmount.innerHTML= totalHolidaysUsed;
				if (totalHolidaysUsed==1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
				else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
					
				if (totalHolidaysBooked>0)
				{
					holidayStatisticsAmount.innerHTML+= totalHolidaysBooked;
					if (totalHolidaysBooked<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
					else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (holidaysNotUsed>0)
				{
					holidayStatisticsAmount.innerHTML+= holidaysNotUsed;
					if (holidaysNotUsed<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
					else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (holidaysEarned>0)
				{
					holidayStatisticsAmount.innerHTML+= holidaysEarned;
					if (holidaysEarned<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
					else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (nextFullHoliday === "Holiday!")
				{
					holidayStatisticsAmount.innerHTML+= '<b>'+nextFullHoliday+'</b><br>';
				}	
				else if (nextFullHoliday>0)
				{
					holidayStatisticsAmount.innerHTML+= nextFullHoliday;
					if (nextFullHoliday<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
					else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
				}
				
				if (daysSinceLastHoliday === "Holiday!")
				{
					holidayStatisticsAmount.innerHTML+= '<b>'+daysSinceLastHoliday+'</b><br>';
				}		
				else if (daysSinceLastHoliday>0)
				{
					holidayStatisticsAmount.innerHTML+= daysSinceLastHoliday;
					if (daysSinceLastHoliday<=1){holidayStatisticsAmount.innerHTML+= ' day<br>';}
					else{holidayStatisticsAmount.innerHTML+= ' days<br>';}
				}

				
				var holidayStatisticsNames = document.getElementById("holidayStatisticsNames");
				holidayStatisticsNames.innerHTML= 'Holidays Used:<br>';
				if (totalHolidaysBooked>0){holidayStatisticsNames.innerHTML+= 'Holidays Booked:<br>';}
				if (holidaysNotUsed>0){holidayStatisticsNames.innerHTML+= 'Holidays Available:<br>';}
				if (holidaysEarned>0){holidayStatisticsNames.innerHTML+= 'Holidays Earned:<br>';}
				
				if (nextFullHoliday>0 || nextFullHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Till Next Holiday:<br>';}
				if (daysSinceLastHoliday>0 || daysSinceLastHoliday === "Holiday!"){holidayStatisticsNames.innerHTML+= 'Days Since Last Holiday:<br>';}
				
				
				//last 13 weeks totals
				var yearToDateLast12WeeksAmount = document.getElementById("yearToDateLast12WeeksAmount");
				var taxSumLast12Weeks = Number(response.taxSumLast12Weeks)/13;
				var NISumLast12Weeks = Number(response.NISumLast12Weeks)/13;
				var union_deSumLast12Weeks = Number(response.union_deSumLast12Weeks)/13;
				var pensionSumLast12Weeks = Number(response.pensionSumLast12Weeks)/13;
				var chris_savSumLast12Weeks = Number(response.chris_savSumLast12Weeks)/13;
				var summer_savSumLast12Weeks = Number(response.summer_savSumLast12Weeks)/13;
				var other_deLast12Weeks = Number(response.other_deLast12Weeks)/13;
				var add_deSum2Last12Weeks = Number(response.add_deSum2Last12Weeks)/13;
				var add_deSum3Last12Weeks = Number(response.add_deSum3Last12Weeks)/13;
				var netPaySumLast12Weeks = Number(response.netPaySumLast12Weeks)/13;
				var gross_paySumLast12Weeks = Number(response.gross_paySumLast12Weeks)/13;
				var pensionEmpSumLast12Weeks = Number(response.pensionEmpSumLast12Weeks)/13;
				var companyLoanSumLast12Weeks = Number(response.companyLoanSumLast12Weeks)/13;
				var studentLoanDeductionSumLast12Weeks = Number(response.studentLoanDeductionSumLast12Weeks)/13;
				
				//last 13 weeks amounts
				yearToDateLast12WeeksAmount.innerHTML = taxSumLast12Weeks.toFixed(2)+' £<br>'+NISumLast12Weeks.toFixed(2)+' £<hr>';
				if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= union_deSumLast12Weeks.toFixed(2)+' £<br>';}
				if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= companyLoanSumLast12Weeks.toFixed(2)+' £<br>';}
				if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmount.innerHTML+= studentLoanDeductionSumLast12Weeks.toFixed(2)+' £<br>';}
				if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= chris_savSumLast12Weeks.toFixed(2)+' £<br>';}
				if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= summer_savSumLast12Weeks.toFixed(2)+' £<br>';}
				
				if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= other_deLast12Weeks.toFixed(2)+' £<br>';}
				if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum2Last12Weeks.toFixed(2)+' £<br>';}
				if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= add_deSum3Last12Weeks.toFixed(2)+' £<br>';}
				if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 || chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= '<hr>';}
				if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmount.innerHTML+= pensionSumLast12Weeks.toFixed(2)+' £<br>';}
				if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmount.innerHTML+= pensionEmpSumLast12Weeks.toFixed(2) +' £<br>';}
				var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
				if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmount.innerHTML+= totalPensionLast12Weeks.toFixed(2)+' £<hr>';}
				
				yearToDateLast12WeeksAmount.innerHTML+= netPaySumLast12Weeks.toFixed(2)+' £<br>';
				yearToDateLast12WeeksAmount.innerHTML+= '<b>'+gross_paySumLast12Weeks.toFixed(2)+' £</b>';
				
				
				//last 13 weeks names
				var yearToDateLast12WeeksNames = document.getElementById("yearToDateLast12WeeksNames");
				yearToDateLast12WeeksNames.innerHTML = 'Tax<br> National Insurance<hr>' ;
				if (union_deSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Union<br>';}
				if (companyLoanSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Loan Deduction<br>';}
				if (studentLoanDeductionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Student Loan<br>';}
				if (chris_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Christmas Savings Deductions<br>';}
				if (summer_savSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Summer Savings Deductions<br>';}
				
				if (other_deLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeductionName+'<br>';}
				if (add_deSum2Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction2Name+'<br>';}
				if (add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= otherDeduction3Name+'<br>';}
				if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
				summer_savSumLast12Weeks>0||other_deLast12Weeks>0||summer_savSumLast12Weeks>0 ||add_deSum2Last12Weeks>0||
				add_deSum3Last12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= '<hr>';}
				if (pensionSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employee Pension<br>';}
				if (pensionEmpSumLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Employer Pension<br>';}
				if (totalPensionLast12Weeks>0){yearToDateLast12WeeksNames.innerHTML+= 'Pension<hr>';}
				
				yearToDateLast12WeeksNames.innerHTML+= 'Net Pay<br>';
				yearToDateLast12WeeksNames.innerHTML+= 'Gross Pay<br>';
				
				var basicPaySum = Number(response.basicPaySum);
				var basicHoursSum = Number(response.basicHoursSum);
				var ot1_paySum = Number(response.ot1_paySum);
				var ot1_unitsSum = Number(response.ot1_unitsSum);
				var ot2_paySum = Number(response.ot2_paySum);
				var ot2_unitsSum = Number(response.ot2_unitsSum);
				var hol_unitsSum = Number(response.hol_unitsSum);
				var hol_paySum = Number(response.hol_paySum);
				var enhol_unitsSum = Number(response.enhol_unitsSum);
				var enhol_paySum = Number(response.enhol_paySum);
				var bhol_unitsSum = Number(response.bhol_unitsSum);
				var bhol_paySum = Number(response.bhol_paySum);
				var bhol_bonusSum = Number(response.bhol_bonusSum);
				var sick_paySum = Number(response.sick_paySum);
				var sick_unitsSum = Number(response.sick_unitsSum);
				var fam_unitsSum = Number(response.fam_unitsSum);
				var fam_paySum = Number(response.fam_paySum);
				var ber_unitsSum = Number(response.ber_unitsSum);
				var ber_paySum = Number(response.ber_paySum);
				var comp_unitsSum = Number(response.comp_unitsSum);
				var comp_paySum = Number(response.comp_paySum);
				var uns_premSum = Number(response.uns_premSum);
				var uns_prem_unSum = Number(response.uns_prem_unSum);
				var uns_holSum = Number(response.uns_holSum);
				var uns_hol_unSum = Number(response.uns_hol_unSum);
				var uns_sickSum = Number(response.uns_sickSum);
				var uns_sick_unSum = Number(response.uns_sick_unSum);
				var uns_familySum = Number(response.uns_familySum);
				var uns_family_unSum = Number(response.uns_family_unSum);
				var uns_berSum = Number(response.uns_berSum);
				var uns_ber_unSum = Number(response.uns_ber_unSum);
				var uns_compSum = Number(response.uns_compSum);
				var uns_comp_unSum = Number(response.uns_comp_unSum);
				var SPP_Sum = Number(response.SPP_Sum);
				var SSP_Sum = Number(response.SSP_Sum);
				
				var totalHours = Number(response.totalHours); //cia visos valandos praleistos darbe iskaitant virsvalandzius ir unpaid breakus
				var totalPaidHours = ot1_unitsSum + ot2_unitsSum + basicHoursSum;
				var unpaidBreaksLength = totalHours - totalPaidHours;
				var pieceWorkSum = Number(response.pieceWorkSum);
				var paybackSum = Number(response.paybackSum);
				
				var add_paySum = Number(response.add_paySum);
				var add_pay2Sum = Number(response.add_pay2Sum);
				var add_pay3Sum = Number(response.add_pay3Sum);
				
				var saturdayExtraPaySum = Number(response.saturdayExtraPaySum);
				var sundayExtraPaySum = Number(response.sundayExtraPaySum);
				var saturdayHoursSum = Number(response.saturdayHoursSum);
				var sundayHoursSum = Number(response.sundayHoursSum);
				var SAPSum = Number(response.SAPSum);
				var salarySum = Number(response.salarySum);
				var bonusSum = Number(response.bonusSum);
				var commissionsSum = Number(response.commissionsSum);
							
				//year to date II amounts
				var yearToDateAmountII = document.getElementById("yearToDateAmountII");
				yearToDateAmountII.innerHTML = basicPaySum.toFixed(2)+' £<br>';
				if (salarySum>0){yearToDateAmountII.innerHTML+= salarySum.toFixed(2)+' £<br>';}
				if (uns_premSum>0){yearToDateAmountII.innerHTML+= uns_premSum.toFixed(2)+' £<br>';}
				if (ot1_paySum>0){yearToDateAmountII.innerHTML+= ot1_paySum.toFixed(2)+' £<br>';}
				if (ot2_paySum>0){yearToDateAmountII.innerHTML+= ot2_paySum.toFixed(2)+' £<br>';}

				if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (hol_paySum>0){yearToDateAmountII.innerHTML+= hol_paySum.toFixed(2)+' £<br>';}
				if (enhol_paySum>0){yearToDateAmountII.innerHTML+= enhol_paySum.toFixed(2)+' £<br>';}
				if (uns_holSum>0){yearToDateAmountII.innerHTML+= uns_holSum.toFixed(2)+' £<br>';}
				if (bhol_paySum>0){yearToDateAmountII.innerHTML+= bhol_paySum.toFixed(2)+' £<br>';}
				if (bhol_bonusSum>0){yearToDateAmountII.innerHTML+= bhol_bonusSum.toFixed(2)+' £<br>';}
				
				if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (saturdayExtraPaySum>0){yearToDateAmountII.innerHTML+= saturdayExtraPaySum.toFixed(2)+' £<br>';}
				if (sundayExtraPaySum>0){yearToDateAmountII.innerHTML+= sundayExtraPaySum.toFixed(2)+' £<br>';}
				
				if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (sick_paySum>0){yearToDateAmountII.innerHTML+= sick_paySum.toFixed(2)+' £<br>';}
				if (uns_sickSum>0){yearToDateAmountII.innerHTML+= uns_sickSum.toFixed(2)+' £<br>';}
				if (SSP_Sum>0){yearToDateAmountII.innerHTML+= SSP_Sum.toFixed(2)+' £<br>';}
				
				
				if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (fam_paySum>0){yearToDateAmountII.innerHTML+= fam_paySum.toFixed(2)+' £<br>';}
				if (uns_familySum>0){yearToDateAmountII.innerHTML+= uns_familySum.toFixed(2)+' £<br>';}
				if (SPP_Sum>0){yearToDateAmountII.innerHTML+= SPP_Sum.toFixed(2)+' £<br>';}
				if (SAPSum>0){yearToDateAmountII.innerHTML+= SAPSum.toFixed(2)+' £<br>';}
				
				if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (ber_paySum>0){yearToDateAmountII.innerHTML+= ber_paySum.toFixed(2)+' £<br>';}
				if (uns_berSum>0){yearToDateAmountII.innerHTML+= uns_berSum.toFixed(2)+' £<br>';}
				if (comp_paySum>0){yearToDateAmountII.innerHTML+= comp_paySum.toFixed(2)+' £<br>';}
				if (uns_compSum>0){yearToDateAmountII.innerHTML+= uns_compSum.toFixed(2)+' £<br>';}
				
				if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (pieceWorkSum>0){yearToDateAmountII.innerHTML += pieceWorkSum.toFixed(2)+' £<br>';}
				if (paybackSum>0){yearToDateAmountII.innerHTML += paybackSum.toFixed(2)+' £<br>';}
				if (bonusSum>0){yearToDateAmountII.innerHTML += bonusSum.toFixed(2)+' £<br>';}
				if (commissionsSum>0){yearToDateAmountII.innerHTML += commissionsSum.toFixed(2)+' £<br>';}
				
				if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountII.innerHTML+= '<hr>';}
				if (add_paySum>0){yearToDateAmountII.innerHTML += add_paySum.toFixed(2)+' £<br>';}
				if (add_pay2Sum>0){yearToDateAmountII.innerHTML += add_pay2Sum.toFixed(2)+' £<br>';}
				if (add_pay3Sum>0){yearToDateAmountII.innerHTML += add_pay3Sum.toFixed(2)+' £<br>';}		
				
				//year to date amounts hidden
				var yearToDateAmountIIHid = document.getElementById("yearToDateAmountIIHid");
						
				yearToDateAmountIIHid.innerHTML = 'Premium<br>';
				if (salarySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_premSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (ot1_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (ot2_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}

				if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (hol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (enhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_holSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (bhol_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (bhol_bonusSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				
				if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (saturdayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (sundayExtraPaySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				
				if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (sick_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_sickSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (SSP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				
				
				if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (fam_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_familySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (SPP_Sum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (SAPSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				
				if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (ber_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_berSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (comp_paySum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				if (uns_compSum>0){yearToDateAmountIIHid.innerHTML+= 'Premium<br>';}
				
				if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0 || paybackSum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (pieceWorkSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				if (paybackSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				if (bonusSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				if (commissionsSum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				
				if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateAmountIIHid.innerHTML+= '<hr>';}
				if (add_paySum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				if (add_pay2Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
				if (add_pay3Sum>0){yearToDateAmountIIHid.innerHTML += 'Premium<br>';}
						
				//year to date II names
				var yearToDateNamesII = document.getElementById("yearToDateNamesII");
				
				yearToDateNamesII.innerHTML = 'Total Basic Pay<br>';
				if (salarySum>0){yearToDateNamesII.innerHTML+= 'Total Salary Pay<br>';}
				if (uns_premSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Basic Pay<br>';}
				if (ot1_paySum>0){yearToDateNamesII.innerHTML+= 'Total Overtime 1 Pay<br>';}
				if (ot2_paySum>0){yearToDateNamesII.innerHTML+= 'Total Overtime 2 Pay<br>';}

				if (hol_paySum>0 || enhol_paySum>0 || bhol_paySum>0 || bhol_bonusSum>0 ||uns_holSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (hol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Holiday Pay<br>';}
				if (enhol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Enhanced Holiday Pay<br>';}
				if (uns_holSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Holiday Pay<br>';}
				if (bhol_paySum>0){yearToDateNamesII.innerHTML+= 'Total Bank Holiday Pay<br>';}
				if (bhol_bonusSum>0){yearToDateNamesII.innerHTML+= 'Total Bank Holiday Bonuses<br>';}
				
				if (sundayExtraPaySum >0 || saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (saturdayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Total Saturday Bonuses<br>';}
				if (sundayExtraPaySum>0){yearToDateNamesII.innerHTML+= 'Total Sunday Bonuses<br>';}
				
				if (sick_paySum >0 || uns_sickSum>0 ||SSP_Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (sick_paySum>0){yearToDateNamesII.innerHTML+= 'Total Sickness Pay<br>';}
				if (uns_sickSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Sickness Pay<br>';}
				if (SSP_Sum>0){yearToDateNamesII.innerHTML+= 'Total SSP Pay<br>';}
				
				
				if (fam_paySum >0 || uns_familySum>0 ||SPP_Sum>0 || SAPSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (fam_paySum>0){yearToDateNamesII.innerHTML+= 'Total Parental Pay<br>';}
				if (uns_familySum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Parental Pay<br>';}
				if (SPP_Sum>0){yearToDateNamesII.innerHTML+= 'Total SPP Pay<br>';}
				if (SAPSum>0){yearToDateNamesII.innerHTML+= 'Total SAP Pay<br>';}
				
				if (ber_paySum >0 || uns_berSum>0 ||comp_paySum>0 || uns_compSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (ber_paySum>0){yearToDateNamesII.innerHTML+= 'Total Bereavement Pay<br>';}
				if (uns_berSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Bereavement Pay<br>';}
				if (comp_paySum>0){yearToDateNamesII.innerHTML+= 'Total Compassionate Pay<br>';}
				if (uns_compSum>0){yearToDateNamesII.innerHTML+= 'Total Unsocial Compass. Pay<br>';}
				
				if (pieceWorkSum >0 ||bonusSum>0|| commissionsSum>0|| paybackSum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (pieceWorkSum>0){yearToDateNamesII.innerHTML += 'Total Piece Work Pay<br>';}
				if (paybackSum>0){yearToDateNamesII.innerHTML += 'Total Back Pays<br>';}
				if (bonusSum>0){yearToDateNamesII.innerHTML += 'Total Bonuses Pay<br>';}
				if (commissionsSum>0){yearToDateNamesII.innerHTML += 'Total Commissions Pay<br>';}
				
				if (add_paySum >0 || add_pay2Sum>0 ||add_pay3Sum>0){yearToDateNamesII.innerHTML+= '<hr>';}
				if (add_paySum>0){yearToDateNamesII.innerHTML += 'Add. Pay 1<br>';}
				if (add_pay2Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 2<br>';}
				if (add_pay3Sum>0){yearToDateNamesII.innerHTML += 'Add. Pay 3<br>';}
						

				//--------------------year to date totals hours div-----------------------------//
				var yearToDateAmountHours = document.getElementById("yearToDateAmountHours");
				yearToDateAmountHours.innerHTML= totalHours.toFixed(2)+' h<br>';
				if (totalPaidHours>0){yearToDateAmountHours.innerHTML+= totalPaidHours.toFixed(2)+' h<br>';}
				if (unpaidBreaksLength>0){yearToDateAmountHours.innerHTML+= unpaidBreaksLength.toFixed(2)+' h<br>';}

				if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
				yearToDateAmountHours.innerHTML+= basicHoursSum.toFixed(2)+' h<br>';
				if (uns_prem_unSum>0){yearToDateAmountHours.innerHTML+= uns_prem_unSum.toFixed(2)+' h<br>';}		
				if (ot1_unitsSum>0){yearToDateAmountHours.innerHTML+= ot1_unitsSum.toFixed(2)+' h<br>';}
				if (ot2_unitsSum>0){yearToDateAmountHours.innerHTML+= ot2_unitsSum.toFixed(2)+' h<br>';}
				
				if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
				if (hol_unitsSum>0){yearToDateAmountHours.innerHTML+= hol_unitsSum.toFixed(2)+' h<br>';}
				if (enhol_unitsSum>0){yearToDateAmountHours.innerHTML+= enhol_unitsSum.toFixed(2)+' h<br>';}
				if (uns_hol_unSum>0){yearToDateAmountHours.innerHTML+= uns_hol_unSum.toFixed(2)+' h<br>';}
				if (bhol_unitsSum>0){yearToDateAmountHours.innerHTML+= bhol_unitsSum.toFixed(2)+' h<br>';}
				
				if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
				if (saturdayHoursSum>0){yearToDateAmountHours.innerHTML+= saturdayHoursSum.toFixed(2)+' h<br>';}
				if (sundayHoursSum>0){yearToDateAmountHours.innerHTML+= sundayHoursSum.toFixed(2)+' h<br>';}	
				
				if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
				if (uns_sick_unSum>0){yearToDateAmountHours.innerHTML+= uns_sick_unSum.toFixed(2)+' h<br>';}
				if (sick_unitsSum>0){yearToDateAmountHours.innerHTML+= sick_unitsSum.toFixed(2)+' h<br>';}
				if (uns_family_unSum>0){yearToDateAmountHours.innerHTML+= uns_family_unSum.toFixed(2)+' h<br>';}
				if (fam_unitsSum>0){yearToDateAmountHours.innerHTML+= fam_unitsSum.toFixed(2)+' h<br>';}
				
				if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= '<hr>';}
				if (uns_ber_unSum>0){yearToDateAmountHours.innerHTML+= uns_ber_unSum.toFixed(2)+' h<br>';}
				if (ber_unitsSum>0){yearToDateAmountHours.innerHTML+= ber_unitsSum.toFixed(2)+' h<br>';}
				if (uns_comp_unSum>0){yearToDateAmountHours.innerHTML+= uns_comp_unSum.toFixed(2)+' h<br>';}
				if (comp_unitsSum>0){yearToDateAmountHours.innerHTML+= comp_unitsSum.toFixed(2)+' h<br>';}
						
				var yearToDateNamesHours = document.getElementById("yearToDateNamesHours");
				yearToDateNamesHours.innerHTML= 'Total Hours Spent At Work<br>';
				if (totalPaidHours>0){yearToDateNamesHours.innerHTML+= 'Total Paid Hours Spent At Work<br>';}
				if (unpaidBreaksLength>0){yearToDateNamesHours.innerHTML+= 'Total Unpaid Break Hours<br>';}
				
				if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
				yearToDateNamesHours.innerHTML+= 'Total Basic Hours <br>';
				if (uns_prem_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Basic Hours<br>';}
				if (ot1_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Overtime 1 Hours<br>';}
				if (ot2_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Overtime 2 Hours<br>';}
				
				if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
				if (hol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Holiday Hours<br>';}
				if (enhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Enhanced Holiday Hours<br>';}
				if (uns_hol_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Holiday Hours<br>';}
				if (bhol_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Bank Holiday Hours<br>';}
				
				if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
				if (saturdayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Total Saturday Hours<br>';}
				if (sundayHoursSum>0){yearToDateNamesHours.innerHTML+= 'Total Sunday Hours<br>';}
				
				if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
				if (uns_sick_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Sickness Hours<br>';}
				if (sick_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Paid Sickness Hours<br>';}
				if (uns_family_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Parental Hours<br>';}
				if (fam_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Parental Leave Hours<br>';}
				
				if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= '<hr>';}
				if (uns_ber_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Bereav. Hours<br>';}
				if (ber_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Bereavement Leave Hours<br>';}
				if (uns_comp_unSum>0){yearToDateNamesHours.innerHTML+= 'Total Unsocial Compass. Hours<br>';}
				if (comp_unitsSum>0){yearToDateNamesHours.innerHTML+= 'Total Compassionate Hours<br>';}
				
				var yearToDateAmountHoursHid = document.getElementById("yearToDateAmountHoursHid");
				yearToDateAmountHoursHid.innerHTML= 'Premium<br>';
				if (totalPaidHours>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (unpaidBreaksLength>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				
				if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
				yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';
				if (uns_prem_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (ot1_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (ot2_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				
				if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
				if (hol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (enhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (uns_hol_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (bhol_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				
				if (saturdayHoursSum >0 || sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
				if (saturdayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (sundayHoursSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				
				if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
				if (uns_sick_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (sick_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (uns_family_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (fam_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				
				if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= '<hr>';}
				if (uns_ber_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (ber_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (uns_comp_unSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
				if (comp_unitsSum>0){yearToDateAmountHoursHid.innerHTML+= 'Premium<br>';}
					
								
				//--------------weeklyAverages div--------------------------//
				taxPeriodNumber = document.getElementById("taxPeriodNr").value;
				//petvarkome Tax numeri
				if(taxPeriodNumber>0 && taxPeriodNumber<=52)
				{
					taxPeriodNumberNew = taxPeriodNumber;
				}
				else if (taxPeriodNumber>52 && taxPeriodNumber<=104)
				{
					taxPeriodNumberNew = taxPeriodNumber -52;
				}
				else if (taxPeriodNumber>104 && taxPeriodNumber<=156)
				{
					taxPeriodNumberNew = taxPeriodNumber -104;
				}
				else if (taxPeriodNumber>156 && taxPeriodNumber<=204)
				{
					taxPeriodNumberNew = taxPeriodNumber -156;
				}
				else{
					
				}
				
				var averageTax = taxSum / taxPeriodNumberNew;
				var averageNI = NISum / taxPeriodNumberNew;
				gross_paySum = Number(gross_paySum);
				var averageGrossPay = gross_paySum / taxPeriodNumberNew;
				netPaySum = Number(netPaySum);
				var averageNetPay = netPaySum / taxPeriodNumberNew;
				var averageBasicHoursPay = basicPaySum / taxPeriodNumberNew;
				var averageBasicHours = basicHoursSum / taxPeriodNumberNew ;
				var averageUnsocialPrem = uns_premSum / taxPeriodNumberNew;
				var averageUnsocialHours = uns_prem_unSum / taxPeriodNumberNew;
				var averageOvertimeHours = (ot1_unitsSum + ot2_unitsSum) / taxPeriodNumberNew; //sudeti overtime 1 ir overtime 2 hours
				var averageOvertimePay = (ot1_paySum + ot2_paySum) / taxPeriodNumberNew;; // sudeti overtime1 ir overtime 2 pay
				
				
				//weeklyAverages amounts
				var weeklyAveragesAmount = document.getElementById("weeklyAveragesAmount");
				weeklyAveragesAmount.innerHTML= averageTax.toFixed(2)+' £<br>';
				if (averageNI>0){weeklyAveragesAmount.innerHTML+= averageNI.toFixed(2)+' £<br>';}
				if (averageGrossPay>0){weeklyAveragesAmount.innerHTML+= averageGrossPay.toFixed(2)+' £<br>';}
				if (averageNetPay>0){weeklyAveragesAmount.innerHTML+= averageNetPay.toFixed(2)+' £<br>';}
				if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmount.innerHTML+= '<hr>';}
				
				if (averageBasicHoursPay>0){weeklyAveragesAmount.innerHTML+= averageBasicHoursPay.toFixed(2)+' £<br>';}
				if (averageBasicHours>0){weeklyAveragesAmount.innerHTML+= averageBasicHours.toFixed(2)+' h<br>';}
				if (averageUnsocialPrem>0){weeklyAveragesAmount.innerHTML+= averageUnsocialPrem.toFixed(2)+' £<br>';}
				if (averageUnsocialHours>0){weeklyAveragesAmount.innerHTML+= averageUnsocialHours.toFixed(2)+' h<br>';}
				if (averageOvertimePay>0){weeklyAveragesAmount.innerHTML+= averageOvertimePay.toFixed(2)+' £<br>';}
				if (averageOvertimeHours>0){weeklyAveragesAmount.innerHTML+= averageOvertimeHours.toFixed(2)+' h<br>';}
				//weeklyAverages names
				var weeklyAveragesNames = document.getElementById("weeklyAveragesNames");
				weeklyAveragesNames.innerHTML= 'Average Tax<br>';
				if (NISum>0){weeklyAveragesNames.innerHTML+= 'Average NI<br>';}
				if (averageGrossPay>0){weeklyAveragesNames.innerHTML+= 'Average Gross Pay<br>';}
				if (averageNetPay>0){weeklyAveragesNames.innerHTML+= 'Average Net Pay<br>';}
				if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesNames.innerHTML+= '<hr>';}
				
				if (averageBasicHoursPay>0){weeklyAveragesNames.innerHTML+= 'Average Basic Pay<br>';}
				if (averageBasicHours>0){weeklyAveragesNames.innerHTML+= 'Average Basic Hours<br>';}
				if (averageUnsocialPrem>0){weeklyAveragesNames.innerHTML+= 'Average Unsocial Basic Pay<br>';}
				if (averageUnsocialHours>0){weeklyAveragesNames.innerHTML+= 'Average Unsocial Basic Hours<br>';}
				if (averageOvertimePay>0){weeklyAveragesNames.innerHTML+= 'Average Overtime Pay<br>';}
				if (averageOvertimeHours>0){weeklyAveragesNames.innerHTML+= 'Average Overtime Hours<br>';}
				
				
				//-----------------days statistics-----------------------------//
				var daysNotSelected = Number(response.daySum0);
				var daysIn = Number(response.daySum1);
				var daysOff = Number(response.daySum2);
				var daysHoliday = Number(response.daySum3);
				var daysHalfInHalfHol = Number(response.daySum4);
				var daysUnpaidHoliday = Number(response.daySum5);
				var daysInSick = Number(response.daySum6);
				var daysSickness = Number(response.daySum7);
				var daysAbsence = Number(response.daySum8);
				var daysParental = Number(response.daySum9);
				var daysBereavement = Number(response.daySum10);
				var daysCompassionate = Number(response.daySum11);
				var daysSinceLastSick = response.daysSinceLastSick;
				
				//days amounts
				var dayStatisticsAmount = document.getElementById("dayStatisticsAmount");
				
					dayStatisticsAmount.innerHTML= daysIn.toFixed(0);
					if (daysIn<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
					
				if (daysOff>0)
				{
					dayStatisticsAmount.innerHTML+= daysOff.toFixed(0);
					if (daysOff<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysHoliday>0)
				{
					dayStatisticsAmount.innerHTML+= daysHoliday.toFixed(0);
					if (daysHoliday<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysHalfInHalfHol>0)
				{
					dayStatisticsAmount.innerHTML+= daysHalfInHalfHol.toFixed(0);
					if (daysHalfInHalfHol<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysUnpaidHoliday>0)
				{
					dayStatisticsAmount.innerHTML+= daysUnpaidHoliday.toFixed(0);
					if (daysUnpaidHoliday<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
				if (daysInSick>0)
				{
					dayStatisticsAmount.innerHTML+= daysInSick.toFixed(0);
					if (daysInSick<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysSickness>0)
				{
					dayStatisticsAmount.innerHTML+= daysSickness.toFixed(0);
					if (daysSickness<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysAbsence>0)
				{
					dayStatisticsAmount.innerHTML+= daysAbsence.toFixed(0);
					if (daysAbsence<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysParental>0)
				{
					dayStatisticsAmount.innerHTML+= daysParental.toFixed(0);
					if (daysParental<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysBereavement>0)
				{
					dayStatisticsAmount.innerHTML+= daysBereavement.toFixed(0);
					if (daysBereavement<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysCompassionate>0)
				{
					dayStatisticsAmount.innerHTML+= daysCompassionate.toFixed(0);
					if (daysCompassionate<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
					
				if (daysNotSelected>0){dayStatisticsAmount.innerHTML+= daysNotSelected.toFixed(0);
					if (daysNotSelected<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}
				if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmount.innerHTML+= '<hr>';}
				if (daysSinceLastSick ==="Today")
				{
					dayStatisticsAmount.innerHTML+= '<b>'+daysSinceLastSick+'</b>';
				}
				else if (daysSinceLastSick>0)
				{
					dayStatisticsAmount.innerHTML+= daysSinceLastSick;
					if (daysSinceLastSick<=1){dayStatisticsAmount.innerHTML+= ' day<br>';}
					else{dayStatisticsAmount.innerHTML+= ' days<br>';}
				}

				// days names
				var dayStatisticsNames = document.getElementById("dayStatisticsNames");
				dayStatisticsNames.innerHTML= 'Days In<br>';
				if (daysOff>0){dayStatisticsNames.innerHTML+= 'Days Off<br>';}
				if (daysHoliday>0){dayStatisticsNames.innerHTML+= 'Holidays<br>';}
				if (daysHalfInHalfHol>0){dayStatisticsNames.innerHTML+= 'Half Days In/Half Holidays<br>';}
				if (daysUnpaidHoliday>0){dayStatisticsNames.innerHTML+= 'Unpaid Holidays<br>';}
				if (daysInSick>0){dayStatisticsNames.innerHTML+= 'Days In/Sickness<br>';}
				if (daysSickness>0){dayStatisticsNames.innerHTML+= 'Days On Sick<br>';}
				if (daysAbsence>0){dayStatisticsNames.innerHTML+= 'Days On Absence<br>';}
				if (daysParental>0){dayStatisticsNames.innerHTML+= 'Parental Leave Days<br>';}
				if (daysBereavement>0){dayStatisticsNames.innerHTML+= 'Bereavement Leave Days<br>';}
				if (daysCompassionate>0){dayStatisticsNames.innerHTML+= 'Compassionate Leave Days<br>';}
				if (daysNotSelected>0){dayStatisticsNames.innerHTML+= 'Days Not Defined<br>';}
				if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsNames.innerHTML+= '<hr>';}
				if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsNames.innerHTML+= 'Days Since Last Sick<br>';}
				
				//-------average daily statistics--------------------//
				var dailyGrossPay = response.dailyGrossPay;
				var dailyNetPay = response.dailyNetPay;
				var dailytaxSum  = response.dailytaxSum;
				var dailyNISum  = response.dailyNISum;
				var dailyHoursAtWork = response.dailyHoursAtWork;
				var dailyPaidHours = response.dailyPaidHours;
				
				var dailyGrossPayAllDays = response.dailyGrossPayAllDays;
				var dailyNetPayAllDays = response.dailyNetPayAllDays;
				var dailytaxSumAllDays  = response.dailytaxSumAllDays;
				var dailyNISumAllDays  = response.dailyNISumAllDays;
				var dailyHoursAtWorkAllDays = response.dailyHoursAtWorkAllDays;
				var dailyPaidHoursAllDays = response.dailyPaidHoursAllDays;
				
				
				//daylyaverages amounts
				var dailyAveragesAmount = document.getElementById("dailyAveragesAmount");
				dailyAveragesAmount.innerHTML= +dailyGrossPay.toFixed(2)+' £<br>';
				if (dailyNetPay>0){dailyAveragesAmount.innerHTML+= dailyNetPay.toFixed(2)+' £<br>';}
				if (dailytaxSum>0){dailyAveragesAmount.innerHTML+= dailytaxSum.toFixed(2)+' £<br>';}
				if (dailyNISum>0){dailyAveragesAmount.innerHTML+= dailyNISum.toFixed(2)+' £<br>';}
				if (dailyHoursAtWork>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWork.toFixed(2)+' h<br>';}
				if (dailyPaidHours>0){dailyAveragesAmount.innerHTML+= dailyPaidHours.toFixed(2)+' h<br>';}
				
				var dailyAveragesAmount = document.getElementById("dailyAveragesAmount");
				dailyAveragesAmount.innerHTML+= '<hr>'+dailyGrossPayAllDays.toFixed(2)+' £<br>';
				if (dailyNetPayAllDays>0){dailyAveragesAmount.innerHTML+= dailyNetPayAllDays.toFixed(2)+' £<br>';}
				if (dailytaxSumAllDays>0){dailyAveragesAmount.innerHTML+= dailytaxSumAllDays.toFixed(2)+' £<br>';}
				if (dailyNISumAllDays>0){dailyAveragesAmount.innerHTML+= dailyNISumAllDays.toFixed(2)+' £<br>';}
				if (dailyHoursAtWorkAllDays>0){dailyAveragesAmount.innerHTML+= dailyHoursAtWorkAllDays.toFixed(2)+' h<br>';}
				if (dailyPaidHoursAllDays>0){dailyAveragesAmount.innerHTML+= dailyPaidHoursAllDays.toFixed(2)+' h<br>';}
				
				//daylaverages amounts hidden
				var dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
				dailyAveragesAmountHid.innerHTML= 'Premium<br>';
				if (dailyNetPay>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailytaxSum>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailyNISum>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
				if (dailyHoursAtWork>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailyPaidHours>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				
				var dailyAveragesAmountHid = document.getElementById("dailyAveragesAmountHid");
				dailyAveragesAmountHid.innerHTML+= '<hr>Premium<br>';
				if (dailyNetPayAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailytaxSumAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailyNISumAllDays>0){dailyAveragesAmountHid.innerHTML+='Premium<br>';}
				if (dailyHoursAtWorkAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (dailyPaidHoursAllDays>0){dailyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				
				// daylyaverages names
				var dailyAveragesNames = document.getElementById("dailyAveragesNames");
				dailyAveragesNames.innerHTML= 'Average Gross Pay For Day In<br>';
				if (dailyNetPay>0){dailyAveragesNames.innerHTML+= 'Average Net Pay For Day In<br>';}
				if (dailytaxSum>0){dailyAveragesNames.innerHTML+= 'Average TAX For Day In<br>';}
				if (dailyNISum>0){dailyAveragesNames.innerHTML+= 'Average NI For Day In<br>';}
				if (dailyHoursAtWork>0){dailyAveragesNames.innerHTML+= 'Average Hours Worked Per Day<br>';}
				if (dailyPaidHours>0){dailyAveragesNames.innerHTML+= 'Average Paid Hours Per Day<br>';}
				
				var dailyAveragesNames = document.getElementById("dailyAveragesNames");
				dailyAveragesNames.innerHTML+= '<hr>Average Gross Pay For All Days<br>';
				if (dailyNetPayAllDays>0){dailyAveragesNames.innerHTML+= 'Average Net Pay For All Days<br>';}
				if (dailytaxSumAllDays>0){dailyAveragesNames.innerHTML+= 'Average TAX For All Days<br>';}
				if (dailyNISumAllDays>0){dailyAveragesNames.innerHTML+= 'Average NI For All Days <br>';}
				if (dailyHoursAtWorkAllDays>0){dailyAveragesNames.innerHTML+= 'Average Hours Worked All Days<br>';}
				if (dailyPaidHoursAllDays>0){dailyAveragesNames.innerHTML+= 'Average Paid Hours All Days <br>';}

		
				//-------average hourly statistics--------------------//
				var hourlyGrossPay = response.hourlyGrossPay;
				var hourlyNetPay = response.hourlyNetPay;
				var hourlytaxSum  = response.hourlytaxSum;
				var hourlyNISum  = response.hourlyNISum;
				
				var hourlyGrossPayTotalH = response.hourlyGrossPayTotalH;
				var hourlyNetPayTotalH = response.hourlyNetPayTotalH;
				var hourlytaxSumTotalH  = response.hourlytaxSumTotalH;
				var hourlyNISumTotalH  = response.hourlyNISumTotalH;
				
				var hourlyGrossPayAllH = response.hourlyGrossPayAllH;;
				var hourlyNetPayAllH = response.hourlyNetPayAllH;;
				var hourlytaxSumAllH  = response.hourlytaxSumAllH;;
				var hourlyNISumAllH  = response.hourlyNISumAllH;;

				//hourly averages amounts
				var hourlyAveragesAmount = document.getElementById("hourlyAveragesAmount");
				hourlyAveragesAmount.innerHTML= hourlyGrossPay.toFixed(2)+' £<br>';
				if (hourlyNetPay>0){hourlyAveragesAmount.innerHTML+= hourlyNetPay.toFixed(2)+' £<br>';}
				if (hourlytaxSum>0){hourlyAveragesAmount.innerHTML+= hourlytaxSum.toFixed(2)+' £<br>';}
				if (hourlyNISum>0){hourlyAveragesAmount.innerHTML+= hourlyNISum.toFixed(2)+' £<br>';}
				
				hourlyAveragesAmount.innerHTML+='<hr>';
				hourlyAveragesAmount.innerHTML+= hourlyGrossPayTotalH .toFixed(2)+' £<br>';
				if (hourlyNetPayTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayTotalH.toFixed(2)+' £<br>';}
				if (hourlytaxSumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumTotalH.toFixed(2)+' £<br>';}
				if (hourlyNISumTotalH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumTotalH.toFixed(2)+' £<br>';}
				
				hourlyAveragesAmount.innerHTML+='<hr>';
				hourlyAveragesAmount.innerHTML+= hourlyGrossPayAllH .toFixed(2)+' £<br>';
				if (hourlyNetPayAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNetPayAllH.toFixed(2)+' £<br>';}
				if (hourlytaxSumAllH >0){hourlyAveragesAmount.innerHTML+= hourlytaxSumAllH.toFixed(2)+' £<br>';}
				if (hourlyNISumAllH >0){hourlyAveragesAmount.innerHTML+= hourlyNISumAllH.toFixed(2)+' £<br>';}

				//hourly averages amounts hidden
				var hourlyAveragesAmountHid = document.getElementById("hourlyAveragesAmountHid");
				hourlyAveragesAmountHid.innerHTML= 'Premium<br>';
				if (hourlyNetPay>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlytaxSum>0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlyNISum>0){hourlyAveragesAmountHid.innerHTML+='Premium<br>';}
				
				hourlyAveragesAmountHid.innerHTML+='<hr>';
				hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
				if (hourlyNetPayTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlytaxSumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlyNISumTotalH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}

				hourlyAveragesAmountHid.innerHTML+='<hr>';
				hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';
				if (hourlyNetPayAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlytaxSumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (hourlyNISumAllH >0){hourlyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				
				// hourly averages names
				var hourlyAveragesNames = document.getElementById("hourlyAveragesNames");
				hourlyAveragesNames.innerHTML= 'Paid Hours In Aver. Gross Pay<br>';
				if (hourlyNetPay>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average Net Pay<br>';}
				if (hourlytaxSum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average TAX<br>';}
				if (hourlyNISum>0){hourlyAveragesNames.innerHTML+= 'Paid Hours In Average NI<br>';}
				
				hourlyAveragesNames.innerHTML+='<hr>';
				hourlyAveragesNames.innerHTML+= 'All Hours In Average Gross Pay<br>';
				if (hourlyNetPayTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average Net Pay<br>';}
				if (hourlytaxSumTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average TAX<br>';}
				if (hourlyNISumTotalH >0){hourlyAveragesNames.innerHTML+= 'All Hours In Average NI<br>';}
				
				hourlyAveragesNames.innerHTML+='<hr>';
				hourlyAveragesNames.innerHTML+= 'All Paid Hours Aver. Gross Pay<br>';
				if (hourlyNetPayAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average Net Pay<br>';}
				if (hourlytaxSumAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average TAX<br>';}
				if (hourlyNISumAllH >0){hourlyAveragesNames.innerHTML+= 'All Paid Hours Average NI<br>';}
				
				
				//last 13 weeks amounts hidden
				var yearToDateLast12WeeksAmountHid = document.getElementById("yearToDateLast12WeeksAmountHid");
				yearToDateLast12WeeksAmountHid.innerHTML = 'Premium<br>Premium<hr>';
				if (union_deSumLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (companyLoanSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (studentLoanDeductionSumLast12Weeks >0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (chris_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (summer_savSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				
				if (other_deLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (add_deSum2Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (add_deSum3Last12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (companyLoanSumLast12Weeks >0 || studentLoanDeductionSumLast12Weeks>0 || union_deSumLast12Weeks >0 ||
				chris_savSumLast12Weeks>0 || other_deLast12Weeks>0||add_deSum2Last12Weeks>0 ||
				add_deSum3Last12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= '<hr>';}
				if (pensionSumLast12Weeks>0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				if (pensionEmpSumLast12Weeks >0) {yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';}
				var totalPensionLast12Weeks = pensionSumLast12Weeks + pensionEmpSumLast12Weeks;
				if (totalPensionLast12Weeks>0){yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<hr>';}
				
				yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';
				yearToDateLast12WeeksAmountHid.innerHTML+= 'Premium<br>';

				//weeklyAverages amounts hidden
				var weeklyAveragesAmountHid = document.getElementById("weeklyAveragesAmountHid");
				weeklyAveragesAmountHid.innerHTML= 'Premium<br>';
				if (averageNI>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageGrossPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageTax >0 || NISum>0 || averageGrossPay>0 || averageNetPay>0){weeklyAveragesAmountHid.innerHTML+= '<hr>';}
				
				if (averageBasicHoursPay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageBasicHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageUnsocialPrem>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageUnsocialHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageOvertimePay>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}
				if (averageOvertimeHours>0){weeklyAveragesAmountHid.innerHTML+= 'Premium<br>';}

				//days amounts hidden
				var dayStatisticsAmountHid = document.getElementById("dayStatisticsAmountHid");
				dayStatisticsAmountHid.innerHTML= 'Premium<br>';
				if (daysOff>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysHalfInHalfHol>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysUnpaidHoliday>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysInSick>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysSickness>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysAbsence>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysParental>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysBereavement>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysCompassionate>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysNotSelected>0){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
				if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmountHid.innerHTML+= '<hr>';}
				if (daysSinceLastSick>0 || daysSinceLastSick==="Today" ){dayStatisticsAmountHid.innerHTML+= 'Premium<br>';}
			
				
				//------------------------drawing charts--------------------------------------------------//
				premium = Number(response.premium);
				if (premium === 1){
				google.charts.load('current', {'packages':['corechart']});
				
				//holidays chart
				if(totalHolidaysUsed>0||totalHolidaysBooked>0||holidaysNotUsed>0){
					google.charts.setOnLoadCallback(drawChartHolidays);
					function drawChartHolidays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Days'],
						['Used', totalHolidaysUsed],
						['Booked', totalHolidaysBooked],
						['Available', holidaysNotUsed],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Holidays Pie Chart',
						colors: ['#ff944d', '#9fdf9f', '#53c653'],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('holidayStatisticsPieChart'));

						chart.draw(data, options);
					}
				}
				else
				{
					document.getElementById('holidayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//days chart
				if(daysNotSelected>0||daysIn>0||daysOff>0||daysHoliday>0||daysHalfInHalfHol>0||daysUnpaidHoliday>0||daysInSick>0||
				daysSickness>0||daysAbsence>0||daysParental>0||daysBereavement>0||daysCompassionate>0){
					google.charts.setOnLoadCallback(drawChartDays);
					function drawChartDays() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Days'],
						['Not Defined', daysNotSelected],
						['Days In', daysIn],
						['Days Off', daysOff],
						['Holidays', daysHoliday],
						['Half In/Hals Off', daysHalfInHalfHol],
						['Unpaid Holiday', daysUnpaidHoliday],
						['Day In/Sick', daysInSick],
						['Sickness', daysSickness],
						['Absence', daysAbsence],
						['Paternal', daysParental],
						['Bereavement', daysBereavement],
						['Compassionate', daysCompassionate],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Days Statistics',
						colors: ['#ffffff', '#e6e600', '#c3c3a2', '#d5ff80', '#e6ffe6', '#e6ffb3', '#ffcccc', '#ff9999', '#ccebff', '#ffcc99', '#4d4d4d', '#ffe6cc'],
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('dayStatisticsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('dayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//payments chart
				
				//var deletechart = document.getElementById('paymentsPieChart').innerHTML = " ";
				if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
				unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||
				saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
				bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
				christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)
				{
					google.charts.setOnLoadCallback(drawChartPayments);
					function drawChartPayments() {

					var data = google.visualization.arrayToDataTable([
						['Type', 'Payments'],
						['Basic Pay', basicHoursPay],
						['Uns. Premium', unsocial_prem],
						['Uns Prem. Holidays', unsocial_prem_hol],
						['Uns Prem. Sickness', unsocial_prem_sick],
						['Uns Prem. Paternity', unsocial_prem_family],
						['Uns Prem. Bereav.', unsocial_prem_bereavement],
						['Uns Prem. Compass.', unsocial_prem_compassionate],
						['Overtime 1 Pay', OT1Pay],
						['Overtime 2 Pay', OT2Pay],
						['Enhanced Holiday Pay', enhancedHolidayPay],
						['Holiday Pay', holidayPay],
						['Saturday Extra Pay', saturdayExtraPay],
						['Sunday Extra Pay', sundayExtraPay],
						['Sickness Pay', sicknessPay],
						['Paternity Pay', familyPay],
						['Bereavement Pay', bereavementPay],
						['Compassionate Pay', compassionatePay],
						['Bank Holiday Pay', bankHolidayHoursPay],
						['Bank Holiday Bonus', bankHolidayClockInBonus],
						['Back Pay', payBack],
						['Piece Work', pieceWork],
						['SSP', SSP],
						['SPP', SPP],
						['Add. Payment 1', additionalPayment],
						['Add. Payment 2', additionalPayment2],
						['Add. Payment 3', additionalPayment3],
						['Christmas Sav. Payment', christmasSavingsPayment],
						['Summer Sav. Payment', summerSavingsPayment],
						['SAP', SAP],
						['Salary', salary],
						['Bonus', bonus],
						['Commissions', commissions],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Payments Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('paymentsPieChart'));

						chart.draw(data, options);
					}
				}	
				else{
					 document.getElementById("paymentsPieChart").innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				//if peniosn is not a salary sacrifise, show it in deductions chart
				if (pensionBeforeTax ===0)
				{
					var pensionAmountChart = pensionAmount;
					var pensionSumChart = pensionSum;
					var pensionSumLast12WeeksChart = pensionSumLast12Weeks;
				}
				{
					var pensionAmountChart = 0;
					var pensionSumChart = 0;
					var pensionSumLast12WeeksChart = 0;
				}	
				//deductions chart
				if (christmasSavingsDeduction<0){christmasSavingsDeduction = 0;}
				if (summerSavingsDeduction<0){summerSavingsDeduction = 0;}
				if (taxAmount>0||NIAmount>0||unionDeduction>0||pensionAmountChart>0||christmasSavingsDeduction>0||summerSavingsDeduction>0||
				companyLoan>0||studentLoanDeduction>0||otherDeduction>0||otherDeduction2>0||otherDeduction3>0||netPay>0){
					google.charts.setOnLoadCallback(drawChartDeductions);
					function drawChartDeductions() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxAmount],
						['NI', NIAmount],
						['Union', unionDeduction],
						['Pension', pensionAmountChart],
						['Christmas savings', christmasSavingsDeduction],
						['Summer savings.', summerSavingsDeduction],
						['Company Loan', companyLoan],
						['Student Loan', studentLoanDeduction],
						[otherDeductionName, otherDeduction],
						[otherDeduction2Name, otherDeduction2],
						[otherDeduction3Name, otherDeduction3],
						['Net Pay', netPay],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Deductions Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('deductionsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('deductionsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//Year to date chart
				if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
				studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
					google.charts.setOnLoadCallback(drawChartYearToDate);
					function drawChartYearToDate() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxSum ],
						['NI', NISum ],
						['Union', union_deSum],
						['Pension', pensionSumChart],
						['Christmas savings', chris_savSum ],
						['Summeer savings.', summer_savSum ],
						['Company Loan', companyLoanSum ],
						['Student Loan', studentLoanDeductionSum],
						['Add. Deduction', other_de ],
						['Add. Deduction 2', add_deSum2 ],
						['Add. Deduction 3', add_deSum3 ],
						['Net Pay', netPaySum ],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Year To Date Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDatePieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('yearToDatePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}	
				
				//Year to date Percentage chart
				if (basicPaymentsPercentage>0||holidaysPercentage>0||sicknessPercentage>0||overtimePercentage>0||bankHolidayPercentge>0||
				parentalPercentage>0||otherPercentage>0){
					google.charts.setOnLoadCallback(drawChartYearToDatePercentages);
					function drawChartYearToDatePercentages() {
					var data = google.visualization.arrayToDataTable([
						['Name', 'Value'],
						['Basic Payments', basicPaymentsPercentage],
						['Holiday Payments', holidaysPercentage],
						['Sick Payments', sicknessPercentage],
						['Overtime Payments', overtimePercentage],
						['Bank Holiday Payments', bankHolidayPercentge],
						['Paternity Payments', parentalPercentage],
						['Other Payments', otherPercentage],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Year To Date Percentage Pie Chart',
						is3D: true,
						colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
						};

						var chart = new google.visualization.PieChart(document.getElementById('yearToDatePercentagePieChart'));

						chart.draw(data, options);
					}
				}
				else
				{
					document.getElementById('yearToDatePercentagePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//Year to date Payments chart
				var workPayments = basicPaySum+ot1_paySum+ot2_paySum+uns_premSum+bhol_paySum+bhol_bonusSum+saturdayExtraPaySum+sundayExtraPaySum;
				workPayments+=pieceWorkSum+add_paySum+add_pay2Sum+add_pay3Sum+salarySum+bonusSum+commissionsSum;
				
				var leavePayments = hol_paySum+enhol_paySum+uns_holSum+sick_paySum+uns_sickSum+SSP_Sum+fam_paySum+uns_familySum+SPP_Sum;
				leavePayments+= ber_paySum+uns_berSum+comp_paySum+uns_compSum+SAPSum;
				
				if(workPayments>0 || leavePayments>0){
					google.charts.setOnLoadCallback(drawChartYearToDatePayments);
					function drawChartYearToDatePayments() {
					var data = google.visualization.arrayToDataTable([
						['Name','Work Payments', 'Leave Payments'],
						['Value',workPayments, leavePayments],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Year To Date Work and Leave Payments Comparison',
						//is3D: true,
						isStacked: true,
						colors: ['#e6e600', '#d5ff80'],
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateIIPieChart'));

						chart.draw(data, options);
					}
				}
				else
				{
					document.getElementById('yearToDateIIPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//Year to date Hours chart
				var unsHourSum = uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum;
				if (unsHourSum>0){
					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||uns_prem_unSum>0||uns_hol_unSum>0||uns_sick_unSum>0||uns_family_unSum>0||
					uns_ber_unSum>0||uns_comp_unSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||ber_unitsSum>0||
					comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
							['Unsocial Hours', uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum],
							['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Year To Date Hours column Chart',
							isStacked: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};

							var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}
				}
				else{
					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
					ber_unitsSum>0||comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
							['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Year To Date Hours column Chart',
							isStacked: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};
							var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}
					
				}
				
				
				//last 13 weeks averages
				if (chris_savSumLast12Weeks<0){chris_savSumLast12Weeks = 0;}
				if (summer_savSumLast12Weeks<0){summer_savSumLast12Weeks = 0;}
				if(taxSumLast12Weeks>0||NISumLast12Weeks>0||union_deSumLast12Weeks>0||pensionSumLast12WeeksChart>0||chris_savSumLast12Weeks>0||
				summer_savSumLast12Weeks>0||companyLoanSumLast12Weeks>0||studentLoanDeductionSumLast12Weeks>0||other_deLast12Weeks>0||
				add_deSum2Last12Weeks>0||add_deSum3Last12Weeks>0||netPaySumLast12Weeks>0){
					google.charts.setOnLoadCallback(drawChartLast3Months);
					function drawChartLast3Months() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxSumLast12Weeks],
						['NI', NISumLast12Weeks],
						['Union', union_deSumLast12Weeks],
						['Pension', pensionSumLast12WeeksChart],
						['Christmas savings', chris_savSumLast12Weeks],
						['Summer savings.', summer_savSumLast12Weeks],
						['Company Loan', companyLoanSumLast12Weeks],
						['Student Loan', studentLoanDeductionSumLast12Weeks],
						['Add. Deduction', other_deLast12Weeks],
						['Add. Deduction 2', add_deSum2Last12Weeks],
						['Add. Deduction 3', add_deSum3Last12Weeks],
						['Net Pay', netPaySumLast12Weeks],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 3 Months Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('las3MonthsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('las3MonthsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//weekly averages
				if(averageTax>0||averageNI>0||averageNetPay>0||averageGrossPay>0){
				google.charts.setOnLoadCallback(drawChartWeeklyAverages);
				function drawChartWeeklyAverages() {
					
				var averageOtherWeekly = averageGrossPay - averageNetPay - averageNI - averageTax;
				var data = google.visualization.arrayToDataTable([
					['Type', 'Chart'],
					['Tax', averageTax ],
					['NI', averageNI ],
					['NetPay', averageNetPay ],
					['Other deductions sum', averageOtherWeekly],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Weekly Averages Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesPieChart'));

					chart.draw(data, options);
				}
				}
				else{
					document.getElementById('weeklyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//daily averages
				if(dailyGrossPayAllDays>0||dailyGrossPay>0||dailyNetPayAllDays>0||dailyNetPay>0||dailytaxSumAllDays>0||dailytaxSum>0||
				dailyNISumAllDays>0||dailyNISum>0||dailyHoursAtWorkAllDays>0||dailyHoursAtWork>0||dailyPaidHoursAllDays>0||dailyPaidHours>0){
					google.charts.setOnLoadCallback(drawChartDailyAverages);
					function drawChartDailyAverages() {			
					var data = google.visualization.arrayToDataTable([
						['Name', 'All Work Days','Difference between all work days and days in values'],
						["Gross Pay", dailyGrossPayAllDays,dailyGrossPay-dailyGrossPayAllDays],
						["Net Pay", dailyNetPayAllDays, dailyNetPay-dailyNetPayAllDays],
						["TAX", dailytaxSumAllDays, dailytaxSum-dailytaxSumAllDays],
						["NI", dailyNISumAllDays, dailyNISum-dailyNISumAllDays],
						["Hours at work", dailyHoursAtWorkAllDays, dailyHoursAtWork-dailyHoursAtWorkAllDays],
						["Paid hours at work", dailyPaidHoursAllDays, dailyPaidHours-dailyPaidHoursAllDays],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Hourly Averages Column Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('dailyAveragesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('dailyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//hourly averages
				if(hourlyGrossPayAllH>0||hourlyGrossPayTotalH>0||hourlyGrossPay>0||hourlyNetPayAllH>0||hourlyNetPayTotalH>0||hourlyNetPay>0||
				hourlytaxSumAllH>0||hourlytaxSumTotalH>0||hourlytaxSum>0||hourlyNISumAllH>0||hourlyNISumTotalH>0||hourlyNISum>0){
					google.charts.setOnLoadCallback(drawChartHourlyAverages);
					function drawChartHourlyAverages() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'All Paid Hours','Difference between all paid hours and hours worked', 'Difference between paid Hours and hours worked'],
						["Gross Pay", hourlyGrossPayAllH,hourlyGrossPayTotalH-hourlyGrossPayAllH,hourlyGrossPay-hourlyGrossPayTotalH],
						["Net Pay", hourlyNetPayAllH, hourlyNetPayTotalH-hourlyNetPayAllH ,hourlyNetPay-hourlyNetPayTotalH],
						["TAX", hourlytaxSumAllH, hourlytaxSumTotalH-hourlytaxSumAllH , hourlytaxSum-hourlytaxSumTotalH],
						["NI", hourlyNISumAllH, hourlyNISumTotalH-hourlyNISumAllH , hourlyNISum-hourlyNISumTotalH],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Hourly Averages Column Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('hourlyAveragesPieChart'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('hourlyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//paid hours chart
				if(Number(response.last10NetPayArray[9])>0||Number(response.last10DeductionsArray[9])>0||
				Number(response.last10NetPayArray[8])>0||Number(response.last10DeductionsArray[8])>0||
				Number(response.last10NetPayArray[7])>0||Number(response.last10DeductionsArray[7])>0||
				Number(response.last10NetPayArray[6])>0||Number(response.last10DeductionsArray[6])>0||
				Number(response.last10NetPayArray[5])>0||Number(response.last10DeductionsArray[5])>0||
				Number(response.last10NetPayArray[4])>0||Number(response.last10DeductionsArray[4])>0||
				Number(response.last10NetPayArray[3])>0||Number(response.last10DeductionsArray[3])>0||
				Number(response.last10NetPayArray[2])>0||Number(response.last10DeductionsArray[2])>0||
				Number(response.last10NetPayArray[1])>0||Number(response.last10DeductionsArray[1])>0||
				Number(response.last10NetPayArray[0])>0||Number(response.last10DeductionsArray[0])>0){
					google.charts.setOnLoadCallback(drawChartColumnPaidHours);
					function drawChartColumnPaidHours() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'Net Pay', 'Deductions' ],
						["10", Number(response.last10NetPayArray[9]), Number(response.last10DeductionsArray[9])],
						["9", Number(response.last10NetPayArray[8]), Number(response.last10DeductionsArray[8])],
						["8", Number(response.last10NetPayArray[7]), Number(response.last10DeductionsArray[7])],
						["7", Number(response.last10NetPayArray[6]), Number(response.last10DeductionsArray[6])],
						["6", Number(response.last10NetPayArray[5]), Number(response.last10DeductionsArray[5])],
						["5", Number(response.last10NetPayArray[4]), Number(response.last10DeductionsArray[4])],
						["4", Number(response.last10NetPayArray[3]), Number(response.last10DeductionsArray[3])],
						["3", Number(response.last10NetPayArray[2]), Number(response.last10DeductionsArray[2])],
						["2", Number(response.last10NetPayArray[1]), Number(response.last10DeductionsArray[1])],
						["Current", Number(response.last10NetPayArray[0]), Number(response.last10DeductionsArray[0])],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 10 Weeks Net Pay and Deductions Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
												
				
				//susumuojame visas valandas patikrinti ar reikia braizyti grafika
				var last10weeksHoursSum = 0;
				for (i=0;i<10;i++)
				{
					last10weeksHoursSum += Number(response.last10WorkingHoursArray[i]);
					last10weeksHoursSum += Number(response.last10AllHolidayHoursArray[i]);
					last10weeksHoursSum += Number(response.last10SickHoursArray[i]);
					last10weeksHoursSum += Number(response.last10FamHoursArray[i]);
					last10weeksHoursSum += Number(response.last10BerHoursArray[i]);
					last10weeksHoursSum += Number(response.last10CompHoursArray[i]);	
				}
				
				if(last10weeksHoursSum>0){
					google.charts.setOnLoadCallback(drawChartColumn);
					function drawChartColumn() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'Working Hours', 'Holiday Hours', 'Sickness Hours', 'Parental Hours', 'Bereavement Hours', 'Compassionate Hours' ],
						["10", Number(response.last10WorkingHoursArray[9]), Number(response.last10AllHolidayHoursArray[9]), Number(response.last10SickHoursArray[9]), Number(response.last10FamHoursArray[9]), Number(response.last10BerHoursArray[9]), Number(response.last10CompHoursArray[9])],
						["9", Number(response.last10WorkingHoursArray[8]), Number(response.last10AllHolidayHoursArray[8]), Number(response.last10SickHoursArray[8]), Number(response.last10FamHoursArray[8]), Number(response.last10BerHoursArray[8]), Number(response.last10CompHoursArray[8])],
						["8", Number(response.last10WorkingHoursArray[7]), Number(response.last10AllHolidayHoursArray[7]), Number(response.last10SickHoursArray[7]), Number(response.last10FamHoursArray[7]), Number(response.last10BerHoursArray[7]), Number(response.last10CompHoursArray[7])],
						["7", Number(response.last10WorkingHoursArray[6]), Number(response.last10AllHolidayHoursArray[6]), Number(response.last10SickHoursArray[6]), Number(response.last10FamHoursArray[6]), Number(response.last10BerHoursArray[6]), Number(response.last10CompHoursArray[6])],
						["6", Number(response.last10WorkingHoursArray[5]), Number(response.last10AllHolidayHoursArray[5]), Number(response.last10SickHoursArray[5]), Number(response.last10FamHoursArray[5]), Number(response.last10BerHoursArray[5]), Number(response.last10CompHoursArray[5])],
						["5", Number(response.last10WorkingHoursArray[4]), Number(response.last10AllHolidayHoursArray[4]), Number(response.last10SickHoursArray[4]), Number(response.last10FamHoursArray[4]), Number(response.last10BerHoursArray[4]), Number(response.last10CompHoursArray[4])],
						["4", Number(response.last10WorkingHoursArray[3]), Number(response.last10AllHolidayHoursArray[3]), Number(response.last10SickHoursArray[3]), Number(response.last10FamHoursArray[3]), Number(response.last10BerHoursArray[3]), Number(response.last10CompHoursArray[3])],
						["3", Number(response.last10WorkingHoursArray[2]), Number(response.last10AllHolidayHoursArray[2]), Number(response.last10SickHoursArray[2]), Number(response.last10FamHoursArray[2]), Number(response.last10BerHoursArray[2]), Number(response.last10CompHoursArray[2])],
						["2", Number(response.last10WorkingHoursArray[1]), Number(response.last10AllHolidayHoursArray[1]), Number(response.last10SickHoursArray[1]), Number(response.last10FamHoursArray[1]), Number(response.last10BerHoursArray[1]), Number(response.last10CompHoursArray[1])],
						["Current", Number(response.last10WorkingHoursArray[0]), Number(response.last10AllHolidayHoursArray[0]), Number(response.last10SickHoursArray[0]), Number(response.last10FamHoursArray[0]), Number(response.last10BerHoursArray[0]), Number(response.last10CompHoursArray[0])],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 10 Weeks Paid Hours Chart',
						colors: ['#e6e600', '#d5ff80','#ff9999','#ffcc99', '#4d4d4d', '#ffe6cc'],
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChartPaidHours'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChartPaidHours').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}		
			}
		
		//--------------------------------------------------------------------------------//end of charts
			}
		}
	}
	request.send(str);
	document.getElementById("submitSuccessMain").innerHTML = "Generating...";
	bankHolidayFilter(timeSinceEpoch);
}

function changeCalendar(modTimeSinceEpoch)
{
	var mSecondsInWeek = 604800000;
	var startDate = new Date(modTimeSinceEpoch+mSecondsInWeek*4);
	var calendarCaptionTitle = document.getElementById("calendarCaptionTitle")
	var yy = startDate.getFullYear();
	calendarCaptionTitle.innerHTML = "Calendar "+yy;
	
	var id = 0;
	for (cic=0;cic<7;cic++)
	{
		var startDate = new Date(modTimeSinceEpoch);
		var mm = startDate.getMonth();
		mm = months[mm];
		var monthDiv = document.getElementById("monthDiv"+cic);
		monthDiv.innerHTML = "";
		var monthName = document.createTextNode(mm);
		monthDiv.appendChild(monthName);
		

		
		for(cid=0;cid<7;cid++)
		{
			var startDate = new Date(modTimeSinceEpoch);
			var dd = startDate.getDate();
			if (dd<10){dd="0"+dd;}
			
			dayDiv = document.getElementById("dayDiv"+id);
			dayDiv.innerHTML = "";
			var dayNumber = document.createTextNode(dd);
			dayDiv.appendChild(dayNumber);
			id++;
			modTimeSinceEpoch += 86400000;
		}
	}
}

function increaseTaxPeriodAlternative(){

	var buttonRight = document.getElementById("buttonRight");
	var buttonRightFake = document.getElementById("buttonRightFake");
	var downButton = document.getElementById("buttonDown");
	var downButtonFake = document.getElementById("buttonDownFake");
	
	var buttonLeft = document.getElementById("buttonLeft");
	var buttonLeftFake = document.getElementById("buttonLeftFake");
	var upButton = document.getElementById("buttonUp");
	var upButtonFake = document.getElementById("buttonUpFake");
	
	var fastForward = document.getElementById("fastForward");
	var fastBackward = document.getElementById("fastBackward");
	var fastForwardFake = document.getElementById("fastForwardFake");
	var fastBackwardFake = document.getElementById("fastBackwardFake");
	
	//hiden menu
	var buttonLeftHidden = document.getElementById("buttonLeftHidden");
	var buttonLeftFakeHidden = document.getElementById("buttonLeftFakeHidden");
	var buttonRightHidden = document.getElementById("buttonRightHidden");
	var buttonRightFakeHidden = document.getElementById("buttonRightFakeHidden");

	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	taxPeriodNumber++;
			
			weekStart = Number(weekStartArray[taxPeriodNumber]);
			var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-2)+weekStart*86400000;	
			
			modTimeSinceEpoch = timeSinceEpoch +604800000;
			if (taxPeriodNumber === 1)
			{
				buttonLeft.style.display = "none";
				buttonLeftFake.style.display = "initial";
				upButton.style.display = "none";
				upButtonFake.style.display = "initial";
				
				fastBackward.style.display = "none";
				fastBackwardFake.style.display = "initial";
				
				buttonRight.style.display = "initial";
				buttonRightFake.style.display = "none";
				downButton.style.display = "initial";
				downButtonFake.style.display = "none";
				
				fastForward.style.display = "initial";
				fastForwardFake.style.display = "none";
				
				//hidden menu
				buttonLeftHidden.style.display = "none";
				buttonLeftFakeHidden.style.display = "initial";
				buttonRightHidden.style.display = "initial";
				buttonRightFakeHidden.style.display = "none";
			}
			else if (taxPeriodNumber === 208)
			{
				buttonLeft.style.display = "initial";
				buttonLeftFake.style.display = "none";
				upButton.style.display = "initial";
				upButtonFake.style.display = "none";
				
				fastBackward.style.display = "initial";
				fastBackwardFake.style.display = "none";
				
				buttonRight.style.display = "none";
				buttonRightFake.style.display = "initial";
				downButton.style.display = "none";
				downButtonFake.style.display = "initial";
				
				fastForward.style.display = "none";
				fastForwardFake.style.display = "initial";
				
				//hidden menu
				buttonLeftHidden.style.display = "initial";
				buttonLeftFakeHidden.style.display = "none";
				buttonRightHidden.style.display = "none";
				buttonRightFakeHidden.style.display = "initial";
			}
			else if (taxPeriodNumber>1 && taxPeriodNumber<208)
			{ 
				buttonLeft.style.display = "initial";
				buttonLeftFake.style.display = "none";
				upButton.style.display = "initial";
				upButtonFake.style.display = "none";
				
				fastBackward.style.display = "initial";
				fastBackwardFake.style.display = "none";
				
				buttonRight.style.display = "initial";
				buttonRightFake.style.display = "none";
				downButton.style.display = "initial";
				downButtonFake.style.display = "none";
				
				fastForward.style.display = "initial";
				fastForwardFake.style.display = "none";
				
				//hiddenMenu
				buttonLeftHidden.style.display = "initial";
				buttonLeftFakeHidden.style.display = "none";
				buttonRightHidden.style.display = "initial";
				buttonRightFakeHidden.style.display = "none";
			} 
			else
			{
				buttonLeft.style.display = "none";
				buttonLeftFake.style.display = "initial";
				upButton.style.display = "none";
				upButtonFake.style.display = "initial";
				
				fastBackward.style.display = "none";
				fastBackwardFake.style.display = "initial";
				
				buttonRight.style.display = "none";
				buttonRightFake.style.display = "initial";
				downButton.style.display = "none";
				downButtonFake.style.display = "initial";
				
				fastForward.style.display = "none";
				fastForwardFake.style.display = "initial";
				
				//hiddden menu
				buttonLeftHidden.style.display = "none";
				buttonLeftFakeHidden.style.display = "initial";
				buttonRightHidden.style.display = "none";
				buttonRightFakeHidden.style.display = "initial";
			}


			for (f=0;f<7;f++)
			{
				var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
			}	

			createFirstColumnElements(taxPeriodNumber);
			createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
			createThirdColumnElements(taxPeriodNumber);
			createThourthColumnElements(taxPeriodNumber);
			createPayoutButtons(taxPeriodNumber);
						
			for(tr=0;tr<7;tr++)
			{
				var calendarRow = document.getElementById("calendarRow"+tr).innerHTML = " ";
			}

			generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
			loadIndexes(taxPeriodNumber);
}

function decreaseTaxPeriodAlternative(){

	var buttonRight = document.getElementById("buttonRight");
	var buttonRightFake = document.getElementById("buttonRightFake");
	var downButton = document.getElementById("buttonDown");
	var downButtonFake = document.getElementById("buttonDownFake");
	
	var buttonLeft = document.getElementById("buttonLeft");
	var buttonLeftFake = document.getElementById("buttonLeftFake");
	var upButton = document.getElementById("buttonUp");
	var upButtonFake = document.getElementById("buttonUpFake");
	
	var fastForward = document.getElementById("fastForward");
	var fastBackward = document.getElementById("fastBackward");
	var fastForwardFake = document.getElementById("fastForwardFake");
	var fastBackwardFake = document.getElementById("fastBackwardFake");

	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
			
			
	taxPeriodNumber--;

	weekStart = Number(weekStartArray[taxPeriodNumber]);
	var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber)+weekStart*86400000;	
					
			modTimeSinceEpoch = timeSinceEpoch -604800000;

			if (taxPeriodNumber === 1)
			{
				buttonLeft.style.display = "none";
				buttonLeftFake.style.display = "initial";
				upButton.style.display = "none";
				upButtonFake.style.display = "initial";
				
				fastBackward.style.display = "none";
				fastBackwardFake.style.display = "initial";
				
				buttonRight.style.display = "initial";
				buttonRightFake.style.display = "none";
				downButton.style.display = "initial";
				downButtonFake.style.display = "none";
				
				fastForward.style.display = "initial";
				fastForwardFake.style.display = "none";
				
				//hidden menu 
				buttonLeftHidden.style.display = "none";
				buttonLeftFakeHidden.style.display = "initial";
				buttonRightHidden.style.display = "initial";
				buttonRightFakeHidden.style.display = "none";
			}
			else if (taxPeriodNumber === 208)
			{
				buttonLeft.style.display = "initial";
				buttonLeftFake.style.display = "none";
				upButton.style.display = "initial";
				upButtonFake.style.display = "none";
				
				fastBackward.style.display = "initial";
				fastBackwardFake.style.display = "none";
				
				buttonRight.style.display = "none";
				buttonRightFake.style.display = "initial";
				downButton.style.display = "none";
				downButtonFake.style.display = "initial";
				
				fastForward.style.display = "none";
				fastForwardFake.style.display = "initial";
				
				//hidden menu
				buttonLeftHidden.style.display = "initial";
				buttonLeftFakeHidden.style.display = "none";
				buttonRightHidden.style.display = "none";
				buttonRightFakeHidden.style.display = "initial";
			}
			else if (taxPeriodNumber>1 && taxPeriodNumber<208)
			{ 
				buttonLeft.style.display = "initial";
				buttonLeftFake.style.display = "none";
				upButton.style.display = "initial";
				upButtonFake.style.display = "none";
				
				fastBackward.style.display = "initial";
				fastBackwardFake.style.display = "none";
				
				buttonRight.style.display = "initial";
				buttonRightFake.style.display = "none";
				downButton.style.display = "initial";
				downButtonFake.style.display = "none";
				
				fastForward.style.display = "initial";
				fastForwardFake.style.display = "none";
				
				//hidden menu
				buttonLeftHidden.style.display = "initial";
				buttonLeftFakeHidden.style.display = "none";
				buttonRightHidden.style.display = "initial";
				buttonRightFakeHidden.style.display = "none";
			} 
			else
			{
				buttonLeft.style.display = "none";
				buttonLeftFake.style.display = "initial";
				upButton.style.display = "none";
				upButtonFake.style.display = "initial";
				
				fastBackward.style.display = "none";
				fastBackwardFake.style.display = "initial";
				
				buttonRight.style.display = "none";
				buttonRightFake.style.display = "initial";
				downButton.style.display = "none";
				downButtonFake.style.display = "initial";
				
				fastForward.style.display = "none";
				fastForwardFake.style.display = "initial";
				
				//hidden menu
				buttonLeftHidden.style.display = "none";
				buttonLeftFakeHidden.style.display = "initial";
				buttonRightHidden.style.display = "none";
				buttonRightFakeHidden.style.display = "initial";
			}

			for (f=0;f<7;f++)
			{
				var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
			}	

			createFirstColumnElements(taxPeriodNumber);
			createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
			createThirdColumnElements(taxPeriodNumber);
			createThourthColumnElements(taxPeriodNumber);
			createPayoutButtons(taxPeriodNumber);
			
			for(tr=0;tr<7;tr++)
			{
				var calendarRow = document.getElementById("calendarRow"+tr).innerHTML = " ";
			}

			generateCalendar (taxPeriodNumber, modTimeSinceEpoch);
			loadIndexes(taxPeriodNumber);
}

function fastIncreaseTaxPeriodAlternative(){

	var buttonRight = document.getElementById("buttonRight");
	var buttonRightFake = document.getElementById("buttonRightFake");
	var downButton = document.getElementById("buttonDown");
	var downButtonFake = document.getElementById("buttonDownFake");
	
	var buttonLeft = document.getElementById("buttonLeft");
	var buttonLeftFake = document.getElementById("buttonLeftFake");
	var upButton = document.getElementById("buttonUp");
	var upButtonFake = document.getElementById("buttonUpFake");
	
	var fastForward = document.getElementById("fastForward");
	var fastBackward = document.getElementById("fastBackward");
	var fastForwardFake = document.getElementById("fastForwardFake");
	var fastBackwardFake = document.getElementById("fastBackwardFake");

	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	taxPeriodNumber = Number(taxPeriodNumber);
			

	weekStart = Number(weekStartArray[taxPeriodNumber+6]); //reikia tos weekstart value i kuria savaite sokame su sita funkcija

	//taxPeriodNumber-=7; //atimame  vel 7, nes kursime 7 raundu cikla, kuriame po viena pridesim vertes.
	var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;
	modTimeSinceEpoch = timeSinceEpoch;
	for (i=0;i<7;i++){
		if (taxPeriodNumber>208) //kai taxperiod 208 paslepiamei mygtukai su funkcija
		{ 
			taxPeriodNumber = 208;
			var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;
			modTimeSinceEpoch = timeSinceEpoch;
			
			fastForward.style.display = "none";
			fastForwardFake.style.display = "initial";
			buttonRight.style.display = "none";
			buttonRightFake.style.display = "initial";
			downButton.style.display = "none";
			downButtonFake.style.display = "initial";
			
			buttonRightHidden.style.display = "none";
			buttonRightFakeHidden.style.display = "initial";
			
			for (f=0;f<7;f++)
			{
				var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
				var calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
			}	

			createFirstColumnElements(taxPeriodNumber);
			createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
			createThirdColumnElements(taxPeriodNumber);
			createThourthColumnElements(taxPeriodNumber);		

			generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
			createPayoutButtons(taxPeriodNumber);
					
			loadIndexes((taxPeriodNumber-1));		
			break;
		}
				
		else if (taxPeriodNumber>1) //kai tax period didesnis nei vienas paslepiamas fake mygtukas
		{ 
			fastBackward.style.display = "initial";
			fastBackwardFake.style.display = "none";
			
			buttonLeft.style.display = "initial";
			buttonLeftFake.style.display = "none";
			upButton.style.display = "initial";
			upButtonFake.style.display = "none";
			
			buttonLeftHidden.style.display = "initial";
			buttonLeftFakeHidden.style.display = "none";
		} 
		else
		{
			buttonLeft.style.display = "none";
			buttonLeftFake.style.display = "initial";
			upButton.style.display = "none";
			upButtonFake.style.display = "initial";
			
			fastBackward.style.display = "none";
			fastBackwardFake.style.display = "initial";
			
			buttonRight.style.display = "none";
			buttonRightFake.style.display = "initial";
			downButton.style.display = "none";
			downButtonFake.style.display = "initial";
			
			fastForward.style.display = "none";
			fastForwardFake.style.display = "initial";
			
			buttonLeftHidden.style.display = "none";
			buttonLeftFakeHidden.style.display = "initial";
			buttonRightHidden.style.display = "none";
			buttonRightFakeHidden.style.display = "initial";
		}
		for (f=0;f<7;f++)
		{
			var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
			var calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
		}	

		createFirstColumnElements(taxPeriodNumber);
		createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
		createThirdColumnElements(taxPeriodNumber);
		createThourthColumnElements(taxPeriodNumber);		

		generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
		createPayoutButtons(taxPeriodNumber);

		taxPeriodNumber++;
		modTimeSinceEpoch += 604800000;		
	}
	loadIndexes((taxPeriodNumber-1));		
}

function fastDecreaseTaxPeriodAlternative(){

	var buttonRight = document.getElementById("buttonRight");
	var buttonRightFake = document.getElementById("buttonRightFake");
	var downButton = document.getElementById("buttonDown");
	var downButtonFake = document.getElementById("buttonDownFake");
	
	var buttonLeft = document.getElementById("buttonLeft");
	var buttonLeftFake = document.getElementById("buttonLeftFake");
	var upButton = document.getElementById("buttonUp");
	var upButtonFake = document.getElementById("buttonUpFake");
	
	var fastForward = document.getElementById("fastForward");
	var fastBackward = document.getElementById("fastBackward");
	var fastForwardFake = document.getElementById("fastForwardFake");
	var fastBackwardFake = document.getElementById("fastBackwardFake");

	//taxPeriodNumber-=7;
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	taxPeriodNumber = Number(taxPeriodNumber);	
	weekStart = Number(weekStartArray[taxPeriodNumber-6]);//reikia tos weekstart vertes, i kuria savaite sokame su sita funkcija!!
	var timeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber-1)+weekStart*86400000;
	modTimeSinceEpoch = timeSinceEpoch;
			
	for (i=0;i<7;i++){
							
		if (taxPeriodNumber<=1)
		{ 
			modTimeSinceEpoch = timeSinceEpochOriginal+weekStart*86400000;
			taxPeriodNumber = 1;
			fastBackward.style.display = "none";
			fastBackwardFake.style.display = "initial";
			
			buttonLeft.style.display = "none";
			buttonLeftFake.style.display = "initial";
			upButton.style.display = "none";
			upButtonFake.style.display = "initial";
			
			buttonLeftHidden.style.display = "none";
			buttonLeftFakeHidden.style.display = "initial";
			
			for (f=0;f<7;f++)
			{
				var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
				var calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
			}	

			createFirstColumnElements(taxPeriodNumber);
			createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
			createThirdColumnElements(taxPeriodNumber);
			createThourthColumnElements(taxPeriodNumber);
			generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
			createPayoutButtons(taxPeriodNumber);
			loadIndexes((taxPeriodNumber+1));
			break;
			
		}
				
		else if(taxPeriodNumber<208)
		{ 
			fastForward.style.display = "initial";
			fastForwardFake.style.display = "none";
					
			buttonRight.style.display = "initial";
			buttonRightFake.style.display = "none";
			downButton.style.display = "initial";
			downButtonFake.style.display = "none";
			
			buttonRightHidden.style.display = "initial";
			buttonRightFakeHidden.style.display = "none";
		} 	
			else
		{
			buttonLeft.style.display = "none";
			buttonLeftFake.style.display = "initial";
			upButton.style.display = "none";
			upButtonFake.style.display = "initial";
			
			fastBackward.style.display = "none";
			fastBackwardFake.style.display = "initial";
			
			buttonRight.style.display = "none";
			buttonRightFake.style.display = "initial";
			downButton.style.display = "none";
			downButtonFake.style.display = "initial";
			
			fastForward.style.display = "none";
			fastForwardFake.style.display = "initial";
			
			buttonLeftHidden.style.display = "none";
			buttonLeftFakeHidden.style.display = "initial";
			buttonRightHidden.style.display = "none";
			buttonRightFakeHidden.style.display = "initial";
		}
		for (f=0;f<7;f++)
		{
			var tableRow = document.getElementById("tableRow"+f).innerHTML = " ";
			var calendarRow = document.getElementById("calendarRow"+f).innerHTML = " ";
		}	

		createFirstColumnElements(taxPeriodNumber);
		createSecondColumnElements(taxPeriodNumber, modTimeSinceEpoch);
		createThirdColumnElements(taxPeriodNumber);
		createThourthColumnElements(taxPeriodNumber);
		generateCalendar (taxPeriodNumber,modTimeSinceEpoch);
		createPayoutButtons(taxPeriodNumber);

		taxPeriodNumber--;
		modTimeSinceEpoch -= 604800000;
		}
		
		//taxPeriodNumber++; //pridedame viena, nes cikle persukta vienu kartu per daug
		if (taxPeriodNumber<=1)
		{
			loadIndexes(taxPeriodNumber);
		}
		else{
			loadIndexes((taxPeriodNumber+1));
		}
}


function deselectValuesValidateForm2()  //funkcija padesianti isvengti dvigubo apmokejimo duomenu siuntimo i serveri.
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(b=0;b<7;b++)
	{
		var index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		
		var startHours = document.getElementById("startHours"+taxPeriodStart);
		var startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		var sickness = document.getElementById("sicknessButton"+taxPeriodStart);
		var familyLeave = document.getElementById("familyLeaveButton"+taxPeriodStart);
		//var familyLeave = document.getElementById("familySelect"+taxPeriodStart);
		var dayInSick = document.getElementById("dayInSickButton"+taxPeriodStart);
		var bereavement = document.getElementById("bereavementButton"+taxPeriodStart);
		var compassionate = document.getElementById("compassionateButton"+taxPeriodStart);
		var enHoliday = document.getElementById("enhancedHolidayButton"+taxPeriodStart);
		
		if (index === 7 && sickness.checked === false )		//Sickness
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
		}
		else if (index === 9 && familyLeave.checked === false)		//Family Leave
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
		}
		else if (index === 10 && bereavement.checked === false)		//bereavement Leave
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
		}
		else if (index === 11 && compassionate.checked === false)		//compassionate Leave
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
		}
		taxPeriodStart++;
	}	
	ajaxPost(weekStart); // jei vertes parinktos tinkamai, siunciame i serveri
}


function deselectValuesValidateForm()  //funkcija padesianti isvengti dvigubo apmokejimo duomenu siuntimo i serveri.
{
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	
	weekStart = Number(weekStartArray[taxPeriodNumber]);
	unsHCheckCurrent = Number(unsHCheck[taxPeriodNumber]);
	//var panel = document.getElementById("panel").innerHTML += weekStart+' lol<br>';
	
	var taxPeriodStart = (taxPeriodNumber-1)*7+weekStart;
	for(b=0;b<7;b++)
	{
		var index = document.getElementById("dayType"+taxPeriodStart).options.selectedIndex;
		
		var startHours = document.getElementById("startHours"+taxPeriodStart);
		var startMinutes = document.getElementById("startMinutes"+taxPeriodStart);
		var endHours = document.getElementById("endHours"+taxPeriodStart);
		var endMinutes = document.getElementById("endMinutes"+taxPeriodStart);
		
		var sickness = document.getElementById("sicknessButton"+taxPeriodStart);
		var familyLeave = document.getElementById("familyLeaveButton"+taxPeriodStart);
		var dayInSick = document.getElementById("dayInSickButton"+taxPeriodStart);
		var bereavement = document.getElementById("bereavementButton"+taxPeriodStart);
		var compassionate = document.getElementById("compassionateButton"+taxPeriodStart);
		var enHoliday = document.getElementById("enhancedHolidayButton"+taxPeriodStart);
		//deselecting values
		if (index === 0)			//Not Selected
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 1)		//Day In
		{
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;	
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 2)		//Day Off
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;	
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 3)		//Holiday
		{
			
			if (unsHCheckCurrent === 1)
			{
				sickness.checked = false;
				dayInSick.checked = false;
				bereavement.checked = false;
				compassionate.checked = false;
				familyLeave.checked = false;
			}
			else{
				//jei nera uns valandu nuimame indexus
				startHours.options.selectedIndex = "0";
				startMinutes.options.selectedIndex = "0";
				endHours.options.selectedIndex = "0";
				endMinutes.options.selectedIndex = "0";
				
				sickness.checked = false;
				dayInSick.checked = false;
				bereavement.checked = false;
				compassionate.checked = false;
				familyLeave.checked = false;
			}
								
		}
		else if (index === 4)		//Half In/Holl
		{
			sickness.checked = false;
			//familyLeave.setAttribute("checked", "checked");
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			familyLeave.checked = false;
		}
		else if (index === 5)		//unpaid hol
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 6)		//Day In / Sick
		{
						
			sickness.checked = false;
			enHoliday.checked = false;
			//familyLeave.setAttribute("checked", "checked");
		}
		else if (index === 7)		//Sickness
		{
					
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 8)		//Abscence
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 9)		//Family Leave
		{
						
			sickness.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
		else if (index === 10)		//Bereavement
		{
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			compassionate.checked = false;
			enHoliday.checked = false;
		}
			else if (index === 11)		//Bereavement
		{
			
			sickness.checked = false;
			familyLeave.checked = false;
			dayInSick.checked = false;
			bereavement.checked = false;
			enHoliday.checked = false;
		}
		
		// form validation
		var startHourIndex = document.getElementById("startHours"+taxPeriodStart).options.selectedIndex;
		var endHourIndex = document.getElementById("endHours"+taxPeriodStart).options.selectedIndex;

		var submitSuccess = document.getElementById("submitSuccessMain");
		if (startHourIndex>endHourIndex)
		{
			submitSuccess.style.left = "0px";
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Start time can not be greater then finish time! <br>';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitErrorMain");
			
			endHours.setAttribute("class", "invalidForm hourMinuteSelect");
			endMinutes.setAttribute("class", "invalidForm hourMinuteSelect");		
			return false;
		}
		else{
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessMain");
		}
		taxPeriodStart++;
		
	}	
	deselectValuesValidateForm2();
}


//--------------WeeklyAveragesInfo
function showWeeklyAveragesInfo() {
	
	
	var weeklyAveragesInfoHide = document.getElementById("weeklyAveragesInfoHide");
	var weeklyAveragesInfoShow = document.getElementById("weeklyAveragesInfoShow");
	var weeklyAveragesInfo = document.getElementById("weeklyAveragesInfo");
	weeklyAveragesInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	weeklyAveragesInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	weeklyAveragesInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
	
}
function hideWeeklyAveragesInfo() {
	var weeklyAveragesInfoHide = document.getElementById("weeklyAveragesInfoHide");
	var weeklyAveragesInfoShow = document.getElementById("weeklyAveragesInfoShow");
	var weeklyAveragesInfo = document.getElementById("weeklyAveragesInfo");
	weeklyAveragesInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	weeklyAveragesInfoShow.style.visibility = "visible" // parodome show info mygtuka
	weeklyAveragesInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

//--------yearToDateIIInfo
function showYearToDateTotalsInfo() {
	
	var yearToDateTotalsInfoHide = document.getElementById("yearToDateTotalsInfoHide");
	var yearToDateTotalsInfoShow = document.getElementById("yearToDateTotalsInfoShow");
	var yearToDateIIInfo = document.getElementById("yearToDateIIInfo");
	yearToDateTotalsInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	yearToDateTotalsInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	yearToDateIIInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideYearToDateTotalsInfo() {
	var yearToDateTotalsInfoHide = document.getElementById("yearToDateTotalsInfoHide");
	var yearToDateTotalsInfoShow = document.getElementById("yearToDateTotalsInfoShow");
	var yearToDateIIInfo = document.getElementById("yearToDateIIInfo");
	yearToDateTotalsInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	yearToDateTotalsInfoShow.style.visibility = "visible" // parodome show info mygtuka
	yearToDateIIInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

//--------yearToDateIIInfo
function showYearToDateHoursInfo() {
	
	var yearToDateTotalsHoursInfoHide = document.getElementById("yearToDateTotalsHoursInfoHide");
	var yearToDateTotalsHoursInfoShow = document.getElementById("yearToDateTotalsHoursInfoShow");
	var yearToDateHoursInfo = document.getElementById("yearToDateHoursInfo");
	yearToDateTotalsHoursInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	yearToDateTotalsHoursInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	yearToDateHoursInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateTotalsInfo();
}
function hideYearToDateHoursInfo() {
	var yearToDateTotalsHoursInfoHide = document.getElementById("yearToDateTotalsHoursInfoHide");
	var yearToDateTotalsHoursInfoShow = document.getElementById("yearToDateTotalsHoursInfoShow");
	var yearToDateHoursInfo = document.getElementById("yearToDateHoursInfo");
	yearToDateTotalsHoursInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	yearToDateTotalsHoursInfoShow.style.visibility = "visible" // parodome show info mygtuka
	yearToDateHoursInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

//---------------day statistics
function showDayStatisticsInfo() {
	var dayStatisticsInfoHide = document.getElementById("dayStatisticsInfoHide");
	var dayStatisticsInfoShow = document.getElementById("dayStatisticsInfoShow");
	var dayStatisticsInfo = document.getElementById("dayStatisticsInfo");
	dayStatisticsInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	dayStatisticsInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	dayStatisticsInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideDayStatisticsInfo() {
	var dayStatisticsInfoHide = document.getElementById("dayStatisticsInfoHide");
	var dayStatisticsInfoShow = document.getElementById("dayStatisticsInfoShow");
	var dayStatisticsInfo = document.getElementById("dayStatisticsInfo");
	dayStatisticsInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	dayStatisticsInfoShow.style.visibility = "visible" // parodome show info mygtuka
	dayStatisticsInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

//---------------dayly statistics
function showDailyAveragesInfo() {
	var dailyAveragesInfoHide = document.getElementById("dailyAveragesInfoHide");
	var dailyAveragesInfoShow = document.getElementById("dailyAveragesInfoShow");
	var dailyAveragesInfo = document.getElementById("dailyAveragesInfo");
	dailyAveragesInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	dailyAveragesInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	dailyAveragesInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideDailyAveragesInfo() {
	var dailyAveragesInfoHide = document.getElementById("dailyAveragesInfoHide");
	var dailyAveragesInfoShow = document.getElementById("dailyAveragesInfoShow");
	var dailyAveragesInfo = document.getElementById("dailyAveragesInfo");
	dailyAveragesInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	dailyAveragesInfoShow.style.visibility = "visible" // parodome show info mygtuka
	dailyAveragesInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showYearToDateLast12WeeksInfo() {
	var yearToDateLast12WeeksInfoHide = document.getElementById("yearToDateLast12WeeksInfoHide");
	var yearToDateLast12WeeksInfoShow = document.getElementById("yearToDateLast12WeeksInfoShow");
	var yearToDateLast12WeeksInfo = document.getElementById("yearToDateLast12WeeksInfo");
	yearToDateLast12WeeksInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	yearToDateLast12WeeksInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	yearToDateLast12WeeksInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideYearToDateLast12WeeksInfo() {
	var yearToDateLast12WeeksInfoHide = document.getElementById("yearToDateLast12WeeksInfoHide");
	var yearToDateLast12WeeksInfoShow = document.getElementById("yearToDateLast12WeeksInfoShow");
	var yearToDateLast12WeeksInfo = document.getElementById("yearToDateLast12WeeksInfo");
	yearToDateLast12WeeksInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	yearToDateLast12WeeksInfoShow.style.visibility = "visible" // parodome show info mygtuka
	yearToDateLast12WeeksInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showHolidayStatisticsInfo() {
	var holidayStatisticsInfoHide = document.getElementById("holidayStatisticsInfoHide");
	var holidayStatisticsInfoShow = document.getElementById("holidayStatisticsInfoShow");
	var holidayStatisticsInfo = document.getElementById("holidayStatisticsInfo");
	holidayStatisticsInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	holidayStatisticsInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	holidayStatisticsInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHourlyAveragesInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideHolidayStatisticsInfo() {
	var holidayStatisticsInfoHide = document.getElementById("holidayStatisticsInfoHide");
	var holidayStatisticsInfoShow = document.getElementById("holidayStatisticsInfoShow");
	var holidayStatisticsInfo = document.getElementById("holidayStatisticsInfo");
	holidayStatisticsInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	holidayStatisticsInfoShow.style.visibility = "visible" // parodome show info mygtuka
	holidayStatisticsInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showHourlyAveragesInfo() {
	var hourlyAveragesInfoHide = document.getElementById("hourlyAveragesInfoHide");
	var hourlyAveragesInfoShow = document.getElementById("hourlyAveragesInfoShow");
	var hourlyAveragesInfo = document.getElementById("hourlyAveragesInfo");
	hourlyAveragesInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	hourlyAveragesInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	hourlyAveragesInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideYearToDatePercentageInfo();
	hideYearToDateHoursInfo();
}
function hideHourlyAveragesInfo() {
	var hourlyAveragesInfoHide = document.getElementById("hourlyAveragesInfoHide");
	var hourlyAveragesInfoShow = document.getElementById("hourlyAveragesInfoShow");
	var hourlyAveragesInfo = document.getElementById("hourlyAveragesInfo");
	hourlyAveragesInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	hourlyAveragesInfoShow.style.visibility = "visible" // parodome show info mygtuka
	hourlyAveragesInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showYearToDatePercentageInfo() {
	var yearToDatePercentageInfoHide = document.getElementById("yearToDatePercentageInfoHide");
	var yearToDatePercentageInfoShow = document.getElementById("yearToDatePercentageInfoShow");
	var yearToDatePercentageInfo = document.getElementById("yearToDatePercentageInfo");
	yearToDatePercentageInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	yearToDatePercentageInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	yearToDatePercentageInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideDailyAveragesInfo();
	hideDayStatisticsInfo();
	hideYearToDateTotalsInfo();
	hideWeeklyAveragesInfo();
	hideYearToDateLast12WeeksInfo();
	hideHolidayStatisticsInfo();
	hideHourlyAveragesInfo();
	hideYearToDateHoursInfo();
}
function hideYearToDatePercentageInfo() {
	var yearToDatePercentageInfoHide = document.getElementById("yearToDatePercentageInfoHide");
	var yearToDatePercentageInfoShow = document.getElementById("yearToDatePercentageInfoShow");
	var yearToDatePercentageInfo = document.getElementById("yearToDatePercentageInfo");
	yearToDatePercentageInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	yearToDatePercentageInfoShow.style.visibility = "visible" // parodome show info mygtuka
	yearToDatePercentageInfo.style.visibility = "hidden"; // paslepiame info puslapi
}


function deleteTaxPeriod(){
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	var url = "javascript/ajax/deletetaxperiod.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var return_data = request.responseText;
			var submitSuccess = document.getElementById("submitSuccessMain2");
			submitSuccess.innerHTML = 'Payslip Deleted!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
			//bankHolidayFilter(timeSinceEpoch);
			loadIndexes(taxPeriodNumber);
		}
		
	}
	request.send( "taxPeriodNumber="+taxPeriodNumber );
	document.getElementById("submitSuccessMain2").innerHTML = "Deleting...";
	//loadIndexes(taxPeriodNumber);
}

function hideErrorMessage()
{
	var submitSuccessMain = document.getElementById("submitSuccessMain");
	submitSuccessMain.innerHTML = " ";
	submitSuccessMain.setAttribute("class", "submitSuccessBP");
		
}

function scrollFunctionTableCaption() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("hiddenMenu").style.top = "0px";
		document.getElementById("tableCaptionHidden").style.top = "30px";
    }
	else {
		document.getElementById("hiddenMenu").style.top = "-350px";
        document.getElementById("tableCaptionHidden").style.top = "-100px";
    }
}


function determineTaxPeriodNumber() //nustatomas dabartinis tax periodas
{
	var currentDate = new Date();
	var currentTime = currentDate.getTime() 					//mseconds since epoch
	var mSecondsInWeek = 604800000;
	var taxPeriodNumber = Math.ceil((currentTime - timeSinceEpochOriginal)/mSecondsInWeek);//nustatome tax perioda
	
	weekStart = Number(weekStartArray[taxPeriodNumber]);

	var modTimeSinceEpoch = timeSinceEpochOriginal + 604800000*(taxPeriodNumber)+weekStart*86400000;

	createFirstColumnElements(taxPeriodNumber);
	createSecondColumnElements(taxPeriodNumber);
	createThirdColumnElements(taxPeriodNumber);
	createThourthColumnElements(taxPeriodNumber);
	createPayoutButtons(taxPeriodNumber);

	hideHoursSelect();
	
	var submitForm = document.getElementById("form");
	submitForm.onclick = function () {deselectValuesValidateForm();}
	
	var deleteTaxPeriodButton = document.getElementById("delete");
	deleteTaxPeriodButton.onclick = function(){deleteTaxPeriod();}

	var buttonRight = document.getElementById("buttonRight");
	var downButton = document.getElementById("buttonDown");
	var buttonRightHidden = document.getElementById("buttonRightHidden");
	buttonRight.onclick = increaseTaxPeriodAlternative;
	downButton.onclick = increaseTaxPeriodAlternative;
	buttonRightHidden.onclick = increaseTaxPeriodAlternative;

	var buttonLeft = document.getElementById("buttonLeft");
	var upButton = document.getElementById("buttonUp");
	var buttonLeftHidden = document.getElementById("buttonLeftHidden");
	buttonLeft.onclick = decreaseTaxPeriodAlternative;
	upButton.onclick = decreaseTaxPeriodAlternative;
	buttonLeftHidden.onclick = decreaseTaxPeriodAlternative;

	var fastBackward = document.getElementById("fastBackward");
	fastBackward.onclick = fastDecreaseTaxPeriodAlternative;
	
	var fastForward = document.getElementById("fastForward");
	fastForward.onclick = fastIncreaseTaxPeriodAlternative;
	
	//info pages hide/show functions
	var yearToDatePercentageInfoShow = document.getElementById("yearToDatePercentageInfoShow");
	yearToDatePercentageInfoShow.onclick = showYearToDatePercentageInfo;
	var yearToDatePercentageInfoHide = document.getElementById("yearToDatePercentageInfoHide");
	yearToDatePercentageInfoHide.onclick = hideYearToDatePercentageInfo;
	
	var weeklyAveragesInfoShow = document.getElementById("weeklyAveragesInfoShow");
	weeklyAveragesInfoShow.onclick = showWeeklyAveragesInfo;
	var weeklyAveragesInfoHide = document.getElementById("weeklyAveragesInfoHide");
	weeklyAveragesInfoHide.onclick = hideWeeklyAveragesInfo;
	
	var yearToDateTotalsInfoShow = document.getElementById("yearToDateTotalsInfoShow");
	yearToDateTotalsInfoShow.onclick = showYearToDateTotalsInfo;
	var yearToDateTotalsInfoHide = document.getElementById("yearToDateTotalsInfoHide");
	yearToDateTotalsInfoHide.onclick = hideYearToDateTotalsInfo;
	
	var yearToDateTotalsHoursInfoShow = document.getElementById("yearToDateTotalsHoursInfoShow");
	yearToDateTotalsHoursInfoShow.onclick = showYearToDateHoursInfo;
	var yearToDateTotalsHoursInfoHide = document.getElementById("yearToDateTotalsHoursInfoHide");
	yearToDateTotalsHoursInfoHide.onclick = hideYearToDateHoursInfo;
	
	var dayStatisticsInfoShow = document.getElementById("dayStatisticsInfoShow");
	dayStatisticsInfoShow.onclick = showDayStatisticsInfo;
	var dayStatisticsInfoHide = document.getElementById("dayStatisticsInfoHide");
	dayStatisticsInfoHide.onclick = hideDayStatisticsInfo;
	
	var dailyAveragesInfoShow = document.getElementById("dailyAveragesInfoShow");
	dailyAveragesInfoShow.onclick = showDailyAveragesInfo;
	var dailyAveragesInfoHide = document.getElementById("dailyAveragesInfoHide");
	dailyAveragesInfoHide.onclick = hideDailyAveragesInfo;
	
	var yearToDateLast12WeeksInfoShow = document.getElementById("yearToDateLast12WeeksInfoShow");
	yearToDateLast12WeeksInfoShow.onclick = showYearToDateLast12WeeksInfo;
	var yearToDateLast12WeeksInfoHide = document.getElementById("yearToDateLast12WeeksInfoHide");
	yearToDateLast12WeeksInfoHide.onclick = hideYearToDateLast12WeeksInfo;
	
	var holidayStatisticsInfoShow = document.getElementById("holidayStatisticsInfoShow");
	holidayStatisticsInfoShow.onclick = showHolidayStatisticsInfo;
	var holidayStatisticsInfoHide = document.getElementById("holidayStatisticsInfoHide");
	holidayStatisticsInfoHide.onclick = hideHolidayStatisticsInfo;

	var hourlyAveragesInfoShow = document.getElementById("hourlyAveragesInfoShow");
	hourlyAveragesInfoShow.onclick = showHourlyAveragesInfo;
	var hourlyAveragesInfoHide = document.getElementById("hourlyAveragesInfoHide");
	hourlyAveragesInfoHide.onclick = hideHourlyAveragesInfo;

	
	generateCalendar(taxPeriodNumber,(modTimeSinceEpoch-604800000));

	loadIndexes(taxPeriodNumber);

	var submitSuccessMainHideError = document.getElementById("submitSuccessMain");
	submitSuccessMainHideError.onclick = hideErrorMessage;
	
	window.onscroll = function() {scrollFunctionTableCaption()};
}	

function getStartDayOfWeek(){
		if(request.readyState == 4 && request.status == 200){
			var response = JSON.parse(this.responseText);
			
			for (a=0; a<210; a++) //a<66 turi sutapti su backend faile esanciau apribojimu
			{
				var weekStartAr = response.weekStartArray[a];		
				weekStartArray[a]= weekStartAr;
				
				var unsHCheckArray = response.unsHCheckArray[a];
				unsHCheck[a] = unsHCheckArray;

			}	
		}
		determineTaxPeriodNumber();
	}

function getStartDayOfWeekRequest(){
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	request.open("POST", "javascript/ajax/weekstart2.php", false); //synchronous call paimame verte is esamu nustatymu
	
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = getStartDayOfWeek;
	request.send(null);

}
document.addEventListener("DOMContentLoaded",getStartDayOfWeekRequest,false);

function reloadCharts(){
	var taxPeriodNumber = document.getElementById("taxPeriodNr").value;
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	request.open("POST", "javascript/ajax/loadindexes.php", true);
	
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function (){
		if(request.readyState == 4 && request.status == 200){
			var response = JSON.parse(this.responseText);
			
			var premium = Number(response.premium);
			//var panel = document.getElementById("panel").innerHTML += premium;
			
			var totalHolidaysUsed = response.totalHolidaysUsed;
			var totalHolidaysBooked = response.totalHolidaysBooked;
			var holidaysNotUsed = response.holidaysNotUsed;
			
			//------------------------drawing charts--------------------------------------------------//
			if (premium === 1){
			google.charts.load('current', {'packages':['corechart']});
			
			//holidays chart
			if(totalHolidaysUsed>0||totalHolidaysBooked>0||holidaysNotUsed>0){
				google.charts.setOnLoadCallback(drawChartHolidays);
				function drawChartHolidays() {

				var data = google.visualization.arrayToDataTable([
					['Type', 'Days'],
					['Used', totalHolidaysUsed],
					['Booked', totalHolidaysBooked],
					['Available', holidaysNotUsed],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Holidays Pie Chart',
					colors: ['#ff944d', '#9fdf9f', '#53c653'],
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('holidayStatisticsPieChart'));

					chart.draw(data, options);
				}
			}
			else
			{
				document.getElementById('holidayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
			//days chart
			var daysNotSelected = Number(response.daySum0);
			var daysIn = Number(response.daySum1);
			var daysOff = Number(response.daySum2);
			var daysHoliday = Number(response.daySum3);
			var daysHalfInHalfHol = Number(response.daySum4);
			var daysUnpaidHoliday = Number(response.daySum5);
			var daysInSick = Number(response.daySum6);
			var daysSickness = Number(response.daySum7);
			var daysAbsence = Number(response.daySum8);
			var daysParental = Number(response.daySum9);
			var daysBereavement = Number(response.daySum10);
			var daysCompassionate = Number(response.daySum11);
			
			if(daysNotSelected>0||daysIn>0||daysOff>0||daysHoliday>0||daysHalfInHalfHol>0||daysUnpaidHoliday>0||daysInSick>0||
			daysSickness>0||daysAbsence>0||daysParental>0||daysBereavement>0||daysCompassionate>0){
				google.charts.setOnLoadCallback(drawChartDays);
				function drawChartDays() {

				var data = google.visualization.arrayToDataTable([
					['Type', 'Days'],
					['Not Defined', daysNotSelected],
					['Days In', daysIn],
					['Days Off', daysOff],
					['Holidays', daysHoliday],
					['Half In/Hals Off', daysHalfInHalfHol],
					['Unpaid Holiday', daysUnpaidHoliday],
					['Day In/Sick', daysInSick],
					['Sickness', daysSickness],
					['Absence', daysAbsence],
					['Paternal', daysParental],
					['Bereavement', daysBereavement],
					['Compassionate', daysCompassionate],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Days Statistics',
					colors: ['#ffffff', '#e6e600', '#c3c3a2', '#d5ff80', '#e6ffe6', '#e6ffb3', '#ffcccc', '#ff9999', '#ccebff', '#ffcc99', '#4d4d4d', '#ffe6cc'],
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('dayStatisticsPieChart'));

					chart.draw(data, options);
				}
			}
			else{
				document.getElementById('dayStatisticsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
			//payments chart
			var basicHoursPay = Number(response.basicHoursPay);
			var unsocial_prem = Number(response.unsocial_prem);
			var unsocial_prem_hol = Number(response.unsocial_prem_hol);
			var unsocial_prem_sick = Number(response.unsocial_prem_sick);
			var unsocial_prem_family = Number(response.unsocial_prem_family);
			var unsocial_prem_bereavement = Number(response.unsocial_prem_bereavement);
			var unsocial_prem_compassionate = Number(response.unsocial_prem_compassionate);
			var OT1Pay = Number(response.OT1Pay);
			var OT2Pay = Number(response.OT2Pay);
			var enhancedHolidayPay = Number(response.enhancedHolidayPay);
			var holidayPay = Number(response.holidayPay);
			var sicknessPay = Number(response.sicknessPay);
			var familyPay = Number(response.familyPay);
			var bereavementPay = Number(response.bereavementPay);
			var compassionatePay = Number(response.compassionatePay);
			var bankHolidayHoursPay = Number(response.bankHolidayHoursPay);
			var bankHolidayClockInBonus = Number(response.bankHolidayClockInBonus);
			var payBack = Number(response.payBack);
			var pieceWork = Number(response.pieceWork);
			var SSP = Number(response.SSP);
			var SPP = Number(response.SPP);
			var additionalPayment = Number(response.additionalPayment);
			var additionalPayment2 = Number(response.additionalPayment2);
			var additionalPayment3 = Number(response.additionalPayment3);
			var christmasSavingsPayment = Number(response.christmasSavingsPayment);
			var summerSavingsPayment = Number(response.summerSavingsPayment);
			var saturdayExtraPay = Number(response.saturdayExtraPay);
			var sundayExtraPay = Number(response.sundayExtraPay);
			var SAP = Number(response.SAP);
			var salary = Number(response.salary);
			var bonus = Number(response.bonus);
			var commissions = Number(response.commissions);

			//jei bent viena verte didesne uz nuli braizome grafika
			if (basicHoursPay >0||unsocial_prem>0||unsocial_prem_hol>0||unsocial_prem_sick>0||unsocial_prem_family>0||
			unsocial_prem_bereavement>0||unsocial_prem_compassionate>0||OT1Pay>0||OT2Pay>0||enhancedHolidayPay>0||holidayPay>0||
			saturdayExtraPay>0||sundayExtraPay>0||sicknessPay>0||familyPay>0||bereavementPay>0||compassionatePay>0||bankHolidayHoursPay>0||
			bankHolidayClockInBonus>0||payBack>0||pieceWork>0||SSP>0||SPP>0||additionalPayment>0||additionalPayment2>0||additionalPayment3>0||
			christmasSavingsPayment>0||summerSavingsPayment>0||SAP>0||salary>0||bonus>0||commissions>0)
			{
				google.charts.setOnLoadCallback(drawChartPayments);
				function drawChartPayments() {

				var data = google.visualization.arrayToDataTable([
					['Type', 'Payments'],
					['Basic Pay', basicHoursPay],
					['Uns. Premium', unsocial_prem],
					['Uns Prem. Holidays', unsocial_prem_hol],
					['Uns Prem. Sickness', unsocial_prem_sick],
					['Uns Prem. Paternity', unsocial_prem_family],
					['Uns Prem. Bereav.', unsocial_prem_bereavement],
					['Uns Prem. Compass.', unsocial_prem_compassionate],
					['Overtime 1 Pay', OT1Pay],
					['Overtime 2 Pay', OT2Pay],
					['Enhanced Holiday Pay', enhancedHolidayPay],
					['Holiday Pay', holidayPay],
					['Saturday Extra Pay', saturdayExtraPay],
					['Sunday Extra Pay', sundayExtraPay],
					['Sickness Pay', sicknessPay],
					['Paternity Pay', familyPay],
					['Bereavement Pay', bereavementPay],
					['Compassionate Pay', compassionatePay],
					['Bank Holiday Pay', bankHolidayHoursPay],
					['Bank Holiday Bonus', bankHolidayClockInBonus],
					['Back Pay', payBack],
					['Piece Work', pieceWork],
					['SSP', SSP],
					['SPP', SPP],
					['Add. Payment 1', additionalPayment],
					['Add. Payment 2', additionalPayment2],
					['Add. Payment 3', additionalPayment3],
					['Christmas Sav. Payment', christmasSavingsPayment],
					['Summer Sav. Payment', summerSavingsPayment],
					['SAP', SAP],
					['Salary', salary],
					['Bonus', bonus],
					['Commissions', commissions],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Payments Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('paymentsPieChart'));

					chart.draw(data, options);
				}
			}	
			else{
				 paymentsPieChart = document.getElementById("paymentsPieChart").innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
			//if peniosn is not a salary sacrifise, show it in deductions chart
			var pensionBeforeTax = Number(response.pensionBeforeTax);
			if (pensionBeforeTax ===0)
			{
				var pensionAmountChart = pensionAmount;
				var pensionSumChart = pensionSum;
				var pensionSumLast12WeeksChart = pensionSumLast12Weeks;
			}
			else{
				var pensionAmountChart = 0;
				var pensionSumChart = 0;
				var pensionSumLast12WeeksChart = 0;
			}
			
			//deductions chart
			//var pensionBeforeTax = response.pensionBeforeTax;
			var netPay = Number(response.netPay);
			var taxAmount = Number(response.taxAmount);
			var NIAmount = Number(response.NIAmount);
			var pensionAmount = response.pensionAmount;
			var unionDeduction = Number(response.unionDeduction);
			var christmasSavingsDeduction = Number(response.christmasSavingsDeduction);
			var otherDeduction = Number(response.otherDeduction);
			var otherDeductionName = response.otherDeductionName;
			var otherDeduction2 = Number(response.otherDeduction2);
			var otherDeduction2Name = response.otherDeduction2Name;
			var otherDeduction3 = Number(response.otherDeduction3);
			var otherDeduction3Name = response.otherDeduction3Name;
			var companyLoan = Number(response.companyLoan);	
			var studentLoanDeduction = Number(response.studentLoanDeduction);
			var summerSavingsDeduction = Number(response.summerSavingsDeduction);
			
		
			//deductions chart
			if (christmasSavingsDeduction<0){christmasSavingsDeduction = 0;}
			if (summerSavingsDeduction<0){summerSavingsDeduction = 0;}
			if (taxAmount>0||NIAmount>0||unionDeduction>0||pensionAmountChart>0||christmasSavingsDeduction>0||summerSavingsDeduction>0||
			companyLoan>0||studentLoanDeduction>0||otherDeduction>0||otherDeduction2>0||otherDeduction3>0||netPay>0){
				google.charts.setOnLoadCallback(drawChartDeductions);
				function drawChartDeductions() {
				var data = google.visualization.arrayToDataTable([
					['Type', 'Chart'],
					['Tax', taxAmount],
					['NI', NIAmount],
					['Union', unionDeduction],
					['Pension', pensionAmountChart],
					['Christmas savings', christmasSavingsDeduction],
					['Summer savings.', summerSavingsDeduction],
					['Company Loan', companyLoan],
					['Student Loan', studentLoanDeduction],
					[otherDeductionName, otherDeduction],
					[otherDeduction2Name, otherDeduction2],
					[otherDeduction3Name, otherDeduction3],
					['Net Pay', netPay],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Deductions Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('deductionsPieChart'));

					chart.draw(data, options);
				}
			}
			else{
				document.getElementById('deductionsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
			//Year to date chart
			var taxSum = Number(response.taxSum);
			var NISum = Number(response.NISum);
			var union_deSum = Number(response.union_deSum);
			//var pensionSum = Number(response.pensionSum);
			var chris_savSum = Number(response.chris_savSum);
			var summer_savSum = Number(response.summer_savSum);
			var other_de = Number(response.other_de);
			var add_deSum2 = Number(response.add_deSum2);
			var add_deSum3 = Number(response.add_deSum3);
			var netPaySum = Number(response.netPaySum);
			var companyLoanSum = Number(response.companyLoanSum);
			var studentLoanDeductionSum = Number(response.studentLoanDeductionSum);
			
			if(taxSum>0||NISum>0||union_deSum>0||pensionSumChart>0||chris_savSum>0||summer_savSum>0||companyLoanSum>0||
			studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
				google.charts.setOnLoadCallback(drawChartYearToDate);
				function drawChartYearToDate() {
				var data = google.visualization.arrayToDataTable([
					['Type', 'Chart'],
					['Tax', taxSum ],
					['NI', NISum ],
					['Union', union_deSum],
					['Pension', pensionSumChart],
					['Christmas savings', chris_savSum ],
					['Summeer savings.', summer_savSum ],
					['Company Loan', companyLoanSum ],
					['Student Loan', studentLoanDeductionSum],
					['Add. Deduction', other_de ],
					['Add. Deduction 2', add_deSum2 ],
					['Add. Deduction 3', add_deSum3 ],
					['Net Pay', netPaySum ],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Year To Date Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('yearToDatePieChart'));

					chart.draw(data, options);
				}
			}
			else{
				document.getElementById('yearToDatePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}	
			
			//-------Percentage payments Value--------------------//
			var holidaysPercentage = response.holidaysPercentage;
			var bankHolidayPercentge = response.bankHolidayPercentge;
			var sicknessPercentage  = response.sicknessPercentage;
			var parentalPercentage  = response.parentalPercentage;
			var overtimePercentage = response.overtimePercentage;
			var otherPercentage = response.otherPercentage;
			var basicPaymentsPercentage = response.basicPaymentsPercentage;
			
			
			//Year to date Percentage chart
			if (basicPaymentsPercentage>0||holidaysPercentage>0||sicknessPercentage>0||overtimePercentage>0||bankHolidayPercentge>0||
			parentalPercentage>0||otherPercentage>0){
				google.charts.setOnLoadCallback(drawChartYearToDatePercentages);
				function drawChartYearToDatePercentages() {
				var data = google.visualization.arrayToDataTable([
					['Name', 'Value'],
					['Basic Payments', basicPaymentsPercentage],
					['Holiday Payments', holidaysPercentage],
					['Sick Payments', sicknessPercentage],
					['Overtime Payments', overtimePercentage],
					['Bank Holiday Payments', bankHolidayPercentge],
					['Paternity Payments', parentalPercentage],
					['Other Payments', otherPercentage],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Year To Date Percentage Pie Chart',
					is3D: true,
					colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
					};

					var chart = new google.visualization.PieChart(document.getElementById('yearToDatePercentagePieChart'));

					chart.draw(data, options);
				}
			}
			else
			{
				document.getElementById('yearToDatePercentagePieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
			
			//year to date II table totals
			var basicPaySum = Number(response.basicPaySum);
			var ot1_paySum = Number(response.ot1_paySum);
			var ot2_paySum = Number(response.ot2_paySum);
			var hol_paySum = Number(response.hol_paySum);
			var enhol_paySum = Number(response.enhol_paySum);
			var bhol_paySum = Number(response.bhol_paySum);
			var bhol_bonusSum = Number(response.bhol_bonusSum);
			var sick_paySum = Number(response.sick_paySum);
			var fam_paySum = Number(response.fam_paySum);
			var ber_paySum = Number(response.ber_paySum);
			var comp_paySum = Number(response.comp_paySum);
			var uns_premSum = Number(response.uns_premSum);
			var uns_holSum = Number(response.uns_holSum);
			var uns_sickSum = Number(response.uns_sickSum);
			var uns_familySum = Number(response.uns_familySum);
			var uns_berSum = Number(response.uns_berSum);
			var uns_compSum = Number(response.uns_compSum);
			var SPP_Sum = Number(response.SPP_Sum);
			var SSP_Sum = Number(response.SSP_Sum);
			var pieceWorkSum = Number(response.pieceWorkSum);
			var add_paySum = Number(response.add_paySum);
			var add_pay2Sum = Number(response.add_pay2Sum);
			var add_pay3Sum = Number(response.add_pay3Sum);
			var saturdayExtraPaySum = Number(response.saturdayExtraPaySum);
			var sundayExtraPaySum = Number(response.sundayExtraPaySum);
			var SAPSum = Number(response.SAPSum);
			var salarySum = Number(response.salarySum);
			var bonusSum = Number(response.bonusSum);
			var commissionsSum = Number(response.commissionsSum);
			//Year to date Payments chart
			var workPayments = basicPaySum+ot1_paySum+ot2_paySum+uns_premSum+bhol_paySum+bhol_bonusSum+saturdayExtraPaySum+sundayExtraPaySum;
			workPayments+=pieceWorkSum+add_paySum+add_pay2Sum+add_pay3Sum+salarySum+bonusSum+commissionsSum;
			
			var leavePayments = hol_paySum+enhol_paySum+uns_holSum+sick_paySum+uns_sickSum+SSP_Sum+fam_paySum+uns_familySum+SPP_Sum;
			leavePayments+= ber_paySum+uns_berSum+comp_paySum+uns_compSum+SAPSum;
			
			if(workPayments>0 || leavePayments>0){
				google.charts.setOnLoadCallback(drawChartYearToDatePayments);
				function drawChartYearToDatePayments() {
				var data = google.visualization.arrayToDataTable([
					['Name','Work Payments', 'Leave Payments'],
					['Value',workPayments, leavePayments],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Year To Date Work and Leave Payments Comparison',
					//is3D: true,
					isStacked: true,
					colors: ['#e6e600', '#d5ff80'],
					};

					var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateIIPieChart'));

					chart.draw(data, options);
				}
				}
				else
				{
					document.getElementById('yearToDateIIPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
			
				var basicHoursSum = Number(response.basicHoursSum);
				var ot1_unitsSum = Number(response.ot1_unitsSum);
				var ot2_unitsSum = Number(response.ot2_unitsSum);
				var uns_prem_unSum = Number(response.uns_prem_unSum);
				var uns_hol_unSum = Number(response.uns_hol_unSum);
				var uns_sick_unSum = Number(response.uns_sick_unSum);
				var uns_family_unSum = Number(response.uns_family_unSum);
				var uns_ber_unSum = Number(response.uns_ber_unSum);
				var uns_comp_unSum = Number(response.uns_comp_unSum);
				
				var enhol_unitsSum = Number(response.enhol_unitsSum);
				var hol_unitsSum = Number(response.hol_unitsSum);
				var sick_unitsSum = Number(response.sick_unitsSum);
				var fam_unitsSum = Number(response.fam_unitsSum);
				var ber_unitsSum = Number(response.ber_unitsSum);
				var comp_unitsSum = Number(response.comp_unitsSum);
				
				//Year to date Hours chart
				var unsHourSum = uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum;
				if (unsHourSum>0){
					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||uns_prem_unSum>0||uns_hol_unSum>0||uns_sick_unSum>0||uns_family_unSum>0||
					uns_ber_unSum>0||uns_comp_unSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||ber_unitsSum>0||
					comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
							['Unsocial Hours', uns_prem_unSum+uns_hol_unSum+uns_sick_unSum+uns_family_unSum+uns_ber_unSum+uns_comp_unSum],
							['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Year To Date Hours column Chart',
							isStacked: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};

							var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}
				}
				else{
					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
					ber_unitsSum>0||comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Work Hours', basicHoursSum+ot1_unitsSum+ot2_unitsSum],
							['Leave Hours', enhol_unitsSum+hol_unitsSum+sick_unitsSum+fam_unitsSum+ber_unitsSum+comp_unitsSum,],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Year To Date Hours column Chart',
							isStacked: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};
							var chart = new google.visualization.ColumnChart(document.getElementById('yearToDateHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('yearToDateHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}
					
				}
					
					
				//last 13 weeks averages
				var taxSumLast12Weeks = Number(response.taxSumLast12Weeks)/13;
				var NISumLast12Weeks = Number(response.NISumLast12Weeks)/13;
				var union_deSumLast12Weeks = Number(response.union_deSumLast12Weeks)/13;
				//var pensionSumLast12Weeks = Number(response.pensionSumLast12Weeks)/13;
				var chris_savSumLast12Weeks = Number(response.chris_savSumLast12Weeks)/13;
				var summer_savSumLast12Weeks = Number(response.summer_savSumLast12Weeks)/13;
				var other_deLast12Weeks = Number(response.other_deLast12Weeks)/13;
				var add_deSum2Last12Weeks = Number(response.add_deSum2Last12Weeks)/13;
				var add_deSum3Last12Weeks = Number(response.add_deSum3Last12Weeks)/13;
				var netPaySumLast12Weeks = Number(response.netPaySumLast12Weeks)/13;
				var companyLoanSumLast12Weeks = Number(response.companyLoanSumLast12Weeks)/13;
				var studentLoanDeductionSumLast12Weeks = Number(response.studentLoanDeductionSumLast12Weeks)/13;
				
				if (chris_savSumLast12Weeks<0){chris_savSumLast12Weeks = 0;}
				if (summer_savSumLast12Weeks<0){summer_savSumLast12Weeks = 0;}
				
				if(taxSumLast12Weeks>0||NISumLast12Weeks>0||union_deSumLast12Weeks>0||pensionSumLast12WeeksChart>0||chris_savSumLast12Weeks>0||
				summer_savSumLast12Weeks>0||companyLoanSumLast12Weeks>0||studentLoanDeductionSumLast12Weeks>0||other_deLast12Weeks>0||
				add_deSum2Last12Weeks>0||add_deSum3Last12Weeks>0||netPaySumLast12Weeks>0){
					google.charts.setOnLoadCallback(drawChartLast3Months);
					function drawChartLast3Months() {
					var data = google.visualization.arrayToDataTable([
						['Type', 'Chart'],
						['Tax', taxSumLast12Weeks],
						['NI', NISumLast12Weeks],
						['Union', union_deSumLast12Weeks],
						['Pension', pensionSumLast12WeeksChart],
						['Christmas savings', chris_savSumLast12Weeks],
						['Summer savings.', summer_savSumLast12Weeks],
						['Company Loan', companyLoanSumLast12Weeks],
						['Student Loan', studentLoanDeductionSumLast12Weeks],
						['Add. Deduction', other_deLast12Weeks],
						['Add. Deduction 2', add_deSum2Last12Weeks],
						['Add. Deduction 3', add_deSum3Last12Weeks],
						['Net Pay', netPaySumLast12Weeks],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 3 Months Averages Pie Chart',
						is3D: true,
						};

						var chart = new google.visualization.PieChart(document.getElementById('las3MonthsPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('las3MonthsPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				//averages chart
				var averageTax = taxSum / taxPeriodNumberNew;
				var averageNI = NISum / taxPeriodNumberNew;
				var gross_paySum = Number(response.gross_paySum);
				var averageGrossPay = gross_paySum / taxPeriodNumberNew;
				var netPaySum = Number(response.netPaySum);
				var averageNetPay = netPaySum / taxPeriodNumberNew;

				//weekly averages
				if(averageTax>0||averageNI>0||averageNetPay>0||averageGrossPay>0){
				google.charts.setOnLoadCallback(drawChartWeeklyAverages);
				function drawChartWeeklyAverages() {
					
				var averageOtherWeekly = averageGrossPay - averageNetPay - averageNI - averageTax;
				var data = google.visualization.arrayToDataTable([
					['Type', 'Chart'],
					['Tax', averageTax ],
					['NI', averageNI ],
					['NetPay', averageNetPay ],
					['Other deductions sum', averageOtherWeekly],
					]);

					var options = {
					backgroundColor: '#ffffcc',
					title: 'Weekly Averages Pie Chart',
					is3D: true,
					};

					var chart = new google.visualization.PieChart(document.getElementById('weeklyAveragesPieChart'));

					chart.draw(data, options);
				}
			}
			else{
				document.getElementById('weeklyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
			}
				
				
				var dailyGrossPay = response.dailyGrossPay;
				var dailyNetPay = response.dailyNetPay;
				var dailytaxSum  = response.dailytaxSum;
				var dailyNISum  = response.dailyNISum;
				var dailyHoursAtWork = response.dailyHoursAtWork;
				var dailyPaidHours = response.dailyPaidHours;
				
				var dailyGrossPayAllDays = response.dailyGrossPayAllDays;
				var dailyNetPayAllDays = response.dailyNetPayAllDays;
				var dailytaxSumAllDays  = response.dailytaxSumAllDays;
				var dailyNISumAllDays  = response.dailyNISumAllDays;
				var dailyHoursAtWorkAllDays = response.dailyHoursAtWorkAllDays;
				var dailyPaidHoursAllDays = response.dailyPaidHoursAllDays;	
				
				//daily averages
				if(dailyGrossPayAllDays>0||dailyGrossPay>0||dailyNetPayAllDays>0||dailyNetPay>0||dailytaxSumAllDays>0||dailytaxSum>0||
				dailyNISumAllDays>0||dailyNISum>0||dailyHoursAtWorkAllDays>0||dailyHoursAtWork>0||dailyPaidHoursAllDays>0||dailyPaidHours>0){
					google.charts.setOnLoadCallback(drawChartDailyAverages);
					function drawChartDailyAverages() {			
					var data = google.visualization.arrayToDataTable([
						['Name', 'All Work Days','Difference between all work days and days in values'],
						["Gross Pay", dailyGrossPayAllDays,dailyGrossPay-dailyGrossPayAllDays],
						["Net Pay", dailyNetPayAllDays, dailyNetPay-dailyNetPayAllDays],
						["TAX", dailytaxSumAllDays, dailytaxSum-dailytaxSumAllDays],
						["NI", dailyNISumAllDays, dailyNISum-dailyNISumAllDays],
						["Hours at work", dailyHoursAtWorkAllDays, dailyHoursAtWork-dailyHoursAtWorkAllDays],
						["Paid hours at work", dailyPaidHoursAllDays, dailyPaidHours-dailyPaidHoursAllDays],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Hourly Averages Column Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('dailyAveragesPieChart'));

						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('dailyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//-------average hourly statistics--------------------//
				var hourlyGrossPay = response.hourlyGrossPay;
				var hourlyNetPay = response.hourlyNetPay;
				var hourlytaxSum  = response.hourlytaxSum;
				var hourlyNISum  = response.hourlyNISum;
				
				var hourlyGrossPayTotalH = response.hourlyGrossPayTotalH;
				var hourlyNetPayTotalH = response.hourlyNetPayTotalH;
				var hourlytaxSumTotalH  = response.hourlytaxSumTotalH;
				var hourlyNISumTotalH  = response.hourlyNISumTotalH;
				
				var hourlyGrossPayAllH = response.hourlyGrossPayAllH;;
				var hourlyNetPayAllH = response.hourlyNetPayAllH;;
				var hourlytaxSumAllH  = response.hourlytaxSumAllH;;
				var hourlyNISumAllH  = response.hourlyNISumAllH;;
				
				//hourly averages
				if(hourlyGrossPayAllH>0||hourlyGrossPayTotalH>0||hourlyGrossPay>0||hourlyNetPayAllH>0||hourlyNetPayTotalH>0||hourlyNetPay>0||
				hourlytaxSumAllH>0||hourlytaxSumTotalH>0||hourlytaxSum>0||hourlyNISumAllH>0||hourlyNISumTotalH>0||hourlyNISum>0){
					google.charts.setOnLoadCallback(drawChartHourlyAverages);
					function drawChartHourlyAverages() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'All Paid Hours','Difference between all paid hours and hours worked', 'Difference between paid Hours and hours worked'],
						["Gross Pay", hourlyGrossPayAllH,hourlyGrossPayTotalH-hourlyGrossPayAllH,hourlyGrossPay-hourlyGrossPayTotalH],
						["Net Pay", hourlyNetPayAllH, hourlyNetPayTotalH-hourlyNetPayAllH ,hourlyNetPay-hourlyNetPayTotalH],
						["TAX", hourlytaxSumAllH, hourlytaxSumTotalH-hourlytaxSumAllH , hourlytaxSum-hourlytaxSumTotalH],
						["NI", hourlyNISumAllH, hourlyNISumTotalH-hourlyNISumAllH , hourlyNISum-hourlyNISumTotalH],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Hourly Averages Column Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('hourlyAveragesPieChart'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('hourlyAveragesPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}

				//paid hours chart
				if(Number(response.last10NetPayArray[9])>0||Number(response.last10DeductionsArray[9])>0||
				Number(response.last10NetPayArray[8])>0||Number(response.last10DeductionsArray[8])>0||
				Number(response.last10NetPayArray[7])>0||Number(response.last10DeductionsArray[7])>0||
				Number(response.last10NetPayArray[6])>0||Number(response.last10DeductionsArray[6])>0||
				Number(response.last10NetPayArray[5])>0||Number(response.last10DeductionsArray[5])>0||
				Number(response.last10NetPayArray[4])>0||Number(response.last10DeductionsArray[4])>0||
				Number(response.last10NetPayArray[3])>0||Number(response.last10DeductionsArray[3])>0||
				Number(response.last10NetPayArray[2])>0||Number(response.last10DeductionsArray[2])>0||
				Number(response.last10NetPayArray[1])>0||Number(response.last10DeductionsArray[1])>0||
				Number(response.last10NetPayArray[0])>0||Number(response.last10DeductionsArray[0])>0){
					google.charts.setOnLoadCallback(drawChartColumnPaidHours);
					function drawChartColumnPaidHours() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'Net Pay', 'Deductions' ],
						["10", Number(response.last10NetPayArray[9]), Number(response.last10DeductionsArray[9])],
						["9", Number(response.last10NetPayArray[8]), Number(response.last10DeductionsArray[8])],
						["8", Number(response.last10NetPayArray[7]), Number(response.last10DeductionsArray[7])],
						["7", Number(response.last10NetPayArray[6]), Number(response.last10DeductionsArray[6])],
						["6", Number(response.last10NetPayArray[5]), Number(response.last10DeductionsArray[5])],
						["5", Number(response.last10NetPayArray[4]), Number(response.last10DeductionsArray[4])],
						["4", Number(response.last10NetPayArray[3]), Number(response.last10DeductionsArray[3])],
						["3", Number(response.last10NetPayArray[2]), Number(response.last10DeductionsArray[2])],
						["2", Number(response.last10NetPayArray[1]), Number(response.last10DeductionsArray[1])],
						["Current", Number(response.last10NetPayArray[0]), Number(response.last10DeductionsArray[0])],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 10 Weeks Net Pay and Deductions Chart',
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}
				
				//susumuojame visas valandas patikrinti ar reikia braizyti grafika
				var last10weeksHoursSum = 0;
				for (i=0;i<10;i++)
				{
					last10weeksHoursSum += Number(response.last10WorkingHoursArray[i]);
					last10weeksHoursSum += Number(response.last10AllHolidayHoursArray[i]);
					last10weeksHoursSum += Number(response.last10SickHoursArray[i]);
					last10weeksHoursSum += Number(response.last10FamHoursArray[i]);
					last10weeksHoursSum += Number(response.last10BerHoursArray[i]);
					last10weeksHoursSum += Number(response.last10CompHoursArray[i]);	
				}
				
				if(last10weeksHoursSum>0){
					google.charts.setOnLoadCallback(drawChartColumn);
					function drawChartColumn() {
						
					var data = google.visualization.arrayToDataTable([
					
						['TAX Period Nr.', 'Working Hours', 'Holiday Hours', 'Sickness Hours', 'Parental Hours', 'Bereavement Hours', 'Compassionate Hours' ],
						["10", Number(response.last10WorkingHoursArray[9]), Number(response.last10AllHolidayHoursArray[9]), Number(response.last10SickHoursArray[9]), Number(response.last10FamHoursArray[9]), Number(response.last10BerHoursArray[9]), Number(response.last10CompHoursArray[9])],
						["9", Number(response.last10WorkingHoursArray[8]), Number(response.last10AllHolidayHoursArray[8]), Number(response.last10SickHoursArray[8]), Number(response.last10FamHoursArray[8]), Number(response.last10BerHoursArray[8]), Number(response.last10CompHoursArray[8])],
						["8", Number(response.last10WorkingHoursArray[7]), Number(response.last10AllHolidayHoursArray[7]), Number(response.last10SickHoursArray[7]), Number(response.last10FamHoursArray[7]), Number(response.last10BerHoursArray[7]), Number(response.last10CompHoursArray[7])],
						["7", Number(response.last10WorkingHoursArray[6]), Number(response.last10AllHolidayHoursArray[6]), Number(response.last10SickHoursArray[6]), Number(response.last10FamHoursArray[6]), Number(response.last10BerHoursArray[6]), Number(response.last10CompHoursArray[6])],
						["6", Number(response.last10WorkingHoursArray[5]), Number(response.last10AllHolidayHoursArray[5]), Number(response.last10SickHoursArray[5]), Number(response.last10FamHoursArray[5]), Number(response.last10BerHoursArray[5]), Number(response.last10CompHoursArray[5])],
						["5", Number(response.last10WorkingHoursArray[4]), Number(response.last10AllHolidayHoursArray[4]), Number(response.last10SickHoursArray[4]), Number(response.last10FamHoursArray[4]), Number(response.last10BerHoursArray[4]), Number(response.last10CompHoursArray[4])],
						["4", Number(response.last10WorkingHoursArray[3]), Number(response.last10AllHolidayHoursArray[3]), Number(response.last10SickHoursArray[3]), Number(response.last10FamHoursArray[3]), Number(response.last10BerHoursArray[3]), Number(response.last10CompHoursArray[3])],
						["3", Number(response.last10WorkingHoursArray[2]), Number(response.last10AllHolidayHoursArray[2]), Number(response.last10SickHoursArray[2]), Number(response.last10FamHoursArray[2]), Number(response.last10BerHoursArray[2]), Number(response.last10CompHoursArray[2])],
						["2", Number(response.last10WorkingHoursArray[1]), Number(response.last10AllHolidayHoursArray[1]), Number(response.last10SickHoursArray[1]), Number(response.last10FamHoursArray[1]), Number(response.last10BerHoursArray[1]), Number(response.last10CompHoursArray[1])],
						["Current", Number(response.last10WorkingHoursArray[0]), Number(response.last10AllHolidayHoursArray[0]), Number(response.last10SickHoursArray[0]), Number(response.last10FamHoursArray[0]), Number(response.last10BerHoursArray[0]), Number(response.last10CompHoursArray[0])],
						]);

						var options = {
						backgroundColor: '#ffffcc',
						title: 'Last 10 Weeks Paid Hours Chart',
						colors: ['#e6e600', '#d5ff80','#ff9999','#ffcc99', '#4d4d4d', '#ffe6cc'],
						isStacked: true,
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('columnChartPaidHours'));
						chart.draw(data, options);
					}
				}
				else{
					document.getElementById('columnChartPaidHours').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
				}		
			}
			
			//----------------------------------------end of charts-----//
		}
	}
	request.send("taxPeriodNumber="+taxPeriodNumber);
}
window.addEventListener("resize", reloadCharts);