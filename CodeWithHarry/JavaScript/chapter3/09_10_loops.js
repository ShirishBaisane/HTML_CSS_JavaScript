const prompt = require("prompt-sync")();

/*
//for loop
for(let i=0; i<12; i++){
    console.log(i)
}


// Program to add first 'n' numbers
let sum=0
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)
for(let i=1; i<=n; i++){
    sum += i;
    // console.log(i,"+")
}
console.log("The sum of first "+n+" natural numbers is "+sum)
*/
/*
//for-in loop
let obj = {
    harry: 90,
    rohit: 78,
    shirish: 80,
    akshay: 72,
    pratik: 49
}
for(let a in obj){
    console.log(a)
    console.log("Marks of "+a+" is "+obj[a])
}

//for-of loop
for(let b of "Shirish"){
    console.log(b)
}
*/

//while loop
let n = prompt("Enter the value of n:")
n = Number.parseInt(n)
let i=0
while(i<n){
    console.log(i)
    i++
}
//do-while loop
let n1 = prompt("Enter the value of n1:")
n = Number.parseInt(n)
let i1=0
do{
    console.log(i1)
    i1++
} while(i1<n1);
