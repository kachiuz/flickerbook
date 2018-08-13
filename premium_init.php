<?php
session_start();
if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( 'login_tools.php' ) ; load('index.php') ; }
//connect to database
require('../connect_db.php');

//composers autoloader
require_once ('vendor/autoload.php');

$user_id = $_SESSION[ 'user_id' ];
$email = $_SESSION['email'];

$stripe = array();

//test keys, replace it with live keys when public
$stripe = ['publishable'=>'pk_test_hE3dSbKi3dW5hsFO1H6HoiOd', 'private'=>'sk_test_M6BlSE3JAWU6vSHb7MO6q90y'];


Stripe::setApiKey($stripe['private']);

//pick up premium value $premium
require_once ('javascript/ajax/includes/selectPremium.php');

?>