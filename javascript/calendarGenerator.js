//padaryti, kad pakeitus data pasikeistu dienos ir datos calendar tableCalendarGen
// sutvarkyti backend


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function generateDay()
{
	var calendarGeneratorStartDay = document.getElementById("calendarGeneratorStartDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		calendarGeneratorStartDay.appendChild(dayOption);
	}
	
	var calendarGeneratorEndDay = document.getElementById("calendarGeneratorEndDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		calendarGeneratorEndDay.appendChild(dayOption);
	}
	var calendarDeleteStartDay = document.getElementById("calendarDeleteStartDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		calendarDeleteStartDay.appendChild(dayOption);
	}
	var calendarDeleteEndDay = document.getElementById("calendarDeleteEndDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		calendarDeleteEndDay.appendChild(dayOption);
	}
	
}

function changeSelectBackground(number) 
{
	
		var index = document.getElementById("dayType"+number).options.selectedIndex;
		var dayType = document.getElementById("dayType"+number);	
		var tableRow = document.getElementById("tableRow"+number);
		var dateDiv = document.getElementById("dateDiv"+number);
		var dayNameDiv = document.getElementById("dayNameDiv"+number);
		var notSelectedDiv = document.getElementById("notSelectedDiv"+number);
		var dayOffDiv = document.getElementById("dayOffDiv"+number);
		
		var startHours = document.getElementById("startHours"+number);
		var startMinutes = document.getElementById("startMinutes"+number);
		var endHours = document.getElementById("endHours"+number);
		var endMinutes = document.getElementById("endMinutes"+number);
		
		if (index === 0)			//Not Selected
		{
			tableRow.className="notSelectedColor tableRow";
			dayType.className="notSelectedColor typeOfDaySelect";
			dateDiv.className="dateDivCalendarGen notSelectedColor tableData tableDataRelative noDisplaySmallScreen";
			dayNameDiv.className="dateDivCalendarGen notSelectedColor tableData tableDataRelative ";
			
			notSelectedDiv.style.visibility = "visible";
			dayOffDiv.style.visibility = "hidden";
		 
			startHours.style.visibility = "hidden";
			startMinutes.style.visibility = "hidden";
			endHours.style.visibility = "hidden";
			endMinutes.style.visibility = "hidden";
		 }
		else if (index === 1)		//Day In
		{
			tableRow.className="dayInColor tableRow";
			dayType.className="dayInColor typeOfDaySelect";
			dateDiv.className="dateDivCalendarGen dayInColor tableData tableDataRelative noDisplaySmallScreen";
			dayNameDiv.className="dateDivCalendarGen dayInColor tableData tableDataRelative ";

			notSelectedDiv.style.visibility = "hidden";
			dayOffDiv.style.visibility = "hidden";
		 
			startHours.style.visibility = "visible";
			startMinutes.style.visibility = "visible";
			endHours.style.visibility = "visible";
			endMinutes.style.visibility = "visible";
		 }
		else if (index === 2)		//Day Off
		{
			tableRow.className="dayOffColor tableRow";
			dayType.className="dayOffColor typeOfDaySelect";
			dateDiv.className="dateDivCalendarGen dayOffColor tableData tableDataRelative noDisplaySmallScreen";
			dayNameDiv.className="dateDivCalendarGen dayOffColor tableData tableDataRelative ";
			
			notSelectedDiv.style.visibility = "hidden";
			dayOffDiv.style.visibility = "visible";
		 
			startHours.style.visibility = "hidden";
			startMinutes.style.visibility = "hidden";
			endHours.style.visibility = "hidden";
			endMinutes.style.visibility = "hidden";
		}

		
}

