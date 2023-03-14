// 1. Write a JavaScript program that accept two integers and display the larger.

const prompt = require("prompt-sync")()

// let int1 = prompt("Enter value 1: ")
// let int2 = prompt("Enter value 2: ")
// console.log("The value of integer 1 is: ",int1)
// console.log("The value of integer 2 is: ",int2)


/*
  5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
 */

// for(let i=0; i<=15; i++){
//     if(i%2==0){
//         console.log(`"${i} is even"`)
//     } else {
//         console.log(`"${i} is odd"`)
//     }
// }


/**
 * 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
 */
// let sum=0;
// for(let i=1; i<1000; i++){
//     if(i%3==0 | i%5==0){
//         sum += i;
//     }
// }
// console.log("Sum: ",sum)


/**
 * 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
 */

let int1 = prompt("Enter value 1: ")
let int2 = prompt("Enter value 2: ")
let gcd = 1
let smallest 
int1<int2 ? smallest = int1 : smallest=int2;
for(let i=1; i<=smallest; i++){
    if(int1%i==0 && int2%i==0){
        gcd = i;
    }
}
console.log("GCD: ", gcd)