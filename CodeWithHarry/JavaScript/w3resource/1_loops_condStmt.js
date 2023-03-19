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

// let int1 = prompt("Enter value 1: ")
// let int2 = prompt("Enter value 2: ")
// let gcd = 1
// let smallest 
// int1<int2 ? smallest = int1 : smallest=int2;
// for(let i=1; i<=smallest; i++){
//     if(int1%i==0 && int2%i==0){
//         gcd = i;
//     }
// }
// console.log("GCD: ", gcd)

/**
 * 10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

*  
* *  
* * *  
* * * *  
* * * * *  

 */
// 1.Right Triangle pattern
let string = "";
for(let i=1; i<6; i++){
  for(let j=0; j<i; j++){
    string += "*"
  }
  string += "\n"
  
}
console.log(string)

// 2.Hollow square pattern
n = 5
let str2 = "";
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(i==0 | i==(n-1)){
      str2 += "*"
    } else {
      if(j==0 | j==(n-1)){
        str2 += "*"
      } else {
        str2 += " "
      }
    }
  }
  str2 += "\n"
}
console.log(str2)

// 3.Right Triangle pattern(reverse)
let str3 = "" 
let n3 = 6
let pointer = 4;
for(i=0; i<n3; i++){
  for(j=0; j<n3; j++){
    if(j<=pointer){
      str3 += " "
    } else{
      str3 += "*"
    }
  }
  pointer--;
  str3 += "\n"
}
console.log(str3)

// 4. Downward star pattern
let str4 = "", n4 = 6, x=5
for(let i=0; i<n; i++){
  for(let j=0; j<n-i; j++){
    str4 += "*"
  }
  str4+="\n"
}
console.log(str4)