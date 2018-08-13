function generateStartDay()
{
	var backPayStartDay = document.getElementById("backPayStartDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		backPayStartDay.appendChild(dayOption);
	}
	
}

function generateEndDay()
{
	var backPayEndDay = document.getElementById("backPayEndDay");
	for(i=1;i<32;i++)
	{
		var dayOption = document.createElement("option");
		if (i<10){i="0"+i;}
		var textday = document.createTextNode(i);
		
		dayOption.appendChild(textday);						//option<---[text]
		backPayEndDay.appendChild(dayOption);
	}
	
}
//kurie mokejimai neitraukiami i backpay, nuimti varnele
function removeCheckedAttribute()
{
	//bank holiday bonuses
	var checkBox9 = document.getElementById("checkBox9");
	checkBox9.removeAttribute("checked", "checked");
	
	//spp
	var checkBox20 = document.getElementById("checkBox20");
	checkBox20.removeAttribute("checked", "checked");
	
	//ssp
	var checkBox19 = document.getElementById("checkBox19");
	checkBox19.removeAttribute("checked", "checked");
	
	//SAP
	var checkBox29 = document.getElementById("checkBox29");
	checkBox29.removeAttribute("checked", "checked");
	
	//addpay1
	var checkBox24 = document.getElementById("checkBox24");
	checkBox24.removeAttribute("checked", "checked");
	
	//addpay2
	var checkBox25 = document.getElementById("checkBox25");
	checkBox25.removeAttribute("checked", "checked");
	
	//addpay3
	var checkBox26 = document.getElementById("checkBox26");
	checkBox26.removeAttribute("checked", "checked");
}
function generateCheckBoxes()
{
	var backPayIncludeCheckbox = document.getElementById("backPayIncludeCheckbox");
	for(i=1; i<32; i++)
	{
		var checkBox = document.createElement("input");
		checkBox.setAttribute("id", "checkBox"+i);
		checkBox.setAttribute("type", "checkbox");
		checkBox.setAttribute("class", "checkboxNoPadding");
		checkBox.setAttribute("name", "checkBox"+i);
		checkBox.setAttribute("checked", "checked")
		checkBox.style.display = "none";
		
		backPayIncludeCheckbox.appendChild(checkBox);
		
		//iterpiame br po checkbox
		var brElement = document.createElement("br");
		brElement.setAttribute("id", "br"+i);
		brElement.style.display = "none";
		backPayIncludeCheckbox.appendChild(brElement);
		
	}
	removeCheckedAttribute();
}
function generatePaymentsInput()
{
	var backPayPaymentsAmountDiv = document.getElementById("backPayPaymentsAmountDiv");
	for(i=1; i<32; i++)
	{
		var inputAmount = document.createElement("input");
		inputAmount.setAttribute("id", "inputAmount"+i);
		inputAmount.setAttribute("type", "text");
		inputAmount.setAttribute("name", "inputAmount"+i);
		inputAmount.setAttribute("class", "backPayAmountInput");
		inputAmount.setAttribute("readonly","readonly");
		inputAmount.style.display = "none";
		
		backPayPaymentsAmountDiv.appendChild(inputAmount);
		
		//iterpiame br po input
		var brInput = document.createElement("br");
		brInput.setAttribute("id", "brInput"+i);
		brInput.style.display = "none";
		backPayPaymentsAmountDiv.appendChild(brInput);
		
	}
}

