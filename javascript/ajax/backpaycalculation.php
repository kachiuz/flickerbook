<?php

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

//jei sios vertes nepateiktos, numariname scripta
if(!isset($_POST['backPayRate'])){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }
session_start();

if ( !isset( $_SESSION[ 'user_id' ] ) ) { require ( '../../login_tools.php' ) ; load('../../index.php') ; }
require('../../../connect_db.php');

$errors = array();

$user_id = $_SESSION[ 'user_id' ];

if ( empty( $_POST['backPayRate'] ) )
{
	$errors[] = 'Back pay rate is not set!';
}
if(isset($_POST['backPayRate']))
	{
		$backPayRate = htmlentities(mysqli_real_escape_string($dbc, $_POST['backPayRate']));
		if(is_numeric($backPayRate)){$backPayRate = $backPayRate;}
		else{$errors[] = 'Back pay rate must be a numeric value!'; }
	}
else {$errors[] = 'Back pay rate is not set!'; }



if ( empty( $errors ) )
{
	//-------------------------extracting payments values 31.------------------------------------------------//
	if(isset($_POST['inputAmount1']))
	{$inputAmount1 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount1']));
		if(is_numeric($inputAmount1)){$inputAmount1 = $inputAmount1;}
		else{$inputAmount1 = 0; }
	}
	else{$inputAmount1 = 0; }

	if(isset($_POST['inputAmount2']))
	{$inputAmount2 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount2']));
		if(is_numeric($inputAmount2)){$inputAmount2 = $inputAmount2;}
		else{$inputAmount2 = 0;}
	}
	else{$inputAmount2 = 0;}

	if(isset($_POST['inputAmount3']))
	{$inputAmount3 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount3']));
		if(is_numeric($inputAmount3)){$inputAmount3 = $inputAmount3;}
		else{$inputAmount3 = 0; }
	}
	else{$inputAmount3 = 0;}

	if(isset($_POST['inputAmount4']))
	{$inputAmount4 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount4']));
		if(is_numeric($inputAmount4)){$inputAmount4 = $inputAmount4;}
		else{$inputAmount4 = 0;}
	}
	else{$inputAmount4 = 0;}

	if(isset($_POST['inputAmount5']))
	{$inputAmount5 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount5']));
		if(is_numeric($inputAmount5)){$inputAmount5 = $inputAmount5;}
		else{$inputAmount5 = 0; }
	}
	else{$inputAmount5 = 0; }

	if(isset($_POST['inputAmount6']))
	{$inputAmount6 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount6']));
		if(is_numeric($inputAmount6)){$inputAmount6 = $inputAmount6;}
		else{$inputAmount6 = 0; }
	}
	else{$inputAmount6 = 0; }

	if(isset($_POST['inputAmount7']))
	{$inputAmount7 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount7']));
		if(is_numeric($inputAmount7)){$inputAmount7 = $inputAmount7;}
		else{$inputAmount7 = 0; }
	}
	else{$inputAmount7 = 0;}

	if(isset($_POST['inputAmount8']))
	{$inputAmount8 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount8']));
		if(is_numeric($inputAmount8)){$inputAmount8 = $inputAmount8;}
		else{$inputAmount8 = 0;}
	}
	else{$inputAmount8 = 0;}

	if(isset($_POST['inputAmount9']))
	{$inputAmount9 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount9']));
		if(is_numeric($inputAmount9)){$inputAmount9 = $inputAmount9;}
		else{$inputAmount9 = 0;  }
	}
	else{$inputAmount9 = 0; }

	if(isset($_POST['inputAmount10']))
	{$inputAmount10 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount10']));
		if(is_numeric($inputAmount10)){$inputAmount10 = $inputAmount10;}
		else{$inputAmount10 = 0;  }
	}
	else{$inputAmount10 = 0; }

	if(isset($_POST['inputAmount11']))
	{$inputAmount11 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount11']));
		if(is_numeric($inputAmount11)){$inputAmount11 = $inputAmount11;}
		else{$inputAmount11 = 0;  }
	}
	else{$inputAmount11 = 0;  }

	if(isset($_POST['inputAmount12']))
	{$inputAmount12 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount12']));
		if(is_numeric($inputAmount12)){$inputAmount12 = $inputAmount12;}
		else{$inputAmount12 = 0; }
	}
	else{$inputAmount12 = 0;  }

	if(isset($_POST['inputAmount13']))
	{$inputAmount13 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount13']));
		if(is_numeric($inputAmount13)){$inputAmount13 = $inputAmount13;}
		else{$inputAmount13 = 0; }
	}
	else{$inputAmount13 = 0; }

	if(isset($_POST['inputAmount14']))
	{$inputAmount14 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount14']));
		if(is_numeric($inputAmount14)){$inputAmount14 = $inputAmount14;}
		else{$inputAmount14 = 0;  }
	}
	else{$inputAmount14 = 0;  }

	if(isset($_POST['inputAmount15']))
	{$inputAmount15 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount15']));
		if(is_numeric($inputAmount15)){$inputAmount15 = $inputAmount15;}
		else{$inputAmount15 = 0; }
	}
	else{$inputAmount15 = 0; }

	if(isset($_POST['inputAmount16']))
	{$inputAmount16 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount16']));
		if(is_numeric($inputAmount16)){$inputAmount16 = $inputAmount16;}
		else{$inputAmount16 = 0;  }
	}
	else{$inputAmount16 = 0;  }

	if(isset($_POST['inputAmount17']))
	{$inputAmount17 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount17']));
		if(is_numeric($inputAmount17)){$inputAmount17 = $inputAmount17;}
		else{$inputAmount17 = 0; }
	}
	else{$inputAmount17 = 0; }

	if(isset($_POST['inputAmount18']))
	{$inputAmount18 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount18']));
		if(is_numeric($inputAmount18)){$inputAmount18 = $inputAmount18;}
		else{$inputAmount18 = 0; }
	}
	else{$inputAmount18 = 0; }

	if(isset($_POST['inputAmount19']))
	{$inputAmount19 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount19']));
		if(is_numeric($inputAmount19)){$inputAmount19 = $inputAmount19;}
		else{$inputAmount19 = 0; }
	}
	else{$inputAmount19 = 0; }

	if(isset($_POST['inputAmount20']))
	{$inputAmount20 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount20']));
		if(is_numeric($inputAmount20)){$inputAmount20 = $inputAmount20;}
		else{$inputAmount20 = 0; }
	}
	else{$inputAmount20 = 0; }

	if(isset($_POST['inputAmount21']))
	{$inputAmount21 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount21']));
		if(is_numeric($inputAmount21)){$inputAmount21 = $inputAmount21;}
		else{$inputAmount21 = 0; }
	}
	else{$inputAmount21 = 0; }

	if(isset($_POST['inputAmount22']))
	{$inputAmount22 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount22']));
		if(is_numeric($inputAmount22)){$inputAmount22 = $inputAmount22;}
		else{$inputAmount22 = 0;}
	}
	else{$inputAmount22 = 0;}

	if(isset($_POST['inputAmount23']))
	{$inputAmount23 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount23']));
		if(is_numeric($inputAmount23)){$inputAmount23 = $inputAmount23;}
		else{$inputAmount23 = 0;}
	}
	else{$inputAmount23 = 0;}

	if(isset($_POST['inputAmount24']))
	{$inputAmount24 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount24']));
		if(is_numeric($inputAmount24)){$inputAmount24 = $inputAmount24;}
		else{$inputAmount24 = 0;}
	}
	else{$inputAmount24 = 0;}

	if(isset($_POST['inputAmount25']))
	{$inputAmount25 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount25']));
		if(is_numeric($inputAmount25)){$inputAmount25 = $inputAmount25;}
		else{$inputAmount25 = 0;}
	}
	else{$inputAmount25 = 0;}

	if(isset($_POST['inputAmount26']))
	{$inputAmount26 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount26']));
		if(is_numeric($inputAmount26)){$inputAmount26 = $inputAmount26;}
		else{$inputAmount26 = 0;}
	}
	else{$inputAmount26 = 0;}

	if(isset($_POST['inputAmount27']))
	{$inputAmount27 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount27']));
		if(is_numeric($inputAmount27)){$inputAmount27 = $inputAmount27;}
		else{$inputAmount27 = 0;}
	}
	else{$inputAmount27 = 0;}

	if(isset($_POST['inputAmount28']))
	{$inputAmount28 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount28']));
		if(is_numeric($inputAmount28)){$inputAmount28 = $inputAmount28;}
		else{$inputAmount28 = 0; }
	}
	else{$inputAmount28 = 0; }
	
	if(isset($_POST['inputAmount29']))
	{$inputAmount29 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount29']));
		if(is_numeric($inputAmount29)){$inputAmount29 = $inputAmount29;}
		else{$inputAmount29 = 0; }
	}
	else{$inputAmount29 = 0; }
	
	if(isset($_POST['inputAmount30']))
	{$inputAmount30 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount30']));
		if(is_numeric($inputAmount30)){$inputAmount30 = $inputAmount30;}
		else{$inputAmount30 = 0; }
	}
	else{$inputAmount30 = 0; }
	
	if(isset($_POST['inputAmount31']))
	{$inputAmount31 = htmlentities(mysqli_real_escape_string($dbc, $_POST['inputAmount31']));
		if(is_numeric($inputAmount31)){$inputAmount31 = $inputAmount31;}
		else{$inputAmount31 = 0; }
	}
	else{$inputAmount31 = 0; }
	

//extracting checkbox values 31 -------------------------------------------------------------------------------------//
	
	//true false
	
	if(isset($_POST['checkBox1']))
		{$checkBox1 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox1']));}
	else{$checkBox1 = "false";}
	
	if(isset($_POST['checkBox2']))
		{$checkBox2 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox2']));}
	else{$checkBox2 = "false";}
	
	if(isset($_POST['checkBox3']))
		{$checkBox3 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox3']));}
	else{$checkBox3 = "false";}
	
	if(isset($_POST['checkBox4']))
		{$checkBox4 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox4']));}
	else{$checkBox4 = "false";}
	
	if(isset($_POST['checkBox5']))
		{$checkBox5 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox5']));}
	else{$checkBox5 = "false";}
	
	if(isset($_POST['checkBox6']))
		{$checkBox6 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox6']));}
	else{$checkBox6 = "false";}
	
	if(isset($_POST['checkBox7']))
		{$checkBox7 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox7']));}
	else{$checkBox7 = "false";}
	
	if(isset($_POST['checkBox8']))
		{$checkBox8 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox8']));}
	else{$checkBox8 = "false";}
	
	if(isset($_POST['checkBox9']))
		{$checkBox9 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox9']));}
	else{$checkBox9 = "false";}
	
	if(isset($_POST['checkBox10']))
		{$checkBox10 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox10']));}
	else{$checkBox10 = "false";}
	
	if(isset($_POST['checkBox11']))
		{$checkBox11 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox11']));}
	else{$checkBox11 = "false";}
	
	if(isset($_POST['checkBox12']))
		{$checkBox12 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox12']));}
	else{$checkBox12 = "false";}
	
	if(isset($_POST['checkBox13']))
		{$checkBox13 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox13']));}
	else{$checkBox13 = "false";}
	
	if(isset($_POST['checkBox14']))
		{$checkBox14 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox14']));}
	else{$checkBox14 = "false";}
	
	if(isset($_POST['checkBox15']))
		{$checkBox15 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox15']));}
	else{$checkBox15 = "false";}
	
	if(isset($_POST['checkBox16']))
		{$checkBox16 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox16']));}
	else{$checkBox16 = "false";}
	
	if(isset($_POST['checkBox17']))
		{$checkBox17 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox17']));}
	else{$checkBox17 = "false";}
	
	if(isset($_POST['checkBox18']))
		{$checkBox18 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox18']));}
	else{$checkBox18 = "false";}
	
	if(isset($_POST['checkBox19']))
		{$checkBox19 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox19']));}
	else{$checkBox19 = "false";}
	
	if(isset($_POST['checkBox20']))
		{$checkBox20 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox20']));}
	else{$checkBox20 = "false";}
	
	if(isset($_POST['checkBox21']))
		{$checkBox21 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox21']));}
	else{$checkBox21 = "false";}
	
	if(isset($_POST['checkBox22']))
		{$checkBox22 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox22']));}
	else{$checkBox22 = "false";}
	
	if(isset($_POST['checkBox23']))
		{$checkBox23 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox23']));}
	else{$checkBox23 = "false";}
	
	if(isset($_POST['checkBox24']))
		{$checkBox24 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox24']));}
	else{$checkBox24 = "false";}
	
	if(isset($_POST['checkBox25']))
		{$checkBox25 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox25']));}
	else{$checkBox25 = "false";}
	
	if(isset($_POST['checkBox26']))
		{$checkBox26 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox26']));}
	else{$checkBox26 = "false";}
	
	if(isset($_POST['checkBox27']))
		{$checkBox27 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox27']));}
	else{$checkBox27 = "false";}
	
	if(isset($_POST['checkBox28']))
		{$checkBox28 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox28']));}
	else{$checkBox28 = "false";}
	
	if(isset($_POST['checkBox29']))
		{$checkBox29 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox29']));}
	else{$checkBox29 = "false";}
	
	if(isset($_POST['checkBox30']))
		{$checkBox30 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox30']));}
	else{$checkBox30 = "false";}
	
	if(isset($_POST['checkBox31']))
		{$checkBox31 = htmlentities(mysqli_real_escape_string($dbc, $_POST['checkBox31']));}
	else{$checkBox31 = "false";}
	
	
	//-------------------calculating total amount for back pay-----------------------------------------//
	$totalAmountForBackPay = 0;
	
	if ($checkBox1 == "true")
		{$totalAmountForBackPay += $inputAmount1;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox2 == "true")
		{$totalAmountForBackPay += $inputAmount2;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox3 == "true")
		{$totalAmountForBackPay += $inputAmount3;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox4 == "true")
		{$totalAmountForBackPay += $inputAmount4;}
	else{$totalAmountForBackPay;}
		
	if ($checkBox5 == "true")
		{$totalAmountForBackPay += $inputAmount5;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox6 == "true")
		{$totalAmountForBackPay += $inputAmount6;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox7 == "true")
		{$totalAmountForBackPay += $inputAmount7;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox8 == "true")
		{$totalAmountForBackPay += $inputAmount8;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox9 == "true")
		{$totalAmountForBackPay += $inputAmount9;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox10 == "true")
		{$totalAmountForBackPay += $inputAmount10;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox11 == "true")
		{$totalAmountForBackPay += $inputAmount11;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox12 == "true")
		{$totalAmountForBackPay += $inputAmount12;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox13 == "true")
		{$totalAmountForBackPay += $inputAmount13;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox14 == "true")
		{$totalAmountForBackPay += $inputAmount14;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox15 == "true")
		{$totalAmountForBackPay += $inputAmount15;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox16 == "true")
		{$totalAmountForBackPay += $inputAmount16;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox17 == "true")
		{$totalAmountForBackPay += $inputAmount17;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox18 == "true")
		{$totalAmountForBackPay += $inputAmount18;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox19 == "true")
		{$totalAmountForBackPay += $inputAmount19;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox20 == "true")
		{$totalAmountForBackPay += $inputAmount20;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox21 == "true")
		{$totalAmountForBackPay += $inputAmount21;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox22 == "true")
		{$totalAmountForBackPay += $inputAmount22;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox23 == "true")
		{$totalAmountForBackPay += $inputAmount23;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox24 == "true")
		{$totalAmountForBackPay += $inputAmount24;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox25 == "true")
		{$totalAmountForBackPay += $inputAmount25;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox26 == "true")
		{$totalAmountForBackPay += $inputAmount26;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox27 == "true")
		{$totalAmountForBackPay += $inputAmount27;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox28 == "true")
		{$totalAmountForBackPay += $inputAmount28;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox29 == "true")
		{$totalAmountForBackPay += $inputAmount29;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox30 == "true")
		{$totalAmountForBackPay += $inputAmount30;}
	else{$totalAmountForBackPay;}
	
	if ($checkBox31 == "true")
		{$totalAmountForBackPay += $inputAmount31;}
	else{$totalAmountForBackPay;}
	
	$totalAmountForBackPay = round(($totalAmountForBackPay),2);
	$backPayAmount = round(($totalAmountForBackPay * $backPayRate/100),2);

	$backpayArray = array ("errors"=>$errors);
	$backpayArray += array ("backPayAmount"=>$backPayAmount, "totalAmountForBackPay"=>$totalAmountForBackPay);
	
	$jsonFile = json_encode($backpayArray);
	echo $jsonFile;
	mysqli_close($dbc);
}
else
{
	$backpayArray = array("errors"=>$errors);
	$jsonFile = json_encode($backpayArray);
	echo $jsonFile;
	mysqli_close($dbc);	
}


?>