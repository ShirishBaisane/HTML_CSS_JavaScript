// Match All letters and numbers
let quoteSample = "the five boxing wizards jump quickly."
console.log(quoteSample.length);
let alphabetRegexV2 = /\w/g; //
let result1 = quoteSample.match(alphabetRegexV2);
console.log(result1);
console.log(result1.length);
console.log();

// Match Everything but letters and numbers
let nonAlphabetRegexV2 = /\W/g;
let result2 = quoteSample.match(nonAlphabetRegexV2).length;
console.log(result2);
console.log();

// Match all Numbers
let numString = "Your sandwich will be $5.00"
let numRegex = /\d/g
let result3 = numString.match(numRegex)
console.log(result3);
console.log(result3.length);
console.log();

// Match all non-numbers
let noNumRegex = /\D/g
let result4 = numString.match(noNumRegex)
console.log(result4);
console.log(result4.length);
console.log();

// Restrict possible usernames
/**
 * If there are numbers, they must be at the end.
 * Letters cab be lowercase and uppercase.
 * At least two characters long.
 * 2-letter names can't have numbers.
 */
let username1 = "JackOfAllTrades"
let username2 = "Jack007"
let username3 = "J7"
let userCheck = /^[A-Za-z]{2,}\d*$/
let result11 = userCheck.test(username1)
let result12 = userCheck.test(username2)
let result13 = userCheck.test(username3)
console.log(result11);
console.log(result12);
console.log(result13);
console.log();

// Match Whitespace
let sample = "Whitespaces is important is separating words"
let countWhiteSpace = /\s/g;
let result5 = sample.match(countWhiteSpace)
console.log(result5);

// Match Non-whitespace characters
let countNonWhiteSpace = /\S/g
let result6 = sample.match(countNonWhiteSpace)
console.log(result6);