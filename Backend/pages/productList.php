<?php
include("../includes/core.php");
include("../includes/autoloader.php");

$productList = new ProductListing;
$productList -> listProducts();
