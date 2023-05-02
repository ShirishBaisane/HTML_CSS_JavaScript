// you need the sum of every element in an Array

let nums = [34, 5, 76, 50, 22, 33, 89, 34]
let sum = 0; //acc: accumulator
for(ele of nums){
    sum+=ele;
}
console.log(sum);

// reduce method

let reduceSum = nums.reduce((acc, value) => {
    let updatedSum = acc+value;
    return updatedSum
}, 0);
console.log(reduceSum);

let num = [1,2,3,4,10]
let reducedProduct = num.reduce((acc, value) => {
    let updatedProduct = acc*value;
    return updatedProduct
}, 1)
console.log(reducedProduct);