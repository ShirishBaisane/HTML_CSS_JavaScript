<?php

// Create array
$fruits2 = array();
$fruits = ["Banana", "Apple", 'Orange'];

// Print the whole array
var_dump($fruits);
echo '<br>';

echo '<pre>';
var_dump($fruits);
echo '</pre>';
echo '<br>';

// Get element by index
echo $fruits[1].'<br>';

// Set element by index
$fruits[0] = 'Peach';
echo '<pre>';
var_dump($fruits);
echo '</pre>';
echo '<br>';


// Check if array has element at index 2
echo isset($fruits[2]).'<br>';
echo isset($fruits[5]).'<br>';
echo isset($fruits[1]).'<br>';
echo '<br>';

// Append element
$fruits[] = 'Banana';
echo '<pre>';
var_dump($fruits);
echo '<pre>';
echo '<br>';


// Print the length of the array
echo count($fruits).'<br>';
echo '<br>';

// Add element at the end of the array
array_push($fruits, 'foo', 'd', 34);
echo '<pre>';
var_dump($fruits);
echo '<pre>';
echo '<br>';

// Remove element from the end of the array
echo array_pop($fruits).'<br>';
echo array_pop($fruits).'<br>';
echo array_pop($fruits).'<br>';
echo '<pre>';
var_dump($fruits);
echo '<pre>';
echo '<br>';

// Add element at the beginning of the array
array_unshift($fruits, 'bar');
echo '<pre>';
var_dump($fruits);
echo '<pre>';
echo '<br>';

// Remove element from the beginning of the array
echo array_shift($fruits);
echo '<pre>';
var_dump($fruits);
echo '<pre>';
echo '<br>';

// Split the string into an array
$string = "Banana,Apple,Orange";
echo '<pre>';
var_dump(explode(",", $string));
echo '</pre>';
echo '<br>';

// Combine array elements into string
echo implode(" & ", $fruits);
echo '<br>';

// Check if element exist in the array
echo '<pre>';
var_dump(in_array("Apple", $fruits));
echo '<pre>';
echo '<pre>';
var_dump(in_array("Mango", $fruits));
echo '<pre>';
echo '<br>';

// Search element index in the array
echo '<pre>';
var_dump(array_search('Apple', $fruits));
echo '<pre>';
echo '<pre>';
var_dump(array_search('Mango', $fruits));
echo '<pre>';
echo '<br>';

// Merge two arrays
$vegs = ["potato", 'onion', 'garlic'];
echo '<pre>';
var_dump(array_merge($fruits, $vegs));
echo '<pre>';

echo '<pre>';
var_dump([...$fruits, ...$vegs]);
echo '<pre>';
echo '<br>';

// Sorting of array (Reverse order also)
echo "before sorting:";
echo '<pre>';
var_dump($fruits);
echo '<pre>';

sort($fruits);
echo "after sorting:";
echo '<pre>';
var_dump($fruits);
echo '<pre>';

rsort($fruits);
echo "reverse sorting:";
echo '<pre>';
var_dump($fruits);
echo '<pre>';

echo '<br>';
// https://www.php.net/manual/en/ref.array.php

// ============================================
// Associative arrays
// ============================================

// Create an associative array
$person = [
    'name' => 'Shirish',
    'surname' => 'Baisane',
    'age' => 27,
    'hobbies' => ['Cricket', 'Football', 'Guitar']
];
// Get element by key
echo '<pre>';
print_r($person);
echo '<pre>';
echo '<br>';

// Set element by key
echo $person['name'].'<br>';
echo '<br>';

// Null coalescing assignment operator. Since PHP 7.4
$person['channel'] = 'Not any';
echo '<pre>';
var_dump($person);
echo '<pre>';
echo '<br>';

// Check if array has specific key
// if(!isset($person['address'])){
//     $person['address'] = 'unknown';
// }
// echo '<pre>';
// var_dump($person);
// echo '<pre>';
// OR
// $person['address'] = $person['address'] ?? 'unknown';
$person['address'] ??= 'unknown';
echo '<pre>';
var_dump($person);
echo '<pre>';
echo '<br>';

// Print the keys of the array
echo '<pre>';
var_dump(array_keys($person));
echo '<pre>';
echo '<br>';

// Print the values of the array
echo '<pre>';
var_dump(array_values($person));
echo '<pre>';
echo '<br>';

// Sorting associative arrays by values, by keys
echo "sort by keys";
ksort($person);
echo '<pre>';
var_dump($person);
echo '<pre>';

echo "sort by values";
asort($person);
echo '<pre>';
var_dump($person);
echo '<pre>';
echo '<br>';

// Two dimensional arrays

$todo = [
    ['title' => 'Todo list 1', 'completed' => true],
    ['title' => 'Todo list 2', 'completed' => true],
    ['title' => 'Todo list 3', 'completed' => false],
    ['title' => 'Todo list 4', 'completed' => true]
];
echo '<pre>';
var_dump($todo);
echo '<pre>';