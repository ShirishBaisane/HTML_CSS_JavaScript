//Practice Set - 4 - Q1
console.log("har\"".length)

//Practice Set - 4 - Q2
let s1 = "cats are funny!!!"
//includes() method
console.log(s1.includes("cats"))
console.log(s1.includes("at"))
//startswith() method
console.log(s1.startsWith("cat"))
console.log(s1.startsWith("funny"))

console.log(s1.endsWith("funny"))
console.log(s1.endsWith("nny!!!"))

//Practice Set - 4 - Q3
let s2 = 'This is a String Practice Set problems with various ()s'
console.log(s2.toLowerCase())

//Practice Set - 4 - Q4
let s3 = "Please give Rs. 1000"
let amt = s3.slice("Please give Rs. ".length)
console.log(typeof amt)
amt = Number.parseInt(amt)
console.log("Amount: ", amt)
console.log(typeof amt)

//Practice Set - 4 - Q5
s1[0] = 'b'
console.log(s1)
console.log(s1[0])