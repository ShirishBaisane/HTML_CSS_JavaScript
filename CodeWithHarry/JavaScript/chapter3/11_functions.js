greet(); //Hoisting

//funtion

function avg(x,y){
    return (x+y)/2;
}

//arrow-function
const sum = (x,y)=>{
    return x+y;
}
const hello = ()=>{
    console.log("Lets practice funtions.")
}


let a=10;
let b=22;
let c=45;
hello();
console.log("Average of a and b is", (a+b)/2)
console.log("Average of b and c is", (b+c)/2)
console.log("Average of a and c is", (a+c)/2)
console.log("Average of a and b using funtion is", avg(a,b))
console.log("Average of b and c using funtion is", avg(b,c))
console.log("Average of a and c using funtion is", avg(a,c))

console.log("Sum of 523423 and 344543 is: ", sum(523423,344543))

function greet(){
    console.log("Hello programmer")
}