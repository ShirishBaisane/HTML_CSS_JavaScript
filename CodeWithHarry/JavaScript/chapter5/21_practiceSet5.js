const prompt = require("prompt-sync")()

//Practice Set 5 - Q1
//Practice Set 5 - Q2
let arr1 = [], num1 
console.log("Enter a number to an Array(or type '0' to stop the entry process).")
while(num1 != 0){
    num1 = prompt("Enter the value: ")
    arr1.push(num1)
    if(num1 == 0){
        arr1.pop()
    }
}
console.log("Array: ", arr1)

//Practice Set 5 - Q3
let arr2 = [20,45,60,30,57,62,70,99,10,33]
const div10 = (value) => {
    if(value%10 == 0){
        return value
    }
}
console.log("Filtered Array: ",arr2.filter(div10))

//Practice Set 5 - Q4
let arr4 = [1,2,3,4,5,6,7]
let sqArr = arr4.map((value) => {
    return value*value
})
console.log("Original Array: ",arr4)
console.log("Squared Array: ",sqArr)

//Practice Set 5 - Q5
// const fact = (value) => {
//     let fact = 1
//     for(let i=1; i<=value; i++){
//         fact = fact*i
//     }
//     console.log(`Factorial of ${value} is ${fact}`)
// }
// let arr5 = [1,2,3,4,5,6,7]
// arr5.forEach((value) => {
//         fact(value)
// })
    
let arr5 = [1,2,3,4,5,6,7]
let fact = arr5.reduce((v1,v2) => {
    return v1*v2
})
console.log("Factorial: ", fact)