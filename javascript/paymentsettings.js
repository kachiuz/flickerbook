
function generateBreakLength()
{
	var breakLength = document.getElementById("breakLength");
	for(i=0;i<61;i++)
	{
		var minuteOption = document.createElement("option");
		var textMinute = document.createTextNode(i);
		minuteOption.appendChild(textMinute);						//option<---[text]
		breakLength.appendChild(minuteOption);
	}
	
}
function generateHolidayDay()
{
	var holidayStartDay = document.getElementById("holidayStartDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		holidayStartDay.appendChild(dayOption);
	}
	
}

function generatePartiallySelectMenu()
{
	var partialSickPay = document.getElementById("partialSickPay");
	var partialPaternityPay = document.getElementById("partialPaternityPay");
	var partialBereavementPay = document.getElementById("partialBereavementPay");
	var partialCompassionatePay = document.getElementById("partialCompassionatePay");
	partialPaternityPay
	for(i=0;i<101;i++)
	{
		var partialSickPayOption = document.createElement("option");
		var textpartialSickPay = document.createTextNode(i);
		partialSickPayOption.appendChild(textpartialSickPay);						//option<---[text]
		partialSickPay.appendChild(partialSickPayOption);
		
		var partialPaternityPayOption = document.createElement("option");
		var textPartialPaternityPay = document.createTextNode(i);
		partialPaternityPayOption.appendChild(textPartialPaternityPay);						//option<---[text]
		partialPaternityPay.appendChild(partialPaternityPayOption);
		
		var partialBereavementPayOption = document.createElement("option");
		var textpartialBereavementPay = document.createTextNode(i);
		partialBereavementPayOption.appendChild(textpartialBereavementPay);						//option<---[text]
		partialBereavementPay.appendChild(partialBereavementPayOption);
		
		var partialCompassionatePayPayOption = document.createElement("option");
		var textPartialCompassionatePayPay = document.createTextNode(i);
		partialCompassionatePayPayOption.appendChild(textPartialCompassionatePayPay);						//option<---[text]
		partialCompassionatePay.appendChild(partialCompassionatePayPayOption);
	}
	
}

