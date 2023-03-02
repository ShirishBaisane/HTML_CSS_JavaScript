console.log("JavaScript tutorial 3: var, let and const")
// var a = 45;
// console.log(a);
// var a = "p";
// console.log(a)
//note: we dont use 'var' to declare variables because it produces bugs like above where it allows multiple declarations of same variable name.
let b = "Harry"
// let b = 45//throws error
b = 45
const author = "Shirish"
// author = 5 //throws an error because constant cannot be changed
const harry = 0;
let c = null;
let d = undefined
{
    let b = 'this';
    console.log(b);
//Note: 'let' variable is a block-scope where we can use same identifier from outside the block.
}
console.log(b);