//String

let Name = "Shirish"
console.log(Name)
console.log(Name.length)
let friend = 'Shubham'
console.log(friend)
// let myfriend = "Shubh' //SyntaxError: Invalid or unexpected token
// console.log(myfriend)
console.log(Name[0])
console.log(Name[1])
console.log(Name[Name.length-2])

//Template literals

let boy1 = "Rohit"
let boy2 = "Akshay"
let sentence1 = `boy1 is a friend of boy2`
console.log(sentence1)
//We want to print 'Rohit is a friend of Akshay'
let sentence2 = `${boy1} is a friend of ${boy2}` //String Interpolation
console.log(sentence2)

//Escape Sequence Characters

// let person = 'Adam D' Angelo' //this will give error because we cannot add single quote inside single quote
let person = 'Adam D\' Angelo' //Escape sequence
console.log(person)
let sent = "He said \"Hello, Good Morning!\" to her"
console.log(sent)
let fruitList = "Available fruits:\nApples\nMango\nGarpes"
console.log(fruitList)
let stuDetails = "Student Details:\nShirish\t08\tB.tech"
console.log(stuDetails)