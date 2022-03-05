<?php
include("AbstractProduct.php");

class Furniture extends Product
{
    private $height;
    private $width;
    private $length;

    public function __construct(array $inputs)
    {
        $this -> height = (float) $inputs['height'];
        $this -> width = (float) $inputs['width'];
        $this -> length = (float) $inputs['length'];
        $special = "Dimension: " . $this -> height . "x" . $this -> width . "x" . $this ->length;
        parent::__construct($inputs['sku'], "Furniture", $inputs['name'], (float) $inputs['price'], $special);
    }

    public function getHeight()
    {
        return $this -> height;
    }

    public function getWidth()
    {
        return $this -> width;
    }

    public function getLength()
    {
        return $this -> length;
    }

    public function validate(array $inputs){
        if(trim($inputs['height']) == "" || trim($inputs['width']) == "" || trim($inputs['length']) == ""){
            return "Please, submit required data";
        }
        if(parent::validate($inputs) != ""){
            return parent::validate($inputs);
        }        
        if(!is_numeric($inputs['height']) || !is_numeric($inputs['width']) || !is_numeric($inputs['length'])){
            return "Please, provide the data of indicated type";
        }
    }
}