function finishNextMorningBColor(number)
{

		var index = document.getElementById("endHours"+number).options.selectedIndex;
		var endHours = document.getElementById("endHours"+number);
		var endMinutes = document.getElementById("endMinutes"+number);
		
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

}
function getDayValue(generateCalendarStartDateMs){
	var generateCalendarStartDateFormatedMS = new Date(generateCalendarStartDateMs);
	var dayNumber = generateCalendarStartDateFormatedMS.getDay();
	var dayName = days[dayNumber];
	return dayName;
}
function getDateValue(generateCalendarStartDateMs)
{
	//------------------------------sutvarkome data-------------------------//
	var generateCalendarStartDateFormatedMS = new Date(generateCalendarStartDateMs);
	var MM = generateCalendarStartDateFormatedMS.getMonth() +1;		//+1 nes skaiciuojama nuo 0.
	var dd = generateCalendarStartDateFormatedMS.getDate();			//day of the month number
	var yy = generateCalendarStartDateFormatedMS.getFullYear();
	
	if (dd<10){dd="0"+dd;} 
	if (MM<10){MM="0"+MM;} 
		
	var formatedDate = yy + "-" + MM + "-" + dd;
	return formatedDate;
}
function createCalendarElements(number, generateCalendarStartDateMs)
{

		var tableRow = document.getElementById("tableRow"+number);
		var tableData = document.createElement("div");
		tableData.setAttribute("class", "tableData");
		
		var dayType = document.createElement("select");
		dayType.setAttribute("name", "dayType"+number);
		dayType.setAttribute("id", "dayType"+number);
		dayType.setAttribute("class", "typeOfDaySelect");
		tableData.appendChild(dayType);
		
		var dayOptionsArray =["Not Selected", "Day In", "Day Off"];			
		var dayOptionsColors = ["notSelectedColor", "dayInColor", "dayOffColor"];	
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
		var dayNameDiv = document.createElement("div");
		dayNameDiv.setAttribute("class", "dateDivCalendarGen tableData tableDataRelative");
		dayNameDiv.setAttribute("id", "dayNameDiv"+number);
		tableRow.appendChild(dayNameDiv);	
		
		
		//tableRow.appendChild(tableData);
		var dateDiv = document.createElement("div");
		dateDiv.setAttribute("class", "dateDivCalendarGen tableData tableDataRelative noDisplaySmallScreen");
		dateDiv.setAttribute("id", "dateDiv"+number);
		tableRow.appendChild(dateDiv);	
		
		//iterpiame dienu pavadinimus ir datas.
		dayName = getDayValue(generateCalendarStartDateMs);
		dayNameDiv.innerHTML = dayName;
		
		formatedDate = getDateValue(generateCalendarStartDateMs);
		dateDiv.innerHTML = formatedDate;
		
	//start ir end laikai/////////////////////////////////////////////////////////////
		var tableData = document.createElement("div");
		tableData.setAttribute("class", "tableData tableDataRelative");
	
		var startHours = document.createElement("select");
		startHours.setAttribute("name", "startHours"+number);
		startHours.setAttribute("id", "startHours"+number);
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
		startMinutes.setAttribute("name", "startMinutes"+number);
		startMinutes.setAttribute("id", "startMinutes"+number);
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
		endHours.setAttribute("name", "endHours"+number);
		endHours.setAttribute("id", "endHours"+number);
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
		endMinutes.setAttribute("name", "endMinutes"+number);
		endMinutes.setAttribute("id", "endMinutes"+number);
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
		notSelectedDiv.setAttribute("id","notSelectedDiv"+number);
		notSelectedDiv.setAttribute("class","absoluteDiv notSelectedColor notSelectedDiv");
		var notSelectedText = document.createTextNode("Select a Day Type.");
		notSelectedDiv.appendChild(notSelectedText);
		tableData.appendChild(notSelectedDiv);
		
		var dayOffDiv = document.createElement("div");
		dayOffDiv.setAttribute("id","dayOffDiv"+number);
		dayOffDiv.setAttribute("class","absoluteDiv dayOffDiv dayOffColor");
		var dayOffText = document.createTextNode("Enjoy Your Day Off!");
		dayOffDiv.appendChild(dayOffText);
		tableData.appendChild(dayOffDiv);
		
		
		tableRow.appendChild(tableData);
		
		dayType.onchange = function (){changeSelectBackground(number);}
		endHours.onchange = function(){finishNextMorningBColor(number);}
		changeSelectBackground(number) ;
		//var panel = document.getElementById("panel").innerHTML+= number+'<br>';
		
		//dayValueMS += 86400000;
	//}
		
}
function hideShowButtons()
{
	//kadangi is removeOneRow funkcijos neatsiunciame number vertes, reikia ja paimti is laukelio, norint paslepti mygtukus
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = numberInput.value;
	//var panel = document.getElementById("panel").innerHTML+= numberValue+'<br>';
	if (numberValue <=6)
	{
		removeRow.style.display = "none";
		addRow.style.display = "initial";
	}
	else if (numberValue>=7 && numberValue < 13)
	{
		removeRow.style.display = "initial";
		addRow.style.display = "initial";
	}

	else if(numberValue >= 13)
	{
		addRow.style.display = "none";
		removeRow.style.display = "initial"
	}
	else{alert("lol");}
}	

function formatingDate()
{
	var calendarGeneratorStartYear = document.getElementById("calendarGeneratorStartYear");
	var calendarGeneratorStartYearValue = Number(calendarGeneratorStartYear.options[calendarGeneratorStartYear.selectedIndex].value);
	var calendarGeneratorStartMonth = document.getElementById("calendarGeneratorStartMonth");
	var calendarGeneratorStartMonthValue = calendarGeneratorStartMonth.options[calendarGeneratorStartMonth.selectedIndex].value;	
	var calendarGeneratorStartDay = document.getElementById("calendarGeneratorStartDay");
	var calendarGeneratorStartDayValue = calendarGeneratorStartDay.options[calendarGeneratorStartDay.selectedIndex].value;
	var generateCalendarStartDate = calendarGeneratorStartYearValue+'-'+calendarGeneratorStartMonthValue+'-'+calendarGeneratorStartDayValue;
	var generateCalendarStartDateFormated = new Date(generateCalendarStartDate);
	
	return generateCalendarStartDateFormated;
	
}
function determineTableRowNumber(number)
{
	generateCalendarStartDateFormated = formatingDate();
	
	var removeRow = document.getElementById("removeRow");
	var addRow = document.getElementById("addRow");
	
	
	// generate days
	if (number <= 6)
	{
		//removeRow.style.display = "none";
		addRow.style.display = "initial";
		
		var dayValueMS = 0;
		for (i=0; i<7; i++)
		{
			var generateCalendarStartDateMs = generateCalendarStartDateFormated.getTime();
			generateCalendarStartDateMs += dayValueMS;
			
			createCalendarElements(i, generateCalendarStartDateMs);
			dayValueMS += 86400000;
		}
	}
	else if (number>=7 && number <=13)
	{
		var dayValueMS = 86400000*number;
		var generateCalendarStartDateMs = generateCalendarStartDateFormated.getTime();
			generateCalendarStartDateMs += dayValueMS;
		
		var tableRow = document.createElement("div");
		tableRow.setAttribute("class", "tableRow");
		tableRow.setAttribute("id", "tableRow"+number);
		tableCalendarGen.appendChild(tableRow);
		
		
		createCalendarElements(number, generateCalendarStartDateMs);
	}
	else{alert("something went wrong!"); return false;}
}




