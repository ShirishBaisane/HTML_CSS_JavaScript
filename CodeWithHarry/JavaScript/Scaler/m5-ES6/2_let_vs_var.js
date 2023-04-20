var a = 20

var a = 35


let b =30 // solution for the declaration problem
b = 45 //re-assigning is allowed
// let b = 50//Identifier 'b' has already been declared

console.log(a)
console.log(b)

console.log()


//variables declared with 'let' keyword are blocked scoped.

if(true){
    let c = 40;//block scoped
    console.log(c);
}
// console.log(c); //Error:  c is not defined

console.log()

//const

const d = 100
// d = 200 //Error: Assignment to constant variable.

console.log(d)