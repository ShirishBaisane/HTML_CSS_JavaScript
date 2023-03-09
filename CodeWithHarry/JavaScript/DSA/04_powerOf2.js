function isPowerOfTwo(num){
    if(num<1){
        return false;
    }
    while(num > 1){
        if(num%2 != 0){
            return false;
        }
        num /= 2;
    }
    return true;
}
// Big-O: O(log n) ->

//Optimized Solution
function isPowerOfTwoBitwise(num){
    if(num<1){
        return false;
    }
    return (num & (num-1)) === 0;
}
// Big-O: O(1) -> Constant

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
