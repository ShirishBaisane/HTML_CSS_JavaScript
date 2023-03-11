function recursiveFactorial(n) {
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Big-O: O(n) -> Linear