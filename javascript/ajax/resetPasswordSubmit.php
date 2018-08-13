<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../resetpassword.php') ; }

if (!isset($_POST['resetPasswordEmail'])) {require ( '../../login_tools.php' ) ; load('../../resetpassword.php') ;}
require('../../../connect_db.php');
//This code runs if the form has been submitted

$errors = array();

if(!empty($_POST['resetPasswordEmail']))
{
	$email = htmlentities(mysqli_real_escape_string( $dbc, trim( $_POST[ 'resetPasswordEmail' ] ) )) ;
	
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$errors[] = 'Please enter a valid email address';
	}
}
else{
	$errors[] = "Enter an Email Address!";
}


//reikia sugalvoti kaip paimti response verte su javascript, arba reikes atsisakyti ajax
/*if(isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response'])
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
	else{$errors[] = 'Verification check failed.';}*/
	
	
// check for valid email address
if(!empty( $errors ))
{
	$loadIndexesArray = array("errors"=>$errors);
	$jsonFile = json_encode($loadIndexesArray);
	Die ($jsonFile = json_encode($loadIndexesArray));
}
else
{
	$checkQuery = "SELECT email FROM users WHERE email = '$email'";
	$check = mysqli_query($dbc, $checkQuery);
	$check2 = mysqli_num_rows($check);

	//if the name exists it gives an error
	if ($check2 == 0) {
		$errors[] = 'Sorry, we can not find your account details please try another email address.';
	}
	elseif($check2 == 1)
	{
		$email = $email; //whateva
	}	
	else{
		$errors[] = 'Sorry, we can not find your account details please try another email address.';
	}

	if(!empty( $errors ))
	{
		$loadIndexesArray = array("errors"=>$errors);
		$jsonFile = json_encode($loadIndexesArray);
		Die ($jsonFile = json_encode($loadIndexesArray));
	}
	
	//create new random password
	$password = substr(md5(uniqid(rand(),1)),3,10);
	$pass = password_hash($password, PASSWORD_DEFAULT,['cost' => 12] ) ;
	
	
	//send email with new password
	$to = $email;
	$subject = 'Reseting your Flickerbook password' ;
	$message = "Hi,you or someone else have requested to change your Flickerbook password. 
	Your new password is:
	$password 
	Your password has been reset please login and change your password to something more memorable as soon as possible.
	Regards, Flickerbook."; ;
	$headers = 'From: noReply@flickerbook.co.uk' . PHP_EOL ;
	mail ( $to, $subject, $message, $headers ) ;
	
	$updteQuery = "UPDATE users SET pass='$pass' WHERE email = '$email'";
	$sql = mysqli_query($dbc, $updteQuery);
		
	$loadIndexesArray = array ("errors"=>$errors);
	$jsonFile = json_encode($loadIndexesArray);
	echo $jsonFile;
	mysqli_close($dbc);
	

}

/*



// checks if the username is in use

// REPLACE THE LINE BELOW WITH YOUR E-MAIL ADDRESS.
$to = 'kachiuz@gmail.com' ;
$subject = 'From PHP contact page' ;

// NOT SUGGESTED TO CHANGE THESE VALUES
$message = "lol" ;
$headers = 'From: noReply@flickerbook.co.uk' . PHP_EOL ;
mail ( $to, $subject, $message, $headers ) ;




// if no errors then carry on
/*
if (!$error) {
$query = "SELECT username FROM users WHERE email = '$email' "
$query = mysqli_query()or die (mysqli_error());
$r = mysqli_fetch_object($query);

//create a new random password

/////$password = substr(md5(uniqid(rand(),1)),3,10);
/////$pass = password_hash($password, PASSWORD_DEFAULT,['cost' => 12] ) ;
//$pass = md5($password); //encrypted version for database entry

//send email
$to = $email;
$subject = "Account Details Recovery";
$body = "Hi, nn you or someone else have requested your account details. 
nn Here is your account information please keep this as you may need this at a later stage. 
nn Your username is nn your password is:
nn $password 
nn Your password has been reset please login and change your password to something more rememberable.
nn Regards Site Admin";
//$additionalheaders = "From: <noReply@flickerbook.co.uk>rn";
$additionalheaders = 'From: <noReply@flickerbook.co.uk>' . PHP_EOL ;
//$additionalheaders .= "Reply-To: noprely@domain.com";
mail($to, $subject, $body, $additionalheaders);

//update database
////$updteQuery = "UPDATE users SET pass='$pass' WHERE email = '$email'";
////$sql = mysqli_query($dbc, $updteQuery)or die (mysqli_error($dbc));
//$rsent = true;


}// close errors
// close if form sent

//show any errors

if (!empty($error))
{
        $i = 0;
        while ($i < count($error)){
        echo "<div class='msg-error'>".$error[$i]."</div>";
        $i ++;}
}// close if empty errors


if ($rsent == true){
    echo "<p>You have been sent an email with your account details to $email</p>n";
    } else {
    echo "<p>Please enter your e-mail address. You will receive a new password via e-mail.</p>n";
    }
	*/
	
?>