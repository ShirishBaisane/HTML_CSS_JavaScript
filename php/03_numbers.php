<?php

// Declaring numbers
$a = 5;
$b = 4;
$c = 1.2;

// Arithmetic operations
echo $a + $b * $c .'<br>';
echo ($a + $b) *$c .'<br>';
echo $a + $b .'<br>';
echo $a - $b .'<br>';
echo $a / $b .'<br>';
echo $a * $b .'<br>';
echo $a % $b .'<br>';
echo '<br>';

// Assignment with math operators
$a += 3; echo $a.'<br>';
$a -= 3; echo $a.'<br>';
$a *= 3; echo $a.'<br>';
$a /= 3; echo $a.'<br>';
echo '<br>';

// Increment operator
echo $a++.'<br>';
echo ++$a.'<br>';
echo '<br>';

// Decrement operator
echo $a--.'<br>';
echo --$a.'<br>';
echo '<br>';

// Number checking functions
echo is_float($c).'<br>';//true
echo is_double(1.24).'<br>';//true
echo is_int($a).'<br>';//true
is_numeric("3.457").'<br>';//true
is_numeric("3.4gfgfg57").'<br>';//false
echo '<br>';

// Conversion
$strNumber = '12.34';
$float1 = (float)$strNumber;
var_dump($float1);
echo '<br>';
$int1 = (int)$strNumber;
var_dump($int1);
echo '<br>';
$float2 = floatval($strNumber);
var_dump($float2);
echo '<br>';
$int2 = intval($strNumber);
var_dump($int2);
echo '<br>';
echo '<br>';

// Number functions
echo "abs(-15) :".abs(-15).'<br>';
echo "pow(2,3) :".pow(2,3).'<br>';
echo "sqrt(16) :".sqrt(16).'<br>';
echo "max(2,9,5,7) :".max(2,9,5,7).'<br>';
echo "min(2,9,5,7) :".min(2,9,5,7).'<br>';
echo "round(2.4) :".round(2.4).'<br>';
echo "round(2.6) :".round(2.6).'<br>';
echo "floor(2.6) :".floor(2.6).'<br>';
echo "ceil(2.6) :".ceil(2.6).'<br>';
echo '<br>';

// Formatting numbers
$number = 34684326842.12564634;
echo number_format($number, 2, '.', ',');

echo '<br>';

// https://www.php.net/manual/en/ref.math.php
