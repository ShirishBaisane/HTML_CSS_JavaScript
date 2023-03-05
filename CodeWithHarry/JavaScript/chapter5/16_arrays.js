// Arrays

let a = [1,2,3,4,5]
let marks_class12 = [91,82,76,61,89, null, false, "NA"]
console.log(marks_class12)
console.log(marks_class12[0])
console.log(marks_class12[1])
console.log(marks_class12[2])
console.log(marks_class12[3])
console.log(marks_class12[4])
console.log(marks_class12[5])
console.log(marks_class12[6])
console.log(marks_class12[7])
console.log(marks_class12[8])//undefined
// console.log(marks_class12[17])//undefined

console.log("The length of marks_class12 is: ",marks_class12.length)

marks_class12[8] = 89
console.log(marks_class12[8])
marks_class12[8] = 75
console.log(marks_class12[8])

console.log("Type: ",typeof marks_class12)