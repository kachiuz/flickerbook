<?php # DISPLAY COMPLETE REGISTRATION PAGE.

if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ){ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

if (!isset($_POST['email']))	{ require ( '../../login_tools.php' ) ; load('../../index.php') ; }

  # Connect to the database.
  require ('../../../connect_db.php'); 
  
  # Initialize an error array.
  $errors = array();
  if ( empty( $_POST[ 'email' ] ) )
	{ $errors[] = 'Enter email address.' ; 
	$paymentsSettingsArray = array("errors"=>$errors);
	$jsonFile = json_encode($paymentsSettingsArray);
	Die ($jsonFile = json_encode($paymentsSettingsArray));
	}
	
	
  if(isset($_POST['email'])){
	$email = htmlentities(mysqli_real_escape_string($dbc, $_POST['email']));}
	else {$errors[] = 'Enter email address';
		$paymentsSettingsArray = array("errors"=>$errors);
		$jsonFile = json_encode($paymentsSettingsArray);
		Die ($jsonFile = json_encode($paymentsSettingsArray));
	}
 
  # check if email is valid
	 function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
	
  if ( empty( $errors ) )
  {
  $email = test_input($email);
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$errors[] = "Invalid email format"; 
		$paymentsSettingsArray = array("errors"=>$errors);
		$jsonFile = json_encode($paymentsSettingsArray);
		Die ($jsonFile = json_encode($paymentsSettingsArray));
	}
  }
  
   # Check if email address is registered.
  if ( empty( $errors ) )
  {
    $queryEmail = "SELECT email FROM users WHERE email='$email'" ;
    $resultEmail = @mysqli_query ( $dbc, $queryEmail ) ;
    if ( mysqli_num_rows( $resultEmail ) == 0 ) 
		{$errors[] = 'Email address not found or user has not allowed to use it.' ;
		$paymentsSettingsArray = array("errors"=>$errors);
		$jsonFile = json_encode($paymentsSettingsArray);
		Die ($jsonFile = json_encode($paymentsSettingsArray));
		}
  }
     # Check if user has allowed to use his email.
  //if ( empty( $errors ) )
 //{
    $queryPaySetAllow = "SELECT allow_pay_set FROM users WHERE email='$email'" ;
    $resultPaySetAllow = @mysqli_query ( $dbc, $queryPaySetAllow ) ;
    $numPaySetAllow  = mysqli_num_rows($resultPaySetAllow);
	if($numPaySetAllow>0)
	{while ($rowPSA = mysqli_fetch_array($resultPaySetAllow, MYSQLI_ASSOC))
		{
			$allow_pay_set = $rowPSA['allow_pay_set'];
		}
	}
	else{
		$allow_pay_set = 0;
	}

	//patikriname ar vartotojas leido naudoti savo email
	if ($allow_pay_set != 1)
	{
		$errors[] = 'Email address not found or user has not allowed to use it.'; 
		$paymentsSettingsArray = array("errors"=>$errors);
		$jsonFile = json_encode($paymentsSettingsArray);
		Die ($jsonFile = json_encode($paymentsSettingsArray));
	}
	
  //paimame user_id pagal email, kad veiktu zemiau esantis sctiptas
		$queryUserID = "SELECT user_id FROM users WHERE email='$email'" ;
		$resultUserId = @mysqli_query ( $dbc, $queryUserID ) ;
		$numUserId  = mysqli_num_rows($resultUserId);
		if($numUserId>0){
		while ($rowUserId = mysqli_fetch_array($resultUserId, MYSQLI_ASSOC))
		{
			$user_id = $rowUserId['user_id'];
		}
		}
		else{
			$errors[] = 'Email address or user not found';
			$paymentsSettingsArray = array("errors"=>$errors);
			$jsonFile = json_encode($paymentsSettingsArray);
			Die ($jsonFile = json_encode($paymentsSettingsArray));
		}	
  
	if ( empty( $errors ) )
	{
		
		require ('includes/selectAllCurrentPayments.php');

		//null idiegta tik todel, kad pridejus nauja column ir nenustacius ju verciu neveikia programa
		// arba jei vartotojas ivede nuli, geriau jo nerodyti, nes tada neatvaizduojamas placeholder
		if ($unpaidBreakQuantity == NULL){$unpaidBreakQuantity = 0;}		
		if ($unpaidBreakLength == NULL){$unpaidBreakLength = 0;}	
		if ($unsocial_prem_rate == 0){$unsocial_prem_rate = NULL;}
		if ($overtime1_rate == 0){$overtime1_rate = NULL;}
		if ($overtime2_rate == 0){$overtime2_rate = NULL;}
		if ($hourlyRate == 0){$hourlyRate = NULL;}
		if ($enhancedHolidayRate == 0){$enhancedHolidayRate = NULL;}
		if ($bankHolidayClockInBonusValue == 0){$bankHolidayClockInBonusValue = NULL;}
		if ($clockInBonusHours == 0){$clockInBonusHours = NULL;}	
		if ($additionalPayment == 0){$additionalPayment = NULL;}
		if ($holidayStart == NULL){$holidayStart = 0;}
		if ($holidaysPerYear == 0){$holidaysPerYear = NULL;}
		if ($bHol_in == NULL){$bHol_in = 0;}
		if ($payBack == 0){$payBack = NULL;}
		if ($SSP ==0){$SSP = NULL;}
		if ($SPP == 0){$SPP = NULL;}
		if ($unsociableHoursCheck == NULL){$unsociableHoursCheck = 0;}
		if ($unsociable_Hour_Start == NULL){$unsociable_Hour_Start = 0;}
		if ($unsociable_Hour_Finish == NULL){$unsociable_Hour_Finish = 0;}
		if ($overtime1_Start == 0){$overtime1_Start = NULL;}
		if ($overtime1_Finish == 0){$overtime1_Finish = NULL;}
		if ($overtime2_start == 0){$overtime2_start = NULL;}
		if ($overtime2_Finish == 0){$overtime2_Finish = NULL;}
		if ($holiday_Overtime == NULL){$holiday_Overtime = 0;}
		if ($sick_Overtime == NULL){$sick_Overtime = 0;}
		if ($paternity_Overtime == NULL){$paternity_Overtime = 0;}
		if ($comp_Overtime == NULL){$comp_Overtime = 0;}
		if ($bereavement_Overtime == NULL){$bereavement_Overtime = 0;}
		if ($overtimeCheck == NULL){$overtimeCheck = 0;}
		if ($overtimeCheck2 == NULL){$overtimeCheck2 = 0;}	
		if ($additionalPayment2 == 0){$additionalPayment2 = NULL;}
		if ($additionalPayment2Name == NULL){$additionalPayment2Name = NULL;}
		if ($additionalPayment3 == 0){$additionalPayment3 = NULL;}
		if ($additionalPayment3Name == NULL){$additionalPayment3Name = NULL;}
		if ($saturdayExtraRate == 0){$saturdayExtraRate = NULL;}		
		if ($sundayExtraRate == 0){$sundayExtraRate = NULL;}	
		if ($pieceWork == 0){$pieceWork = NULL;}
		if ($SAP == 0){$SAP = NULL;}
		if ($salary == 0){$salary = NULL;}
		if ($bonus == 0){$bonus = NULL;}
		if ($commissions == 0){$commissions = NULL;}

		$paymentsSettingsArray = array ('unpaidBreakQuantity' => $unpaidBreakQuantity, 'unpaidBreakLength' => $unpaidBreakLength, 'unsocial_prem_rate' => $unsocial_prem_rate);
		$paymentsSettingsArray += array ('overtime1rate' => $overtime1_rate, 'overtime2start'=>$overtime2_start, 'hourlyRate'=>$hourlyRate);
		$paymentsSettingsArray += array ('enhancedHolidayRate'=>$enhancedHolidayRate, 'clockInBonus' => $bankHolidayClockInBonusValue );
		$paymentsSettingsArray += array ('clockInBonusHours'=>$clockInBonusHours, 'additionalPayment'=>$additionalPayment, 'bHol_in' => $bHol_in);
		$paymentsSettingsArray += array ('weekStart' => $weekStart, 'holidayYearStart' => $holidayStart, 'holidaysPerYear' => $holidaysPerYear );
		$paymentsSettingsArray += array ('unsociableHoursCheck' => $unsociableHoursCheck, 'unsociableHourStart' => $unsociable_Hour_Start, 'unsociableHourFinish' => $unsociable_Hour_Finish);
		$paymentsSettingsArray += array ('overtime1Start' => $overtime1_Start, 'overtime1Finish' => $overtime1_Finish);
		$paymentsSettingsArray += array ('overtime2Finish' => $overtime2_Finish, 'overtime2rate'=>$overtime2_rate);
		$paymentsSettingsArray += array ('holidayOvertime'=> $holiday_Overtime, 'sickOvertime' => $sick_Overtime);
		$paymentsSettingsArray += array ('bereavementOvertime'=>$bereavement_Overtime, 'shiftTypeIndex'=>$shiftTypeIndex);
		$paymentsSettingsArray += array ('shiftLengthIndex'=>$shiftLengthIndex, 'employerName'=>$employerName, 'jobTitle'=>$jobTitle, 'weekStart'=>$weekStart);
		$paymentsSettingsArray += array ('overtimeCheck'=>$overtimeCheck, 'overtimeCheck2'=>$overtimeCheck2, 'additionalPaymentName'=>$additionalPaymentName);
		$paymentsSettingsArray += array ('payback'=>$payBack, 'SSP'=>$SSP, 'SPP'=>$SPP, 'additionalPayment2Name'=>$additionalPayment2Name, 'additionalPayment3Name'=>$additionalPayment3Name);
		$paymentsSettingsArray += array ('additionalPayment2'=>$additionalPayment2, 'additionalPayment3'=>$additionalPayment3);
		$paymentsSettingsArray += array ('paternityOvertime' => $paternity_Overtime, 'compOvertime' => $comp_Overtime, 'partialBereavementPay' => $partialBereavementPay);
		$paymentsSettingsArray += array ('partialSickPay' => $partialSickPay, 'partialPaternityPay' => $partialPaternityPay, 'partialCompassionatePay' => $partialCompassionatePay);
		$paymentsSettingsArray += array ('holidayStartDay' => $holidayStartDay, 'holidayStartMonth'=>$holidayStartMonth, 'holidayStartDay'=>$holidayStartDay);
		$paymentsSettingsArray += array ('extraRateSaturday' => $saturdayExtraRate, 'extraRateSunday'=>$sundayExtraRate, 'weekendHoursCheck'=>$weekendHoursCheck);
		$paymentsSettingsArray += array ('pieceWork'=>$pieceWork);
		$paymentsSettingsArray += array ('errors'=>$errors);
		$paymentsSettingsArray += array ('SAP' => $SAP, 'salary'=>$salary, 'bonus'=>$bonus, 'commissions'=>$commissions);
		//$paymentsSettingsArray +=array('errors');

		$jsonFile = json_encode($paymentsSettingsArray);
		echo $jsonFile;
		mysqli_close($dbc);
	}
	else
	{
		$paymentsSettingsArray = array("errors"=>$errors);
		$jsonFile = json_encode($paymentsSettingsArray);
		echo $jsonFile;
		mysqli_close($dbc);
	}
?>