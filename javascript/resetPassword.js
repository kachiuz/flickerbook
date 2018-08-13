function getFormValues()
{
	var resetPasswordEmail = document.getElementById("resetPasswordEmail").value;
	str = 'resetPasswordEmail='+resetPasswordEmail+'&';
	return str;
}

function ajaxPost(){
	str = getFormValues();
	var correctCaptcha = function(response) { alert(response);  };
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
			else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	var url = "javascript/ajax/resetPasswordSubmit.php";
	
	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState ==4 && request.status ==200){
			
			var response = JSON.parse(this.responseText);
			var submitSuccess = document.getElementById("resetPasswordResponse");
						
			errorsArrayLength = Object.keys(response.errors).length;
			submitSuccess.innerHTML = " ";
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
					submitSuccess.innerHTML = 'Check Your email for furhter instructions!';
					
			}
		}
	}
	request.send(str);
	document.getElementById("resetPasswordResponse").setAttribute("class", "submitSuccessBP");
	document.getElementById("resetPasswordResponse").innerHTML = "Validating Email...";
}
function hideErrorMessage()
{
	var resetPasswordResponse = document.getElementById("resetPasswordResponse");
	resetPasswordResponse.innerHTML = " ";
	resetPasswordResponse.setAttribute("class", "submitSuccessBP");
		
}

function start (){
	var resetPasswordButton = document.getElementById("resetPasswordButton");
	resetPasswordButton.onclick = ajaxPost;
	
	//grecaptcha.getResponse();
	
	var resetPasswordResponse = document.getElementById("resetPasswordResponse");
	resetPasswordResponse.onclick = hideErrorMessage;
}
document.addEventListener("DOMContentLoaded",start,false);