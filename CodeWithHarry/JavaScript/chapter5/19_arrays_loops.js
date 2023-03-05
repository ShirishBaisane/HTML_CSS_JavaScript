//Array loops

let num = [3,54,1,5,8,56,3]

for(let i=0; i<num.length; i++){
    console.log(num[i])
}

//forEach loop
console.log("forEach loop")
num.forEach((element) => {
    console.log(element*element)
})

//Array.from 
let name = "Shirish"
let arr = Array.from(name)
console.log(name)
console.log(arr)

// for..of loop
for(let i of num){
    console.log(i)
}

// for..in loop
for(let i in num){
    console.log(num[i])
}