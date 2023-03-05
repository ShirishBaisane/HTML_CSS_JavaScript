// String.at() method
let sent1 = "I'm having fun!!!"
let index1=5
console.log(`Using an index of ${index1} the character return is ${sent1.at(index1)}`)
let index2=-4
console.log(`Using an index of ${index2} the character return is ${sent1.at(index2)}`)

// Comparing methods
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'


