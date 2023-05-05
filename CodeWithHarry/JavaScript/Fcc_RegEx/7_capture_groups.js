// resuse patterns using Capture groups
let repeatStr = "regex regex"
let repeatRegex = /(\w+)\s\1/
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));
console.log();

// match only 3 times
let repeatNum1 = "42 42 42 42"
let repeatNum2 = "42 42 42"
let reRegex = /^(\d+)\s\1\s\1$/
console.log(reRegex.test(repeatNum1));
console.log(repeatNum1.match(reRegex));
console.log(reRegex.test(repeatNum2));
console.log(repeatNum2.match(reRegex));
console.log();

// Use capture groups to search and replace
let worngText = "The sky is silver"
let silverRegex = /silver/
console.log(worngText);
console.log(worngText.replace(silverRegex, "blue"))

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')) //here $2 -> capture_group1 And $1 -> capture_group1

// Example
let huhText = "This sandwich is good."
let fixRegex = /good/
let replaceText = "okey-dokey"
let result = huhText.replace(fixRegex, replaceText)
console.log(result);

// remove whitespaces from the start and end
let hello = "   Hello, World!   "
console.log(hello);

let wsRegex1 = /^(\s*)/
let wsRegex2 = /(\s*)$/
let result1 = hello.replace(wsRegex1, "")
let result2 = result1.replace(wsRegex2, "")
console.log(result1);
console.log(result2);
console.log();

let wsRegex = /^\s+|\s+$/g
let result3 = hello.replace(wsRegex, "")
console.log(result3);

