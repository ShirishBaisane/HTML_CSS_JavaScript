const prompt = require("prompt-sync")();

// QQ-1
/*
//n-Factorial
let num = prompt("Enter the value of n: ")
num = Number.parseInt(num)
let fact=1
for(let i=1; i<=num; i++){
    fact *= i;
}
console.log("The factorial of first "+num+" is "+fact)

//find a sum of numbers between given range
let num1 = prompt("Enter the starting value: ")
num1 = Number.parseInt(num1)
let num2 = prompt("Enter the ending value: ")
num2 = Number.parseInt(num2)
let sum=0
for(let i=num1; i<=num2; i++){
    sum += i;
}
console.log("The sum of the number between "+num1+" and "+num2+" is "+sum);
*/

// QQ-2
const obj = {
    mango: 200,
    apple: 120,
    banana: 50,
    grapes: 180
}
for(let a in obj){
    console.log(a)
    console.log("The price of "+a+" is Rs."+obj[a]+"/kg")
}

// QQ-3
let content="This is the use-case of for-of loop."
for(let b of content){
    console.log(b)
}

// QQ-4
console.log("Great 'Good morning' 5 times.")
let i=0
while(i<5){
    console.log((i+1),"Good morning!!!")
    i++
}

// QQ-5
let pin
do{
    pin = prompt("Enter your pin:")
} while(pin!=1111)
console.log("Correct pin entered")