<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Register</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src=""></script>
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
	<?php require ( 'includes/logo.html' ) ; ?>
	<div class="tableLogin">Create New Account</div>
	<div id="register">
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
			
			# Check for a first name.
			if ( empty( $_POST[ 'first_name' ] ) )
				{ $errors[] = 'Enter your first name.' ; }
			else
				{ $fn = mysqli_real_escape_string( $dbc, trim( $_POST[ 'first_name' ] ) ) ; }

			# Check for a last name.
			if (empty( $_POST[ 'last_name' ] ) )
				{ $errors[] = 'Enter your last name.' ; }
			else
				{ $ln = mysqli_real_escape_string( $dbc, trim( $_POST[ 'last_name' ] ) ) ; }

			# Check for aan email and matching input email.
			if ( !empty($_POST[ 'email' ] ) )
			{
				if ( $_POST[ 'email' ] != $_POST[ 'email2' ] )
					{ $errors[] = 'Emails do not match.' ; }
				else
					{ $e = mysqli_real_escape_string( $dbc, trim( $_POST[ 'email' ] ) ) ; }
			}
			else { $errors[] = 'Enter your email address.' ; }



			# Check for a password and matching input passwords.
			if ( !empty($_POST[ 'pass1' ] ) )
			{
				if ( $_POST[ 'pass1' ] != $_POST[ 'pass2' ] )
					{ $errors[] = 'Passwords do not match.' ; }
				else
					{ $p = mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass1' ] ) ) ; }
			}
			else { $errors[] = 'Enter your password.' ; }

			# check if email is valid
			function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
			}

			if ( empty( $errors ) )
			{
				$email = test_input($_POST['email']);
				if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
					$errors[] = "Invalid email format"; 
				}
			}

			# Check if email address already registered.
			if ( empty( $errors ) )
			{
				$q = "SELECT user_id FROM users WHERE email='$e'" ;
				$r = mysqli_query ( $dbc, $q ) ;
				if ( mysqli_num_rows( $r ) != 0 ) $errors[] = 'Email address already registered. <a href="login.php">Login</a>' ;
			}

			# On success register user inserting into 'users' database table.
			if ( empty( $errors ) ) 
			{
				
			//send email
				$to = $e;
				$subject = 'You have registered on Flickerbook' ;
				$message = "Congratulations, you have just successfully registered on Flickerbook!	Use your email and password to login https://flickerbook.co.uk/login.php.
				Regards, Flickerbook.";
				$headers = 'From: noReply@flickerbook.co.uk' . PHP_EOL ;
				mail ( $to, $subject, $message, $headers ) ;
				
				
				$premiumUntil = date('Y-m-d H:i:s', strtotime(date("Y-m-d H:i:s"). ' + 7 days'));
				$p = password_hash($p, PASSWORD_DEFAULT,['cost' => 12] ) ;
				$q = "INSERT INTO users (first_name, last_name, email, pass, reg_date, premium, premiumSince, premiumUntil)
				VALUES ('$fn', '$ln', '$e', '$p', NOW(), 1, NOW(), '$premiumUntil' )";
				$r = mysqli_query ( $dbc, $q ) ;
				if ($r)
					{ echo '<h1>Registered!</h1><p>You are now registered.</p><p><a href="login.php"><span class="registerText">Login</span></a></p>'; }
				
				# Close database connection.
				mysqli_close($dbc); 
			exit();
			}
			# Or report errors.
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
		<form action="register.php" method="POST">
		<input class="alignCenter" type="text" name="first_name" placeholder="First Name" size="35" value="<?php if (isset($_POST['first_name'])) echo $_POST['first_name']; ?>">
		<input class="alignCenter" type="text" name="last_name" placeholder="Last Name" size="35" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>">
		<input class="alignCenter" type="text" name="email" placeholder="Email" size="35" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>">
		<input class="alignCenter" type="text" name="email2" placeholder="Confirm Email" size="35" value="<?php if (isset($_POST['email2'])) echo $_POST['email2']; ?>">
		<input class="alignCenter" type="password" name="pass1" placeholder="Password" size="35" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>" >
		<input class="alignCenter" type="password" name="pass2" placeholder="Confirm Password" size="35" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>">
		<div class="g-recaptcha" data-size="normal" data-theme="light" data-sitekey="6Lf7NEQUAAAAAMOG_xJaUDZ-ELYkXNVXkGOCIugJ"></div>
		<div class="registerButton"><input type="submit" value="Register" class="loginButton"></div>
		</form>
		<p>By registering you agree to Flickerbooks <i>Terms and Conditions, Cookie and Privacy Policies</i>.</p>
	</div>
	<?php require ( 'includes/footer.html' ) ;?>
</body>
</html>

