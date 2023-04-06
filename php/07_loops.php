<?php

// while
// while(true){

// }
// Loop with $counter
$counter1 = 0;
while($counter1 <10){
    echo $counter1.'<br>';
    // if($counter === 5){
        //     break;
        // }
        $counter1++;
    }
echo '<br>';

// do - while
$counter2 = 0;
do{
    $counter2++;
    echo $counter2.'<br>';
}while($counter2 <10);
echo '<br>';

// for
for($i=0; $i<=10; $i++){
    echo $i.'<br>';
}
echo '<br>';

// foreach
$fruits = ['Banana','Apple','Orange'];
forEach($fruits as $item){
    echo $item.'<br>';
}
echo '<br>';
forEach($fruits as $i => $item){
    echo $i.'->'. $item.'<br>';
}
echo '<br>';

// Iterate Over associative array.
$person = [
    'name' => 'Shirish',
    'age' => 27,
    'hobbies' => ['Cricket', 'Football', 'Guitar']
];
foreach($person as $key => $value){
    if(is_array($value)){
        echo $key.': '.implode(",",$value).'<br>';
    } else {
        echo $key.': '.$value.'<br>';
    }
}