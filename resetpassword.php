<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Enter your email address to search for your account">
		<meta name="keywords" content="forgot password, reset password, lost password, flickerbook">
		<META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Forgot Password</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<!--<script type="text/javascript" src="javascript/resetpassword.js"></script>-->
		<script src='https://www.google.com/recaptcha/api.js'></script>
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
	<?php require ( 'includes/logo.html' ) ;	?>
	<div class="tableLogin">Forgot Password</div>
	<div id="register">
		Enter the email address You registered with to recover your password.
	<form action="resetpassword.php" method="POST">	
	<input id="resetPasswordEmail" class="alignCenter" type="text" name="resetPasswordEmail" size="50" maxlength="255" placeHolder="Enter Your Email Address">
	
	<div class="g-recaptcha" data-size="normal" data-theme="light" data-sitekey="6Lf7NEQUAAAAAMOG_xJaUDZ-ELYkXNVXkGOCIugJ"></div>
	<div class="registerButton">
		<input type="submit" value="Recover Password" id="resetPasswordButton" class="loginButton">
	</div>
				<?php
				if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
				{
					# Connect to the database.
					require ('../connect_db.php'); 

					# Initialize an error array.
					$errors = array();
					
					if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response'])
					{
						$secret = '6Lf7NEQUAAAAANzvtj2C2QznHt3SvFwzrJxyz4Py';
						$ip = $_SERVER['REMOTE_ADDR'];
						$captcha = $_POST['g-recaptcha-response'];
						$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

						$arr = json_decode($response, TRUE);
						if(!$arr['success'])
						{
							$errors[] = 'Verification check failed.';
						}
					}
					else{$errors[] = 'Verification check failed.';}
					
					function test_input($data) {
					$data = trim($data);
					$data = stripslashes($data);
					$data = htmlspecialchars($data);
					return $data;
					}
					
					if ( empty( $errors ) ){
						if(!empty($_POST['resetPasswordEmail']))
						{
							$email = test_input($_POST['resetPasswordEmail']);
							$email = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'resetPasswordEmail' ] ) )) ;
							
							if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
								$errors[] = 'Please enter a valid email address';
							}
						}
						else{
							$errors[] = "Enter an Email Address!";
						}
					}
					
					if ( empty( $errors ) ){
						$checkQuery = "SELECT email FROM users WHERE email = '$email'";
						$check = mysqli_query($dbc, $checkQuery);
						$check2 = mysqli_num_rows($check);

						//if the name exists it gives an error
						if ($check2 == 0) {
							$errors[] = 'Sorry, we can not find your account details please try another email address.';
						}
						elseif($check2 == 1)
						{
							$email = $email; //whateva
						}	
						else{
							$errors[] = 'Sorry, we can not find your account details please try another email address.';
						}
					}

					if ( empty( $errors ) ){
						//create new random password
						$password = substr(md5(uniqid(rand(),1)),3,10);
						$pass = password_hash($password, PASSWORD_DEFAULT,['cost' => 12] ) ;
						
						
						//send email with new password
						$to = $email;
						$subject = 'Reseting your Flickerbook password' ;
						$message = "Hi,you or someone else have requested to change your Flickerbook password. 
						Your new password is:
						$password 
						Your password has been reset please login and change your password to something more memorable as soon as possible.
						Regards, Flickerbook."; ;
						$headers = 'From: noReply@flickerbook.co.uk' . PHP_EOL ;
						mail ( $to, $subject, $message, $headers ) ;
						
						$updteQuery = "UPDATE users SET pass='$pass' WHERE email = '$email'";
						$sql = mysqli_query($dbc, $updteQuery);
						mysqli_close($dbc);
						
						echo "<b style='color:green'>Success! Check your email to recover your password.</b><br>" ;
					}
					else 
					{
						echo '<p id="err_msg">The following error(s) occurred:<br>' ;
						foreach ( $errors as $msg )
						{ echo " - <b style='color:red'>$msg</b><br>" ; }
							echo 'Please try again.</p>';
							# Close database connection.
							mysqli_close( $dbc );
					}
				}
			?>
	</form>
	</div>
	<?php require ( 'includes/footer.html' ) ; 	?>
</body>
</html>



