<?php
include("Dbh.php");

class ProductAdding extends Dbh
{
    public function addProduct($inputs){
        $type = $inputs["productType"];
        if($type == ""){
            $errorMessage = "Please, submit required data";
            echo $errorMessage;
        }
        else{
            $newProduct = new $type($inputs);
            $errorMessage = $newProduct -> validate($inputs);
            if($errorMessage == ""){
                $sku = $newProduct -> getSku();
                $name = $newProduct -> getName();
                $price = $newProduct -> getPrice();
                $special = $newProduct -> getSpecial();
                $query= "INSERT INTO products VALUES('$sku', '$type', '$name', '$price', '$special')";
                $connect = $this -> connect();
                $result = mysqli_query($connect, $query);
                if(!$result){
                    $errorMessage = "SKU already exists!";
                    echo $errorMessage;
                }
            }
            else{
                echo $errorMessage;
            }
        }
    }
}
