<?php # DISPLAY COMPLETE REGISTRATION PAGE.
session_start();
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( 'login_tools.php' ) ; load('account.php') ; }

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }



  # Connect to the database.
  require ('../../../connect_db.php'); 
  
  # Initialize an error array.
  $errors = array();

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

  
  $user_id = $_SESSION[ 'user_id' ];
  # On success register user inserting into 'users' database table.
  if ( empty( $errors ) ) 
  {
    $q = "UPDATE users SET first_name = '$fn', last_name = '$ln' where user_id = '$user_id'";
    $r = @mysqli_query ( $dbc, $q ) ;
    if ($r)
    { echo '<h1>Updated!</h1><p>Account info updated.</p>'; }
  
    # Close database connection.
    mysqli_close($dbc); 
    exit();
  }
  # Or report errors.
  else 
  {
    echo '<h1>Error!</h1><p id="err_msg">The following error(s) occurred:<br>' ;
    foreach ( $errors as $msg )
    { echo " - $msg<br>" ; }
    echo 'Please try again.</p>';
    # Close database connection.
    mysqli_close( $dbc );
  }  

?>