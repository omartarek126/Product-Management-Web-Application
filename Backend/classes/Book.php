<?php
include("AbstractProduct.php");

class Book extends Product
{
    private $weight;

    public function __construct(array $inputs)
    {
        $this -> weight = (float) $inputs['weight'];
        $special = "Weight: " . $this -> weight . "KG";
        parent::__construct($inputs['sku'], "Book", $inputs['name'], (float) $inputs['price'], $special);
    }

    public function getWeight()
    {
        return $this -> weight;
    }

    public function validate(array $inputs){
        if(trim($inputs['weight']) == ""){
            return "Please, submit required data";
        }
        if(parent::validate($inputs) != ""){
            return parent::validate($inputs);
        }        
        if(!is_numeric($inputs['weight'])){
            return "Please, provide the data of indicated type";
        }
    }
}
