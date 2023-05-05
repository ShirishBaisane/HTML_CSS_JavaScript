// Extract Matches
let extractStr = "Extract the word 'coding' from the string."
let codingRgex = /coding/
let result1 = extractStr.match(codingRgex)
console.log(result1);
console.log();

// Find more than First match
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g; //g-flag will search entire string
console.log(testStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star"
let starRegex = /twinkle/ig;
let result2 = twinkleStar.match(starRegex)
console.log(result2);
console.log();

// match anything with Wildcard Period
let humStr = "I'll hum a song"
let hugStr = "Snow-Bear hug"
let huRegex = /hu./; //'.' is used for remaining word 
console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/
let result3 = unRegex.test(exampleStr)
console.log(result3);
console.log();

// match single character with multiple possibilities
let bgRegex = /b[aiu]g/ // we can search bag, big and bug
let quoteSample= "Beware of bugs in the above code; I have only proved it correctly"
let vowelRegex = /[aeiou]/ig
let result4 = quoteSample.match(vowelRegex)
console.log(result4);
console.log();

// Match letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog."
let alphabetRegex = /[a-z]/ig
let result5 = quoteSample1.match(alphabetRegex)
console.log(result5);
console.log();

// match numbers and letters of the alphabets
let quoteSample2 = "Blueberry 3.1453757667s are delicious."
let myRegex2 = /[2-6h-s]/ig
let result6 = quoteSample2.match(myRegex2)
console.log(result6);
console.log();

// Match Single Characters not specified
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/ig;
let result7 = quoteSample3.match(myRegex3)
console.log(result7);
console.log();

// Match Characters that occur one or more times
let difficultSpelling = "Mississipspisss"
let myRegex4 = /s+/g;
let result8 = difficultSpelling.match(myRegex4)
console.log(result8);
console.log();

// Match Characters that occur zero or more times
let soccerWorld = 'goooooooal!';
let gPhrase = "gut feeling"
let oPhrase = "over the moon"
let goRegex = /go*/
console.log(soccerWorld.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

let chewieQuote = "Aaaaaaaaaaaaaaaaaaaaaaaarrrrgh!"
let chewieRegex = /Aa*r*/
let result9 = chewieQuote.match(chewieRegex)
console.log(result9);