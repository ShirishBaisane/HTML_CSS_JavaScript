function factorial(num){
    let fact=1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    return fact;
}

console.log('Factorial of 1 is: ', factorial(1));
console.log('Factorial of 2 is: ', factorial(2));
console.log('Factorial of 4 is: ', factorial(4));
console.log('Factorial of 5 is: ', factorial(5));

// Big-O: O(n) -> Linear