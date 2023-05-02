// Higher Order function

//Fint the square of numbers in an Array
let arr = [1,2,3,4,5]
function sqArr(arr){
    let sqArr = []
    for(num of arr) {
        sqArr.push(num*num)
    }
    return sqArr
}
// console.log(sqArr(arr));

/* map : Map will loop through every element of your array and will perform specific operations that you have provided. Map method will always return you an new Array with your results */

const num = [1,2,3,4,5]

const squaredNum = num.map(function(n){
    return n*n
})
console.log(squaredNum);

// Exercise
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToDollar = 80;

const transactionsDollor = transactions.map((num) => {
    // return Math.floor((num/inrToDollar)*100)/100;
    return (num/inrToDollar).toFixed(2)
})
console.log(transactionsDollor);

// for Each loop
const transactionsDollor1 = transactions.forEach((num) => {
    console.log((num/inrToDollar).toFixed(2))
})
// console.log(transactionsDollor1); //undefined: because forEach does not return an araay