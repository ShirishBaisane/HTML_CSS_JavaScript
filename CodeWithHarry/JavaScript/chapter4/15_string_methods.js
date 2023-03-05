//String methods

let name = "Shirish"
console.log(name)

console.log("Length: "+name.length)

console.log("Uppercase: "+name.toUpperCase())

console.log("Lowwercase: "+name.toLowerCase())

console.log("Slice (in a range): "+name.slice(2,4))

console.log("Slice: "+name.slice(2))

let newName = name.replace("ish", "uuu")
console.log("replaced string: "+newName)

let name1 = "Guddu"
let name2 = name.concat(" A.K.A. ",name1)
console.log(name2)

let string = "    this is  a string       "
console.log(string)
console.log(string.trim())
