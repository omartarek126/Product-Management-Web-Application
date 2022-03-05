<?php

class Dbh
{
    private $host = 'localhost';
    private $user = 'id18417732_scandiroot';
    private $pass = 'osB|*iZ3Z?^f^-I3';
    private $dbName = 'id18417732_scandiweb';

    protected function connect()
    {
        $connect = mysqli_connect($this -> host, $this -> user, $this -> pass, $this -> dbName);
        if (!$connect) {
            die('Connection Failed');
        }
        return $connect;
    }
}
