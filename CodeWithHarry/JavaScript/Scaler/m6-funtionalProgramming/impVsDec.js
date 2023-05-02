// We will be given a number and we have to check that if the square of that number is even or not


// Imperative way of writing code
const a = 6;
let isEven;

if((a*a)%2 == 0) {
    isEven = true;
} else {
    isEven = false;
}

console.log(isEven);

// Declarative way of writing code

const checkForSquareIsEven = (num) => (((num*num)%2 == 0) ? true :  false);

console.log(checkForSquareIsEven(5));
console.log(typeof checkForSquareIsEven);