function overtimeCheck()
{
	var overtime1StartValue = document.getElementById("overtime1Start").value;
		overtime1StartValue = Number(overtime1StartValue); // reikalinga lyginimui
	var overtime1Start = document.getElementById("overtime1Start");
	
	var overtime1FinishValue = document.getElementById("overtime1Finish").value;
		overtime1FinishValue = Number(overtime1FinishValue);
	var overtime1Finish = document.getElementById("overtime1Finish");
	
	var ovetime1rateValue = document.getElementById("overtime1rate").value;
	var ovetime1rate = document.getElementById("overtime1rate");
	
	var overtime2startValue = document.getElementById("overtime2start").value;
		overtime2startValue = Number(overtime2startValue);
	var overtime2start = document.getElementById("overtime2start");
	
	var overtime2FinishValue = document.getElementById("overtime2Finish").value;
		overtime2FinishValue = Number(overtime2FinishValue);
	var overtime2Finish = document.getElementById("overtime2Finish");
	
	var overtime2rateValue = document.getElementById("overtime2rate").value;
	var overtime2rate = document.getElementById("overtime2rate");
	
	var overtimeCheck2 = document.getElementById("overtimeCheck2").checked;
	var overtimeCheck = document.getElementById("overtimeCheck").checked;
	
	var submitSuccess = document.getElementById("submitSuccessPayments");
	
	if (overtimeCheck2 == true && overtimeCheck == false )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Can not set Overtime 2 parameters without setting overtime 1 first!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Can not set Overtime 2 parameters without setting overtime 1 first!");
		overtime1Finish.setAttribute("class", "invalidForm");
		overtime1Start.setAttribute("class", "invalidForm");
		ovetime1rate.setAttribute("class", "invalidForm");
		return false;
	}
	
	else if (overtimeCheck == true && overtimeCheck2 == true ){
		if (overtime1StartValue> overtime1FinishValue)
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Start time for overtime 1 is greater then end time!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			
			//alert("Start time for overtime 1 is greater then end time!");
			overtime1Start.setAttribute("class", "invalidForm");
			overtime1Finish.setAttribute("class", "invalidForm");
			return false;
		}
		else if (overtime1FinishValue > overtime2startValue)
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Finish time for overtime 1 is greater then start time of overtime 2!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			
			//alert("Finish time for overtime 1 is greater then start time of overtime 2!");
			overtime2start.setAttribute("class", "invalidForm");
			overtime1Finish.setAttribute("class", "invalidForm");
			return false;
		}
		
		if (overtime2FinishValue < overtime2startValue)
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Start time for overtime 2 is greater then end time!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			
			//alert("Start time for overtime 2 is greater then end time!");
			overtime2start.setAttribute("class", "invalidForm");
			overtime2Finish.setAttribute("class", "invalidForm");
			return false;
		}
		//else {return true;}
		
	}
		
	else if (overtimeCheck == true && overtimeCheck2 == false){
		if (overtime1StartValue> overtime1FinishValue)
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Start time for overtime 1 is greater then end time!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			
			//alert("Start time for overtime 1 is greater then end time!");
			overtime1Start.setAttribute("class", "invalidForm");
			overtime1Finish.setAttribute("class", "invalidForm");
			return false;
		}
		
	}

	ajaxPost();	
	
}
function dateChecker ()
{
	
	//------------------------------date checker------------
	
	var holidayStartYear = document.getElementById("holidayStartYear");
	var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var holidayStartYearValue = Number(holidayStartYear.options[holidayStartYear.selectedIndex].value);
		
	var holidayStartMonth = document.getElementById("holidayStartMonth");
	var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var holidayStartMonthValue = holidayStartMonth.options[holidayStartMonth.selectedIndex].value;
		
	var holidayStartDay = document.getElementById("holidayStartDay");
	var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var holidayStartDayValue = holidayStartDay.options[holidayStartDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("submitSuccessPayments");
	//check if proper year has been selected
	if (holidayStartYearValue !==2017 && holidayStartYearValue !== 2018 && holidayStartYearValue !== 2019 && holidayStartYearValue !== 2020 && holidayStartYearValue !== 2021 && holidayStartYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Holiday start year declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Holiday start year declared!");
		holidayStartYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{holidayStartYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(holidayStartMonthValue !=='01' && holidayStartMonthValue !=='02' && holidayStartMonthValue !=='03' && holidayStartMonthValue !=='04' && holidayStartMonthValue !=='05' && holidayStartMonthValue !=='06' && holidayStartMonthValue !=='07' && holidayStartMonthValue !=='08' && holidayStartMonthValue !=='09' && holidayStartMonthValue !=='10' && holidayStartMonthValue !=='11' && holidayStartMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Holiday start month declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Holiday start month declared");
		holidayStartMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (holidayStartDayValue === "01"){holidayStartDayValue;}
	else if (holidayStartDayValue === "02"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "03"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "04"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "05"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "06"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "07"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "08"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "09"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "10"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "11"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "12"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "13"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "14"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "15"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "16"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "17"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "18"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "19"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "20"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "21"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "22"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "23"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "24"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "25"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "26"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "27"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "28"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "29"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "30"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else if (holidayStartDayValue === "31"){holidayStartDayValue; holidayStartYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid Holiday start day declared!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Holiday start day declared");
			holidayStartDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((holidayStartMonthValue === "04" && holidayStartDayValue === "31") || (holidayStartMonthValue === "06" && holidayStartDayValue === "31") || (holidayStartMonthValue === "09" && holidayStartDayValue === "31") || (holidayStartMonthValue === "11" && holidayStartDayValue === "31") || (holidayStartMonthValue === "02" && holidayStartDayValue === "29")||(holidayStartMonthValue === "02" && holidayStartDayValue === "30")||(holidayStartMonthValue === "02" && holidayStartDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Holiday start month and day declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Holiday start month and day declared!");
		holidayStartMonth.setAttribute("class", "invalidForm");
		holidayStartDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		holidayStartMonth.removeAttribute("class");
		holidayStartDay.removeAttribute("class");
	}

	overtimeCheck()
	
}

function getFormValues(){
	var str = '';
	
		//employer name
		var employerName = document.getElementById("employerName").value;
		//job title
		var jobTitle = document.getElementById("jobTitle").value;
		//shift Lenght index
		var shiftLength = document.getElementById("shiftLength");
		var shiftLengthIndex = shiftLength.options.selectedIndex;
		//shift Lenght value
		var shiftLengthValue = shiftLength.options[shiftLength.selectedIndex].value;
		//shift type
		var shiftType = document.getElementById("shiftType");
		//shift type index
		var shiftTypeIndex = shiftType.options.selectedIndex;
		var shiftTypeValue = shiftType.options[shiftType.selectedIndex].value;
		//week start
		var weekStartValue = document.getElementById("weekStart").options.selectedIndex;
		//hourly rate
		var hourlyRateValue = document.getElementById("hourlyRate").value;
		// unpaid breaks
		var unpaidBreaksValue = document.getElementById("unpaidBreaks").options.selectedIndex;
		//break length in hours
		var breakLengthValue = document.getElementById("breakLength").options.selectedIndex;
		//unsociableHoursCheck
		var unsociableHoursCheckValue = document.getElementById("unsociableHoursCheck").checked;
		//unsociableHourStart
		var unsociableHourStartValue = document.getElementById("unsociableHourStart").options.selectedIndex;;
		//unsociableHourFinish
		var unsociableHourFinishValue = document.getElementById("unsociableHourFinish").options.selectedIndex;;
		//unsociablePrem
		var unsociablePremValue = document.getElementById("unsociablePrem").value;
		//overtime1Start
		var overtime1StartValue = document.getElementById("overtime1Start").value;
		//overtime1Finish
		var overtime1FinishValue = document.getElementById("overtime1Finish").value;
		//ovetime1rate
		var overtime1rateValue = document.getElementById("overtime1rate").value;
		//overtime2start
		var overtime2startValue = document.getElementById("overtime2start").value;
		//overtime2Finish
		var overtime2FinishValue = document.getElementById("overtime2Finish").value;
		//overtime2rate
		var overtime2rateValue = document.getElementById("overtime2rate").value;
		
		//extra saturday ratio values
		var extraRateSundayValue = document.getElementById("extraRateSunday").value;
		var extraRateSaturdayValue = document.getElementById("extraRateSaturday").value;
		var weekendHoursCheckValue = document.getElementById("weekendHoursCheck").checked;
		
		//bankHolidayPay index and value bankHolidayPay
		var bankHolidayPay = document.getElementById("bankHolidayPay");
		var bankHolidayIndex = bankHolidayPay.options.selectedIndex;
		var bankHolidayPayValue = bankHolidayPay.options[bankHolidayPay.selectedIndex].value;
		
		//clockInBonus
		var clockInBonusValue = document.getElementById("clockInBonus").value;
		//clockInBonusHours
		var clockInBonusHoursValue = document.getElementById("clockInBonusHours").value;
		//holidayYearStart
		//var holidayYearStartValue = document.getElementById("holidayYearStart").value;
		//holidaysPerYear
		var holidaysPerYearValue = document.getElementById("holidaysPerYear").value;
		//enhancedHolidayPay
		var enhancedHolidayPayValue = document.getElementById("enhancedHolidayPay").value;
		//holidayOvertime
		var holidayOvertimeValue = document.getElementById("holidayOvertime").checked;
		//sickOvertime
		var sickOvertimeValue = document.getElementById("sickOvertime").checked;
		//bereavementOvertime
		var bereavementOvertimeValue = document.getElementById("bereavementOvertime").checked;

		//additionalPayment Name and value
		var additionalPaymentValue = document.getElementById("additionalPayment").value;
		var additionalPaymentName = document.getElementById("additionalPaymentName").value;
		
		//additionalPayment2 Name and value
		var additionalPayment2Value = document.getElementById("additionalPayment2").value;
		var additionalPayment2Name = document.getElementById("additionalPayment2Name").value;
		
		//additionalPayment2 Name and value
		var additionalPayment3Value = document.getElementById("additionalPayment3").value;
		var additionalPayment3Name = document.getElementById("additionalPayment3Name").value;
		
		//overtime checks
		var overtimeCheckValue = document.getElementById("overtimeCheck").checked;
		var overtimeCheckValue2 = document.getElementById("overtimeCheck2").checked;
		
		var payBackValue = document.getElementById("payback").value;
		var pieceWorkValue = document.getElementById("pieceWork").value;
		var salaryValue = document.getElementById("salary").value;
		var bonusValue = document.getElementById("bonus").value;
		var commissionsValue = document.getElementById("commissions").value;
		
		//statutory sick and paternity leave values
		var SSPValue = document.getElementById("SSP").value;
		var SPPValue = document.getElementById("SPP").value;
		var SAPValue = document.getElementById("SAP").value;
		
		var paternityOvertimeValue = document.getElementById("paternityOvertime").checked;
		var compOvertimeValue = document.getElementById("compOvertime").checked;
		
		
		// partial leaves
		var partialSickPayValue = document.getElementById("partialSickPay").options.selectedIndex;
		var partialPaternityPayValue = document.getElementById("partialPaternityPay").options.selectedIndex;
		var partialBereavementPayValue = document.getElementById("partialBereavementPay").options.selectedIndex;
		var partialCompassionatePayValue = document.getElementById("partialCompassionatePay").options.selectedIndex;
		
		//holiday start
		//bankHolidayPay index and value bankHolidayPay
		var holidayStartYear = document.getElementById("holidayStartYear");
		var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
		var holidayStartYearValue = holidayStartYear.options[holidayStartYear.selectedIndex].value;
		
		var holidayStartMonth = document.getElementById("holidayStartMonth");
		var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
		var holidayStartMonthValue = holidayStartMonth.options[holidayStartMonth.selectedIndex].value;
		
		var holidayStartDay = document.getElementById("holidayStartDay");
		var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
		var holidayStartDayValue = holidayStartDay.options[holidayStartDay.selectedIndex].value;
		
		//suklijuojame metus, menesi ir diena i viena data
		var holidayStart = holidayStartYearValue+'-'+holidayStartMonthValue+'-'+holidayStartDayValue;
		
				
		str += 'overtimeCheck2='+overtimeCheckValue2+'&'+'bankHolidayIndex='+bankHolidayIndex+'&'+'overtimeCheck='+overtimeCheckValue+'&'+'shiftTypeIndex='+shiftTypeIndex+'&'+'shiftTypeValue='+shiftTypeValue+'&'+'shiftLengthValue='+shiftLengthValue+'&'+'shiftLengthIndex='+shiftLengthIndex+'&'+'jobTitle='+jobTitle+'&'+'employerName='+employerName+'&'+'weekStart='+weekStartValue+'&'+'hourlyRate='+hourlyRateValue+'&'+'unpaidBreaks='+unpaidBreaksValue+'&'+'breakLength='+breakLengthValue+'&'+'unsociableHoursCheck='+unsociableHoursCheckValue+'&'+'unsociableHourStart='+unsociableHourStartValue+'&'+'unsociableHourFinish='+unsociableHourFinishValue+'&'+'unsociablePrem='+unsociablePremValue+'&'+'overtime1Start='+overtime1StartValue+'&'+'overtime1Finish='+overtime1FinishValue+'&'+'overtime1rate='+overtime1rateValue+'&'+'overtime2start='+overtime2startValue+'&'+'overtime2Finish='+overtime2FinishValue+'&'+'overtime2rate='+overtime2rateValue+'&'+'bankHolidayPayValue='+bankHolidayPayValue+'&'+'clockInBonus='+clockInBonusValue+'&'+'clockInBonusHours='+clockInBonusHoursValue+'&'+'holidaysPerYear='+holidaysPerYearValue+'&'+'enhancedHolidayPay='+enhancedHolidayPayValue+'&'+'holidayOvertime='+holidayOvertimeValue+'&'+'sickOvertime='+sickOvertimeValue+'&'+'paternityOvertime='+paternityOvertimeValue+'&'+'bereavementOvertime='+bereavementOvertimeValue+'&'+'additionalPayment='+additionalPaymentValue+'&'+'additionalPaymentName='+additionalPaymentName+'&'+'payback='+payBackValue+'&';   
		
		str += 'SSP='+SSPValue+'&'+'SPP='+SPPValue+'&'+'compOvertime='+compOvertimeValue+'&';
		str += 'additionalPayment2='+additionalPayment2Value+'&'+'additionalPayment2Name='+additionalPayment2Name+'&';
		str += 'additionalPayment3='+additionalPayment3Value+'&'+'additionalPayment3Name='+additionalPayment3Name+'&';
		str += 'partialSickPay='+partialSickPayValue+'&'+'partialPaternityPay='+partialPaternityPayValue+'&';
		str += 'partialBereavementPay='+partialBereavementPayValue+'&'+'partialCompassionatePay='+partialCompassionatePayValue+'&';
		str += 'holidayStartYearIndex='+holidayStartYearIndex+'&'+'holidayStartMonthIndex='+holidayStartMonthIndex+'&'+'holidayStartDayIndex='+holidayStartDayIndex+'&';
		str += 'holidayStart='+holidayStart+'&'+'extraRateSunday='+extraRateSundayValue+'&'+'extraRateSaturday='+extraRateSaturdayValue+'&';
		str += 'salary='+salaryValue +'&'+'bonus='+bonusValue +'&';
		str += 'weekendHoursCheck='+weekendHoursCheckValue+'&'+'pieceWork='+pieceWorkValue+'&';
		str += 'commissions='+commissionsValue +'&'+'SAP='+SAPValue+'&';
				
	return str;
	
}

function loadindexes(){
	
	var employerName = document.getElementById("employerName");
	var jobTitle = document.getElementById("jobTitle");
	var shiftLength = document.getElementById("shiftLength");
	var shiftType = document.getElementById("shiftType");
	var weekStart = document.getElementById("weekStart");
	var hourlyRate = document.getElementById("hourlyRate");
	var unpaidBreaks = document.getElementById("unpaidBreaks");
	var breakLength = document.getElementById("breakLength");
	var unsociableHoursCheck = document.getElementById("unsociableHoursCheck");
	var unsociableHourStart = document.getElementById("unsociableHourStart");
	var unsociableHourFinish = document.getElementById("unsociableHourFinish");
	var unsociablePrem = document.getElementById("unsociablePrem");
	var overtime1Start = document.getElementById("overtime1Start");
	var overtime1Finish = document.getElementById("overtime1Finish");
	var overtime1rate = document.getElementById("overtime1rate");
	var overtime2start = document.getElementById("overtime2start");
	var overtime2Finish = document.getElementById("overtime2Finish");
	var overtime2rate = document.getElementById("overtime2rate");
	var bankHolidayPay = document.getElementById("bankHolidayPay");
	var clockInBonus = document.getElementById("clockInBonus");
	var clockInBonusHours = document.getElementById("clockInBonusHours");
	//var holidayYearStart = document.getElementById("holidayYearStart");
	var holidayStartDay = document.getElementById("holidayStartDay");
	var holidayStartMonth = document.getElementById("holidayStartMonth");
	var holidayStartYear = document.getElementById("holidayStartYear");
	var holidaysPerYear = document.getElementById("holidaysPerYear");
	var enhancedHolidayPay = document.getElementById("enhancedHolidayPay");
	var holidayOvertime = document.getElementById("holidayOvertime");
	var sickOvertime = document.getElementById("sickOvertime");
	var paternityOvertime = document.getElementById("paternityOvertime");
	var compOvertime = document.getElementById("compOvertime");
	//var bereavementPay = document.getElementById("bereavementPay");
	var bereavementOvertime = document.getElementById("bereavementOvertime");
	
	var partialSickPay = document.getElementById("partialSickPay");
	var partialPaternityPay = document.getElementById("partialPaternityPay");
	var partialBereavementPay = document.getElementById("partialBereavementPay");
	var partialCompassionatePay = document.getElementById("partialCompassionatePay");
	
	var additionalPayment = document.getElementById("additionalPayment");
	var additionalPaymentName = document.getElementById("additionalPaymentName")
	var additionalPayment2 = document.getElementById("additionalPayment2");
	var additionalPayment2Name = document.getElementById("additionalPayment2Name")
	var additionalPayment3 = document.getElementById("additionalPayment3");
	var additionalPayment3Name = document.getElementById("additionalPayment3Name")
	var overtimeCheck = document.getElementById("overtimeCheck");
	var overtimeCheck2 = document.getElementById("overtimeCheck2");
	var payback = document.getElementById("payback");
	var pieceWork = document.getElementById("pieceWork");
	var SSP = document.getElementById("SSP");
	var SPP = document.getElementById("SPP");
	
	var weekendHoursCheck = document.getElementById("weekendHoursCheck");
	var extraRateSaturday = document.getElementById("extraRateSaturday");
	var extraRateSunday = document.getElementById("extraRateSunday");
	
	var salary = document.getElementById("salary");
	var bonus = document.getElementById("bonus");
	var commissions = document.getElementById("commissions");
	var SAP = document.getElementById("SAP");
	
if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
request.onreadystatechange = function(){
	if (this.readyState == 4 && this.status ==200)
	{
		var response = JSON.parse(this.responseText);
		weekStart.options.selectedIndex = response.weekStart;
		employerName.value = response.employerName;
		jobTitle.value = response.jobTitle;
		shiftLength.options.selectedIndex = response.shiftLengthIndex;
		shiftType.options.selectedIndex = response.shiftTypeIndex;
		hourlyRate.value = response.hourlyRate;
		unpaidBreaks.options.selectedIndex = response.unpaidBreakQuantity;
		breakLength.options.selectedIndex = response.unpaidBreakLength;
		
		if(response.unsociableHoursCheck == 1)
			{unsociableHoursCheck.setAttribute("checked", "checked");}
		else if (response.unsociableHoursCheck == 0)
			{unsociableHoursCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		unsociableHourStart.options.selectedIndex = response.unsociableHourStart;
		unsociableHourFinish.options.selectedIndex = response.unsociableHourFinish;
		unsociablePrem.value = response.unsocial_prem_rate;
		overtime1Start.value = response.overtime1Start;
		overtime1Finish.value = response.overtime1Finish;
		overtime2start.value = response.overtime2start;
		overtime2Finish.value = response.overtime2Finish;
		overtime1rate.value = response.overtime1rate;
		overtime2rate.value = response.overtime2rate;
		bankHolidayPay.options.selectedIndex = response.bHol_in;
		
		clockInBonus.value = response.clockInBonus;
		clockInBonusHours.value = response.clockInBonusHours;
		
		holidayStartYear.options.selectedIndex = response.holidayStartYear;
		holidayStartMonth.options.selectedIndex = response.holidayStartMonth;
		holidayStartDay.options.selectedIndex = response.holidayStartDay;
		//holidayYearStart.value = response.holidayYearStart;
		holidaysPerYear.value = response.holidaysPerYear;
		enhancedHolidayPay.value = response.enhancedHolidayRate;
		
		extraRateSaturday.value = response.extraRateSaturday;
		extraRateSunday.value = response.extraRateSunday;
		
		if(response.weekendHoursCheck == 1)
			{weekendHoursCheck.setAttribute("checked", "checked");}
		else if (response.weekendHoursCheck == 0)
			{weekendHoursCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.holidayOvertime == 1)
			{holidayOvertime.setAttribute("checked", "checked");}
		else if (response.holidayOvertime == 0)
			{holidayOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.overtimeCheck == 1)
			{overtimeCheck.setAttribute("checked", "checked");}
		else if (response.overtimeCheck == 0)
			{overtimeCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.overtimeCheck2 == 1)
			{overtimeCheck2.setAttribute("checked", "checked");}
		else if (response.overtimeCheck2 == 0)
			{overtimeCheck2.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.sickOvertime == 1)
			{sickOvertime.setAttribute("checked", "checked");}
		else if (response.sickOvertime == 0)
			{sickOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.paternityOvertime == 1)
			{paternityOvertime.setAttribute("checked", "checked");}
		else if (response.paternityOvertime == 0)
			{paternityOvertime.removeAttribute("checked");}
		else{alert('Something went wrong paternity');}
		
		if(response.compOvertime == 1)
			{compOvertime.setAttribute("checked", "checked");}
		else if (response.compOvertime == 0)
			{compOvertime.removeAttribute("checked");}
		else{alert('Something went wrong compassionate');}
		
		
		if(response.bereavementOvertime == 1)
			{bereavementOvertime.setAttribute("checked", "checked");}
		else if (response.bereavementOvertime == 0)
			{bereavementOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		
		partialSickPay.options.selectedIndex = response.partialSickPay;
		partialPaternityPay.options.selectedIndex = response.partialPaternityPay;
		partialBereavementPay.options.selectedIndex = response.partialBereavementPay;
		partialCompassionatePay.options.selectedIndex = response.partialCompassionatePay;
		
		additionalPayment.value = response.additionalPayment;
		additionalPaymentName.value = response.additionalPaymentName;
		
		additionalPayment2.value = response.additionalPayment2;
		additionalPayment2Name.value = response.additionalPayment2Name;
		
		additionalPayment3.value = response.additionalPayment3;
		additionalPayment3Name.value = response.additionalPayment3Name;
		
		payback.value = response.payback;
		pieceWork.value = response.pieceWork;
		SSP.value = response.SSP;
		SPP.value = response.SPP;
		
		bonus.value = response.bonus;
		SAP.value = response.SAP;
		salary.value = response.salary;
		commissions.value = response.commissions;
	}
	showHideDivs();
};
request.open("POST", "javascript/ajax/paymentsettingsload.php", true);
request.send();
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
	var url = "javascript/ajax/paymentsettingssubmit.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccess = document.getElementById("submitSuccessPayments");
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccess.innerHTML = " ";
			if (errorsArrayLength>0){
				submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
				for (i=0; i<errorsArrayLength; i++)
				{
					submitSuccess.innerHTML += response.errors[i]+'<br>';
					submitSuccess.removeAttribute("class");
					submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				}
			}	
			else{
					submitSuccess.setAttribute("class", "submitSuccessBP");
					submitSuccess.innerHTML = 'Payments Updated!';
					setTimeout(function(){submitSuccess.innerHTML=" ";},1500);	
			}
		}
	}
	request.send(str);
	document.getElementById("submitSuccessPayments").setAttribute("class", "submitSuccessBP");
	document.getElementById("submitSuccessPayments").innerHTML = "Updating...";
}

function loadIndexesEmail()
{
	//email verte kuria siunciame i serveri;
	email = document.getElementById("paymentSettingsEmail").value;
	//elemntu id kuriu value bus uzkraunamos gavus atsakyma
	
	var employerName = document.getElementById("employerName");
	var jobTitle = document.getElementById("jobTitle");
	var shiftLength = document.getElementById("shiftLength");
	var shiftType = document.getElementById("shiftType");
	var weekStart = document.getElementById("weekStart");
	var hourlyRate = document.getElementById("hourlyRate");
	var unpaidBreaks = document.getElementById("unpaidBreaks");
	var breakLength = document.getElementById("breakLength");
	var unsociableHoursCheck = document.getElementById("unsociableHoursCheck");
	var unsociableHourStart = document.getElementById("unsociableHourStart");
	var unsociableHourFinish = document.getElementById("unsociableHourFinish");
	var unsociablePrem = document.getElementById("unsociablePrem");
	var overtime1Start = document.getElementById("overtime1Start");
	var overtime1Finish = document.getElementById("overtime1Finish");
	var overtime1rate = document.getElementById("overtime1rate");
	var overtime2start = document.getElementById("overtime2start");
	var overtime2Finish = document.getElementById("overtime2Finish");
	var overtime2rate = document.getElementById("overtime2rate");
	var bankHolidayPay = document.getElementById("bankHolidayPay");
	var clockInBonus = document.getElementById("clockInBonus");
	var clockInBonusHours = document.getElementById("clockInBonusHours");
	//var holidayYearStart = document.getElementById("holidayYearStart");
	var holidayStartDay = document.getElementById("holidayStartDay");
	var holidayStartMonth = document.getElementById("holidayStartMonth");
	var holidayStartYear = document.getElementById("holidayStartYear");
	var holidaysPerYear = document.getElementById("holidaysPerYear");
	var enhancedHolidayPay = document.getElementById("enhancedHolidayPay");
	var holidayOvertime = document.getElementById("holidayOvertime");
	var sickOvertime = document.getElementById("sickOvertime");
	var paternityOvertime = document.getElementById("paternityOvertime");
	var compOvertime = document.getElementById("compOvertime");
	//var bereavementPay = document.getElementById("bereavementPay");
	var bereavementOvertime = document.getElementById("bereavementOvertime");
	
	var partialSickPay = document.getElementById("partialSickPay");
	var partialPaternityPay = document.getElementById("partialPaternityPay");
	var partialBereavementPay = document.getElementById("partialBereavementPay");
	var partialCompassionatePay = document.getElementById("partialCompassionatePay");
	
	var additionalPayment = document.getElementById("additionalPayment");
	var additionalPaymentName = document.getElementById("additionalPaymentName")
	var additionalPayment2 = document.getElementById("additionalPayment2");
	var additionalPayment2Name = document.getElementById("additionalPayment2Name")
	var additionalPayment3 = document.getElementById("additionalPayment3");
	var additionalPayment3Name = document.getElementById("additionalPayment3Name")
	var overtimeCheck = document.getElementById("overtimeCheck");
	var overtimeCheck2 = document.getElementById("overtimeCheck2");
	var payback = document.getElementById("payback");
	
	
	var pieceWork = document.getElementById("pieceWork");
	var SSP = document.getElementById("SSP");
	var SPP = document.getElementById("SPP");
	
	var weekendHoursCheck = document.getElementById("weekendHoursCheck");
	var extraRateSaturday = document.getElementById("extraRateSaturday");
	var extraRateSunday = document.getElementById("extraRateSunday");
	
	var salary = document.getElementById("salary");
	var bonus = document.getElementById("bonus");
	var commissions = document.getElementById("commissions");
	var SAP = document.getElementById("SAP");
	
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	request = new XMLHttpRequest() ;
	request.open( "POST" , "javascript/ajax/paymentsettingsloademail.php" , true ) ;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send( "email="+email ) ;
	var submitSuccess = document.getElementById("paymentSettingsEmailDivResponse");	
	submitSuccess.setAttribute("class", "submitSuccessBP");
	submitSuccess.innerHTML = "Loading settings...";
	request.onreadystatechange = function(){
	
	if ( (request.readyState === 4 ) && ( request.status === 200 ) )
	{ 
		var response = JSON.parse(this.responseText);
		
				

		errorsArrayLength = Object.keys(response.errors).length;
		if (errorsArrayLength>0){
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
			for (i=0; i<errorsArrayLength; i++)
			{
				submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				submitSuccess.innerHTML += response.errors[i]+'<br>';
			}
		}		
		else{
		//submitSuccess.innerHTML += errorsArray+'<br>';
		submitSuccess.setAttribute("class", "submitSuccessBP");
		submitSuccess.innerHTML = 'Loaded!';
		setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
		
		weekStart.options.selectedIndex = response.weekStart;
		employerName.value = response.employerName;
		jobTitle.value = response.jobTitle;
		shiftLength.options.selectedIndex = response.shiftLengthIndex;
		shiftType.options.selectedIndex = response.shiftTypeIndex;
		hourlyRate.value = response.hourlyRate;
		unpaidBreaks.options.selectedIndex = response.unpaidBreakQuantity;
		breakLength.options.selectedIndex = response.unpaidBreakLength;
		
		if(response.unsociableHoursCheck == 1)
			{unsociableHoursCheck.setAttribute("checked", "checked");}
		else if (response.unsociableHoursCheck == 0)
			{unsociableHoursCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		unsociableHourStart.options.selectedIndex = response.unsociableHourStart;
		unsociableHourFinish.options.selectedIndex = response.unsociableHourFinish;
		unsociablePrem.value = response.unsocial_prem_rate;
		overtime1Start.value = response.overtime1Start;
		overtime1Finish.value = response.overtime1Finish;
		overtime2start.value = response.overtime2start;
		overtime2Finish.value = response.overtime2Finish;
		overtime1rate.value = response.overtime1rate;
		overtime2rate.value = response.overtime2rate;
		bankHolidayPay.options.selectedIndex = response.bHol_in;
		
		clockInBonus.value = response.clockInBonus;
		clockInBonusHours.value = response.clockInBonusHours;
		holidayStartYear.options.selectedIndex = response.holidayStartYear;
		holidayStartMonth.options.selectedIndex = response.holidayStartMonth;
		holidayStartDay.options.selectedIndex = response.holidayStartDay;
		//holidayYearStart.value = response.holidayYearStart;
		holidaysPerYear.value = response.holidaysPerYear;
		enhancedHolidayPay.value = response.enhancedHolidayRate;
		
		extraRateSaturday.value = response.extraRateSaturday;
		extraRateSunday.value = response.extraRateSunday;
		
		if(response.weekendHoursCheck == 1)
			{weekendHoursCheck.setAttribute("checked", "checked");}
		else if (response.weekendHoursCheck == 0)
			{weekendHoursCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.holidayOvertime == 1)
			{holidayOvertime.setAttribute("checked", "checked");}
		else if (response.holidayOvertime == 0)
			{holidayOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.overtimeCheck == 1)
			{overtimeCheck.setAttribute("checked", "checked");}
		else if (response.overtimeCheck == 0)
			{overtimeCheck.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.overtimeCheck2 == 1)
			{overtimeCheck2.setAttribute("checked", "checked");}
		else if (response.overtimeCheck2 == 0)
			{overtimeCheck2.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.sickOvertime == 1)
			{sickOvertime.setAttribute("checked", "checked");}
		else if (response.sickOvertime == 0)
			{sickOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		if(response.paternityOvertime == 1)
			{paternityOvertime.setAttribute("checked", "checked");}
		else if (response.paternityOvertime == 0)
			{paternityOvertime.removeAttribute("checked");}
		else{alert('Something went wrong paternity');}
		
		if(response.compOvertime == 1)
			{compOvertime.setAttribute("checked", "checked");}
		else if (response.compOvertime == 0)
			{compOvertime.removeAttribute("checked");}
		else{alert('Something went wrong compassionate');}
		
		if(response.bereavementOvertime == 1)
			{bereavementOvertime.setAttribute("checked", "checked");}
		else if (response.bereavementOvertime == 0)
			{bereavementOvertime.removeAttribute("checked");}
		else{alert('Something went wrong');}
		
		
		partialSickPay.options.selectedIndex = response.partialSickPay;
		partialPaternityPay.options.selectedIndex = response.partialPaternityPay;
		partialBereavementPay.options.selectedIndex = response.partialBereavementPay;
		partialCompassionatePay.options.selectedIndex = response.partialCompassionatePay;
		
		additionalPayment.value = response.additionalPayment;
		additionalPaymentName.value = response.additionalPaymentName;
		
		additionalPayment2.value = response.additionalPayment2;
		additionalPayment2Name.value = response.additionalPayment2Name;
		
		additionalPayment3.value = response.additionalPayment3;
		additionalPayment3Name.value = response.additionalPayment3Name;
		
		payback.value = response.payback;
		pieceWork.value = response.pieceWork;
		SSP.value = response.SSP;
		SPP.value = response.SPP;
		
		bonus.value = response.bonus;
		SAP.value = response.SAP;
		salary.value = response.salary;
		commissions.value = response.commissions;
		}
		}
		showHideDivs()
	}
}
function showHideDivs()
{
	var hideUnsocialHours = document.getElementById("hideUnsocialHours");
	var unsociableHoursCheck = document.getElementById("unsociableHoursCheck").checked;
	
	if (unsociableHoursCheck == true)
	{
		hideUnsocialHours.style.visibility = "hidden";
	}
	else if(unsociableHoursCheck == false){
		hideUnsocialHours.style.visibility = "visible";
	}
	else{alert("something went wrong");}
	
	var hideOvertimeCheckDiv = document.getElementById("hideOvertimeCheckDiv");
	var overtimeCheck = document.getElementById("overtimeCheck").checked;
	
	if (overtimeCheck == true)
	{
		hideOvertimeCheckDiv.style.visibility = "hidden";
	}
	else if(overtimeCheck == false){
		hideOvertimeCheckDiv.style.visibility = "visible";
	}
	else{alert("something went wrong");}
	
	var hideOvertimeCheckDiv2 = document.getElementById("hideOvertimeCheckDiv2");
	var overtimeCheck2 = document.getElementById("overtimeCheck2").checked;
	
	if (overtimeCheck2 == true)
	{
		hideOvertimeCheckDiv2.style.visibility = "hidden";
	}
	else if(overtimeCheck2 == false){
		hideOvertimeCheckDiv2.style.visibility = "visible";
	}
	else{alert("something went wrong");}
	
	var hideWeekendHours = document.getElementById("hideWeekendHours");
	var weekendHoursCheck = document.getElementById("weekendHoursCheck").checked;
	
	if (weekendHoursCheck == true)
	{
		hideWeekendHours.style.visibility = "hidden";
	}
	else if(weekendHoursCheck == false){
		hideWeekendHours.style.visibility = "visible";
	}
	else{alert("something went wrong");}
}


function showEmploymentInfoInfo() {
	
	var employmentInfoHide = document.getElementById("employmentInfoHide");
	var employmentInfoShow = document.getElementById("employmentInfoShow");
	var employmentInfoInfo = document.getElementById("employmentInfoInfo");
	employmentInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	employmentInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	employmentInfoInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();

}
function hideEmploymentInfoInfo() {
	var employmentInfoHide = document.getElementById("employmentInfoHide");
	var employmentInfoShow = document.getElementById("employmentInfoShow");
	var employmentInfoInfo = document.getElementById("employmentInfoInfo");
	employmentInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	employmentInfoShow.style.visibility = "visible" // parodome show info mygtuka
	employmentInfoInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showBasicPayInfo() {
	
	var basicPayInfoHide = document.getElementById("basicPayInfoHide");
	var basicPayInfoShow = document.getElementById("basicPayInfoShow");
	var basicPayInfo = document.getElementById("basicPayInfo");
	basicPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	basicPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	basicPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	//vienu metu rodomas tik vienas info page, kiti paslepiame
	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();

}
function hideBasicPayInfo() {
	var basicPayInfoHide = document.getElementById("basicPayInfoHide");
	var basicPayInfoShow = document.getElementById("basicPayInfoShow");
	var basicPayInfo = document.getElementById("basicPayInfo");
	basicPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	basicPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	basicPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showUnsocialPayInfo() {
	
	var unsocialPayInfoHide = document.getElementById("unsocialPayInfoHide");
	var unsocialPayInfoShow = document.getElementById("unsocialPayInfoShow");
	var unsocialPayInfo = document.getElementById("unsocialPayInfo");
	unsocialPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	unsocialPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	unsocialPayInfo.style.visibility = "visible"; // parodome info puslapi

	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideUnsocialPayInfo() {
	var unsocialPayInfoHide = document.getElementById("unsocialPayInfoHide");
	var unsocialPayInfoShow = document.getElementById("unsocialPayInfoShow");
	var unsocialPayInfo = document.getElementById("unsocialPayInfo");
	unsocialPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	unsocialPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	unsocialPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showOvertimePayInfo() {
	
	var overtimePayInfoHide = document.getElementById("overtimePayInfoHide");
	var overtimePayInfoShow = document.getElementById("overtimePayInfoShow");
	var overtimePayInfo = document.getElementById("overtimePayInfo");
	overtimePayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	overtimePayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	overtimePayInfo.style.visibility = "visible"; // parodome info puslapi

	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideOvertimePayInfo() {
	var overtimePayInfoHide = document.getElementById("overtimePayInfoHide");
	var overtimePayInfoShow = document.getElementById("overtimePayInfoShow");
	var overtimePayInfo = document.getElementById("overtimePayInfo");
	overtimePayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	overtimePayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	overtimePayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showBankholPayInfo() {
	
	var bankHolPayInfoHide = document.getElementById("bankHolPayInfoHide");
	var bankHolPayInfoShow = document.getElementById("bankHolPayInfoShow");
	var bankholPayInfo = document.getElementById("bankholPayInfo");
	bankHolPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	bankHolPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	bankholPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();

}
function hideBankholPayInfo() {
	var bankHolPayInfoHide = document.getElementById("bankHolPayInfoHide");
	var bankHolPayInfoShow = document.getElementById("bankHolPayInfoShow");
	var bankholPayInfo = document.getElementById("bankholPayInfo");
	bankHolPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	bankHolPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	bankholPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showHolidayPayInfo() {
	var holidayPayInfoHide = document.getElementById("holidayPayInfoHide");
	var holidayPayInfoShow = document.getElementById("holidayPayInfoShow");
	var holidayPayInfo = document.getElementById("holidayPayInfo");
	holidayPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	holidayPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	holidayPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideHolidayPayInfo() {
	var holidayPayInfoHide = document.getElementById("holidayPayInfoHide");
	var holidayPayInfoShow = document.getElementById("holidayPayInfoShow");
	var holidayPayInfo = document.getElementById("holidayPayInfo");
	holidayPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	holidayPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	holidayPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}
function showSickBerCompPayInfo() {
	var sickBerCompPayInfoHide = document.getElementById("sickBerCompPayInfoHide");
	var sickBerCompPayInfoShow = document.getElementById("sickBerCompPayInfoShow");
	var sickBerCompPayInfo = document.getElementById("sickBerCompPayInfo");
	sickBerCompPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	sickBerCompPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	sickBerCompPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideAddPayInfo();
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideSickBerCompPayInfo() {
	var sickBerCompPayInfoHide = document.getElementById("sickBerCompPayInfoHide");
	var sickBerCompPayInfoShow = document.getElementById("sickBerCompPayInfoShow");
	var sickBerCompPayInfo = document.getElementById("sickBerCompPayInfo");
	sickBerCompPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	sickBerCompPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	sickBerCompPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showAddPayInfo() {
	var addPayInfoHide = document.getElementById("addPayInfoHide");
	var addPayInfoShow = document.getElementById("addPayInfoShow");
	var addPayInfo = document.getElementById("addPayInfo");
	addPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	addPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	addPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideAddPayInfo() {
	var addPayInfoHide = document.getElementById("addPayInfoHide");
	var addPayInfoShow = document.getElementById("addPayInfoShow");
	var addPayInfo = document.getElementById("addPayInfo");
	addPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	addPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	addPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showBerCompPayInfo() {
	var berCompPayInfoHide = document.getElementById("berCompPayInfoHide");
	var berCompPayInfoShow = document.getElementById("berCompPayInfoShow");
	var berCompPayInfo = document.getElementById("berCompPayInfo");
	berCompPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	berCompPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	berCompPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideOtherPayInfo();
}
function hideBerCompPayInfo() {
	var berCompPayInfoHide = document.getElementById("berCompPayInfoHide");
	var berCompPayInfoShow = document.getElementById("berCompPayInfoShow");
	var berCompPayInfo = document.getElementById("berCompPayInfo");
	berCompPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	berCompPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	berCompPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}
function showWeekendPayInfo() {
	var weekendPayInfoHide = document.getElementById("weekendPayInfoHide");
	var weekendPayInfoShow = document.getElementById("weekendPayInfoShow");
	var weekendPayInfo = document.getElementById("weekendPayInfo");
	weekendPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	weekendPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	weekendPayInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideAddPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideBerCompPayInfo();
	hideOtherPayInfo();
}
function hideWeekendPayInfo() {
	var weekendPayInfoHide = document.getElementById("weekendPayInfoHide");
	var weekendPayInfoShow = document.getElementById("weekendPayInfoShow");
	var weekendPayInfo = document.getElementById("weekendPayInfo");
	weekendPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	weekendPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	weekendPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function showOtherPayInfo() {
	var otherPayInfoHide = document.getElementById("otherPayInfoHide");
	var otherPayInfoShow = document.getElementById("otherPayInfoShow");
	var otherPaymentsInfo = document.getElementById("otherPaymentsInfo");
	otherPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	otherPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	otherPaymentsInfo.style.visibility = "visible"; // parodome info puslapi
	
	hideBerCompPayInfo();
	hideSickBerCompPayInfo() ;
	hideHolidayPayInfo();
	hideBankholPayInfo();
	hideOvertimePayInfo();
	hideUnsocialPayInfo();
	hideBasicPayInfo();
	hideEmploymentInfoInfo();
	hideWeekendPayInfo();
	hideAddPayInfo();
}
function hideOtherPayInfo() {
	var otherPayInfoHide = document.getElementById("otherPayInfoHide");
	var otherPayInfoShow = document.getElementById("otherPayInfoShow");
	var otherPaymentsInfo = document.getElementById("otherPaymentsInfo");
	otherPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	otherPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	otherPaymentsInfo.style.visibility = "hidden"; // paslepiame info puslapi
}

function hideErrorMessage()
{
	var submitSuccessPayments = document.getElementById("submitSuccessPayments");
	submitSuccessPayments.innerHTML = " ";
	submitSuccessPayments.setAttribute("class", "submitSuccessBP");
	
	var paymentSettingsEmailDivResponse = document.getElementById("paymentSettingsEmailDivResponse");
	paymentSettingsEmailDivResponse.innerHTML = " ";
	paymentSettingsEmailDivResponse.setAttribute("class", "submitSuccessBP");
		
}

function start (){
	generateBreakLength();
	generateHolidayDay();
	generatePartiallySelectMenu();
	//checkIfEmpty ();
	var submitButton = document.getElementById("buttonSubmit");
	submitButton.onclick = function () {dateChecker ();} //jei ne
	
	loadindexes();
	
	var paymentSettingsEmailButton = document.getElementById("paymentSettingsEmailButton");
	paymentSettingsEmailButton.onclick = loadIndexesEmail;
	
	
	var unsociableHoursCheck = document.getElementById("unsociableHoursCheck");
	unsociableHoursCheck.onchange = showHideDivs;
	
	var overtimeCheck = document.getElementById("overtimeCheck");
	overtimeCheck.onchange = showHideDivs;
	
	var overtimeCheck2 = document.getElementById("overtimeCheck2");
	overtimeCheck2.onchange = showHideDivs;
	
	var weekendHoursCheck = document.getElementById("weekendHoursCheck");
	weekendHoursCheck.onchange = showHideDivs;
	
	
	//info divs show/hideO
	var employmentInfoShow = document.getElementById("employmentInfoShow");
	employmentInfoShow.onclick = showEmploymentInfoInfo;
	var employmentInfoHide = document.getElementById("employmentInfoHide");
	employmentInfoHide.onclick = hideEmploymentInfoInfo;
	
	var basicPayInfoShow = document.getElementById("basicPayInfoShow");
	basicPayInfoShow.onclick = showBasicPayInfo;
	var basicPayInfoHide = document.getElementById("basicPayInfoHide");
	basicPayInfoHide.onclick = hideBasicPayInfo;
	
	var unsocialPayInfoShow = document.getElementById("unsocialPayInfoShow");
	unsocialPayInfoShow.onclick = showUnsocialPayInfo;
	var unsocialPayInfoHide = document.getElementById("unsocialPayInfoHide");
	unsocialPayInfoHide.onclick = hideUnsocialPayInfo;
	
	var overtimePayInfoShow = document.getElementById("overtimePayInfoShow");
	overtimePayInfoShow.onclick = showOvertimePayInfo;
	var overtimePayInfoHide = document.getElementById("overtimePayInfoHide");
	overtimePayInfoHide.onclick = hideOvertimePayInfo;
	
	var bankHolPayInfoShow = document.getElementById("bankHolPayInfoShow");
	bankHolPayInfoShow.onclick = showBankholPayInfo;
	var bankHolPayInfoHide = document.getElementById("bankHolPayInfoHide");
	bankHolPayInfoHide.onclick = hideBankholPayInfo;
	
	var holidayPayInfoShow = document.getElementById("holidayPayInfoShow");
	holidayPayInfoShow.onclick = showHolidayPayInfo;
	var holidayPayInfoHide = document.getElementById("holidayPayInfoHide");
	holidayPayInfoHide.onclick = hideHolidayPayInfo;
	
	var sickBerCompPayInfoShow = document.getElementById("sickBerCompPayInfoShow");
	sickBerCompPayInfoShow.onclick = showSickBerCompPayInfo;
	var sickBerCompPayInfoHide = document.getElementById("sickBerCompPayInfoHide");
	sickBerCompPayInfoHide.onclick = hideSickBerCompPayInfo;
	
	var addPayInfoShow = document.getElementById("addPayInfoShow");
	addPayInfoShow.onclick = showAddPayInfo;
	var addPayInfoHide = document.getElementById("addPayInfoHide");
	addPayInfoHide.onclick = hideAddPayInfo;
	
	var berCompPayInfoShow = document.getElementById("berCompPayInfoShow");
	berCompPayInfoShow.onclick = showBerCompPayInfo;
	var berCompPayInfoHide = document.getElementById("berCompPayInfoHide");
	berCompPayInfoHide.onclick = hideBerCompPayInfo;
	
	var weekendPayInfoShow = document.getElementById("weekendPayInfoShow");
	weekendPayInfoShow.onclick = showWeekendPayInfo;
	var weekendPayInfoHide = document.getElementById("weekendPayInfoHide");
	weekendPayInfoHide.onclick = hideWeekendPayInfo;
	
	var otherPayInfoShow = document.getElementById("otherPayInfoShow");
	otherPayInfoShow.onclick = showOtherPayInfo;
	var otherPayInfoHide = document.getElementById("otherPayInfoHide");
	otherPayInfoHide.onclick = hideOtherPayInfo;
	
	var submitSuccessPaymentsHideError = document.getElementById("submitSuccessPayments");
	submitSuccessPaymentsHideError.onclick = hideErrorMessage;
	
	var paymentSettingsEmailDivResponseHideError = document.getElementById("paymentSettingsEmailDivResponse");
	paymentSettingsEmailDivResponseHideError.onclick = hideErrorMessage;
	
}
document.addEventListener("DOMContentLoaded",start,false);