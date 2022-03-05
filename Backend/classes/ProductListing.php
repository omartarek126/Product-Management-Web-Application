<?php
include("Dbh.php");
include("AbstractProduct.php");

class ProductListing extends Dbh
{
    public function listProducts()
    {
        $query= "SELECT * FROM products";
        $connect = $this -> connect();
        $result = mysqli_query($connect, $query);
        $productList = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $product = new Product($row['sku'], $row['type'], $row['name'], $row['price'], $row['special']);
            array_push($productList, $product->getAll());
        }
        echo json_encode($productList);
    }
}
