// 1. Write a JavaScript program that accept two integers and display the larger.

// const prompt = require("prompt-sync")()

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

for(let i=0; i<=15; i++){
    if(i%2==0){
        console.log(`"${i} is even"`)
    } else {
        console.log(`"${i} is odd"`)
    }
}
