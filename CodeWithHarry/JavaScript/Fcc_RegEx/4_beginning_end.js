// Match beginning String Patterns
let rickyAndCal = " Cal and Ricky both like racing."
let calRegex = /^Cal/
console.log(calRegex.test(rickyAndCal));

// Match ending String Patterns
let caboose = "The last car on a train is the caboose"
let lastRegex = /caboose$/
let result = lastRegex.test(caboose)
console.log(result);