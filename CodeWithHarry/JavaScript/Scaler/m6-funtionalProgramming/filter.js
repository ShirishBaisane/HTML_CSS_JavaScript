// you have to check for even number in an array and put them in a separate array

let nums = [34, 5, 76, 50, 22, 33, 89, 34]
let evenArr = []
for(num of nums) {
    if(num%2 == 0){
        evenArr.push(num)
    }
}
console.log(evenArr);

// filter method: This method return a new Array that will will match the spicific condition. 

let filterArr = nums.filter((num) => {
    return num%2==0;
})
console.log(filterArr);

const transactions1 = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let depoAmt = transactions1.filter((amt) => { return amt>0})
console.log(depoAmt);