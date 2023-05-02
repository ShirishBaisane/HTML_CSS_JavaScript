
// Impure Function
var a = 10; //external factor
function addImpure(x) {
    console.log(x+a);
    // console.log(a);
    a++
}
addImpure(2)
addImpure(2)
addImpure(2)

console.log();
// Pure Function

function addPure(x, a) {
    // console.log(a+x) //here the function uses External resource 'console' which is out of scope of the function i.e. side effects
    return x+a;
}

// addPure(2,3)
// addPure(2,3)
// addPure(2,3)

console.log(addPure(2,3));
console.log(addPure(2,3));
console.log(addPure(2,3));

