
/*
function indexStart(){
	email = document.getElementById("email");
	emailValue = document.getElementById("email").value;
	
	email.onfocus = function (){
		if (email == "Email"){
		emailValue.innerHTML = " ";
		}
		else {
		emailValue.innerHTML = " lol"
		}
	}
}


document.addEventListener("DOMContentLoaded",indexStart,false);
*/

/*function focusResponse()
{ 
	emailValue = document.getElementById("email").value;
	
	if (emailValue == "Email"){
		this.value = "Email";
		}
	else {
		this.value = emailValue;
	}

 //this.value = " ";
}

function blurResponse()
{ 

	emailValue = document.getElementById("email").value;
	
	if (emailValue == "Email"){
		this.value = "Email";
		}
	else {
		this.value = emailValue;
	}


 this.value = "Email";
}
*/
function init()
{
 //var panel=document.getElementById("panel");
 //panel.innerHTML += "<input type='text' id='txt1'>";
 //panel.innerHTML += "<input type='text' id='txt2'>";
 
 //var field1=document.getElementById("email");
 //field1.onfocus=focusResponse;
 //field1.onblur=blurResponse; 

 //var field2=document.getElementById("txt2");
 //field2.onfocus=focusResponse;
 //field2.onblur=blurResponse;

 //field1.focus();
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;