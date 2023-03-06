let arr=[45,23,21]

//Array map()
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value*2
})
console.log(a)

//Array filter()
let arr1=[45,3,23,11,7,31,21]
let a1 = arr1.filter((value) => {
    return value<10
})
console.log(a1)

//Array reduce()
let arr2=[45,3,23,,3,31,45,11,7,31,21]
let a2 = arr2.reduce((v1,v2) => {
    return v1+v2
})
console.log(a2)
const add = (v1,v2) => {
    return v1+v2
}
console.log(arr2.reduce(add))