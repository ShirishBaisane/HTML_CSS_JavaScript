// // Q1
// let age = prompt("Enter your age: ")
// if(age<0){
//     // alert("Invalid age")
//     // Q3
//     console.error("Invalid age")
// } else if(age>0 && age<=18){
//     alert("You cannot drive!!!")
// } else {
//     alert("You can drive!!!")
// }

// //Q2
// let again = confirm("Do you want to enter the age again?")
//     if(again){
//         let age = prompt("Enter your age: ")
//     if(age<0){
//         alert("Invalid age")
//     } else if(age>0 && age<=18){
//         alert("You cannot drive!!!")
//     } else {
//         alert("You can drive!!!")
//     }
// }

// Q4
let num = prompt("Enter a number: ")
if(num>4){
    location.href = "https://www.google.com/"
}
document.write(num)

// Q5
let color = prompt("Enter the background color")
document.body.style.background = color