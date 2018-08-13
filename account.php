<?php session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load() ; }

?>


<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Flickerbook Change Account Details</title>
		<link type="text/css" rel="stylesheet" href="style.css">
		<link rel="icon" href="favicon.ico" type="image/x-icon" />
		<script type="text/javascript" src="javascript/accountload.js"></script>
		<script type="text/javascript" src="javascript/menu.js"></script>
	</head>
<body>
	<?php require ( 'includes/logo.html' ) ;?>
	<div id="hiddenMenuContainer">
		<div id="hiddenMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
	</div>
	<div id="mainMenu"><?php require ( 'includes/menu.html' ) ; ?></div>
	<div class="paymentsCaption">Account Settings</div>
	<div class="account">
		<p>You can only change your first and last names in this section. If you want to change email address, you can do so at the bottom of this page. For an updated account info to take affect you have to relog to your account.</p>
		<p><input class="alignCenter alignCenterAccount" type="text" id="firstName" placeholder="First Name" name="first_name" size="23" value="<?php if (isset($_POST['first_name'])) {echo $_POST['first_name'];}else {$_SESSION['first_name'];} ?>"></p>
		<p><input class="alignCenter alignCenterAccount" type="text" id="lastName" placeholder="Last Name" name="last_name" size="23" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>"></p>
		<p><input class="alignCenter alignCenterAccount" type="text" id="email" placeholder="Email" name="email" size="23" value="" readonly></p>
		<p><input class="alignCenter alignCenterAccount" type="text" id="memberSince" placeholder="Member since" name="memberSince" size="23" value="" readonly></p>
		<div class="tableBottomBP">
			<div class="registerButton">
				<input type="submit" value="Change" id="changeNames"name="changeNames" class="loginButton loginButtonAccount">
			</div>
		</div>
		<div class="tableBottomBP">
			<div class="buttonAlign">
				<div id="accountChangeNamesResponse"></div>
			</div>
		</div>
	</div>
	<div class="paymentsCaption">Change Password</div>
	<div class="account">
		<div class="registerValues">
			<p><input class="alignCenter alignCenterAccount" type="password" id="pass1" name="pass1" placeholder="Current password" size="23" ></p>
			<p><input class="alignCenter alignCenterAccount" type="password" id="pass2" name="pass2" placeholder="New password"size="23" ></p>
			<p><input class="alignCenter alignCenterAccount" type="password" id="pass3" name="pass3" placeholder="New password"size="23" ></p>
		</div>
		<div class="tableBottomBP">
			<div class="registerButton">
				<input type="submit" value="Change" id="changePassword"name="changePassword" class="loginButton loginButtonAccount">
			</div>
		</div>
		<div class="tableBottomBP">
			<div class="buttonAlign"><div id="accountChangePasswordResponse"></div></div>
		</div>
	</div>
	<div class="paymentsCaption">Change Email</div>
	<div class="account">
		<p>Remember, email is used to log in to Flickerbook, so if you change it, you will have to use the new email to log in.</p>
		<div class="registerValues">
			<p><input class="alignCenter alignCenterAccount" type="text" name="email1" id="email1" placeholder="Current Email" size="20" ></p>
			<p><input class="alignCenter alignCenterAccount" type="text" name="email2" id="email2" placeholder="New Email" size="20" ></p>
			<p><input class="alignCenter alignCenterAccount" type="text" name="email3" id="email3" placeholder="New Email" size="20" ></p>
		</div>
		<div class="tableBottomBP">
			<div class="registerButton">
				<input type="submit" value="Change" id="changeEmail" name="changeEmail" class="loginButton loginButtonAccount">
			</div>
		</div>
			<div class="tableBottomBP">
			<div class="buttonAlign"><div id="accountChangeEmailResponse"></div></div>
		</div>
	</div>
	<div class="paymentsCaption">Allow To Load Payment Settings</div>
	<div class="account">
		<p>If you want to enable other users to use your payment settings, thick the checkbox below.</p>
		I allow to use my payment settings: <input type="checkbox" name ="changePaySetAllowBox" id="changePaySetAllowBox"><br><br>
		<div class="tableBottomBP">
			<div class="registerButton">
				<input type="submit" value="Change" id="changePaySetAllow" name="changePaySetAllow" class="loginButton loginButtonAccount">
			</div>
		</div>
			<div class="tableBottomBP">
			<div class="buttonAlign"><div id="accountPaySetAllowResponse"></div></div>
		</div>
	</div>
	<?php require ( 'includes/footer.html' ) ; ?>	
</body>
</html>