<?php # PROCESS LOGIN ATTEMPT.

# Check form submitted.
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
	{	
	    if(!isset($_SESSION)) {  session_start();  }
		else { session_destroy();  session_start();  }
		
	# Open database connection.
	require( '../connect_db.php' ) ;
	# Get connection, load, and validate functions.
	require( 'login_tools.php' ) ;
	# Check login.
	list ( $check, $data ) = validate ( $dbc, $_POST[ 'email' ], $_POST[ 'pass' ] ) ;
	# On success set session data and display logged in page.
	if ( $check )  
	{# Access session.
		$_SESSION['user_id'] = $data['user_id'] ;
		$_SESSION['first_name'] = $data['first_name'] ;
		$_SESSION['last_name'] = $data['last_name'] ;
		$_SESSION['email'] = $data ['email'];
		echo '<script type="text/javascript">
		window.location = "index.php"
		</script>'; //su serveriu kitaip neveikia!!!!!!!!!!1
	}
	# Or on failure set errors.
	else {$errors = $data;} 

	# Close database connection.
	mysqli_close($dbc) ; 
}


# Continue to display login page on failure.
require ( 'landing.php' ) ;


?>