function startDateChecker(){
	var calendarGeneratorStartYear = document.getElementById("calendarGeneratorStartYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var calendarGeneratorStartYearValue = Number(calendarGeneratorStartYear.options[calendarGeneratorStartYear.selectedIndex].value);
		
	var calendarGeneratorStartMonth = document.getElementById("calendarGeneratorStartMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var calendarGeneratorStartMonthValue = calendarGeneratorStartMonth.options[calendarGeneratorStartMonth.selectedIndex].value;
		
	var calendarGeneratorStartDay = document.getElementById("calendarGeneratorStartDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var calendarGeneratorStartDayValue = calendarGeneratorStartDay.options[calendarGeneratorStartDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("calendarGenerateDivResponse");
	//check if proper year has been selected
	if (calendarGeneratorStartYearValue !==2017 && calendarGeneratorStartYearValue !== 2018 && calendarGeneratorStartYearValue !== 2019 && calendarGeneratorStartYearValue !== 2020 && calendarGeneratorStartYearValue !== 2021 && calendarGeneratorStartYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start year declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start year declared");
		calendarGeneratorStartYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{calendarGeneratorStartYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(calendarGeneratorStartMonthValue !=='01' && calendarGeneratorStartMonthValue !=='02' && calendarGeneratorStartMonthValue !=='03' && calendarGeneratorStartMonthValue !=='04' && calendarGeneratorStartMonthValue !=='05' && calendarGeneratorStartMonthValue !=='06' && calendarGeneratorStartMonthValue !=='07' && calendarGeneratorStartMonthValue !=='08' && calendarGeneratorStartMonthValue !=='09' && calendarGeneratorStartMonthValue !=='10' && calendarGeneratorStartMonthValue !=='11' && calendarGeneratorStartMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start month declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start month declared");
		calendarGeneratorStartMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (calendarGeneratorStartDayValue === "01"){calendarGeneratorStartDayValue;}
	else if (calendarGeneratorStartDayValue === "02"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "03"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "04"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "05"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "06"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "07"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "08"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "09"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "10"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "11"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "12"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "13"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "14"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "15"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "16"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "17"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "18"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "19"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "20"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "21"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "22"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "23"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "24"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "25"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "26"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "27"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "28"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "29"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "30"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else if (calendarGeneratorStartDayValue === "31"){calendarGeneratorStartDayValue; calendarGeneratorStartYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid start day declared!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay start day declared");
			calendarGeneratorStartDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((calendarGeneratorStartMonthValue === "04" && calendarGeneratorStartDayValue === "31") || (calendarGeneratorStartMonthValue === "06" && calendarGeneratorStartDayValue === "31") || (calendarGeneratorStartMonthValue === "09" && calendarGeneratorStartDayValue === "31") || (calendarGeneratorStartMonthValue === "11" && calendarGeneratorStartDayValue === "31") || (calendarGeneratorStartMonthValue === "02" && calendarGeneratorStartDayValue === "29")||(calendarGeneratorStartMonthValue === "02" && calendarGeneratorStartDayValue === "30")||(calendarGeneratorStartMonthValue === "02" && calendarGeneratorStartDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start month and day declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay start month and day declared!");
		calendarGeneratorStartMonth.setAttribute("class", "invalidForm");
		calendarGeneratorStartDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarGeneratorStartMonth.removeAttribute("class");
		calendarGeneratorStartDay.removeAttribute("class");
	}
	
	endDateChecker(calendarGeneratorStartYearValue, calendarGeneratorStartMonthValue, calendarGeneratorStartDayValue);
}


function endDateChecker(calendarGeneratorStartYearValue, calendarGeneratorStartMonthValue, calendarGeneratorStartDayValue){
	var calendarGeneratorEndYear = document.getElementById("calendarGeneratorEndYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var calendarGeneratorEndYearValue = Number(calendarGeneratorEndYear.options[calendarGeneratorEndYear.selectedIndex].value);
		
	var calendarGeneratorEndMonth = document.getElementById("calendarGeneratorEndMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var calendarGeneratorEndMonthValue = calendarGeneratorEndMonth.options[calendarGeneratorEndMonth.selectedIndex].value;
		
	var calendarGeneratorEndDay = document.getElementById("calendarGeneratorEndDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var calendarGeneratorEndDayValue = calendarGeneratorEndDay.options[calendarGeneratorEndDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("calendarGenerateDivResponse");
	//check if proper year has been selected
	if (calendarGeneratorEndYearValue !==2017 && calendarGeneratorEndYearValue !== 2018 && calendarGeneratorEndYearValue !== 2019 && calendarGeneratorEndYearValue !== 2020 && calendarGeneratorEndYearValue !== 2021 && calendarGeneratorEndYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end year declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end year declared");
		calendarGeneratorEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{calendarGeneratorEndYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(calendarGeneratorEndMonthValue !=='01' && calendarGeneratorEndMonthValue !=='02' && calendarGeneratorEndMonthValue !=='03' && calendarGeneratorEndMonthValue !=='04' && calendarGeneratorEndMonthValue !=='05' && calendarGeneratorEndMonthValue !=='06' && calendarGeneratorEndMonthValue !=='07' && calendarGeneratorEndMonthValue !=='08' && calendarGeneratorEndMonthValue !=='09' && calendarGeneratorEndMonthValue !=='10' && calendarGeneratorEndMonthValue !=='11' && calendarGeneratorEndMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end month declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month declared");
		calendarGeneratorEndMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (calendarGeneratorEndDayValue === "01"){calendarGeneratorEndDayValue;}
	else if (calendarGeneratorEndDayValue === "02"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "03"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "04"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "05"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "06"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "07"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "08"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "09"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "10"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "11"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "12"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "13"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "14"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "15"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "16"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "17"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "18"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "19"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "20"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "21"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "22"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "23"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "24"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "25"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "26"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "27"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "28"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "29"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "30"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else if (calendarGeneratorEndDayValue === "31"){calendarGeneratorEndDayValue; calendarGeneratorEndYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid end day declared!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay end day declared");
			calendarGeneratorEndDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((calendarGeneratorEndMonthValue === "04" && calendarGeneratorEndDayValue === "31") || (calendarGeneratorEndMonthValue === "06" && calendarGeneratorEndDayValue === "31") || (calendarGeneratorEndMonthValue === "09" && calendarGeneratorEndDayValue === "31") || (calendarGeneratorEndMonthValue === "11" && calendarGeneratorEndDayValue === "31") || (calendarGeneratorEndMonthValue === "02" && calendarGeneratorEndDayValue === "29")||(calendarGeneratorEndMonthValue === "02" && calendarGeneratorEndDayValue === "30")||(calendarGeneratorEndMonthValue === "02" && calendarGeneratorEndDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end month and day declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month and day declared!");
		calendarGeneratorEndMonth.setAttribute("class", "invalidForm");
		calendarGeneratorEndDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarGeneratorEndMonth.removeAttribute("class");
		calendarGeneratorEndDay.removeAttribute("class");
	}
	
	compareStartEndDates(calendarGeneratorStartYearValue, calendarGeneratorStartMonthValue, calendarGeneratorStartDayValue, calendarGeneratorEndYearValue, calendarGeneratorEndMonthValue, calendarGeneratorEndDayValue );
}

function getFormValues()
{
	
	//start diena
	var calendarGeneratorStartYear = document.getElementById("calendarGeneratorStartYear");
	var calendarGeneratorStartYearValue = Number(calendarGeneratorStartYear.options[calendarGeneratorStartYear.selectedIndex].value);
	var calendarGeneratorStartMonth = document.getElementById("calendarGeneratorStartMonth");
	var calendarGeneratorStartMonthValue = calendarGeneratorStartMonth.options[calendarGeneratorStartMonth.selectedIndex].value;	
	var calendarGeneratorStartDay = document.getElementById("calendarGeneratorStartDay");
	var calendarGeneratorStartDayValue = calendarGeneratorStartDay.options[calendarGeneratorStartDay.selectedIndex].value;
	
	//finish diena
	var calendarGeneratorEndYear = document.getElementById("calendarGeneratorEndYear");
	var calendarGeneratorEndYearValue = Number(calendarGeneratorEndYear.options[calendarGeneratorEndYear.selectedIndex].value);
	var calendarGeneratorEndMonth = document.getElementById("calendarGeneratorEndMonth");
	var calendarGeneratorEndMonthValue = calendarGeneratorEndMonth.options[calendarGeneratorEndMonth.selectedIndex].value;	
	var calendarGeneratorEndDay = document.getElementById("calendarGeneratorEndDay");
	var calendarGeneratorEndDayValue = calendarGeneratorEndDay.options[calendarGeneratorEndDay.selectedIndex].value;
	
	//datu vertes
	var generateCalendarStartDate = calendarGeneratorStartYearValue+'-'+calendarGeneratorStartMonthValue+'-'+calendarGeneratorStartDayValue;
	var generateCalendarEndDate = calendarGeneratorEndYearValue+'-'+calendarGeneratorEndMonthValue+'-'+calendarGeneratorEndDayValue;
	
	//ciklo kiekis, number
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = Number(numberInput.value);
	
	str = 'backPayStartDate='+generateCalendarStartDate+'&'+'backPayEndDate='+generateCalendarEndDate+'&'+ 'number='+numberValue+'&';
	for (b=0; b<=numberValue; b++)
	{
		var dayType = document.getElementById("dayType"+b).options.selectedIndex;
		var startHours = document.getElementById("startHours"+b).options.selectedIndex;
		var startMinutes = document.getElementById("startMinutes"+b).options.selectedIndex;
		var endHours = document.getElementById("endHours"+b).options.selectedIndex;
		var endMinutes = document.getElementById("endMinutes"+b).options.selectedIndex;
		
		//day type
		var dayTypeName = "dayType"+b
		var startHoursName = "startHours"+b;
		var startMinutesName = "startMinutes"+b;
		var endHoursName = "endHours"+b;
		var endMinutesName = "endMinutes"+b;
		
		str += dayTypeName+'='+dayType+'&'+startHoursName+'='+startHours+'&'+ startMinutesName+'='+startMinutes+'&'+ endHoursName+'='+endHours+'&'+ endMinutesName+'='+endMinutes+'&';
	
	}
	
	return str;
}

function ajaxPost(){
	str = getFormValues();
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	var url = "javascript/ajax/calendargeneratorsubmit.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccessBP = document.getElementById("calendarGenerateDivResponse");
		
			
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccessBP.innerHTML = " ";
			if (errorsArrayLength>0){
				submitSuccessBP.innerHTML = "Error! Touch to dismiss.<hr> ";
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccessBP.setAttribute("class", "submitSuccessBPErorrs");
					submitSuccessBP.innerHTML += response.errors[i]+'<br>';
				}
			}	
			else{

				submitSuccessBP.setAttribute("class", "submitSuccessBP");
				submitSuccessBP.innerHTML = 'Calendar Generated!';
				setTimeout(function(){submitSuccessBP.innerHTML=" ";},1500);
				
				var panel = document.getElementById("panel");
				var startDateNumber = response.startDateNumber;
				var endDateNumber = response.endDateNumber;
			}
		}
	}
	request.send(str);
	document.getElementById("calendarGenerateDivResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("calendarGenerateDivResponse").innerHTML = "Generating Calendar...";
}

function deselectValuesValidateForm()  //funkcija padesianti isvengti dvigubo apmokejimo duomenu siuntimo i serveri.
{
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = Number(numberInput.value);
	var calendarGenerateDivResponse = document.getElementById("calendarGenerateDivResponse");
	if (numberValue<6)
	{
		calendarGenerateDivResponse.innerHTML = "Error! Touch to dismiss.<hr> "
		calendarGenerateDivResponse.innerHTML += 'Submitting less the 7 days disallowed!';
		calendarGenerateDivResponse.removeAttribute("class");
		calendarGenerateDivResponse.setAttribute("class", "submitSuccessBPErorrs");
		return false;
	}
	else{
		calendarGenerateDivResponse.removeAttribute("class");
		calendarGenerateDivResponse.setAttribute("class", "submitSuccessMain");
	}	
	
	if (numberValue>13)
	{
		calendarGenerateDivResponse.innerHTML = "Error! Touch to dismiss.<hr> "
		calendarGenerateDivResponse.innerHTML += 'Submitting more the 14 days disallowed!';
		calendarGenerateDivResponse.removeAttribute("class");
		calendarGenerateDivResponse.setAttribute("class", "submitSuccessBPErorrs");
		return false;
	}
	else{
		calendarGenerateDivResponse.removeAttribute("class");
		calendarGenerateDivResponse.setAttribute("class", "submitSuccessMain");
	}
	
	for(b=0;b<=numberValue;b++)
	{
		var index = document.getElementById("dayType"+b).options.selectedIndex;
		
		var startHours = document.getElementById("startHours"+b);
		var startMinutes = document.getElementById("startMinutes"+b);
		var endHours = document.getElementById("endHours"+b);
		var endMinutes = document.getElementById("endMinutes"+b);
		
		
		if (index === 0)			//Not Selected
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
		}
		else if (index === 1)		//Day In
		{

		}
		else if (index === 2)		//Day Off
		{
			startHours.options.selectedIndex = "0";
			startMinutes.options.selectedIndex = "0";
			endHours.options.selectedIndex = "0";
			endMinutes.options.selectedIndex = "0";
			
		}
		else{alert("something wrong!");}
		
		// form validation
		var startHourIndex = document.getElementById("startHours"+b).options.selectedIndex;
		var endHourIndex = document.getElementById("endHours"+b).options.selectedIndex;
		
		if (startHourIndex>endHourIndex)
		{
			//calendarGenerateDivResponse.style.left = "0px";
			calendarGenerateDivResponse.innerHTML = "Error! Touch to dismiss.<hr> "
			calendarGenerateDivResponse.innerHTML += 'Start time can not be greater then finish time! <br>';
			calendarGenerateDivResponse.removeAttribute("class");
			calendarGenerateDivResponse.setAttribute("class", "submitSuccessBPErorrs");
			
			//alert("Start time can not be greater then finish time!");
			endHours.setAttribute("class", "invalidForm hourMinuteSelect");
			endMinutes.setAttribute("class", "invalidForm hourMinuteSelect");		
			return false;
		}
		else{
			calendarGenerateDivResponse.removeAttribute("class");
			calendarGenerateDivResponse.setAttribute("class", "submitSuccessMain");
		}
	}
	ajaxPost();
}
function compareStartEndDates(calendarGeneratorStartYearValue, calendarGeneratorStartMonthValue, calendarGeneratorStartDayValue, calendarGeneratorEndYearValue, calendarGeneratorEndMonthValue, calendarGeneratorEndDayValue){
	
	var generateCalendarStartDate = calendarGeneratorStartYearValue+'-'+calendarGeneratorStartMonthValue+'-'+calendarGeneratorStartDayValue;
	var generateCalendarStartDateMSSincEpoch = new Date(generateCalendarStartDate);
	
	var generateCalendarEndDate = calendarGeneratorEndYearValue+'-'+calendarGeneratorEndMonthValue+'-'+calendarGeneratorEndDayValue;
	var generateCalendarEndDateMSSincEpoch  = new Date (generateCalendarEndDate);

	var submitSuccess = document.getElementById("calendarGenerateDivResponse");
	if(generateCalendarEndDateMSSincEpoch<=generateCalendarStartDateMSSincEpoch)
	{
		
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Start date cannot be greater or equal to end date!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert ("Back Pay start date cannot be greater or equal to end date!")
		calendarGeneratorEndMonth.setAttribute("class", "invalidForm");
		calendarGeneratorEndDay.setAttribute("class", "invalidForm");
		calendarGeneratorEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarGeneratorEndMonth.removeAttribute("class");
		calendarGeneratorEndDay.removeAttribute("class");
		calendarGeneratorEndYear.removeAttribute("class");
		
		
	}
	deselectValuesValidateForm();
}


function hideErrorMessage()
{
	var calendarGenerateDivResponse = document.getElementById("calendarGenerateDivResponse");
	calendarGenerateDivResponse.innerHTML = " ";
	calendarGenerateDivResponse.setAttribute("class", "submitSuccessBP");
}
function hideErrorMessage2()
{
	var calendarDeleteDivResponse = document.getElementById("calendarDeleteDivResponse");
	calendarDeleteDivResponse.innerHTML = " ";
	calendarDeleteDivResponse.setAttribute("class", "submitSuccessBP");
	
	
}

function addOneRow(){
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = Number(numberInput.value);
	
	numberValue++;
	numberInput.setAttribute("value",numberValue);
	hideShowButtons();
	determineTableRowNumber(numberValue);
	
}
function removeOneRow()
{
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = Number(numberInput.value);

	
	
	var tableRow = document.getElementById("tableRow"+numberValue);
	tableRow.outerHTML = "";
	delete tableRow;
	
	numberValue--;
	
	numberInput.setAttribute("value",numberValue);
	hideShowButtons();
	
}

function changeDayNameAndDate()
{
	var numberInput = document.getElementById("numberOriginalValue");
	numberValue = Number(numberInput.value);
	
	generateCalendarStartDateFormated = formatingDate();
	
	
	var dayValueMS = 0;
	for (i=0;i<=numberValue;i++)
	{
		var generateCalendarStartDateMs = generateCalendarStartDateFormated.getTime();
		var dayNameDiv = document.getElementById("dayNameDiv"+i);
		var dateDiv = document.getElementById("dateDiv"+i);
		generateCalendarStartDateMs += dayValueMS;
		
		
		dayName = getDayValue(generateCalendarStartDateMs);
		dayNameDiv.innerHTML = dayName;
		
		formatedDate = getDateValue(generateCalendarStartDateMs);
		dateDiv.innerHTML = formatedDate;
		
		dayValueMS += 86400000;
	}
}
//delete date checking and submitting/////////////////////////////////////////////////////////////////////////////////
function compareStartEndDatesDelete(calendarDeleteStartYearValue, calendarDeleteStartMonthValue, calendarDeleteStartDayValue, calendarDeleteEndYearValue, calendarDeleteEndMonthValue, calendarDeleteEndDayValue){
	
	var deleteCalendarStartDate = calendarDeleteStartYearValue+'-'+calendarDeleteStartMonthValue+'-'+calendarDeleteStartDayValue;
	var deleteCalendarStartDateMSSincEpoch = new Date(deleteCalendarStartDate);
	
	var deleteCalendarEndDate = calendarDeleteEndYearValue+'-'+calendarDeleteEndMonthValue+'-'+calendarDeleteEndDayValue;
	var deleteCalendarEndDateMSSincEpoch  = new Date (deleteCalendarEndDate);

	var submitSuccess = document.getElementById("calendarDeleteDivResponse");
	if(deleteCalendarEndDateMSSincEpoch<=deleteCalendarStartDateMSSincEpoch)
	{
		
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Start date cannot be greater or equal to end date!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert ("Back Pay start date cannot be greater or equal to end date!")
		calendarDeleteEndMonth.setAttribute("class", "invalidForm");
		calendarDeleteEndDay.setAttribute("class", "invalidForm");
		calendarDeleteEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarDeleteEndMonth.removeAttribute("class");
		calendarDeleteEndDay.removeAttribute("class");
		calendarDeleteEndYear.removeAttribute("class");
		
		ajaxPost2();
	}
	
}


function startDateCheckerDelete(){
	var calendarDeleteStartYear = document.getElementById("calendarDeleteStartYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var calendarDeleteStartYearValue = Number(calendarDeleteStartYear.options[calendarDeleteStartYear.selectedIndex].value);
		
	var calendarDeleteStartMonth = document.getElementById("calendarDeleteStartMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var calendarDeleteStartMonthValue = calendarDeleteStartMonth.options[calendarDeleteStartMonth.selectedIndex].value;
		
	var calendarDeleteStartDay = document.getElementById("calendarDeleteStartDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var calendarDeleteStartDayValue = calendarDeleteStartDay.options[calendarDeleteStartDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("calendarDeleteDivResponse");
	//check if proper year has been selected
	if (calendarDeleteStartYearValue !==2017 && calendarDeleteStartYearValue !== 2018 && calendarDeleteStartYearValue !== 2019 && calendarDeleteStartYearValue !== 2020 && calendarDeleteStartYearValue !== 2021 && calendarDeleteStartYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start year declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start year declared");
		calendarDeleteStartYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{calendarDeleteStartYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(calendarDeleteStartMonthValue !=='01' && calendarDeleteStartMonthValue !=='02' && calendarDeleteStartMonthValue !=='03' && calendarDeleteStartMonthValue !=='04' && calendarDeleteStartMonthValue !=='05' && calendarDeleteStartMonthValue !=='06' && calendarDeleteStartMonthValue !=='07' && calendarDeleteStartMonthValue !=='08' && calendarDeleteStartMonthValue !=='09' && calendarDeleteStartMonthValue !=='10' && calendarDeleteStartMonthValue !=='11' && calendarDeleteStartMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start month declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start month declared");
		calendarDeleteStartMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (calendarDeleteStartDayValue === "01"){calendarDeleteStartDayValue;}
	else if (calendarDeleteStartDayValue === "02"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "03"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "04"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "05"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "06"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "07"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "08"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "09"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "10"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "11"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "12"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "13"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "14"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "15"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "16"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "17"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "18"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "19"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "20"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "21"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "22"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "23"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "24"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "25"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "26"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "27"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "28"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "29"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "30"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else if (calendarDeleteStartDayValue === "31"){calendarDeleteStartDayValue; calendarDeleteStartYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid start day declared for deletion!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay start day declared");
			calendarDeleteStartDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((calendarDeleteStartMonthValue === "04" && calendarDeleteStartDayValue === "31") || (calendarDeleteStartMonthValue === "06" && calendarDeleteStartDayValue === "31") || (calendarDeleteStartMonthValue === "09" && calendarDeleteStartDayValue === "31") || (calendarDeleteStartMonthValue === "11" && calendarDeleteStartDayValue === "31") || (calendarDeleteStartMonthValue === "02" && calendarDeleteStartDayValue === "29")||(calendarDeleteStartMonthValue === "02" && calendarDeleteStartDayValue === "30")||(calendarDeleteStartMonthValue === "02" && calendarDeleteStartDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid start month and day declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay start month and day declared!");
		calendarDeleteStartMonth.setAttribute("class", "invalidForm");
		calendarDeleteStartDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarDeleteStartMonth.removeAttribute("class");
		calendarDeleteStartDay.removeAttribute("class");
	}
	
	endDateCheckerDelete(calendarDeleteStartYearValue, calendarDeleteStartMonthValue, calendarDeleteStartDayValue);
}


function endDateCheckerDelete(calendarDeleteStartYearValue, calendarDeleteStartMonthValue, calendarDeleteStartDayValue){
	var calendarDeleteEndYear = document.getElementById("calendarDeleteEndYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var calendarDeleteEndYearValue = Number(calendarDeleteEndYear.options[calendarDeleteEndYear.selectedIndex].value);
		
	var calendarDeleteEndMonth = document.getElementById("calendarDeleteEndMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var calendarDeleteEndMonthValue = calendarDeleteEndMonth.options[calendarDeleteEndMonth.selectedIndex].value;
		
	var calendarDeleteEndDay = document.getElementById("calendarDeleteEndDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var calendarDeleteEndDayValue = calendarDeleteEndDay.options[calendarDeleteEndDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("calendarDeleteDivResponse");
	//check if proper year has been selected
	if (calendarDeleteEndYearValue !==2017 && calendarDeleteEndYearValue !== 2018 && calendarDeleteEndYearValue !== 2019 && calendarDeleteEndYearValue !== 2020 && calendarDeleteEndYearValue !== 2021 && calendarDeleteEndYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end year declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end year declared");
		calendarDeleteEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{calendarDeleteEndYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(calendarDeleteEndMonthValue !=='01' && calendarDeleteEndMonthValue !=='02' && calendarDeleteEndMonthValue !=='03' && calendarDeleteEndMonthValue !=='04' && calendarDeleteEndMonthValue !=='05' && calendarDeleteEndMonthValue !=='06' && calendarDeleteEndMonthValue !=='07' && calendarDeleteEndMonthValue !=='08' && calendarDeleteEndMonthValue !=='09' && calendarDeleteEndMonthValue !=='10' && calendarDeleteEndMonthValue !=='11' && calendarDeleteEndMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end month declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month declared");
		calendarDeleteEndMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (calendarDeleteEndDayValue === "01"){calendarDeleteEndDayValue;}
	else if (calendarDeleteEndDayValue === "02"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "03"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "04"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "05"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "06"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "07"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "08"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "09"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "10"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "11"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "12"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "13"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "14"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "15"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "16"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "17"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "18"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "19"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "20"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "21"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "22"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "23"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "24"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "25"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "26"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "27"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "28"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "29"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "30"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else if (calendarDeleteEndDayValue === "31"){calendarDeleteEndDayValue; calendarDeleteEndYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid end day declared for deletion!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay end day declared");
			calendarDeleteEndDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((calendarDeleteEndMonthValue === "04" && calendarDeleteEndDayValue === "31") || (calendarDeleteEndMonthValue === "06" && calendarDeleteEndDayValue === "31") || (calendarDeleteEndMonthValue === "09" && calendarDeleteEndDayValue === "31") || (calendarDeleteEndMonthValue === "11" && calendarDeleteEndDayValue === "31") || (calendarDeleteEndMonthValue === "02" && calendarDeleteEndDayValue === "29")||(calendarDeleteEndMonthValue === "02" && calendarDeleteEndDayValue === "30")||(calendarDeleteEndMonthValue === "02" && calendarDeleteEndDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid end month and day declared for deletion!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month and day declared!");
		calendarDeleteEndMonth.setAttribute("class", "invalidForm");
		calendarDeleteEndDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		calendarDeleteEndMonth.removeAttribute("class");
		calendarDeleteEndDay.removeAttribute("class");
	}
	
	compareStartEndDatesDelete(calendarDeleteStartYearValue, calendarDeleteStartMonthValue, calendarDeleteStartDayValue, calendarDeleteEndYearValue, calendarDeleteEndMonthValue, calendarDeleteEndDayValue );
}

function getFormValues2()
{

	//start diena
	var calendarDeleteStartYear = document.getElementById("calendarDeleteStartYear");
	var calendarDeleteStartYearValue = Number(calendarDeleteStartYear.options[calendarDeleteStartYear.selectedIndex].value);
	var calendarDeleteStartMonth = document.getElementById("calendarDeleteStartMonth");
	var calendarDeleteStartMonthValue = calendarDeleteStartMonth.options[calendarDeleteStartMonth.selectedIndex].value;	
	var calendarDeleteStartDay = document.getElementById("calendarDeleteStartDay");
	var calendarDeleteStartDayValue = calendarDeleteStartDay.options[calendarDeleteStartDay.selectedIndex].value;
	
	//finish diena
	var calendarDeleteEndYear = document.getElementById("calendarDeleteEndYear");
	var calendarDeleteEndYearValue = Number(calendarDeleteEndYear.options[calendarDeleteEndYear.selectedIndex].value);
	var calendarDeleteEndMonth = document.getElementById("calendarDeleteEndMonth");
	var calendarDeleteEndMonthValue = calendarDeleteEndMonth.options[calendarDeleteEndMonth.selectedIndex].value;	
	var calendarDeleteEndDay = document.getElementById("calendarDeleteEndDay");
	var calendarDeleteEndDayValue = calendarDeleteEndDay.options[calendarDeleteEndDay.selectedIndex].value;
	
	//datu vertes
	var deleteCalendarStartDate = calendarDeleteStartYearValue+'-'+calendarDeleteStartMonthValue+'-'+calendarDeleteStartDayValue;
	var deleteCalendarEndDate = calendarDeleteEndYearValue+'-'+calendarDeleteEndMonthValue+'-'+calendarDeleteEndDayValue;
	
	
	str = 'deleteCalendarStartDate='+deleteCalendarStartDate+'&'+'deleteCalendarEndDate='+deleteCalendarEndDate+'&';
	return str;
}


function ajaxPost2(){
	str = getFormValues2();
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	var url = "javascript/ajax/calendargeneratordelete.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccessBP = document.getElementById("calendarDeleteDivResponse");
			
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccessBP.innerHTML = " ";
			if (errorsArrayLength>0){
				submitSuccessBP.innerHTML = "Error! Touch to dismiss.<hr> ";
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccessBP.setAttribute("class", "submitSuccessBPErorrs");
					submitSuccessBP.innerHTML += response.errors[i]+'<br>';
				}
			}	
			else{

				submitSuccessBP.setAttribute("class", "submitSuccessBP");
				submitSuccessBP.innerHTML = 'Calendar Deleted!';
				setTimeout(function(){submitSuccessBP.innerHTML=" ";},1500);
			}
		}
	}
	request.send(str);
	//document.getElementById("closeError").setAttribute("class", "errorTitleHide");
	document.getElementById("calendarDeleteDivResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("calendarDeleteDivResponse").innerHTML = "Deleting Calendar...";
}


function showCGInfo() {
	var CGInfoHide = document.getElementById("CGInfoHide");
	var CGInfoShow = document.getElementById("CGInfoShow");
	var CGInfo = document.getElementById("CGInfo");
	CGInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	CGInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	CGInfo.style.visibility = "visible"; // parodome info puslapi
}
function hideCGInfo() {
	var CGInfoHide = document.getElementById("CGInfoHide");
	var CGInfoShow = document.getElementById("CGInfoShow");
	var CGInfo = document.getElementById("CGInfo");
	CGInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	CGInfoShow.style.visibility = "visible" // parodome show info mygtuka
	CGInfo.style.visibility = "hidden"; // paslepiame info puslapi
}
	
function start (){
	generateDay();
	//generateEndDay();
	//uzkraunant nusunciame 7, nes sugeneruojamos 7 dienos
	//createCalendarElements(7);
	determineTableRowNumber(6);
	hideShowButtons();
	
	var generateCalendarSubmitButton = document.getElementById("generateCalendarSubmitButton");
	generateCalendarSubmitButton.onclick = startDateChecker;
	
	var calendarGeneratorDeleteButton = document.getElementById("calendarGeneratorDeleteButton");
	calendarGeneratorDeleteButton.onclick = startDateCheckerDelete;
	

	var calendarGenerateDivResponse = document.getElementById("calendarGenerateDivResponse");
	calendarGenerateDivResponse.onclick = hideErrorMessage;
	
	var calendarDeleteDivResponse = document.getElementById("calendarDeleteDivResponse");
	calendarDeleteDivResponse.onclick = hideErrorMessage2;
	
	var addRow = document.getElementById("addRow");
	addRow.onclick = addOneRow;
	
	var removeRow = document.getElementById("removeRow");
	removeRow.onclick = removeOneRow;
	
	var startYear = document.getElementById("calendarGeneratorStartYear");
	startYear.onchange = changeDayNameAndDate;
	
	var startMonth = document.getElementById("calendarGeneratorStartMonth");
	startMonth.onchange = changeDayNameAndDate;
	
	var startDay = document.getElementById("calendarGeneratorStartDay");
	startDay.onchange = changeDayNameAndDate;
	
	var CGInfoShow = document.getElementById("CGInfoShow");
	CGInfoShow.onclick = showCGInfo;
	var CGInfoHide = document.getElementById("CGInfoHide");
	CGInfoHide.onclick = hideCGInfo;
	
}
document.addEventListener("DOMContentLoaded",start,false);