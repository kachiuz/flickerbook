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
		submitSuccess.innerHTML += 'Invalid start year declared!';
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
		submitSuccess.innerHTML += 'Invalid start month declared!';
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
			submitSuccess.innerHTML += 'Invalid start day declared!';
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
		submitSuccess.innerHTML += 'Invalid start month and day declared!';
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
		submitSuccess.innerHTML += 'Invalid end year declared!';
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
		submitSuccess.innerHTML += 'Invalid end month declared!';
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
			submitSuccess.innerHTML += 'Invalid end day declared!';
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
		submitSuccess.innerHTML += 'Invalid end month and day declared!';
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
	
	var employerValue = document.getElementById("employer").value;
	var jobTitleValue = document.getElementById("jobTitle").value;
	
	str = 'backPayStartDate='+backPayStartDate+'&'+'backPayEndDate='+backPayEndDate+'&';
	str +='employer='+employerValue+'&'+'jobTitle='+jobTitleValue+'&'
	
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
				submitSuccessBP.innerHTML = 'Totals Loaded!';
				setTimeout(function(){submitSuccessBP.innerHTML=" ";},1500);
			//------------------back pay amounts---------------------------------------------------------//
				var backPayPaymentsAmountDiv = document.getElementById("backPayPaymentsAmountDiv");
				
				var basic_paySum = Number(response.basicPaySum);
				var uns_premSum = Number(response.uns_premSum);
				var ot1_paySum = Number(response.ot1_paySum);
				var ot2_paySum = Number(response.ot2_paySum);
				var hol_paySum = Number(response.hol_paySum);
				var enhol_paySum = Number(response.enhol_paySum);
				var uns_holSum = Number(response.uns_holSum);
				var bhol_paySum = Number(response.bhol_paySum);
				var bhol_bonusSum = Number(response.bhol_bonusSum);
				var sick_paySum = Number(response.sick_paySum);
				var uns_sickSum = Number(response.uns_sickSum);
				var fam_paySum = Number(response.fam_paySum);
				var uns_familySum = Number(response.uns_familySum);
				var ber_paySum = Number(response.ber_paySum);
				var uns_berSum = Number(response.uns_berSum);
				var comp_paySum = Number(response.comp_paySum);
				var uns_compSum = Number(response.uns_compSum);
				var add_paySum = Number(response.add_paySum);
				var backPay_Sum = Number(response.backPay_Sum);
				
				var SSP_Sum = Number(response.SSP_Sum);
				var SPP_Sum = Number(response.SPP_Sum);
				var pieceWorkSum = Number(response.pieceWorkSum);
				var sundayExtraPaySum = Number(response.sundayExtraPaySum);
				var saturdayExtraPaySum = Number(response.saturdayExtraPaySum);
				var add_pay2Sum = Number(response.add_pay2Sum);
				var add_pay3Sum = Number(response.add_pay3Sum);
				var paybackSum = Number(response.paybackSum);
				var gross_paySum = Number(response.gross_paySum);
				
				var SAPSum = Number(response.SAPSum);
				var salarySum = Number(response.salarySum);
				var bonusSum = Number(response.bonusSum);
				var commissionsSum = Number(response.commissionsSum);
						
				
				backPayPaymentsAmountDiv.innerHTML = basic_paySum.toFixed(2)+'<br>';
				if(salarySum>0){backPayPaymentsAmountDiv.innerHTML +=salarySum.toFixed(2)+'<br>';}
				if(uns_premSum>0){backPayPaymentsAmountDiv.innerHTML +=uns_premSum.toFixed(2)+'<br>';}
				if(ot1_paySum>0){backPayPaymentsAmountDiv.innerHTML +=ot1_paySum.toFixed(2)+'<br>';}
				if(ot2_paySum>0){backPayPaymentsAmountDiv.innerHTML +=ot2_paySum.toFixed(2)+'<br>';}
				if(hol_paySum>0){backPayPaymentsAmountDiv.innerHTML +=hol_paySum.toFixed(2)+'<br>';}
				if(enhol_paySum>0){backPayPaymentsAmountDiv.innerHTML +=enhol_paySum.toFixed(2)+'<br>';}
				if(uns_holSum>0){backPayPaymentsAmountDiv.innerHTML +=uns_holSum.toFixed(2)+'<br>';}
				if(bhol_paySum>0){backPayPaymentsAmountDiv.innerHTML +=bhol_paySum.toFixed(2)+'<br>';}
				if(bhol_bonusSum>0){backPayPaymentsAmountDiv.innerHTML +=bhol_bonusSum.toFixed(2)+'<br>';}
				if(sick_paySum>0){backPayPaymentsAmountDiv.innerHTML +=sick_paySum.toFixed(2)+'<br>';}
				if(uns_sickSum>0){backPayPaymentsAmountDiv.innerHTML +=uns_sickSum.toFixed(2)+'<br>';}
				if(fam_paySum>0){backPayPaymentsAmountDiv.innerHTML +=fam_paySum.toFixed(2)+'<br>';}
				if(uns_familySum>0){backPayPaymentsAmountDiv.innerHTML +=uns_familySum.toFixed(2)+'<br>';}
				if(ber_paySum>0){backPayPaymentsAmountDiv.innerHTML +=ber_paySum.toFixed(2)+'<br>';}
				if(uns_berSum>0){backPayPaymentsAmountDiv.innerHTML +=uns_berSum.toFixed(2)+'<br>';}
				if(comp_paySum>0){backPayPaymentsAmountDiv.innerHTML +=comp_paySum.toFixed(2)+'<br>';}
				if(uns_compSum>0){backPayPaymentsAmountDiv.innerHTML +=uns_compSum.toFixed(2)+'<br>';}
				if(backPay_Sum>0){backPayPaymentsAmountDiv.innerHTML +=backPay_Sum.toFixed(2)+'<br>';}
				if(SSP_Sum>0){backPayPaymentsAmountDiv.innerHTML +=SSP_Sum.toFixed(2)+'<br>';}
				if(SPP_Sum>0){backPayPaymentsAmountDiv.innerHTML +=SPP_Sum.toFixed(2)+'<br>';}
				if(SAPSum>0){backPayPaymentsAmountDiv.innerHTML +=SAPSum.toFixed(2)+'<br>';}
				if(pieceWorkSum>0){backPayPaymentsAmountDiv.innerHTML +=pieceWorkSum.toFixed(2)+'<br>';}
				if(bonusSum>0){backPayPaymentsAmountDiv.innerHTML +=bonusSum.toFixed(2)+'<br>';}
				if(commissionsSum>0){backPayPaymentsAmountDiv.innerHTML +=commissionsSum.toFixed(2)+'<br>';}
				if(sundayExtraPaySum>0){backPayPaymentsAmountDiv.innerHTML +=sundayExtraPaySum.toFixed(2)+'<br>';}
				if(saturdayExtraPaySum>0){backPayPaymentsAmountDiv.innerHTML +=saturdayExtraPaySum.toFixed(2)+'<br>';}
				if(add_paySum>0){backPayPaymentsAmountDiv.innerHTML +=add_paySum.toFixed(2)+'<br>';}
				if(add_pay2Sum>0){backPayPaymentsAmountDiv.innerHTML +=add_pay2Sum.toFixed(2)+'<br>';}
				if(add_pay3Sum>0){backPayPaymentsAmountDiv.innerHTML +=add_pay3Sum.toFixed(2)+'<br>';}
				if(paybackSum>0){backPayPaymentsAmountDiv.innerHTML +=paybackSum.toFixed(2)+'<br>';}
				if(gross_paySum>0){backPayPaymentsAmountDiv.innerHTML +='<hr><b>'+gross_paySum.toFixed(2)+'<b><br>';}
				
				
				
				//-------------------------back Pay names-----------------------------------------//
				var backPayPaymentsNamesDiv = document.getElementById("backPayPaymentsNamesDiv");
				//backPayPaymentsNamesDiv.innerHTML = " ";
				
				backPayPaymentsNamesDiv.innerHTML = 'Basic Pay<br>';
				if(salarySum>0){backPayPaymentsNamesDiv.innerHTML +='Salary Pay<br>';}
				if(uns_premSum>0){backPayPaymentsNamesDiv.innerHTML +='Unsocial Basic Pay<br>';}
				if(ot1_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Overtime 1 Pay<br>';}
				if(ot2_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Overtime 2 Pay<br>';}
				if(hol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Holiday Pay <br>';}
				if(enhol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Enhanced Holiday Pay<br>';}
				if(uns_holSum>0){backPayPaymentsNamesDiv.innerHTML +='Unsocial Holiday Pay<br>';}
				if(bhol_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Bank Holiday Pay<br>';}
				if(bhol_bonusSum>0){backPayPaymentsNamesDiv.innerHTML +='Bank Holiday Bonuses<br>';}
				if(sick_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Sickness Pay<br>';}
				if(uns_sickSum>0){backPayPaymentsNamesDiv.innerHTML +='Unsocial Sick Pay<br>';}
				if(fam_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Parental Pay<br>';}
				if(uns_familySum>0){backPayPaymentsNamesDiv.innerHTML +='Unsocial Parental Pay<br>';}
				if(ber_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Bereavement Pay<br>';}
				if(uns_berSum>0){backPayPaymentsNamesDiv.innerHTML +='Uns Bereavement Pay<br>';}
				if(comp_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Compassionate Pay<br>';}
				if(uns_compSum>0){backPayPaymentsNamesDiv.innerHTML +='Unsocial Comp. Pay<br>';}
				if(backPay_Sum>0){backPayPaymentsNamesDiv.innerHTML +='Previuos back pays<br>';}
				if(SSP_Sum>0){backPayPaymentsNamesDiv.innerHTML +='SSP Pay<br>';}
				if(SPP_Sum>0){backPayPaymentsNamesDiv.innerHTML +='SPP Pay<br>';}
				if(SAPSum>0){backPayPaymentsNamesDiv.innerHTML +='SAP Pay<br>';}
				if(pieceWorkSum>0){backPayPaymentsNamesDiv.innerHTML +='Piece Work Pay<br>';}
				if(bonusSum>0){backPayPaymentsNamesDiv.innerHTML +='Bonuses Pay<br>';}
				if(commissionsSum>0){backPayPaymentsNamesDiv.innerHTML +='Commissions Pay<br>';}
				if(sundayExtraPaySum>0){backPayPaymentsNamesDiv.innerHTML +='Sunday Bonuses<br>';}
				if(saturdayExtraPaySum>0){backPayPaymentsNamesDiv.innerHTML +='Saturday Bonuses<br>';}
				if(add_paySum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Payment 1<br>';}
				if(add_pay2Sum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Payment 2<br>';}
				if(add_pay3Sum>0){backPayPaymentsNamesDiv.innerHTML +='Add. Payment 3';}
				if(paybackSum>0){backPayPaymentsNamesDiv.innerHTML +='Prev. Back Pays';}
				if(gross_paySum>0){backPayPaymentsNamesDiv.innerHTML +='<hr><b>Total Gross Pay</b>';}
				
				
				
				//-------------------------back Pay Units-----------------------------------------//
				var backPayPaymentsUnitsDiv = document.getElementById("backPayPaymentsUnitsDiv");
				
				var basicHoursSum = Number(response.basicHoursSum);
				var ot1_unitsSum = Number(response.ot1_unitsSum);
				var ot2_unitsSum = Number(response.ot2_unitsSum);
				var hol_unitsSum = Number(response.hol_unitsSum);
				var enhol_unitsSum = Number(response.enhol_unitsSum);
				var bhol_unitsSum = Number(response.bhol_unitsSum);
				var sick_unitsSum = Number(response.sick_unitsSum);
				var fam_unitsSum = Number(response.fam_unitsSum);
				var ber_unitsSum = Number(response.ber_unitsSum);
				var comp_unitsSum = Number(response.comp_unitsSum);
				var saturdayHoursSum = Number(response.saturdayHoursSum);
				var sundayHoursSum = Number(response.sundayHoursSum);
				var uns_prem_unSum = Number(response.uns_prem_unSum);
				var uns_hol_unSum = Number(response.uns_hol_unSum);
				var uns_sick_unSum = Number(response.uns_sick_unSum);
				var uns_family_unSum = Number(response.uns_family_unSum);
				var uns_ber_unSum = Number(response.uns_ber_unSum);
				var uns_comp_unSum = Number(response.uns_comp_unSum);
				
				backPayPaymentsUnitsDiv.innerHTML = basicHoursSum.toFixed(2)+'<br>';
				if(salarySum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(uns_premSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_prem_unSum.toFixed(2)+'<br>';}
				if(ot1_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ot1_unitsSum.toFixed(2)+'<br>';}
				if(ot2_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ot2_unitsSum.toFixed(2)+'<br>';}
				if(hol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=hol_unitsSum.toFixed(2)+'<br>';}
				if(enhol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=enhol_unitsSum.toFixed(2)+'<br>';}
				if(uns_holSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_hol_unSum.toFixed(2)+'<br>';}
				if(bhol_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=bhol_unitsSum.toFixed(2)+'<br>';}
				if(bhol_bonusSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(sick_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=sick_unitsSum.toFixed(2)+'<br>';}
				if(uns_sickSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_sick_unSum.toFixed(2)+'<br>';}
				if(fam_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=fam_unitsSum.toFixed(2)+'<br>';}
				if(uns_familySum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_family_unSum.toFixed(2)+'<br>';}
				if(ber_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=ber_unitsSum.toFixed(2)+'<br>';}
				if(uns_berSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_ber_unSum.toFixed(2)+'<br>';}
				if(comp_paySum>0){backPayPaymentsUnitsDiv.innerHTML +=comp_unitsSum.toFixed(2)+'<br>';}
				if(uns_compSum>0){backPayPaymentsUnitsDiv.innerHTML +=uns_comp_unSum.toFixed(2)+'<br>';}
				if(backPay_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SSP_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SPP_Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(SAPSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(pieceWorkSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(bonusSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(commissionsSum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(sundayExtraPaySum>0){backPayPaymentsUnitsDiv.innerHTML +=sundayHoursSum.toFixed(2)+'<br>';}
				if(saturdayExtraPaySum>0){backPayPaymentsUnitsDiv.innerHTML +=saturdayHoursSum.toFixed(2)+'<br>';}
				if(add_paySum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(add_pay2Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-<br>';}
				if(add_pay3Sum>0){backPayPaymentsUnitsDiv.innerHTML +='-';}
				if(paybackSum>0){backPayPaymentsUnitsDiv.innerHTML +='-';}
				if(gross_paySum>0){backPayPaymentsUnitsDiv.innerHTML +='<hr>-';}
				//-----------------------------------------------------deductions-----------------------------//
				var totalsDeductionsAmountDiv = document.getElementById("totalsDeductionsAmountDiv");
				var taxSum = Number(response.taxSum);
				var NISum = Number(response.NISum);
				var union_deSum = Number(response.union_deSum);
				var pensionSum = Number(response.pensionSum);
				var other_de = Number(response.other_de);
				var netPaySum = Number(response.netPaySum);
				var pensionEmpSum = Number(response.pensionEmpSum);
				var companyLoanSum = Number(response.companyLoanSum);
				var studentLoanDeductionSum = Number(response.studentLoanDeductionSum);
				var add_deSum2 = Number(response.add_deSum2);
				var add_deSum3 = Number(response.add_deSum3);
				
				totalsDeductionsAmountDiv.innerHTML = taxSum.toFixed(2)+'<br>'+NISum.toFixed(2);
				if (union_deSum>0 || pensionSum>0|| pensionEmpSum>0|| companyLoanSum>0||studentLoanDeductionSum>0||other_de>0||
				add_deSum2>0||add_deSum3>0) {totalsDeductionsAmountDiv.innerHTML += '<hr>'}
				if(union_deSum>0){totalsDeductionsAmountDiv.innerHTML +=union_deSum.toFixed(2)+'<br>';}
				if(pensionSum>0){totalsDeductionsAmountDiv.innerHTML +=pensionSum.toFixed(2)+'<br>';}
				if(pensionEmpSum>0){totalsDeductionsAmountDiv.innerHTML +=pensionEmpSum.toFixed(2)+'<br>';}
				if(companyLoanSum>0){totalsDeductionsAmountDiv.innerHTML +=companyLoanSum.toFixed(2)+'<br>';}
				if(studentLoanDeductionSum>0){totalsDeductionsAmountDiv.innerHTML +=studentLoanDeductionSum.toFixed(2)+'<br>';}
				if(other_de>0){totalsDeductionsAmountDiv.innerHTML +=other_de.toFixed(2)+'<br>';}
				if(add_deSum2>0){totalsDeductionsAmountDiv.innerHTML +=add_deSum2.toFixed(2)+'<br>';}
				if(add_deSum3>0){totalsDeductionsAmountDiv.innerHTML +=add_deSum3.toFixed(2)+'<br>';}
				totalsDeductionsAmountDiv.innerHTML +='<hr><b>'+netPaySum.toFixed(2)+'</b>';
				
				var totalsDeductionsNamesDiv = document.getElementById("totalsDeductionsNamesDiv");
				totalsDeductionsNamesDiv.innerHTML ='Total Tax<br>Total National Insurance';
				if (union_deSum>0 || pensionSum>0|| pensionEmpSum>0|| companyLoanSum>0||studentLoanDeductionSum>0||other_de>0||
				add_deSum2>0||add_deSum3>0) {totalsDeductionsNamesDiv.innerHTML += '<hr>'}
				if(union_deSum>0){totalsDeductionsNamesDiv.innerHTML +='Total Union Deductions<br>';}
				if(pensionSum>0){totalsDeductionsNamesDiv.innerHTML +='Total Pension Deductions<br>';}
				if(pensionEmpSum>0){totalsDeductionsNamesDiv.innerHTML +='Total Employer Pension Con.<br>';}
				if(companyLoanSum>0){totalsDeductionsNamesDiv.innerHTML +='Total Company Loan<br>';}
				if(studentLoanDeductionSum>0){totalsDeductionsNamesDiv.innerHTML +='Total Student Loan<br>';}
				if(other_de>0){totalsDeductionsNamesDiv.innerHTML +='Add. Deduction 1<br>';}
				if(add_deSum2>0){totalsDeductionsNamesDiv.innerHTML +='Add. Deduction 2<br>';}
				if(add_deSum3>0){totalsDeductionsNamesDiv.innerHTML +='Add. Deduction 3<br>';}
				totalsDeductionsNamesDiv.innerHTML +='<hr><b>Total Net Pay</b>';
				
				//-----------------------------------------------------hours-----------------------------//

				totalHours = Number(response.totalHours);
				basicHoursSum = Number(response.basicHoursSum);
				uns_prem_unSum = Number(response.uns_prem_unSum);
				ot1_unitsSum = Number(response.ot1_unitsSum);
				ot2_unitsSum = Number(response.ot2_unitsSum);
				totalPaidHours = ot1_unitsSum + ot2_unitsSum + basicHoursSum;
				unpaidBreaksLength = totalHours - totalPaidHours;
				hol_unitsSum = Number(response.hol_unitsSum);
				enhol_unitsSum = Number(response.enhol_unitsSum);
				uns_hol_unSum = Number(response.uns_hol_unSum);
				bhol_unitsSum = Number(response.bhol_unitsSum);
				saturdayHoursSum = Number(response.saturdayHoursSum);
				sundayHoursSum = Number(response.sundayHoursSum);
				uns_sick_unSum = Number(response.uns_sick_unSum);
				sick_unitsSum = Number(response.sick_unitsSum);
				uns_family_unSum = Number(response.uns_family_unSum);
				fam_unitsSum = Number(response.fam_unitsSum);
				uns_ber_unSum  = Number(response.uns_ber_unSum);
				ber_unitsSum = Number(response.ber_unitsSum);
				comp_unitsSum = Number(response.comp_unitsSum);
				uns_comp_unSum = Number(response.uns_comp_unSum);
				
				
				var totalsHoursAmountDiv = document.getElementById("totalsHoursAmountDiv");
				totalsHoursAmountDiv.innerHTML= totalHours.toFixed(2)+' <br>';
				if (totalPaidHours>0){totalsHoursAmountDiv.innerHTML+= totalPaidHours.toFixed(2)+' <br>';}
				if (unpaidBreaksLength>0){totalsHoursAmountDiv.innerHTML+= unpaidBreaksLength.toFixed(2)+' <br>';}

				if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){totalsHoursAmountDiv.innerHTML+= '<hr>';}
				totalsHoursAmountDiv.innerHTML+= basicHoursSum.toFixed(2)+' <br>';
				if (uns_prem_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_prem_unSum.toFixed(2)+' <br>';}		
				if (ot1_unitsSum>0){totalsHoursAmountDiv.innerHTML+= ot1_unitsSum.toFixed(2)+' <br>';}
				if (ot2_unitsSum>0){totalsHoursAmountDiv.innerHTML+= ot2_unitsSum.toFixed(2)+' <br>';}
				
				if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){totalsHoursAmountDiv.innerHTML+= '<hr>';}
				if (hol_unitsSum>0){totalsHoursAmountDiv.innerHTML+= hol_unitsSum.toFixed(2)+' <br>';}
				if (enhol_unitsSum>0){totalsHoursAmountDiv.innerHTML+= enhol_unitsSum.toFixed(2)+' <br>';}
				if (uns_hol_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_hol_unSum.toFixed(2)+' <br>';}
				if (bhol_unitsSum>0){totalsHoursAmountDiv.innerHTML+= bhol_unitsSum.toFixed(2)+' <br>';}
				
				if (saturdayHoursSum >0 || sundayHoursSum>0){totalsHoursAmountDiv.innerHTML+= '<hr>';}
				if (saturdayHoursSum>0){totalsHoursAmountDiv.innerHTML+= saturdayHoursSum.toFixed(2)+' <br>';}
				if (sundayHoursSum>0){totalsHoursAmountDiv.innerHTML+= sundayHoursSum.toFixed(2)+' <br>';}	
				
				if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){totalsHoursAmountDiv.innerHTML+= '<hr>';}
				if (uns_sick_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_sick_unSum.toFixed(2)+' <br>';}
				if (sick_unitsSum>0){totalsHoursAmountDiv.innerHTML+= sick_unitsSum.toFixed(2)+' <br>';}
				if (uns_family_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_family_unSum.toFixed(2)+' <br>';}
				if (fam_unitsSum>0){totalsHoursAmountDiv.innerHTML+= fam_unitsSum.toFixed(2)+' <br>';}
				
				if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){totalsHoursAmountDiv.innerHTML+= '<hr>';}
				if (uns_ber_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_ber_unSum.toFixed(2)+' <br>';}
				if (ber_unitsSum>0){totalsHoursAmountDiv.innerHTML+= ber_unitsSum.toFixed(2)+' <br>';}
				if (uns_comp_unSum>0){totalsHoursAmountDiv.innerHTML+= uns_comp_unSum.toFixed(2)+' <br>';}
				if (comp_unitsSum>0){totalsHoursAmountDiv.innerHTML+= comp_unitsSum.toFixed(2)+' <br>';}
						
				var totalsHoursNamesDiv = document.getElementById("totalsHoursNamesDiv");
				totalsHoursNamesDiv.innerHTML= 'Total Hours Spent At Work<br>';
				if (totalPaidHours>0){totalsHoursNamesDiv.innerHTML+= 'Total Paid Hours Spent At Work<br>';}
				if (unpaidBreaksLength>0){totalsHoursNamesDiv.innerHTML+= 'Total Unpaid Break Hours<br>';}
				
				if (basicHoursSum >0 || uns_prem_unSum>0 || ot1_unitsSum>0|| ot2_unitsSum>0){totalsHoursNamesDiv.innerHTML+= '<hr>';}
				totalsHoursNamesDiv.innerHTML+= 'Total Basic Hours<br>';
				if (uns_prem_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Basic Hours<br>';}
				if (ot1_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Overtime 1 Hours<br>';}
				if (ot2_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Overtime 2 Hours<br>';}
				
				if (hol_unitsSum >0 || enhol_unitsSum>0 || uns_hol_unSum>0|| bhol_unitsSum>0){totalsHoursNamesDiv.innerHTML+= '<hr>';}
				if (hol_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Holiday Hours<br>';}
				if (enhol_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Enhanced Holiday Hours<br>';}
				if (uns_hol_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Holiday Hours<br>';}
				if (bhol_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Bank Holiday Hours<br>';}
				
				if (saturdayHoursSum >0 || sundayHoursSum>0){totalsHoursNamesDiv.innerHTML+= '<hr>';}
				if (saturdayHoursSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Saturday Hours<br>';}
				if (sundayHoursSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Sunday Hours<br>';}
				
				if (uns_sick_unSum >0 || sick_unitsSum>0 || uns_family_unSum>0|| fam_unitsSum>0){totalsHoursNamesDiv.innerHTML+= '<hr>';}
				if (uns_sick_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Sickness Hours<br>';}
				if (sick_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Paid Sickness Hours<br>';}
				if (uns_family_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Parental Hours<br>';}
				if (fam_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Parental Leave Hours<br>';}
				
				if (uns_ber_unSum >0 || ber_unitsSum>0 || comp_unitsSum>0|| uns_comp_unSum>0){totalsHoursNamesDiv.innerHTML+= '<hr>';}
				if (uns_ber_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Bereav. Hours<br>';}
				if (ber_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Bereavement Leave Hours<br>';}
				if (uns_comp_unSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Unsocial Compass. Hours<br>';}
				if (comp_unitsSum>0){totalsHoursNamesDiv.innerHTML+= 'Total Compassionate Hours<br>';}
				
				//-----------------------------------------------days-----------------------------------------------//
				
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
				
				//days amounts
				var totalsDaysAmountDiv = document.getElementById("totalsDaysAmountDiv");
				
				totalsDaysAmountDiv.innerHTML= daysIn.toFixed(0);
				if (daysIn<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
				else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
					
				if (daysOff>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysOff.toFixed(0);
					if (daysOff<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysHoliday>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysHoliday.toFixed(0);
					if (daysHoliday<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysHalfInHalfHol>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysHalfInHalfHol.toFixed(0);
					if (daysHalfInHalfHol<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysUnpaidHoliday>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysUnpaidHoliday.toFixed(0);
					if (daysUnpaidHoliday<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
				if (daysInSick>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysInSick.toFixed(0);
					if (daysInSick<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysSickness>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysSickness.toFixed(0);
					if (daysSickness<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysAbsence>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysAbsence.toFixed(0);
					if (daysAbsence<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysParental>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysParental.toFixed(0);
					if (daysParental<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysBereavement>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysBereavement.toFixed(0);
					if (daysBereavement<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysCompassionate>0)
				{
					totalsDaysAmountDiv.innerHTML+= daysCompassionate.toFixed(0);
					if (daysCompassionate<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}
					
				if (daysNotSelected>0){totalsDaysAmountDiv.innerHTML+= daysNotSelected.toFixed(0);
					if (daysNotSelected<=1){totalsDaysAmountDiv.innerHTML+= ' day<br>';}
					else{totalsDaysAmountDiv.innerHTML+= ' days<br>';}
				}	
					
				var totalsDaysNamesDiv = document.getElementById("totalsDaysNamesDiv");
				totalsDaysNamesDiv.innerHTML= 'Days In<br>';
				if (daysOff>0){totalsDaysNamesDiv.innerHTML+= 'Days Off<br>';}
				if (daysHoliday>0){totalsDaysNamesDiv.innerHTML+= 'Holidays<br>';}
				if (daysHalfInHalfHol>0){totalsDaysNamesDiv.innerHTML+= 'Half Days In/Half Holidays<br>';}
				if (daysUnpaidHoliday>0){totalsDaysNamesDiv.innerHTML+= 'Unpaid Holidays<br>';}
				if (daysInSick>0){totalsDaysNamesDiv.innerHTML+= 'Days In/Sickness<br>';}
				if (daysSickness>0){totalsDaysNamesDiv.innerHTML+= 'Days On Sick<br>';}
				if (daysAbsence>0){totalsDaysNamesDiv.innerHTML+= 'Days On Absence<br>';}
				if (daysParental>0){totalsDaysNamesDiv.innerHTML+= 'Parental Leave Days<br>';}
				if (daysBereavement>0){totalsDaysNamesDiv.innerHTML+= 'Bereavement Leave Days<br>';}
				if (daysCompassionate>0){totalsDaysNamesDiv.innerHTML+= 'Compassionate Leave Days<br>';}
				if (daysNotSelected>0){totalsDaysNamesDiv.innerHTML+= 'Days Not Defined<br>';}	
				
				
				var totalsPieChartCheckValue = document.getElementById('totalsPieChartCheck').checked;
				if (totalsPieChartCheckValue == true)
				{
					//add <hr> to bottom
					totalsDaysNamesDiv.innerHTML+= '<hr>';
					totalsDaysAmountDiv.innerHTML+= '<hr>';

					totalsHoursNamesDiv.innerHTML+= '<hr>';
					totalsHoursAmountDiv.innerHTML+= '<hr>';

					totalsDeductionsNamesDiv.innerHTML +='<hr>';
					totalsDeductionsAmountDiv.innerHTML +='<hr>';

					backPayPaymentsUnitsDiv.innerHTML +='<hr>';
					backPayPaymentsNamesDiv.innerHTML += '<hr>';
					backPayPaymentsAmountDiv.innerHTML += '<hr>';
					
					//remove class nodisplay
					paymentsPieChart.setAttribute("class", "chartStyle");
					dayStatisticsPieChart.setAttribute("class", "chartStyle");
					totalsHoursPieChart.setAttribute("class", "chartStyle");
					deductionsPieChart.setAttribute("class", "chartStyle");
					
					google.charts.load('current', {'packages':['corechart']});
					
					//days pie chart
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
					if (basic_paySum >0||uns_premSum>0||uns_holSum >0||uns_sickSum >0||uns_familySum >0||
					uns_berSum >0||uns_compSum >0||ot1_paySum >0||ot2_paySum >0||enhol_paySum >0||hol_paySum >0||
					saturdayExtraPaySum >0||sundayExtraPaySum >0||sick_paySum >0||fam_paySum >0||ber_paySum >0||comp_paySum >0||bhol_paySum >0||
					bhol_bonusSum >0||backPay_Sum >0||pieceWorkSum >0||SSP_Sum >0||SPP_Sum >0||add_paySum >0||add_pay2Sum >0||add_pay3Sum >0||
					SAPSum >0||salarySum >0||bonusSum >0||commissionsSum >0)
					{
						google.charts.setOnLoadCallback(drawChartPayments);
						function drawChartPayments() {

						var data = google.visualization.arrayToDataTable([
							['Type', 'Payments'],
							['Basic Pay', basic_paySum],
							['Uns. Premium', uns_premSum],
							['Uns Prem. Holidays', uns_holSum],
							['Uns Prem. Sickness', uns_sickSum],
							['Uns Prem. Paternal', uns_familySum],
							['Uns Prem. Bereav.', uns_berSum],
							['Uns Prem. Compass.', uns_compSum],
							['Overtime 1 Pay', ot1_paySum],
							['Overtime 2 Pay', ot2_paySum],
							['Enhanced Holiday Pay', enhol_paySum],
							['Holiday Pay', hol_paySum],
							['Saturday Extra Pay', saturdayExtraPaySum],
							['Sunday Extra Pay', sundayExtraPaySum],
							['Sickness Pay', sick_paySum],
							['Paternity Pay', fam_paySum],
							['Bereavement Pay', ber_paySum],
							['Compassionate Pay', comp_paySum],
							['Bank Holiday Pay', bhol_paySum],
							['Bank Holiday Bonus', bhol_bonusSum],
							['Back Pay', backPay_Sum],
							['Piece Work', pieceWorkSum],
							['SSP', SSP_Sum],
							['SPP', SPP_Sum],
							['Add. Payment 1', add_paySum],
							['Add. Payment 2', add_pay2Sum],
							['Add. Payment 3', add_pay3Sum],
							['SAP', SAPSum],
							['Salary', salarySum],
							['Bonus', bonusSum],
							['Commissions', commissionsSum],
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
					
					//deductions pie chart
					if(taxSum>0||NISum>0||union_deSum>0||pensionSum>0||companyLoanSum>0||
					studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
						google.charts.setOnLoadCallback(drawChartYearToDate);
						function drawChartYearToDate() {
						var data = google.visualization.arrayToDataTable([
							['Type', 'Chart'],
							['Tax', taxSum ],
							['NI', NISum ],
							['Union', union_deSum],
							['Pension', pensionSum],
							['Company Loan', companyLoanSum ],
							['Student Loan', studentLoanDeductionSum],
							['Add. Deduction', other_de ],
							['Add. Deduction 2', add_deSum2 ],
							['Add. Deduction 3', add_deSum3 ],
							['Net Pay', netPaySum ],
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

					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
					ber_unitsSum>0||comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Basic Hours', basicHoursSum],
							['Holiday Hours', hol_unitsSum+enhol_unitsSum],
							['Sickness Hours', sick_unitsSum],
							['Parental Hours', fam_unitsSum],
							['Bereavement Hours', ber_unitsSum],
							['Compassionate Hours', comp_unitsSum],
							['Overtime 1 Hours', ot1_unitsSum ],
							['Overtime 2 Hours', ot2_unitsSum],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Total Hours Chart',
							is3D: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};
							var chart = new google.visualization.PieChart(document.getElementById('totalsHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('totalsHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}

					
				}
				
				else{
					//add class nodisplay.
					paymentsPieChart.setAttribute("class", "chartStyle nodisplay");
					dayStatisticsPieChart.setAttribute("class", "chartStyle nodisplay");
					totalsHoursPieChart.setAttribute("class", "chartStyle nodisplay");
					deductionsPieChart.setAttribute("class", "chartStyle nodisplay");
				}
				
			}
		}		
	}
	request.send(str);
	document.getElementById("backPayCalculatorDivResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("backPayCalculatorDivResponse").innerHTML = "Loading Totals...";
}


function compareStartEndDates(backPayStartYearValue, backPayStartMonthValue, backPayStartDayValue, backPayEndYearValue, backPayEndMonthValue, backPayEndDayValue){
	
	var backPayStartDate = backPayStartYearValue+'-'+backPayStartMonthValue+'-'+backPayStartDayValue;
	var backPayStartDateMSSincEpoch = new Date(backPayStartDate);
	
	var backPayEndDate = backPayEndYearValue+'-'+backPayEndMonthValue+'-'+backPayEndDayValue;
	var backPayEndDateMSSincEpoch  = new Date (backPayEndDate);

	var submitSuccess = document.getElementById("backPayCalculatorDivResponse");
	if(backPayEndDateMSSincEpoch<=backPayStartDateMSSincEpoch)
	{
		
		submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> "
		submitSuccess.innerHTML += 'Start date cannot be greater or equal to end date!';
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

function hideErrorMessage()
{
	var backPayCalculatorDivResponse = document.getElementById("backPayCalculatorDivResponse");
	backPayCalculatorDivResponse.innerHTML = " ";
	backPayCalculatorDivResponse.setAttribute("class", "submitSuccessBP");
	
	
}
function start (){
	generateStartDay();
	generateEndDay();
	
	var backPayCalculatorSubmitButton = document.getElementById("backPayCalculatorSubmitButton");
	backPayCalculatorSubmitButton.onclick = startDateChecker;
	
	
	var backPayCalculatorDivResponse = document.getElementById("backPayCalculatorDivResponse");
	backPayCalculatorDivResponse.onclick = hideErrorMessage;
	
}
document.addEventListener("DOMContentLoaded",start,false);

/*
function reloadCharts(){
	str = getFormValues();
	var panel = document.getElementById("panel").innerHTML = str;
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
		request.onreadystatechange = function (){
			if(request.readyState == 4 && request.status == 200){
				var response = JSON.parse(this.responseText);
				
					var basic_paySum = Number(response.basicPaySum);
					var uns_premSum = Number(response.uns_premSum);
					var ot1_paySum = Number(response.ot1_paySum);
					var ot2_paySum = Number(response.ot2_paySum);
					var hol_paySum = Number(response.hol_paySum);
					var enhol_paySum = Number(response.enhol_paySum);
					var uns_holSum = Number(response.uns_holSum);
					var bhol_paySum = Number(response.bhol_paySum);
					var bhol_bonusSum = Number(response.bhol_bonusSum);
					var sick_paySum = Number(response.sick_paySum);
					var uns_sickSum = Number(response.uns_sickSum);
					var fam_paySum = Number(response.fam_paySum);
					var uns_familySum = Number(response.uns_familySum);
					var ber_paySum = Number(response.ber_paySum);
					var uns_berSum = Number(response.uns_berSum);
					var comp_paySum = Number(response.comp_paySum);
					var uns_compSum = Number(response.uns_compSum);
					var add_paySum = Number(response.add_paySum);
					var backPay_Sum = Number(response.backPay_Sum);
					var SSP_Sum = Number(response.SSP_Sum);
					var SPP_Sum = Number(response.SPP_Sum);
					var pieceWorkSum = Number(response.pieceWorkSum);
					var sundayExtraPaySum = Number(response.sundayExtraPaySum);
					var saturdayExtraPaySum = Number(response.saturdayExtraPaySum);
					var add_pay2Sum = Number(response.add_pay2Sum);
					var add_pay3Sum = Number(response.add_pay3Sum);
					var paybackSum = Number(response.paybackSum);
					var gross_paySum = Number(response.gross_paySum);
					var SAPSum = Number(response.SAPSum);
					var salarySum = Number(response.salarySum);
					var bonusSum = Number(response.bonusSum);
					var commissionsSum = Number(response.commissionsSum);
					var basicHoursSum = Number(response.basicHoursSum);
					var ot1_unitsSum = Number(response.ot1_unitsSum);
					var ot2_unitsSum = Number(response.ot2_unitsSum);
					var hol_unitsSum = Number(response.hol_unitsSum);
					var enhol_unitsSum = Number(response.enhol_unitsSum);
					var bhol_unitsSum = Number(response.bhol_unitsSum);
					var sick_unitsSum = Number(response.sick_unitsSum);
					var fam_unitsSum = Number(response.fam_unitsSum);
					var ber_unitsSum = Number(response.ber_unitsSum);
					var comp_unitsSum = Number(response.comp_unitsSum);
					var saturdayHoursSum = Number(response.saturdayHoursSum);
					var sundayHoursSum = Number(response.sundayHoursSum);
					var uns_prem_unSum = Number(response.uns_prem_unSum);
					var uns_hol_unSum = Number(response.uns_hol_unSum);
					var uns_sick_unSum = Number(response.uns_sick_unSum);
					var uns_family_unSum = Number(response.uns_family_unSum);
					var uns_ber_unSum = Number(response.uns_ber_unSum);
					var uns_comp_unSum = Number(response.uns_comp_unSum);
					var taxSum = Number(response.taxSum);
					var NISum = Number(response.NISum);
					var union_deSum = Number(response.union_deSum);
					var pensionSum = Number(response.pensionSum);
					var other_de = Number(response.other_de);
					var netPaySum = Number(response.netPaySum);
					var pensionEmpSum = Number(response.pensionEmpSum);
					var companyLoanSum = Number(response.companyLoanSum);
					var studentLoanDeductionSum = Number(response.studentLoanDeductionSum);
					var add_deSum2 = Number(response.add_deSum2);
					var add_deSum3 = Number(response.add_deSum3);
					var totalHours = Number(response.totalHours);
					var basicHoursSum = Number(response.basicHoursSum);
					var uns_prem_unSum = Number(response.uns_prem_unSum);
					var ot1_unitsSum = Number(response.ot1_unitsSum);
					var ot2_unitsSum = Number(response.ot2_unitsSum);
					var totalPaidHours = ot1_unitsSum + ot2_unitsSum + basicHoursSum;
					var unpaidBreaksLength = totalHours - totalPaidHours;
					var hol_unitsSum = Number(response.hol_unitsSum);
					var enhol_unitsSum = Number(response.enhol_unitsSum);
					var uns_hol_unSum = Number(response.uns_hol_unSum);
					var bhol_unitsSum = Number(response.bhol_unitsSum);
					var saturdayHoursSum = Number(response.saturdayHoursSum);
					var sundayHoursSum = Number(response.sundayHoursSum);
					var uns_sick_unSum = Number(response.uns_sick_unSum);
					var sick_unitsSum = Number(response.sick_unitsSum);
					var uns_family_unSum = Number(response.uns_family_unSum);
					var fam_unitsSum = Number(response.fam_unitsSum);
					var uns_ber_unSum  = Number(response.uns_ber_unSum);
					var ber_unitsSum = Number(response.ber_unitsSum);
					var comp_unitsSum = Number(response.comp_unitsSum);
					var uns_comp_unSum = Number(response.uns_comp_unSum);
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
														
					google.charts.load('current', {'packages':['corechart']});
					
					//days pie chart
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
					if (basic_paySum >0||uns_premSum>0||uns_holSum >0||uns_sickSum >0||uns_familySum >0||
					uns_berSum >0||uns_compSum >0||ot1_paySum >0||ot2_paySum >0||enhol_paySum >0||hol_paySum >0||
					saturdayExtraPaySum >0||sundayExtraPaySum >0||sick_paySum >0||fam_paySum >0||ber_paySum >0||comp_paySum >0||bhol_paySum >0||
					bhol_bonusSum >0||backPay_Sum >0||pieceWorkSum >0||SSP_Sum >0||SPP_Sum >0||add_paySum >0||add_pay2Sum >0||add_pay3Sum >0||
					SAPSum >0||salarySum >0||bonusSum >0||commissionsSum >0)
					{
						google.charts.setOnLoadCallback(drawChartPayments);
						function drawChartPayments() {

						var data = google.visualization.arrayToDataTable([
							['Type', 'Payments'],
							['Basic Pay', basic_paySum],
							['Uns. Premium', uns_premSum],
							['Uns Prem. Holidays', uns_holSum],
							['Uns Prem. Sickness', uns_sickSum],
							['Uns Prem. Paternal', uns_familySum],
							['Uns Prem. Bereav.', uns_berSum],
							['Uns Prem. Compass.', uns_compSum],
							['Overtime 1 Pay', ot1_paySum],
							['Overtime 2 Pay', ot2_paySum],
							['Enhanced Holiday Pay', enhol_paySum],
							['Holiday Pay', hol_paySum],
							['Saturday Extra Pay', saturdayExtraPaySum],
							['Sunday Extra Pay', sundayExtraPaySum],
							['Sickness Pay', sick_paySum],
							['Paternity Pay', fam_paySum],
							['Bereavement Pay', ber_paySum],
							['Compassionate Pay', comp_paySum],
							['Bank Holiday Pay', bhol_paySum],
							['Bank Holiday Bonus', bhol_bonusSum],
							['Back Pay', backPay_Sum],
							['Piece Work', pieceWorkSum],
							['SSP', SSP_Sum],
							['SPP', SPP_Sum],
							['Add. Payment 1', add_paySum],
							['Add. Payment 2', add_pay2Sum],
							['Add. Payment 3', add_pay3Sum],
							['SAP', SAPSum],
							['Salary', salarySum],
							['Bonus', bonusSum],
							['Commissions', commissionsSum],
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
					
					//deductions pie chart
					if(taxSum>0||NISum>0||union_deSum>0||pensionSum>0||companyLoanSum>0||
					studentLoanDeductionSum>0||other_de>0||add_deSum2>0||add_deSum3>0||netPaySum>0){
						google.charts.setOnLoadCallback(drawChartYearToDate);
						function drawChartYearToDate() {
						var data = google.visualization.arrayToDataTable([
							['Type', 'Chart'],
							['Tax', taxSum ],
							['NI', NISum ],
							['Union', union_deSum],
							['Pension', pensionSum],
							['Company Loan', companyLoanSum ],
							['Student Loan', studentLoanDeductionSum],
							['Add. Deduction', other_de ],
							['Add. Deduction 2', add_deSum2 ],
							['Add. Deduction 3', add_deSum3 ],
							['Net Pay', netPaySum ],
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

					if(basicHoursSum>0||ot1_unitsSum>0||ot2_unitsSum>0||enhol_unitsSum>0||hol_unitsSum>0||sick_unitsSum>0||fam_unitsSum>0||
					ber_unitsSum>0||comp_unitsSum>0){
						google.charts.setOnLoadCallback(drawChartYearToDateHours);
						function drawChartYearToDateHours() {
						var data = google.visualization.arrayToDataTable([
							['Name', 'Value'],
							['Basic Hours', basicHoursSum],
							['Holiday Hours', hol_unitsSum+enhol_unitsSum],
							['Sickness Hours', sick_unitsSum],
							['Parental Hours', fam_unitsSum],
							['Bereavement Hours', ber_unitsSum],
							['Compassionate Hours', comp_unitsSum],
							['Overtime 1 Hours', ot1_unitsSum ],
							['Overtime 2 Hours', ot2_unitsSum],
							]);

							var options = {
							backgroundColor: '#ffffcc',
							title: 'Total Hours Chart',
							is3D: true,
							colors: ['#e6e600', '#d5ff80', '#ff9999', '#cccc00', '#88cc00', '#ffcc99', '#c299ff'],
							};
							var chart = new google.visualization.PieChart(document.getElementById('totalsHoursPieChart'));
							chart.draw(data, options);
						}
					}
					else
					{
						document.getElementById('totalsHoursPieChart').innerHTML = "<br><br><br>No Data Provided<br>For Chart.";
					}
			}
		}
		request.send(str);
}
window.addEventListener("resize", reloadCharts);*/