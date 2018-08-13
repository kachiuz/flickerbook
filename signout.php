<?php # DISPLAY COMPLETE LOGGED OUT PAGE.
# Access session.
session_start() ;
# Redirect if not logged in.
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }
# Clear existing variables.
$_SESSION = array() ;
# Destroy the session.
session_destroy() ;
?>

<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Signed Out</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src=""></script>
	</head>
<body>
	<?php require ( 'includes/logo.html' ) ; ?>
	<div class="tableLogin">Signed Out</div>
	<div id="signout">
		<?php echo '<h1>Goodbye!</h1><p>You are now logged out.</p><p><a href="login.php"><span class="registerText">Login</span></a></p>';?>
	</div>
	<?php require ( 'includes/footer.html' );?>	
</body>
</html>