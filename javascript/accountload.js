function loadindexes(){
	
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var memberSince = document.getElementById("memberSince");
	var changePaySetAllowBox = document.getElementById("changePaySetAllowBox");
	
	
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status ==200)
	{
		var response = JSON.parse(this.responseText);
		firstName.value = response.first_name;
		lastName.value = response.last_name;
		email.value = response.email;
		memberSince.value = response.memberSince;
		
		if(response.allow_pay_set == 1)
			{changePaySetAllowBox.setAttribute("checked", "checked");}
		else if (response.allow_pay_set == 0)
			{changePaySetAllowBox.removeAttribute("checked");}
		else{alert('Something went wrong');}
			}
};
xmlhttp.open("POST", "javascript/ajax/accountload.php", true);
xmlhttp.send();
}

function submitNewNames(){
	var firstName = document.getElementById("firstName").value;
	var	lastName = document.getElementById("lastName").value;
	
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
	request.open( "POST" , "javascript/ajax/accountsubmitnewname.php" , true ) ;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send( "lastName="+lastName+'&'+"firstName="+firstName+'&') ;
	request.onreadystatechange = function(){
	
	if ( (request.readyState === 4 ) && ( request.status === 200 ) )
	{ 
		var response = JSON.parse(this.responseText);
		
		var submitSuccess = document.getElementById("accountChangeNamesResponse");			

		errorsArrayLength = Object.keys(response.errors).length;
		submitSuccess.innerHTML = ' ';
		if (errorsArrayLength>0){
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
			for (i=0; i<errorsArrayLength; i++)
			{
				submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				submitSuccess.innerHTML += response.errors[i]+'<br>';
			}
		}		
		else{
			submitSuccess.setAttribute("class", "submitSuccessBP");
			submitSuccess.innerHTML = 'Names Changed!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
	}
	}
	}
	document.getElementById("accountChangeNamesResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("accountChangeNamesResponse").innerHTML = "Changing names...";
}	
function submitCheckValue()
{
	var changePaySetAllowValue = document.getElementById("changePaySetAllowBox").checked;
	
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	
	//var request = new XMLHttpRequest;
	
	request.open("POST", "javascript/ajax/accountloadpaysetall.php", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			var response = JSON.parse(this.responseText);
		
		var submitSuccess = document.getElementById("accountPaySetAllowResponse");			

		errorsArrayLength = Object.keys(response.errors).length;
		submitSuccess.innerHTML = ' ';
		if (errorsArrayLength>0){
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
			for (i=0; i<errorsArrayLength; i++)
			{
				submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				submitSuccess.innerHTML += response.errors[i]+'<br>';
			}
		}		
		else{
			submitSuccess.setAttribute("class", "submitSuccessBP");
			submitSuccess.innerHTML = 'Settings Changed!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
			}
		}
	}
	request.send("changePaySetAllow="+changePaySetAllowValue);
	document.getElementById("accountPaySetAllowResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("accountPaySetAllowResponse").innerHTML = "Updating...";
}

function submitNewEmail(){
	var email1 = document.getElementById("email1").value;
	var	email2 = document.getElementById("email2").value;
	var	email3 = document.getElementById("email3").value;
	
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
	request.open( "POST" , "javascript/ajax/accountsubmitnewemail.php" , true ) ;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send( "email1="+email1+'&'+"email2="+email2+'&'+"email3="+email3) ;
	//document.getElementById("accountChangeEmailResponse").innerHTML = "changing...";
	request.onreadystatechange = function(){
	
	if ( (request.readyState === 4 ) && ( request.status === 200 ) )
	{ 
		var response = JSON.parse(this.responseText);
		
		var submitSuccess = document.getElementById("accountChangeEmailResponse");			

		errorsArrayLength = Object.keys(response.errors).length;
		submitSuccess.innerHTML = ' ';
		if (errorsArrayLength>0){
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
			for (i=0; i<errorsArrayLength; i++)
			{
				submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				submitSuccess.innerHTML += response.errors[i]+'<br>';
			}
		}		
		else{
			submitSuccess.setAttribute("class", "submitSuccessBP");
			submitSuccess.innerHTML = 'Email Changed!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
	}
	}
	}
	document.getElementById("accountChangeEmailResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("accountChangeEmailResponse").innerHTML = "Changing email...";
}	

function submitNewPassword(){
	var pass1 = document.getElementById("pass1").value;
	var	pass2 = document.getElementById("pass2").value;
	var	pass3 = document.getElementById("pass3").value;
	
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
	request.open( "POST" , "javascript/ajax/accountsubmitnewpassword.php" , true ) ;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send( "pass1="+pass1+'&'+"pass2="+pass2+'&'+"pass3="+pass3) ;
	document.getElementById("accountChangePasswordResponse").innerHTML = "changing...";
	request.onreadystatechange = function(){
	
	if ( (request.readyState === 4 ) && ( request.status === 200 ) )
	{ 
		var response = JSON.parse(this.responseText);
		
		var submitSuccess = document.getElementById("accountChangePasswordResponse");			

		errorsArrayLength = Object.keys(response.errors).length;
		submitSuccess.innerHTML = ' ';
		if (errorsArrayLength>0){
			submitSuccess.innerHTML = "Error! Touch to dismiss.<hr> ";
			for (i=0; i<errorsArrayLength; i++)
			{
				submitSuccess.setAttribute("class", "submitSuccessBPErorrs");
				submitSuccess.innerHTML += response.errors[i]+'<br>';
			}
		}		
		else{
			submitSuccess.setAttribute("class", "submitSuccessBP");
			submitSuccess.innerHTML = 'Password Changed!';
			setTimeout(function(){submitSuccess.innerHTML=" ";},1500);
	}
	}
	}
	document.getElementById("accountChangePasswordResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("accountChangePasswordResponse").innerHTML = "Changing password...";
}	


function hideErrorMessage()
{
	var accountChangePasswordResponse = document.getElementById("accountChangePasswordResponse");
	accountChangePasswordResponse.innerHTML = " ";
	accountChangePasswordResponse.setAttribute("class", "submitSuccessBP");
	
	var accountChangeEmailResponse = document.getElementById("accountChangeEmailResponse");
	accountChangeEmailResponse.innerHTML = " ";
	accountChangeEmailResponse.setAttribute("class", "submitSuccessBP");
	
	var accountPaySetAllowResponse = document.getElementById("accountPaySetAllowResponse");
	accountPaySetAllowResponse.innerHTML = " ";
	accountPaySetAllowResponse.setAttribute("class", "submitSuccessBP");
	
	var accountChangeNamesResponse = document.getElementById("accountChangeNamesResponse");
	accountChangeNamesResponse.innerHTML = " ";
	accountChangeNamesResponse.setAttribute("class", "submitSuccessBP");
}

function start (){
	loadindexes();
	
	var changeEmail = document.getElementById("changeEmail");
	changeEmail.onclick = submitNewEmail;
	
	var changePassword = document.getElementById("changePassword");
	changePassword.onclick = submitNewPassword;
	
	var changePaySetAllow = document.getElementById("changePaySetAllow");
	changePaySetAllow.onclick = submitCheckValue;
	
	var changeNames = document.getElementById("changeNames");
	changeNames.onclick = submitNewNames;
	
	
	var accountChangePasswordResponse = document.getElementById("accountChangePasswordResponse");
	accountChangePasswordResponse.onclick = hideErrorMessage;
	
	var accountChangeEmailResponse = document.getElementById("accountChangeEmailResponse");
	accountChangeEmailResponse.onclick = hideErrorMessage;
	
	var accountPaySetAllowResponse = document.getElementById("accountPaySetAllowResponse");
	accountPaySetAllowResponse.onclick = hideErrorMessage;
	
	var accountChangeNamesResponse = document.getElementById("accountChangeNamesResponse");
	accountChangeNamesResponse.onclick = hideErrorMessage;
}
document.addEventListener("DOMContentLoaded",start,false);