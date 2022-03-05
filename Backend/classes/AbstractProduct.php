<?php
include("ValidateInterface.php");

class Product implements validate
{
    private $sku;
    private $type;
    private $name;
    private $price;
    private $special;

    public function __construct(string $sku, string $type, string $name, float $price, string $special)
    {
        $this -> sku = $sku;
        $this -> type = $type;
        $this -> name = $name;
        $this -> price = $price;
        $this -> special = $special;
    }

    public function getSku()
    {
        return $this -> sku;
    }

    public function getName()
    {
        return $this -> name;
    }

    public function getPrice()
    {
        return $this -> price;
    }

    public function getType()
    {
        return $this -> type;
    }

    public function getSpecial()
    {
        return $this -> special;
    }
    
    public function getAll()
    {
        return get_object_vars($this);
    }

    public function validate(array $inputs){
        if(trim($this->getSku()) == "" || trim($this->getName()) == ""  || trim($inputs['price']) == "" || trim($this->getType()) == ""){
            return "Please, submit required data";
        }
        if(!is_numeric($inputs['price'])){
            return "Please, provide the data of indicated type";
        }
    }
}
