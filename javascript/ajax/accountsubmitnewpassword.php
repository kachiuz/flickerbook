<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../account.php') ; }

	session_start();

	if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../account.php') ; }
	
	  # Connect to the database.
	  require ('../../../connect_db.php'); 
	  
	  # Initialize an error array.
	  $errors2 = array();
	  
	  if (empty($_POST[ 'pass1' ] ) )
		{$errors2[] = 'Old password field is empty!';}
	  if (empty($_POST[ 'pass2' ] ))
		{$errors2[] = 'New password field is empty!';}
	  if (empty($_POST[ 'pass3' ] ))
		{$errors2[] = 'Repeat new password field is empty!';}
	  
	  if(!empty( $errors2 ))
		{
			$paymentsSettingsArray = array("errors"=>$errors2);
			$jsonFile = json_encode($paymentsSettingsArray);
			Die ($jsonFile = json_encode($paymentsSettingsArray));
		}
	  

	  # Check if password input is not empty and if new passwords match.
	  if ( !empty($_POST[ 'pass1' ] ) )
	  {
		 if (!empty($_POST[ 'pass2' ] ) or !empty($_POST[ 'pass3' ] ) ) {
		  
			if ( $_POST[ 'pass2' ] != $_POST[ 'pass3' ] )
			{ $errors2[] = 'New Passwords do not match.' ; }
			else
			{ $p = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass2' ] ) )) ; 
			  $currentp = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass1' ] )) ) ; //reikalinga palyginti pass
			}
		 }
		else {$errors2[] = 'Enter your new password.' ;}
	  }
	  else { $errors2[] = 'Enter your old password.' ; } 
		
		
	  $user_id = $_SESSION[ 'user_id' ];
	  
	  
			  // pick current ass from db
		$pickPassword = "SELECT pass FROM users WHERE user_id = '$user_id'";
		$pick = mysqli_query($dbc, $pickPassword)or die(mysqli_error($dbc));
		$pick2 = mysqli_num_rows($pick);
		
			if ($pick2 == 1){
			while ($rowWS = mysqli_fetch_array($pick, MYSQLI_ASSOC))
			{
				$passFromDB = $rowWS['pass'];
			}
			}
			else {$errors2[] = 'Current password not found.' ;}

		
		//compare the pass from db with the one entered in the input
		#compare passwords
			 $currentp = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'pass1' ] ) )) ;
			if(password_verify ( $currentp,$passFromDB )){
			$passFromDB = $passFromDB; //fuck knows i just need to write something here
			}
			else {$errors2[] = 'You have entered an incorrect current password.';}
		
	
		 if ( empty( $errors2 ) ) 
	  {
		$p = password_hash($p, PASSWORD_DEFAULT,['cost' => 12] ) ;
		$q = "UPDATE users SET pass = '$p' where user_id = '$user_id'";
		$r = @mysqli_query ( $dbc, $q ) ;
		
		
		//reiki nusiusti tuscia array, kitaip pastringa response
			$paymentsSettingsArray = array("errors"=>$errors2);
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
			$paymentsSettingsArray = array("errors"=>$errors2);
			$jsonFile = json_encode($paymentsSettingsArray);
			echo $jsonFile;
		# Close database connection.
		mysqli_close( $dbc );
	  }


?>