function startDateChecker(){
	var backPayStartYear = document.getElementById("backPayStartYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var backPayStartYearValue = Number(backPayStartYear.options[backPayStartYear.selectedIndex].value);
		
	var backPayStartMonth = document.getElementById("backPayStartMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var backPayStartMonthValue = backPayStartMonth.options[backPayStartMonth.selectedIndex].value;
		
	var backPayStartDay = document.getElementById("backPayStartDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var backPayStartDayValue = backPayStartDay.options[backPayStartDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("backPayCalculatorDivResponse");
	//check if proper year has been selected
	if (backPayStartYearValue !==2017 && backPayStartYearValue !== 2018 && backPayStartYearValue !== 2019 && backPayStartYearValue !== 2020 && backPayStartYearValue !== 2021 && backPayStartYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay start year declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start year declared");
		backPayStartYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{backPayStartYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(backPayStartMonthValue !=='01' && backPayStartMonthValue !=='02' && backPayStartMonthValue !=='03' && backPayStartMonthValue !=='04' && backPayStartMonthValue !=='05' && backPayStartMonthValue !=='06' && backPayStartMonthValue !=='07' && backPayStartMonthValue !=='08' && backPayStartMonthValue !=='09' && backPayStartMonthValue !=='10' && backPayStartMonthValue !=='11' && backPayStartMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay start month declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		
		//alert("Invalid Back Pay start month declared");
		holidayStartMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (backPayStartDayValue === "01"){backPayStartDayValue;}
	else if (backPayStartDayValue === "02"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "03"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "04"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "05"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "06"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "07"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "08"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "09"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "10"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "11"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "12"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "13"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "14"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "15"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "16"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "17"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "18"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "19"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "20"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "21"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "22"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "23"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "24"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "25"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "26"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "27"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "28"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "29"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "30"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else if (backPayStartDayValue === "31"){backPayStartDayValue; backPayStartYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid Back Pay start day declared!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay start day declared");
			backPayStartDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((backPayStartMonthValue === "04" && backPayStartDayValue === "31") || (backPayStartMonthValue === "06" && backPayStartDayValue === "31") || (backPayStartMonthValue === "09" && backPayStartDayValue === "31") || (backPayStartMonthValue === "11" && backPayStartDayValue === "31") || (backPayStartMonthValue === "02" && backPayStartDayValue === "29")||(backPayStartMonthValue === "02" && backPayStartDayValue === "30")||(backPayStartMonthValue === "02" && backPayStartDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay start month and day declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay start month and day declared!");
		backPayStartMonth.setAttribute("class", "invalidForm");
		backPayStartDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		backPayStartMonth.removeAttribute("class");
		backPayStartDay.removeAttribute("class");
	}
	
	endDateChecker(backPayStartYearValue, backPayStartMonthValue, backPayStartDayValue);
}


function endDateChecker(backPayStartYearValue, backPayStartMonthValue, backPayStartDayValue){
	var backPayEndYear = document.getElementById("backPayEndYear");
	//var holidayStartYearIndex = holidayStartYear.options.selectedIndex;
	var backPayEndYearValue = Number(backPayEndYear.options[backPayEndYear.selectedIndex].value);
		
	var backPayEndMonth = document.getElementById("backPayEndMonth");
	//var holidayStartMonthIndex = holidayStartMonth.options.selectedIndex;
	var backPayEndMonthValue = backPayEndMonth.options[backPayEndMonth.selectedIndex].value;
		
	var backPayEndDay = document.getElementById("backPayEndDay");
	//var holidayStartDayIndex = holidayStartDay.options.selectedIndex;
	var backPayEndDayValue = backPayEndDay.options[backPayEndDay.selectedIndex].value;
	
	var submitSuccess = document.getElementById("backPayCalculatorDivResponse");
	//check if proper year has been selected
	if (backPayEndYearValue !==2017 && backPayEndYearValue !== 2018 && backPayEndYearValue !== 2019 && backPayEndYearValue !== 2020 && backPayEndYearValue !== 2021 && backPayEndYearValue !== 2022)
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay end year declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end year declared");
		backPayEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{backPayEndYear.removeAttribute("class");}
	
	//check if proper month number has been selected, nothing else except 01-12 can be allowed to be selected
	if(backPayEndMonthValue !=='01' && backPayEndMonthValue !=='02' && backPayEndMonthValue !=='03' && backPayEndMonthValue !=='04' && backPayEndMonthValue !=='05' && backPayEndMonthValue !=='06' && backPayEndMonthValue !=='07' && backPayEndMonthValue !=='08' && backPayEndMonthValue !=='09' && backPayEndMonthValue !=='10' && backPayEndMonthValue !=='11' && backPayEndMonthValue !=='12')
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay end month declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month declared");
		holidayStartMonth.setAttribute("class", "invalidForm");
		return false;
	}
	
	//check if proper day has been selected
	if (backPayEndDayValue === "01"){backPayEndDayValue;}
	else if (backPayEndDayValue === "02"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "03"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "04"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "05"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "06"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "07"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "08"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "09"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "10"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "11"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "12"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "13"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "14"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "15"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "16"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "17"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "18"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "19"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "20"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "21"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "22"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "23"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "24"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "25"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "26"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "27"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "28"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "29"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "30"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else if (backPayEndDayValue === "31"){backPayEndDayValue; backPayEndYear.removeAttribute("class");}
	else
		{
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
			submitSuccess.innerHTML += 'Invalid Back Pay end day declared!';
			submitSuccess.removeAttribute("class");
			submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
			//alert("Invalid Back Pay end day declared");
			backPayEndDay.setAttribute("class", "invalidForm");
			return false;
		}
	
//check if proper day selected for a month ( avoid 29, 30, 31 for feb and so on)
	if ((backPayEndMonthValue === "04" && backPayEndDayValue === "31") || (backPayEndMonthValue === "06" && backPayEndDayValue === "31") || (backPayEndMonthValue === "09" && backPayEndDayValue === "31") || (backPayEndMonthValue === "11" && backPayEndDayValue === "31") || (backPayEndMonthValue === "02" && backPayEndDayValue === "29")||(backPayEndMonthValue === "02" && backPayEndDayValue === "30")||(backPayEndMonthValue === "02" && backPayEndDayValue === "31") )
	{
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Invalid Back Pay end month and day declared!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert("Invalid Back Pay end month and day declared!");
		backPayEndMonth.setAttribute("class", "invalidForm");
		backPayEndDay.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		backPayEndMonth.removeAttribute("class");
		backPayEndDay.removeAttribute("class");
	}
	
	compareStartEndDates(backPayStartYearValue, backPayStartMonthValue, backPayStartDayValue, backPayEndYearValue, backPayEndMonthValue, backPayEndDayValue );
}

function getFormValues()
{
	var backPayStartYear = document.getElementById("backPayStartYear");
	var backPayStartYearValue = Number(backPayStartYear.options[backPayStartYear.selectedIndex].value);
	var backPayStartMonth = document.getElementById("backPayStartMonth");
	var backPayStartMonthValue = backPayStartMonth.options[backPayStartMonth.selectedIndex].value;	
	var backPayStartDay = document.getElementById("backPayStartDay");
	var backPayStartDayValue = backPayStartDay.options[backPayStartDay.selectedIndex].value;
	
	
	var backPayEndYear = document.getElementById("backPayEndYear");
	var backPayEndYearValue = Number(backPayEndYear.options[backPayEndYear.selectedIndex].value);
	var backPayEndMonth = document.getElementById("backPayEndMonth");
	var backPayEndMonthValue = backPayEndMonth.options[backPayEndMonth.selectedIndex].value;	
	var backPayEndDay = document.getElementById("backPayEndDay");
	var backPayEndDayValue = backPayEndDay.options[backPayEndDay.selectedIndex].value;
	
	var backPayStartDate = backPayStartYearValue+'-'+backPayStartMonthValue+'-'+backPayStartDayValue;
	var backPayEndDate = backPayEndYearValue+'-'+backPayEndMonthValue+'-'+backPayEndDayValue;
	
	str = 'backPayStartDate='+backPayStartDate+'&'+'backPayEndDate='+backPayEndDate+'&';
	
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
	var url = "javascript/ajax/backpaycalculatorsubmit.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccessBP = document.getElementById("backPayCalculatorDivResponse");
			var backPayCalculatorDate = document.getElementById("backPayCalculatorDate");
			//var closeError = document.getElementById("closeError");
			
			
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
				submitSuccessBP.innerHTML = 'Payments Loaded!';
				setTimeout(function(){submitSuccessBP.innerHTML=" ";},1500);
			//------------------back pay amounts---------------------------------------------------------//
				var backPayPaymentsAmountDiv = document.getElementById("backPayPaymentsAmountDiv");
				//backPayPaymentsAmountDiv.innerHTML = " ";
				
				var basic_paySum = response.basicPaySum;
				var uns_premSum = response.uns_premSum;
				var ot1_paySum = response.ot1_paySum;
				var ot2_paySum = response.ot2_paySum;
				var hol_paySum = response.hol_paySum;
				var enhol_paySum = response.enhol_paySum;
				var uns_holSum = response.uns_holSum;
				var bhol_paySum = response.bhol_paySum;
				var bhol_bonusSum = response.bhol_bonusSum;
				var sick_paySum = response.sick_paySum;
				var uns_sickSum = response.uns_sickSum;
				var fam_paySum = response.fam_paySum;
				var uns_familySum = response.uns_familySum;
				var ber_paySum = response.ber_paySum;
				var uns_berSum = response.uns_berSum;
				var comp_paySum = response.comp_paySum;
				var uns_compSum = response.uns_compSum;
				var add_paySum = response.add_paySum;
				var backPay_Sum = response.backPay_Sum;
				
				var SSP_Sum = response.SSP_Sum;
				var SPP_Sum = response.SPP_Sum;
				var pieceWorkSum = response.pieceWorkSum;
				var sundayExtraPaySum = response.sundayExtraPaySum;
				var saturdayExtraPaySum = response.saturdayExtraPaySum;
				var add_pay2Sum = response.add_pay2Sum;
				var add_pay3Sum = response.add_pay3Sum;
				var paybackSum = response.paybackSum;
				var SAPSum = response.SAPSum;
				var salarySum = response.salarySum;
				var bonusSum = response.bonusSum;
				var commissionsSum = response.commissionsSum;		
				
				var inputAmount1 = document.getElementById("inputAmount1");
				var brInput1 = document.getElementById("brInput1");
				inputAmount1.style.display = "initial";
				brInput1.style.display = "initial";
				inputAmount1.setAttribute("value", basic_paySum);
				
				var inputAmount2 = document.getElementById("inputAmount2");
				var brInput2 = document.getElementById("brInput2");
				if(uns_premSum>0){
					inputAmount2.style.display = "initial";
					brInput2.style.display = "initial";
					inputAmount2.setAttribute("value", uns_premSum);
				}
				else{
					inputAmount2.style.display = "none";
					brInput2.style.display = "none";
				}
				
				var inputAmount3 = document.getElementById("inputAmount3");
				var brInput3 = document.getElementById("brInput3");
				if(ot1_paySum>0){
					inputAmount3.style.display = "initial";
					brInput3.style.display = "initial";
					inputAmount3.setAttribute("value", ot1_paySum);
				}
				else{
					inputAmount3.style.display = "none";;
					brInput3.style.display = "none";;
					inputAmount3.setAttribute("value", 0);
				}	
				
				var inputAmount4 = document.getElementById("inputAmount4");
				var brInput4 = document.getElementById("brInput4");
				if(ot2_paySum>0){
					inputAmount4.style.display = "initial";
					brInput4.style.display = "initial";
					inputAmount4.setAttribute("value", ot2_paySum);
				}
				else{
					inputAmount4.style.display = "none";
					brInput4.style.display = "none";
					inputAmount4.setAttribute("value", 0);
				}
				
				var inputAmount5 = document.getElementById("inputAmount5");
				var brInput5 = document.getElementById("brInput5");
				if(hol_paySum>0){
					inputAmount5.style.display = "initial";
					brInput5.style.display = "initial";
					inputAmount5.setAttribute("value", hol_paySum);
				}
				else{
					inputAmount5.style.display = "none";
					brInput5.style.display = "none";
					inputAmount5.setAttribute("value", 0);
				}
				
				var inputAmount6 = document.getElementById("inputAmount6");
				var brInput6 = document.getElementById("brInput6");
				if(enhol_paySum>0){
					inputAmount6.style.display = "initial";
					brInput6.style.display = "initial";
					inputAmount6.setAttribute("value", enhol_paySum);
				}
				else{
					inputAmount6.style.display = "none";
					brInput6.style.display = "none";
					inputAmount6.setAttribute("value", 0);
				}
				
				var inputAmount7 = document.getElementById("inputAmount7");
				var brInput7 = document.getElementById("brInput7");
				if(uns_holSum>0){
					inputAmount7.style.display = "initial";
					brInput7.style.display = "initial";
					inputAmount7.setAttribute("value", uns_holSum);
				}
				else{
					inputAmount7.style.display = "none";
					brInput7.style.display = "none";
					inputAmount7.setAttribute("value", 0);
				}
				
				var inputAmount8 = document.getElementById("inputAmount8");
				var brInput8 = document.getElementById("brInput8");
				if(bhol_paySum>0){
					inputAmount8.style.display = "initial";
					brInput8.style.display = "initial";
					inputAmount8.setAttribute("value", bhol_paySum);
				}
				else{
					inputAmount8.style.display = "none";
					brInput8.style.display = "none";
					inputAmount8.setAttribute("value", 0);
				}
				
				var inputAmount9 = document.getElementById("inputAmount9");
				var brInput9 = document.getElementById("brInput9");
				if(bhol_bonusSum>0){
					inputAmount9.style.display = "initial";
					brInput9.style.display = "initial";
					inputAmount9.setAttribute("value", bhol_bonusSum);
				}
				else{
					inputAmount9.style.display = "none";
					brInput9.style.display = "none";
					inputAmount9.setAttribute("value", 0);
				}
				
				var inputAmount10 = document.getElementById("inputAmount10");
				var brInput10 = document.getElementById("brInput10");
				if(sick_paySum>0){
					inputAmount10.style.display = "initial";
					brInput10.style.display = "initial";
					inputAmount10.setAttribute("value", sick_paySum);
				}
				else{
					inputAmount10.style.display = "none";
					brInput10.style.display = "none";
					inputAmount10.setAttribute("value", 0);
				}
				
				var inputAmount11 = document.getElementById("inputAmount11");
				var brInput11 = document.getElementById("brInput11");
				if(uns_sickSum>0){
					inputAmount11.style.display = "initial";
					brInput11.style.display = "initial";
					inputAmount11.setAttribute("value", uns_sickSum);
				}
				else{
					inputAmount11.style.display = "none";
					brInput11.style.display = "none";
					inputAmount11.setAttribute("value", 0);
				}
				
				var inputAmount12 = document.getElementById("inputAmount12");
				var brInput12 = document.getElementById("brInput12");
				if(fam_paySum>0){
					inputAmount12.style.display = "initial";
					brInput12.style.display = "initial";
					inputAmount12.setAttribute("value", fam_paySum);
				}
				else{
					inputAmount12.style.display = "none";
					brInput12.style.display = "none";
					inputAmount12.setAttribute("value", 0);
				}
				
				var inputAmount13 = document.getElementById("inputAmount13");
				var brInput13 = document.getElementById("brInput13");
				if(uns_familySum>0){
					inputAmount13.style.display = "initial";
					brInput13.style.display = "initial";
					inputAmount13.setAttribute("value", uns_familySum);
				}
				else{
					inputAmount13.style.display = "none";
					brInput13.style.display = "none";
					inputAmount13.setAttribute("value", 0);
				}
				
				var inputAmount14 = document.getElementById("inputAmount14");
				var brInput14 = document.getElementById("brInput14");
				if(ber_paySum>0){
					inputAmount14.style.display = "initial";
					brInput14.style.display = "initial";
					inputAmount14.setAttribute("value", ber_paySum);
				}
				else{
					inputAmount14.style.display = "none";
					brInput14.style.display = "none";
					inputAmount14.setAttribute("value", 0);
				}	
				
				var inputAmount15 = document.getElementById("inputAmount15");
				var brInput15 = document.getElementById("brInput15");	
				if(uns_berSum>0){
					inputAmount15.style.display = "initial";
					brInput15.style.display = "initial";
					inputAmount15.setAttribute("value", uns_berSum);
				}
				else{
					inputAmount15.style.display = "none";
					brInput15.style.display = "none";
					inputAmount15.setAttribute("value", 0);
				}
				
				var inputAmount16 = document.getElementById("inputAmount16");
				var brInput16 = document.getElementById("brInput16");
				if(comp_paySum>0){
					inputAmount16.style.display = "initial";
					brInput16.style.display = "initial";
					inputAmount16.setAttribute("value", comp_paySum);
				}
				else{
					inputAmount16.style.display = "none";
					brInput16.style.display = "none";
					inputAmount16.setAttribute("value", 0);
				}
				
				var inputAmount17 = document.getElementById("inputAmount17");
				var brInput17 = document.getElementById("brInput17");
				if(uns_compSum>0){
					inputAmount17.style.display = "initial";
					brInput17.style.display = "initial";
					inputAmount17.setAttribute("value", uns_compSum);
				}
				else{
					inputAmount17.style.display = "none";
					brInput17.style.display = "none";
					inputAmount17.setAttribute("value", 0);
				}
				
				var inputAmount18 = document.getElementById("inputAmount18");
				var brInput18 = document.getElementById("brInput18");
				if(backPay_Sum>0){
					inputAmount18.style.display = "initial";
					brInput18.style.display = "initial";
					inputAmount18.setAttribute("value", backPay_Sum);
				}
				else{
					inputAmount18.style.display = "none";
					brInput18.style.display = "none";
					inputAmount18.setAttribute("value", 0);
				}
				
				var inputAmount19 = document.getElementById("inputAmount19");
				var brInput19 = document.getElementById("brInput19");
				if(SSP_Sum>0){
					inputAmount19.style.display = "initial";
					brInput19.style.display = "initial";
					inputAmount19.setAttribute("value", SSP_Sum);
				}
				else{
					inputAmount19.style.display = "none";
					brInput19.style.display = "none";
					inputAmount19.setAttribute("value", 0);
				}
				
				var inputAmount20 = document.getElementById("inputAmount20");
				var brInput20 = document.getElementById("brInput21");
				if(SPP_Sum>0){
					inputAmount20.style.display = "initial";
					brInput20.style.display = "initial";
					inputAmount20.setAttribute("value", SPP_Sum);
				}
				else{
					inputAmount20.style.display = "none";
					brInput20.style.display = "none";
					inputAmount20.setAttribute("value", 0);
				}
				
				var inputAmount21 = document.getElementById("inputAmount21");
				var brInput21 = document.getElementById("brInput21");
				if(pieceWorkSum>0){
					inputAmount21.style.display = "initial";
					brInput21.style.display = "initial";
					inputAmount21.setAttribute("value", pieceWorkSum);
				}
				else{
					inputAmount21.style.display = "none";
					brInput21.style.display = "none";
					inputAmount21.setAttribute("value", 0);
				}
				
				var inputAmount22 = document.getElementById("inputAmount22");
				var brInput22 = document.getElementById("brInput22");
				if(sundayExtraPaySum>0){
					inputAmount22.style.display = "initial";
					brInput22.style.display = "initial";
					inputAmount22.setAttribute("value", sundayExtraPaySum);
				}
				else{
					inputAmount22.style.display = "none";
					brInput22.style.display = "none";
					inputAmount22.setAttribute("value", 0);
				}
				
				var inputAmount23 = document.getElementById("inputAmount23");
				var brInput23 = document.getElementById("brInput23");
				if(saturdayExtraPaySum>0){
					inputAmount23.style.display = "initial";
					brInput23.style.display = "initial";
					inputAmount23.setAttribute("value", saturdayExtraPaySum);
				}
				else{
					inputAmount23.style.display = "none";
					brInput23.style.display = "none";
					inputAmount23.setAttribute("value", 0);
				}
				
				var inputAmount24 = document.getElementById("inputAmount24");
				var brInput24 = document.getElementById("brInput24");
				if(add_paySum>0){
					inputAmount24.style.display = "initial";
					brInput24.style.display = "initial";
					inputAmount24.setAttribute("value", add_paySum);
				}
				else{
					inputAmount24.style.display = "none";
					brInput24.style.display = "none";
					inputAmount24.setAttribute("value", 0);
				}
				
				var inputAmount25 = document.getElementById("inputAmount25");
				var brInput25 = document.getElementById("brInput25");
				if(add_pay2Sum>0){
					inputAmount25.style.display = "initial";
					brInput25.style.display = "initial";
					inputAmount25.setAttribute("value", add_pay2Sum);
				}
				else{
					inputAmount25.style.display = "none";
					brInput25.style.display = "none";
					inputAmount25.setAttribute("value", 0);
				}
				
				var inputAmount26 = document.getElementById("inputAmount26");
				var brInput26 = document.getElementById("brInput26");
				if(add_pay3Sum>0){
					inputAmount26.style.display = "initial";
					brInput26.style.display = "initial";
					inputAmount26.setAttribute("value", add_pay3Sum);
				}
				else{
					inputAmount26.style.display = "none";
					brInput26.style.display = "none";
					inputAmount26.setAttribute("value", 0);
				}
				
				var inputAmount27 = document.getElementById("inputAmount27");
				var brInput27 = document.getElementById("brInput27");
				if(paybackSum>0){
					inputAmount27.style.display = "initial";
					brInput27.style.display = "initial";
					inputAmount27.setAttribute("value", paybackSum);
				}
				else{
					inputAmount27.style.display = "none";
					brInput27.style.display = "none";
					inputAmount27.setAttribute("value", 0);
				}
				var inputAmount28 = document.getElementById("inputAmount28");
				var brInput28 = document.getElementById("brInput28");
				if(salarySum>0){
					inputAmount28.style.display = "initial";
					brInput28.style.display = "initial";
					inputAmount28.setAttribute("value", salarySum);
				}
				else{
					inputAmount28.style.display = "none";
					brInput28.style.display = "none";
					inputAmount28.setAttribute("value", 0);
				}
				
				var inputAmount29 = document.getElementById("inputAmount29");
				var brInput29 = document.getElementById("brInput29");
				if(SAPSum>0){
					inputAmount29.style.display = "initial";
					brInput29.style.display = "initial";
					inputAmount29.setAttribute("value", SAPSum);
				}
				else{
					inputAmount29.style.display = "none";
					brInput29.style.display = "none";
					inputAmount29.setAttribute("value", 0);
				}
				var inputAmount30 = document.getElementById("inputAmount30");
				var brInput30 = document.getElementById("brInput30");
				if(bonusSum>0){
					inputAmount30.style.display = "initial";
					brInput30.style.display = "initial";
					inputAmount30.setAttribute("value", bonusSum);
				}
				else{
					inputAmount30.style.display = "none";
					brInput30.style.display = "none";
					inputAmount30.setAttribute("value", 0);
				}
				var inputAmount31 = document.getElementById("inputAmount31");
				var brInput31 = document.getElementById("brInput31");
				if(commissionsSum>0){
					inputAmount31.style.display = "initial";
					brInput31.style.display = "initial";
					inputAmount31.setAttribute("value", commissionsSum);
				}
				else{
					inputAmount31.style.display = "none";
					brInput31.style.display = "none";
					inputAmount31.setAttribute("value", 0);
				}
				
				
				//-------------------------back Pay names-----------------------------------------//
				var backPayPaymentsNamesDiv = document.getElementById("backPayPaymentsNamesDiv");
				//backPayPaymentsNamesDiv.innerHTML = " ";
				
				backPayPaymentsNamesDiv.innerHTML = 'Basic Pay<br>';
				if(uns_premSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Basic Pay<br>';}
				if(ot1_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Overtime 1 Pay<br>';}
				if(ot2_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Overtime 2 Pay<br>';}
				if(hol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Holiday Pay <br>';}
				if(enhol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Enh. Holiday Pay<br>';}
				if(uns_holSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Holiday Pay<br>';}
				if(bhol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Bank Hol. Pay<br>';}
				if(bhol_bonusSum>0){backPayPaymentsNamesDiv.innerHTML +='Bank Hol. Bonus<br>';}
				if(sick_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Sickness Pay<br>';}
				if(uns_sickSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Sick Pay<br>';}
				if(fam_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Parental Pay<br>';}
				if(uns_familySum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Parental Pay<br>';}
				if(ber_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Bereav. Pay<br>';}
				if(uns_berSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Bereav. Pay<br>';}
				if(comp_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Compass. Pay<br>';}
				if(uns_compSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Comp. Pay<br>';}
				if(backPay_Sum>0){backPayPaymentsNamesDiv.innerHTML +='Prev. back pays<br>';}
				if(SSP_Sum>0){backPayPaymentsNamesDiv.innerHTML +='SSP Pay<br>';}
				if(SPP_Sum>0){backPayPaymentsNamesDiv.innerHTML +='SPP Pay<br>';}
				if(pieceWorkSum>0){backPayPaymentsNamesDiv.innerHTML +='Piece Work Pay<br>';}
				if(sundayExtraPaySum>0){backPayPaymentsNamesDiv.innerHTML +='Sunday Bonuses<br>';}
				if(saturdayExtraPaySum>0){backPayPaymentsNamesDiv.innerHTML +='Saturday Bonus<br>';}
				if(add_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Pay 1<br>';}
				if(add_pay2Sum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Pay 2<br>';}
				if(add_pay3Sum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Pay 3<br>';}
				if(paybackSum>0){backPayPaymentsNamesDiv.innerHTML +='Prev. back pays<br>';}
				if(salarySum>0){backPayPaymentsNamesDiv.innerHTML +='Salary Pay<br>';}
				if(SAPSum>0){backPayPaymentsNamesDiv.innerHTML +='SAP Pay<br>';}
				if(bonusSum>0){backPayPaymentsNamesDiv.innerHTML +='Bonuses pays<br>';}
				if(commissionsSum>0){backPayPaymentsNamesDiv.innerHTML +='Commissions pays';}
				//-------------------------back Pay Units-----------------------------------------//
				var backPayPaymentsUnitsDiv = document.getElementById("backPayPaymentsUnitsDiv");
				//backPayPaymentsUnitsDiv.innerHTML = " ";
				
				var basicHoursSum = response.basicHoursSum;
				var ot1_unitsSum = response.ot1_unitsSum;
				var ot2_unitsSum = response.ot2_unitsSum;
				var hol_unitsSum = response.hol_unitsSum;
				var enhol_unitsSum = response.enhol_unitsSum;
				var bhol_unitsSum = response.bhol_unitsSum;
				var sick_unitsSum = response.sick_unitsSum;
				var fam_unitsSum = response.fam_unitsSum;
				var ber_unitsSum = response.ber_unitsSum;
				var comp_unitsSum = response.comp_unitsSum;
				var saturdayHoursSum = response.saturdayHoursSum;
				var sundayHoursSum = response.sundayHoursSum;
				var uns_prem_unSum = response.uns_prem_unSum;
				var uns_hol_unSum = response.uns_hol_unSum;
				var uns_sick_unSum = response.uns_sick_unSum;
				var uns_family_unSum = response.uns_family_unSum;
				var uns_ber_unSum = response.uns_ber_unSum;
				var uns_comp_unSum = response.uns_comp_unSum;
				
				backPayPaymentsUnitsDiv.innerHTML = basicHoursSum+'<br>';
				if(uns_premSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_prem_unSum+'<br>';}
				if(ot1_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ot1_unitsSum+'<br>';}
				if(ot2_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ot2_unitsSum+'<br>';}
				if(hol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=hol_unitsSum+'<br>';}
				if(enhol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=enhol_unitsSum+'<br>';}
				if(uns_holSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_hol_unSum+'<br>';}
				if(bhol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=bhol_unitsSum+'<br>';}
				if(bhol_bonusSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(sick_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=sick_unitsSum+'<br>';}
				if(uns_sickSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_sick_unSum+'<br>';}
				if(fam_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=fam_unitsSum+'<br>';}
				if(uns_familySum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_family_unSum+'<br>';}
				if(ber_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ber_unitsSum+'<br>';}
				if(uns_berSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_ber_unSum+'<br>';}
				if(comp_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=comp_unitsSum+'<br>';}
				if(uns_compSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_comp_unSum+'<br>';}
				if(backPay_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SSP_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SPP_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(pieceWorkSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(sundayExtraPaySum>0){backPayPaymentsUnitsDiv.innerHTML +=sundayHoursSum+'<br>';}
				if(saturdayExtraPaySum>0){backPayPaymentsUnitsDiv.innerHTML +=saturdayHoursSum+'<br>';}
				if(add_paySum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(add_pay2Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(add_pay3Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(paybackSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(salarySum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SAPSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(bonusSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(commissionsSum>0){backPayPaymentsUnitsDiv.innerHTML +='-';}
				//-------------------------back Pay check boxes-----------------------------------------//
				var backPayIncludeCheckbox = document.getElementById("backPayIncludeCheckbox");
				//backPayIncludeCheckbox.innerHTML = " ";
				
				var checkBox1 = document.getElementById("checkBox1").style.display = "initial";
				var br1 = document.getElementById("br1").style.display = "initial";
				
				var checkBox2 = document.getElementById("checkBox2");
				var br2 = document.getElementById("br2");
				if(uns_premSum>0){
					checkBox2.style.display = "initial";
					br2.style.display = "initial";
				}
				else{
					checkBox2.style.display = "none";
					br2.style.display = "none";
				}
				
				var checkBox3 = document.getElementById("checkBox3");
				var br3 = document.getElementById("br3");
				if(ot1_paySum>0){
					checkBox3.style.display = "initial";
					br3.style.display = "initial";
				}
				else{
					checkBox3.style.display = "none";
					br3.style.display = "none";
				}
				
				var checkBox4 = document.getElementById("checkBox4");
				var br4 = document.getElementById("br4");
				if(ot2_paySum>0){
					checkBox4.style.display = "initial";
					br4.style.display = "initial";
				}
				else{
					checkBox4.style.display = "none";
					br4.style.display = "none";
				}
				
				var checkBox5 = document.getElementById("checkBox5");
				var br5 = document.getElementById("br5");
				if(hol_paySum>0){
					checkBox5.style.display = "initial";
					br5.style.display = "initial";
				}
				else{
					checkBox5.style.display = "none";
					br5.style.display = "none";
				}
				
				var checkBox6 = document.getElementById("checkBox6");
				var br6 = document.getElementById("br6");
				if(enhol_paySum>0){
					checkBox6.style.display = "initial";
					br6.style.display = "initial";
				}
				else{
					checkBox6.style.display = "none";
					br6.style.display = "none";
				}
				
				var checkBox7 = document.getElementById("checkBox7");
				var br7 = document.getElementById("br7");
				if(uns_holSum>0){
					checkBox7.style.display = "initial";
					br7.style.display = "initial";
				}
				else{
					checkBox7.style.display = "none";
					br7.style.display = "none";
				}
				
				var checkBox8 = document.getElementById("checkBox8");
				var br8 = document.getElementById("br8");
				if(bhol_paySum>0){
					checkBox8.style.display = "initial";
					br8.style.display = "initial";
				}
				else{
					checkBox8.style.display = "none";
					br8.style.display = "none";
				}
				
				var checkBox9 = document.getElementById("checkBox9");
				var br9 = document.getElementById("br9");
				if(bhol_bonusSum>0){
					checkBox9.style.display = "initial";
					br9.style.display = "initial";
				}
				else{
					checkBox9.style.display = "none";
					br9.style.display = "none";
				}
				
				var checkBox10 = document.getElementById("checkBox10");
				var br10 = document.getElementById("br10");
				if(sick_paySum>0){
					checkBox10.style.display = "initial";
					br10.style.display = "initial";
				}
				else{
					checkBox10.style.display = "none";
					br10.style.display = "none";
				}
				
				var checkBox11 = document.getElementById("checkBox11");
				var br11 = document.getElementById("br11");
				if(uns_sickSum>0){
					checkBox11.style.display = "initial";
					br11.style.display = "initial";
				}
				else{
					checkBox11.style.display = "none";
					br11.style.display = "none";
				}
				
				var checkBox12 = document.getElementById("checkBox12");
				var br12 = document.getElementById("br12");
				if(fam_paySum>0){
					checkBox12.style.display = "initial";
					br12.style.display = "initial";
				}
				else{
					checkBox12.style.display = "none";
					br12.style.display = "none";
				}
				
				var checkBox13 = document.getElementById("checkBox13");
				var br13 = document.getElementById("br13");
				if(uns_familySum>0){
					checkBox13.style.display = "initial";
					br13.style.display = "initial";
				}
				else{
					checkBox13.style.display = "none";
					br13.style.display = "none";
				}
				
				var checkBox14 = document.getElementById("checkBox14");
				var br14 = document.getElementById("br14");
				if(ber_paySum>0){
					checkBox14.style.display = "initial";
					br14.style.display = "initial";
				}
				else{
					checkBox14.style.display = "none";
					br14.style.display = "none";
				}
				
				var checkBox15 = document.getElementById("checkBox15");
				var br15 = document.getElementById("br15");
				if(uns_berSum>0){
					checkBox15.style.display = "initial";
					br15.style.display = "initial";
				}
				else{
					checkBox15.style.display = "none";
					br15.style.display = "none";
				}
				
				var checkBox16 = document.getElementById("checkBox16");
				var br16 = document.getElementById("br16");
				if(comp_paySum>0){
					checkBox16.style.display = "initial";
					br16.style.display = "initial";
				}
				else{
					checkBox16.style.display = "none";
					br16.style.display = "none";
				}
				
				var checkBox17 = document.getElementById("checkBox17");
				var br17 = document.getElementById("br17");
				if(uns_compSum>0){
					checkBox17.style.display = "initial";
					br17.style.display = "initial";
				}
				else{
					checkBox17.style.display = "none";
					br17.style.display = "none";
				}
				
				var checkBox18 = document.getElementById("checkBox18");
				var br18 = document.getElementById("br18");
				if(backPay_Sum>0){
					checkBox18.style.display = "initial";
					br18.style.display = "initial";
				}
				else{
					checkBox18.style.display = "none";
					br18.style.display = "none";
				}
				
				var checkBox19 = document.getElementById("checkBox19");
				var br19 = document.getElementById("br19");
				if(SSP_Sum>0){
					checkBox19.style.display = "initial";
					br19.style.display = "initial";
				}
				else{
					checkBox19.style.display = "none";
					br19.style.display = "none";
				}
				
				var checkBox20 = document.getElementById("checkBox20");
				var br20 = document.getElementById("br20");
				if(SPP_Sum>0){
					checkBox20.style.display = "initial";
					br20.style.display = "initial";
				}
				else{
					checkBox20.style.display = "none";
					br20.style.display = "none";
				}
				
				var checkBox21 = document.getElementById("checkBox21");
				var br21 = document.getElementById("br21");
				if(pieceWorkSum>0){
					checkBox21.style.display = "initial";
					br21.style.display = "initial";
				}
				else{
					checkBox21.style.display = "none";
					br21.style.display = "none";
				}
				
				var checkBox22 = document.getElementById("checkBox22");
				var br22 = document.getElementById("br22");
				if(sundayExtraPaySum>0){
					checkBox22.style.display = "initial";
					br22.style.display = "initial";
				}
				else{
					checkBox22.style.display = "none";
					br22.style.display = "none";
				}
				
				var checkBox23 = document.getElementById("checkBox23");
				var br23 = document.getElementById("br23");
				if(saturdayExtraPaySum>0){
					checkBox23.style.display = "initial";
					br23.style.display = "initial";
				}
				else{
					checkBox23.style.display = "none";
					br23.style.display = "none";
				}
				
				var checkBox24 = document.getElementById("checkBox24");
				var br24 = document.getElementById("br24");
				if(add_paySum>0){
					checkBox24.style.display = "initial";
					br24.style.display = "initial";
				}
				else{
					checkBox24.style.display = "none";
					br24.style.display = "none";
				}
				
				var checkBox25 = document.getElementById("checkBox25");
				var br25 = document.getElementById("br25");
				if(add_pay2Sum>0){
					checkBox25.style.display = "initial";
					br25.style.display = "initial";
				}
				else{
					checkBox25.style.display = "none";
					br25.style.display = "none";
				}
				
				var checkBox26 = document.getElementById("checkBox26");
				var br26 = document.getElementById("br26");
				if(add_pay3Sum>0){
					checkBox26.style.display = "initial";
					br26.style.display = "initial";
				}
				else{
					checkBox26.style.display = "none";
					br26.style.display = "none";
				}
				var checkBox27 = document.getElementById("checkBox27");
				var br27 = document.getElementById("br27");
				if(paybackSum>0){
					checkBox27.style.display = "initial";
					br27.style.display = "initial";
				}
				else{
					checkBox27.style.display = "none";
					br27.style.display = "none";
				}
				var checkBox28 = document.getElementById("checkBox28");
				var br28 = document.getElementById("br28");
				if(salarySum>0){
					checkBox28.style.display = "initial";
					br28.style.display = "initial";
				}
				else{
					checkBox28.style.display = "none";
					br28.style.display = "none";
				}
				var checkBox29 = document.getElementById("checkBox29");
				var br29 = document.getElementById("br29");
				if(SAPSum>0){
					checkBox29.style.display = "initial";
					br29.style.display = "initial";
				}
				else{
					checkBox29.style.display = "none";
					br29.style.display = "none";
				}
				var checkBox30 = document.getElementById("checkBox30");
				var br30 = document.getElementById("br30");
				if(bonusSum>0){
					checkBox30.style.display = "initial";
					br30.style.display = "initial";
				}
				else{
					checkBox30.style.display = "none";
					br30.style.display = "none";
				}
				var checkBox31 = document.getElementById("checkBox31");
				var br31 = document.getElementById("br31");
				if(commissionsSum>0){
					checkBox31.style.display = "initial";
					br31.style.display = "initial";
				}
				else{
					checkBox31.style.display = "none";
					br31.style.display = "none";
				}
				
				//jei bent viena is verciu didesne uz 0, parodome backPayCalculator div
				for (i=1;i<32;i++)
				{
					var inputAmount = document.getElementById("inputAmount"+i).value;
					if (inputAmount>0)
					{
						var backPayCalculator = document.getElementById("backPayCalculator");
						backPayCalculator.style.display = "initial";
						break;
					}
				}
				
			}
		}
	}
	request.send(str);
	//document.getElementById("closeError").setAttribute("class", "errorTitleHide");
	document.getElementById("backPayCalculatorDivResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("backPayCalculatorDivResponse").innerHTML = "Loading Payments...";
}
function getFormValues2()
{
	var backPayRate = document.getElementById("backPayRate").value 
	
	str = 'backPayRate='+backPayRate+'&';
	
	for (i=1;i<32; i++)
	{
		var checkBoxValue = document.getElementById("checkBox"+i).checked;
		var checkBox = "checkBox"+i;
		
		var inputAmountValue = document.getElementById("inputAmount"+i).value;
		var inputAmount = "inputAmount"+i;
		
		str+= checkBox+'='+checkBoxValue+'&'+inputAmount+'='+inputAmountValue+'&';
	}
	
	//var panel = document.getElementById("panel").innerHTML = str;
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
	var url = "javascript/ajax/backpaycalculation.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccessBP = document.getElementById("backPayCalculatorDivResponse2");
			var backPayAmountInput = document.getElementById("backPayAmount");
			var totalAmountForBackPayInput = document.getElementById("totalAmountForBackPay");
			
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
					submitSuccessBP.innerHTML = 'Back Pay Calculated!';
					setTimeout(function(){submitSuccessBP.innerHTML=" ";},1500);
					
					totalAmountForBackPay = response.totalAmountForBackPay;
					backPayAmount = response.backPayAmount;
					
					backPayAmountInput.value = backPayAmount+' £' ;
					totalAmountForBackPayInput.value = totalAmountForBackPay+' £' ;
			}
		}
	}
	request.send(str);
	//document.getElementById("closeError").setAttribute("class", "errorTitleHide");
	document.getElementById("backPayCalculatorDivResponse2").setAttribute("class", "submitSuccessBP");
	document.getElementById("backPayCalculatorDivResponse2").innerHTML = "Calculating Back Pay...";
}

function compareStartEndDates(backPayStartYearValue, backPayStartMonthValue, backPayStartDayValue, backPayEndYearValue, backPayEndMonthValue, backPayEndDayValue){
	
	var backPayStartDate = backPayStartYearValue+'-'+backPayStartMonthValue+'-'+backPayStartDayValue;
	var backPayStartDateMSSincEpoch = new Date(backPayStartDate);
	
	var backPayEndDate = backPayEndYearValue+'-'+backPayEndMonthValue+'-'+backPayEndDayValue;
	var backPayEndDateMSSincEpoch  = new Date (backPayEndDate);

	var submitSuccess = document.getElementById("backPayCalculatorDivResponse");
	if(backPayEndDateMSSincEpoch<=backPayStartDateMSSincEpoch)
	{
		
		submitSuccess.innerHTML = "Error! Touch dismiss.<hr> "
		submitSuccess.innerHTML += 'Back Pay start date cannot be greater or equal to end date!';
		submitSuccess.removeAttribute("class");
		submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
		//alert ("Back Pay start date cannot be greater or equal to end date!")
		backPayEndMonth.setAttribute("class", "invalidForm");
		backPayEndDay.setAttribute("class", "invalidForm");
		backPayEndYear.setAttribute("class", "invalidForm");
		return false;
	}
	else{
		backPayEndMonth.removeAttribute("class");
		backPayEndDay.removeAttribute("class");
		backPayEndYear.removeAttribute("class");
		
		ajaxPost();
	}
	
}

//---------------day statistics
function showBackPayInfo() {
	var backPayInfoHide = document.getElementById("backPayInfoHide");
	var backPayInfoShow = document.getElementById("backPayInfoShow");
	var backPayInfo = document.getElementById("backPayInfo");
	backPayInfoHide.style.visibility = "visible"; //parodome Hide info mygtuka
	backPayInfoShow.style.visibility = "hidden"; // paslepiame show info mygtuka
	backPayInfo.style.visibility = "visible"; // parodome info puslapi

}
function hideBackPayInfo() {
	var backPayInfoHide = document.getElementById("backPayInfoHide");
	var backPayInfoShow = document.getElementById("backPayInfoShow");
	var backPayInfo = document.getElementById("backPayInfo");
	backPayInfoHide.style.visibility = "hidden"; //paslepiame Hide info mygtuka
	backPayInfoShow.style.visibility = "visible" // parodome show info mygtuka
	backPayInfo.style.visibility = "hidden"; // paslepiame info puslapi
}
	
function hideErrorMessage()
{
	var backPayCalculatorDivResponse = document.getElementById("backPayCalculatorDivResponse");
	backPayCalculatorDivResponse.innerHTML = " ";
	backPayCalculatorDivResponse.setAttribute("class", "submitSuccessBP");
	
	var backPayCalculatorDivResponse2 = document.getElementById("backPayCalculatorDivResponse2");
	backPayCalculatorDivResponse2.innerHTML = " ";
	backPayCalculatorDivResponse2.setAttribute("class", "submitSuccessBP");
	
}
function start (){
	generateStartDay();
	generateEndDay();
	generateCheckBoxes();
	generatePaymentsInput();
	
	var backPayCalculatorSubmitButton = document.getElementById("backPayCalculatorSubmitButton");
	backPayCalculatorSubmitButton.onclick = startDateChecker;
	
	var backPayCalculatorSubmitButton2 = document.getElementById("backPayCalculatorSubmitButton2");
	backPayCalculatorSubmitButton2.onclick = ajaxPost2;
	
	var backPayInfoShow = document.getElementById("backPayInfoShow");
	backPayInfoShow.onclick = showBackPayInfo;
	var backPayInfoHide = document.getElementById("backPayInfoHide");
	backPayInfoHide.onclick = hideBackPayInfo;
	
	var backPayCalculatorDivResponse = document.getElementById("backPayCalculatorDivResponse");
	backPayCalculatorDivResponse.onclick = hideErrorMessage;
	
	var backPayCalculatorDivResponse2 = document.getElementById("backPayCalculatorDivResponse2");
	backPayCalculatorDivResponse2.onclick = hideErrorMessage;
	
}
document.addEventListener("DOMContentLoaded",start,false);