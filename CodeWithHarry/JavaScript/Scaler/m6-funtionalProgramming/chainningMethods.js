let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
]

// Age of all Men(Males)
let males = arr.filter((obj) => { return obj.gender=="M"})
console.log(males);
let malesAge = males.map((obj) => {
    return obj.age
})
console.log(malesAge);

let malesAge1 = arr.filter((obj) => {return obj.gender=="M"}).map((obj) => { return obj.age});
console.log(malesAge1);

// Exercise
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let sumDepo = transactions.filter((amt) => {return amt>0}).reduce((acc, value) => {let total = acc+value; return total}, 0)
console.log(sumDepo);