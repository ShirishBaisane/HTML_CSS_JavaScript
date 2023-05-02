// find : Find returns the first element of an array that statisfy the condition

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let firstWithdrawnl = transactions.find((amt) => {
    return amt<0;
})
console.log(firstWithdrawnl);

// findIndex: returns the inde of the first element found

let firstWithdrawnlIndex = transactions.findIndex((amt) => {
    return amt<0;
})

console.log(firstWithdrawnlIndex);

