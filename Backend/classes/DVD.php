<?php
include("AbstractProduct.php");

class DVD extends Product
{
    private $size;

    public function __construct(array $inputs)
    {
        $this -> size = (float) $inputs['size'];
        $special = "Size: " . $this -> size . " MB";
        parent::__construct($inputs['sku'], "DVD", $inputs['name'], (float) $inputs['price'], $special);
    }

    public function getSize()
    {
        return $this -> size;
    }

    public function validate(array $inputs){
        if(trim($inputs['size']) == ""){
            return "Please, submit required data";
        }
        if(parent::validate($inputs) != ""){
            return parent::validate($inputs);
        }        
        if(!is_numeric($inputs['size'])){
            return "Please, provide the data of indicated type";
        }
    }

}
