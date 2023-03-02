// nn bb ss u => Primitives in JS
let a = null;
let b = 45;
let c = true;//can be false as well.
let d = BigInt("567") + BigInt("3")
let e = "Shirish"
let f = Symbol("I am a nice symbol")
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof c)
console.log(typeof d)
console.log(typeof f)

//Non Primitive Data Type - Objects in JS
const item = {
    "harry":true,
    "Shubh":false,
    "Lovesh": 67,
    "Rohan" : undefined
}
console.log(item["Rohan"])
console.log(item["harry"])
console.log(item.Lovesh)
console.log(item.Rohan)