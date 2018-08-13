function getStartEndDates(){
	if (XMLHttpRequest)
		{
			request = new XMLHttpRequest();
		}
	else if (ActiveXObject)
		{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	else {return false;}
	request.open("POST", "javascript/ajax/userGuideload.php", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function() 
		{
			if(request.readyState == 4 && request.status == 200){
				var response = JSON.parse(this.responseText);
				startDateOfFlickerbook = response.startDateOfFlickerbook;
				surrentEndDateOfFlickrbook = response.surrentEndDateOfFlickrbook
				var start = document.getElementById("start").innerHTML = startDateOfFlickerbook;
				var finish = document.getElementById("finish").innerHTML = surrentEndDateOfFlickrbook;
			}
		}
	request.send(null);
}
document.addEventListener("DOMContentLoaded",getStartEndDates,false);