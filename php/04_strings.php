<?php

// Create simple string
$name = 'Shirish';
$string1 = 'My name is '.$name.'. I am 27 years old.';
$string2 = "My name is $name. I am 27 years old.";
echo $string1.'<br>';
echo $string2.'<br>';

echo '<br>';
// String concatenation
echo 'Hello'.' World'.' and PHP'.'<br>';
echo '<br>';

// String functions
$string = "      Hello World      ";

echo "1 - strlen() :".strlen($string).'<br>';
echo "2 - trim() :".trim($string).'<br>';
echo "3 - ltrim() :".ltrim($string).'<br>';
echo "4 - rtrim() :".rtrim($string).'<br>';
echo "5 - str_word_count() :".str_word_count($string).'<br>';
echo "6 - strrev() :".strrev($string).'<br>';
echo "7 - strtoupper() :".strtoupper($string).'<br>';
echo "8 - strtolower() :".strtolower($string).'<br>';
echo "9 - ucfirst('hello') :".ucfirst('hello').'<br>';
echo "10 - lcfirst('HELLO') :".lcfirst('HELLO').'<br>';
echo "11 - ucwords('hello world') :".ucwords('hello world').'<br>';
echo "12 - strpos($string, 'World') :".strpos($string, 'World').'<br>';
echo "13 - stripos($string, 'world') :".stripos($string, 'world').'<br>';
echo "14 - substr($string, startIndex, length) :".substr($string, 7, 6).'<br>';
echo "15 - str_replace() :".str_replace('world', 'PHP', $string).'<br>';
echo "16 - str_ireplace() :".str_ireplace('world', 'PHP', $string).'<br>';
echo '<br>';

// Multiline text and line breaks
$longText = "
Hello, my name is Shirish.
I am 27,
I love my guitar
";
echo $longText.'<br>';
echo nl2br($longText).'<br>';
echo '<br>';

// Multiline text and reserve html tags
$longText = "
Hello, my name is <b>Shirish</b>.
I am <b>27</b>,
I love my guitar
";
echo "1 -> ".$longText.'<br>';
echo "2 -> ".nl2br($longText).'<br>';
echo "3 -> ".htmlentities($longText).'<br>';
echo "4 -> ".nl2br(htmlentities($longText)).'<br>';
echo "5 -> ".html_entity_decode('my name is &lt;b&gt;Shirish&lt;/b&gt;.');


// https://www.php.net/manual/en/ref.strings.php