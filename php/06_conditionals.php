<?php

$age = 20;
$salary = 300000;

// Sample if
if($age == 20){
    echo "20";
}
echo '<br>';

// Without circle braces
if($age == 20) echo "20";
echo '<br>';

// Sample if-else
if($age> 20){
    echo "greater than 20";
} else {
    echo 'less than 21';
}
echo '<br>';

// Difference between == and ===
if($age == 20){
    echo "true".'<br>';
}
if($age == '20'){
    echo "true".'<br>';
}
if($age === '20'){
    echo "true".'<br>';
} else {
    echo "false".'<br>';
}
echo '<br>';

// if AND
if($age > 20 && $salary == 300000){
    echo "true".'<br>';
} else {
    echo "false".'<br>';
}

echo '<br>';

// if OR
if($age === '20' || $salary == 300000){
    echo "true".'<br>';
} else {
    echo "false".'<br>';
}

echo '<br>';

// Ternary if
echo ($age == '20') ? "20".'<br>' : "not 20".'<br>';

echo '<br>';

// Short ternary
$num = 0;
$num1 = $num ?: 18;
echo '<pre>';
var_dump($num1);
echo '</pre>';
$num2 = $num1 ?: 18;
echo '<pre>';
var_dump($num1);
echo '</pre>';
echo '<br>';

// Null coalescing operator
$myName1 = isset($name) ? $name : 'Shirish';
$myName2 = $name ?? 'Shirish';
echo "$myName1".'<br>';
echo "$myName2".'<br>';
echo '<br>';

// switch
$userRole = 'editor'; //editor, admin, user
switch($userRole){
    case 'admin':
        echo "This is $userRole".'<br>';
        break;
    
    case 'editor':
        echo "This is $userRole".'<br>';
        break;
    
    case 'user':
        echo "This is $userRole".'<br>';
        break;
    
    default :
        echo "No Match".'<br>';
}