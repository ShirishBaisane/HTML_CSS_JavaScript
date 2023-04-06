<?php

// Function which prints "Hello I am Zura"
function hello(){
    echo "Hello I am Shirish.".'<br>';
}
hello();
echo '<br>';

// Function with argument
function hello1($name){
    echo "Hello $name".'<br>';
}
hello1('Shirish');
echo '<br>';

// Create sum of two functions
function sum($a,$b){
    return $a+$b;
}
echo sum(2,4).'<br>';
echo '<br>';

// Create function to sum all numbers using ...$nums
function sum1(...$nums){
    $sum=0;
    // for($i=0; $i<count($nums); $i++){
    //     $sum += $nums[$i];
    // }
    foreach($nums as $n){
        $sum += $n;
    }
    return $sum;
}
echo 'Sum: '.sum1(2,4,23,7,8,5,12,9).'<br>';
echo '<br>';

// Arrow functions
function sumA(...$nums){
    return array_reduce($nums, fn($sum, $n) => $sum+$n);
}
echo 'SumA: '.sumA(2,4,23,7,8,5,12,9).'<br>';