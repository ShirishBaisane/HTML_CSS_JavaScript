<?php

// Print current date
echo date('Y-m-d H:i:s').'<br>';
echo '<br>';

// Print yesterday
echo date('Y-m-d H:i:s', time() - 60*60*24).'<br>';
echo '<br>';

// Different format: https://www.php.net/manual/en/function.date.php
echo date('F j y, H:i:s').'<br>';
echo '<br>';

// Print current timestamp
echo time().'<br>';
echo '<br>';

// Parse date: https://www.php.net/manual/en/function.date-parse.php
$parseDate = date_parse('2020-10-12 09:10:30');
echo '<pre>';
var_dump($parseDate);
echo '</pre>';
echo '<br>';

// Parse date from format: https://www.php.net/manual/en/function.date-parse-from-format.php

$dateString = 'February 4 2020 12:45:35';
$parseDate = date_parse_from_format('F j Y H:i:s', $dateString);
echo '<pre>';
var_dump($parseDate);
echo '</pre>';
echo '<br>';
