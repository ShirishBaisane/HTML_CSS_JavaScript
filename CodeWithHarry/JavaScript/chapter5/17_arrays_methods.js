//Arrays methods

//toString() method
let a = [1,2,3,4,5]
let b = a.toString() //converts array into a string
console.log("Type of a: ", typeof a)
console.log("Type of b: ", typeof b)
console.log(b)
console.log("Length of a: ",a.length)
console.log("Length of b: ",b.length)

//join() method
console.log("join() method")
let c = a.join("_")
console.log("Type of c: ", typeof c)
console.log(c)

//pop() method
console.log("pop() method")
console.log(a)
let popEle = a.pop()
console.log(a, popEle)

//push() method
console.log("push() method")
console.log(a)
a.push(8)
console.log(a)

//shift() method
console.log("shift() method")
console.log(a)
let shiftEle = a.shift()
console.log(a, shiftEle)

//unshift() method
console.log("unshift() method")
console.log(a)
a.unshift(10)
console.log(a)
