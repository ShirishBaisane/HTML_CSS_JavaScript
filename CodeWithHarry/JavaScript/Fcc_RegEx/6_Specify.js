// Specify Upper and Lower number of matches
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6} no/
let result1 = ohRegex.test(ohStr)
console.log(result1);
console.log();

// Specify only the lower number of matches
let haStr = "Hazzzzzzzah"
let haRegex = /z{4,}/
let result2 = haRegex.test(haStr)
console.log(result1);
console.log();

// Specify Exact number of matches
let timStr = "Timmmmber"
let timRegex = /Tim{4}ber/
let result3 = timRegex.test(timStr)
console.log(result3);
console.log();

// Check for All or none
let favWord1 = "favorite"
let favWord2 = "favourite"
let favRegex = /favou?rite/
let result4 = favRegex.test(favWord1)
let result5 = favRegex.test(favWord2)
console.log(result4);
console.log(result5);
console.log();

// Positive and Negative Lookahead
let quit = "qu"
let noquit = "qt"
let quRegex = /q(?=u)/
let qtRegex = /q(?!u)/
console.log(quit.match(quRegex));
console.log(noquit.match(qtRegex));
console.log();

// example: password checker
// -> to match 5 or more character and 2 or more digits
let sampleWord1 = "astronaut"
let sampleWord2 = "astrona77ut"
let pwRegex = /(?=\w{5})(?=\D*\d{2})/
let result6 = pwRegex.test(sampleWord1)
let result7 = pwRegex.test(sampleWord2)
console.log(result6);
console.log(result7);