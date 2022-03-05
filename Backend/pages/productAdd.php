<?php
include("../includes/core.php");
include("../includes/autoloader.php");

$_POST = json_decode(file_get_contents("php://input"),true);
if(isset($_POST)){
    $productAdd = new ProductAdding;
    $productAdd -> addProduct($_POST);
}
