<?php session_start();
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Terms And Conditions</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="javascript/javascript" src="javascript/menu.js"></script>
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
	<body><?php require ( 'includes/logo.html' ) ;?>
		<div id="hiddenMenuContainer">
			<div id="hiddenMenu"><?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ; }?></div>
		</div>
		<div id="mainMenu">	<?php if ( isset( $_SESSION[ 'user_id' ] ) ) { require ( 'includes/menu.html') ;}?>	</div>
		<div class="deductionCaption">Terms And Conditions</div>
		<div id="calendarGenerator">
			<p class="textIndent">Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the 
			following terms and conditions of use, which together with our privacy policy govern Flickerbooks's relationship with you in 
			relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
			</p>
			<p class="textIndent">The term Flickerbook or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our
			website.
			</p>
			<p class="textIndent">The use of this website is subject to the following terms of use:
			<p class="textIndent">The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
			<p class="textIndent">This website uses cookies to monitor browsing preferences.</p>
			<p class="textIndent">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness 
			or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such 
			information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to 
			the fullest extent permitted by law.</p>
			<p class="textIndent">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It 
			shall be your own responsibility to ensure that any products, services or information available through this website meet your specific 
			requirements.</p>
			<p class="textIndent">This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design,
			 layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of
			 these terms and conditions.</p>
			<p class="textIndent">All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the 
			website.</p>
			<p class="textIndent">Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</p>
			<p class="textIndent">From time to time this website may also include links to other websites. These links are provided for your convenience to 
			provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked 
			website(s).</p>
			<p class="textIndent">To show charts and diagrams on Flickerbook, we use third party API (Google Charts). If the third party desides to
			discontinue to maintain the API, we do not guarantee a replacement for the API, nor reduce the price of Premium membership.</p>
			<p class="textIndent">We also reserve the right to change free Flickerbook services to paid ones and vice versus. If we 
			decide to change free services to paid ones, we will inform You about such changes in advance.</p>
			<p class="textIndent">Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern 
			Ireland, Scotland and Wales.</p>
		</div>
		<?php require ( 'includes/footer.html' ) ;?>	
	</body>
</html>