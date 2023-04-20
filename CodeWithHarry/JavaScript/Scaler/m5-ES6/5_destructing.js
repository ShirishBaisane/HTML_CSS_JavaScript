/*
The destructing assignment syntax is a JS expression
that makes it possible to unpack values from arrays,
or properties from objects, into distanct variables
 */


//Destructing an Array
let arr = ["Green", "Orange", , "Black"]

let a = arr[1]
let b = arr[2]
console.log(a)
console.log(b)
console.log()

let [x, y, c, z, e] = arr
console.log(x)
console.log(y)
console.log(c)//empty object
console.log(z)
console.log(e)
console.log()


//Destructing an Object
let myObj = {
    name : "Shirish",
    age : 27,
    gender : 'M',

    address : {
        country: 'India',
        state : 'Maharashtra'
    }
}

// let {p, q, r} = myObj//cannot pass different keys
let {name : p, age : q, gender : r, address: {country : n}} = myObj
// console.log(name)
// console.log(age)
// console.log(gender)
console.log(p)
console.log(q)
console.log(r)
// console.log(address)
// console.log(country)
console.log(n)