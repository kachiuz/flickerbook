<?php session_start();?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Contacts page</title>
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
		<div class="paymentsCaption">Flickerbook Contacts</div>
		<div class="account contactUs">
			<p class="textIndent">There are several ways to contact us: by email, using social networks or by phone.</p>
		</div>
		<div class="paymentsCaption">Social Networks</div>
		<div class="account contactUs">
			<p class="textIndent">Currently we have three official social network accounts: Facebook, Twitter, and Youtube. If you have an 
			inquiry about our site or our services best option is to contact us via our Facebook page and we will try to respond as quick
			as we can. We use Youtube mainly for presentational and education purposes. Links to our social network profiles can be found at the bottom 
			of the page.</p>
		</div>	
		<div class="paymentsCaption">Emails</div>
		<div class="account contactUs">
			<p class="textIndent">You can contact us by one of these emails:<br><br>
			<a href="mailto:premium@flickerbook.co.uk">premium@flickerbook.co.uk</a> - if you have enquiries about our premium membership.<br><br>
			<a href="mailto:support@flickerbook.co.uk">support@flickerbook.co.uk</a> or
			<a href="mailto:info@flickerbook.co.uk">info@flickerbook.co.uk</a> - if you require information or support about our product or services.
			</p>
		</div>
		<div class="paymentsCaption">Telephone</div>
		<div class="account contactUs">
			<p class="textIndent">Phone: <b><a href="tel:07928736215">07928736215</a></b></p>
		</div>
		<div class="paymentsCaption">Address</div>
		<div class="account contactUs">
			<p class="textIndent">
			<address>
				27 Jubilee Close<br>
				Spalding<br>
				Lincolnshire<br>
				United Kingdom<br>
				PE11 1YD<br>
			</address>	
			</p>
		</div>
		<?php require ( 'includes/footer.html' ) ; ?>	
	</body>
</html>