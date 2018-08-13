<?php # DISPLAY COMPLETE REGISTRATION PAGE.

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../account.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../account.php') ; }
require('../../../connect_db.php');

$errors = array();
$user_id = $_SESSION[ 'user_id' ];

	  
# Check for a first name.
if ( empty( $_POST[ 'firstName' ] ) )
	{ $errors[] = 'Enter your first name.' ; }
else
	{ $fn = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'firstName' ] ) )) ; }

# Check for a last name.
if (empty( $_POST[ 'lastName' ] ) )
	{ $errors[] = 'Enter your last name.' ; }
else
	{ $ln = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'lastName' ] ) )) ; }


# On success register user inserting into 'users' database table.
if ( empty( $errors ) ) 
{
	$query = "UPDATE users SET first_name = '$fn', last_name = '$ln' where user_id = '$user_id'";
	$result = mysqli_query ( $dbc, $query ) ;
	
	$paymentsSettingsArray = array("errors"=>$errors);
	$jsonFile = json_encode($paymentsSettingsArray);
	echo $jsonFile;
	mysqli_close($dbc); 
}
else 
{
	$paymentsSettingsArray = array("errors"=>$errors);
	$jsonFile = json_encode($paymentsSettingsArray);
	echo $jsonFile;
	mysqli_close( $dbc );
}  


?>