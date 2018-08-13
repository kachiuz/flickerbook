<div id="loginForm">
	<form action="login_action.php" method="POST" >
		<input type="text" name="email" placeholder="Email address" size="35" id="email" value="" class="alignCenter"><br>
		<input type="password" name="pass" placeholder="Password"size="35" id="password" value="" class="alignCenter">
		<div class="g-recaptcha" data-size="normal" data-theme="light" data-sitekey="6Lf7NEQUAAAAAMOG_xJaUDZ-ELYkXNVXkGOCIugJ"></div>
		<div class="registerButton"><input type="submit" value="Login" class="loginButton"><p><a href="resetpassword.php">Forgot password?</a> </p></div>
		<a href="register.php"><div class="registerText">Create an account</div></a>
		<?php
			if ( isset( $errors ) && !empty( $errors ) )
			{
				 echo '<p id="err_msg">The following error(s) occurred:<br>' ;
				 foreach ( $errors as $msg ) { echo " -<b style='color:red'> $msg</b><br>" ; }
				 echo 'Please try again.' ;
			}
		?>
	</form>
</div>


