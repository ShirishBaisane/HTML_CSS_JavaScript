// some method:
// condition check: to get true or false (boolean value) based on condition
// it will return true if 1 or more that 1 element statisfies the condition

const transactions1 = [-1000, -3000, -4000, -2000, -898, 3800, -4500];

let resultSome = transactions1.some((ele) => {
    return ele>0;
})
console.log(resultSome);



// every method:
// condition check: to get true or false (boolean value) based on condition
// it will return true if every element statisfies the condition

const transactions2 = [-1000, -3000, -4000, -2000, -898, -3800, -4500];

let resultEvery = transactions2.every((ele) => {
    return ele<0;
})
console.log(resultEvery);