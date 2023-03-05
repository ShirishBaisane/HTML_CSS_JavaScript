//Arrays methods

//delete() method
let arr = [1,2,3,4,5,6,7]
console.log("Length of arr is: ", arr.length)
console.log(arr)
let d = delete arr[0]
console.log("Length of arr is: ", arr.length)
console.log(arr)
console.log("deleted item: ", d)

//concat() method
let a1 = [1,2,3]
let a2 = [14,25,36]
let a3 = [9,8,7]
let concatArr = a1.concat(a2,a3)
console.log(concatArr)

//sort() methods
console.log("Unsorted Array: ",concatArr)
console.log("Sorted Array: ",concatArr.sort())
console.log("Original Array: ",concatArr)
//to sort() array in decending order we create a compare function
console.log("Decending order:")
let compareD = (a,b)=>{
    return b-a;
}
concatArr.sort(compareD)
console.log(concatArr)
//to sort() array in asecending order we create a compare function
console.log("Asecending order:")
let compareA = (a,b)=>{
    return a-b;
}
concatArr.sort(compareA)
console.log(concatArr)

//reverse() method
console.log(arr)
arr.reverse()
console.log(arr)

//Splice and Slice
console.log("Splice and Slice")
console.log("Splice")

let arr1 = [431,2,63,45,235]
console.log(arr1)
let spliceItems = arr1.splice(1, 2, 11,12,13,14,15)
console.log(arr1)
console.log("Deleted items: ", spliceItems)
console.log("spliceItems type: ",typeof spliceItems)

console.log("Slice")
let arr2 = [431,2,63,45,235, 5,6,7,8,9]
console.log(arr2)
let slice1 = arr2.slice(2)
console.log(slice1)
let slice2 = arr2.slice(2,5)
console.log(slice2)
console.log(arr2)