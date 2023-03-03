const prompt = require("prompt-sync")();

/*
//Practice Set 2 - Q1
let a = prompt("What is your age?");
a = Number.parseInt(a);
if(a>=10 && a<=20){
    console.log("The age lies in the range 10 to 20.")
}
*/
/*
//Practice Set 2 - Q2
console.log("Fruits list:")
console.log("Mango");
console.log("Grapes");
console.log("Apple");
console.log("Banana");
let b = prompt("Which fruit do you like?");
switch(b){
    case 'Mango' :
        console.log("King of summer.");
        break;
    case 'Grapes':
        console.log("Main ingredient for Wine.");
        break;
    case 'Apple':
    case 'Banana':
        console.log("All season fruit....");
        break;
    default:
        console.log("Invalid option selected");
}
*/
/*
//Practice Set 2 - Q3
let c = prompt("Enter a number: ");
c = Number.parseInt(c);
if(c%2==0 && c%3==0){
    console.log("The number is divisible by 2 and 3 respectively.")
} else{
    console.log("The number is not divisible by 2 and 3 respectively.")
}
*/
/*
//Practice Set 2 - Q4
let d = prompt("Enter a number: ");
d = Number.parseInt(d);
if(d%2==0 || d%3==0){
    console.log("The number is divisible either by 2 or by 3 or by both.")
} else{
    console.log("The number is not divisible by 2 or 3.")
}
*/

//Practice Set 2 - Q4
let age = prompt("What is your age?");
age = Number.parseInt(age);
console.log("You",(age>=18) ? "can Drive!!!" : "cannot drive....")