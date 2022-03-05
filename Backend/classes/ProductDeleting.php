<?php
include("Dbh.php");

class ProductDeleting extends Dbh
{
    public function deleteProduct($delete){
        $connect = $this -> connect();
        foreach ($delete as $sku) {
            $query= "DELETE FROM products WHERE sku= '$sku' ";
            mysqli_query($connect, $query);
        }
    }
}
