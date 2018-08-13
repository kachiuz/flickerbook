<?php # LOGIN HELPER FUNCTIONS.

# Function to load specified or default URL.
function load( $page = 'login.php' )
{
	# Begin URL with protocol, domain, and current directory.
	$url = 'https://' . $_SERVER[ 'HTTP_HOST' ] . dirname( $_SERVER[ 'PHP_SELF' ] ) ;

	# Remove trailing slashes then append page name to URL.
	$url = rtrim( $url, '/\\' ) ;
	$url .= '/' . $page ;

	# Execute redirect then quit. 
	header( "Location: $url" ) ; 
	exit() ;
}


# Function to check email address and password. 
function validate( $dbc, $email = '', $pwd = '')
{
	# Initialize errors array.
	$errors = array() ; 
	if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response'])
	{
		$secret = 'Enter secret key here';
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
	
	if ( empty( $pwd ) AND empty( $email )  ) 
	{
		$errors[] = 'Enter your password.' ;
		$errors[] = 'Enter your email address.' ;
	}
	else{
		if ( empty( $pwd ) ) 
			{ $errors[] = 'Enter your password.' ; } 
		else{
			# Check email field.
			if ( empty( $email ) ) 
				{ $errors[] = 'Enter your email address.' ; } 
			else  { 
				$e = mysqli_real_escape_string( $dbc, trim( $email ) ) ; 
				//select pass from database
				$q = "SELECT pass FROM users WHERE email='$e'";
				$r = mysqli_query($dbc, $q);

				$num = mysqli_num_rows($r);

				if ($num>0){
					while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC))
						{
							$hash = $row['pass'];
						}
						
					$p = mysqli_real_escape_string( $dbc, trim( $pwd ) ) ; 
					if(password_verify ( $p , $hash )){
						$p = $hash;
					}
					else {$errors[] = 'Email address or password incorrect.';}
					}
				//jei db nerandamas email, parodome error message
				else{$errors[] = 'Email address or password incorrect.';}
			}		
				
			# On success retrieve user_id, first_name, and last name from 'users' database.
			if ( empty( $errors ) ) 
			{
				$q = "SELECT user_id, first_name, last_name, email FROM users WHERE email='$e'";  
				$r = mysqli_query ( $dbc, $q ) ;
				if ( mysqli_num_rows( $r ) == 1 ) 
				{
				  $row = mysqli_fetch_array ( $r, MYSQLI_ASSOC ) ;
				  return array( true, $row ) ; 
				}
				# Or on failure set error message.
			else { $errors[] = 'Email address and password incorrect.' ; }
				}
				# On failure retrieve error message/s.
		}
	}
return array( false, $errors ) ; 
		
}