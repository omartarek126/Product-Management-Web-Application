<?php
include("../includes/core.php");
include("../includes/autoloader.php");

$_POST = json_decode(file_get_contents("php://input"),true);
$productDelete = new ProductDeleting;
$productDelete -> deleteProduct($_POST['delete']);
