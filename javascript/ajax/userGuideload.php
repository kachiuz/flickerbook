<?php
require('limits/flickerbookStartEndDates.php');
$loadIndexesArray = array ("startDateOfFlickerbook"=>$startDateOfFlickerbook);
$loadIndexesArray += array ("surrentEndDateOfFlickrbook" =>$surrentEndDateOfFlickrbook);
$jsonFile = json_encode($loadIndexesArray);
echo $jsonFile;
?>