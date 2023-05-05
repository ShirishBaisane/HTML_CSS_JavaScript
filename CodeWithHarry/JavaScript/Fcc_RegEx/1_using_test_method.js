// Using the test method
let sentence = "The dog chased the cat."
let regex = /the/
console.log(regex.test(sentence))
console.log();

// Match Literal String
let myString = "Hello World!"
let myRegex = /Hello/
let result = myRegex.test(myString)
console.log(result);
console.log();

// Match a Literal String with different possibilities
let petString = "James has a pet cat."
let petRegex = /dog|cat|bird|fish/
let petResult = petRegex.test(petString)
console.log(petResult);
console.log();

// Ignore case while matching
let myString1 = "freeCodeCamp"
let fccRegex = /freecodecamp/i; //ignore case flag
let fccResult = fccRegex.test(myString1)
console.log(fccResult);
console.log();

