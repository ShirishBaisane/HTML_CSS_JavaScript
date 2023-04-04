<?php

// What is a variable

// Variable types
/**
 * String
 * Integer
 * Float/Double
 * Boolean
 * Null
 * Array
 * Object
 * Resource
 */

// Declare variables
$name = "zoro";
$age = 28;
$isMale = true;
$height = 1.85;
$salary = null;

// Print the variables. Explain what is concatenation
echo $name.'<br>';
echo $age.'<br>';
echo $isMale.'<br>';
echo $height.'<br>';
echo $salary.'<br>';

// Print types of the variables
echo gettype($name).'<br>';
echo gettype($age).'<br>';
echo gettype($isMale).'<br>';
echo gettype($height).'<br>';
echo gettype($salary).'<br>';
echo '<br>';

// Print the whole variable
var_dump($name, $age, $isMale, $height, $salary);
echo '<br>';

// Change the value of the variable
$name = false;

// Print type of the variable
echo gettype($name).'<br>';
echo '<br>';

// Variable checking functions
echo is_string($name);
echo '<br>';
echo is_int($age);
echo '<br>';
echo is_bool($isMale);
echo '<br>';
echo is_double($height);
echo '<br>';
echo '<br>';

// Check if variable is defined
echo isset($name).'<br>';
echo isset($address).'<br>';
echo '<br>';

// Constants
define('PI', 3.14);
echo PI.'<br>';
echo '<br>';

// Using PHP built-in constants
echo SORT_ASC.'<br>';
echo PHP_INT_MAX.'<br>';