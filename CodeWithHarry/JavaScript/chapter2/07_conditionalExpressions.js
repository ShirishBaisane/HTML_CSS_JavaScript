const prompt=require("prompt-sync")();
let a = prompt("Hey what is your age?");

// console.log(a)
// console.log(typeof a)
a = Number.parseInt(a); //Converting the String to a number
// console.log(a)
// console.log(typeof a)

/*
if(a>0){
    // alert("This is a valid Age.")
    console.log("This is a valid Age.")
} else {
    console.log("This is an invalid age.")
}
*/

/*
if(a<0){
    console.log("This is an invalid age.")
} else if(a<9) {
    console.log("You are a kid and you cannot even think of driving.")
} else if(a>=9 && a<18) {
    console.log("You are a kid and you can think of driving after 18.")
} else if(a>=18) {
    console.log("You can think of driving.")
}
console.log("Done!!")
*/

/*
//homework
switch(true){
    case (a>0 && a<9):
        console.log("You are a kid and you cannot even think of driving.")
        break;
    case (a>=9 && a<18):
        console.log("You are a kid and you can think of driving after 18.")
        break;
    case (a>=18):
        console.log("You can think of driving.")
        break;
    default:
        console.log("This is an invalid age.");
}
*/

//Ternary Operator
console.log("You",(a>=18 ? "can Drive!!!" : "cannot drive..."))