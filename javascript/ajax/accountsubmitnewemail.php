<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../account.php') ; }
	
		session_start();

	if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../account.php') ; }
		# Connect to the database.
		require ('../../../connect_db.php'); 
		  
		# Initialize an error array.
		$errors3 = array();
		
		if (empty($_POST[ 'email1' ] ) )
			{$errors3[] = 'Old Email field is empty!';}
	    if (empty($_POST[ 'email2' ] ))
			{$errors3[] = 'New Email field is empty!';}
	    if (empty($_POST[ 'email3' ] ))
			{$errors3[] = 'Repeat new Email field is empty!';}
		  
	  if(!empty( $errors3 ))
		{
			$paymentsSettingsArray = array("errors"=>$errors3);
			$jsonFile = json_encode($paymentsSettingsArray);
			Die ($jsonFile = json_encode($paymentsSettingsArray));
		}
		
		
		# Check if email input is not empty and if new passwords match.
		if ( !empty($_POST[ 'email1' ] ) )
		{
			if (!empty($_POST[ 'email2' ] ) or !empty($_POST[ 'email3' ] ) ) {
		  
				if ( $_POST[ 'email2' ] != $_POST[ 'email3' ] )
				{ $errors3[] = 'New emails do not match.' ; }
				else
				{ $email = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'email2' ] ) )) ; 
				  //$currentp = mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass1' ] ) ) ; //reikalinga palyginti pass
				}
			}
			else {$errors3[] = 'Enter your new email.' ;}
		}
		else { $errors3[] = 'Enter your old email.' ; } 
		
		
		# check if emails are valid
		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		 }
			
		if ( empty( $errors3 ) )
		{
			$email = test_input($_POST['email1']);
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors3[] = "Invalid old email format"; 
			}
		}
		
		if ( empty( $errors3 ) )
		{
			$email = test_input($_POST['email2']);
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors3[] = "Invalid new email format"; 
			}
		}
		
		if ( empty( $errors3 ) )
		{
			$email = test_input($_POST['email3']);
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors3[] = "Invalid new email format"; 
			}
		}
		
		 # Check if email address already registered.
		if ( empty( $errors3 ) )
		{
			$q = "SELECT user_id FROM users WHERE email='$email'" ;
			$r = @mysqli_query ( $dbc, $q ) ;
			if ( mysqli_num_rows( $r ) != 0 ) $errors3[] = 'Email address already registered. Try a different one.' ;
		}
		
		 # Check entered old email match old email in db.
		if ( empty( $errors3 ) )
		{
			$email = test_input($_POST['email1']);
			$q = "SELECT email FROM users WHERE email='$email'" ;
			$r = @mysqli_query ( $dbc, $q ) ;
			if ( mysqli_num_rows( $r ) == 0 ) $errors3[] = 'Current Email not found.' ;
		}
		
		
		if ( empty( $errors3 ) ) 
		{
			$user_id = $_SESSION[ 'user_id' ];
			$email = test_input($_POST['email2']);
			//$q="UPDATE users SET premium = 1 WHERE user_id = 'user_id'";
			$q = "UPDATE users SET email = '$email' where user_id = '$user_id'";
			$r = @mysqli_query ( $dbc, $q ) ;
			
			//reiki nusiusti tuscia array, kitaip pastringa response
			$paymentsSettingsArray = array("errors"=>$errors3);
			$jsonFile = json_encode($paymentsSettingsArray);
			echo $jsonFile;
			# Close database connection.
			mysqli_close($dbc); 

			# Display footer section and quit script:
			//include ('includes/footer.html'); 
			exit();
		}
	  # Or report errors.
		else 
		{
			$paymentsSettingsArray = array("errors"=>$errors3);
			$jsonFile = json_encode($paymentsSettingsArray);
			echo $jsonFile;
			mysqli_close( $dbc );
		}
  
	
?>