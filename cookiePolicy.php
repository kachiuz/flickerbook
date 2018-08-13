<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Cookie Policy</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/menu.js"></script>
		<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
		<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
		<script>
		window.addEventListener("load", function(){
		window.cookieconsent.initialise({
		  "palette": {
			"popup": {
			  "background": "#edeff5",
			  "text": "#838391"
			},
			"button": {
			  "background": "#4b81e8"
			}
		  }
		})});
		</script>
	</head>
	<body>
		<?php require ( 'includes/logo.html' ) ; ?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;}?></div>
		</div>
		<div id="mainMenu">
			<?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;} ?>
		</div>
		<div class="deductionCaption">How We Use Cookies</div>
		<div id="calendarGenerator">
			<p class="textIndent">A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, 
			the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. 
			Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, 
			likes and dislikes by gathering and remembering information about your preferences.</p>
			<p class="textIndent">We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and 
			improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes 
			and then the data is removed from the system.</p>
			<p class="textIndent">Third party vendors, including Google, use cookies to serve ads based on a user's previous visits to our
			website or other websites.
			<p class="textIndent">Google's use of advertising cookies enables it and its partners to serve ads to users based on 
			their visit to this site and/or other sites on the Internet.
			<p class="textIndent">Users may opt out of personalised advertising by visiting <a href="https://www.google.co.uk/settings/ads">
			Ads Settings</a>.
			<p class="textIndent">Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and 
			which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data 
			you choose to share with us.</p>
			<p class="textIndent">You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify 
			your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
			<p class="textIndent">How to disable cookies is explained in a <a href="https://www.wikihow.com/Disable-Cookies">wikihow webpage.</a></p>

		</div>
		</div>
		<?php require ( 'includes/footer.html' ) ; ?>	
	</body>
</html>