const prompt = require("prompt-sync")();
//Practice Set - 3 - Q1
const obj = {
    harry: 98,
    rohan: 70,
    asskash: 7,
}
for(let i=0; i<Object.keys(obj).length; i++){
    console.log("The marks of "+Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]])
}

//Practice Set - 3 - Q3
let fix = 007
let num = fix
do{
    if(num != fix){
        console.log("try again!!!")
    }
    num = prompt("Enter the number:")
} while(num != fix)
console.log("Correct number entered.")

//Practice Set - 3 - Q2
for(let key in obj){
    console.log("The marks of "+key+" is: "+obj[key])
}

//Practice Set - 3 - Q4
function mean1(n1,n2,n3,n4,n5) {
    return (n1+n2+n3+n4+n5)/5;
}
const mean2 = (n1,n2,n3,n4,n5) =>{
    return (n1+n2+n3+n4+n5)/5;
}

let num1=78, num2=89, num3=67, num4=84, num5=95

console.log("The mean of "+num1+","+num2+","+num3+","+num4+"&"+num5+" is: ", mean1(num1,num2,num3,num4,num5))
console.log("The mean(using arrow function) of "+num1+","+num2+","+num3+","+num4+"&"+num5+" is: ", mean2(num1,num2,num3,num4,num5))