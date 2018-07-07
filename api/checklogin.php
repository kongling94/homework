<?php

session_start();

$result = array('info'=>array(), 'code' => 200);

$user = isset($_SESSION['user']) ? $_SESSION['user'] : 0;

if($user){
    $result['info'] = $user;
}else{
    $result['code'] = -1;
}
// var_dump($_SESSION['user']);

echo json_encode($result, true);

?>