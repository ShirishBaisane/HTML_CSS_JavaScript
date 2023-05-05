// Find Characters with lazy matching
let string = "titanic"
let regex1 = /t[a-z]*?i/ //Lazy match
let regex2 = /t[a-z]*i/ //Greedy match
console.log(string.match(regex1));
console.log(string.match(regex2));
console.log();

let text = "<h1>Winter is coming</h1>"
let myRegex = /<.*?>/g
let result = text.match(myRegex)
console.log(result);
console.log();

// Find one or more Criminals in a Hunt
let crowd = "P1P2P3P4P5P6CCCP7P8CCP9CP10P11"
let regexCriminals = /C+/g
let matchedCriminals = crowd.match(regexCriminals)
console.log(matchedCriminals);

